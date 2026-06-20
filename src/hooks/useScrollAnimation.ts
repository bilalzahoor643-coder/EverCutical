"use client"

import { useEffect, useState } from "react"

export function useScrollAnimation(threshold = 0.1) {
  const [animated, setAnimated] = useState<Set<string>>(new Set())

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setAnimated((prev) => new Set(prev).add(entry.target.id))
            observer.unobserve(entry.target)
          }
        })
      },
      { threshold }
    )

    const elements = document.querySelectorAll("[data-animate]")
    elements.forEach((el) => observer.observe(el))

    return () => observer.disconnect()
  }, [threshold])

  return animated
}
