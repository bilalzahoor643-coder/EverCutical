"use client"

import { useRef, useEffect, useState, Component, type ReactNode } from "react"
import { Canvas, useFrame } from "@react-three/fiber"
import * as THREE from "three"
import ExosomeModel from "./ExosomeModel"

class WebGLErrorBoundary extends Component<{ children: ReactNode }, { hasError: boolean }> {
  state = { hasError: false }
  static getDerivedStateFromError() { return { hasError: true } }
  componentDidCatch(error: Error) { console.error("WebGL Error:", error) }
  render() {
    if (this.state.hasError) return null
    return this.props.children
  }
}

function SceneContent({
  mouseRef,
  scrollRef,
}: {
  mouseRef: React.MutableRefObject<{ x: number; y: number }>
  scrollRef: React.MutableRefObject<number>
}) {
  const exoRef = useRef<THREE.Group>(null)
  const posSmooth = useRef({ x: 0, y: 0, z: 0 })
  const mouseInertia = useRef({ x: 0, y: 0 })
  const scaleSmooth = useRef(1)
  const time = useRef(0)

  useFrame((_, delta) => {
    if (!exoRef.current) return
    time.current += delta
    const t = time.current

    const mouse = mouseRef.current
    const s = scrollRef.current

    const vw = window.innerWidth
    const isMobile = vw < 640
    const isTablet = vw < 1024
    const baseScale = isMobile ? 0.25 : isTablet ? 0.42 : 0.7

    // ── Organic idle drift (layered) ──
    const idleX = Math.sin(t * 0.18 + 0.5) * 0.4 + Math.sin(t * 0.12 + 2.1) * 0.25 + Math.cos(t * 0.25 + 1.3) * 0.15
    const idleY = Math.cos(t * 0.15 + 0.8) * 0.35 + Math.sin(t * 0.1 + 1.7) * 0.2 + Math.cos(t * 0.22 + 3.0) * 0.12

    // ── Mouse tracking - FAST & RESPONSIVE ──
    const mouseSpeed = isMobile ? 0.08 : 0.25
    mouseInertia.current.x += (mouse.x * 2.0 - mouseInertia.current.x) * mouseSpeed
    mouseInertia.current.y += (mouse.y * 1.5 - mouseInertia.current.y) * mouseSpeed

    // ── Scroll: continuous zoom + position shift ──
    const scrollZoom = 1 + s * 0.5
    const scrollClamped = Math.max(0.7, Math.min(1.4, scrollZoom))

    // Scroll position drift
    const scrollOffsetX = Math.sin(s * Math.PI * 3) * 0.25
    const scrollOffsetY = s * 0.35

    // Combine
    const mFactor = isMobile ? 0.4 : isTablet ? 0.6 : 1.0
    const targetX = (idleX + mouseInertia.current.x + scrollOffsetX) * mFactor
    const targetY = (idleY + mouseInertia.current.y + scrollOffsetY) * mFactor

    // Breathing
    const breathe = 1 + Math.sin(t * 0.7) * 0.02
    const targetScale = scrollClamped * breathe * baseScale

    // Smooth interpolation
    const lerp = 0.08
    posSmooth.current.x += (targetX - posSmooth.current.x) * lerp
    posSmooth.current.y += (targetY - posSmooth.current.y) * lerp
    scaleSmooth.current += (targetScale - scaleSmooth.current) * 0.05

    exoRef.current.position.x = posSmooth.current.x
    exoRef.current.position.y = posSmooth.current.y
    exoRef.current.scale.setScalar(Math.max(0.001, scaleSmooth.current))
  })

  return (
    <>
      <ambientLight intensity={0.6} />
      <directionalLight position={[4, 4, 5]} intensity={0.5} />
      <directionalLight position={[-3, 2, -2]} intensity={0.15} />
      <pointLight position={[0, 0, 4]} intensity={0.1} color="#f0f6ff" />
      <group ref={exoRef}>
        <ExosomeModel />
      </group>
    </>
  )
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

export default function ScrollScene() {
  const mouseRef = useRef({ x: 0, y: 0 })
  const scrollRef = useRef(0)
  const [webglOk, setWebglOk] = useState(true)

  useEffect(() => {
    if (!checkWebGLSupport()) {
      setWebglOk(false)
      return
    }

    const onMouseMove = (e: MouseEvent) => {
      mouseRef.current = {
        x: (e.clientX / window.innerWidth - 0.5) * 2,
        y: -(e.clientY / window.innerHeight - 0.5) * 2,
      }
    }
    window.addEventListener("mousemove", onMouseMove, { passive: true })

    const onScroll = () => {
      const scrollTop = window.scrollY
      const docHeight = document.documentElement.scrollHeight - window.innerHeight
      scrollRef.current = docHeight > 0 ? Math.min(1, scrollTop / docHeight) : 0
    }
    window.addEventListener("scroll", onScroll, { passive: true })
    onScroll()

    return () => {
      window.removeEventListener("mousemove", onMouseMove)
      window.removeEventListener("scroll", onScroll)
    }
  }, [])

  if (!webglOk) return null

  const isMobile = typeof window !== "undefined" && window.innerWidth < 768

  return (
    <div className="fixed inset-0 pointer-events-none" style={{ zIndex: -1 }}>
      <WebGLErrorBoundary>
        <Canvas
          camera={{ position: [0, 0, 5.5], fov: 45 }}
          dpr={isMobile ? [1, 1] : [1, 1.5]}
          gl={{
            alpha: true,
            antialias: !isMobile,
            powerPreference: "high-performance",
            stencil: false,
            depth: true,
          }}
          style={{ background: "transparent" }}
          onCreated={({ gl }) => {
            gl.setClearColor(0x000000, 0)
          }}
        >
          <SceneContent mouseRef={mouseRef} scrollRef={scrollRef} />
        </Canvas>
      </WebGLErrorBoundary>
    </div>
  )
}