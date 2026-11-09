import React from 'react'
import { motion } from 'framer-motion'
import { Activity, Radio, Cpu, Terminal, Layers } from 'lucide-react'

export const HeroVisual: React.FC = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1], delay: 0.15 }}
      className="relative w-full max-w-lg lg:max-w-none mx-auto select-none"
      aria-hidden="true"
    >
      {/* Outer ambient glow */}
      <div className="absolute -inset-1 rounded-2xl bg-gradient-to-r from-cyan-500/20 via-blue-500/10 to-teal-500/20 blur-xl opacity-60" />

      {/* Main Industrial Chassis Frame */}
      <div className="relative rounded-2xl bg-[#0b1726]/90 border border-cyan-500/30 shadow-[0_20px_50px_rgba(0,0,0,0.8)] backdrop-blur-md overflow-hidden">
        {/* Chassis Top Header Bar */}
        <div className="flex items-center justify-between px-4 py-2.5 bg-[#0e1f33] border-b border-cyan-500/20 text-xs font-mono">
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-red-500/70 border border-red-400" />
            <span className="w-2.5 h-2.5 rounded-full bg-amber-500/70 border border-amber-400" />
            <span className="w-2.5 h-2.5 rounded-full bg-emerald-500/70 border border-emerald-400" />
            <span className="ml-2 text-cyan-400/90 font-semibold tracking-wider flex items-center gap-1.5">
              <Terminal className="w-3.5 h-3.5 text-cyan-400" />
              EMBEDDED SYSTEMS LAB
            </span>
          </div>

          <div className="flex items-center gap-3 text-[11px] text-slate-400">
            <span className="hidden sm:inline-flex items-center gap-1 text-emerald-400">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping" />
              ACTIVE
            </span>
            <span className="text-cyan-500/60">TEST BENCH</span>
          </div>
        </div>

        {/* Chassis Interior: PCB & Instrument Visual Grid */}
        <div className="p-4 sm:p-5 space-y-4">
          {/* Top Panel: Oscilloscope Waveform Display */}
          <div className="rounded-lg bg-[#07111e] border border-cyan-500/25 p-3 relative overflow-hidden">
            <div className="flex items-center justify-between text-[11px] font-mono text-slate-400 mb-2">
              <div className="flex items-center gap-1.5 text-cyan-300">
                <Activity className="w-3.5 h-3.5 text-cyan-400" />
                <span>SIGNAL PROCESSING</span>
              </div>
              <div className="flex items-center gap-3 text-cyan-400/75">
                <span>PWM GENERATION</span>
                <span className="text-emerald-400">CH1 ACTIVE</span>
              </div>
            </div>

            {/* Oscilloscope Grid & Wave */}
            <div className="relative h-20 w-full rounded bg-[#040912] border border-cyan-950/80 overflow-hidden flex items-center">
              {/* Scope background grid */}
              <svg className="absolute inset-0 w-full h-full opacity-20" xmlns="http://www.w3.org/2000/svg">
                <defs>
                  <pattern id="scope-grid" width="16" height="16" patternUnits="userSpaceOnUse">
                    <path d="M 16 0 L 0 0 0 16" fill="none" stroke="#06b6d4" strokeWidth="0.5" />
                  </pattern>
                </defs>
                <rect width="100%" height="100%" fill="url(#scope-grid)" />
              </svg>

              {/* Scope Center Crosshairs */}
              <div className="absolute inset-x-0 top-1/2 h-px bg-cyan-500/20" />
              <div className="absolute inset-y-0 left-1/2 w-px bg-cyan-500/20" />

              {/* Scrolling Wave SVG */}
              <svg
                className="w-full h-16 text-cyan-400 relative z-10"
                viewBox="0 0 400 64"
                fill="none"
                preserveAspectRatio="none"
              >
                <path
                  d="M0 32 L30 32 L30 12 L70 12 L70 52 L110 52 L110 32 L150 32 L150 12 L190 12 L190 52 L230 52 L230 32 L270 32 L270 12 L310 12 L310 52 L350 52 L350 32 L400 32"
                  stroke="#22d3ee"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeDasharray="600"
                  className="animate-wave-scroll filter drop-shadow-[0_0_6px_rgba(6,182,212,0.8)]"
                />
              </svg>

              {/* Real-time scanline shimmer */}
              <div className="absolute inset-y-0 w-12 bg-gradient-to-r from-transparent via-cyan-400/10 to-transparent pointer-events-none animate-pulse" />
            </div>
          </div>

          {/* Middle Row: Central MCU Die + Hardware Bus Array */}
          <div className="grid grid-cols-1 sm:grid-cols-12 lg:grid-cols-1 xl:grid-cols-12 gap-3.5">
            {/* MCU Chip Representation */}
            <div className="sm:col-span-7 lg:col-span-1 xl:col-span-7 rounded-lg bg-[#071322] border border-cyan-500/30 p-3.5 relative flex flex-col justify-between">
              {/* MCU Header */}
              <div className="flex items-center justify-between border-b border-cyan-900/40 pb-2">
                <span className="text-[10px] font-mono text-cyan-400 uppercase tracking-widest flex items-center gap-1">
                  <Cpu className="w-3 h-3 text-cyan-400" />
                  MICROCONTROLLER
                </span>
                <span className="text-[10px] font-mono text-emerald-400 bg-emerald-950/60 px-1.5 py-0.5 rounded border border-emerald-500/30">
                  SYSTEM READY
                </span>
              </div>

              {/* Chip Body Simulation */}
              <div className="my-3 flex items-center justify-center">
                <div className="relative p-4 rounded-md bg-[#0a1829] border border-cyan-500/40 shadow-[0_0_15px_rgba(6,182,212,0.15)] text-center w-full max-w-[210px]">
                  {/* Pin connectors on sides */}
                  <div className="absolute -top-1.5 inset-x-4 flex justify-between">
                    {[...Array(6)].map((_, i) => (
                      <span key={i} className="w-1.5 h-1.5 bg-cyan-400/60 rounded-xs" />
                    ))}
                  </div>
                  <div className="absolute -bottom-1.5 inset-x-4 flex justify-between">
                    {[...Array(6)].map((_, i) => (
                      <span key={i} className="w-1.5 h-1.5 bg-cyan-400/60 rounded-xs" />
                    ))}
                  </div>

                  <div className="text-xs font-bold font-mono text-slate-100 tracking-wider">
                    STM32F401RE
                  </div>
                  <div className="text-[10px] font-mono text-cyan-400 mt-0.5">
                    ARM® CORTEX®-M4
                  </div>
                  <div className="text-[9px] font-mono text-slate-400 mt-1 flex items-center justify-center gap-2">
                    <span>32-BIT CORE</span>
                    <span className="text-cyan-500">•</span>
                    <span>EMBEDDED C/C++</span>
                  </div>
                </div>
              </div>

              {/* Micro Status Bar */}
              <div className="flex items-center justify-between text-[10px] font-mono text-slate-400 pt-2 border-t border-cyan-900/40">
                <span className="text-cyan-300">EMBEDDED SYSTEMS</span>
                <span className="text-emerald-400 flex items-center gap-1">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                  RTOS SCHEDULER
                </span>
              </div>
            </div>

            {/* Hardware Bus Communication Indicators */}
            <div className="sm:col-span-5 lg:col-span-1 xl:col-span-5 rounded-lg bg-[#071322] border border-cyan-500/25 p-3 flex flex-col justify-between font-mono">
              <div className="text-[10px] text-cyan-400 uppercase tracking-widest border-b border-cyan-900/40 pb-2 flex items-center justify-between">
                <span>SERIAL INTERFACES</span>
                <Radio className="w-3 h-3 text-cyan-400" />
              </div>

              <div className="space-y-2 my-2 text-[11px]">
                <div className="flex items-center justify-between bg-[#040b14] px-2 py-1 rounded border border-cyan-950">
                  <span className="text-slate-300">I2C_1</span>
                  <span className="text-cyan-400 text-[10px]">SENSOR INPUT</span>
                </div>
                <div className="flex items-center justify-between bg-[#040b14] px-2 py-1 rounded border border-cyan-950">
                  <span className="text-slate-300">SPI_1</span>
                  <span className="text-emerald-400 text-[10px]">HIGH SPEED BUS</span>
                </div>
                <div className="flex items-center justify-between bg-[#040b14] px-2 py-1 rounded border border-cyan-950">
                  <span className="text-slate-300">USART_1</span>
                  <span className="text-cyan-400 text-[10px]">SERIAL COMM</span>
                </div>
                <div className="flex items-center justify-between bg-[#040b14] px-2 py-1 rounded border border-cyan-950">
                  <span className="text-slate-300">ADC_1</span>
                  <span className="text-amber-400 text-[10px]">ANALOG SENSING</span>
                </div>
              </div>

              <div className="flex items-center justify-between text-[10px] text-slate-400 pt-1">
                <span>COMMUNICATION</span>
                <span className="text-cyan-300 font-semibold">SYNCHRONOUS / ASYNC</span>
              </div>
            </div>
          </div>

          {/* Bottom Panel: Robotics & Subsystems */}
          <div className="rounded-lg bg-[#071322] border border-cyan-500/25 p-3 font-mono">
            <div className="flex items-center justify-between text-[11px] mb-2">
              <span className="text-cyan-400 flex items-center gap-1.5 uppercase tracking-wide">
                <Layers className="w-3.5 h-3.5 text-cyan-400" />
                ROBOTICS &amp; EMBEDDED SUBSYSTEMS
              </span>
              <span className="text-emerald-400 text-[10px] bg-emerald-950/60 px-1.5 py-0.5 rounded border border-emerald-500/30">
                ROS 2 INTEGRATION
              </span>
            </div>

            <div className="grid grid-cols-1 min-[420px]:grid-cols-3 gap-2 text-center text-[10px]">
              <div className="bg-[#040b14] p-2 rounded border border-cyan-950">
                <div className="text-slate-400 text-[9px]">MOTOR CONTROL</div>
                <div className="text-cyan-300 font-semibold mt-0.5">ACTUATOR DRIVE</div>
                <div className="text-emerald-400 text-[8px] mt-0.5">PWM SIGNALS</div>
              </div>
              <div className="bg-[#040b14] p-2 rounded border border-cyan-950">
                <div className="text-slate-400 text-[9px]">SENSOR INPUT</div>
                <div className="text-cyan-300 font-semibold mt-0.5">IMU &amp; TELEMETRY</div>
                <div className="text-cyan-500 text-[8px] mt-0.5">FILTERED DATA</div>
              </div>
              <div className="bg-[#040b14] p-2 rounded border border-cyan-950">
                <div className="text-slate-400 text-[9px]">FEEDBACK LOOP</div>
                <div className="text-cyan-300 font-semibold mt-0.5">POSITION SENSE</div>
                <div className="text-cyan-500 text-[8px] mt-0.5">CLOSED LOOP</div>
              </div>
            </div>
          </div>
        </div>

        {/* Chassis Footer Strip */}
        <div className="px-4 py-2 bg-[#091524] border-t border-cyan-500/20 flex items-center justify-between text-[10px] font-mono text-slate-400">
          <div className="flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse" />
            <span>FIRMWARE PIPELINE: BARE-METAL &amp; RTOS</span>
          </div>
          <span className="text-cyan-400/80">EMBEDDED SYSTEMS ARCHITECTURE</span>
        </div>
      </div>
    </motion.div>
  )
}
