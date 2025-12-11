import { NextRequest, NextResponse } from "next/server"
import { sendToN8NWebhook } from "@/lib/integrations/n8n"

export async function POST(request: NextRequest) {
  try {
    console.log("[pricing] === NEW REQUEST ===")
    const body = await request.json()

    // Validate required fields
    if (!body.name || !body.email || !body.packageId) {
      return NextResponse.json(
        { message: "Missing required fields: name, email, packageId" },
        { status: 400 }
      )
    }

    console.log("[pricing] Selection received:", {
      timestamp: new Date().toISOString(),
      name: body.name,
      email: body.email,
      packageId: body.packageId,
      leadId: body.leadId,
    })

    // Use server-side env var for pricing webhook
    const webhookUrl = process.env.N8N_PRICING_WEBHOOK
    console.log("[pricing] N8N_PRICING_WEBHOOK env var:", webhookUrl ? "SET" : "NOT SET")

    if (webhookUrl) {
      try {
        console.log("[pricing] Attempting to send to n8n...")
        await sendToN8NWebhook(webhookUrl, {
          ...body,
          formId: "pricing_selection_v1",
          timestamp: new Date().toISOString(),
        })
        console.log("[pricing] ✓ Successfully sent to n8n")
      } catch (err) {
        console.error("[pricing] ✗ n8n webhook error:", err instanceof Error ? err.message : err)
        // Don't fail the user request if webhook fails
      }
    } else {
      console.log("[pricing] Webhook not configured (N8N_PRICING_WEBHOOK missing)")
    }

    return NextResponse.json(
      {
        success: true,
        message: "Pricing selection received. We'll contact you shortly to confirm details.",
        leadId: body.leadId,
      },
      { status: 200 }
    )
  } catch (error) {
    console.error("[pricing] ✗ API error:", error)
    return NextResponse.json(
      {
        success: false,
        message: "Failed to process pricing selection. Please try again.",
      },
      { status: 500 }
    )
  }
}
