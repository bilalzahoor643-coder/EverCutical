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
        return prev + Math.max(1, remaining * 0.15)
      })
    }, 60)
    return () => clearInterval(interval)
  }, [mounted])

  useEffect(() => {
    if (allReady && mounted && progress >= 80) {
      setProgress(100)
      setTimeout(() => setFading(true), 200)
      setTimeout(() => setVisible(false), 600)
    }
  }, [allReady, mounted, progress])

  // Force hide after 2s
  useEffect(() => {
    const forceHide = setTimeout(() => {
      setProgress(100)
      setFading(true)
      setTimeout(() => setVisible(false), 600)
    }, 2000)
    return () => clearTimeout(forceHide)
  }, [])

  if (!visible) return null

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center"
      style={{
        background: "#ffffff",
        transition: "opacity 0.5s cubic-bezier(0.4,0,0.2,1)",
        opacity: fading ? 0 : 1,
        pointerEvents: fading ? "none" : "auto",
      }}
    >
      <div className="flex flex-col items-center gap-6">
        {/* Logo with animated ring */}
        <div className="relative w-20 h-20 md:w-24 md:h-24">
          {/* Spinning outer ring */}
          <svg
            className="absolute inset-0 w-full h-full"
            viewBox="0 0 100 100"
            style={{ animation: "loadingSpin 2s cubic-bezier(0.4,0,0.2,1) infinite" }}
          >
            <circle
              cx="50" cy="50" r="46"
              fill="none"
              stroke="#e2e8f0"
              strokeWidth="2"
            />
            <circle
              cx="50" cy="50" r="46"
              fill="none"
              stroke="#0ea5e9"
              strokeWidth="2"
              strokeLinecap="round"
              strokeDasharray="290"
              strokeDashoffset={290 - (290 * progress) / 100}
              style={{ transition: "stroke-dashoffset 0.3s ease" }}
            />
          </svg>
          {/* Logo */}
          <img
            src="images/logo.png?v=2"
            alt="EverCeutical"
            className="absolute inset-0 w-full h-full object-contain p-3 md:p-4"
          />
        </div>

        {/* Brand name */}
        <div className="text-center">
          <h1 className="text-lg md:text-xl font-bold text-[#0f172a] tracking-tight">
            Ever<span className="text-[#0ea5e9]">Ceutical</span>
          </h1>
        </div>

        {/* Progress bar */}
        <div className="w-40 md:w-48">
          <div className="h-[2px] bg-[#e2e8f0] rounded-full overflow-hidden">
            <div
              className="h-full bg-gradient-to-r from-[#0ea5e9] to-[#38bdf8] rounded-full"
              style={{
                width: `${Math.min(progress, 100)}%`,
                transition: "width 0.3s cubic-bezier(0.4,0,0.2,1)",
              }}
            />
          </div>
          <p className="text-[10px] text-[#94a3b8] text-center mt-2 tracking-widest uppercase font-medium">
            {progress < 100 ? "Initializing" : "Ready"}
          </p>
        </div>
      </div>
    </div>
  )
}
