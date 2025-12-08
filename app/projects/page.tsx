"use client"

import Link from "next/link"
import { ExternalLink, Github, Play } from "lucide-react"
import { motion } from "framer-motion"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { HeroBackground } from "@/components/hero-background"

// Metadata moved to layout or handled via next/head

export const projects = [
  {
    id: "email-logger",
    type: "api",
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
    type: "api",
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
    type: "web",
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
    type: "api",
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
              Our Projects
            </h1>
            <p className="text-lg text-gray-200 mb-8">
              Explore two portfolios: Automation/API Projects and Web Development Projects
            </p>
            <div className="flex justify-center gap-6 mt-10">
              <Link href="/projects/api-projects">
                <Button size="lg" variant="gradient">Automation Projects</Button>
              </Link>
              <Link href="/projects/web-projects">
                <Button size="lg" variant="gradient">Web Development Projects</Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </HeroBackground>
    </div>
  );
}

