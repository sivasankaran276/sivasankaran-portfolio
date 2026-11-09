import React from 'react'
import { motion, useReducedMotion, type Variants } from 'framer-motion'
import {
  Terminal,
  Activity,
  Cpu,
  Compass,
  Lock,
  Navigation,
  Sparkles,
  Plane
} from 'lucide-react'

export const Projects: React.FC = () => {
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
      id="projects"
      className="scroll-mt-24 border-t border-cyan-950/60 py-20 sm:py-28 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto relative z-10"
      aria-labelledby="projects-heading"
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
          <span>SECTION // 02</span>
        </div>
        <h2 id="projects-heading" className="text-3xl sm:text-4xl font-bold text-slate-100 tracking-tight font-sans">
          Projects Showcase
        </h2>
        <p className="text-sm sm:text-base font-mono text-cyan-400/80 mt-1 uppercase tracking-wider">
          EMBEDDED ARCHITECTURES &amp; ROBOTICS PLATFORMS
        </p>
      </motion.div>

      {/* 1. INTELLIPUMP — LARGE FEATURED PROJECT CARD */}
      <motion.div
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-40px' }}
        className="rounded-2xl bg-[#091524]/90 border border-cyan-500/35 shadow-[0_16px_40px_rgba(0,0,0,0.6)] backdrop-blur-md overflow-hidden mb-10"
      >
        {/* Chassis Top Bar */}
        <div className="flex flex-wrap items-center justify-between px-5 py-3 bg-[#0d1f33] border-b border-cyan-500/25 text-xs font-mono gap-2">
          <div className="flex items-center gap-2 text-cyan-300 font-semibold tracking-wider">
            <Sparkles className="w-4 h-4 text-cyan-400" />
            <span>FEATURED SYSTEM // ARCHITECTURE 01</span>
          </div>

          <div className="flex items-center gap-2 text-xs">
            <span className="flex items-center gap-1.5 px-2 py-0.5 rounded-full bg-cyan-950/80 border border-cyan-500/40 text-cyan-300 text-[11px]">
              <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse" />
              STATUS: IN DEVELOPMENT
            </span>
          </div>
        </div>

        {/* Card Body: 2-Column Responsive Layout */}
        <div className="p-6 sm:p-8 lg:p-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          {/* Left Details Column */}
          <div className="lg:col-span-7 space-y-6">
            <div>
              <div className="text-xs font-mono uppercase tracking-widest text-cyan-400 mb-1.5 flex items-center gap-2">
                <span>DIGITAL TWIN &amp; EMBEDDED DAQ</span>
                <span className="h-px w-8 bg-cyan-500/40" />
              </div>
              <h3 className="text-2xl sm:text-3xl font-bold text-slate-100 tracking-tight leading-snug">
                IntelliPump: AI-Enabled Digital Twin-Based Pump Health Monitoring System
              </h3>
              <p className="text-sm font-mono text-cyan-300/80 mt-1">
                Embedded Sensing • Data Acquisition • Anomaly Detection Concepts
              </p>
            </div>

            <p className="text-sm sm:text-base text-slate-300 leading-relaxed font-normal">
              An intelligent condition monitoring system in active development, designed to explore predictive pump maintenance through physical embedded sensing, multi-channel telemetry acquisition, and digital twin concepts. The architecture couples on-pump instrumentation with Python-based analytical pipelines and dashboard visualization for operational state monitoring.
            </p>

            {/* Hardware Instrumentation Stack */}
            <div className="space-y-2">
              <div className="text-[11px] font-mono uppercase tracking-widest text-slate-400 flex items-center gap-2">
                <Cpu className="w-3.5 h-3.5 text-cyan-400" />
                <span>HARDWARE &amp; SENSING SUITE</span>
              </div>
              <div className="flex flex-wrap gap-2">
                {[
                  { name: 'ESP32', desc: 'Core DAQ Node' },
                  { name: 'MPU6050', desc: 'Vibration & Motion' },
                  { name: 'DS18B20', desc: 'Temperature' },
                  { name: 'ZMPT101B', desc: 'AC Voltage' },
                  { name: 'WCS1700', desc: 'Current Transducer' },
                ].map((hw) => (
                  <div
                    key={hw.name}
                    className="flex items-center gap-1.5 px-3 py-1 rounded bg-[#061220] border border-cyan-500/25 font-mono text-xs"
                  >
                    <span className="font-semibold text-cyan-300">{hw.name}</span>
                    <span className="text-[10px] text-slate-400 border-l border-cyan-950 pl-1.5">{hw.desc}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Software Stack */}
            <div className="space-y-2">
              <div className="text-[11px] font-mono uppercase tracking-widest text-slate-400 flex items-center gap-2">
                <Terminal className="w-3.5 h-3.5 text-cyan-400" />
                <span>SOFTWARE &amp; ANALYTICS DIRECTION</span>
              </div>
              <div className="flex flex-wrap gap-2">
                {['Python', 'Machine Learning', 'Dashboard Visualisation'].map((sw) => (
                  <span
                    key={sw}
                    className="px-2.5 py-1 rounded bg-[#0b1b2d] border border-cyan-900/50 text-slate-200 text-xs font-mono"
                  >
                    {sw}
                  </span>
                ))}
              </div>
            </div>

            {/* Repository Access Notice */}
            <div className="pt-2 flex items-center gap-2 text-xs font-mono text-slate-400 border-t border-cyan-950/70">
              <Lock className="w-3.5 h-3.5 text-cyan-500/70" />
              <span>Source Repository: Private / Work in progress</span>
            </div>
          </div>

          {/* Right Architecture SVG Diagram Column */}
          <div className="lg:col-span-5 w-full">
            <div className="rounded-xl bg-[#06101c] border border-cyan-500/25 p-4 shadow-inner relative overflow-hidden">
              <div className="text-[10px] font-mono uppercase tracking-wider text-cyan-400/80 mb-2 flex items-center justify-between">
                <span>SYSTEM ARCHITECTURE DIAGRAM</span>
                <span className="text-[9px] text-slate-400">SCHEMATIC OVERVIEW</span>
              </div>

              {/* Technical SVG Illustration of Digital Twin DAQ Pipeline */}
              <svg
                viewBox="0 0 360 270"
                className="w-full h-auto text-slate-300 select-none"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                aria-hidden="true"
              >
                {/* Background Grid Lines */}
                <path d="M 20 0 L 20 270 M 180 0 L 180 270 M 340 0 L 340 270" stroke="#0e2338" strokeWidth="0.5" strokeDasharray="3 3" />
                <path d="M 0 70 L 360 70 M 0 170 L 360 170" stroke="#0e2338" strokeWidth="0.5" strokeDasharray="3 3" />

                {/* Block 1: Physical Pump & Sensors */}
                <rect x="15" y="20" width="145" height="105" rx="6" fill="#091829" stroke="#06b6d4" strokeWidth="1" strokeOpacity="0.4" />
                <text x="25" y="38" fill="#38bdf8" fontSize="9" fontFamily="monospace" fontWeight="bold">PHYSICAL SENSING LAYER</text>

                {/* Sensor nodes */}
                <rect x="25" y="48" width="58" height="18" rx="3" fill="#050e18" stroke="#164e63" strokeWidth="0.8" />
                <text x="30" y="60" fill="#94a3b8" fontSize="8" fontFamily="monospace">MPU6050 [VIB]</text>

                <rect x="90" y="48" width="60" height="18" rx="3" fill="#050e18" stroke="#164e63" strokeWidth="0.8" />
                <text x="95" y="60" fill="#94a3b8" fontSize="8" fontFamily="monospace">DS18B20 [TEMP]</text>

                <rect x="25" y="72" width="60" height="18" rx="3" fill="#050e18" stroke="#164e63" strokeWidth="0.8" />
                <text x="30" y="84" fill="#94a3b8" fontSize="8" fontFamily="monospace">ZMPT101B [V]</text>

                <rect x="90" y="72" width="60" height="18" rx="3" fill="#050e18" stroke="#164e63" strokeWidth="0.8" />
                <text x="95" y="84" fill="#94a3b8" fontSize="8" fontFamily="monospace">WCS1700 [I]</text>

                <rect x="25" y="96" width="125" height="20" rx="3" fill="#0c233a" stroke="#06b6d4" strokeWidth="1" />
                <text x="36" y="110" fill="#22d3ee" fontSize="9" fontFamily="monospace" fontWeight="bold">ESP32 DAQ NODE</text>

                {/* Connection Trace to Digital Twin */}
                <path d="M 160 106 L 200 106 L 200 65 L 220 65" stroke="#06b6d4" strokeWidth="1.5" strokeDasharray="4 2" />
                <circle cx="200" cy="106" r="2.5" fill="#22d3ee" />

                {/* Block 2: Digital Twin & ML Pipeline */}
                <rect x="220" y="20" width="125" height="105" rx="6" fill="#091829" stroke="#3b82f6" strokeWidth="1" strokeOpacity="0.4" />
                <text x="230" y="38" fill="#60a5fa" fontSize="9" fontFamily="monospace" fontWeight="bold">DIGITAL TWIN (PYTHON)</text>

                <rect x="230" y="48" width="105" height="20" rx="3" fill="#050e18" stroke="#1e3a8a" strokeWidth="0.8" />
                <text x="236" y="62" fill="#cbd5e1" fontSize="8" fontFamily="monospace">DATA PRE-PROCESSING</text>

                <rect x="230" y="74" width="105" height="20" rx="3" fill="#050e18" stroke="#1e3a8a" strokeWidth="0.8" />
                <text x="236" y="88" fill="#cbd5e1" fontSize="8" fontFamily="monospace">ANOMALY DETECTION ML</text>

                <rect x="230" y="100" width="105" height="18" rx="3" fill="#0d2338" stroke="#38bdf8" strokeWidth="0.8" />
                <text x="242" y="112" fill="#38bdf8" fontSize="8" fontFamily="monospace">VIRTUAL TWIN MODEL</text>

                {/* Downward Trace to Dashboard */}
                <path d="M 282 125 L 282 155 L 180 155 L 180 175" stroke="#38bdf8" strokeWidth="1.5" strokeDasharray="4 2" />
                <circle cx="282" cy="155" r="2.5" fill="#38bdf8" />

                {/* Block 3: Dashboard Visualisation Layer */}
                <rect x="35" y="175" width="290" height="78" rx="6" fill="#071424" stroke="#06b6d4" strokeWidth="1" strokeOpacity="0.5" />
                <text x="48" y="193" fill="#22d3ee" fontSize="9" fontFamily="monospace" fontWeight="bold">DASHBOARD &amp; TELEMETRY VISUALISATION</text>

                {/* Dashboard simulated channels */}
                <rect x="48" y="202" width="125" height="42" rx="3" fill="#030912" stroke="#0e2842" strokeWidth="0.8" />
                <path d="M 52 232 L 68 226 L 85 235 L 102 215 L 120 224 L 140 210 L 165 220" stroke="#06b6d4" strokeWidth="1.2" />
                <text x="54" y="213" fill="#94a3b8" fontSize="7" fontFamily="monospace">VIBRATION SENSING</text>

                <rect x="185" y="202" width="128" height="42" rx="3" fill="#030912" stroke="#0e2842" strokeWidth="0.8" />
                <path d="M 190 236 L 210 232 L 230 228 L 255 224 L 280 220 L 305 218" stroke="#10b981" strokeWidth="1.2" />
                <text x="192" y="213" fill="#94a3b8" fontSize="7" fontFamily="monospace">THERMAL &amp; CURRENT</text>
              </svg>
            </div>
          </div>
        </div>
      </motion.div>

      {/* 2. THREE-PROJECT RESPONSIVE GRID */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
        {/* Card 1: Niti Vahan */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-40px' }}
          className="rounded-xl bg-[#091524]/85 border border-cyan-500/25 hover:border-cyan-500/50 shadow-[0_10px_30px_rgba(0,0,0,0.5)] backdrop-blur-md overflow-hidden flex flex-col justify-between transition-colors group"
        >
          <div>
            {/* SVG Visual Header: Autonomous Navigation Map */}
            <div className="h-44 bg-[#050f1a] border-b border-cyan-900/40 p-3 relative flex items-center justify-center overflow-hidden">
              <svg viewBox="0 0 280 140" className="w-full h-full" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                {/* Map grid lines */}
                <path d="M 20 20 L 260 20 M 20 60 L 260 60 M 20 100 L 260 100 M 20 120 L 260 120" stroke="#0a2238" strokeWidth="0.7" strokeDasharray="2 4" />
                <path d="M 40 10 L 40 130 M 100 10 L 100 130 M 160 10 L 160 130 M 220 10 L 220 130" stroke="#0a2238" strokeWidth="0.7" strokeDasharray="2 4" />

                {/* Spatial Map Boundaries */}
                <rect x="50" y="30" width="35" height="25" fill="#08233c" stroke="#164e63" strokeWidth="1" />
                <rect x="180" y="45" width="45" height="30" fill="#08233c" stroke="#164e63" strokeWidth="1" />
                <rect x="80" y="85" width="50" height="20" fill="#08233c" stroke="#164e63" strokeWidth="1" />

                {/* Planned Trajectory Path */}
                <path d="M 45 105 Q 120 40 235 95" stroke="#38bdf8" strokeWidth="1.8" strokeDasharray="4 2" />

                {/* Mobile Robot Coordinate Frame */}
                <circle cx="45" cy="105" r="10" fill="#0b243e" stroke="#22d3ee" strokeWidth="1.5" />
                <path d="M 45 105 L 53 100" stroke="#22d3ee" strokeWidth="2" strokeLinecap="round" />

                {/* Spatial Sensing Vectors */}
                <path d="M 45 105 L 20 70 M 45 105 L 50 30 M 45 105 L 90 60 M 45 105 L 80 85" stroke="#06b6d4" strokeWidth="0.8" strokeOpacity="0.6" strokeDasharray="3 3" />

                {/* Navigation Waypoint */}
                <circle cx="235" cy="95" r="6" fill="#03251c" stroke="#10b981" strokeWidth="1.5" />
                <circle cx="235" cy="95" r="2" fill="#10b981" />

                {/* Labels */}
                <text x="12" y="18" fill="#38bdf8" fontSize="8" fontFamily="monospace">ROBOTICS::NAV2_SLAM</text>
                <text x="180" y="18" fill="#94a3b8" fontSize="7" fontFamily="monospace">RVIZ / GAZEBO</text>
              </svg>
            </div>

            <div className="p-5 space-y-4">
              <div>
                <div className="flex items-center justify-between text-[11px] font-mono text-cyan-400 mb-1">
                  <span>E-YANTRA ROBOTICS</span>
                  <span className="text-[10px] text-cyan-300 bg-cyan-950/60 px-1.5 py-0.5 rounded border border-cyan-800/40">STATUS: ONGOING</span>
                </div>
                <h3 className="text-xl font-bold text-slate-100 group-hover:text-cyan-300 transition-colors">
                  Niti Vahan
                </h3>
                <p className="text-xs font-mono text-slate-400 mt-0.5">
                  Autonomous Robotics &amp; Navigation Stack
                </p>
              </div>

              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-normal">
                An ongoing autonomous mobile robotics project developed within the e-Yantra robotics framework, focused on software-driven navigation and spatial intelligence. Employs ROS 2 as the core middleware alongside Nav2 for path planning, slam-toolbox for mapping, and Gazebo/RViz for physics simulation and telemetry visualization.
              </p>

              {/* Technologies */}
              <div className="space-y-1.5 pt-1">
                <div className="text-[10px] font-mono uppercase tracking-wider text-slate-400">TOOLS &amp; STACK</div>
                <div className="flex flex-wrap gap-1.5">
                  {['ROS 2', 'Nav2', 'slam-toolbox', 'Gazebo', 'RViz'].map((tech) => (
                    <span
                      key={tech}
                      className="px-2 py-0.5 rounded bg-[#061220] border border-cyan-500/25 text-cyan-300 text-xs font-mono"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Card Footer */}
          <div className="px-5 py-2.5 bg-[#071322] border-t border-cyan-900/40 flex items-center justify-between text-[11px] font-mono text-slate-400">
            <span className="flex items-center gap-1.5">
              <Navigation className="w-3.5 h-3.5 text-cyan-400" />
              <span>e-Yantra Project</span>
            </span>
            <span className="text-slate-400">Repository: Academic (Ongoing)</span>
          </div>
        </motion.div>

        {/* Card 2: TriSync */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-40px' }}
          className="rounded-xl bg-[#091524]/85 border border-cyan-500/25 hover:border-cyan-500/50 shadow-[0_10px_30px_rgba(0,0,0,0.5)] backdrop-blur-md overflow-hidden flex flex-col justify-between transition-colors group"
        >
          <div>
            {/* SVG Visual Header: Virtual Instrumentation Multi-Channel */}
            <div className="h-44 bg-[#050f1a] border-b border-cyan-900/40 p-3 relative flex items-center justify-center overflow-hidden">
              <svg viewBox="0 0 280 140" className="w-full h-full" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                {/* Frame border */}
                <rect x="15" y="15" width="250" height="110" rx="4" fill="#081728" stroke="#164e63" strokeWidth="0.8" />

                {/* Multi-channel Input Bus */}
                <path d="M 25 35 L 75 35" stroke="#06b6d4" strokeWidth="1.5" />
                <path d="M 25 70 L 75 70" stroke="#3b82f6" strokeWidth="1.5" />
                <path d="M 25 105 L 75 105" stroke="#10b981" strokeWidth="1.5" />

                <circle cx="25" cy="35" r="2.5" fill="#06b6d4" />
                <circle cx="25" cy="70" r="2.5" fill="#3b82f6" />
                <circle cx="25" cy="105" r="2.5" fill="#10b981" />

                <text x="28" y="30" fill="#94a3b8" fontSize="7" fontFamily="monospace">CH_A</text>
                <text x="28" y="65" fill="#94a3b8" fontSize="7" fontFamily="monospace">CH_B</text>
                <text x="28" y="100" fill="#94a3b8" fontSize="7" fontFamily="monospace">CH_C</text>

                {/* Analog Conditioning & ADC Stage */}
                <rect x="75" y="28" width="60" height="85" rx="3" fill="#040d18" stroke="#0e3352" strokeWidth="1" />
                <text x="80" y="45" fill="#38bdf8" fontSize="7" fontFamily="monospace">ANALOG</text>
                <text x="80" y="55" fill="#38bdf8" fontSize="7" fontFamily="monospace">FRONT-END</text>
                <text x="80" y="65" fill="#38bdf8" fontSize="7" fontFamily="monospace">ADC_SAMPLING</text>

                <path d="M 85 75 L 125 75 M 85 85 L 125 85 M 85 95 L 125 95" stroke="#164e63" strokeWidth="0.7" />

                {/* Connecting Bus */}
                <path d="M 135 70 L 155 70" stroke="#06b6d4" strokeWidth="1.5" strokeDasharray="3 2" />

                {/* Virtual Instrument Display */}
                <rect x="155" y="28" width="100" height="85" rx="3" fill="#030910" stroke="#0284c7" strokeWidth="1" />
                <text x="162" y="40" fill="#67e8f9" fontSize="7" fontFamily="monospace">CONDITION MONITOR</text>

                {/* Waveform Trace A */}
                <path d="M 160 60 Q 175 48 190 60 T 220 60 T 250 60" stroke="#22d3ee" strokeWidth="1.2" />
                {/* Waveform Trace B */}
                <path d="M 160 85 Q 175 95 190 85 T 220 85 T 250 85" stroke="#10b981" strokeWidth="1.2" />

                <text x="162" y="105" fill="#94a3b8" fontSize="6" fontFamily="monospace">SIGNAL VISUALIZATION</text>
              </svg>
            </div>

            <div className="p-5 space-y-4">
              <div>
                <div className="flex items-center justify-between text-[11px] font-mono text-cyan-400 mb-1">
                  <span>CONDITION MONITORING</span>
                  <span className="text-[10px] text-cyan-300 bg-cyan-950/60 px-1.5 py-0.5 rounded border border-cyan-800/40">STATUS: CONCEPT</span>
                </div>
                <h3 className="text-xl font-bold text-slate-100 group-hover:text-cyan-300 transition-colors">
                  TriSync
                </h3>
                <p className="text-xs font-mono text-slate-400 mt-0.5">
                  Advanced Instrumentation System
                </p>
              </div>

              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-normal">
                An advanced condition monitoring system at the concept and design stage, focused on virtual instrumentation principles. Designed to integrate multi-channel signal acquisition, dynamic sensor processing, and modular software interfaces to evaluate physical system parameters.
              </p>

              {/* Technologies */}
              <div className="space-y-1.5 pt-1">
                <div className="text-[10px] font-mono uppercase tracking-wider text-slate-400">FOCUS DOMAINS</div>
                <div className="flex flex-wrap gap-1.5">
                  {['Virtual Instrumentation', 'Condition Monitoring', 'Signal Processing'].map((tech) => (
                    <span
                      key={tech}
                      className="px-2 py-0.5 rounded bg-[#061220] border border-cyan-500/25 text-cyan-300 text-xs font-mono"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Card Footer */}
          <div className="px-5 py-2.5 bg-[#071322] border-t border-cyan-900/40 flex items-center justify-between text-[11px] font-mono text-slate-400">
            <span className="flex items-center gap-1.5">
              <Activity className="w-3.5 h-3.5 text-cyan-400" />
              <span>Instrumentation System</span>
            </span>
            <span className="text-slate-400">Repository: In design phase</span>
          </div>
        </motion.div>

        {/* Card 3: Vision-Based UAV Navigation */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-40px' }}
          className="rounded-xl bg-[#091524]/85 border border-cyan-500/25 hover:border-cyan-500/50 shadow-[0_10px_30px_rgba(0,0,0,0.5)] backdrop-blur-md overflow-hidden flex flex-col justify-between transition-colors group"
        >
          <div>
            {/* SVG Visual Header: UAV Optical Navigation */}
            <div className="h-44 bg-[#050f1a] border-b border-cyan-900/40 p-3 relative flex items-center justify-center overflow-hidden">
              <svg viewBox="0 0 280 140" className="w-full h-full" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                {/* Aerial Grid / Reference */}
                <path d="M 20 120 L 260 120 M 50 110 L 230 110 M 80 100 L 200 100" stroke="#082035" strokeWidth="0.8" />

                {/* UAV Quadcopter Frame */}
                <rect x="130" y="28" width="20" height="14" rx="2" fill="#0b243e" stroke="#06b6d4" strokeWidth="1" />
                <path d="M 120 22 L 140 35 L 160 22" stroke="#38bdf8" strokeWidth="1.5" />
                <path d="M 120 48 L 140 35 L 160 48" stroke="#38bdf8" strokeWidth="1.5" />
                <ellipse cx="120" cy="22" rx="10" ry="3" fill="#071b2d" stroke="#22d3ee" strokeWidth="0.8" />
                <ellipse cx="160" cy="22" rx="10" ry="3" fill="#071b2d" stroke="#22d3ee" strokeWidth="0.8" />
                <ellipse cx="120" cy="48" rx="10" ry="3" fill="#071b2d" stroke="#22d3ee" strokeWidth="0.8" />
                <ellipse cx="160" cy="48" rx="10" ry="3" fill="#071b2d" stroke="#22d3ee" strokeWidth="0.8" />

                {/* Optical Camera Field-of-View Cone */}
                <path d="M 140 42 L 80 115 L 200 115 Z" fill="#06b6d4" fillOpacity="0.06" stroke="#06b6d4" strokeWidth="0.8" strokeDasharray="3 2" />

                {/* Ground Reference Points */}
                <g fill="#22d3ee" stroke="#080F19" strokeWidth="0.5">
                  <circle cx="105" cy="115" r="2.5" />
                  <circle cx="130" cy="108" r="2.5" />
                  <circle cx="155" cy="118" r="2.5" />
                  <circle cx="175" cy="112" r="2.5" />
                </g>

                {/* Labels */}
                <text x="15" y="18" fill="#38bdf8" fontSize="8" fontFamily="monospace">UAV_VISION::CONCEPT_MODEL</text>
                <text x="180" y="18" fill="#94a3b8" fontSize="7" fontFamily="monospace">OPTICAL SENSING</text>
              </svg>
            </div>

            <div className="p-5 space-y-4">
              <div>
                <div className="flex items-center justify-between text-[11px] font-mono text-cyan-400 mb-1">
                  <span>AERIAL ROBOTICS</span>
                  <span className="text-[10px] text-cyan-300 bg-cyan-950/60 px-1.5 py-0.5 rounded border border-cyan-800/40">STATUS: PROPOSED CONCEPT</span>
                </div>
                <h3 className="text-xl font-bold text-slate-100 group-hover:text-cyan-300 transition-colors">
                  Vision-Based UAV Navigation
                </h3>
                <p className="text-xs font-mono text-slate-400 mt-0.5">
                  Aerial Guidance Concept
                </p>
              </div>

              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-normal">
                A proposed concept and architectural design exploring vision-based approaches for unmanned aerial vehicle (UAV) navigation. Centers on computer vision techniques and camera-based relative localization to assist state estimation in constrained flight environments.
              </p>

              {/* Technologies */}
              <div className="space-y-1.5 pt-1">
                <div className="text-[10px] font-mono uppercase tracking-wider text-slate-400">FOCUS DOMAINS</div>
                <div className="flex flex-wrap gap-1.5">
                  {['Vision-Based Navigation', 'UAV Systems', 'Computer Vision', 'Sensor Interfacing'].map((tech) => (
                    <span
                      key={tech}
                      className="px-2 py-0.5 rounded bg-[#061220] border border-cyan-500/25 text-cyan-300 text-xs font-mono"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Card Footer */}
          <div className="px-5 py-2.5 bg-[#071322] border-t border-cyan-900/40 flex items-center justify-between text-[11px] font-mono text-slate-400">
            <span className="flex items-center gap-1.5">
              <Plane className="w-3.5 h-3.5 text-cyan-400" />
              <span>Aerial Robotics System</span>
            </span>
            <span className="text-slate-400">Repository: In conceptual design</span>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
