"use client";
import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { ContactModal } from "@/components/contact-modal";
import { HeroBackground } from "@/components/hero-background";
import { services } from "../page";

const webServiceIds = ["website-dev", "portfolio-creation"];
const webServices = services.filter(service => webServiceIds.includes(service.id));

export default function WebServicesPage() {
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
              Web Development Services
            </h1>
            <p className="text-lg text-gray-200">
              End-to-end website, portfolio, and digital experience services
            </p>
          </motion.div>
        </div>
      </HeroBackground>
      <section className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {webServices.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <Card className="h-full">
                <div className="h-48 bg-muted flex items-center justify-center">
                  <span className="text-muted-foreground">
                    Service Screenshot / Architecture Diagram
                  </span>
                </div>
                <CardHeader>
                  <CardTitle className="text-2xl">{service.title}</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <h3 className="font-semibold mb-2">Overview</h3>
                    <p className="text-sm text-muted-foreground">{service.overview}</p>
                  </div>
                  <div>
                    <h3 className="font-semibold mb-2">Features</h3>
                    <ul className="text-sm text-muted-foreground space-y-1">
                      {service.features.map((item) => (
                        <li key={item}>• {item}</li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h3 className="font-semibold mb-2">Use Cases</h3>
                    <ul className="text-sm text-muted-foreground space-y-1">
                      {service.useCases.map((item) => (
                        <li key={item}>• {item}</li>
                      ))}
                    </ul>
                  </div>
                  <div className="grid grid-cols-2 gap-4 mt-4">
                    <div>
                      <h4 className="text-sm font-semibold mb-2">Sample Input</h4>
                      <p className="text-sm text-muted-foreground bg-muted p-3 rounded">
                        {service.sampleInput}
                      </p>
                    </div>
                    <div>
                      <h4 className="text-sm font-semibold mb-2">Sample Output</h4>
                      <p className="text-sm text-muted-foreground bg-muted p-3 rounded">
                        {service.sampleOutput}
                      </p>
                    </div>
                  </div>
                  <div>
                    <h3 className="font-semibold mb-2">Technical Notes</h3>
                    <p className="text-sm text-muted-foreground bg-muted p-4 rounded">
                      {service.technicalNotes}
                    </p>
                  </div>
                  <div className="flex gap-4 pt-4">
                    <ContactModal prefilledService={service.title}>
                      <Button variant="gradient">
                        Request Demo
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Button>
                    </ContactModal>
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
