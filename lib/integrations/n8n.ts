/**
 * n8n Webhook Integration
 */

export interface N8NWebhookPayload {
  [key: string]: any
}

/**
 * Send data to an n8n webhook using full webhook URL
 */
export async function sendToN8NWebhook(
  webhookUrl: string | undefined,
  payload: N8NWebhookPayload
): Promise<Response> {
  if (!webhookUrl) {
    const error = "n8n webhook URL is not configured"
    console.error("[n8n] ERROR:", error)
    throw new Error(error)
  }

  console.log(`[n8n] === WEBHOOK REQUEST ===`)
  console.log(`[n8n] URL: ${webhookUrl}`)
  console.log(`[n8n] Payload keys:`, Object.keys(payload))
  console.log(`[n8n] ========================`)

  try {
    const response = await fetch(webhookUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(payload),
    })

    console.log(`[n8n] Response status: ${response.status} ${response.statusText}`)

    if (!response.ok) {
      const text = await response.text().catch(() => "(no response body)")
      console.error(`[n8n] Error response body:`, text)
      throw new Error(
        `n8n webhook error (${response.status}): ${
          text || response.statusText
        }`
      )
    }

    console.log(`[n8n] ✓ SUCCESS - webhook accepted`)
    return response
  } catch (err) {
    console.error(`[n8n] ✗ FETCH ERROR:`, err)
    throw err
  }
}
