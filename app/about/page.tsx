"use client"

import { CheckCircle2, Calendar, Code, Rocket, HeadphonesIcon } from "lucide-react"
import { motion } from "framer-motion"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { HeroBackground } from "@/components/hero-background"

// Metadata moved to layout or handled via next/head

const processSteps = [
  {
    title: "Discovery",
    description: "We understand your needs, analyze requirements, and design the solution architecture.",
    icon: Calendar,
  },
  {
    title: "Build",
    description: "Development of automation workflows, integrations, and custom code as needed.",
    icon: Code,
  },
  {
    title: "Test",
    description: "Thorough testing with real data, error handling validation, and performance checks.",
    icon: CheckCircle2,
  },
  {
    title: "Deploy",
    description: "Setup and deployment of workflows, configuration, and documentation handover.",
    icon: Rocket,
  },
  {
    title: "Support",
    description: "Ongoing support, monitoring, and optimization to ensure smooth operations.",
    icon: HeadphonesIcon,
  },
]

export default function AboutPage() {
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
              About GenXora
            </h1>
            <p className="text-lg text-gray-200">
              Building reliable automations and modern websites
            </p>
          </motion.div>
        </div>
      </HeroBackground>

      {/* Mission */}
      <section className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mx-auto"
        >
          <h2 className="text-3xl font-bold mb-6">Our Mission</h2>
          <div className="space-y-4 text-muted-foreground">
            <p>
              GenXora builds reliable automations and modern websites that help
              businesses operate more efficiently. We specialize in creating
              automation pipelines that run themselves — from email logging and
              API integrations to AI-powered summarization and lead capture
              systems.
            </p>
            <p>
              Our approach combines cutting-edge tools like n8n for workflow
              automation, modern web frameworks like Next.js for website
              development, and AI services for intelligent data processing. We
              believe in delivering solutions that are not just functional, but
              also maintainable, scalable, and well-documented.
            </p>
            <p>
              Whether you need a simple email-to-sheet automation or a complete
              full-stack web application, we work closely with you to understand
              your requirements and deliver solutions that exceed expectations.
            </p>
          </div>
        </motion.div>
      </section>

      {/* Team */}
      <section className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold mb-6">Our Team</h2>
        </motion.div>
        <div className="max-w-2xl mx-auto">
          <Card>
            <CardHeader>
              <div className="flex items-center gap-4">
                <div className="w-20 h-20 rounded-full bg-gradient-to-br from-brand-electric to-brand-cyan flex items-center justify-center">
                  <span className="text-2xl font-bold text-white">O</span>
                </div>
                <div>
                  <CardTitle>Om</CardTitle>
                  <CardDescription>Founder & Lead Developer</CardDescription>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                Om is the founder of GenXora with expertise in full-stack web
                development, automation engineering, and AI integration. With
                experience building scalable automation solutions and modern web
                applications, Om leads the technical development and client
                engagement efforts.
              </p>
              <div className="mt-4 flex gap-4 text-sm text-muted-foreground">
                <span>Email: genxora11@gmail.com</span>
                <span>•</span>
                <span>Phone: +91 9972734513</span>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Process */}
      <section className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold mb-6">Our Process</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            A structured approach to delivering automation and web solutions
          </p>
        </motion.div>
        <div className="grid grid-cols-1 md:grid-cols-5 gap-6">
          {processSteps.map((step, index) => (
            <motion.div
              key={step.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <Card className="h-full text-center">
                <CardHeader>
                  <step.icon className="h-10 w-10 text-primary mx-auto mb-4" />
                  <CardTitle className="text-lg">{step.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">
                    {step.description}
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Testimonials Placeholder */}
      <section className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold mb-6">What Clients Say</h2>
        </motion.div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {[1, 2, 3].map((i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
            >
              <Card className="h-full">
                <CardContent className="pt-6">
                  <p className="text-muted-foreground mb-4">
                    "Testimonial placeholder text. Client feedback will be added
                    here."
                  </p>
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-muted" />
                    <div>
                      <p className="font-semibold text-sm">Client Name</p>
                      <p className="text-xs text-muted-foreground">Company</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  )
}

