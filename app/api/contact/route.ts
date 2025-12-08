import { NextRequest, NextResponse } from "next/server"
import { sendToN8NWebhook, N8N_WEBHOOK_ENDPOINTS } from "@/lib/integrations/n8n"

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()

    const webhookBase = process.env.NEXT_PUBLIC_N8N_WEBHOOK_BASE

    if (!webhookBase) {
      console.log("Contact form submission (no webhook configured):", body)
      return NextResponse.json(
        { success: true, message: "Form submitted (webhook not configured)" },
        { status: 200 }
      )
    }

    try {
      await sendToN8NWebhook(N8N_WEBHOOK_ENDPOINTS.contact, {
        ...body,
        timestamp: new Date().toISOString(),
      })

      return NextResponse.json(
        { success: true, message: "Form submitted successfully" },
        { status: 200 }
      )
    } catch (err) {
      // Log detailed error server-side for debugging
      console.error("n8n webhook delivery error:", err)

      // Keep UX friendly: confirm receipt but warn about delivery
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
    console.error("Contact form API error:", error)
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

