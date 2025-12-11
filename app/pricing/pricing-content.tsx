"use client"

import { useMemo, useState } from "react"
import { useSearchParams } from "next/navigation"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import * as z from "zod"
import { motion } from "framer-motion"
import { Check, ArrowRight, Loader2 } from "lucide-react"

import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { useToast } from "@/components/ui/use-toast"

const pricingFormSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Invalid email address"),
  service: z.string().min(1),
  category: z.enum(["automation", "web"]),
  requirements: z.string().min(10, "Please describe your requirements"),
  packageId: z.string().min(1, "Please select a package"),
  addOns: z.array(z.string()).default([]),
  acceptPricing: z
    .boolean()
    .refine((val) => val === true, {
      message: "You must accept the pricing to proceed",
    }),
})

type PricingFormValues = z.infer<typeof pricingFormSchema>

const automationPackages = [
  {
    id: "auto-starter",
    name: "Automation Starter",
    tier: "Basic Workflows",
    price: "Starts at $200",
    description: "For simple email / WhatsApp / n8n workflows",
    features: [
      "1–2 automation workflows",
      "Email / Sheet integration",
      "Basic testing & documentation",
      "60-day support",
    ],
  },
  {
    id: "auto-pro",
    name: "Automation Pro",
    tier: "Advanced Workflows",
    price: "Starts at $450",
    description: "For multi-step workflows with API integrations",
    features: [
      "3–5 workflows",
      "API / Webhook integrations",
      "AI / LLM integration (via OpenRouter)",
      "Advanced testing & logging",
      "90-day support",
    ],
  },
  {
    id: "auto-enterprise",
    name: "Automation Enterprise",
    tier: "Full Solution",
    price: "Starts at $950+",
    description: "For complex, mission-critical automation",
    features: [
      "6+ custom workflows",
      "Multiple integrations (API, Webhooks, Databases)",
      "AI/ML features with cost optimization",
      "Monitoring & error handling dashboard",
      "6-month support + optimization",
    ],
  },
]

const webPackages = [
  {
    id: "web-landing",
    name: "Landing Page",
    tier: "Startup",
    price: "$300–$600",
    description: "Perfect for launching quickly",
    features: [
      "5–8 page site",
      "Mobile responsive",
      "Contact form + webhook",
      "SEO optimization",
      "Vercel deployment",
    ],
  },
  {
    id: "web-business",
    name: "Business Site",
    tier: "Growth",
    price: "$600–$1,800",
    description: "For growing businesses",
    features: [
      "10–15 pages",
      "Blog section",
      "CMS integration (Prisma + PostgreSQL)",
      "Advanced forms (pricing calculator, booking)",
      "Email integration",
      "Custom branding & animations",
    ],
  },
  {
    id: "web-ecommerce",
    name: "E-Commerce Platform",
    tier: "Scale",
    price: "$1,800–$6,000+",
    description: "Full e-commerce solution",
    features: [
      "Product catalog with filters",
      "Payment gateway (Stripe)",
      "Shopping cart & checkout",
      "User authentication & profiles",
      "Order management dashboard",
      "Analytics & reporting",
    ],
  },
]

export function PricingContent({
  forceCategory,
}: {
  forceCategory?: "automation" | "web"
}) {
  const searchParams = useSearchParams()
  const { toast } = useToast()
  const [isSubmitting, setIsSubmitting] = useState(false)

  const initialName = searchParams.get("name") ?? ""
  const initialEmail = searchParams.get("email") ?? ""
  const rawService = (searchParams.get("service") ?? "").toLowerCase()
  const leadId = searchParams.get("leadId") ?? null

  const category: "automation" | "web" = useMemo(() => {
    if (forceCategory) return forceCategory
    if (
      rawService.includes("web") ||
      rawService.includes("site") ||
      rawService.includes("development")
    ) {
      return "web"
    }
    return "automation"
  }, [rawService, forceCategory])

  const packages = category === "automation" ? automationPackages : webPackages

  const form = useForm<PricingFormValues>({
    resolver: zodResolver(pricingFormSchema),
    defaultValues: {
      name: initialName,
      email: initialEmail,
      service: rawService,
      category,
      requirements: "",
      packageId: "",
      addOns: [],
      acceptPricing: false,
    },
  })

  const onSubmit = async (values: PricingFormValues) => {
    setIsSubmitting(true)
    try {
      const response = await fetch("/api/pricing", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...values,
          leadId,
          timestamp: new Date().toISOString(),
        }),
      })

      if (response.ok) {
        toast({
          title: "Success!",
          description: "We'll contact you shortly to confirm the details.",
        })
        form.reset()
      } else {
        toast({
          title: "Error",
          description: "Failed to submit. Please try again.",
          variant: "destructive",
        })
      }
    } catch (error) {
      toast({
        title: "Error",
        description: "Network error. Please try again.",
        variant: "destructive",
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <div className="space-y-12">
      {/* Pricing Table */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {packages.map((pkg, idx) => (
          <motion.div
            key={pkg.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: idx * 0.1 }}
          >
            <Card
              className={`h-full relative ${
                idx === 1
                  ? "border-2 border-gradient-to-r from-blue-500 to-purple-500 shadow-lg"
                  : "border-gray-700"
              }`}
            >
              {idx === 1 && (
                <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                  <span className="bg-gradient-to-r from-blue-500 to-purple-500 text-white px-3 py-1 rounded-full text-xs font-semibold">
                    MOST POPULAR
                  </span>
                </div>
              )}
              <CardHeader>
                <CardTitle className="text-2xl">{pkg.name}</CardTitle>
                <CardDescription className="text-base">{pkg.tier}</CardDescription>
                <div className="mt-4">
                  <div className="text-3xl font-bold ">{pkg.price}</div>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-gray-300 text-sm">{pkg.description}</p>
                <ul className="space-y-2">
                  {pkg.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-2">
                      <Check className="h-4 w-4 mt-0.5 flex-shrink-0 text-green-400" />
                      <span className="text-sm text-gray-300">{feature}</span>
                    </li>
                  ))}
                </ul>
                <Button
                  onClick={() => form.setValue("packageId", pkg.id)}
                  className="w-full mt-6"
                  variant={form.watch("packageId") === pkg.id ? "default" : "outline"}
                >
                  {form.watch("packageId") === pkg.id ? "Selected ✓" : "Select Package"}
                </Button>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>

      {/* Selection Form */}
      <Card className="border-gray-700">
        <CardHeader>
          <CardTitle>Confirm Your Selection</CardTitle>
          <CardDescription>
            Fill in your details and we'll send you a detailed proposal
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <Label htmlFor="name">Full Name</Label>
                <Input
                  id="name"
                  placeholder="John Doe"
                  {...form.register("name")}
                  className="mt-2"
                />
                {form.formState.errors.name && (
                  <p className="text-red-500 text-sm mt-1">{form.formState.errors.name.message}</p>
                )}
              </div>

              <div>
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="john@example.com"
                  {...form.register("email")}
                  className="mt-2"
                />
                {form.formState.errors.email && (
                  <p className="text-red-500 text-sm mt-1">{form.formState.errors.email.message}</p>
                )}
              </div>
            </div>

            <div>
              <Label htmlFor="requirements">Project Requirements</Label>
              <Textarea
                id="requirements"
                placeholder="Describe what you need..."
                {...form.register("requirements")}
                className="mt-2"
                rows={4}
              />
              {form.formState.errors.requirements && (
                <p className="text-red-500 text-sm mt-1">
                  {form.formState.errors.requirements.message}
                </p>
              )}
            </div>

            <div className="flex items-center gap-2">
              <input
                type="checkbox"
                id="accept"
                {...form.register("acceptPricing")}
                className="h-4 w-4"
              />
              <Label htmlFor="accept" className="cursor-pointer">
                I agree to the pricing and terms
              </Label>
            </div>
            {form.formState.errors.acceptPricing && (
              <p className="text-red-500 text-sm">{form.formState.errors.acceptPricing.message}</p>
            )}

            <Button type="submit" size="lg" className="w-full" disabled={isSubmitting}>
              {isSubmitting ? (
                <>
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                  Submitting...
                </>
              ) : (
                <>
                  Continue <ArrowRight className="ml-2 h-4 w-4" />
                </>
              )}
            </Button>
          </form>
        </CardContent>
      </Card>
    </div>
  )
}
