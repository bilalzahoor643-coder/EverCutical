"use client"

import { useState, useEffect } from "react"
import { useLoading } from "./LoadingContext"

export default function LoadingScreen() {
  const { allReady } = useLoading()
  const [visible, setVisible] = useState(true)
  const [fading, setFading] = useState(false)
  const [mounted, setMounted] = useState(false)
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    setMounted(true)
  }, [])

  // Smooth progress animation
  useEffect(() => {
    if (!mounted) return
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval)
          return 100
        }
        const remaining = 100 - prev
        return prev + Math.max(2, remaining * 0.2)
      })
    }, 40)
    return () => clearInterval(interval)
  }, [mounted])

  useEffect(() => {
    if (allReady && mounted && progress >= 70) {
      setProgress(100)
      setTimeout(() => setFading(true), 150)
      setTimeout(() => setVisible(false), 500)
    }
  }, [allReady, mounted, progress])

  // Force hide after 1.2s max
  useEffect(() => {
    const forceHide = setTimeout(() => {
      setProgress(100)
      setFading(true)
      setTimeout(() => setVisible(false), 500)
    }, 1200)
    return () => clearTimeout(forceHide)
  }, [])

  if (!visible) return null

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center"
      style={{
        background: "#ffffff",
        transition: "opacity 0.4s ease-out",
        opacity: fading ? 0 : 1,
        pointerEvents: fading ? "none" : "auto",
      }}
    >
      <div className="flex flex-col items-center gap-5">
        {/* Logo with animated ring */}
        <div className="relative w-16 h-16 md:w-20 md:h-20">
          <svg
            className="absolute inset-0 w-full h-full"
            viewBox="0 0 100 100"
          >
            {/* Background track */}
            <circle cx="50" cy="50" r="46" fill="none" stroke="#e2e8f0" strokeWidth="2" />
            {/* Progress arc */}
            <circle
              cx="50" cy="50" r="46"
              fill="none"
              stroke="#0ea5e9"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeDasharray="289"
              strokeDashoffset={289 - (289 * Math.min(progress, 100)) / 100}
              style={{ transition: "stroke-dashoffset 0.15s ease" }}
              transform="rotate(-90 50 50)"
            />
          </svg>
          <img
            src="images/logo.png?v=3"
            alt="EverCeutical"
            className="absolute inset-0 w-full h-full object-contain p-2.5 md:p-3"
          />
        </div>

        {/* Brand name */}
        <h1 className="text-base md:text-lg font-bold text-[#0f172a] tracking-tight">
          Ever<span className="text-[#0ea5e9]">Ceutical</span>
        </h1>

        {/* Progress bar */}
        <div className="w-32 md:w-40">
          <div className="h-[2px] bg-[#f1f5f9] rounded-full overflow-hidden">
            <div
              className="h-full rounded-full"
              style={{
                width: `${Math.min(progress, 100)}%`,
                background: "linear-gradient(90deg, #0ea5e9, #38bdf8)",
                transition: "width 0.15s ease",
              }}
            />
          </div>
        </div>
      </div>
    </div>
  )
}
