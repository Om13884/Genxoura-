"use client"

import { motion } from "framer-motion"

interface HeroBackgroundProps {
  children?: React.ReactNode
  className?: string
  minHeight?: string
}

export function HeroBackground({
  children,
  className = "",
  minHeight = "min-h-[60vh]",
}: HeroBackgroundProps) {
  return (
    <div className={`relative ${minHeight} flex items-center justify-center overflow-hidden ${className}`}>
      {/* Hero Background with Parallax */}
      <div className="absolute inset-0 hero-parallax">
        <div className="absolute inset-0 bg-gradient-to-br from-brand-navy via-brand-electric to-brand-cyan opacity-90" />
        <div
          className="absolute inset-0 bg-cover bg-center opacity-20"
          style={{
            backgroundImage: "url('/assets/hero-bg-4k.png')",
            transform: "scale(1.1)",
          }}
        />
        {/* Floating Glass Cards Effect */}
        <div className="absolute inset-0">
          {[1, 2, 3, 4].map((i) => (
            <motion.div
              key={i}
              className="absolute glass-card rounded-2xl"
              style={{
                width: `${100 + i * 50}px`,
                height: `${150 + i * 30}px`,
                left: `${10 + i * 20}%`,
                top: `${20 + i * 15}%`,
              }}
              animate={{
                y: [0, -20, 0],
                rotate: [0, 5, 0],
              }}
              transition={{
                duration: 4 + i,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />
          ))}
        </div>
      </div>
      {/* Content */}
      {children && <div className="relative z-10 w-full">{children}</div>}
    </div>
  )
}

