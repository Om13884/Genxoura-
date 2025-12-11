"use client"

import { Suspense } from "react"
import { motion } from "framer-motion"

import { HeroBackground } from "@/components/hero-background"
import { PricingContent } from "../pricing-content"

export default function WebDevelopmentPricingPage() {
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
              Web Development Pricing
            </h1>
            <p className="text-lg text-gray-200">
              Packages for websites, landing pages, and e-commerce solutions.
            </p>
          </motion.div>
        </div>
      </HeroBackground>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <Suspense fallback={<div className="text-center text-gray-400">Loading pricing...</div>}>
          <PricingContent forceCategory="web" />
        </Suspense>
      </div>
    </div>
  )
}

