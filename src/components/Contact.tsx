import React from 'react'
import { motion, useReducedMotion, type Variants } from 'framer-motion'
import {
  Mail,
  ArrowUpRight,
  Send,
  Compass,
  Terminal,
  CheckCircle2
} from 'lucide-react'

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

export const Contact: React.FC = () => {
  const shouldReduceMotion = useReducedMotion()

  const fadeUp: Variants = {
    hidden: { opacity: shouldReduceMotion ? 1 : 0, y: shouldReduceMotion ? 0 : 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: 'easeOut' },
    },
  }

  return (
    <section
      id="contact"
      className="scroll-mt-24 border-t border-cyan-950/60 py-20 sm:py-28 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto relative z-10"
      aria-labelledby="contact-heading"
    >
      {/* Section Header */}
      <motion.div
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-40px' }}
        className="mb-12 sm:mb-16"
      >
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-cyan-950/80 border border-cyan-500/30 text-cyan-300 text-xs font-mono mb-3 shadow-[0_0_12px_rgba(6,182,212,0.15)]">
          <Compass className="w-3.5 h-3.5 text-cyan-400" />
          <span>SECTION // 05</span>
        </div>
        <h2 id="contact-heading" className="text-3xl sm:text-4xl font-bold text-slate-100 tracking-tight font-sans">
          Contact &amp; Connect
        </h2>
        <p className="text-sm sm:text-base font-mono text-cyan-400/80 mt-1 uppercase tracking-wider">
          COMMUNICATION CHANNELS // HARDWARE &amp; SOFTWARE OPPORTUNITIES
        </p>
      </motion.div>

      {/* Two-Column Responsive Layout */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
        {/* Left Column: Professional Invitation & Context */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-40px' }}
          className="lg:col-span-6 space-y-6 text-slate-300"
        >
          <div className="space-y-4 text-base sm:text-lg leading-relaxed font-normal">
            <p>
              I am actively interested in opportunities within{' '}
              <strong className="text-slate-100 font-semibold">
                Embedded Systems, Firmware Engineering, and Robotics
              </strong>
              . Whether you are discussing technical projects, research collaborations, internships, or engineering roles, I welcome your message.
            </p>
            <p className="text-sm sm:text-base text-slate-400">
              Feel free to reach out via direct email or connect through LinkedIn and GitHub.
            </p>
          </div>

          {/* Academic & Availability Status Card */}
          <div className="rounded-xl bg-[#091524]/80 border border-cyan-500/25 p-4 sm:p-5 space-y-3 font-mono text-xs">
            <div className="flex items-center justify-between border-b border-cyan-900/40 pb-2">
              <span className="text-cyan-400 flex items-center gap-1.5 uppercase tracking-wide">
                <Terminal className="w-3.5 h-3.5 text-cyan-400" />
                ENGAGEMENT STATUS
              </span>
              <span className="flex items-center gap-1.5 text-emerald-400 text-[11px]">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                OPEN FOR OPPORTUNITIES
              </span>
            </div>

            <div className="space-y-2 text-slate-300">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400 shrink-0" />
                <span>Electronics &amp; Instrumentation Engineering (PTU &apos;27)</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400 shrink-0" />
                <span>Focused on Microcontrollers, Real-Time OS &amp; Robotics</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400 shrink-0" />
                <span>Actively Open to Internships &amp; Research Collaborations</span>
              </div>
            </div>
          </div>

          {/* Primary Email Action Button */}
          <div className="pt-2">
            <a
              href="mailto:sivasankaran.eie1@gmail.com"
              className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-lg text-sm font-semibold text-slate-950 bg-gradient-to-r from-cyan-400 to-blue-400 hover:from-cyan-300 hover:to-blue-300 transition-all duration-200 shadow-[0_0_20px_rgba(6,182,212,0.4)] hover:shadow-[0_0_28px_rgba(6,182,212,0.6)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-300 group"
            >
              <Send className="w-4 h-4 text-slate-950 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              <span>Initiate Email Contact</span>
              <ArrowUpRight className="w-4 h-4 text-slate-950 opacity-80" />
            </a>
          </div>
        </motion.div>

        {/* Right Column: Three Contact Cards */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-40px' }}
          className="lg:col-span-6 space-y-4 w-full"
        >
          {/* Card 1: Email */}
          <a
            href="mailto:sivasankaran.eie1@gmail.com"
            className="block p-5 rounded-xl bg-[#091524]/90 border border-cyan-500/25 hover:border-cyan-400/60 shadow-[0_8px_24px_rgba(0,0,0,0.4)] backdrop-blur-md transition-all duration-200 group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400"
          >
            <div className="flex items-start justify-between gap-4">
              <div className="flex items-start gap-3.5">
                <div className="p-2.5 rounded-lg bg-[#0d1f33] border border-cyan-500/30 text-cyan-400 group-hover:scale-105 group-hover:border-cyan-400 transition-all">
                  <Mail className="w-5 h-5 text-cyan-400" />
                </div>
                <div>
                  <div className="text-[10px] font-mono uppercase tracking-wider text-cyan-400/80 mb-0.5">
                    DIRECT INBOX
                  </div>
                  <h3 className="text-base font-bold text-slate-100 group-hover:text-cyan-300 transition-colors">
                    Email
                  </h3>
                  <p className="text-xs sm:text-sm font-mono text-cyan-300 mt-1 break-all">
                    sivasankaran.eie1@gmail.com
                  </p>
                  <p className="text-xs text-slate-400 mt-1">
                    Direct communication for technical inquiries and opportunities
                  </p>
                </div>
              </div>

              <ArrowUpRight className="w-4 h-4 text-cyan-400 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform shrink-0 mt-1" />
            </div>
          </a>

          {/* Card 2: LinkedIn */}
          <a
            href="https://www.linkedin.com/in/sivasankaran-g-/"
            target="_blank"
            rel="noopener noreferrer"
            className="block p-5 rounded-xl bg-[#091524]/90 border border-cyan-500/25 hover:border-cyan-400/60 shadow-[0_8px_24px_rgba(0,0,0,0.4)] backdrop-blur-md transition-all duration-200 group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400"
          >
            <div className="flex items-start justify-between gap-4">
              <div className="flex items-start gap-3.5">
                <div className="p-2.5 rounded-lg bg-[#0d1f33] border border-cyan-500/30 text-cyan-400 group-hover:scale-105 group-hover:border-cyan-400 transition-all">
                  <LinkedinIcon className="w-5 h-5 text-cyan-400" />
                </div>
                <div>
                  <div className="text-[10px] font-mono uppercase tracking-wider text-cyan-400/80 mb-0.5">
                    PROFESSIONAL NETWORK
                  </div>
                  <h3 className="text-base font-bold text-slate-100 group-hover:text-cyan-300 transition-colors">
                    LinkedIn
                  </h3>
                  <p className="text-xs sm:text-sm font-mono text-cyan-300 mt-1">
                    linkedin.com/in/sivasankaran-g-
                  </p>
                  <p className="text-xs text-slate-400 mt-1">
                    Academic connections, professional updates &amp; networking
                  </p>
                </div>
              </div>

              <ArrowUpRight className="w-4 h-4 text-cyan-400 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform shrink-0 mt-1" />
            </div>
          </a>

          {/* Card 3: GitHub */}
          <a
            href="https://github.com/sivasankaran276"
            target="_blank"
            rel="noopener noreferrer"
            className="block p-5 rounded-xl bg-[#091524]/90 border border-cyan-500/25 hover:border-cyan-400/60 shadow-[0_8px_24px_rgba(0,0,0,0.4)] backdrop-blur-md transition-all duration-200 group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400"
          >
            <div className="flex items-start justify-between gap-4">
              <div className="flex items-start gap-3.5">
                <div className="p-2.5 rounded-lg bg-[#0d1f33] border border-cyan-500/30 text-cyan-400 group-hover:scale-105 group-hover:border-cyan-400 transition-all">
                  <GithubIcon className="w-5 h-5 text-cyan-400" />
                </div>
                <div>
                  <div className="text-[10px] font-mono uppercase tracking-wider text-cyan-400/80 mb-0.5">
                    CODE REPOSITORIES
                  </div>
                  <h3 className="text-base font-bold text-slate-100 group-hover:text-cyan-300 transition-colors">
                    GitHub
                  </h3>
                  <p className="text-xs sm:text-sm font-mono text-cyan-300 mt-1">
                    github.com/sivasankaran276
                  </p>
                  <p className="text-xs text-slate-400 mt-1">
                    Embedded software implementations and source code repositories
                  </p>
                </div>
              </div>

              <ArrowUpRight className="w-4 h-4 text-cyan-400 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform shrink-0 mt-1" />
            </div>
          </a>
        </motion.div>
      </div>
    </section>
  )
}
