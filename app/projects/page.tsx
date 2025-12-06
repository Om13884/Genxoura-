"use client"

import Link from "next/link"
import { ExternalLink, Github, Play } from "lucide-react"
import { motion } from "framer-motion"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

// Metadata moved to layout or handled via next/head

const projects = [
  {
    id: "email-logger",
    title: "Email Logger",
    problem:
      "Client needed to automatically capture and log all customer inquiry emails into a structured database for sales team tracking.",
    solution:
      "Built an n8n workflow that monitors Gmail inbox, parses email content, extracts key fields (name, email, subject, body), and logs them into Google Sheets with timestamps and categorization.",
    outcome:
      "Sales team now has real-time visibility into all inquiries, reduced manual data entry by 90%, and improved response time from 24 hours to under 2 hours.",
    implementation: [
      "Gmail trigger node for new emails",
      "Email parsing with regex patterns",
      "Google Sheets append node with field mapping",
      "Error handling and retry logic",
      "Weekly summary email reports",
    ],
    architecture: "Gmail → n8n Parser → Google Sheets → Email Alert",
  },
  {
    id: "api-poller",
    title: "API Poller Dashboard",
    problem:
      "Business needed real-time market price data from multiple APIs to track competitor pricing and update internal dashboards.",
    solution:
      "Created a scheduled n8n workflow that polls multiple REST APIs every 15 minutes, normalizes the data, and updates a Google Sheet that serves as a lightweight dashboard with historical tracking.",
    outcome:
      "Automated price tracking, eliminated manual data collection, and enabled data-driven pricing decisions with historical trends.",
    implementation: [
      "Cron trigger (every 15 minutes)",
      "Multiple HTTP Request nodes in parallel",
      "Data transformation and normalization",
      "Google Sheets update with timestamp",
      "Error notifications via email",
    ],
    architecture: "Cron → HTTP Requests → Transform → Google Sheets",
  },
  {
    id: "form-lead-system",
    title: "Form Lead System with Email Alert",
    problem:
      "Marketing team needed instant notifications when leads submitted contact forms, plus automatic storage for CRM import.",
    solution:
      "Implemented webhook-based n8n workflow that receives form submissions, validates data, stores in Google Sheets, and sends instant email alerts to sales team with lead details and qualification score.",
    outcome:
      "Lead response time improved from 4 hours to under 5 minutes, increased conversion rate by 35%, and seamless CRM integration via Google Sheets export.",
    implementation: [
      "Webhook trigger endpoint",
      "Data validation and deduplication",
      "Google Sheets append",
      "Email template with lead details",
      "SMTP configuration for instant delivery",
    ],
    architecture: "Web Form → Webhook → n8n → Sheets + Email",
  },
  {
    id: "ai-summarizer",
    title: "AI Summarizer Demo",
    problem:
      "Customer support team was overwhelmed by long email threads and needed quick summaries to prioritize responses.",
    solution:
      "Built an AI-powered summarization pipeline using OpenRouter API that processes email threads, generates concise summaries with sentiment analysis, and logs results in Google Sheets for team review.",
    outcome:
      "Reduced email review time by 70%, improved prioritization accuracy, and enabled faster response to urgent issues.",
    implementation: [
      "Webhook trigger for email content",
      "OpenRouter API integration (GPT-4)",
      "Custom summarization prompt",
      "Sentiment analysis (positive/negative/neutral)",
      "Google Sheets output with summary and sentiment",
    ],
    architecture: "Email → Webhook → AI (OpenRouter) → Summarize → Sheets",
    sampleSummary:
      "Customer inquiry about refund for order #12345. Sentiment: Negative. Key points: Order delayed by 2 weeks, customer frustrated, requesting full refund. Action required: Immediate follow-up.",
  },
]

export default function ProjectsPage() {
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
          <h1 className="text-4xl sm:text-5xl font-bold mb-6">Our Projects</h1>
          <p className="text-lg text-muted-foreground">
            Real-world automation solutions we've built for clients
          </p>
        </motion.div>
      </section>

      {/* Projects Grid */}
      <section className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <Card className="h-full">
                <div className="h-48 bg-muted flex items-center justify-center">
                  <span className="text-muted-foreground">
                    Project Screenshot / Architecture Diagram
                  </span>
                </div>
                <CardHeader>
                  <CardTitle className="text-2xl">{project.title}</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <h3 className="font-semibold mb-2">Problem</h3>
                    <p className="text-sm text-muted-foreground">{project.problem}</p>
                  </div>
                  <div>
                    <h3 className="font-semibold mb-2">Solution</h3>
                    <p className="text-sm text-muted-foreground">{project.solution}</p>
                  </div>
                  <div>
                    <h3 className="font-semibold mb-2">Outcome</h3>
                    <p className="text-sm text-muted-foreground">{project.outcome}</p>
                  </div>
                  <div>
                    <h3 className="font-semibold mb-2">Implementation</h3>
                    <ul className="text-sm text-muted-foreground space-y-1">
                      {project.implementation.map((item) => (
                        <li key={item}>• {item}</li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h3 className="font-semibold mb-2">Architecture</h3>
                    <p className="text-sm font-mono bg-muted p-2 rounded">
                      {project.architecture}
                    </p>
                  </div>
                  {project.sampleSummary && (
                    <div>
                      <h3 className="font-semibold mb-2">Sample Summary</h3>
                      <p className="text-sm text-muted-foreground bg-muted p-3 rounded">
                        {project.sampleSummary}
                      </p>
                    </div>
                  )}
                  <div className="flex gap-2 pt-4">
                    <Button variant="outline" size="sm" asChild>
                      <a href="#" target="_blank" rel="noopener noreferrer">
                        <Github className="mr-2 h-4 w-4" />
                        Code Repo
                      </a>
                    </Button>
                    <Button variant="outline" size="sm" asChild>
                      <a href="#">
                        <Play className="mr-2 h-4 w-4" />
                        Demo Video
                      </a>
                    </Button>
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

