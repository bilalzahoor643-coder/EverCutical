"use client"

import { useEffect, useRef, useState } from "react"

export function useInView(threshold = 0.15) {
  const ref = useRef<HTMLDivElement>(null)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    const isMobile = window.innerWidth < 768
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true)
        }
      },
      { threshold: isMobile ? 0.01 : threshold, rootMargin: isMobile ? "200px 0px 0px 0px" : "0px 0px -30px 0px" }
    )
    obs.observe(el)

    // Force visible after delay on mobile
    const timer = isMobile ? setTimeout(() => setVisible(true), 1500) : setTimeout(() => setVisible(true), 4000)

    return () => {
      obs.disconnect()
      clearTimeout(timer)
    }
  }, [threshold])

  return { ref, visible }
}
