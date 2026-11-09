import React from 'react'
import { motion, useReducedMotion, type Variants } from 'framer-motion'
import {
  GraduationCap,
  Cpu,
  Terminal,
  Layers,
  Activity,
  Code2,
  Microchip,
  CheckCircle2,
  Compass
} from 'lucide-react'

const CORE_TECH = [
  { name: 'C', category: 'Systems Language', icon: Code2 },
  { name: 'C++', category: 'Embedded OOP', icon: Code2 },
  { name: 'STM32', category: 'ARM Cortex-M', icon: Microchip },
  { name: 'ESP32', category: 'IoT & FreeRTOS', icon: Cpu },
  { name: 'ROS 2', category: 'Robotics Middleware', icon: Layers },
]

const KEY_INTERESTS = [
  {
    title: 'Microcontroller Architecture',
    desc: 'Low-level peripheral configuration, register-level drivers, and hardware timing.',
    icon: Cpu,
  },
  {
    title: 'Real-Time Embedded Systems',
    desc: 'Deterministic task scheduling, FreeRTOS integration, and resource-constrained design.',
    icon: Terminal,
  },
  {
    title: 'Robotics & Control Systems',
    desc: 'Actuator interfacing, kinematic telemetry, and ROS 2 communication nodes.',
    icon: Layers,
  },
  {
    title: 'Sensor Integration & Signal Conditioning',
    desc: 'Analog/digital acquisition, bus communication (I2C, SPI, UART), and filtering.',
    icon: Activity,
  },
]

export const About: React.FC = () => {
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
      id="about"
      className="scroll-mt-24 border-t border-cyan-950/60 py-20 sm:py-28 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto relative z-10"
      aria-labelledby="about-heading"
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
          <span>SECTION // 01</span>
        </div>
        <h2 id="about-heading" className="text-3xl sm:text-4xl font-bold text-slate-100 tracking-tight font-sans">
          About Me
        </h2>
        <p className="text-sm sm:text-base font-mono text-cyan-400/80 mt-1 uppercase tracking-wider">
          ENGINEERING FOUNDATION &amp; TECHNICAL FOCUS
        </p>
      </motion.div>

      {/* Two-Column Responsive Layout */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
        {/* Left Column: Concise, Professional Introduction */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-40px' }}
          className="lg:col-span-7 space-y-6 text-slate-300"
        >
          <div className="max-w-none space-y-4 text-base sm:text-lg leading-relaxed font-normal">
            <p>
              I am an undergraduate student pursuing{' '}
              <strong className="text-slate-100 font-semibold">
                Electronics and Instrumentation Engineering
              </strong>{' '}
              at{' '}
              <strong className="text-slate-100 font-semibold">
                Puducherry Technological University
              </strong>{' '}
              (graduating in <span className="text-cyan-300 font-mono">2027</span>). My academic coursework combines foundational training in measurement systems, industrial sensors, and electronic circuits with hands-on microcontroller programming.
            </p>
            <p>
              My professional direction is centered on{' '}
              <strong className="text-cyan-300 font-semibold">
                Embedded Systems and Firmware Engineering
              </strong>
              . I am dedicated to developing reliable software that operates close to the hardware layer—from low-level firmware in C and C++ to exploring deterministic real-time operating systems.
            </p>
            <p>
              My technical interests include{' '}
              <strong className="text-slate-100 font-semibold">
                microcontrollers, real-time embedded systems, robotics, sensor integration
              </strong>
              , and designing intelligent hardware-software systems.
            </p>
          </div>

          {/* Key Interest Pillars */}
          <div className="pt-2">
            <div className="text-xs font-mono uppercase tracking-widest text-cyan-400/80 mb-3 flex items-center gap-2">
              <span>AREAS OF ACTIVE EXPLORATION</span>
              <span className="flex-1 h-px bg-cyan-950/70" />
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {KEY_INTERESTS.map((interest) => {
                const IconComponent = interest.icon
                return (
                  <div
                    key={interest.title}
                    className="p-3.5 rounded-lg bg-[#0a1727]/80 border border-cyan-500/20 hover:border-cyan-500/40 transition-colors shadow-[0_2px_10px_rgba(0,0,0,0.3)]"
                  >
                    <div className="flex items-center gap-2 mb-1 text-slate-100 font-medium text-sm">
                      <IconComponent className="w-4 h-4 text-cyan-400 shrink-0" />
                      <span>{interest.title}</span>
                    </div>
                    <p className="text-xs text-slate-400 leading-normal pl-6">
                      {interest.desc}
                    </p>
                  </div>
                )
              })}
            </div>
          </div>
        </motion.div>

        {/* Right Column: Custom Technical Profile Panel */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-40px' }}
          className="lg:col-span-5 w-full"
        >
          <div className="rounded-xl bg-[#091524]/90 border border-cyan-500/30 shadow-[0_12px_36px_rgba(0,0,0,0.6)] backdrop-blur-md overflow-hidden relative">
            {/* Subtle PCB alignment markings */}
            <div
              className="absolute top-2 right-2 text-[8px] font-mono text-cyan-500/40 pointer-events-none select-none"
              aria-hidden="true"
            >
              + SPEC // REV_1.0
            </div>

            {/* Panel Header */}
            <div className="flex items-center justify-between px-4 py-3 bg-[#0d1f33] border-b border-cyan-500/20 text-xs font-mono">
              <div className="flex items-center gap-2 text-cyan-300 font-semibold tracking-wider">
                <Terminal className="w-3.5 h-3.5 text-cyan-400" />
                <span>TECHNICAL SPECIFICATION</span>
              </div>
              <div className="flex items-center gap-1.5 text-cyan-400 text-[11px]">
                <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse" />
                <span>PROFILE</span>
              </div>
            </div>

            {/* Profile Specification Rows */}
            <div className="p-5 space-y-4">
              <div className="space-y-3 font-mono text-xs">
                {/* Name */}
                <div className="flex flex-col sm:flex-row sm:items-baseline justify-between py-1.5 border-b border-cyan-950/60 gap-1">
                  <span className="text-slate-400 uppercase tracking-wide text-[11px]">CANDIDATE</span>
                  <span className="text-slate-100 font-semibold font-sans sm:font-mono text-sm">
                    Sivasankaran G.
                  </span>
                </div>

                {/* Education & Discipline */}
                <div className="flex flex-col sm:flex-row sm:items-baseline justify-between py-1.5 border-b border-cyan-950/60 gap-1">
                  <span className="text-slate-400 uppercase tracking-wide text-[11px]">DISCIPLINE</span>
                  <span className="text-cyan-300 font-medium text-right sm:text-right">
                    Electronics &amp; Instrumentation
                  </span>
                </div>

                {/* Institution */}
                <div className="flex flex-col sm:flex-row sm:items-baseline justify-between py-1.5 border-b border-cyan-950/60 gap-1">
                  <span className="text-slate-400 uppercase tracking-wide text-[11px] flex items-center gap-1">
                    <GraduationCap className="w-3 h-3 text-cyan-400" />
                    INSTITUTION
                  </span>
                  <span className="text-slate-200 text-right">
                    Puducherry Technological University
                  </span>
                </div>

                {/* Graduation Year */}
                <div className="flex flex-col sm:flex-row sm:items-baseline justify-between py-1.5 border-b border-cyan-950/60 gap-1">
                  <span className="text-slate-400 uppercase tracking-wide text-[11px]">GRADUATION</span>
                  <span className="text-emerald-400 font-semibold">
                    2027 (Expected)
                  </span>
                </div>

                {/* Professional Direction */}
                <div className="flex flex-col sm:flex-row sm:items-baseline justify-between py-1.5 border-b border-cyan-950/60 gap-1">
                  <span className="text-slate-400 uppercase tracking-wide text-[11px]">DIRECTION</span>
                  <span className="text-cyan-300 font-semibold text-right">
                    Embedded Systems &amp; Firmware
                  </span>
                </div>
              </div>

              {/* Core Technologies Block */}
              <div className="pt-2">
                <div className="text-[11px] font-mono uppercase tracking-widest text-cyan-400/80 mb-2.5 flex items-center justify-between">
                  <span>CORE TECHNOLOGIES</span>
                  <span className="text-[10px] text-slate-500">PRIMARY STACK</span>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {CORE_TECH.map((tech) => {
                    const TechIcon = tech.icon
                    return (
                      <div
                        key={tech.name}
                        className="flex items-center justify-between px-3 py-2 rounded-md bg-[#050f1a] border border-cyan-500/25 hover:border-cyan-400/50 transition-colors font-mono"
                      >
                        <div className="flex items-center gap-2">
                          <TechIcon className="w-3.5 h-3.5 text-cyan-400" />
                          <span className="text-xs font-semibold text-slate-100">{tech.name}</span>
                        </div>
                        <span className="text-[10px] text-slate-400">{tech.category}</span>
                      </div>
                    )
                  })}
                </div>
              </div>

              {/* Engineering Commitment Note */}
              <div className="pt-2">
                <div className="p-3 rounded-lg bg-[#050f1a]/60 border border-cyan-900/40 text-xs font-mono text-slate-300 flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                  <p className="leading-relaxed text-[11px]">
                    Focused on writing clean, deterministic code for constrained microcontrollers and integrating robust sensory feedback.
                  </p>
                </div>
              </div>
            </div>

            {/* Card Footer Strip */}
            <div className="px-4 py-2 bg-[#06101c] border-t border-cyan-500/20 flex items-center justify-between text-[10px] font-mono text-slate-400">
              <span className="text-cyan-400/80">DISCIPLINE: EIE</span>
              <span>FOCUS: HARDWARE &bull; SOFTWARE</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
