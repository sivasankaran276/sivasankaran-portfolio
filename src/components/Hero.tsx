import React from 'react'
import { motion } from 'framer-motion'
import {
  Mail,
  ArrowRight,
  Send,
  Terminal,
  Cpu,
  Microchip,
  Layers,
  Code2
} from 'lucide-react'
import { HeroVisual } from './HeroVisual'

// High-precision SVGs for brand icons without requiring extra dependencies
const GithubIcon: React.FC<{ className?: string }> = ({ className = 'w-4 h-4' }) => (
  <svg
    className={className}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
  >
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
    <path d="M9 18c-4.51 2-5-2-7-2" />
  </svg>
)

const LinkedinIcon: React.FC<{ className?: string }> = ({ className = 'w-4 h-4' }) => (
  <svg
    className={className}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
  >
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect x="2" y="9" width="4" height="12" />
    <circle cx="4" cy="4" r="2" />
  </svg>
)

const TECH_TAGS = [
  { name: 'C/C++', icon: Code2, desc: 'Bare-metal & Systems' },
  { name: 'STM32', icon: Microchip, desc: 'ARM Cortex-M' },
  { name: 'ESP32', icon: Cpu, desc: 'IoT & FreeRTOS' },
  { name: 'ROS 2', icon: Layers, desc: 'Robotics Middleware' },
]

export const Hero: React.FC = () => {
  return (
    <section
      id="home"
      className="relative z-10 pt-28 pb-16 md:pt-36 md:pb-24 lg:pt-40 lg:pb-32 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto flex flex-col justify-center min-h-[calc(100svh-4.5rem)]"
    >
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
        {/* Left Column: Hero Content */}
        <div className="lg:col-span-7 flex flex-col items-start text-left space-y-6 sm:space-y-7">
          {/* Engineering Identity Badge */}
          <motion.div
            initial={{ opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: 'easeOut' }}
            className="inline-flex items-center gap-2.5 px-3 py-1.5 rounded-full bg-cyan-950/60 border border-cyan-500/30 text-cyan-300 text-xs sm:text-sm font-mono shadow-[0_0_15px_rgba(6,182,212,0.15)]"
          >
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-cyan-400" />
            </span>
            <Terminal className="w-3.5 h-3.5 text-cyan-400 hidden sm:inline" />
            <span className="tracking-tight text-slate-200">
              Embedded Systems & Firmware Engineering
            </span>
          </motion.div>

          {/* Large Main Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: 'easeOut', delay: 0.1 }}
            className="text-3xl sm:text-4xl md:text-5xl lg:text-[3.25rem] font-bold text-slate-100 tracking-tight leading-[1.15]"
          >
            Building Intelligent Systems at the Intersection of{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-sky-300 to-blue-400">
              Hardware
            </span>{' '}
            and{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-indigo-300 to-cyan-300">
              Software
            </span>
            .
          </motion.h1>

          {/* Student & Focus Description */}
          <motion.p
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: 'easeOut', delay: 0.2 }}
            className="text-base sm:text-lg text-slate-300 leading-relaxed max-w-2xl font-normal"
          >
            Electronics and Instrumentation Engineering student at Puducherry
            Technological University, graduating in 2027. Interested in embedded
            systems, firmware development and robotics.
          </motion.p>

          {/* Technical Tags */}
          <motion.div
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: 'easeOut', delay: 0.25 }}
            className="w-full pt-1"
          >
            <div className="text-[11px] font-mono uppercase tracking-widest text-cyan-400/80 mb-2.5 flex items-center gap-1.5">
              <span>CORE TECHNICAL FOCUS</span>
              <span className="w-12 h-px bg-cyan-500/30" />
            </div>

            <div className="flex flex-wrap gap-2.5">
              {TECH_TAGS.map((tag) => {
                const IconComponent = tag.icon
                return (
                  <div
                    key={tag.name}
                    className="group relative flex items-center gap-2 px-3.5 py-1.5 rounded-md bg-[#0a1727]/90 border border-cyan-500/25 hover:border-cyan-400/60 transition-all duration-200 shadow-[0_2px_8px_rgba(0,0,0,0.4)]"
                  >
                    <IconComponent className="w-3.5 h-3.5 text-cyan-400 group-hover:scale-110 transition-transform" />
                    <span className="text-xs sm:text-sm font-mono font-medium text-slate-200 group-hover:text-cyan-300 transition-colors">
                      {tag.name}
                    </span>
                    <span className="text-[10px] font-mono text-slate-400 hidden sm:inline border-l border-cyan-900/50 pl-2">
                      {tag.desc}
                    </span>
                  </div>
                )
              })}
            </div>
          </motion.div>

          {/* CTA Action Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: 'easeOut', delay: 0.3 }}
            className="flex flex-wrap items-center gap-3.5 pt-2"
          >
            <a
              href="#projects"
              className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-lg text-sm font-semibold text-slate-950 bg-gradient-to-r from-cyan-400 to-blue-400 hover:from-cyan-300 hover:to-blue-300 transition-all duration-200 shadow-[0_0_20px_rgba(6,182,212,0.4)] hover:shadow-[0_0_28px_rgba(6,182,212,0.6)] group"
            >
              <span>Explore Projects</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </a>

            <a
              href="mailto:sivasankaran.eie1@gmail.com"
              className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-lg text-sm font-semibold text-slate-200 bg-[#0c1a2c]/80 hover:bg-[#0f2138] border border-cyan-500/40 hover:border-cyan-400 transition-all duration-200 shadow-[0_0_12px_rgba(6,182,212,0.15)] group"
            >
              <Send className="w-4 h-4 text-cyan-400 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              <span>Contact Me</span>
            </a>
          </motion.div>

          {/* Social Profiles & Direct Contact */}
          <motion.div
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: 'easeOut', delay: 0.35 }}
            className="flex flex-wrap items-center gap-4 pt-3 text-sm text-slate-400"
          >
            <span className="text-xs font-mono uppercase tracking-wider text-slate-500">
              CONNECT:
            </span>

            <a
              href="https://github.com/sivasankaran276"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-3 py-1.5 rounded-md bg-[#0a1727]/60 border border-slate-800 hover:border-cyan-500/50 hover:text-cyan-300 hover:bg-cyan-950/30 transition-all text-xs font-mono"
              aria-label="GitHub: sivasankaran276 (opens in new tab)"
            >
              <GithubIcon className="w-3.5 h-3.5 text-cyan-400" />
              <span>sivasankaran276</span>
            </a>

            <a
              href="https://www.linkedin.com/in/sivasankaran-g-/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-3 py-1.5 rounded-md bg-[#0a1727]/60 border border-slate-800 hover:border-cyan-500/50 hover:text-cyan-300 hover:bg-cyan-950/30 transition-all text-xs font-mono"
              aria-label="LinkedIn: sivasankaran-g- (opens in new tab)"
            >
              <LinkedinIcon className="w-3.5 h-3.5 text-cyan-400" />
              <span>sivasankaran-g-</span>
            </a>

            <a
              href="mailto:sivasankaran.eie1@gmail.com"
              className="flex items-center gap-2 px-3 py-1.5 rounded-md bg-[#0a1727]/60 border border-slate-800 hover:border-cyan-500/50 hover:text-cyan-300 hover:bg-cyan-950/30 transition-all text-xs font-mono"
              aria-label="Email: sivasankaran.eie1@gmail.com"
            >
              <Mail className="w-3.5 h-3.5 text-cyan-400" />
              <span>sivasankaran.eie1@gmail.com</span>
            </a>
          </motion.div>
        </div>

        {/* Right Column: Hero Visual (Engineering Fusion / Lab Visual) */}
        <div className="lg:col-span-5 w-full flex justify-center lg:justify-end">
          <HeroVisual />
        </div>
      </div>
    </section>
  )
}
