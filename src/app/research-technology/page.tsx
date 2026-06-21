"use client"

import { useState, useEffect, useRef, useCallback } from "react"
import Link from "next/link"
import Navbar from "@/components/Navbar"
import Footer from "@/components/Footer"

import { researchImages } from "@/data/scrapedData"

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

const researchHighlights = [
  { title: "Proprietary Extraction", desc: "Our patented isolation process achieves 99.9% purity while preserving full bioactivity of exosomal cargo — growth factors, microRNA, and cytokines remain intact throughout manufacturing.", icon: "🧪", color: "#0ea5e9" },
  { title: "Clinical Validation", desc: "Every formulation undergoes rigorous multi-phase clinical testing including nanoparticle tracking analysis, sterility validation, and efficacy trials before release.", icon: "📊", color: "#1e8449" },
  { title: "GMP Manufacturing", desc: "Produced in Vesco Science's 100,000-level dust-free cleanroom facility under strict pharmaceutical-grade protocols and international cosmetic GMP standards.", icon: "🏭", color: "#7c5c9e" },
  { title: "Global Distribution", desc: "Cold chain logistics ensure product integrity from our Korean facility to clinics worldwide — maintaining potency across 10+ countries and 10 currencies.", icon: "🌍", color: "#d4915e" },
]

const processSteps = [
  { step: "01", title: "Cell Sourcing", desc: "Premium cell lines derived from human umbilical cord mesenchymal stem cells (hUC-MSCs) and other specialized sources for maximum regenerative potential.", icon: "🧬" },
  { step: "02", title: "Exosome Isolation", desc: "Proprietary purification technology isolates exosomes with maximum bioactivity and batch-to-batch consistency using advanced ultracentrifugation.", icon: "🔬" },
  { step: "03", title: "Quality Analysis", desc: "Multi-stage testing including nanoparticle tracking analysis, protein quantification, endotoxin screening, and sterility validation.", icon: "📋" },
  { step: "04", title: "Lyophilization", desc: "Advanced freeze-drying process preserves exosome integrity while enabling long-term storage and global distribution without degradation.", icon: "❄️" },
  { step: "05", title: "Clinical Delivery", desc: "Final products packaged under GMP standards for professional clinical use in regenerative medicine and aesthetic dermatology.", icon: "💊" },
]

const qualityStandards = [
  { value: "10–150nm", label: "Nanoscale Vesicles" },
  { value: "100+", label: "Bioactive Molecules" },
  { value: "10B+", label: "Particles Per Vial" },
  { value: "99.9%", label: "Purity Standard" },
]

export default function ResearchTechnologyPage() {
  const hero = useInView(0.1, "0px")
  const overview = useInView(0.25)
  const galleryHeader = useInView(0.3)
  const gallery = useInView(0.15)
  const highlights = useInView(0.2)
  const features = useInView(0.2)
  const processSection = useInView(0.15)
  const cta = useInView(0.3)

  const mouse = useMouseParallax(0.015)
  const [selectedImage, setSelectedImage] = useState<number | null>(null)

  const openImage = useCallback((index: number) => setSelectedImage(index), [])
  const closeImage = useCallback(() => setSelectedImage(null), [])

  return (
    <>
      <Navbar />
      <main className="relative">
        {/* ═══════════════════════════════════════════════════════════════
            HERO SECTION - Animates on page load (first visible section)
        ═══════════════════════════════════════════════════════════════ */}
        <section className="relative min-h-[100vh] flex items-center justify-center bg-transparent overflow-hidden">
          <div className="absolute inset-0 pointer-events-none overflow-hidden">
            <div className="absolute -top-40 -right-40 w-[600px] h-[600px] rounded-full bg-[#0ea5e9]/[0.04] blur-3xl"
              style={{ transform: `translate(${mouse.x * 0.5}px, ${mouse.y * 0.5}px)` }} />
            <div className="absolute -bottom-20 -left-20 w-[500px] h-[500px] rounded-full bg-[#0ea5e9]/[0.03] blur-3xl"
              style={{ transform: `translate(${mouse.x * -0.3}px, ${mouse.y * -0.3}px)` }} />
            {[12, 25, 40, 55, 70, 85].map((x, i) => (
              <FloatingParticle key={i} delay={i * 1.2} x={x} size={3 + (i % 3) * 2} />
            ))}
          </div>

          <div className="max-w-5xl mx-auto px-6 text-center z-10 text-glow-strong" ref={hero.ref}>
            <div style={{ opacity: hero.visible ? 1 : 0, transform: `translateY(${hero.visible ? 0 : 30}px)`, transition: "opacity 1.2s cubic-bezier(0.22,1,0.36,1) 0.1s, transform 1.2s cubic-bezier(0.22,1,0.36,1) 0.1s" }}>
              <span className="text-xs text-[#38bdf8] font-semibold tracking-[0.25em] uppercase bg-[#0ea5e9]/[0.08] px-5 py-2 rounded-full border border-[#0ea5e9]/10 inline-block mb-5">
                Advanced Exosome Platform
              </span>
            </div>
            <h1 className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-bold text-white leading-tight mb-6"
              style={{ opacity: hero.visible ? 1 : 0, transform: `translateY(${hero.visible ? 0 : 40}px)`, transition: "opacity 1.3s cubic-bezier(0.22,1,0.36,1) 0.3s, transform 1.3s cubic-bezier(0.22,1,0.36,1) 0.3s" }}>
              Research <span className="text-[#38bdf8]">&amp;</span> <br className="hidden sm:block" />Technology
            </h1>
            <p className="text-white/60 text-sm md:text-base max-w-2xl mx-auto leading-relaxed mb-10"
              style={{ opacity: hero.visible ? 1 : 0, transform: `translateY(${hero.visible ? 0 : 25}px)`, transition: "opacity 1.2s cubic-bezier(0.22,1,0.36,1) 0.5s, transform 1.2s cubic-bezier(0.22,1,0.36,1) 0.5s" }}>
              Scientifically engineered exosome solutions powered by cutting-edge research,
              advanced purification technology, and rigorous quality standards — designed for
              regenerative medicine and aesthetic dermatology.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4"
              style={{ opacity: hero.visible ? 1 : 0, transform: `translateY(${hero.visible ? 0 : 20}px)`, transition: "opacity 1.2s cubic-bezier(0.22,1,0.36,1) 0.7s, transform 1.2s cubic-bezier(0.22,1,0.36,1) 0.7s" }}>
              <a href="#overview" className="inline-flex items-center px-6 md:px-8 py-3.5 rounded-full bg-[#0ea5e9] text-white text-sm font-semibold hover:bg-[#0284c7] transition-all duration-300 shadow-[0_4px_20px_rgba(14,165,233,0.25)] hover:shadow-[0_8px_30px_rgba(14,165,233,0.35)]">
                Explore Research
                <svg className="w-4 h-4 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" /></svg>
              </a>
              <a href="#gallery" className="inline-flex items-center px-6 md:px-8 py-3.5 rounded-full border border-white/[0.12] text-white/70 text-sm font-semibold hover:border-[#38bdf8]/30 hover:text-[#38bdf8] transition-all duration-300">
                View Documentation
              </a>
            </div>
          </div>

          <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
            style={{ opacity: hero.visible ? 1 : 0, transition: "opacity 0.8s ease 1s" }}>
            <span className="text-[10px] text-white/50 tracking-widest uppercase">Scroll</span>
            <div className="w-5 h-8 border-2 border-white/20 rounded-full flex justify-center pt-1.5">
              <div className="w-1 h-2 bg-white/40 rounded-full animate-[scrollBounce_1.5s_infinite]" />
            </div>
          </div>
        </section>

        {/* ═══════════════════════════════════════════════════════════════
            OVERVIEW SECTION - Slide from left + scale
        ═══════════════════════════════════════════════════════════════ */}
        <section id="overview" className="relative bg-transparent py-10 md:py-16 overflow-hidden">
          <div className="absolute inset-0 pointer-events-none overflow-hidden">
            <div className="absolute -top-40 -right-40 w-[500px] h-[500px] rounded-full bg-[#0ea5e9]/[0.03] blur-3xl" />
            <div className="absolute -bottom-20 -left-20 w-[400px] h-[400px] rounded-full bg-[#0ea5e9]/[0.02] blur-3xl" />
          </div>

          <div className="w-full max-w-7xl mx-auto px-6 z-10 text-glow">
            <div ref={overview.ref} className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
              {/* Left card - slides in from left with perspective */}
              <div style={{
                opacity: overview.visible ? 1 : 0,
                transform: overview.visible ? "translateX(0) perspective(1000px) rotateY(0deg)" : "translateX(-80px) perspective(1000px) rotateY(8deg)",
                transition: "opacity 1.4s cubic-bezier(0.22,1,0.36,1), transform 1.4s cubic-bezier(0.22,1,0.36,1)",
              }}>
                <div className="glass-card relative rounded-2xl p-8 md:p-10 overflow-hidden">
                  <div className="absolute top-0 left-8 right-8 h-[2px] bg-gradient-to-r from-transparent via-[#0ea5e9]/40 to-transparent" />
                  <span className="inline-block text-[10px] text-[#38bdf8] font-bold tracking-[0.25em] uppercase bg-[#0ea5e9]/[0.1] px-4 py-1.5 rounded-full mb-3"
                    style={{ opacity: overview.visible ? 1 : 0, transform: `translateY(${overview.visible ? 0 : 20}px)`, transition: "opacity 1s ease 0.4s, transform 1s ease 0.4s" }}>
                    EverCeutical Research
                  </span>
                <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-2 leading-tight"
                    style={{ opacity: overview.visible ? 1 : 0, transform: `translateY(${overview.visible ? 0 : 25}px)`, transition: "opacity 1.1s ease 0.55s, transform 1.1s ease 0.55s" }}>
                    Korean Exosome Biotechnology
                  </h2>
                  <p className="text-sm text-[#38bdf8] font-medium mb-5 tracking-wide"
                    style={{ opacity: overview.visible ? 1 : 0, transform: `translateY(${overview.visible ? 0 : 20}px)`, transition: "opacity 1s ease 0.7s, transform 1s ease 0.7s" }}>
                    Backed by Vesco Science Co., Ltd.
                  </p>
                  <p className="text-white/60 text-sm md:text-[15px] leading-relaxed mb-8"
                    style={{ opacity: overview.visible ? 1 : 0, transform: `translateY(${overview.visible ? 0 : 20}px)`, transition: "opacity 1s ease 0.85s, transform 1s ease 0.85s" }}>
                    At EverCeutical, we pioneer a smarter, science-driven future in aesthetics —
                    with exosomes at the core of our innovation. Our mission is to deliver visible,
                    lasting skin health results through regenerative biotechnology.
                  </p>
                  <div className="flex flex-wrap gap-3">
                    {qualityStandards.map((s, i) => (
                      <div key={i} className="flex items-center gap-2 bg-white/[0.06] backdrop-blur-sm rounded-full px-4 py-2 border border-white/[0.08] shadow-sm hover:shadow-md transition-all duration-300"
                        style={{ opacity: overview.visible ? 1 : 0, transform: `translateY(${overview.visible ? 0 : 20}px) scale(${overview.visible ? 1 : 0.8})`, transition: `opacity 0.9s ease ${0.9 + i * 0.12}s, transform 0.9s cubic-bezier(0.34,1.56,0.64,1) ${0.9 + i * 0.12}s` }}>
                        <span className="text-[13px] font-bold text-white">{s.value}</span>
                        <span className="text-[11px] text-white/50">{s.label}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Right orbit - slides in from right */}
              <div className="hidden lg:flex items-center justify-center"
                style={{
                  opacity: overview.visible ? 1 : 0,
                  transform: overview.visible ? "translateX(0) scale(1)" : "translateX(80px) scale(0.8)",
                  transition: "opacity 1.4s ease 0.3s, transform 1.4s cubic-bezier(0.22,1,0.36,1) 0.3s",
                }}>
                <div className="relative w-80 h-80">
                  <div className="absolute inset-0 rounded-full border border-[#0ea5e9]/15" style={{ animation: overview.visible ? "spin 25s linear infinite" : "none" }}>
                    <div className="absolute w-3 h-3 rounded-full bg-[#5b9bd5]/50 -top-1.5 left-1/2 -translate-x-1/2" />
                    <div className="absolute w-2.5 h-2.5 rounded-full bg-[#7ab8a0]/50 -bottom-1.5 left-1/2 -translate-x-1/2" />
                    <div className="absolute w-2 h-2 rounded-full bg-[#d9a441]/50 top-1/2 -right-1 -translate-y-1/2" />
                  </div>
                  <div className="absolute inset-8 rounded-full border border-[#0ea5e9]/10" style={{ animation: overview.visible ? "spin 18s linear infinite reverse" : "none" }}>
                    <div className="absolute w-2.5 h-2.5 rounded-full bg-[#d4915e]/50 top-1/2 -right-1 -translate-y-1/2" />
                    <div className="absolute w-2 h-2 rounded-full bg-[#a088c4]/50 top-1/2 -left-1 -translate-y-1/2" />
                  </div>
                  <div className="absolute inset-16 rounded-full border border-[#0ea5e9]/8" style={{ animation: overview.visible ? "spin 12s linear infinite" : "none" }}>
                    <div className="absolute w-2 h-2 rounded-full bg-[#0ea5e9]/60 -top-1 left-1/2 -translate-x-1/2" />
                  </div>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-24 h-24 rounded-full bg-gradient-to-br from-white/10 to-[#0ea5e9]/[0.08] flex items-center justify-center backdrop-blur-sm border border-white/[0.08] shadow-[0_0_60px_rgba(14,165,233,0.15)]"
                      style={{ opacity: overview.visible ? 1 : 0, transform: `scale(${overview.visible ? 1 : 0.3})`, transition: "opacity 0.8s ease 0.5s, transform 0.8s cubic-bezier(0.34,1.56,0.64,1) 0.5s" }}>
                      <span className="text-3xl">🔬</span>
                    </div>
                  </div>
                  <div className="absolute inset-0 rounded-full bg-[#0ea5e9]/[0.04] blur-2xl" />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ═══════════════════════════════════════════════════════════════
            GALLERY SECTION - Cards fly in from right with stagger
        ═══════════════════════════════════════════════════════════════ */}
        <section id="gallery" className="relative bg-transparent py-14 md:py-18 overflow-hidden">
          <div className="absolute inset-0 pointer-events-none overflow-hidden">
            <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[700px] h-[700px] rounded-full bg-[#0ea5e9]/[0.02] blur-[120px]" />
          </div>

          <div className="w-full max-w-7xl mx-auto px-6 z-10 relative text-glow">
            <div ref={galleryHeader.ref} className="text-center mb-8"
              style={{ opacity: galleryHeader.visible ? 1 : 0, transform: `translateY(${galleryHeader.visible ? 0 : 50}px) scale(${galleryHeader.visible ? 1 : 0.9})`, transition: "opacity 1.3s cubic-bezier(0.22,1,0.36,1), transform 1.3s cubic-bezier(0.22,1,0.36,1)" }}>
              <span className="text-[10px] text-[#38bdf8] font-bold tracking-[0.25em] uppercase bg-[#0ea5e9]/[0.08] px-4 py-1.5 rounded-full inline-block">Scientific Documentation</span>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mt-3 mb-2 leading-tight">
                Research <span className="text-[#38bdf8]">&amp;</span> Documentation
              </h2>
              <p className="text-white/60 text-sm md:text-base max-w-xl mx-auto leading-relaxed">
                Explore our comprehensive research documentation covering exosome technology,
                manufacturing processes, and clinical applications.
              </p>
            </div>

            <div ref={gallery.ref} className="relative"
              style={{ opacity: gallery.visible ? 1 : 0, transform: `translateY(${gallery.visible ? 0 : 40}px)`, transition: "opacity 0.8s ease, transform 0.8s ease" }}>
              <div className="flex items-center gap-3 mb-6">
                <div className="h-[1px] flex-1 bg-gradient-to-r from-[#0ea5e9]/30 to-transparent" />
                <span className="text-[10px] text-[#38bdf8] font-bold tracking-[0.2em] uppercase shrink-0">Scroll to explore</span>
                <svg className="w-4 h-4 text-[#38bdf8] shrink-0 animate-pulse" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
              </div>
              <div className="flex gap-5 overflow-x-auto pb-6 snap-x snap-mandatory scroll-smooth"
                style={{ scrollbarWidth: "thin", scrollbarColor: "#0ea5e9 transparent", WebkitOverflowScrolling: "touch" }}>
                {researchImages.map((img, i) => (
                  <ResearchCard key={i} img={img} index={i} visible={gallery.visible} onClick={() => openImage(i)} />
                ))}
              </div>
              <div className="mt-4 h-[2px] bg-white/[0.08] rounded-full overflow-hidden max-w-md mx-auto">
                <div className="h-full bg-gradient-to-r from-[#0ea5e9] to-[#0ea5e9] rounded-full transition-all duration-1000 ease-out"
                  style={{ width: gallery.visible ? "100%" : "0%", transitionDelay: "0.5s" }} />
              </div>
            </div>
          </div>
        </section>

        {/* ═══════════════════════════════════════════════════════════════
            HIGHLIGHTS SECTION - Cards pop in with bounce + rotation
        ═══════════════════════════════════════════════════════════════ */}
        <section className="relative bg-transparent py-10 md:py-16 overflow-hidden">
          <div className="absolute inset-0 pointer-events-none overflow-hidden">
            <div className="absolute -top-20 left-1/4 w-[400px] h-[400px] rounded-full bg-[#0ea5e9]/[0.03] blur-3xl" />
            <div className="absolute -bottom-20 right-1/4 w-[350px] h-[350px] rounded-full bg-[#0ea5e9]/[0.02] blur-3xl" />
          </div>

          <div className="w-full max-w-7xl mx-auto px-6 z-10 text-glow">
            <div ref={highlights.ref} className="text-center mb-8"
              style={{ opacity: highlights.visible ? 1 : 0, transform: `translateY(${highlights.visible ? 0 : 50}px)`, transition: "opacity 1.3s cubic-bezier(0.22,1,0.36,1), transform 1.3s cubic-bezier(0.22,1,0.36,1)" }}>
              <span className="text-[10px] text-[#38bdf8] font-bold tracking-[0.25em] uppercase bg-[#0ea5e9]/[0.08] px-4 py-1.5 rounded-full inline-block">Why EverCeutical</span>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mt-3 mb-2 leading-tight">
                Research <span className="text-[#38bdf8]">Highlights</span>
              </h2>
              <p className="text-white/60 text-sm md:text-base max-w-xl mx-auto leading-relaxed">
                What sets our exosome technology apart — from proprietary extraction to global clinical delivery.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {researchHighlights.map((item, i) => (
                <HighlightCard key={i} item={item} index={i} visible={highlights.visible} />
              ))}
            </div>
          </div>
        </section>

        {/* ═══════════════════════════════════════════════════════════════
            FEATURES SECTION - Cards rise up with stagger + glow
        ═══════════════════════════════════════════════════════════════ */}
        <section id="features" className="relative bg-transparent py-10 md:py-16 overflow-hidden">
          <div className="absolute inset-0 pointer-events-none overflow-hidden">
            <div className="absolute -top-20 left-1/4 w-[400px] h-[400px] rounded-full bg-[#0ea5e9]/[0.03] blur-3xl" />
            <div className="absolute -bottom-20 right-1/4 w-[350px] h-[350px] rounded-full bg-[#0ea5e9]/[0.02] blur-3xl" />
          </div>

          <div className="w-full max-w-7xl mx-auto px-6 z-10 text-glow">
            <div ref={features.ref} className="text-center mb-8"
              style={{ opacity: features.visible ? 1 : 0, transform: `translateY(${features.visible ? 0 : 50}px)`, transition: "opacity 1.3s cubic-bezier(0.22,1,0.36,1), transform 1.3s cubic-bezier(0.22,1,0.36,1)" }}>
              <span className="text-[10px] text-[#38bdf8] font-bold tracking-[0.25em] uppercase bg-[#0ea5e9]/[0.08] px-4 py-1.5 rounded-full inline-block">Platform Capabilities</span>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mt-3 mb-2 leading-tight">
                Core <span className="text-[#38bdf8]">Technologies</span>
              </h2>
              <p className="text-white/60 text-sm md:text-base max-w-xl mx-auto leading-relaxed">
                Advanced exosome platform engineered for consistency, safety, and therapeutic efficacy.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {[
                { icon: "🧬", title: "Cellular Communication", desc: "Exosomes facilitate biological signaling between cells, carrying growth factors, cytokines, and microRNA payloads that instruct damaged tissue to initiate repair." },
                { icon: "🔬", title: "Laboratory Engineered", desc: "Produced under strictly controlled GMP protocols using proprietary isolation and purification technologies to ensure maximum bioactivity." },
                { icon: "🛡", title: "Quality Assurance", desc: "Every batch undergoes rigorous analytical testing including nanoparticle tracking analysis, protein quantification, sterility validation." },
                { icon: "⚡", title: "Regenerative Potential", desc: "Designed to support tissue repair, reduce inflammation, and enhance cellular recovery across dermatological and therapeutic applications." },
                { icon: "🧫", title: "Cell Sources", desc: "Derived from human umbilical cord mesenchymal stem cells (hUC-MSCs), adipose tissue, fibroblasts, and lab-engineered cell lines." },
                { icon: "📋", title: "Research-Driven", desc: "Backed by peer-reviewed clinical research and continuously validated through ongoing studies to meet the highest evidence-based standards." },
              ].map((f, i) => (
                <FeatureCard key={i} feature={f} index={i} visible={features.visible} />
              ))}
            </div>
          </div>
        </section>

        {/* ═══════════════════════════════════════════════════════════════
            PROCESS SECTION - Steps slide in alternating + connector draws
        ═══════════════════════════════════════════════════════════════ */}
        <section id="process" className="relative bg-transparent py-10 md:py-16 overflow-hidden">
          <div className="absolute inset-0 pointer-events-none overflow-hidden">
            <div className="absolute top-1/3 right-0 w-[400px] h-[400px] rounded-full bg-[#0ea5e9]/[0.03] blur-3xl" />
            <div className="absolute bottom-1/3 left-0 w-[350px] h-[350px] rounded-full bg-[#0ea5e9]/[0.02] blur-3xl" />
            {[18, 35, 52, 68, 82].map((x, i) => (
              <FloatingParticle key={i} delay={i * 1.5 + 0.5} x={x} size={3 + (i % 2) * 2} />
            ))}
          </div>

          <div className="w-full max-w-6xl mx-auto px-6 z-10 text-glow">
            <div ref={processSection.ref} className="text-center mb-8"
              style={{ opacity: processSection.visible ? 1 : 0, transform: `translateY(${processSection.visible ? 0 : 50}px)`, transition: "opacity 1.3s cubic-bezier(0.22,1,0.36,1), transform 1.3s cubic-bezier(0.22,1,0.36,1)" }}>
              <span className="text-[10px] text-[#38bdf8] font-bold tracking-[0.25em] uppercase bg-[#0ea5e9]/[0.08] px-4 py-1.5 rounded-full inline-block">How We Work</span>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mt-3 mb-2 leading-tight">
                Our Research <span className="text-[#38bdf8]">Process</span>
              </h2>
              <p className="text-white/60 text-sm md:text-base max-w-xl mx-auto leading-relaxed">
                From cell sourcing to clinical delivery — every step meticulously controlled.
              </p>
            </div>

            <div className="relative">
              <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-[2px] -translate-x-1/2">
                <div className="w-full h-full bg-gradient-to-b from-[#0ea5e9]/20 via-[#0ea5e9]/40 to-[#0ea5e9]/20"
                  style={{ clipPath: processSection.visible ? "inset(0 0 0 0)" : "inset(0 0 100% 0)", transition: "clip-path 2.5s cubic-bezier(0.22,1,0.36,1) 0.5s" }} />
              </div>
              <div className="space-y-4 md:space-y-6 lg:space-y-0">
                {processSteps.map((step, i) => (
                  <ProcessStep key={i} step={step} index={i} visible={processSection.visible} />
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ═══════════════════════════════════════════════════════════════
            CTA SECTION - Glass card scales in
        ═══════════════════════════════════════════════════════════════ */}
        <section className="relative bg-transparent py-10 md:py-16 overflow-hidden">
          <div className="absolute inset-0 pointer-events-none overflow-hidden">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-[#0ea5e9]/[0.03] blur-3xl" />
          </div>

          <div className="w-full max-w-4xl mx-auto px-6 z-10 relative text-glow">
            <div ref={cta.ref} style={{ opacity: cta.visible ? 1 : 0, transform: `translateY(${cta.visible ? 0 : 60}px) scale(${cta.visible ? 1 : 0.9})`, transition: "opacity 1.5s cubic-bezier(0.22,1,0.36,1), transform 1.5s cubic-bezier(0.22,1,0.36,1)" }}>
              <div className="glass-card relative rounded-2xl p-6 md:p-10 lg:p-14 text-center overflow-hidden">
                <div className="absolute top-0 left-8 right-8 h-[2px] bg-gradient-to-r from-transparent via-[#0ea5e9]/40 to-transparent" />
                <span className="inline-block text-[10px] text-[#38bdf8] font-bold tracking-[0.25em] uppercase bg-[#0ea5e9]/[0.08] px-4 py-1.5 rounded-full mb-3"
                  style={{ opacity: cta.visible ? 1 : 0, transform: `translateY(${cta.visible ? 0 : 15}px)`, transition: "opacity 1s ease 0.4s, transform 1s ease 0.4s" }}>Get Started</span>
                <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-4 leading-tight"
                  style={{ opacity: cta.visible ? 1 : 0, transform: `translateY(${cta.visible ? 0 : 20}px)`, transition: "opacity 1.1s ease 0.55s, transform 1.1s ease 0.55s" }}>
                  Explore Our <span className="text-[#38bdf8]">Products</span>
                </h2>
                <p className="text-white/60 text-sm md:text-base max-w-lg mx-auto leading-relaxed mb-5"
                  style={{ opacity: cta.visible ? 1 : 0, transform: `translateY(${cta.visible ? 0 : 20}px)`, transition: "opacity 1s ease 0.7s, transform 1s ease 0.7s" }}>
                  Discover our range of advanced exosome formulations designed for professional clinical use.
                </p>
                <div className="flex flex-col sm:flex-row items-center justify-center gap-4"
                  style={{ opacity: cta.visible ? 1 : 0, transform: `translateY(${cta.visible ? 0 : 20}px)`, transition: "opacity 1s ease 0.85s, transform 1s ease 0.85s" }}>
                  <Link href="/#products" className="inline-flex items-center gap-2 bg-[#0ea5e9] text-white text-sm font-semibold px-6 md:px-8 py-3.5 rounded-full hover:bg-[#0284c7] transition-all duration-300 shadow-[0_4px_20px_rgba(14,165,233,0.25)] hover:shadow-[0_8px_30px_rgba(14,165,233,0.35)]">
                    View Products
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
                  </Link>
                  <Link href="/about-us" className="inline-flex items-center gap-2 border border-white/[0.12] text-white/70 text-sm font-semibold px-6 md:px-8 py-3.5 rounded-full hover:border-[#38bdf8]/30 hover:text-[#38bdf8] transition-all duration-300">
                    About Us
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />

      {selectedImage !== null && (
        <ImageModal images={researchImages} currentIndex={selectedImage} onClose={closeImage} onNavigate={setSelectedImage} />
      )}
    </>
  )
}

/* ═══════════════════════════════════════════════════════════════
    RESEARCH CARD - 3D tilt with mouse tracking
   ═══════════════════════════════════════════════════════════════ */
function ResearchCard({ img, index, visible, onClick }: { img: string; index: number; visible: boolean; onClick: () => void }) {
  const cardRef = useRef<HTMLDivElement>(null)
  const [tilt, setTilt] = useState({ x: 0, y: 0 })
  const [isHovered, setIsHovered] = useState(false)

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!cardRef.current) return
    const rect = cardRef.current.getBoundingClientRect()
    const x = (e.clientX - rect.left) / rect.width
    const y = (e.clientY - rect.top) / rect.height
    setTilt({ x: (y - 0.5) * -15, y: (x - 0.5) * 15 })
  }

  return (
    <div ref={cardRef} className="group relative shrink-0 w-[250px] md:w-[280px] lg:w-[320px] snap-center cursor-pointer"
      style={{
        opacity: visible ? 1 : 0,
        transform: visible
          ? `translateX(0) perspective(800px) rotateY(${tilt.y}deg) rotateX(${tilt.x}deg)`
          : `translateX(100px) perspective(800px) rotateY(15deg) rotateX(0deg)`,
        transition: visible ? "transform 0.15s ease-out" : `opacity 1s cubic-bezier(0.22,1,0.36,1) ${0.15 + index * 0.08}s, transform 1s cubic-bezier(0.22,1,0.36,1) ${0.15 + index * 0.08}s`,
      }}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => { setTilt({ x: 0, y: 0 }); setIsHovered(false) }}
      onTouchStart={() => setIsHovered(true)}
      onTouchEnd={() => { setTilt({ x: 0, y: 0 }); setIsHovered(false) }}
      onClick={onClick}>
      <div className="glass-card relative rounded-2xl overflow-hidden h-[380px] md:h-[420px]"
        style={{
          transition: "all 0.4s cubic-bezier(0.22,1,0.36,1)",
        }}>
        <div className="relative h-[65%] overflow-hidden">
          <img src={img} alt={`Research Document ${index + 1}`} className="w-full h-full object-cover transition-transform duration-700" style={{ transform: isHovered ? "scale(1.08)" : "scale(1)" }} loading="lazy" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
          <div className="absolute top-4 left-4">
            <div className="px-3 py-1.5 rounded-lg text-[11px] font-bold tracking-wider uppercase transition-all duration-400"
              style={{ background: isHovered ? "rgba(14,165,233,0.9)" : "rgba(255,255,255,0.85)", color: isHovered ? "white" : "#0c1929", backdropFilter: "blur(8px)", boxShadow: "0 4px 12px rgba(0,0,0,0.1)" }}>
              Doc {String(index + 1).padStart(2, "0")}
            </div>
          </div>
          <div className="absolute top-4 right-4 transition-all duration-400" style={{ opacity: isHovered ? 1 : 0, transform: `scale(${isHovered ? 1 : 0.5})` }}>
            <div className="w-9 h-9 rounded-full bg-white/[0.1] backdrop-blur-sm flex items-center justify-center shadow-lg">
              <svg className="w-4 h-4 text-[#38bdf8]" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7" /></svg>
            </div>
          </div>
        </div>
        <div className="relative p-5 h-[35%] flex flex-col justify-between">
          <div>
            <h3 className="text-[14px] font-bold text-white mb-1.5 leading-snug">Research Document {String(index + 1).padStart(2, "0")}</h3>
            <p className="text-[11px] text-white/50 leading-relaxed line-clamp-2">Exosome technology research paper covering advanced purification methods, clinical applications, and therapeutic outcomes.</p>
          </div>
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-1.5"><div className="w-1.5 h-1.5 rounded-full bg-[#0ea5e9]" /><span className="text-[10px] text-[#38bdf8] font-semibold tracking-wide uppercase">PDF</span></div>
            <div className="flex items-center gap-1 text-[#38bdf8] transition-all duration-300" style={{ transform: isHovered ? "translateX(3px)" : "translateX(0)" }}>
              <span className="text-[11px] font-semibold">View</span>
              <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
            </div>
          </div>
          <div className="absolute bottom-0 left-5 right-5 h-[2px] rounded-full transition-all duration-500"
            style={{ background: isHovered ? "linear-gradient(to right, transparent, #0ea5e9, transparent)" : "linear-gradient(to right, transparent, transparent, transparent)" }} />
        </div>
      </div>
    </div>
  )
}

/* ═══════════════════════════════════════════════════════════════
    IMAGE MODAL - Full viewer with thumbnails + swipe
   ═══════════════════════════════════════════════════════════════ */
function ImageModal({ images, currentIndex, onClose, onNavigate }: { images: string[]; currentIndex: number; onClose: () => void; onNavigate: (i: number) => void }) {
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
      <button onClick={onClose} className="absolute top-4 right-4 md:top-6 md:right-6 z-[110] w-10 h-10 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center text-white/70 hover:bg-white/20 hover:text-white transition-all duration-300">
        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /></svg>
      </button>
      <div className="absolute top-4 left-4 md:top-6 md:left-6 z-[110] bg-white/10 backdrop-blur-sm rounded-full px-4 py-1.5">
        <span className="text-white/80 text-xs font-medium">{currentIndex + 1} / {images.length}</span>
      </div>
      {currentIndex > 0 && (
        <button onClick={(e) => { e.stopPropagation(); onNavigate(currentIndex - 1) }} className="absolute left-2 md:left-6 z-[110] w-10 h-10 md:w-12 md:h-12 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center text-white/70 hover:bg-white/20 hover:text-white transition-all duration-300">
          <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" /></svg>
        </button>
      )}
      {currentIndex < images.length - 1 && (
        <button onClick={(e) => { e.stopPropagation(); onNavigate(currentIndex + 1) }} className="absolute right-2 md:right-6 z-[110] w-10 h-10 md:w-12 md:h-12 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center text-white/70 hover:bg-white/20 hover:text-white transition-all duration-300">
          <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
        </button>
      )}
      <div className="relative max-w-5xl max-h-[85vh] w-full mx-4 md:mx-8" onClick={(e) => e.stopPropagation()}
        onTouchStart={(e) => setTouchStart(e.touches[0].clientX)}
        onTouchEnd={(e) => { if (touchStart !== null) { const d = touchStart - e.changedTouches[0].clientX; if (Math.abs(d) > 50) { if (d > 0 && currentIndex < images.length - 1) onNavigate(currentIndex + 1); if (d < 0 && currentIndex > 0) onNavigate(currentIndex - 1) } setTouchStart(null) } }}
        style={{ animation: "scaleIn 0.3s ease" }}>
        <img src={images[currentIndex]} alt={`Research Document ${currentIndex + 1}`} className="w-full h-full object-contain rounded-xl" key={currentIndex} />
      </div>
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 z-[110] flex gap-1.5 p-2 bg-black/30 backdrop-blur-sm rounded-xl max-w-[90vw] overflow-x-auto">
        {images.map((img, i) => (
          <button key={i} onClick={(e) => { e.stopPropagation(); onNavigate(i) }}
            className={`w-10 h-10 md:w-12 md:h-12 rounded-lg overflow-hidden shrink-0 transition-all duration-300 ${i === currentIndex ? "ring-2 ring-white/60 scale-110" : "opacity-40 hover:opacity-70"}`}>
            <img src={img} alt="" className="w-full h-full object-cover" />
          </button>
        ))}
      </div>
    </div>
  )
}

/* ═══════════════════════════════════════════════════════════════
    HIGHLIGHT CARD - Pop in with bounce + color accent
   ═══════════════════════════════════════════════════════════════ */
function HighlightCard({ item, index, visible }: { item: { title: string; desc: string; icon: string; color: string }; index: number; visible: boolean }) {
  const [hovered, setHovered] = useState(false)
  const isLeft = index % 2 === 0

  return (
    <div className="group relative rounded-2xl overflow-hidden"
      onMouseEnter={() => setHovered(true)} onMouseLeave={() => setHovered(false)}
      onTouchStart={() => setHovered(true)} onTouchEnd={() => setTimeout(() => setHovered(false), 300)}
      style={{
        opacity: visible ? 1 : 0,
        transform: visible
          ? "translateX(0) translateY(0) scale(1) rotate(0deg)"
          : `translateX(${isLeft ? -80 : 80}px) translateY(40px) scale(0.9) rotate(${isLeft ? -3 : 3}deg)`,
        transition: `opacity 1.2s cubic-bezier(0.22,1,0.36,1) ${0.2 + index * 0.18}s, transform 1.2s cubic-bezier(0.34,1.56,0.64,1) ${0.2 + index * 0.18}s`,
        background: hovered ? `linear-gradient(135deg, rgba(255,255,255,0.08) 0%, ${item.color}08 100%)` : "rgba(255,255,255,0.05)",
        backdropFilter: "blur(16px)", WebkitBackdropFilter: "blur(16px)",
        border: `1px solid ${hovered ? item.color + "20" : "rgba(255,255,255,0.05)"}`,
        boxShadow: hovered ? `0 16px 48px ${item.color}10, 0 0 0 1px ${item.color}08` : "0 4px 20px rgba(0,0,0,0.15)",
      }}>
      <div className="relative p-6 md:p-8">
        <div className="flex items-start gap-4">
          <div className="w-14 h-14 rounded-xl flex items-center justify-center text-2xl shrink-0 transition-all duration-500"
            style={{ backgroundColor: item.color + "10", transform: hovered ? "scale(1.15) rotate(-8deg)" : "scale(1) rotate(0deg)" }}>
            {item.icon}
          </div>
          <div className="flex-1 min-w-0">
            <h4 className="text-[16px] font-bold text-white mb-2 transition-colors duration-300" style={{ color: hovered ? item.color : undefined }}>
              {item.title}
            </h4>
            <p className="text-[13px] text-white/60 leading-[1.7]">{item.desc}</p>
          </div>
        </div>
        <div className="absolute bottom-0 left-6 right-6 h-[2px] transition-all duration-500"
          style={{ background: hovered ? `linear-gradient(to right, transparent, ${item.color}40, transparent)` : "linear-gradient(to right, transparent, transparent, transparent)" }} />
      </div>
    </div>
  )
}

/* ═══════════════════════════════════════════════════════════════
    FEATURE CARD - Rise up with glow on hover
   ═══════════════════════════════════════════════════════════════ */
function FeatureCard({ feature, index, visible }: { feature: { icon: string; title: string; desc: string }; index: number; visible: boolean }) {
  const [hovered, setHovered] = useState(false)

  return (
    <div className="group relative rounded-xl overflow-hidden"
      onMouseEnter={() => setHovered(true)} onMouseLeave={() => setHovered(false)}
      onTouchStart={() => setHovered(true)} onTouchEnd={() => setTimeout(() => setHovered(false), 300)}
      style={{
        opacity: visible ? 1 : 0,
        transform: `translateY(${visible ? 0 : 60}px) scale(${visible ? 1 : 0.92})`,
        transition: `opacity 1.1s cubic-bezier(0.22,1,0.36,1) ${0.15 + index * 0.14}s, transform 1.1s cubic-bezier(0.22,1,0.36,1) ${0.15 + index * 0.14}s`,
        background: hovered ? "linear-gradient(135deg, rgba(255,255,255,0.07) 0%, rgba(255,255,255,0.04) 100%)" : "rgba(255,255,255,0.05)",
        backdropFilter: "blur(12px)", WebkitBackdropFilter: "blur(12px)",
        border: `1px solid ${hovered ? "rgba(14,165,233,0.15)" : "rgba(255,255,255,0.08)"}`,
        boxShadow: hovered ? "0 12px 40px rgba(14,165,233,0.1), 0 0 0 1px rgba(14,165,233,0.08)" : "0 2px 12px rgba(0,0,0,0.15)",
      }}>
      <div className="p-6">
        <div className="w-11 h-11 rounded-xl bg-[#0ea5e9]/5 flex items-center justify-center text-lg mb-4 transition-all duration-500"
          style={{ backgroundColor: hovered ? "rgba(14,165,233,0.1)" : "rgba(14,165,233,0.05)", transform: hovered ? "scale(1.15) rotate(-5deg)" : "scale(1) rotate(0deg)" }}>
          {feature.icon}
        </div>
        <h4 className="text-[15px] font-bold text-white mb-2">{feature.title}</h4>
        <p className="text-[13px] text-white/60 leading-relaxed">{feature.desc}</p>
        <div className="absolute bottom-0 left-6 right-6 h-[1.5px] transition-all duration-500"
          style={{ background: hovered ? "linear-gradient(to right, transparent, rgba(14,165,233,0.3), transparent)" : "linear-gradient(to right, transparent, transparent, transparent)" }} />
      </div>
    </div>
  )
}

/* ═══════════════════════════════════════════════════════════════
    PROCESS STEP - Alternating slide + dot bounce
   ═══════════════════════════════════════════════════════════════ */
function ProcessStep({ step, index, visible }: { step: { step: string; title: string; desc: string; icon: string }; index: number; visible: boolean }) {
  const [hovered, setHovered] = useState(false)
  const isEven = index % 2 === 0

  return (
    <div className={`relative lg:flex lg:items-center lg:gap-8 ${isEven ? "lg:flex-row" : "lg:flex-row-reverse"}`}
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? "translateX(0)" : `translateX(${isEven ? -80 : 80}px)`,
        transition: `opacity 1.2s cubic-bezier(0.22,1,0.36,1) ${0.25 + index * 0.22}s, transform 1.2s cubic-bezier(0.22,1,0.36,1) ${0.25 + index * 0.22}s`,
      }}>
      <div className={`lg:w-[calc(50%-2rem)] ${isEven ? "lg:text-right" : "lg:text-left"}`}>
        <div className="relative rounded-xl overflow-hidden p-6 cursor-default"
          onMouseEnter={() => setHovered(true)} onMouseLeave={() => setHovered(false)}
          onTouchStart={() => setHovered(true)} onTouchEnd={() => setTimeout(() => setHovered(false), 300)}
          style={{
            background: hovered ? "linear-gradient(135deg, rgba(255,255,255,0.07) 0%, rgba(255,255,255,0.04) 100%)" : "rgba(255,255,255,0.04)",
            backdropFilter: "blur(12px)", WebkitBackdropFilter: "blur(12px)",
            border: `1px solid ${hovered ? "rgba(14,165,233,0.15)" : "rgba(255,255,255,0.05)"}`,
            boxShadow: hovered ? "0 12px 40px rgba(14,165,233,0.08)" : "0 2px 12px rgba(0,0,0,0.1)",
            transition: "all 0.5s ease",
          }}>
          <div className={`flex items-center gap-3 mb-3 ${isEven ? "lg:justify-end" : ""}`}>
            <div className="w-10 h-10 rounded-lg bg-[#0ea5e9]/10 flex items-center justify-center text-lg transition-all duration-500"
              style={{ transform: hovered ? "scale(1.15) rotate(-5deg)" : "scale(1)" }}>
              {step.icon}
            </div>
            <div>
              <p className="text-[10px] font-bold text-[#38bdf8] tracking-widest uppercase">Step {step.step}</p>
              <h4 className="text-[15px] font-bold text-white">{step.title}</h4>
            </div>
          </div>
          <p className="text-[13px] text-white/60 leading-relaxed">{step.desc}</p>
        </div>
      </div>

      <div className="hidden md:flex items-center justify-center w-8 shrink-0">
        <div className="w-4 h-4 rounded-full bg-[#0ea5e9] transition-all duration-500"
          style={{
            transform: visible ? (hovered ? "scale(1.5)" : "scale(1)") : "scale(0)",
            boxShadow: hovered ? "0 0 35px rgba(14,165,233,0.6)" : "0 0 20px rgba(14,165,233,0.3)",
            transition: `transform 0.8s cubic-bezier(0.34,1.56,0.64,1) ${0.4 + index * 0.22}s, box-shadow 0.5s ease`,
          }} />
      </div>

      <div className="hidden md:block lg:w-[calc(50%-2rem)]" />
    </div>
  )
}
