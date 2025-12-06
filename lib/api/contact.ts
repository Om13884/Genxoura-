/**
 * Contact API Route Handler
 * 
 * This can be used as a server action or API route handler
 * for processing contact form submissions.
 */

import { sendToN8NWebhook, N8N_WEBHOOK_ENDPOINTS } from "@/lib/integrations/n8n"

export interface ContactSubmission {
  name: string
  email: string
  company?: string
  services: string[]
  description: string
}

export async function submitContactForm(data: ContactSubmission) {
  try {
    // Send to n8n webhook if configured
    if (process.env.NEXT_PUBLIC_N8N_WEBHOOK_BASE) {
      await sendToN8NWebhook(N8N_WEBHOOK_ENDPOINTS.contact, {
        ...data,
        timestamp: new Date().toISOString(),
      })
    }

    // Optionally save to database (if using Prisma)
    // const submission = await prisma.contactSubmission.create({ data })

    return { success: true }
  } catch (error) {
    console.error("Contact form submission error:", error)
    throw error
  }
}

