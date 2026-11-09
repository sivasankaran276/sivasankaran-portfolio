import React from 'react'
import { motion, useReducedMotion, type Variants } from 'framer-motion'
import {
  Building2,
  Calendar,
  Clock,
  UserCheck,
  Radio,
  Cpu,
  Sliders,
  Award,
  Compass
} from 'lucide-react'

interface ExperienceItem {
  id: string
  organization: string
  role: string
  type: string
  timeInfo: string | null
  timeType: 'duration' | 'dates' | null
  mentor?: string
  description?: string
  tags: string[]
  icon: React.ElementType
}

const EXPERIENCES: ExperienceItem[] = [
  {
    id: 'diat',
    organization: 'Defence Institute of Advanced Technology (DIAT), Pune',
    role: 'Intern – Microstrip Patch Antenna Design',
    type: 'INTERNSHIP',
    timeInfo: '2 Months',
    timeType: 'duration',
    mentor: 'Dr. Rajesh Singh',
    tags: [
      'CST Studio Suite',
      'Microstrip Patch Antenna Design',
      'Electromagnetic Simulation',
    ],
    icon: Radio,
  },
  {
    id: 'nitttr',
    organization: 'NITTTR Chennai',
    role: 'Embedded Systems Intern',
    type: 'INTERNSHIP',
    timeInfo: '29 December 2025 – 13 January 2026',
    timeType: 'dates',
    mentor: 'Dr. E. Balasubramanian',
    tags: [
      'Embedded Systems Concepts',
      'Practical Training',
    ],
    icon: Cpu,
  },
  {
    id: 'cornerstone',
    organization: 'Cornerstone Solutions, Puducherry',
    role: 'Industrial Automation Intern / Trainee',
    type: 'INDUSTRIAL TRAINING',
    timeInfo: null,
    timeType: null,
    tags: [
      'PLC Fundamentals',
      'Relays',
      'Hands-on Automation Training',
      'Introductory SCADA Exposure',
    ],
    icon: Sliders,
  },
  {
    id: 'eaton',
    organization: 'CII – Eaton Garnishing Talent Program',
    role: 'Program Participant',
    type: 'PROGRAM PARTICIPANT',
    timeInfo: '7 Weeks',
    timeType: 'duration',
    description: 'Professional and technical development through the CII Garnishing Talent Program.',
    tags: [
      'Professional Development',
      'Technical Development',
      'CII Garnishing Talent Program',
    ],
    icon: Award,
  },
]

export const Experience: React.FC = () => {
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
      id="experience"
      className="scroll-mt-24 border-t border-cyan-950/60 py-20 sm:py-28 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto relative z-10"
      aria-labelledby="experience-heading"
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
          <span>SECTION // 03</span>
        </div>
        <h2 id="experience-heading" className="text-3xl sm:text-4xl font-bold text-slate-100 tracking-tight font-sans">
          Experience &amp; Training
        </h2>
        <p className="text-sm sm:text-base font-mono text-cyan-400/80 mt-1 uppercase tracking-wider">
          TECHNICAL INTERNSHIPS, INDUSTRY TRAINING &amp; PROGRAMS
        </p>
      </motion.div>

      {/* Vertical Timeline Structure */}
      <div className="relative pl-6 sm:pl-8 md:pl-10">
        {/* Continuous Vertical Timeline Rail */}
        <div
          className="absolute left-2.5 sm:left-3.5 md:left-4 top-2 bottom-6 w-px bg-gradient-to-b from-cyan-400 via-cyan-500/40 to-cyan-950"
          aria-hidden="true"
        />

        {/* Timeline Entries */}
        <div className="space-y-8 sm:space-y-10">
          {EXPERIENCES.map((item, index) => {
            const IconComponent = item.icon
            return (
              <motion.div
                key={item.id}
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: '-40px' }}
                className="relative flex items-start group"
              >
                {/* Timeline Node Dot */}
                <div
                  className="absolute -left-6 sm:-left-8 md:-left-10 mt-1.5 flex items-center justify-center w-5 h-5 sm:w-6 sm:h-6 rounded-full bg-[#071322] border-2 border-cyan-400 group-hover:border-cyan-300 group-hover:scale-110 transition-all duration-300 shadow-[0_0_10px_rgba(6,182,212,0.4)]"
                  aria-hidden="true"
                >
                  <span className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-cyan-400" />
                </div>

                {/* Entry Card */}
                <div className="w-full rounded-xl bg-[#091524]/90 border border-cyan-500/25 hover:border-cyan-500/50 shadow-[0_8px_30px_rgba(0,0,0,0.5)] backdrop-blur-md overflow-hidden transition-colors">
                  {/* Card Header Strip */}
                  <div className="flex flex-wrap items-center justify-between px-4 sm:px-6 py-2.5 bg-[#0d1f33] border-b border-cyan-500/20 text-xs font-mono gap-2">
                    <div className="flex items-center gap-2 text-cyan-300">
                      <IconComponent className="w-3.5 h-3.5 text-cyan-400 shrink-0" />
                      <span className="font-semibold tracking-wider">{item.type}</span>
                    </div>

                    {item.timeInfo && (
                      <div className="flex items-center gap-1.5 text-slate-300 text-[11px] bg-[#06111e] px-2 py-0.5 rounded border border-cyan-950">
                        {item.timeType === 'dates' ? (
                          <Calendar className="w-3 h-3 text-cyan-400" />
                        ) : (
                          <Clock className="w-3 h-3 text-cyan-400" />
                        )}
                        <span>{item.timeInfo}</span>
                      </div>
                    )}
                  </div>

                  {/* Card Content Body */}
                  <div className="p-4 sm:p-6 space-y-4">
                    {/* Role & Organisation */}
                    <div>
                      <h3 className="text-lg sm:text-xl font-bold text-slate-100 group-hover:text-cyan-300 transition-colors">
                        {item.role}
                      </h3>
                      <div className="flex items-center gap-1.5 text-sm font-medium text-cyan-400/90 mt-1">
                        <Building2 className="w-4 h-4 text-cyan-500/80 shrink-0" />
                        <span>{item.organization}</span>
                      </div>
                    </div>

                    {/* Mentor Attribution (if present) */}
                    {item.mentor && (
                      <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded bg-[#061220] border border-cyan-900/50 text-xs font-mono text-slate-300">
                        <UserCheck className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                        <span>Mentor: {item.mentor}</span>
                      </div>
                    )}

                    {/* Concise Description (if present) */}
                    {item.description && (
                      <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-normal">
                        {item.description}
                      </p>
                    )}

                    {/* Technical Exposure Badges */}
                    <div className="space-y-1.5 pt-1">
                      <div className="text-[10px] font-mono uppercase tracking-wider text-slate-400">
                        TECHNICAL EXPOSURE
                      </div>
                      <div className="flex flex-wrap gap-1.5">
                        {item.tags.map((tag) => (
                          <span
                            key={tag}
                            className="px-2.5 py-1 rounded bg-[#061220] border border-cyan-500/25 text-cyan-300 text-xs font-mono"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Micro Footer Spec */}
                  <div className="px-4 sm:px-6 py-1.5 bg-[#06101c] border-t border-cyan-900/30 flex items-center justify-between text-[10px] font-mono text-slate-500">
                    <span>TIMELINE ENTRY // 0{index + 1}</span>
                    <span className="text-cyan-500/60">PRACTICAL ENGINEERING</span>
                  </div>
                </div>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
