"use client"

import { useState, useEffect } from "react"
import { useLoading } from "./LoadingContext"

export default function LoadingScreen() {
  const { allReady } = useLoading()
  const [visible, setVisible] = useState(true)
  const [fading, setFading] = useState(false)
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  useEffect(() => {
    if (allReady && mounted) {
      setFading(true)
      const timer = setTimeout(() => setVisible(false), 350)
      return () => clearTimeout(timer)
    }
  }, [allReady, mounted])

  // Force hide after 3 seconds no matter what
  useEffect(() => {
    const forceHide = setTimeout(() => {
      setFading(true)
      setTimeout(() => setVisible(false), 350)
    }, 3000)
    return () => clearTimeout(forceHide)
  }, [])

  if (!visible) return null

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center"
      style={{
        backdropFilter: "blur(24px)",
        WebkitBackdropFilter: "blur(24px)",
        background: "rgba(8,20,40,0.55)",
        transition: "opacity 0.35s cubic-bezier(0.22,1,0.36,1)",
        opacity: fading ? 0 : 1,
        pointerEvents: fading ? "none" : "auto",
      }}
    >
      <div className="flex flex-col items-center gap-6">
        {/* Logo with subtle glow ring */}
        <div className="relative w-20 h-20 md:w-24 md:h-24">
          {/* Outer glow ring */}
          <div
            className="absolute inset-[-8px] rounded-full"
            style={{
              border: "1.5px solid rgba(56,189,248,0.15)",
              animation: "loadingRingSpin 4s linear infinite",
            }}
          >
            <div className="absolute w-2 h-2 rounded-full bg-[#38bdf8]/60 -top-[3px] left-1/2 -translate-x-1/2" />
          </div>

          {/* Logo */}
          <img
            src="images/logo.png?v=2"
            alt="Loading"
            className="w-full h-full object-contain"
            style={{
              animation: "loadingLogoSpin 3s cubic-bezier(0.4,0,0.2,1) infinite",
              filter: "drop-shadow(0 0 20px rgba(56,189,248,0.25))",
            }}
          />
        </div>

        {/* Loading text */}
        <div className="flex flex-col items-center gap-2">
          <span
            className="text-[11px] font-semibold tracking-[0.3em] uppercase text-[#38bdf8]/80"
            style={{ animation: "loadingPulse 2s ease-in-out infinite" }}
          >
            Loading EverCeutical
          </span>
          <div className="flex items-center gap-1">
            {[0, 1, 2].map((i) => (
              <div
                key={i}
                className="w-1 h-1 rounded-full bg-[#38bdf8]/50"
                style={{
                  animation: `loadingDot 1.4s ease-in-out ${i * 0.2}s infinite`,
                }}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
