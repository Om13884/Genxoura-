"use client"

import { Check, ArrowRight } from "lucide-react"
import { motion } from "framer-motion"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { ContactModal } from "@/components/contact-modal"
import { HeroBackground } from "@/components/hero-background"

// Metadata moved to layout or handled via next/head

const packages = [
  {
    name: "Starter",
    tier: "Basic",
    price: "Starting at $299",
    description: "Perfect for small workflows and simple automations",
    features: [
      "Single automation workflow",
      "n8n workflow JSON file",
      "Google Sheets template",
      "Basic documentation",
      "Email support (48h response)",
      "1 revision included",
      "Delivery: 3-5 business days",
    ],
    popular: false,
  },
  {
    name: "Advanced",
    tier: "Multi-step + AI",
    price: "Starting at $799",
    description: "For complex workflows with multiple integrations and AI",
    features: [
      "Multi-step automation workflow",
      "AI integration (OpenRouter)",
      "n8n workflow + configuration",
      "Google Sheets + dashboard setup",
      "Custom email templates",
      "Priority support (24h response)",
      "2 revisions included",
      "Source code access",
      "Delivery: 5-7 business days",
    ],
    popular: true,
  },
  {
    name: "Enterprise",
    tier: "End-to-end System",
    price: "Custom Pricing",
    description: "Complete system with documentation and source code",
    features: [
      "Full automation system",
      "Multiple workflows",
      "Complete documentation",
      "Source code repository",
      "Database setup (if needed)",
      "Dedicated support channel",
      "Unlimited revisions (within scope)",
      "Training session included",
      "Delivery: 10-14 business days",
      "Ongoing maintenance options",
    ],
    popular: false,
  },
]

const addOns = [
  { name: "Faster Delivery", description: "Rush delivery (50% faster)", price: "+$100" },
  { name: "Additional Revisions", description: "Extra revision rounds", price: "+$50/revision" },
  { name: "CRM Integration", description: "Connect to HubSpot, Salesforce, etc.", price: "+$200" },
  { name: "Custom Authentication", description: "User auth and permissions", price: "+$300" },
  { name: "Source Code Access", description: "Full codebase delivery", price: "+$150" },
]

export default function PricingPage() {
  return (
    <div className="pb-20">
      {/* Header with Hero Background */}
      <HeroBackground minHeight="min-h-[50vh]">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-3xl mx-auto"
          >
            <h1 className="text-4xl sm:text-5xl font-bold mb-6 text-white">
              Pricing
            </h1>
            <p className="text-lg text-gray-200">
              Starter, Advanced, Enterprise — pick the plan that suits your scope.
              Custom offers available.
            </p>
          </motion.div>
        </div>
      </HeroBackground>

      {/* Packages */}
      <section className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {packages.map((pkg, index) => (
            <motion.div
              key={pkg.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <Card
                className={`h-full relative ${
                  pkg.popular
                    ? "border-primary shadow-lg scale-105"
                    : ""
                }`}
              >
                {pkg.popular && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                    <span className="bg-primary text-primary-foreground px-4 py-1 rounded-full text-sm font-semibold">
                      Most Popular
                    </span>
                  </div>
                )}
                <CardHeader>
                  <CardTitle className="text-2xl">{pkg.name}</CardTitle>
                  <CardDescription className="text-sm font-medium">
                    {pkg.tier}
                  </CardDescription>
                  <div className="mt-4">
                    <span className="text-3xl font-bold">{pkg.price}</span>
                  </div>
                  <p className="text-sm text-muted-foreground mt-2">
                    {pkg.description}
                  </p>
                </CardHeader>
                <CardContent className="space-y-4">
                  <ul className="space-y-3">
                    {pkg.features.map((feature) => (
                      <li key={feature} className="flex items-start gap-2">
                        <Check className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                        <span className="text-sm text-muted-foreground">
                          {feature}
                        </span>
                      </li>
                    ))}
                  </ul>
                  <ContactModal>
                    <Button
                      variant={pkg.popular ? "gradient" : "outline"}
                      className="w-full mt-6"
                    >
                      Start Project
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </ContactModal>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Add-ons */}
      <section className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-8"
        >
          <h2 className="text-3xl font-bold mb-4">Optional Add-ons</h2>
          <p className="text-muted-foreground">
            Enhance your package with these additional services
          </p>
        </motion.div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {addOns.map((addOn, index) => (
            <motion.div
              key={addOn.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.05 }}
            >
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">{addOn.name}</CardTitle>
                  <CardDescription>{addOn.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-2xl font-bold text-primary">{addOn.price}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center bg-muted/30 rounded-lg p-12"
        >
          <h2 className="text-3xl font-bold mb-4">Need a Custom Solution?</h2>
          <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
            We can create a tailored package for your specific needs. Get in
            touch to discuss your requirements.
          </p>
          <ContactModal>
            <Button size="lg" variant="gradient">
              Contact Us
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </ContactModal>
        </motion.div>
      </section>
    </div>
  )
}

