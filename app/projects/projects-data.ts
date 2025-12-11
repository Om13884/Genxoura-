export const projectsData = [
  {
    id: "email-logger",
    type: "api",
    title: "Email automation",
    image: "/images/projects/automation/Email automation.png",
    problem:
      "Client needed to automate incoming emails: parse, route, and log leads without manual steps.",
    solution:
      "Built n8n workflows that watch inboxes, extract key fields, route messages, and append structured rows to Google Sheets or trigger follow-up actions.",
    outcome:
      "Automated lead capture and routing reduced manual work and improved response times.",
    implementation: [
      "Gmail trigger node for new emails",
      "Email parsing with regex patterns",
      "Routing to Sheets, CRM, or notifications",
      "Error handling and retry logic",
      "Automated follow-up or alerting",
    ],
  },
  {
    id: "api-poller",
    type: "api",
    title: "WhatsApp automation",
    image: "/images/projects/automation/WhatsApp automation.png",
    problem:
      "Client wanted automated outbound/inbound messaging via WhatsApp for notifications and lead follow-ups.",
    solution:
      "Implemented n8n workflows that integrate with WhatsApp APIs (or providers) to send notifications, confirm leads, and trigger downstream automations based on responses.",
    outcome:
      "Reduced manual messaging, faster lead follow-up, and improved customer engagement.",
    implementation: [
      "Scheduled or webhook triggers",
      "HTTP Request / provider integrations for WhatsApp",
      "Message templating and personalization",
      "Response parsing and follow-up workflows",
      "Delivery and error monitoring",
    ],
  },
  {
    id: "form-lead-system",
    type: "web",
    title: "Landing page + funnel",
    image: "/images/projects/web/landing-page-funnel.png",
    problem:
      "Need to capture visitors from landing pages and run them through a conversion funnel with automated follow-ups.",
    solution:
      "Built landing page + funnel integrations using webhooks and n8n: capture leads, tag by source, append to Sheets, and trigger email/sms follow-ups.",
    outcome:
      "Higher conversion consistency and automated nurture sequences for leads.",
    implementation: [
      "Landing page form webhook",
      "Lead enrichment and tagging",
      "Google Sheets / CRM append",
      "Automated email / messaging follow-ups",
      "Funnel tracking and reporting",
    ],
  },
  {
    id: "ai-summarizer",
    type: "api",
    title: "Custom n8n workflows",
    image: "/images/projects/automation/Custom n8n workflows.png",
    problem:
      "Teams needed bespoke automation pipelines tailored to specific business logic and integrations.",
    solution:
      "Designed custom n8n workflows that combine webhooks, API calls, AI processing, and third-party integrations to meet the customer's exact needs.",
    outcome:
      "Flexible automation solutions that connect tools, reduce manual steps, and enable new capabilities.",
    implementation: [
      "Webhook triggers and HTTP request nodes",
      "AI/LLM integrations (optional)",
      "Data transformations and routing",
      "Multi-step flows with conditional logic",
      "Monitoring and retry strategies",
    ],
  },
  {
    id: "website-1",
    type: "web",
    title: "SaaS Platform Website",
    image: "/images/projects/web/saas-platform-website.png",
    problem:
      "Startup needed a modern, high-converting website to showcase SaaS product and drive signups.",
    solution:
      "Built a full Next.js site with Stripe checkout, user auth, blog, and pricing pages. Deployed on Vercel with automated CI/CD.",
    outcome:
      "Professional site deployed in 2 weeks; 40% signup increase from optimized landing pages.",
    implementation: [
      "Next.js 14 with TypeScript and App Router",
      "Stripe payment integration",
      "User authentication (NextAuth)",
      "Blog with MDX support",
      "Email notification workflows (n8n)",
    ],
  },
  {
    id: "website-2",
    type: "web",
    title: "E-Commerce Business Website",
    image: "/images/projects/web/ecommerce-business-website.png",
    problem:
      "E-commerce business needed an inventory-managed site with product filters, cart, and payment processing.",
    solution:
      "Developed a Next.js e-commerce site with Supabase backend, product catalog, advanced filtering, shopping cart, and Stripe checkout.",
    outcome:
      "Full-featured store launched; reduced payment processing time by automating order workflows.",
    implementation: [
      "Next.js with Tailwind CSS",
      "Supabase for product inventory and orders",
      "Advanced product filtering",
      "Shopping cart and checkout flow",
      "Order confirmation emails via n8n",
    ],
  },
  {
    id: "website-3",
    type: "web",
    title: "Agency Portfolio Website",
    image: "/images/projects/web/agency-portfolio-website.png",
    problem:
      "Design agency needed a showcase site to display portfolio, testimonials, and attract new clients.",
    solution:
      "Created a visually stunning portfolio site with case study pages, client testimonials, contact forms, and automated lead routing.",
    outcome:
      "Beautiful portfolio increased inquiry rate by 50%; automated lead notifications.",
    implementation: [
      "Next.js with custom animations and transitions",
      "Case study detail pages with rich media",
      "Client testimonials carousel",
      "Contact form with lead routing (n8n)",
      "SEO optimization and meta tags",
    ],
  },
  {
    id: "portfolio-1",
    type: "web",
    title: "Developer Portfolio - Resume to Site",
    image: "/images/projects/web/developer-portfolio-resume-to-site.png",
    problem:
      "Developer wanted to showcase skills and projects with a modern portfolio but lacked design/deployment knowledge.",
    solution:
      "Converted resume and GitHub data into a beautiful, interactive portfolio site with project cards, tech stack badges, and contact forms.",
    outcome:
      "Portfolio deployed; developer received 3 job offers within 2 months.",
    implementation: [
      "Portfolio layout with project showcase",
      "Tech stack and skill badges",
      "GitHub integration for project data",
      "Contact form with email notifications",
      "Dark/light mode toggle",
    ],
  },
  {
    id: "portfolio-2",
    type: "web",
    title: "Freelance Designer Portfolio",
    image: "/images/projects/web/freelance-designer-portfolio.png",
    problem:
      "Freelance designer needed a portfolio to land high-paying projects and showcase creative work.",
    solution:
      "Built a stunning portfolio with image galleries, case studies, pricing, and Stripe checkout for design services.",
    outcome:
      "Portfolio generated 10+ client inquiries and 5 paid projects in first 3 months.",
    implementation: [
      "Portfolio layout with image galleries",
      "Case study detail pages with before/after",
      "Service pricing and Stripe checkout",
      "Client testimonials section",
      "Contact form and booking calendar",
    ],
  },
  {
    id: "portfolio-3",
    type: "web",
    title: "Personal Brand Portfolio",
    image: "/images/projects/web/personal-brand-portfolio.png",
    problem:
      "Consultant wanted a professional site to establish personal brand and attract speaking engagements and consulting work.",
    solution:
      "Created a personal brand site with blog, speaking history, consulting services, and newsletter signup with n8n automation.",
    outcome:
      "Personal brand site attracted 3 speaking invitations and 5 new consulting clients.",
    implementation: [
      "Personal branding landing page",
      "Blog with thought leadership content",
      "Speaking history and testimonials",
      "Newsletter signup with automated welcome sequence",
      "Contact and consultation booking forms",
    ],
  },
  {
    id: "crm-setup-project",
    type: "api",
    title: "CRM setup",
    image: "/images/projects/automation/CRM setup.png",
    problem:
      "Sales team needed a unified CRM platform to track leads, manage pipeline, and automate follow-ups across multiple sources.",
    solution:
      "Configured HubSpot/Pipedrive with custom fields, automated lead routing from web forms and emails, and integrated workflows for deal tracking.",
    outcome:
      "Centralized lead management increased conversion rate by 35% and reduced sales cycle time by 20%.",
    implementation: [
      "CRM platform selection and configuration",
      "Custom field mapping and lead scoring",
      "Email and form integration workflows",
      "Sales pipeline automation",
      "Dashboard setup and reporting",
      "Team training and documentation",
    ],
  },
  {
    id: "feedback-form-project",
    type: "api",
    title: "Customer feedback form",
    image: "/images/projects/automation/Customer feedback form.png",
    problem:
      "Company needed to collect and act on customer feedback across multiple touchpoints with automated sentiment analysis.",
    solution:
      "Built feedback forms across web and email channels, integrated sentiment analysis to route negative feedback to support team, and logged all responses to Google Sheets.",
    outcome:
      "Collected 500+ feedback responses monthly; identified and resolved 40% of issues before customer escalation.",
    implementation: [
      "Multi-channel feedback form deployment",
      "Automated sentiment analysis",
      "Response routing and escalation logic",
      "Integration with support ticketing system",
      "Analytics dashboard creation",
    ],
  },
  {
    id: "invoice-automation-project",
    type: "api",
    title: "Invoice automation",
    image: "/images/projects/automation/Invoice automation.png",
    problem:
      "Service business was manually creating and sending invoices, leading to delays and payment tracking issues.",
    solution:
      "Built n8n workflows to automatically generate invoices based on service delivery, send reminders, and track payment status in accounting system.",
    outcome:
      "Reduced billing cycle time by 80%; payment collection improved from 45 to 15 days average.",
    implementation: [
      "Invoice generation from service data",
      "Automated email delivery with reminders",
      "Payment tracking and reconciliation",
      "Integration with accounting software (QuickBooks/Stripe)",
      "Tax and multi-currency handling",
    ],
  },
]
