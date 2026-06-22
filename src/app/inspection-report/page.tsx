"use client"

import { useState, useEffect, useRef } from "react"
import Link from "next/link"
import Navbar from "@/components/Navbar"
import Footer from "@/components/Footer"

import { inspectionReport } from "@/data/siteData"

function useInView(threshold = 0.15, rootMargin?: string) {
  const ref = useRef<HTMLDivElement>(null)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const isMobile = window.innerWidth < 768
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setVisible(true)
      },
      { threshold: isMobile ? 0.01 : threshold, rootMargin: rootMargin ?? (isMobile ? "200px 0px 0px 0px" : "0px 0px -30px 0px") }
    )
    obs.observe(el)
    const timer = isMobile ? setTimeout(() => setVisible(true), 1500) : setTimeout(() => setVisible(true), 4000)
    return () => { obs.disconnect(); clearTimeout(timer) }
  }, [threshold, rootMargin])

  return { ref, visible }
}

function useMouseParallax(sensitivity = 0.02) {
  const [offset, setOffset] = useState({ x: 0, y: 0 })
  useEffect(() => {
    const handleMouse = (e: MouseEvent) => {
      setOffset({
        x: (e.clientX - window.innerWidth / 2) * sensitivity,
        y: (e.clientY - window.innerHeight / 2) * sensitivity,
      })
    }
    window.addEventListener("mousemove", handleMouse)
    return () => window.removeEventListener("mousemove", handleMouse)
  }, [sensitivity])
  return offset
}

function FloatingParticle({ delay, x, size }: { delay: number; x: number; size: number }) {
  return (
    <div
      className="absolute rounded-full bg-[#0ea5e9]/10 pointer-events-none"
      style={{
        width: size,
        height: size,
        left: `${x}%`,
        bottom: "-10%",
        animation: `floatUp ${12 + delay * 2}s ease-in-out ${delay}s infinite`,
      }}
    />
  )
}

export default function InspectionReportPage() {
  const hero = useInView()
  const overview = useInView()
  const certificates = useInView()
  const results = useInView()
  const cta = useInView()

  const mouse = useMouseParallax(0.015)
  const [selectedImage, setSelectedImage] = useState<number | null>(null)

  return (
    <>
      <Navbar />
      <main className="relative">
        {/* ═══════════════════════════════════════════════════════════════
            HERO SECTION
        ═══════════════════════════════════════════════════════════════ */}
        <section ref={hero.ref} className="relative min-h-[100svh] flex items-center justify-center bg-transparent overflow-hidden">
          <div className="absolute inset-0 pointer-events-none overflow-hidden">
            <div className="absolute -top-40 -right-40 w-[300px] sm:w-[500px] lg:w-[600px] h-[300px] sm:h-[500px] lg:h-[600px] rounded-full bg-[#0ea5e9]/[0.04] blur-3xl"
              style={{ transform: `translate(${mouse.x * 0.5}px, ${mouse.y * 0.5}px)` }} />
            <div className="absolute -bottom-20 -left-20 w-[250px] sm:w-[400px] lg:w-[500px] h-[250px] sm:h-[400px] lg:h-[500px] rounded-full bg-[#0ea5e9]/[0.03] blur-3xl"
              style={{ transform: `translate(${mouse.x * -0.3}px, ${mouse.y * -0.3}px)` }} />
            {[12, 25, 40, 55, 70, 85].map((x, i) => (
              <FloatingParticle key={i} delay={i * 1.2} x={x} size={3 + (i % 3) * 2} />
            ))}
          </div>

          <div className="max-w-5xl mx-auto px-4 sm:px-6 text-center z-10">
            <div style={{ opacity: hero.visible ? 1 : 0, transform: `translateY(${hero.visible ? 0 : 30}px)`, transition: "opacity 1.2s cubic-bezier(0.22,1,0.36,1) 0.1s, transform 1.2s cubic-bezier(0.22,1,0.36,1) 0.1s" }}>
              <span className="text-[10px] sm:text-xs text-[#38bdf8] font-semibold tracking-[0.2em] sm:tracking-[0.25em] uppercase bg-[#0ea5e9]/[0.08] px-4 sm:px-5 py-1.5 sm:py-2 rounded-full border border-[#0ea5e9]/10 inline-block mb-4 sm:mb-5">
                {inspectionReport.hero.label}
              </span>
            </div>
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-bold text-[#0f172a] leading-tight mb-4 sm:mb-6"
              style={{ opacity: hero.visible ? 1 : 0, transform: `translateY(${hero.visible ? 0 : 40}px)`, transition: "opacity 1.3s cubic-bezier(0.22,1,0.36,1) 0.3s, transform 1.3s cubic-bezier(0.22,1,0.36,1) 0.3s" }}>
              {inspectionReport.hero.title}
            </h1>
            <p className="text-[#334155] text-xs sm:text-sm md:text-base max-w-2xl mx-auto leading-relaxed mb-6 sm:mb-10 px-2"
              style={{ opacity: hero.visible ? 1 : 0, transform: `translateY(${hero.visible ? 0 : 25}px)`, transition: "opacity 1.2s cubic-bezier(0.22,1,0.36,1) 0.5s, transform 1.2s cubic-bezier(0.22,1,0.36,1) 0.5s" }}>
              {inspectionReport.hero.description}
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4"
              style={{ opacity: hero.visible ? 1 : 0, transform: `translateY(${hero.visible ? 0 : 20}px)`, transition: "opacity 1.2s cubic-bezier(0.22,1,0.36,1) 0.7s, transform 1.2s cubic-bezier(0.22,1,0.36,1) 0.7s" }}>
              <a href="#certificates" className="inline-flex items-center px-6 sm:px-8 py-3 sm:py-3.5 rounded-full bg-[#0ea5e9] text-white text-xs sm:text-sm font-semibold hover:bg-[#0284c7] transition-all duration-300">
                View Certificates
                <svg className="w-4 h-4 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" /></svg>
              </a>
              <a href="#results" className="inline-flex items-center px-6 sm:px-8 py-3 sm:py-3.5 rounded-full border border-[#cbd5e1] text-[#334155] text-xs sm:text-sm font-semibold hover:border-[#0ea5e9]/30 hover:text-[#38bdf8] transition-all duration-300">
                See Results
              </a>
            </div>
          </div>

          <div className="absolute bottom-6 sm:bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
            style={{ opacity: hero.visible ? 1 : 0, transition: "opacity 0.8s ease 1s" }}>
            <span className="text-[9px] sm:text-[10px] text-[#94a3b8] tracking-widest uppercase">Scroll</span>
            <div className="w-4 sm:w-5 h-7 sm:h-8 border-2 border-[#cbd5e1] rounded-full flex justify-center pt-1.5">
              <div className="w-1 h-1.5 sm:h-2 bg-[#94a3b8] rounded-full animate-[scrollBounce_1.5s_infinite]" />
            </div>
          </div>
        </section>

        {/* ═══════════════════════════════════════════════════════════════
            TRUST STATS SECTION
        ═══════════════════════════════════════════════════════════════ */}
        <section ref={overview.ref} className="relative bg-transparent py-10 sm:py-16 overflow-hidden">
          <div className="w-full max-w-6xl mx-auto px-4 sm:px-6 z-10">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4">
              {inspectionReport.trustStats.map((stat, i) => (
                <div key={i} className="glass-card relative rounded-xl sm:rounded-2xl p-4 sm:p-6 text-center overflow-hidden group transition-all duration-500"
                  style={{
                    opacity: overview.visible ? 1 : 0,
                    transform: overview.visible ? "translateY(0) scale(1)" : "translateY(40px) scale(0.9)",
                    transition: `opacity 1s cubic-bezier(0.22,1,0.36,1) ${0.15 + i * 0.12}s, transform 1s cubic-bezier(0.34,1.56,0.64,1) ${0.15 + i * 0.12}s`,
                  }}>
                   <div className="text-xl sm:text-2xl md:text-3xl font-bold text-[#38bdf8] mb-1">{stat.value}</div>
                  <div className="text-[9px] sm:text-[11px] text-[#64748b] font-medium tracking-wide uppercase">{stat.label}</div>
                  <div className="absolute bottom-0 left-4 right-4 h-[2px] rounded-full transition-all duration-500 group-hover:bg-gradient-to-r group-hover:from-transparent group-hover:via-[#0ea5e9]/30 group-hover:to-transparent" />
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ═══════════════════════════════════════════════════════════════
            CERTIFICATES SECTION - ref on SECTION, not inner div
        ═══════════════════════════════════════════════════════════════ */}
        <section ref={certificates.ref} id="certificates" className="relative bg-transparent py-16 sm:py-24 overflow-hidden">
          <div className="absolute inset-0 pointer-events-none overflow-hidden">
            <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[350px] sm:w-[500px] lg:w-[700px] h-[350px] sm:h-[500px] lg:h-[700px] rounded-full bg-[#0ea5e9]/[0.02] blur-[80px] sm:blur-[120px]" />
          </div>

          <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 z-10 relative">
            <div className="text-center mb-10 sm:mb-16"
              style={{ opacity: certificates.visible ? 1 : 0, transform: `translateY(${certificates.visible ? 0 : 50}px) scale(${certificates.visible ? 1 : 0.9})`, transition: "opacity 1.3s cubic-bezier(0.22,1,0.36,1), transform 1.3s cubic-bezier(0.22,1,0.36,1)" }}>
              <span className="text-[9px] sm:text-[10px] text-[#38bdf8] font-bold tracking-[0.2em] sm:tracking-[0.25em] uppercase bg-[#0ea5e9]/[0.08] px-3 sm:px-4 py-1 sm:py-1.5 rounded-full inline-block">Official Documentation</span>
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-[#0f172a] mt-4 sm:mt-5 mb-3 sm:mb-4 leading-tight">
                KTR <span className="text-[#38bdf8]">Certificates</span>
              </h2>
              <p className="text-[#334155] text-xs sm:text-sm md:text-base max-w-xl mx-auto leading-relaxed px-2">
                Independently verified by Korea Testing &amp; Research Institute — one of Asia&apos;s most trusted certification bodies.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 sm:gap-8">
              {inspectionReport.certificates.map((cert, i) => (
                <CertificateCard key={i} cert={cert} index={i} visible={certificates.visible} onClick={() => setSelectedImage(i)} />
              ))}
            </div>
          </div>
        </section>

        {/* ═══════════════════════════════════════════════════════════════
            TEST RESULTS SECTION - ref on SECTION
        ═══════════════════════════════════════════════════════════════ */}
        <section ref={results.ref} id="results" className="relative bg-transparent py-16 sm:py-24 overflow-hidden">
          <div className="absolute inset-0 pointer-events-none overflow-hidden">
            <div className="absolute -top-20 left-1/4 w-[200px] sm:w-[300px] lg:w-[400px] h-[200px] sm:h-[300px] lg:h-[400px] rounded-full bg-[#0ea5e9]/[0.03] blur-3xl" />
            <div className="absolute -bottom-20 right-1/4 w-[180px] sm:w-[280px] lg:w-[350px] h-[180px] sm:h-[280px] lg:h-[350px] rounded-full bg-[#0ea5e9]/[0.02] blur-3xl" />
            {[18, 35, 52, 68].map((x, i) => (
              <FloatingParticle key={i} delay={i * 1.5 + 0.5} x={x} size={3 + (i % 2) * 2} />
            ))}
          </div>

          <div className="w-full max-w-6xl mx-auto px-4 sm:px-6 z-10">
            <div className="text-center mb-10 sm:mb-14"
              style={{ opacity: results.visible ? 1 : 0, transform: `translateY(${results.visible ? 0 : 50}px)`, transition: "opacity 1.3s cubic-bezier(0.22,1,0.36,1), transform 1.3s cubic-bezier(0.22,1,0.36,1)" }}>
              <span className="text-[9px] sm:text-[10px] text-[#38bdf8] font-bold tracking-[0.2em] sm:tracking-[0.25em] uppercase bg-[#0ea5e9]/[0.08] px-3 sm:px-4 py-1 sm:py-1.5 rounded-full inline-block">Test Outcomes</span>
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-[#0f172a] mt-4 sm:mt-5 mb-3 sm:mb-4 leading-tight">
                Inspection <span className="text-[#38bdf8]">Results</span>
              </h2>
              <p className="text-[#334155] text-xs sm:text-sm md:text-base max-w-xl mx-auto leading-relaxed px-2">
                Every parameter tested returned clean — no harmful substances detected across all categories.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-5">
              {inspectionReport.highlights.map((item, i) => (
                <ResultCard key={i} item={item} index={i} visible={results.visible} />
              ))}
            </div>
          </div>
        </section>

        {/* ═══════════════════════════════════════════════════════════════
            CTA SECTION - ref on SECTION
        ═══════════════════════════════════════════════════════════════ */}
        <section ref={cta.ref} className="relative bg-transparent py-16 sm:py-24 overflow-hidden">
          <div className="absolute inset-0 pointer-events-none overflow-hidden">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] sm:w-[450px] lg:w-[600px] h-[300px] sm:h-[450px] lg:h-[600px] rounded-full bg-[#0ea5e9]/[0.03] blur-3xl" />
          </div>

          <div className="w-full max-w-4xl mx-auto px-4 sm:px-6 z-10 relative">
            <div style={{ opacity: cta.visible ? 1 : 0, transform: `translateY(${cta.visible ? 0 : 60}px) scale(${cta.visible ? 1 : 0.9})`, transition: "opacity 1.5s cubic-bezier(0.22,1,0.36,1), transform 1.5s cubic-bezier(0.22,1,0.36,1)" }}>
              <div className="glass-card relative rounded-2xl p-6 sm:p-10 md:p-14 text-center overflow-hidden">
                <div className="absolute top-0 left-6 sm:left-8 right-6 sm:right-8 h-[2px] bg-gradient-to-r from-transparent via-[#0ea5e9]/40 to-transparent" />
                <span className="inline-block text-[9px] sm:text-[10px] text-[#38bdf8] font-bold tracking-[0.2em] sm:tracking-[0.25em] uppercase bg-[#0ea5e9]/[0.08] px-3 sm:px-4 py-1 sm:py-1.5 rounded-full mb-4 sm:mb-5"
                  style={{ opacity: cta.visible ? 1 : 0, transform: `translateY(${cta.visible ? 0 : 15}px)`, transition: "opacity 1s ease 0.4s, transform 1s ease 0.4s" }}>Verified Quality</span>
                <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-[#0f172a] mb-3 sm:mb-4 leading-tight"
                  style={{ opacity: cta.visible ? 1 : 0, transform: `translateY(${cta.visible ? 0 : 20}px)`, transition: "opacity 1.1s ease 0.55s, transform 1.1s ease 0.55s" }}>
                  Trusted by <span className="text-[#38bdf8]">Science</span>
                </h2>
                <p className="text-[#334155] text-xs sm:text-sm md:text-base max-w-lg mx-auto leading-relaxed mb-6 sm:mb-8 px-2"
                  style={{ opacity: cta.visible ? 1 : 0, transform: `translateY(${cta.visible ? 0 : 20}px)`, transition: "opacity 1s ease 0.7s, transform 1s ease 0.7s" }}>
                  Our commitment to transparency means every certification is available for review. Explore our full product range backed by independent verification.
                </p>
                <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4"
                  style={{ opacity: cta.visible ? 1 : 0, transform: `translateY(${cta.visible ? 0 : 20}px)`, transition: "opacity 1s ease 0.85s, transform 1s ease 0.85s" }}>
                  <Link href="/#products" className="inline-flex items-center gap-2 bg-[#0ea5e9] text-white text-xs sm:text-sm font-semibold px-6 sm:px-8 py-3 sm:py-3.5 rounded-full hover:bg-[#0284c7] transition-all duration-300">
                    View Products
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
                  </Link>
                  <Link href="/research-technology" className="inline-flex items-center gap-2 border border-[#cbd5e1] text-[#334155] text-xs sm:text-sm font-semibold px-6 sm:px-8 py-3 sm:py-3.5 rounded-full hover:border-[#0ea5e9]/30 hover:text-[#38bdf8] transition-all duration-300">
                    Research &amp; Technology
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />

      {selectedImage !== null && (
        <ImageModal
          images={inspectionReport.certificates.map((c) => c.image)}
          currentIndex={selectedImage}
          onClose={() => setSelectedImage(null)}
          onNavigate={setSelectedImage}
          titles={inspectionReport.certificates.map((c) => c.title)}
        />
      )}
    </>
  )
}

/* ═══════════════════════════════════════════════════════════════
    CERTIFICATE CARD
   ═══════════════════════════════════════════════════════════════ */
function CertificateCard({ cert, index, visible, onClick }: {
  cert: { title: string; description: string; image: string; badge: string; issuer: string }
  index: number
  visible: boolean
  onClick: () => void
}) {
  const [hovered, setHovered] = useState(false)

  return (
    <div
      className="group glass-card relative rounded-xl sm:rounded-2xl overflow-hidden cursor-pointer"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      onClick={onClick}
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? "translateY(0) scale(1)" : `translateY(60px) scale(0.92)`,
        transition: `opacity 1.2s cubic-bezier(0.22,1,0.36,1) ${0.2 + index * 0.2}s, transform 1.2s cubic-bezier(0.22,1,0.36,1) ${0.2 + index * 0.2}s`,
      }}>
      <div className="relative h-[220px] sm:h-[280px] md:h-[320px] lg:h-[360px] overflow-hidden">
        <img
          src={cert.image}
          alt={cert.title}
          className="w-full h-full object-cover transition-transform duration-700"
          style={{ transform: hovered ? "scale(1.05)" : "scale(1)" }}
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/10 to-transparent" />

        {/* Badge */}
        <div className="absolute top-3 right-3 sm:top-4 sm:right-4">
          <div className="px-3 sm:px-4 py-1.5 sm:py-2 rounded-lg text-[10px] sm:text-[11px] font-bold tracking-wider uppercase backdrop-blur-sm transition-all duration-400"
            style={{
              background: cert.badge === "PASSED" ? "rgba(34,197,94,0.9)" : "rgba(59,130,246,0.9)",
              color: "white",
              boxShadow: "none",
              transform: hovered ? "scale(1.05)" : "scale(1)",
            }}>
            {cert.badge}
          </div>
        </div>

        {/* Expand icon */}
        <div className="absolute bottom-3 right-3 sm:bottom-4 sm:right-4 transition-all duration-400" style={{ opacity: hovered ? 1 : 0, transform: `scale(${hovered ? 1 : 0.5})` }}>
          <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-white/90 backdrop-blur-sm flex items-center justify-center">
            <svg className="w-4 h-4 sm:w-5 sm:h-5 text-[#0f172a]" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7" /></svg>
          </div>
        </div>
      </div>

      <div className="relative p-4 sm:p-6">
        <div className="flex items-center gap-2 mb-2 sm:mb-3">
          <div className="w-1.5 sm:w-2 h-1.5 sm:h-2 rounded-full" style={{ background: cert.badge === "PASSED" ? "#22c55e" : "#3b82f6" }} />
          <span className="text-[9px] sm:text-[10px] text-[#38bdf8] font-bold tracking-[0.15em] sm:tracking-[0.2em] uppercase">{cert.issuer}</span>
        </div>
        <h3 className="text-base sm:text-lg font-bold text-[#0f172a] mb-1.5 sm:mb-2">{cert.title}</h3>
        <p className="text-[12px] sm:text-[13px] text-[#334155] leading-relaxed">{cert.description}</p>
        <div className="absolute bottom-0 left-4 sm:left-6 right-4 sm:right-6 h-[2px] rounded-full transition-all duration-500"
          style={{ background: hovered ? "linear-gradient(to right, transparent, #0ea5e9, transparent)" : "linear-gradient(to right, transparent, transparent, transparent)" }} />
      </div>
    </div>
  )
}

/* ═══════════════════════════════════════════════════════════════
    RESULT CARD
   ═══════════════════════════════════════════════════════════════ */
function ResultCard({ item, index, visible }: {
  item: { icon: string; title: string; result: string; desc: string }
  index: number
  visible: boolean
}) {
  const [hovered, setHovered] = useState(false)
  const isLeft = index % 2 === 0

  return (
    <div
      className="group glass-card relative rounded-xl sm:rounded-2xl overflow-hidden"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        opacity: visible ? 1 : 0,
        transform: visible
          ? "translateX(0) translateY(0) scale(1) rotate(0deg)"
          : `translateX(${isLeft ? -60 : 60}px) translateY(30px) scale(0.92) rotate(${isLeft ? -2 : 2}deg)`,
        transition: `opacity 1.2s cubic-bezier(0.22,1,0.36,1) ${0.2 + index * 0.18}s, transform 1.2s cubic-bezier(0.34,1.56,0.64,1) ${0.2 + index * 0.18}s`,
      }}>
      <div className="relative p-4 sm:p-6 md:p-8">
        <div className="flex items-start gap-3 sm:gap-4">
          <div className="w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 rounded-lg sm:rounded-xl flex items-center justify-center text-xl sm:text-2xl shrink-0 transition-all duration-500"
            style={{
              backgroundColor: hovered ? "rgba(34,197,94,0.12)" : "rgba(34,197,94,0.06)",
              transform: hovered ? "scale(1.15) rotate(-8deg)" : "scale(1) rotate(0deg)",
            }}>
            {item.icon}
          </div>
          <div className="flex-1 min-w-0">
            <div className="flex flex-wrap items-center gap-2 sm:gap-3 mb-1.5 sm:mb-2">
              <h4 className="text-[14px] sm:text-[15px] md:text-[16px] font-bold text-[#0f172a]">{item.title}</h4>
              <span className="px-2.5 sm:px-3 py-0.5 sm:py-1 rounded-full text-[9px] sm:text-[10px] font-bold tracking-wider uppercase bg-[#22c55e]/10 text-[#16a34a] border border-[#22c55e]/20">
                {item.result}
              </span>
            </div>
            <p className="text-[12px] sm:text-[13px] text-[#334155] leading-[1.6] sm:leading-[1.7]">{item.desc}</p>
          </div>
        </div>
        <div className="absolute bottom-0 left-4 sm:left-6 right-4 sm:right-6 h-[2px] transition-all duration-500"
          style={{ background: hovered ? "linear-gradient(to right, transparent, rgba(34,197,94,0.4), transparent)" : "linear-gradient(to right, transparent, transparent, transparent)" }} />
      </div>
    </div>
  )
}

/* ═══════════════════════════════════════════════════════════════
    IMAGE MODAL
   ═══════════════════════════════════════════════════════════════ */
function ImageModal({ images, currentIndex, onClose, onNavigate, titles }: {
  images: string[]
  currentIndex: number
  onClose: () => void
  onNavigate: (i: number) => void
  titles: string[]
}) {
  const [touchStart, setTouchStart] = useState<number | null>(null)

  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose()
      if (e.key === "ArrowLeft") onNavigate(Math.max(0, currentIndex - 1))
      if (e.key === "ArrowRight") onNavigate(Math.min(images.length - 1, currentIndex + 1))
    }
    document.addEventListener("keydown", handleEsc)
    document.body.style.overflow = "hidden"
    return () => { document.removeEventListener("keydown", handleEsc); document.body.style.overflow = "" }
  }, [onClose, onNavigate, currentIndex, images.length])

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center" onClick={onClose}
      style={{ background: "rgba(0,0,0,0.85)", backdropFilter: "blur(12px)", WebkitBackdropFilter: "blur(12px)", animation: "fadeIn 0.3s ease" }}>
      <button onClick={onClose} className="absolute top-3 right-3 sm:top-4 sm:right-4 md:top-6 md:right-6 z-[110] w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center text-white/70 hover:bg-white/20 hover:text-white transition-all duration-300">
        <svg className="w-4 h-4 sm:w-5 sm:h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /></svg>
      </button>
      <div className="absolute top-3 left-3 sm:top-4 sm:left-4 md:top-6 md:left-6 z-[110] bg-white/10 backdrop-blur-sm rounded-full px-3 sm:px-4 py-1 sm:py-1.5">
        <span className="text-white/80 text-[11px] sm:text-xs font-medium">{currentIndex + 1} / {images.length}</span>
      </div>
      {currentIndex > 0 && (
        <button onClick={(e) => { e.stopPropagation(); onNavigate(currentIndex - 1) }} className="absolute left-1.5 sm:left-2 md:left-6 z-[110] w-9 h-9 sm:w-10 sm:h-10 md:w-12 md:h-12 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center text-white/70 hover:bg-white/20 hover:text-white transition-all duration-300">
          <svg className="w-4 h-4 sm:w-5 sm:h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" /></svg>
        </button>
      )}
      {currentIndex < images.length - 1 && (
        <button onClick={(e) => { e.stopPropagation(); onNavigate(currentIndex + 1) }} className="absolute right-1.5 sm:right-2 md:right-6 z-[110] w-9 h-9 sm:w-10 sm:h-10 md:w-12 md:h-12 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center text-white/70 hover:bg-white/20 hover:text-white transition-all duration-300">
          <svg className="w-4 h-4 sm:w-5 sm:h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
        </button>
      )}
      <div className="relative max-w-5xl max-h-[80vh] sm:max-h-[85vh] w-full mx-3 sm:mx-4 md:mx-8" onClick={(e) => e.stopPropagation()}
        onTouchStart={(e) => setTouchStart(e.touches[0].clientX)}
        onTouchEnd={(e) => { if (touchStart !== null) { const d = touchStart - e.changedTouches[0].clientX; if (Math.abs(d) > 50) { if (d > 0 && currentIndex < images.length - 1) onNavigate(currentIndex + 1); if (d < 0 && currentIndex > 0) onNavigate(currentIndex - 1) } setTouchStart(null) } }}
        style={{ animation: "scaleIn 0.3s ease" }}>
        <img src={images[currentIndex]} alt={titles[currentIndex]} className="w-full h-full object-contain rounded-lg sm:rounded-xl" key={currentIndex} />
        <div className="absolute bottom-3 sm:bottom-4 left-1/2 -translate-x-1/2 bg-black/60 backdrop-blur-sm rounded-full px-3 sm:px-5 py-1.5 sm:py-2">
          <span className="text-white text-[11px] sm:text-sm font-medium">{titles[currentIndex]}</span>
        </div>
      </div>
      <div className="absolute bottom-3 sm:bottom-4 left-1/2 -translate-x-1/2 z-[110] flex gap-1 sm:gap-1.5 p-1.5 sm:p-2 bg-black/30 backdrop-blur-sm rounded-xl max-w-[90vw] overflow-x-auto mt-12 sm:mt-16">
        {images.map((img, i) => (
          <button key={i} onClick={(e) => { e.stopPropagation(); onNavigate(i) }}
            className={`w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 rounded-lg overflow-hidden shrink-0 transition-all duration-300 ${i === currentIndex ? "ring-2 ring-white/60 scale-110" : "opacity-40 hover:opacity-70"}`}>
            <img src={img} alt="" className="w-full h-full object-cover" />
          </button>
        ))}
      </div>
    </div>
  )
}
