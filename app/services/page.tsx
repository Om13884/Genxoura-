"use client"

import { CheckCircle2, ArrowRight, Mail, BarChart3, Zap, Globe, FileText } from "lucide-react"
import { motion } from "framer-motion"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { ContactModal } from "@/components/contact-modal"
import { HeroBackground } from "@/components/hero-background"

// Metadata moved to layout or handled via next/head

export const services = [
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
    <div className="pb-20">
      <HeroBackground minHeight="min-h-[50vh]">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-3xl mx-auto"
          >
            <h1 className="text-4xl sm:text-5xl font-bold mb-6 text-white">
              Our Services
            </h1>
            <p className="text-lg text-gray-200 mb-8">
              Explore Automation/API Services or Web Development Services
            </p>
            <div className="flex justify-center gap-6 mt-10">
              <a href="/services/api-services">
                <Button size="lg" variant="gradient">Automation/API Services</Button>
              </a>
              <a href="/services/web-services">
                <Button size="lg" variant="gradient">Web Development Services</Button>
              </a>
            </div>
          </motion.div>
        </div>
      </HeroBackground>
    </div>
  );
}

