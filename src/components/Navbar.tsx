"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { navLinks } from "@/data/siteData"

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  useEffect(() => {
    setMobileOpen(false)
  }, [pathname])

  return (
    <motion.nav
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ?           "bg-[#061224]/80 backdrop-blur-xl border-b border-white/[0.08] shadow-[0_4px_30px_rgba(0,0,0,0.4)]"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="group shrink-0">
            <div className="flex items-center gap-2.5">
              <div className="relative w-10 h-10 md:w-11 md:h-11 flex items-center justify-center">
                <img
                  src="https://huggingface.co/spaces/bilal23bhai/EVERCEUTICALS/resolve/main/images/logo.png?v=2"
                  alt="EverCeutical Logo"
                  className="w-full h-full object-contain mix-blend-screen"
                  draggable={false}
                />
              </div>
              <div className="flex flex-col">
                <span className="text-sm md:text-base font-bold tracking-tight text-white">
                  Ever<span className="text-[#38bdf8]">Ceutical</span>
                </span>
                <span className="text-[9px] md:text-[10px] text-sky-300/60 font-medium tracking-wider uppercase -mt-[1px]">
                  Leaders in Exosome Innovation
                </span>
              </div>
            </div>
          </Link>

          {/* Nav Links + CTA */}
          <div className="flex items-center gap-6 md:gap-8 lg:gap-10">
            <div className="hidden lg:flex items-center gap-6 xl:gap-8">
              {navLinks.map((link, i) => {
                const isActive = pathname === link.href
                return (
                  <motion.div
                    key={link.href}
                    initial={{ opacity: 0, y: -8 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.12 + i * 0.04, duration: 0.35 }}
                  >
                    <Link
                      href={link.href}
                      className={`relative text-xs font-semibold tracking-wide transition-all duration-300 group inline-block py-0.5 ${
                        isActive ? "text-[#38bdf8]" : "text-white/70 hover:text-white"
                      }`}
                    >
                      {link.label}
                      {isActive && (
                        <motion.span
                          layoutId="navDot"
                          className="absolute -bottom-[2px] left-1/2 -translate-x-1/2 w-1 h-1 rounded-full bg-[#38bdf8]"
                          transition={{ type: "spring", stiffness: 400, damping: 25 }}
                        />
                      )}
                      <span className="absolute -bottom-[2px] left-0 right-0 h-[2px] bg-[#38bdf8]/40 rounded-full scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
                    </Link>
                  </motion.div>
                )
              })}
            </div>

            <div className="hidden md:block">
              <Link
                href="/contact"
                className="group inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#0ea5e9] text-white text-xs font-semibold transition-all duration-300 hover:bg-[#0284c7] hover:shadow-lg hover:shadow-[#0ea5e9]/30 hover:scale-[1.03]"
              >
                Get In Touch
                <span className="w-4 h-4 rounded-full bg-white/20 flex items-center justify-center group-hover:bg-white/30 transition-colors">
                  <svg className="w-2 h-2 text-white transition-transform group-hover:translate-x-[0.5px]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 12h14m-7-7l7 7-7 7" />
                  </svg>
                </span>
              </Link>
            </div>

            {/* Hamburger */}
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="lg:hidden relative w-8 h-8 flex items-center justify-center rounded-lg hover:bg-white/10 transition-colors"
              aria-label="Toggle menu"
            >
              <div className="flex flex-col gap-[3.5px]">
                <motion.span animate={mobileOpen ? { rotate: 45, y: 4.5 } : {}} className="block w-[18px] h-[1.5px] bg-white/70 rounded-full origin-center" />
                <motion.span animate={mobileOpen ? { opacity: 0 } : {}} className="block w-[18px] h-[1.5px] bg-white/70 rounded-full" />
                <motion.span animate={mobileOpen ? { rotate: -45, y: -4.5 } : {}} className="block w-[18px] h-[1.5px] bg-white/70 rounded-full origin-center" />
              </div>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
            className="lg:hidden mt-0 bg-[#061224]/95 backdrop-blur-xl border-t border-white/[0.08] shadow-lg overflow-hidden"
          >
            <div className="px-6 py-4 space-y-0.5">
              {navLinks.map((link, i) => {
                const isActive = pathname === link.href
                return (
                  <motion.div key={link.href} initial={{ opacity: 0, x: -12 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.03 * i, duration: 0.2 }}>
                    <Link href={link.href} onClick={() => setMobileOpen(false)} className={`block text-sm py-3 px-3.5 rounded-lg transition-all duration-200 font-medium ${isActive ? "text-[#38bdf8] bg-[#38bdf8]/10" : "text-white/70 hover:text-white hover:bg-white/5"}`}>
                      {link.label}
                    </Link>
                  </motion.div>
                )
              })}
              <motion.div initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.25, duration: 0.25 }} className="pt-2">
                <Link href="/contact" onClick={() => setMobileOpen(false)} className="flex items-center justify-center gap-2 w-full px-5 py-3 rounded-xl bg-[#0ea5e9] text-white text-sm font-semibold">
                  Get In Touch
                  <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 12h14m-7-7l7 7-7 7" />
                  </svg>
                </Link>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  )
}
