"use client"

import { useState, useEffect, useRef, useMemo, useCallback } from "react"
import Link from "next/link"
import { products } from "@/data/siteData"

const featuredProducts = products.filter((p) => p.featured).slice(0, 4)

function useInView(threshold = 0.15) {
  const ref = useRef<HTMLDivElement>(null)
  const [visible, setVisible] = useState(false)
  useEffect(() => {
    const el = ref.current
    if (!el) return
    const obs = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true) },
      { threshold, rootMargin: "0px 0px -30px 0px" }
    )
    obs.observe(el)
    return () => obs.disconnect()
  }, [threshold])
  return { ref, visible }
}

const CARD_W = 220
const CARD_H = 310
const CARD_W_MOBILE = 200
const CARD_H_MOBILE = 280
const RADIUS = 420
const AUTO_DEG = 90
const AUTO_INTERVAL = 5000
const PAUSE_MS = 10000
const DRAG_SENSITIVITY = 0.3

function degToRad(d: number) { return (d * Math.PI) / 180 }

function getOrbitPos(angleDeg: number, radius: number) {
  const rad = degToRad(angleDeg)
  const x = Math.sin(rad) * radius
  const z = Math.cos(rad) * radius
  const rotY = -angleDeg
  const normalizedZ = (z + radius) / (2 * radius)
  const scale = 0.55 + normalizedZ * 0.35
  const opacity = 0.6 + normalizedZ * 0.4
  return { x, z, rotY, scale, opacity }
}

export default function FeaturedProducts() {
  const [mounted, setMounted] = useState(false)
  const [orbitAngle, setOrbitAngle] = useState(0)
  const [bp, setBp] = useState<"desktop" | "tablet" | "mobile">("desktop")

  const pausedRef = useRef(false)
  const resumeRef = useRef<ReturnType<typeof setTimeout> | null>(null)
  const autoRef = useRef<ReturnType<typeof setInterval> | null>(null)
  const dragRef = useRef({ active: false, startX: 0, currentAngle: 0, lastAngle: 0 })
  const containerRef = useRef<HTMLDivElement>(null)
  const touchRef = useRef({ startX: 0, startTime: 0 })

  const headerInView = useInView(0.05)

  useEffect(() => { setMounted(true) }, [])

  useEffect(() => {
    const check = () => {
      const w = window.innerWidth
      setBp(w < 768 ? "mobile" : w < 1024 ? "tablet" : "desktop")
    }
    check()
    window.addEventListener("resize", check)
    return () => window.removeEventListener("resize", check)
  }, [])

  const radius = bp === "mobile" ? 160 : bp === "tablet" ? 320 : RADIUS
  const cardW = bp === "mobile" ? CARD_W_MOBILE : CARD_W
  const cardH = bp === "mobile" ? CARD_H_MOBILE : CARD_H

  const pauseAuto = useCallback(() => {
    pausedRef.current = true
    if (resumeRef.current) clearTimeout(resumeRef.current)
    resumeRef.current = setTimeout(() => { pausedRef.current = false }, PAUSE_MS)
  }, [])

  useEffect(() => {
    autoRef.current = setInterval(() => {
      if (!pausedRef.current) setOrbitAngle((prev) => prev + AUTO_DEG)
    }, AUTO_INTERVAL)
    return () => {
      if (autoRef.current) clearInterval(autoRef.current)
      if (resumeRef.current) clearTimeout(resumeRef.current)
    }
  }, [])

  const snapToNearest = useCallback(() => {
    setOrbitAngle((prev) => Math.round(prev / AUTO_DEG) * AUTO_DEG)
  }, [])

  const onPointerDown = useCallback((e: React.PointerEvent) => {
    if (e.pointerType === "touch") return
    pausedRef.current = true
    if (resumeRef.current) clearTimeout(resumeRef.current)
    dragRef.current = { active: true, startX: e.clientX, currentAngle: orbitAngle, lastAngle: orbitAngle }
    ;(e.target as HTMLElement).setPointerCapture(e.pointerId)
  }, [orbitAngle])

  const onPointerMove = useCallback((e: React.PointerEvent) => {
    if (!dragRef.current.active) return
    const dx = e.clientX - dragRef.current.startX
    setOrbitAngle(dragRef.current.currentAngle + dx * DRAG_SENSITIVITY)
  }, [])

  const onPointerUp = useCallback(() => {
    if (!dragRef.current.active) return
    dragRef.current.active = false
    snapToNearest()
    pauseAuto()
  }, [snapToNearest, pauseAuto])

  const onTouchStart = useCallback((e: React.TouchEvent) => {
    pausedRef.current = true
    if (resumeRef.current) clearTimeout(resumeRef.current)
    touchRef.current = { startX: e.touches[0].clientX, startTime: Date.now() }
  }, [])

  const onTouchEnd = useCallback((e: React.TouchEvent) => {
    const dx = e.changedTouches[0].clientX - touchRef.current.startX
    const dt = Date.now() - touchRef.current.startTime
    const velocity = Math.abs(dx) / dt
    if (Math.abs(dx) > 50 || velocity > 0.3) {
      setOrbitAngle((prev) => prev + (dx < 0 ? AUTO_DEG : -AUTO_DEG))
    }
    pauseAuto()
  }, [pauseAuto])

  const cards = useMemo(() => {
    return featuredProducts.map((product, idx) => {
      const cardAngle = idx * 90
      const relativeAngle = cardAngle - (orbitAngle % 360)
      const normalizedAngle = ((relativeAngle % 360) + 360) % 360
      const pos = getOrbitPos(normalizedAngle, radius)
      const isFront = normalizedAngle < 30 || normalizedAngle > 330
      return { product, idx, pos, isFront, normalizedAngle }
    }).sort((a, b) => a.pos.z - b.pos.z)
  }, [orbitAngle, radius])

  const transition = "transform 0.8s cubic-bezier(0.4, 0, 0.2, 1), opacity 0.8s ease, z-index 0s"

  if (!mounted) return null

  return (
    <section
      id="products"
      className="relative flex flex-col items-center justify-center overflow-hidden pt-4 pb-8 md:pt-6 md:pb-12 z-10"
    >
      {/* Section Header */}
      <div
        className="text-center mb-6 px-5 sm:px-6 z-20 relative text-glow"
      >
        <span className="text-[10px] text-[#38bdf8] font-bold tracking-[0.25em] uppercase bg-[#0ea5e9]/[0.08] px-4 py-1.5 rounded-full inline-block">
          Our Best Sellers
        </span>
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mt-4 mb-2 leading-tight">
          Products
        </h2>
        <p className="text-[#94b8d8] text-xs sm:text-sm max-w-md mx-auto leading-relaxed">
          High-purity exosome formulations trusted by professionals worldwide.
        </p>
      </div>

      {/* Circular Carousel */}
      <div
        className="relative w-full max-w-[1400px] mx-auto"
        style={{
          WebkitPerspective: 2500,
          perspective: 2500,
          WebkitPerspectiveOrigin: "50% 50%",
          perspectiveOrigin: "50% 50%",
        }}
      >
        <div
          ref={containerRef}
          className="relative mx-auto select-none"
          style={{
            height: `${cardH + 40}px`,
            width: "100%",
            WebkitTransformStyle: "preserve-3d",
            transformStyle: "preserve-3d",
            cursor: dragRef.current.active ? "grabbing" : "grab",
          }}
          onPointerDown={onPointerDown}
          onPointerMove={onPointerMove}
          onPointerUp={onPointerUp}
          onPointerCancel={onPointerUp}
          onTouchStart={onTouchStart}
          onTouchEnd={onTouchEnd}
        >
          {cards.map(({ product, idx, pos, isFront }) => (
            <div
              key={idx}
              className="absolute"
              style={{
                width: `${cardW}px`,
                height: `${cardH}px`,
                left: "50%",
                top: "50%",
                marginLeft: `${-cardW / 2}px`,
                marginTop: `${-cardH / 2}px`,
                WebkitTransformStyle: "preserve-3d",
                transformStyle: "preserve-3d",
                WebkitTransform: `translateX(${pos.x.toFixed(3)}px) translateZ(${pos.z.toFixed(3)}px) scale(${pos.scale.toFixed(4)}) rotateY(${pos.rotY.toFixed(3)}deg)`,
                transform: `translateX(${pos.x.toFixed(3)}px) translateZ(${pos.z.toFixed(3)}px) scale(${pos.scale.toFixed(4)}) rotateY(${pos.rotY.toFixed(3)}deg)`,
                opacity: Number(pos.opacity.toFixed(4)),
                zIndex: Math.round(pos.z + 500),
                transition: dragRef.current.active ? "none" : transition,
                pointerEvents: isFront ? "auto" : "none",
              }}
            >
              <div
                className="absolute -inset-3 rounded-3xl blur-xl"
                style={{
                  background: product.accentColor,
                  opacity: isFront ? 0.06 : 0,
                  transition: dragRef.current.active ? "none" : "opacity 0.8s ease",
                }}
              />
              <div
                className="glass-card relative w-full h-full rounded-2xl overflow-hidden"
                style={{
                  boxShadow: isFront
                    ? `0 25px 60px ${product.accentColor}22, 0 0 40px ${product.accentColor}0a`
                    : "0 10px 30px rgba(0,0,0,0.05)",
                  transition: dragRef.current.active ? "none" : "box-shadow 0.8s ease",
                }}
              >
                <div
                  className="absolute inset-0 rounded-2xl pointer-events-none"
                  style={{
                    border: isFront ? `2px solid ${product.accentColor}25` : "2px solid transparent",
                    transition: dragRef.current.active ? "none" : "border 0.8s ease",
                  }}
                />
                <div className="relative w-full h-[38%] overflow-hidden bg-white/[0.04]">
                  <img src={product.img} alt={product.fullName} className="w-full h-full" style={{ objectFit: "cover" }} draggable={false} />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0c1929] via-[#0c1929]/20 to-transparent" />
                </div>
                <div className="relative px-3 pb-3 pt-1 flex flex-col h-[62%]">
                  <span
                    className="text-[9px] md:text-[10px] font-bold tracking-wider uppercase mb-1"
                    style={{ color: product.accentColor }}
                  >
                    {product.category}
                  </span>
                  <h4
                    className="text-[12px] md:text-[13px] font-bold leading-snug"
                    style={{
                      color: isFront ? "#f1f5f9" : "#64748b",
                      transition: dragRef.current.active ? "none" : "color 0.8s ease",
                    }}
                  >
                    {product.fullName}
                  </h4>
                  <p className="text-[10px] md:text-[11px] text-[#94b8d8] mt-1 leading-relaxed line-clamp-2">{product.desc}</p>
                  <div className="mt-2 space-y-1">
                    {product.benefits.slice(0, 3).map((b, j) => (
                      <div key={j} className="flex items-start gap-1.5" style={{ opacity: isFront ? 1 : 0.5, transition: dragRef.current.active ? "none" : "opacity 0.8s ease" }}>
                        <svg className="w-2.5 h-2.5 mt-[2px] shrink-0" style={{ color: product.accentColor }} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                        </svg>
                        <span className="text-[9px] md:text-[10px] text-[#94b8d8] leading-snug line-clamp-1">{b}</span>
                      </div>
                    ))}
                  </div>
                  <div className="flex items-center gap-1.5 mt-auto pt-2">
                    <span className="text-[9px] md:text-[10px] px-2 py-[3px] rounded-full font-medium" style={{ background: product.accentColor + "12", color: product.accentColor }}>
                      {product.peptides.length} Peptides
                    </span>
                    <span className="text-[9px] md:text-[10px] px-2 py-[3px] rounded-full bg-white/[0.06] text-[#94b8d8] font-medium">
                      {product.size}
                    </span>
                  </div>
                  {isFront && (
                    <Link
                      href={product.href}
                      onClick={(e) => e.stopPropagation()}
                      className="mt-2.5 flex items-center justify-center gap-2 w-full py-2 rounded-lg text-white text-[11px] font-semibold"
                      style={{
                        background: `linear-gradient(135deg, ${product.accentColor}, ${product.accentColor}bb)`,
                        boxShadow: `0 4px 12px ${product.accentColor}25`,
                      }}
                    >
                      View More
                      <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                      </svg>
                    </Link>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Mobile swipe hint */}
      {bp === "mobile" && (
        <div className="mt-4 text-center">
          <p className="text-[10px] text-[#7eaac8] tracking-widest uppercase flex items-center justify-center gap-2">
            <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M7.5 21L3 16.5m0 0L7.5 12M3 16.5h13.5m0-13.5L21 7.5m0 0L16.5 12M21 7.5H7.5" />
            </svg>
            Swipe to explore
          </p>
        </div>
      )}

      {/* View All Products Button */}
      <div className="mt-5 text-center z-10">
        <Link
          href="/products"
          className="group inline-flex items-center gap-2 px-6 py-3 rounded-full bg-gradient-to-r from-[#0ea5e9] to-[#0284c7] text-white text-sm font-semibold transition-all duration-300 hover:shadow-lg hover:shadow-[#0ea5e9]/20 hover:scale-[1.02]"
        >
          View All Products
          <svg className="w-4 h-4 transition-transform group-hover:translate-x-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
          </svg>
        </Link>
      </div>
    </section>
  )
}
