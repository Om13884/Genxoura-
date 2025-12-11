import { sendToN8NWebhook } from "@/lib/integrations/n8n"

export interface ContactSubmission {
  name: string
  email: string
  phone: string
  company?: string
  website?: string
  services: string[]
  description: string
  budgetRange?: string
  timeline?: string
  source?: string
  formId?: string
  leadId?: string
}

export async function submitContactForm(data: ContactSubmission) {
  try {
    const webhookUrl = process.env.N8N_CONTACT_WEBHOOK
    if (!webhookUrl) {
      throw new Error("N8N_CONTACT_WEBHOOK environment variable is not set")
    }

    await sendToN8NWebhook(webhookUrl, {
      ...data,
      formId: data.formId ?? "lead_intake_v1",
      timestamp: new Date().toISOString(),
    })

    return { success: true }
  } catch (error) {
    console.error("Contact form submission error:", error)
    throw error
  }
}
