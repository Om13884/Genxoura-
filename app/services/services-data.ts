import { Mail, BarChart3, Zap, Globe, FileText, LucideIcon } from "lucide-react"

interface Service {
  id: string
  title: string
  image: string
  overview: string
  features: string[]
  useCases: string[]
  sampleInput: string
  sampleOutput: string
  technicalNotes: string
  icon: LucideIcon
}

export const servicesData: Service[] = [
  {
    id: "email-sheets",
    title: "Email automation",
    image: "/images/services/automation/Email automation.png",
    overview:
      "Automate incoming emails: parse, route, and log leads; trigger notifications or follow-ups via n8n.",
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
    id: "whatsapp-automation",
    title: "WhatsApp automation",
    image: "/images/services/automation/WhatsApp automation.png",
    overview:
      "Automate WhatsApp messaging workflows: send notifications, confirm leads, and run conversational automations via n8n integrations.",
    features: [
      "Scheduled or event-triggered messaging",
      "Message templating and personalization",
      "Response parsing and follow-up workflows",
      "Delivery and error monitoring",
      "Multi-language support",
    ],
    useCases: [
      "Lead confirmation and follow-up",
      "Appointment reminders and updates",
      "Customer support automation",
      "Marketing campaign delivery",
    ],
    sampleInput: "Lead data or webhook trigger",
    sampleOutput: "WhatsApp message delivered with response tracking",
    technicalNotes:
      "Deliverables: n8n workflow with WhatsApp integration, message templates, webhook setup. Supports Twilio, Meta WhatsApp API, or other providers.",
    icon: BarChart3,
  },
  {
    id: "crm-setup",
    title: "CRM setup",
    image: "/images/services/automation/CRM setup.png",
    overview:
      "Configure and integrate customer relationship systems (HubSpot, Pipedrive, etc.) with your existing workflows and automations.",
    features: [
      "CRM platform selection and setup",
      "Custom field configuration",
      "Lead and contact management",
      "Sales pipeline automation",
      "Integration with email and calendar",
    ],
    useCases: [
      "Sales team organization and tracking",
      "Lead scoring and qualification",
      "Pipeline visibility and reporting",
      "Customer lifecycle management",
    ],
    sampleInput: "Customer data and sales requirements",
    sampleOutput: "Fully configured CRM with workflows and dashboards",
    technicalNotes:
      "Deliverables: CRM platform setup, custom workflows, API integrations, training materials. Includes data migration if needed.",
    icon: Zap,
  },
  {
    id: "feedback-form",
    title: "Customer feedback form",
    image: "/images/services/automation/Customer feedback form.png",
    overview:
      "Collect customer feedback via forms, analyze responses, and trigger actions based on sentiment or feedback type.",
    features: [
      "Multi-channel feedback collection (web, email, SMS)",
      "Automated sentiment analysis",
      "Response routing and escalation",
      "Analytics and reporting dashboards",
      "Action triggers for negative feedback",
    ],
    useCases: [
      "Post-purchase feedback collection",
      "NPS (Net Promoter Score) surveys",
      "Feature request and bug reports",
      "Customer satisfaction tracking",
    ],
    sampleInput: "Customer feedback response",
    sampleOutput: "Categorized feedback with sentiment in Google Sheets and alerts",
    technicalNotes:
      "Deliverables: n8n workflows, form integration, sentiment analysis setup, reporting dashboards. Integrates with Typeform, Google Forms, or custom endpoints.",
    icon: Zap,
  },
  {
    id: "invoice-automation",
    title: "Invoice automation",
    image: "/images/services/automation/Invoice automation.png",
    overview:
      "Automate billing cycles, invoice generation, delivery, and payment tracking via n8n and integrations.",
    features: [
      "Scheduled invoice generation",
      "Multi-currency and tax support",
      "Automated email delivery with reminders",
      "Payment tracking and reconciliation",
      "Integration with accounting systems",
    ],
    useCases: [
      "Recurring billing automation",
      "Payment reminder workflows",
      "Revenue recognition tracking",
      "Financial reporting and reconciliation",
    ],
    sampleInput: "Customer and service data",
    sampleOutput: "Generated invoices, sent emails, payment tracking in sheets",
    technicalNotes:
      "Deliverables: n8n automation workflow, invoice template, email setup, accounting system integration. Supports Stripe, PayPal, and accounting platforms.",
    icon: Zap,
  },
  {
    id: "landing-funnel",
    title: "Landing page + funnel",
    image: "/images/services/automation/landing-page-funnel.png",
    overview:
      "Design landing pages and conversion funnels with automated lead capture and nurture sequences.",
    features: [
      "High-converting landing page design",
      "Multi-step funnel builder",
      "Lead capture forms with validation",
      "Automated email/SMS follow-up sequences",
      "A/B testing and analytics",
    ],
    useCases: [
      "Product launches and lead generation",
      "Webinar registration funnels",
      "Free trial signup flows",
      "Challenge or masterclass sequences",
    ],
    sampleInput: "Product info and funnel requirements",
    sampleOutput: "Landing pages, funnel setup, automated nurture sequences",
    technicalNotes:
      "Deliverables: Landing page builds, funnel architecture, n8n workflows, email sequences, analytics setup. Includes Vercel deployment.",
    icon: Zap,
  },
  {
    id: "webhooks-ai",
    title: "Custom n8n workflows",
    image: "/images/services/automation/Custom n8n workflows.png",
    overview:
      "Design custom, multi-step n8n workflows combining webhooks, APIs, AI, and third-party tools tailored to specific business needs.",
    features: [
      "Webhook triggers and HTTP request nodes",
      "AI/LLM integrations (optional)",
      "Data transformations and routing",
      "Multi-step flows with conditional logic",
      "Monitoring and retry strategies",
    ],
    useCases: [
      "Text summarization and analysis",
      "Sentiment analysis and classification",
      "Email response generation",
      "Content generation from prompts",
    ],
    sampleInput: "Webhook POST request with text data",
    sampleOutput: "AI-processed response stored in Google Sheets and emailed to team",
    technicalNotes:
      "Deliverables: Webhook URL, n8n workflow configuration, prompt engineering documentation, integration examples. Handles rate limiting, token optimization, and cost tracking.",
    icon: Zap,
  },
  {
    id: "website-dev",
    title: "Website development",
    image: "/images/services/web/Website development.png",
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
    id: "portfolio-build",
    title: "Portfolio creation",
    image: "/images/services/web/Portfolio creation.png",
    overview:
      "Beautiful, responsive portfolio websites to showcase your projects, services, and case studies with SEO optimization and deployment.",
    features: [
      "Responsive design (mobile-first)",
      "Project showcase gallery",
      "Service offerings pages",
      "Contact forms with n8n integration",
      "Blog/case studies section",
    ],
    useCases: [
      "Personal portfolio for freelancers",
      "Business service showcase",
      "Case studies and testimonials",
      "Resume-to-portfolio conversion",
    ],
    sampleInput: "Resume PDF or structured data",
    sampleOutput: "Beautiful portfolio website with all sections",
    technicalNotes:
      "Deliverables: Portfolio website, source code, deployment setup, custom domain configuration. Includes GitHub integration, project cards, and contact forms.",
    icon: FileText,
  },
]
