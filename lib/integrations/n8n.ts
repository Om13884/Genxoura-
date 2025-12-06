/**
 * n8n Webhook Integration
 * 
 * This module provides utilities for interacting with n8n webhooks.
 * Configure via environment variable: NEXT_PUBLIC_N8N_WEBHOOK_BASE
 */

export interface N8NWebhookPayload {
  [key: string]: any
}

/**
 * Send data to an n8n webhook
 */
export async function sendToN8NWebhook(
  webhookPath: string,
  payload: N8NWebhookPayload
): Promise<Response> {
  const baseUrl = process.env.NEXT_PUBLIC_N8N_WEBHOOK_BASE

  if (!baseUrl) {
    throw new Error("NEXT_PUBLIC_N8N_WEBHOOK_BASE is not configured")
  }

  const url = `${baseUrl}${webhookPath.startsWith("/") ? webhookPath : `/${webhookPath}`}`

  const response = await fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(payload),
  })

  if (!response.ok) {
    throw new Error(`n8n webhook error: ${response.statusText}`)
  }

  return response
}

/**
 * Example webhook endpoints (documented in README)
 */
export const N8N_WEBHOOK_ENDPOINTS = {
  contact: "/webhook/contact",
  emailLogger: "/webhook/email-logger",
  formSubmission: "/webhook/form-submission",
  aiSummarizer: "/webhook/ai-summarizer",
} as const

