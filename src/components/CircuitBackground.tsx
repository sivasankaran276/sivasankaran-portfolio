import React from 'react'

export const CircuitBackground: React.FC = () => {
  return (
    <div
      className="fixed inset-0 pointer-events-none overflow-hidden z-0 bg-[#080F19]"
      aria-hidden="true"
    >
      {/* Subtle ambient gradients for depth */}
      <div className="absolute -top-32 right-1/4 w-[600px] h-[600px] rounded-full bg-cyan-600/[0.04] blur-[140px]" />
      <div className="absolute top-1/3 -left-32 w-[550px] h-[550px] rounded-full bg-blue-600/[0.035] blur-[150px]" />
      <div className="absolute bottom-10 right-10 w-[500px] h-[500px] rounded-full bg-teal-500/[0.03] blur-[130px]" />

      {/* SVG Circuit Canvas */}
      <svg
        className="w-full h-full object-cover opacity-65"
        viewBox="0 0 1440 900"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="xMidYMid slice"
      >
        <defs>
          {/* Subtle PCB Grid Pattern */}
          <pattern
            id="pcb-grid"
            width="40"
            height="40"
            patternUnits="userSpaceOnUse"
          >
            <circle cx="20" cy="20" r="0.8" fill="#1e3a5f" opacity="0.35" />
            <path
              d="M 40 0 L 0 0 0 40"
              fill="none"
              stroke="#0f253e"
              strokeWidth="0.5"
              strokeOpacity="0.15"
            />
          </pattern>

          {/* Gradients for electric pulses */}
          <linearGradient id="cyan-glow" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#06b6d4" stopOpacity="0" />
            <stop offset="50%" stopColor="#06b6d4" stopOpacity="0.9" />
            <stop offset="100%" stopColor="#38bdf8" stopOpacity="0" />
          </linearGradient>

          <linearGradient id="blue-pulse" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#3b82f6" stopOpacity="0" />
            <stop offset="50%" stopColor="#60a5fa" stopOpacity="0.8" />
            <stop offset="100%" stopColor="#06b6d4" stopOpacity="0" />
          </linearGradient>
        </defs>

        {/* Base Grid Layer */}
        <rect width="100%" height="100%" fill="url(#pcb-grid)" />

        {/* Static PCB Traces (Deep subtle blue/cyan) */}
        <g stroke="#142842" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" opacity="0.45">
          {/* Trace Set 1: Top Left to Center */}
          <path d="M 0,120 L 180,120 L 240,180 L 420,180 L 460,220 L 460,340" />
          <path d="M 60,0 L 60,80 L 110,130 L 110,260 L 160,310 L 260,310" />
          <path d="M 0,280 L 90,280 L 130,320 L 130,480" />

          {/* Trace Set 2: Center to Top Right */}
          <path d="M 720,0 L 720,90 L 780,150 L 960,150 L 1010,200 L 1010,320 L 1080,390 L 1300,390 L 1360,450" />
          <path d="M 880,0 L 880,70 L 920,110 L 1160,110 L 1220,170 L 1440,170" />
          <path d="M 1240,0 L 1240,60 L 1300,120 L 1440,120" />

          {/* Trace Set 3: Right Side Industrial Bus Lines */}
          <path d="M 1440,320 L 1340,320 L 1290,270 L 1120,270 L 1070,220 L 840,220" />
          <path d="M 1440,540 L 1280,540 L 1220,480 L 1040,480 L 980,540 L 840,540" />
          <path d="M 1440,680 L 1320,680 L 1250,750 L 980,750 L 920,810 L 760,810" />

          {/* Trace Set 4: Bottom and Cross-diagonal */}
          <path d="M 220,900 L 220,780 L 300,700 L 520,700 L 580,640 L 740,640" />
          <path d="M 0,660 L 140,660 L 210,730 L 210,850 L 260,900" />
          <path d="M 400,900 L 400,820 L 460,760 L 620,760" />
        </g>

        {/* Circuit Solder Pads & Micro Vias */}
        <g fill="#0e243b" stroke="#1d4ed8" strokeWidth="1" opacity="0.6">
          <circle cx="240" cy="180" r="3.5" />
          <circle cx="460" cy="340" r="4" fill="#080F19" stroke="#06b6d4" strokeWidth="1.5" />
          <circle cx="260" cy="310" r="3" />
          <circle cx="780" cy="150" r="3.5" />
          <circle cx="1010" cy="320" r="4" fill="#080F19" stroke="#3b82f6" strokeWidth="1.5" />
          <circle cx="1120" cy="270" r="3" />
          <circle cx="1040" cy="480" r="3.5" />
          <circle cx="580" cy="640" r="4" fill="#080F19" stroke="#06b6d4" strokeWidth="1.5" />
          <circle cx="980" cy="750" r="3.5" />
        </g>

        {/* ANIMATED PULSES (Subtle electric-blue & cyan light packets moving along traces) */}
        <g strokeLinecap="round" strokeLinejoin="round">
          {/* Pulse 1: Across upper right lab quadrant */}
          <path
            d="M 720,0 L 720,90 L 780,150 L 960,150 L 1010,200 L 1010,320 L 1080,390 L 1300,390 L 1360,450"
            stroke="url(#cyan-glow)"
            strokeWidth="1.8"
            strokeDasharray="90 450"
            className="animate-pulse-trace-1"
          />

          {/* Pulse 2: Along mid-lower robotics bus */}
          <path
            d="M 1440,540 L 1280,540 L 1220,480 L 1040,480 L 980,540 L 840,540"
            stroke="url(#cyan-glow)"
            strokeWidth="1.8"
            strokeDasharray="70 380"
            className="animate-pulse-trace-2"
          />

          {/* Pulse 3: Left side hardware trace */}
          <path
            d="M 0,120 L 180,120 L 240,180 L 420,180 L 460,220 L 460,340"
            stroke="url(#blue-pulse)"
            strokeWidth="1.8"
            strokeDasharray="80 420"
            className="animate-pulse-trace-3"
          />

          {/* Pulse 4: Bottom diagnostic channel */}
          <path
            d="M 220,900 L 220,780 L 300,700 L 520,700 L 580,640 L 740,640"
            stroke="url(#cyan-glow)"
            strokeWidth="1.8"
            strokeDasharray="60 360"
            className="animate-pulse-trace-1"
            style={{ animationDelay: '3.5s' }}
          />
        </g>

        {/* Small Silkscreen Micro Coordinates & Markings */}
        <g fill="#1e3a5f" fontSize="8" fontFamily="ui-monospace, monospace" letterSpacing="0.1em" opacity="0.4">
          <text x="475" y="343">NODE.01//RX</text>
          <text x="1025" y="323">BUS.I2C//SDA</text>
          <text x="595" y="643">CLK_REF::168M</text>
          <text x="1055" y="483">ROBOTICS.CAN_H</text>
        </g>
      </svg>
    </div>
  )
}
