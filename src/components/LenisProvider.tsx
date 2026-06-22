"use client"

import { ReactNode, useEffect, useRef } from "react"
import { usePathname } from "next/navigation"
import Lenis from "lenis"

export default function LenisProvider({ children }: { children: ReactNode }) {
  const lenisRef = useRef<Lenis | null>(null)
  const rafIdRef = useRef<number>(0)
  const pathname = usePathname()

  useEffect(() => {
    const isMobile = typeof window !== "undefined" && window.innerWidth < 768

    const lenis = new Lenis({
      duration: isMobile ? 1.2 : 1.0,
      easing: (t: number) => Math.min(1, 1 - Math.pow(2, -10 * t)),
      orientation: "vertical",
      gestureOrientation: "vertical",
      smoothWheel: true,
      wheelMultiplier: isMobile ? 0.6 : 0.8,
      touchMultiplier: 1.5,
      infinite: false,
    })

    lenisRef.current = lenis

    let lastTime = 0
    function raf(time: number) {
      const delta = time - lastTime
      lastTime = time
      lenis.raf(time)
      rafIdRef.current = requestAnimationFrame(raf)
    }

    rafIdRef.current = requestAnimationFrame(raf)

    return () => {
      cancelAnimationFrame(rafIdRef.current)
      lenis.destroy()
      lenisRef.current = null
    }
  }, [])

  useEffect(() => {
    if (lenisRef.current) {
      lenisRef.current.scrollTo(0, { immediate: true })
    } else {
      window.scrollTo(0, 0)
    }
  }, [pathname])

  return <>{children}</>
}
