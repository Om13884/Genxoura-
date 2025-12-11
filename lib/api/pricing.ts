import { sendToN8NWebhook } from "@/lib/integrations/n8n"

export async function submitPricingForm(data: any) {
  const webhookUrl = process.env.N8N_PRICING_WEBHOOK
  if (!webhookUrl) {
    throw new Error("N8N_PRICING_WEBHOOK environment variable is not set")
  }

  await sendToN8NWebhook(webhookUrl, {
    ...data,
    formId: data.formId ?? "pricing_selection_v1",
    timestamp: new Date().toISOString(),
  })

  return { success: true }
}
