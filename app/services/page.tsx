"use client"

import { motion } from "framer-motion"

import { Button } from "@/components/ui/button"
import { ContactModal } from "@/components/contact-modal"
import { HeroBackground } from "@/components/hero-background"

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
  )
}

