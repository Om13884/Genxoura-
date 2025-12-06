/**
 * OpenRouter API Integration
 * 
 * This module provides a wrapper for OpenRouter API calls.
 * Configure via environment variable: OPENROUTER_API_KEY
 * 
 * Base URL: https://openrouter.ai/api/v1
 */

export interface OpenRouterMessage {
  role: "system" | "user" | "assistant"
  content: string
}

export interface OpenRouterRequest {
  model: string
  messages: OpenRouterMessage[]
  temperature?: number
  max_tokens?: number
  top_p?: number
  frequency_penalty?: number
  presence_penalty?: number
}

export interface OpenRouterResponse {
  id: string
  model: string
  choices: Array<{
    message: {
      role: string
      content: string
    }
    finish_reason: string
  }>
  usage: {
    prompt_tokens: number
    completion_tokens: number
    total_tokens: number
  }
}

const OPENROUTER_BASE_URL = "https://openrouter.ai/api/v1"
const DEFAULT_MODEL = "openai/gpt-4-turbo-preview"

/**
 * Call OpenRouter API to generate a completion
 */
export async function callOpenRouter(
  request: OpenRouterRequest
): Promise<OpenRouterResponse> {
  const apiKey = process.env.OPENROUTER_API_KEY

  if (!apiKey) {
    throw new Error("OPENROUTER_API_KEY is not configured")
  }

  const response = await fetch(`${OPENROUTER_BASE_URL}/chat/completions`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${apiKey}`,
      "HTTP-Referer": process.env.NEXT_PUBLIC_SITE_URL || "",
      "X-Title": "GenXora",
    },
    body: JSON.stringify({
      model: request.model || DEFAULT_MODEL,
      messages: request.messages,
      temperature: request.temperature ?? 0.7,
      max_tokens: request.max_tokens ?? 1000,
      top_p: request.top_p ?? 1,
      frequency_penalty: request.frequency_penalty ?? 0,
      presence_penalty: request.presence_penalty ?? 0,
    }),
  })

  if (!response.ok) {
    const error = await response.json().catch(() => ({ error: "Unknown error" }))
    throw new Error(`OpenRouter API error: ${JSON.stringify(error)}`)
  }

  return response.json()
}

/**
 * Generate a summary using OpenRouter
 */
export async function generateSummary(
  text: string,
  options?: {
    model?: string
    maxLength?: number
    includeSentiment?: boolean
  }
): Promise<{ summary: string; sentiment?: "positive" | "negative" | "neutral" }> {
  const prompt = `Please provide a concise summary of the following text in ${options?.maxLength || 200} words or less. ${
    options?.includeSentiment
      ? "Also analyze the sentiment and indicate if it's positive, negative, or neutral."
      : ""
  }

Text:
${text}`

  const response = await callOpenRouter({
    model: options?.model || DEFAULT_MODEL,
    messages: [
      {
        role: "system",
        content:
          "You are a helpful assistant that provides concise summaries and sentiment analysis.",
      },
      {
        role: "user",
        content: prompt,
      },
    ],
    max_tokens: options?.maxLength ? Math.ceil(options.maxLength * 1.5) : 300,
  })

  const summary = response.choices[0]?.message?.content || ""

  // Extract sentiment if requested
  let sentiment: "positive" | "negative" | "neutral" | undefined
  if (options?.includeSentiment) {
    const lowerSummary = summary.toLowerCase()
    if (lowerSummary.includes("positive") || lowerSummary.includes("positive sentiment")) {
      sentiment = "positive"
    } else if (lowerSummary.includes("negative") || lowerSummary.includes("negative sentiment")) {
      sentiment = "negative"
    } else {
      sentiment = "neutral"
    }
  }

  return { summary, sentiment }
}

