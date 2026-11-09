import React from 'react'
import { MotionConfig } from 'framer-motion'
import { CircuitBackground } from './components/CircuitBackground'
import { Navbar } from './components/Navbar'
import { Hero } from './components/Hero'
import { About } from './components/About'
import { Projects } from './components/Projects'
import { Experience } from './components/Experience'
import { Skills } from './components/Skills'
import { Contact } from './components/Contact'
import { Sparkles, ArrowUpRight } from 'lucide-react'

export const App: React.FC = () => {
  return (
    <MotionConfig reducedMotion="user">
      <div className="relative min-h-screen bg-[#080F19] text-slate-100 selection:bg-cyan-500/30 selection:text-cyan-300">
        {/* Dynamic Animated Circuit Background */}
        <CircuitBackground />

        {/* Sticky Navigation Bar */}
        <Navbar />

        {/* Main Content */}
        <main id="main" className="relative z-10">
          {/* Section #home */}
          <Hero />

          {/* Section #about */}
          <About />

          {/* Section #projects */}
          <Projects />

          {/* Section #experience */}
          <Experience />

          {/* Section #skills */}
          <Skills />

          {/* Section #contact */}
          <Contact />
        </main>

        {/* Site Footer with direct contact */}
        <footer className="relative z-10 border-t border-cyan-950/70 bg-[#060c14]/80 py-8 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-slate-400">
            <div className="flex items-center gap-2">
              <Sparkles className="w-3.5 h-3.5 text-cyan-400" />
              <span className="text-slate-300 font-semibold tracking-wider uppercase">SIVASANKARAN G.</span>
              <span>— PTU EIE &apos;27</span>
            </div>
            <div>
              <a
                href="mailto:sivasankaran.eie1@gmail.com"
                className="text-cyan-400 hover:text-cyan-300 transition-colors inline-flex items-center gap-1"
              >
                <span>sivasankaran.eie1@gmail.com</span>
                <ArrowUpRight className="w-3 h-3" />
              </a>
            </div>
          </div>
        </footer>
      </div>
    </MotionConfig>
  )
}

export default App
