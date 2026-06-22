"use client"

import { useState, useRef, useCallback, useEffect } from "react"

interface BeforeAfterSliderProps {
  beforeImage: string
  afterImage: string
  beforeLabel?: string
  afterLabel?: string
}

function useImageSplitter(imageUrl: string) {
  const [left, setLeft] = useState<string>("")
  const [right, setRight] = useState<string>("")
  const [isSplit, setIsSplit] = useState(false)

  useEffect(() => {
    const img = new Image()
    img.crossOrigin = "anonymous"
    img.onload = () => {
      const w = img.naturalWidth
      const h = img.naturalHeight
      const half = Math.floor(w / 2)

      const canvas = document.createElement("canvas")
      canvas.width = half
      canvas.height = h
      const ctx = canvas.getContext("2d")!
      ctx.drawImage(img, 0, 0, half, h, 0, 0, half, h)
      setLeft(canvas.toDataURL("image/jpeg", 0.92))

      ctx.clearRect(0, 0, half, h)
      ctx.drawImage(img, half, 0, w - half, h, 0, 0, half, h)
      setRight(canvas.toDataURL("image/jpeg", 0.92))

      setIsSplit(true)
    }
    img.onerror = () => {
      setLeft(imageUrl)
      setRight(imageUrl)
      setIsSplit(true)
    }
    img.src = imageUrl
  }, [imageUrl])

  return { left, right, isSplit }
}

export default function BeforeAfterSlider({
  beforeImage,
  afterImage,
  beforeLabel = "Before",
  afterLabel = "After",
}: BeforeAfterSliderProps) {
  const isComposite = beforeImage === afterImage
  const { left: splitBefore, right: splitAfter, isSplit } = useImageSplitter(isComposite ? beforeImage : "")

  const [position, setPosition] = useState(0)
  const [isDragging, setIsDragging] = useState(false)
  const containerRef = useRef<HTMLDivElement>(null)

  const actualBefore = isComposite ? splitBefore : beforeImage
  const actualAfter = isComposite ? splitAfter : afterImage

  const calcPos = useCallback((clientX: number) => {
    if (!containerRef.current) return 0
    const rect = containerRef.current.getBoundingClientRect()
    return Math.max(0, Math.min(100, ((clientX - rect.left) / rect.width) * 100))
  }, [])

  const handleMouseDown = useCallback((e: React.MouseEvent) => {
    e.preventDefault()
    setIsDragging(true)
    setPosition(calcPos(e.clientX))
  }, [calcPos])

  const handleTouchStart = useCallback((e: React.TouchEvent) => {
    setIsDragging(true)
    setPosition(calcPos(e.touches[0].clientX))
  }, [calcPos])

  useEffect(() => {
    if (!isDragging) return
    const onMove = (e: MouseEvent) => setPosition(calcPos(e.clientX))
    const onTouchMove = (e: TouchEvent) => setPosition(calcPos(e.touches[0].clientX))
    const onEnd = () => setIsDragging(false)
    window.addEventListener("mousemove", onMove)
    window.addEventListener("mouseup", onEnd)
    window.addEventListener("touchmove", onTouchMove, { passive: true })
    window.addEventListener("touchend", onEnd)
    return () => {
      window.removeEventListener("mousemove", onMove)
      window.removeEventListener("mouseup", onEnd)
      window.removeEventListener("touchmove", onTouchMove)
      window.removeEventListener("touchend", onEnd)
    }
  }, [isDragging, calcPos])

  if (!isSplit && isComposite) {
    return (
      <div className="relative w-full max-w-2xl mx-auto rounded-2xl aspect-[4/3] bg-[#f1f5f9] animate-pulse" />
    )
  }

  return (
    <div
      ref={containerRef}
      className="relative w-full max-w-2xl mx-auto rounded-2xl overflow-hidden select-none"
      style={{ cursor: "ew-resize", touchAction: "none" }}
      onMouseDown={handleMouseDown}
      onTouchStart={handleTouchStart}
    >
      <div className="relative w-full aspect-[4/3]">
        {/* BEFORE image - always fully visible (bottom layer) */}
        <img
          src={actualBefore}
          alt={beforeLabel}
          className="absolute inset-0 w-full h-full object-cover"
          draggable={false}
        />

        {/* AFTER image - on top, revealed by clip-path */}
        <div
          className="absolute inset-0"
          style={{ clipPath: `inset(0 ${100 - position}% 0 0)` }}
        >
          <img
            src={actualAfter}
            alt={afterLabel}
            className="absolute inset-0 w-full h-full object-cover"
            draggable={false}
          />
        </div>

        {/* Slider Line */}
        <div
          className="absolute top-0 bottom-0 z-20 pointer-events-none"
          style={{ left: `${position}%`, transform: "translateX(-50%)" }}
        >
          <div
            className="absolute top-0 bottom-0 left-1/2 -translate-x-1/2 w-[3px] bg-white"
            style={{ boxShadow: "none" }}
          />
          {/* Handle */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-10 h-10 sm:w-11 sm:h-11 rounded-full bg-white flex items-center justify-center pointer-events-auto cursor-ew-resize">
            <svg className="w-5 h-5 text-[#334155]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 19l7-7-7-7" />
            </svg>
          </div>
        </div>

        {/* Before Label */}
        <div className="absolute top-4 left-4 z-10">
          <span className="px-4 py-2 rounded-lg bg-black/70 backdrop-blur-sm text-white text-xs font-bold tracking-wider uppercase">
            {beforeLabel}
          </span>
        </div>

        {/* After Label */}
        <div
          className="absolute top-4 right-4 z-10 transition-opacity duration-300"
          style={{ opacity: position > 15 ? 1 : 0 }}
        >
          <span className="px-4 py-2 rounded-lg bg-[#0f172a]/90 backdrop-blur-sm text-white text-xs font-bold tracking-wider uppercase">
            {afterLabel}
          </span>
        </div>
      </div>
    </div>
  )
}
