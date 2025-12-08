"use client"

import * as React from "react"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import * as z from "zod"
import { Loader2 } from "lucide-react"

import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog"
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
  phone: z.string().regex(/^[\d\s\-\+\(\)]+$/, "Please enter a valid phone number").min(7, "Phone number must be at least 7 characters"),
  company: z.string().optional(),
  services: z.array(z.string()).min(1, "Please select at least one service"),
  description: z.string().min(10, "Please provide more details"),
})

type ContactFormValues = z.infer<typeof contactFormSchema>

interface ContactModalProps {
  children: React.ReactNode
  prefilledService?: string
}

const services = [
  "Email → Google Sheets Logging",
  "API Polling → Sheets",
  "Form → Sheet → Email Alert",
  "AI Summarization",
  "Website Development",
  "Portfolio Creation",
]

export function ContactModal({ children, prefilledService }: ContactModalProps) {
  const [open, setOpen] = React.useState(false)
  const [isSubmitting, setIsSubmitting] = React.useState(false)
  const { toast } = useToast()

  const form = useForm<ContactFormValues>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      company: "",
      services: prefilledService ? [prefilledService] : [],
      description: "",
    },
  })

  const onSubmit = async (data: ContactFormValues) => {
    setIsSubmitting(true)
    try {
      // Send to Next.js API route (which proxies to n8n - no CORS issues)
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      })

      const result = await response.json()

      if (!response.ok) {
        throw new Error(result.message || "Failed to send message")
      }

      // Log for development
      console.log("Contact form submission:", data)

      toast({
        title: "Message sent!",
        description: result.warning 
          ? `${result.message}. ${result.warning}`
          : "We'll get back to you within 24 hours.",
      })

      form.reset()
      setOpen(false)
    } catch (error) {
      console.error("Contact form error:", error)
      toast({
        title: "Error",
        description: error instanceof Error 
          ? error.message 
          : "Failed to send message. Please try again.",
        variant: "destructive",
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>{children}</DialogTrigger>
      <DialogContent className="sm:max-w-[600px]">
        <DialogHeader>
          <DialogTitle>Get Started</DialogTitle>
          <DialogDescription>
            Tell us about your project and we'll get back to you within 24 hours.
          </DialogDescription>
        </DialogHeader>
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
              <Label htmlFor="phone">Phone Number *</Label>
              <Input
                id="phone"
                type="tel"
                {...form.register("phone")}
                placeholder="+1 (555) 123-4567"
              />
              {form.formState.errors.phone && (
                <p className="text-sm text-destructive">
                  {form.formState.errors.phone.message}
                </p>
              )}
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="email">Email *</Label>
              <Input
                id="email"
                type="email"
                {...form.register("email")}
                placeholder="john@example.com"
              />
              {form.formState.errors.email && (
                <p className="text-sm text-destructive">
                  {form.formState.errors.email.message}
                </p>
              )}
            </div>
            <div className="space-y-2">
              <Label htmlFor="company">Company (optional)</Label>
              <Input
                id="company"
                {...form.register("company")}
                placeholder="Acme Inc."
              />
            </div>
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
              placeholder="Tell us about your automation needs..."
              rows={4}
            />
            {form.formState.errors.description && (
              <p className="text-sm text-destructive">
                {form.formState.errors.description.message}
              </p>
            )}
          </div>
          <div className="flex justify-end gap-2">
            <Button
              type="button"
              variant="outline"
              onClick={() => setOpen(false)}
            >
              Cancel
            </Button>
            <Button type="submit" variant="gradient" disabled={isSubmitting}>
              {isSubmitting && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
              Send Message
            </Button>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  )
}

