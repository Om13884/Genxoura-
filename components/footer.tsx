import Link from "next/link"
import Image from "next/image"
import { Mail, Phone, Linkedin, Twitter, Github } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

const currentYear = new Date().getFullYear()

export function Footer() {
  return (
    <footer className="border-t border-border bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {/* Column 1: Logo + Tagline */}
          <div className="space-y-4">
            <Link href="/" className="flex items-center space-x-2">
              <Image
                src="/assets/logo.svg"
                alt="GenXora Logo"
                width={32}
                height={32}
                className="w-8 h-8"
              />
              <span className="text-xl font-bold bg-gradient-to-r from-brand-electric to-brand-cyan bg-clip-text text-transparent">
                GenXora
              </span>
            </Link>
            <p className="text-sm text-muted-foreground">
              Full-stack web & AI automation. We build websites and automation
              pipelines that run themselves.
            </p>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <h3 className="text-sm font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-3">
              <li>
                <Link
                  href="/services"
                  className="text-sm text-muted-foreground hover:text-primary transition-colors"
                >
                  Services
                </Link>
              </li>
              <li>
                <Link
                  href="/projects"
                  className="text-sm text-muted-foreground hover:text-primary transition-colors"
                >
                  Projects
                </Link>
              </li>
              <li>
                <Link
                  href="/pricing"
                  className="text-sm text-muted-foreground hover:text-primary transition-colors"
                >
                  Pricing
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="text-sm text-muted-foreground hover:text-primary transition-colors"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Contact Details */}
          <div>
            <h3 className="text-sm font-semibold mb-4">Contact</h3>
            <ul className="space-y-3">
              <li className="flex items-center gap-2 text-sm text-muted-foreground">
                <Phone className="h-4 w-4" />
                <a
                  href="tel:+919972734513"
                  className="hover:text-primary transition-colors"
                >
                  +91 9972734513
                </a>
              </li>
              <li className="flex items-center gap-2 text-sm text-muted-foreground">
                <Mail className="h-4 w-4" />
                <a
                  href="mailto:genxora11@gmail.com"
                  className="hover:text-primary transition-colors"
                >
                  genxora11@gmail.com
                </a>
              </li>
            </ul>
            <div className="flex gap-4 mt-4">
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="h-5 w-5" />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors"
                aria-label="Twitter"
              >
                <Twitter className="h-5 w-5" />
              </a>
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors"
                aria-label="GitHub"
              >
                <Github className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Column 4: Newsletter */}
          <div>
            <h3 className="text-sm font-semibold mb-4">Newsletter</h3>
            <p className="text-sm text-muted-foreground mb-4">
              Get updates on new automations and services.
            </p>
            <form className="space-y-2">
              <Input
                type="email"
                placeholder="Enter your email"
                className="h-9"
              />
              <div className="flex items-center gap-2">
                <input
                  type="checkbox"
                  id="consent"
                  className="h-4 w-4 rounded border-gray-300"
                />
                <label
                  htmlFor="consent"
                  className="text-xs text-muted-foreground"
                >
                  I consent to receive emails
                </label>
              </div>
              <Button type="submit" variant="gradient" size="sm" className="w-full">
                Subscribe
              </Button>
            </form>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-border">
          <p className="text-sm text-center text-muted-foreground">
            © {currentYear} GenXora. Built with care. Contact: +91 9972734513 |{" "}
            <a
              href="mailto:genxora11@gmail.com"
              className="hover:text-primary transition-colors"
            >
              genxora11@gmail.com
            </a>
          </p>
        </div>
      </div>
    </footer>
  )
}

