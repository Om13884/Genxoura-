"use client"

import * as React from "react"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import * as z from "zod"
import { Loader2 } from "lucide-react"
import { useRouter } from "next/navigation"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { useToast } from "@/components/ui/use-toast"

const contactFormSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Invalid email address"),
  company: z.string().optional(),
  services: z.array(z.string()).min(1, "Please select at least one service"),
  description: z.string().min(10, "Please provide more details"),
  budgetRange: z.string().optional(),
  timeline: z.string().optional(),
  source: z.string().optional(),
})

type ContactFormValues = z.infer<typeof contactFormSchema>

const services = [
  "Email Automation",
  "WhatsApp Automation",
  "CRM Setup",
  "Landing Page + Funnel",
  "Custom n8n Workflow",
  "Other",
]

const budgetRanges = [
  "₹10k – ₹25k",
  "₹25k – ₹50k",
  "₹50k – ₹1L",
  "Above ₹1L",
  "Not sure yet",
]

const timelines = [
  "Within 1 week",
  "Within 2–3 weeks",
  "Within 1–2 months",
  "No strict deadline",
]

const sources = [
  "YouTube",
  "LinkedIn",
  "Instagram",
  "Referral",
  "Other",
]

export function ContactForm() {
  const [isSubmitting, setIsSubmitting] = React.useState(false)
  const { toast } = useToast()
  const router = useRouter() // ✅ यहीं होना चाहिए

  const form = useForm<ContactFormValues>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: {
      name: "",
      email: "",
      company: "",
      services: [],
      description: "",
      budgetRange: "",
      timeline: "",
      source: "",
    },
  })

  const onSubmit = async (data: ContactFormValues) => {
    setIsSubmitting(true)
    try {
      // leadId optional है – future में काम आएगा
      const leadId = crypto.randomUUID()

      const payload = {
        ...data,
        formId: "lead_intake_v1",
        leadId,
      }

      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      })

      const result = await response.json()

      if (!response.ok) {
        throw new Error(result.message || "Failed to send message")
      }

      console.log("Contact form submission (Lead Intake):", payload)

      toast({
        title: "Details submitted!",
        description:
          result.warning ??
          "Next step: choose your plan & confirm details.",
      })

      // 👉 यही main चीज़: pricing page पर redirect
      const primaryService = data.services[0]

      router.push(
        `/pricing?name=${encodeURIComponent(
          data.name
        )}&email=${encodeURIComponent(
          data.email
        )}&service=${encodeURIComponent(
          primaryService
        )}&leadId=${encodeURIComponent(leadId)}`
      )
    } catch (error) {
      console.error("Contact form error:", error)
      toast({
        title: "Error",
        description:
          error instanceof Error
            ? error.message
            : "Failed to send message. Please try again.",
        variant: "destructive",
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
      <div className="grid grid-cols-2 gap-4">
        <div className="space-y-2">
          <Label htmlFor="name">Name *</Label>
          <Input
            id="name"
            {...form.register("name")}
            placeholder="John Doe"
          />
          {form.formState.errors.name && (
            <p className="text-sm text-destructive">
              {form.formState.errors.name.message}
            </p>
          )}
        </div>
        <div className="space-y-2">
          <Label htmlFor="email">Email *</Label>
          <Input
            id="email"
            type="email"
            {...form.register("email")}
            placeholder="you@company.com"
          />
          {form.formState.errors.email && (
            <p className="text-sm text-destructive">
              {form.formState.errors.email.message}
            </p>
          )}
        </div>
      </div>

      <div className="grid grid-cols-2 gap-4">
        <div className="space-y-2">
          <Label htmlFor="company">Company (optional)</Label>
          <Input
            id="company"
            {...form.register("company")}
            placeholder="Your brand / company"
          />
        </div>
        <div />
      </div>

      

      <div className="space-y-2">
        <Label htmlFor="services">Services Required *</Label>
        <Select
          onValueChange={(value) => {
            const current = form.getValues("services")
            if (!current.includes(value)) {
              form.setValue("services", [...current, value])
            }
          }}
        >
          <SelectTrigger>
            <SelectValue placeholder="Select services" />
          </SelectTrigger>
          <SelectContent>
            {services.map((service) => (
              <SelectItem key={service} value={service}>
                {service}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
        {form.watch("services").length > 0 && (
          <div className="flex flex-wrap gap-2 mt-2">
            {form.watch("services").map((service) => (
              <span
                key={service}
                className="inline-flex items-center gap-1 px-2 py-1 text-xs bg-primary/10 text-primary rounded-md"
              >
                {service}
                <button
                  type="button"
                  onClick={() => {
                    const current = form.getValues("services")
                    form.setValue(
                      "services",
                      current.filter((s) => s !== service)
                    )
                  }}
                  className="hover:text-destructive"
                >
                  ×
                </button>
              </span>
            ))}
          </div>
        )}
        {form.formState.errors.services && (
          <p className="text-sm text-destructive">
            {form.formState.errors.services.message}
          </p>
        )}
      </div>

      <div className="space-y-2">
        <Label htmlFor="description">Project Description *</Label>
        <Textarea
          id="description"
          {...form.register("description")}
          placeholder="Briefly describe what you want to automate / build..."
          rows={4}
        />
        {form.formState.errors.description && (
          <p className="text-sm text-destructive">
            {form.formState.errors.description.message}
          </p>
        )}
      </div>

      <div className="grid grid-cols-3 gap-4">
        <div className="space-y-2">
          <Label>Budget (optional)</Label>
          <Select
            onValueChange={(value) => form.setValue("budgetRange", value)}
          >
            <SelectTrigger>
              <SelectValue placeholder="Select budget" />
            </SelectTrigger>
            <SelectContent>
              {budgetRanges.map((range) => (
                <SelectItem key={range} value={range}>
                  {range}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>

        <div className="space-y-2">
          <Label>Timeline (optional)</Label>
          <Select
            onValueChange={(value) => form.setValue("timeline", value)}
          >
            <SelectTrigger>
              <SelectValue placeholder="Select timeline" />
            </SelectTrigger>
            <SelectContent>
              {timelines.map((t) => (
                <SelectItem key={t} value={t}>
                  {t}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>

        <div className="space-y-2">
          <Label>How did you find me? (optional)</Label>
          <Select onValueChange={(value) => form.setValue("source", value)}>
            <SelectTrigger>
              <SelectValue placeholder="Select source" />
            </SelectTrigger>
            <SelectContent>
              {sources.map((s) => (
                <SelectItem key={s} value={s}>
                  {s}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
      </div>

      <Button
        type="submit"
        variant="gradient"
        className="w-full"
        disabled={isSubmitting}
      >
        {isSubmitting && (
          <Loader2 className="mr-2 h-4 w-4 animate-spin" />
        )}
        Submit Details
      </Button>
    </form>
  )
}
