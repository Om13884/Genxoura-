"use client"

import Link from "next/link"
import { motion } from "framer-motion"

import { Button } from "@/components/ui/button"
import { HeroBackground } from "@/components/hero-background"

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
  )
}

