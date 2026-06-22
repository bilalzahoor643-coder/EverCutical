"use client"

import { useEffect, useState, Component, type ReactNode } from "react"
import { Canvas } from "@react-three/fiber"
import * as THREE from "three"
import ExosomeParticles from "./ExosomeParticles"
import { PostProcessing } from "./PostProcessing"

class WebGLErrorBoundary extends Component<{ children: ReactNode }, { hasError: boolean }> {
  state = { hasError: false }
  static getDerivedStateFromError() { return { hasError: true } }
  componentDidCatch() { return }
  render() {
    if (this.state.hasError) return null
    return this.props.children
  }
}

function checkWebGLSupport(): boolean {
  try {
    const canvas = document.createElement("canvas")
    const gl = canvas.getContext("webgl2") || canvas.getContext("webgl") || canvas.getContext("experimental-webgl")
    return !!gl
  } catch {
    return false
  }
}

export default function ExosomeBackground() {
  const [webglOk, setWebglOk] = useState(true)
  const [isMobile, setIsMobile] = useState(false)
  const [mounted, setMounted] = useState(false)
  const [canvasReady, setCanvasReady] = useState(false)

  useEffect(() => {
    setMounted(true)
    if (!checkWebGLSupport()) {
      setWebglOk(false)
      return
    }
    setIsMobile(window.innerWidth < 768)

    // Delay canvas init to not block first paint
    const timer = setTimeout(() => {
      setCanvasReady(true)
    }, 50)
    return () => clearTimeout(timer)
  }, [])

  if (!mounted || !webglOk || !canvasReady) return null

  return (
    <>
      {/* White fluid gradient background - instant, no 3D needed */}
      <div
        className="fixed inset-0 pointer-events-none"
        style={{
          zIndex: 0,
          background: `
            radial-gradient(ellipse 130% 110% at 50% 40%,
              #ffffff 0%,
              #f8fafc 22%,
              #f1f5f9 42%,
              #e2e8f0 62%,
              #f1f5f9 82%,
              #ffffff 100%
            )
          `,
        }}
      />

      {/* Light patches */}
      <div
        className="fixed inset-0 pointer-events-none"
        style={{
          zIndex: 0,
          background: `
            radial-gradient(ellipse 70% 55% at 35% 32%, rgba(200,230,255,0.15) 0%, transparent 60%),
            radial-gradient(ellipse 55% 45% at 65% 50%, rgba(180,220,250,0.1) 0%, transparent 55%),
            radial-gradient(ellipse 45% 35% at 50% 22%, rgba(210,240,255,0.08) 0%, transparent 50%),
            radial-gradient(ellipse 40% 30% at 25% 68%, rgba(170,210,245,0.06) 0%, transparent 45%)
          `,
        }}
      />

      {/* 3D Canvas — optimized for performance */}
      <div
        className="fixed pointer-events-none"
        style={{ zIndex: 0, inset: 0 }}
      >
        <WebGLErrorBoundary>
          <Canvas
            camera={{ position: [0, 0, 14], fov: 55, near: 0.1, far: 150 }}
            dpr={isMobile ? [0.5, 0.75] : [1, 1.1]}
            gl={{
              alpha: true,
              antialias: false,
              powerPreference: isMobile ? "low-power" : "high-performance",
              stencil: false,
              depth: true,
            }}
            style={{ background: "transparent", width: "100%", height: "100%" }}
            frameloop="always"
            onCreated={({ gl }) => {
              gl.setClearColor(0x000000, 0)
              gl.toneMapping = THREE.ACESFilmicToneMapping
              gl.toneMappingExposure = 1.3
            }}
          >
            <ExosomeParticles />
            <PostProcessing isMobile={isMobile} />
          </Canvas>
        </WebGLErrorBoundary>
      </div>
    </>
  )
}
