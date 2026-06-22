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
      const timer = setTimeout(() => setVisible(false), 300)
      return () => clearTimeout(timer)
    }
  }, [allReady, mounted])

  // Force hide after 1.5 seconds
  useEffect(() => {
    const forceHide = setTimeout(() => {
      setFading(true)
      setTimeout(() => setVisible(false), 300)
    }, 1500)
    return () => clearTimeout(forceHide)
  }, [])

  if (!visible) return null

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center"
      style={{
        background: "rgba(255,255,255,0.95)",
        transition: "opacity 0.3s ease",
        opacity: fading ? 0 : 1,
        pointerEvents: fading ? "none" : "auto",
        contain: "strict",
      }}
    >
      <div className="flex flex-col items-center gap-4">
        <div className="relative w-16 h-16 md:w-20 md:h-20">
          <div
            className="absolute inset-[-6px] rounded-full"
            style={{
              border: "1.5px solid rgba(56,189,248,0.2)",
              animation: "loadingRingSpin 3s linear infinite",
            }}
          />
          <img
            src="images/logo.png?v=2"
            alt="Loading"
            className="w-full h-full object-contain"
            style={{
              filter: "drop-shadow(0 0 15px rgba(56,189,248,0.2))",
            }}
          />
        </div>
        <span
          className="text-[10px] font-semibold tracking-[0.3em] uppercase text-[#38bdf8]/60"
          style={{ animation: "loadingPulse 1.5s ease-in-out infinite" }}
        >
          Loading
        </span>
      </div>
    </div>
  )
}
