"use client";
import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Github, Play } from "lucide-react";
import { HeroBackground } from "@/components/hero-background";
import { projects } from "../page";

const apiProjects = projects.filter((p) => p.type === "api");

export default function ApiProjectsPage() {
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
              Automation Projects
            </h1>
            <p className="text-lg text-gray-200">
              Real-world automation/API projects we've built for clients
            </p>
          </motion.div>
        </div>
      </HeroBackground>
      <section className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {apiProjects.map((project, index) => (
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
  );
}
