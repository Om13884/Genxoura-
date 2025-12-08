"use client"

import Link from "next/link"
import { motion } from "framer-motion"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { HeroBackground } from "@/components/hero-background"

// Metadata moved to layout or handled via next/head

export default function BlogPage() {
  return (
    <div className="pb-20">
      {/* Header with Hero Background */}
      <HeroBackground minHeight="min-h-[50vh]">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-3xl mx-auto"
          >
            <h1 className="text-4xl sm:text-5xl font-bold mb-6 text-white">
              Blog
            </h1>
            <p className="text-lg text-gray-200">
              Insights on automation, web development, and AI integration
            </p>
          </motion.div>
        </div>
      </HeroBackground>

      {/* Blog Posts Placeholder */}
      <section className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[1, 2, 3, 4, 5, 6].map((i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
            >
              <Card className="h-full hover:shadow-lg transition-shadow">
                <div className="h-48 bg-muted" />
                <CardHeader>
                  <CardTitle>Blog Post {i}</CardTitle>
                  <CardDescription>
                    {new Date().toLocaleDateString()}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground mb-4">
                    Blog post content will be added here. This is a placeholder
                    for future blog posts.
                  </p>
                  <Link href={`/blog/post-${i}`}>
                    <span className="text-sm text-primary hover:underline">
                      Read more →
                    </span>
                  </Link>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  )
}

