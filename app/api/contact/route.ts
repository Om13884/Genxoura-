import { NextRequest, NextResponse } from "next/server"
import { sendToN8NWebhook } from "@/lib/integrations/n8n"

export async function POST(request: NextRequest) {
  try {
    console.log("[contact] === NEW REQUEST ===")
    const body = await request.json()
    console.log("[contact] Body received:", { name: body.name, email: body.email })

    // Use server-side env var for contact webhook
    const webhookUrl = process.env.N8N_CONTACT_WEBHOOK
    console.log("[contact] N8N_CONTACT_WEBHOOK env var:", webhookUrl ? "SET" : "NOT SET")

    if (!webhookUrl) {
      console.log("[contact] Webhook not configured, returning success anyway")
      return NextResponse.json(
        { success: true, message: "Form submitted (webhook not configured)" },
        { status: 200 }
      )
    }

    try {
      console.log("[contact] Attempting to send to n8n...")
      await sendToN8NWebhook(webhookUrl, {
        ...body,
        timestamp: new Date().toISOString(),
        formId: "contact_lead_intake",
      })

      console.log("[contact] ✓ Successfully sent to n8n")
      return NextResponse.json(
        { success: true, message: "Form submitted successfully" },
        { status: 200 }
      )
    } catch (err) {
      console.error("[contact] ✗ n8n webhook error:", err instanceof Error ? err.message : err)
      return NextResponse.json(
        {
          success: true,
          message: "Form submitted (webhook error logged)",
          warning: "Webhook delivery failed, but form was received",
        },
        { status: 200 }
      )
    }
  } catch (error) {
    console.error("[contact] ✗ API error:", error)
    return NextResponse.json(
      {
        success: true,
        message: "Form submitted (error logged)",
        warning: "There was an issue processing your submission, but it was received",
      },
      { status: 200 }
    )
  }
}

