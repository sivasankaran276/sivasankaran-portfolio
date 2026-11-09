import React, { useState, useEffect, useRef } from 'react'
import { Menu, X, Cpu, ArrowUpRight } from 'lucide-react'

interface NavLink {
  name: string
  href: string
}

const NAV_LINKS: NavLink[] = [
  { name: 'Home', href: '#home' },
  { name: 'About', href: '#about' },
  { name: 'Projects', href: '#projects' },
  { name: 'Experience', href: '#experience' },
  { name: 'Skills', href: '#skills' },
]

export const Navbar: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const menuButtonRef = useRef<HTMLButtonElement>(null)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Close mobile menu on Escape key press and return focus to button
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && mobileMenuOpen) {
        setMobileMenuOpen(false)
        menuButtonRef.current?.focus()
      }
    }
    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [mobileMenuOpen])

  // Auto-close mobile menu when resizing past lg breakpoint
  useEffect(() => {
    const mediaQuery = window.matchMedia('(min-width: 1024px)')
    const handleMediaChange = (e: MediaQueryListEvent) => {
      if (e.matches) {
        setMobileMenuOpen(false)
      }
    }
    mediaQuery.addEventListener('change', handleMediaChange)
    return () => mediaQuery.removeEventListener('change', handleMediaChange)
  }, [])

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-[#080F19]/90 backdrop-blur-md border-b border-cyan-950/70 shadow-[0_4px_24px_-4px_rgba(0,0,0,0.7)]'
          : 'bg-[#080F19]/60 backdrop-blur-sm border-b border-cyan-950/30'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-18">
          {/* Personal Wordmark */}
          <a
            href="#home"
            onClick={() => setMobileMenuOpen(false)}
            className="group flex items-center gap-3 py-1 text-slate-100 focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400 rounded-lg"
          >
            <div className="relative flex items-center justify-center w-9 h-9 rounded-md bg-[#0d1c2d] border border-cyan-500/30 group-hover:border-cyan-400 transition-colors shadow-[0_0_12px_rgba(6,182,212,0.15)]">
              <Cpu className="w-5 h-5 text-cyan-400 group-hover:rotate-12 transition-transform duration-300" />
              <span className="absolute -top-1 -right-1 w-2 h-2 rounded-full bg-cyan-400 animate-ping opacity-75" />
              <span className="absolute -top-1 -right-1 w-2 h-2 rounded-full bg-cyan-400" />
            </div>

            <div className="flex flex-col">
              <span className="text-base font-bold tracking-wider text-slate-100 group-hover:text-cyan-300 transition-colors uppercase">
                SIVASANKARAN G.
              </span>
              <span className="text-[10px] tracking-widest font-mono text-cyan-400/80 uppercase">
                EMBEDDED // FIRMWARE
              </span>
            </div>
          </a>

          {/* Desktop Navigation (switches at lg to prevent tablet overflow) */}
          <nav aria-label="Primary Navigation" className="hidden lg:flex items-center gap-1 xl:gap-2">
            {NAV_LINKS.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="relative px-3.5 py-1.5 text-sm font-medium text-slate-300 hover:text-cyan-300 transition-colors rounded-md hover:bg-cyan-950/30 font-mono tracking-tight group"
              >
                <span>{link.name}</span>
                <span className="absolute bottom-0 left-3.5 right-3.5 h-[1.5px] bg-cyan-400 scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-200" />
              </a>
            ))}

            {/* Highlighted "Contact Me" Action Button leading directly to #contact section */}
            <a
              href="#contact"
              className="ml-3 inline-flex items-center gap-1.5 px-4 py-1.5 text-sm font-medium text-cyan-200 bg-gradient-to-r from-cyan-950/70 to-blue-950/70 hover:from-cyan-900/80 hover:to-blue-900/80 border border-cyan-500/50 hover:border-cyan-400 rounded-md transition-all shadow-[0_0_15px_rgba(6,182,212,0.2)] hover:shadow-[0_0_20px_rgba(6,182,212,0.4)] group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400"
            >
              <span>Contact Me</span>
              <ArrowUpRight className="w-3.5 h-3.5 text-cyan-400 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </a>
          </nav>

          {/* Mobile Menu Button (visible on mobile and tablet < lg) */}
          <div className="lg:hidden flex items-center">
            <button
              ref={menuButtonRef}
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-md text-slate-300 hover:text-cyan-300 hover:bg-cyan-950/40 border border-cyan-900/40 focus:outline-none focus:ring-2 focus:ring-cyan-400"
              aria-label={mobileMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
              aria-expanded={mobileMenuOpen}
              aria-controls="mobile-nav"
            >
              {mobileMenuOpen ? (
                <X className="w-5 h-5 text-cyan-400" />
              ) : (
                <Menu className="w-5 h-5 text-cyan-400" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Navigation (visible on mobile and tablet < lg) */}
      {mobileMenuOpen && (
        <nav
          id="mobile-nav"
          aria-label="Mobile Navigation"
          className="lg:hidden border-b border-cyan-900/50 bg-[#080F19]/95 backdrop-blur-xl transition-all duration-200"
        >
          <div className="px-4 pt-3 pb-5 space-y-2">
            {NAV_LINKS.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="block px-3 py-2 rounded-md text-base font-medium text-slate-200 hover:text-cyan-300 hover:bg-cyan-950/40 transition-colors font-mono"
              >
                {link.name}
              </a>
            ))}

            <div className="pt-2">
              <a
                href="#contact"
                onClick={() => setMobileMenuOpen(false)}
                className="w-full flex items-center justify-center gap-2 px-4 py-2.5 rounded-md text-sm font-semibold text-cyan-200 bg-cyan-950/80 border border-cyan-500/60 shadow-[0_0_14px_rgba(6,182,212,0.25)]"
              >
                <span>Contact Me</span>
                <ArrowUpRight className="w-4 h-4 text-cyan-400" />
              </a>
            </div>
          </div>
        </nav>
      )}
    </header>
  )
}
