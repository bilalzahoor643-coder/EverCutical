"use client"

import { useState, useEffect, useRef, useCallback } from "react"

const nodes = [
  { angle: -90, color: "#0ea5e9" },
  { angle: -18, color: "#38bdf8" },
  { angle: 54, color: "#0284c7" },
  { angle: 126, color: "#0369a1" },
  { angle: 198, color: "#0ea5e9" },
]

export default function ExosomeOverlay() {
  const [pos, setPos] = useState<{ x: number; y: number } | null>(null)
  const ref = useRef<HTMLDivElement>(null)
  const rafRef = useRef<number>(0)
  const lastUpdate = useRef(0)

  const updatePos = useCallback(() => {
    const ringEl = document.getElementById("ring-center")
    if (!ringEl) { setPos(null); return }
    const rect = ringEl.getBoundingClientRect()
    const inView = rect.top < window.innerHeight && rect.bottom > 0
    if (!inView) { setPos(null); return }
    setPos({ x: rect.left + rect.width / 2, y: rect.top + rect.height / 2 })
  }, [])

  useEffect(() => {
    const loop = (time: number) => {
      if (time - lastUpdate.current > 100) {
        updatePos()
        lastUpdate.current = time
      }
      rafRef.current = requestAnimationFrame(loop)
    }
    rafRef.current = requestAnimationFrame(loop)
    return () => cancelAnimationFrame(rafRef.current)
  }, [updatePos])

  if (!pos) return null

  const r = 38
  const cx = 50
  const cy = 50

  return (
    <div
      ref={ref}
      className="fixed pointer-events-none"
      style={{
        zIndex: -1,
        left: pos.x,
        top: pos.y,
        transform: "translate(-50%, -50%)",
      }}
    >
      <svg width={100} height={100} viewBox="0 0 100 100">
        {nodes.map((node, i) => {
          const rad = (node.angle * Math.PI) / 180
          const nx = cx + Math.cos(rad) * r
          const ny = cy + Math.sin(rad) * r
          return (
            <line
              key={`l-${i}`}
              x1={cx} y1={cy} x2={nx} y2={ny}
              stroke={node.color}
              strokeWidth={0.8}
              opacity={0.3}
            />
          )
        })}
        {nodes.map((node, i) => {
          const rad = (node.angle * Math.PI) / 180
          const nx = cx + Math.cos(rad) * r
          const ny = cy + Math.sin(rad) * r
          return (
            <circle
              key={`d-${i}`}
              cx={nx} cy={ny} r={2.5}
              fill={node.color}
              opacity={0.5}
            />
          )
        })}
        <text x={cx} y={cy - 1} textAnchor="middle" dominantBaseline="middle"
          fill="#0f172a" fontSize={6} fontWeight={700} letterSpacing={1}
          fontFamily="system-ui, sans-serif">EXOSOME</text>
        <text x={cx} y={cy + 7} textAnchor="middle" dominantBaseline="middle"
          fill="#38bdf8" fontSize={4} fontFamily="system-ui, sans-serif">Classes</text>
      </svg>
    </div>
  )
}
