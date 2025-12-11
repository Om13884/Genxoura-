"use client"

import Link from "next/link"
import Image from "next/image"
import { ArrowRight, CheckCircle2, Zap, BarChart3, Mail } from "lucide-react"
import { motion } from "framer-motion"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { ContactModal } from "@/components/contact-modal"

const services = [
  {
    title: "Email automation",
    description: "Automate incoming emails: parse, route, and log leads.",
    icon: Mail,
  },
  {
    title: "WhatsApp automation",
    description: "Automated messaging for notifications and follow-ups.",
    icon: BarChart3,
  },
  {
    title: "CRM setup",
    description: "Configure customer relationship systems for your team.",
    icon: Zap,
  },
  {
    title: "Customer feedback form",
    description: "Collect, analyze, and act on customer insights.",
    icon: Zap,
  },
  {
    title: "Invoice automation",
    description: "Automate billing and invoice workflows.",
    icon: Zap,
  },
  {
    title: "Landing page + funnel",
    description: "Capture visitors and run conversion funnels.",
    icon: Zap,
  },
  {
    title: "Custom n8n workflows",
    description: "Bespoke automation tailored to your needs.",
    icon: Zap,
  },
  {
    title: "Website development",
    description: "Modern, responsive websites with CMS and SEO.",
    icon: Zap,
  },
  {
    title: "Portfolio creation",
    description: "Developer portfolios that convert and impress.",
    icon: Zap,
  },
]

const steps = [
  {
    title: "Setup",
    description: "We configure your automation workflow and integrations.",
  },
  {
    title: "Automate",
    description: "Your pipeline runs automatically without manual intervention.",
  },
  {
    title: "Monitor",
    description: "Track performance and get alerts when needed.",
  },
]

export default function HomePage() {
  const featuredIds = [
    "email-logger",
    "api-poller",
    "ai-summarizer",
    "website-1",
  ]
  // import projects data dynamically from the local projects data file
  // keep a simple selection of 3 automation + 1 web project
  // Note: the projectsData file is located at app/projects/projects-data.ts
  // eslint-disable-next-line
  const { projectsData } = require("./projects/projects-data") as { projectsData: any[] }
  const featured = projectsData.filter((p) => featuredIds.includes(p.id))
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "GenXora",
    description:
      "Full-stack web & AI automation. We build websites and automation pipelines that run themselves.",
    url: "https://genxora.com",
    logo: "https://genxora.com/assets/logo.svg",
    contactPoint: {
      "@type": "ContactPoint",
      telephone: "+91-9972734513",
      contactType: "customer service",
      email: "genxora11@gmail.com",
    },
    sameAs: [
      "https://linkedin.com/company/genxora",
      "https://twitter.com/genxora",
      "https://github.com/genxora",
    ],
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Hero Background with Parallax */}
        <div className="absolute inset-0 hero-parallax">
          <div className="absolute inset-0 bg-gradient-to-br from-brand-navy via-brand-electric to-brand-cyan opacity-90" />
          <div
            className="absolute inset-0 bg-cover bg-center opacity-20"
            style={{
              backgroundImage: "url('/assets/hero-bg-4k.png')",
              transform: "scale(1.1)",
            }}
          />
          {/* Floating Glass Cards Effect */}
          <div className="absolute inset-0">
            {[1, 2, 3, 4].map((i) => (
              <motion.div
                key={i}
                className="absolute glass-card rounded-2xl"
                style={{
                  width: `${100 + i * 50}px`,
                  height: `${150 + i * 30}px`,
                  left: `${10 + i * 20}%`,
                  top: `${20 + i * 15}%`,
                }}
                animate={{
                  y: [0, -20, 0],
                  rotate: [0, 5, 0],
                }}
                transition={{
                  duration: 4 + i,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              />
            ))}
          </div>
        </div>

        {/* Hero Content */}
        <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 bg-gradient-to-r from-white via-brand-cyan to-white bg-clip-text text-transparent">
              GenXora — Full-Stack Web & AI Automation
            </h1>
            <p className="text-lg sm:text-xl text-gray-200 mb-8 max-w-3xl mx-auto">
              We build websites and automation pipelines that run themselves —
              n8n workflows, AI summarizers, API pipelines, and lead systems.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <ContactModal>
                <Button size="lg" variant="gradient" className="group">
                  Get Started
                  <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </Button>
              </ContactModal>
              <Link href="/services">
                <Button size="lg" variant="outline" className="bg-white/10 backdrop-blur border-white/20 text-white hover:bg-white/20">
                  View Services
                </Button>
              </Link>
            </div>
            <p className="mt-6 text-sm text-gray-300">
              Live demos available — screen-recorded workflows.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Social Proof */}
      <section className="py-8 bg-muted/50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-center text-sm text-muted-foreground mb-4">
            Deployed solutions:
          </p>
          <div className="flex flex-wrap justify-center gap-6 text-sm text-muted-foreground">
            <span>Email logging</span>
            <span>•</span>
            <span>API pipelines</span>
            <span>•</span>
            <span>Form automation</span>
            <span>•</span>
            <span>AI summarizers</span>
          </div>
        </div>
      </section>

      {/* Services Preview */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">Our Services</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              End-to-end automation solutions for your business needs
            </p>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Card className="h-full hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <service.icon className="h-8 w-8 text-primary mb-2" />
                    <CardTitle className="text-xl">{service.title}</CardTitle>
                    <CardDescription>{service.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <Link href="/services">
                      <Button variant="ghost" size="sm" className="w-full">
                        See Case Study <ArrowRight className="ml-2 h-4 w-4" />
                      </Button>
                    </Link>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">How It Works</h2>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {steps.map((step, index) => (
              <motion.div
                key={step.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className="text-center"
              >
                <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-primary">{index + 1}</span>
                </div>
                <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
                <p className="text-muted-foreground">{step.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Projects Preview */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">Featured Projects</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Real-world automation solutions we've built
            </p>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {featured.map((project, idx) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
              >
                <Card className="overflow-hidden hover:shadow-lg transition-shadow">
                  <div className="relative h-48 bg-muted overflow-hidden">
                    {project.image ? (
                      <Image src={project.image} alt={project.title} fill className="object-cover" />
                    ) : (
                      <div className="h-48 flex items-center justify-center">
                        <span className="text-muted-foreground">No image</span>
                      </div>
                    )}
                  </div>
                  <CardHeader>
                    <CardTitle>{project.title}</CardTitle>
                    <CardDescription className="truncate max-w-full">
                      {project.problem ?? project.solution ?? project.implementation?.[0]}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <Link href="/projects">
                      <Button variant="outline" size="sm" className="w-full">
                        View Details
                      </Button>
                    </Link>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer CTA */}
      <section className="py-16 bg-gradient-to-r from-brand-electric to-brand-cyan text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Automate?</h2>
          <p className="text-lg mb-8 opacity-90">
            Book a free 15-min consultation or send an email to{" "}
            <a
              href="mailto:genxora11@gmail.com"
              className="underline hover:opacity-80"
            >
              genxora11@gmail.com
            </a>
          </p>
          <ContactModal>
            <Button size="lg" variant="secondary">
              Book Free Consultation
            </Button>
          </ContactModal>
        </div>
      </section>
    </>
  )
}
