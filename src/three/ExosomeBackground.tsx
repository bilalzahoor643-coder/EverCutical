"use client"

import { useEffect, useState, Component, type ReactNode } from "react"
import { Canvas } from "@react-three/fiber"
import * as THREE from "three"
import ExosomeParticles from "./ExosomeParticles"
import { PostProcessing } from "./PostProcessing"
import { useLoading } from "@/components/LoadingContext"

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
  const { setTexturesReady, setSceneReady } = useLoading()

  useEffect(() => {
    setMounted(true)
    if (!checkWebGLSupport()) {
      setWebglOk(false)
      setTexturesReady(true)
      setSceneReady(true)
      return
    }
    setIsMobile(window.innerWidth < 768)
    setTexturesReady(true)
  }, [setTexturesReady, setSceneReady])

  if (!mounted || !webglOk) return null

  return (
    <>
      {/* Blue fluid gradient background */}
      <div
        className="fixed inset-0 pointer-events-none"
        style={{
          zIndex: 0,
          background: `
            radial-gradient(ellipse 130% 110% at 50% 40%,
              #2c8fd6 0%,
              #2378c2 22%,
              #1c63ab 42%,
              #154f90 62%,
              #0f3d74 82%,
              #0a2d5a 100%
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
            radial-gradient(ellipse 70% 55% at 35% 32%, rgba(90,180,240,0.22) 0%, transparent 60%),
            radial-gradient(ellipse 55% 45% at 65% 50%, rgba(60,150,220,0.16) 0%, transparent 55%),
            radial-gradient(ellipse 45% 35% at 50% 22%, rgba(110,190,250,0.14) 0%, transparent 50%),
            radial-gradient(ellipse 40% 30% at 25% 68%, rgba(40,130,200,0.1) 0%, transparent 45%)
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
            dpr={isMobile ? [0.75, 1] : [1, 1.2]}
            gl={{
              alpha: true,
              antialias: false,
              powerPreference: isMobile ? "default" : "high-performance",
              stencil: false,
              depth: true,
            }}
            style={{ background: "transparent", width: "100%", height: "100%" }}
            frameloop="always"
            onCreated={({ gl }) => {
              gl.setClearColor(0x000000, 0)
              gl.toneMapping = THREE.ACESFilmicToneMapping
              gl.toneMappingExposure = 1.3
              setSceneReady(true)
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
