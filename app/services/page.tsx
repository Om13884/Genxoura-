"use client"

import { CheckCircle2, ArrowRight, Mail, BarChart3, Zap, Globe, FileText } from "lucide-react"
import { motion } from "framer-motion"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { ContactModal } from "@/components/contact-modal"

// Metadata moved to layout or handled via next/head

const services = [
  {
    id: "email-sheets",
    title: "Email → Google Sheets Logging",
    overview:
      "Automatically capture and log emails into a structured Google Sheet for lead capture, support logging, and compliance tracking.",
    features: [
      "Automatic email parsing and extraction",
      "Custom field mapping to Google Sheets",
      "Support for multiple email accounts",
      "Real-time logging with timestamps",
      "Filtering and categorization rules",
    ],
    useCases: [
      "Lead capture from contact forms and inquiries",
      "Support ticket logging and tracking",
      "Compliance and audit trail maintenance",
      "Customer communication history",
    ],
    sampleInput: "Incoming email with contact information",
    sampleOutput: "Structured row in Google Sheet with: Name, Email, Subject, Date, Body",
    technicalNotes:
      "Deliverables: n8n workflow JSON, Google Sheets template, service account setup guide, test plan. Uses Gmail API and Google Sheets API.",
    icon: Mail,
  },
  {
    id: "api-sheets",
    title: "API Polling → Google Sheets / Dashboard",
    overview:
      "Fetch live data from APIs and automatically update Google Sheets or build lightweight dashboards for market prices, sensors, and analytics.",
    features: [
      "Scheduled API polling (configurable intervals)",
      "Data transformation and normalization",
      "Error handling and retry logic",
      "Dashboard visualization options",
      "Historical data tracking",
    ],
    useCases: [
      "Market price tracking (crypto, stocks, commodities)",
      "IoT sensor data logging",
      "Social media analytics aggregation",
      "Weather data collection",
    ],
    sampleInput: "API endpoint returning JSON data",
    sampleOutput: "Updated Google Sheet row with timestamped data points",
    technicalNotes:
      "Deliverables: n8n workflow with HTTP Request nodes, sheet mapping configuration, error handling setup, monitoring dashboard. Supports REST APIs, webhooks, and scheduled triggers.",
    icon: BarChart3,
  },
  {
    id: "form-sheet-email",
    title: "Form → Sheet → Email Alert",
    overview:
      "Capture leads from web forms, store them in Google Sheets, and send instant email notifications to your team.",
    features: [
      "Multi-form support (Google Forms, web forms, API)",
      "Instant email notifications with form data",
      "Duplicate detection and deduplication",
      "Custom email templates",
      "Lead scoring and qualification",
    ],
    useCases: [
      "Lead capture from website contact forms",
      "Event registration and confirmation",
      "Newsletter signup processing",
      "Customer feedback collection",
    ],
    sampleInput: "Form submission with name, email, message",
    sampleOutput: "Sheet entry + email alert to sales team with lead details",
    technicalNotes:
      "Deliverables: n8n workflow, webhook URL, Google Sheets template, email template, SMTP configuration guide. Supports webhook triggers and form integrations.",
    icon: Zap,
  },
  {
    id: "ai-summarizer",
    title: "AI Summarizer + Sentiment Analysis",
    overview:
      "Convert long text into concise insights with sentiment flags. Webhook → AI → Sheet pipeline for automated content processing.",
    features: [
      "Multi-model AI support (OpenRouter compatible)",
      "Customizable summarization prompts",
      "Sentiment analysis (positive/negative/neutral)",
      "Batch processing capabilities",
      "Safety filters and content moderation",
    ],
    useCases: [
      "Customer review summarization",
      "Long-form content digest",
      "Email thread summarization",
      "Social media sentiment tracking",
    ],
    sampleInput: "Long text document or email thread",
    sampleOutput: "Summary + sentiment score in Google Sheet",
    technicalNotes:
      "Deliverables: n8n workflow with AI node, OpenRouter API integration, example prompts, safety guidelines, sheet output format. Configurable via .env (OPENROUTER_API_KEY).",
    icon: Zap,
  },
  {
    id: "website-dev",
    title: "Website Development",
    overview:
      "End-to-end modern websites with CMS integration, SEO optimization, and Vercel deployment. Full-stack solutions built with Next.js.",
    features: [
      "Next.js with TypeScript and App Router",
      "CMS integration (optional: Prisma + PostgreSQL or Supabase)",
      "SEO optimization with meta tags and structured data",
      "Responsive design with Tailwind CSS",
      "Vercel deployment and CI/CD setup",
    ],
    useCases: [
      "Business website with blog",
      "E-commerce platform",
      "SaaS landing pages",
      "Portfolio websites",
    ],
    sampleInput: "Design mockups and content requirements",
    sampleOutput: "Fully functional website deployed on Vercel",
    technicalNotes:
      "Deliverables: Complete codebase, deployment guide, environment setup, documentation. Includes database schema (if applicable), API routes, and admin panel.",
    icon: Globe,
  },
  {
    id: "portfolio-creation",
    title: "Portfolio Creation Services",
    overview:
      "Developer portfolios that match Parth-Mittal-like layouts. Resume-to-portfolio conversion with modern design and animations.",
    features: [
      "Resume parsing and content extraction",
      "Modern, responsive portfolio layouts",
      "Interactive animations and transitions",
      "Project showcase with case studies",
      "Contact form and social links integration",
    ],
    useCases: [
      "Developer portfolio website",
      "Designer portfolio",
      "Freelancer showcase",
      "Resume-to-portfolio conversion",
    ],
    sampleInput: "Resume PDF or structured data",
    sampleOutput: "Beautiful portfolio website with all sections",
    technicalNotes:
      "Deliverables: Portfolio website, source code, deployment setup, custom domain configuration. Includes GitHub integration, project cards, and contact forms.",
    icon: FileText,
  },
]

export default function ServicesPage() {
  return (
    <div className="pt-20 pb-20">
      {/* Header */}
      <section className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto"
        >
          <h1 className="text-4xl sm:text-5xl font-bold mb-6">Our Services</h1>
          <p className="text-lg text-muted-foreground">
            Complete automation and web development solutions tailored to your
            business needs
          </p>
        </motion.div>
      </section>

      {/* Services List */}
      <section className="container mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        {services.map((service, index) => (
          <motion.div
            key={service.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            className="border-b border-border pb-16 last:border-b-0"
          >
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              <div className="lg:col-span-1">
                <service.icon className="h-12 w-12 text-primary mb-4" />
                <h2 className="text-3xl font-bold mb-4">{service.title}</h2>
                <p className="text-muted-foreground">{service.overview}</p>
              </div>
              <div className="lg:col-span-2 space-y-6">
                <div>
                  <h3 className="text-lg font-semibold mb-3">Features</h3>
                  <ul className="space-y-2">
                    {service.features.map((feature) => (
                      <li key={feature} className="flex items-start gap-2">
                        <CheckCircle2 className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                        <span className="text-muted-foreground">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-3">Use Cases</h3>
                  <ul className="space-y-2">
                    {service.useCases.map((useCase) => (
                      <li key={useCase} className="flex items-start gap-2">
                        <span className="text-primary">•</span>
                        <span className="text-muted-foreground">{useCase}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <h4 className="text-sm font-semibold mb-2">Sample Input</h4>
                    <p className="text-sm text-muted-foreground bg-muted p-3 rounded">
                      {service.sampleInput}
                    </p>
                  </div>
                  <div>
                    <h4 className="text-sm font-semibold mb-2">Sample Output</h4>
                    <p className="text-sm text-muted-foreground bg-muted p-3 rounded">
                      {service.sampleOutput}
                    </p>
                  </div>
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-3">Technical Notes</h3>
                  <p className="text-sm text-muted-foreground bg-muted p-4 rounded">
                    {service.technicalNotes}
                  </p>
                </div>
                <div className="flex gap-4">
                  <ContactModal prefilledService={service.title}>
                    <Button variant="gradient">
                      Request Demo
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </ContactModal>
                </div>
                {/* Screenshot Placeholders */}
                <div className="grid grid-cols-3 gap-4 mt-6">
                  {[1, 2, 3].map((i) => (
                    <div
                      key={i}
                      className="h-32 bg-muted rounded-lg flex items-center justify-center"
                    >
                      <span className="text-xs text-muted-foreground">
                        Screenshot {i}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </section>

      {/* Integration Notes */}
      <section className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 mt-16 bg-muted/30 rounded-lg">
        <h2 className="text-2xl font-bold mb-6">Technical Integration Notes</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Card>
            <CardHeader>
              <CardTitle>n8n Setup</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">
                All workflows are delivered as JSON files that can be imported
                directly into n8n. Webhook URLs follow the pattern:
                <code className="block mt-2 p-2 bg-background rounded">
                  {process.env.NEXT_PUBLIC_N8N_WEBHOOK_BASE || "https://your-n8n-instance.com"}/webhook/[workflow-id]
                </code>
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Google Sheets</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">
                Setup requires either a Service Account (for server-side) or
                OAuth 2.0 (for user-specific sheets). We provide step-by-step
                instructions and code snippets for both methods.
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>OpenRouter / LLM Config</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">
                AI services use OpenRouter API for model access. Configure via
                .env: <code>OPENROUTER_API_KEY</code>. Base URL:
                https://openrouter.ai/api/v1
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>SMTP / Gmail</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">
                Email alerts use SMTP. For Gmail, create an App Password:
                Settings → Security → 2-Step Verification → App Passwords.
                Configure host, port, user, and password in .env.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  )
}

