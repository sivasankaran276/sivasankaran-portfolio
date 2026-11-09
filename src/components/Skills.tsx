import React from 'react'
import { motion, useReducedMotion, type Variants } from 'framer-motion'
import {
  Code2,
  Cpu,
  Network,
  Bot,
  Wrench,
  Zap,
  Compass,
  Terminal
} from 'lucide-react'

interface SkillCategory {
  id: string
  index: string
  title: string
  domain: string
  icon: React.ElementType
  skills: string[]
}

const SKILL_CATEGORIES: SkillCategory[] = [
  {
    id: 'programming-languages',
    index: 'CAT // 01',
    title: 'Programming Languages',
    domain: 'SYNTAX & LOGIC',
    icon: Code2,
    skills: ['C', 'C++', 'Python', 'Verilog', 'VHDL'],
  },
  {
    id: 'microcontrollers',
    index: 'CAT // 02',
    title: 'Microcontrollers & Dev Boards',
    domain: 'TARGET HARDWARE',
    icon: Cpu,
    skills: ['STM32', 'ESP32', 'Arduino UNO', 'Arduino Mega'],
  },
  {
    id: 'communication-iot',
    index: 'CAT // 03',
    title: 'Embedded Communication & IoT',
    domain: 'BUS & PROTOCOLS',
    icon: Network,
    skills: ['UART', 'SPI', 'I2C', 'MQTT', 'Blynk', 'ThingSpeak'],
  },
  {
    id: 'robotics-simulation',
    index: 'CAT // 04',
    title: 'Robotics & Simulation',
    domain: 'AUTONOMOUS STACK',
    icon: Bot,
    skills: ['ROS 2', 'Nav2', 'Gazebo', 'RViz', 'slam-toolbox'],
  },
  {
    id: 'engineering-software',
    index: 'CAT // 05',
    title: 'Engineering Software & Tools',
    domain: 'IDE & SIMULATION',
    icon: Wrench,
    skills: [
      'STM32CubeIDE',
      'MATLAB',
      'LabVIEW',
      'Proteus',
      'CST Studio Suite',
      'Quartus',
      'ModelSim',
    ],
  },
  {
    id: 'hardware-electronics',
    index: 'CAT // 06',
    title: 'Hardware & Electronics',
    domain: 'CIRCUITS & SYSTEMS',
    icon: Zap,
    skills: [
      'Sensor Interfacing',
      'Embedded Prototyping',
      'Digital Electronics',
      'Microprocessor Fundamentals',
    ],
  },
]

export const Skills: React.FC = () => {
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
      id="skills"
      className="scroll-mt-24 border-t border-cyan-950/60 py-20 sm:py-28 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto relative z-10"
      aria-labelledby="skills-heading"
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
          <span>SECTION // 04</span>
        </div>
        <h2 id="skills-heading" className="text-3xl sm:text-4xl font-bold text-slate-100 tracking-tight font-sans">
          Technical Skills
        </h2>
        <p className="text-sm sm:text-base font-mono text-cyan-400/80 mt-1 uppercase tracking-wider">
          ENGINEERING WORKSTATION // DOMAIN COMPETENCIES
        </p>
      </motion.div>

      {/* Skills Dashboard Grid: 6 Distinct Technical Groups */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-7">
        {SKILL_CATEGORIES.map((category) => {
          const IconComponent = category.icon
          return (
            <motion.div
              key={category.id}
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-40px' }}
              className="rounded-xl bg-[#091524]/90 border border-cyan-500/25 hover:border-cyan-500/45 shadow-[0_8px_30px_rgba(0,0,0,0.5)] backdrop-blur-md overflow-hidden flex flex-col justify-between transition-colors group"
            >
              <div>
                {/* Panel Header */}
                <div className="flex items-center justify-between px-4 sm:px-5 py-2.5 bg-[#0d1f33] border-b border-cyan-500/20 text-xs font-mono">
                  <div className="flex items-center gap-2 text-cyan-300">
                    <IconComponent className="w-3.5 h-3.5 text-cyan-400 shrink-0" />
                    <span className="font-semibold tracking-wider">{category.index}</span>
                  </div>
                  <span className="text-[10px] text-slate-400 font-mono tracking-wider">
                    {category.domain}
                  </span>
                </div>

                {/* Card Body */}
                <div className="p-4 sm:p-5 space-y-4">
                  <div>
                    <h3 className="text-base sm:text-lg font-bold text-slate-100 group-hover:text-cyan-300 transition-colors">
                      {category.title}
                    </h3>
                  </div>

                  {/* Technology Badges */}
                  <div className="flex flex-wrap gap-2 pt-1">
                    {category.skills.map((skill) => (
                      <span
                        key={skill}
                        className="inline-flex items-center px-2.5 py-1 rounded bg-[#061220] border border-cyan-500/25 hover:border-cyan-400/60 hover:bg-cyan-950/40 text-slate-200 text-xs font-mono transition-colors"
                      >
                        <span className="w-1.5 h-1.5 rounded-full bg-cyan-400/70 mr-1.5 shrink-0" />
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Panel Footer */}
              <div className="px-4 sm:px-5 py-2 bg-[#06101c] border-t border-cyan-900/30 flex items-center justify-between text-[10px] font-mono text-slate-500">
                <span className="flex items-center gap-1.5 text-cyan-500/70">
                  <Terminal className="w-3 h-3" />
                  <span>{category.skills.length} TECHNOLOGIES</span>
                </span>
                <span className="text-slate-400">TECHNICAL STACK</span>
              </div>
            </motion.div>
          )
        })}
      </div>
    </section>
  )
}
