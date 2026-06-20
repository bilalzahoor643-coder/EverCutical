"use client"

import dynamic from "next/dynamic"
import { Suspense } from "react"

const ExosomeBackground = dynamic(() => import("@/three/ExosomeBackground"), {
  ssr: false,
  loading: () => null,
})

export default function SceneWrapper() {
  return (
    <Suspense fallback={null}>
      <ExosomeBackground />
    </Suspense>
  )
}
