"use client"

import * as THREE from "three"

let nucleusBumpTexture: THREE.CanvasTexture | null = null
let nucleusNormalMap: THREE.CanvasTexture | null = null
let membraneBumpTexture: THREE.CanvasTexture | null = null
let glowTexture: THREE.CanvasTexture | null = null

/**
 * Ultra-dense granular bump texture — electron microscope quality.
 * 15000+ surface features: micro-bumps, pores, crevices, grain, wrinkles.
 */
export function getNucleusBumpTexture(): THREE.CanvasTexture | null {
  if (typeof document === "undefined") return null
  if (nucleusBumpTexture) return nucleusBumpTexture

  const size = 1024
  const canvas = document.createElement("canvas")
  canvas.width = size
  canvas.height = size
  const ctx = canvas.getContext("2d")
  if (!ctx) return null

  ctx.fillStyle = "#808080"
  ctx.fillRect(0, 0, size, size)

  // Layer 1: Ultra-fine micro-grain (pixel-level noise)
  for (let i = 0; i < 8000; i++) {
    const x = Math.random() * size
    const y = Math.random() * size
    const r = 0.4 + Math.random() * 1.2
    const v = Math.random() > 0.5 ? 150 + Math.random() * 105 : 20 + Math.random() * 50
    const grad = ctx.createRadialGradient(x, y, 0, x, y, r)
    grad.addColorStop(0, `rgba(${v},${v},${v},0.9)`)
    grad.addColorStop(1, "rgba(128,128,128,0)")
    ctx.fillStyle = grad
    ctx.beginPath()
    ctx.arc(x, y, r, 0, Math.PI * 2)
    ctx.fill()
  }

  // Layer 2: Dense tiny bumps (pores / granules)
  for (let i = 0; i < 6000; i++) {
    const x = Math.random() * size
    const y = Math.random() * size
    const r = 0.8 + Math.random() * 2.0
    const bright = 160 + Math.random() * 95
    const grad = ctx.createRadialGradient(x, y, 0, x, y, r)
    grad.addColorStop(0, `rgba(${bright},${bright},${bright},0.92)`)
    grad.addColorStop(0.4, `rgba(${bright},${bright},${bright},0.45)`)
    grad.addColorStop(1, "rgba(128,128,128,0)")
    ctx.fillStyle = grad
    ctx.beginPath()
    ctx.arc(x, y, r, 0, Math.PI * 2)
    ctx.fill()
  }

  // Layer 3: Tiny pits / pores (dark holes)
  for (let i = 0; i < 5000; i++) {
    const x = Math.random() * size
    const y = Math.random() * size
    const r = 0.5 + Math.random() * 1.8
    const dark = 20 + Math.random() * 50
    const grad = ctx.createRadialGradient(x, y, 0, x, y, r)
    grad.addColorStop(0, `rgba(${dark},${dark},${dark},0.88)`)
    grad.addColorStop(0.4, `rgba(${dark},${dark},${dark},0.35)`)
    grad.addColorStop(1, "rgba(128,128,128,0)")
    ctx.fillStyle = grad
    ctx.beginPath()
    ctx.arc(x, y, r, 0, Math.PI * 2)
    ctx.fill()
  }

  // Layer 4: Elongated wrinkles / membrane folds
  for (let i = 0; i < 2000; i++) {
    const x = Math.random() * size
    const y = Math.random() * size
    const angle = Math.random() * Math.PI
    const len = 2 + Math.random() * 7
    const r = 0.4 + Math.random() * 1.2
    const v = Math.random() > 0.4 ? 155 + Math.random() * 100 : 25 + Math.random() * 55
    ctx.save()
    ctx.translate(x, y)
    ctx.rotate(angle)
    const grad = ctx.createRadialGradient(0, 0, 0, 0, 0, r)
    grad.addColorStop(0, `rgba(${v},${v},${v},0.85)`)
    grad.addColorStop(1, "rgba(128,128,128,0)")
    ctx.fillStyle = grad
    ctx.beginPath()
    ctx.ellipse(0, 0, len, r, 0, 0, Math.PI * 2)
    ctx.fill()
    ctx.restore()
  }

  // Layer 5: Medium cellular bumps
  for (let i = 0; i < 3000; i++) {
    const x = Math.random() * size
    const y = Math.random() * size
    const r = 1.5 + Math.random() * 3.5
    const bright = 150 + Math.random() * 105
    const grad = ctx.createRadialGradient(x, y, 0, x, y, r)
    grad.addColorStop(0, `rgba(${bright},${bright},${bright},0.78)`)
    grad.addColorStop(0.5, `rgba(${bright},${bright},${bright},0.3)`)
    grad.addColorStop(1, "rgba(128,128,128,0)")
    ctx.fillStyle = grad
    ctx.beginPath()
    ctx.arc(x, y, r, 0, Math.PI * 2)
    ctx.fill()
  }

  // Layer 6: Deep crevices / organic lines
  for (let i = 0; i < 2500; i++) {
    const x = Math.random() * size
    const y = Math.random() * size
    const r = 1.2 + Math.random() * 3.0
    const dark = 25 + Math.random() * 45
    const grad = ctx.createRadialGradient(x, y, 0, x, y, r)
    grad.addColorStop(0, `rgba(${dark},${dark},${dark},0.72)`)
    grad.addColorStop(0.5, `rgba(${dark},${dark},${dark},0.25)`)
    grad.addColorStop(1, "rgba(128,128,128,0)")
    ctx.fillStyle = grad
    ctx.beginPath()
    ctx.arc(x, y, r, 0, Math.PI * 2)
    ctx.fill()
  }

  // Layer 7: Larger organic clusters
  for (let i = 0; i < 800; i++) {
    const x = Math.random() * size
    const y = Math.random() * size
    const r = 4 + Math.random() * 10
    const bright = 145 + Math.random() * 110
    const grad = ctx.createRadialGradient(x, y, 0, x, y, r)
    grad.addColorStop(0, `rgba(${bright},${bright},${bright},0.5)`)
    grad.addColorStop(0.6, `rgba(${bright},${bright},${bright},0.15)`)
    grad.addColorStop(1, "rgba(128,128,128,0)")
    ctx.fillStyle = grad
    ctx.beginPath()
    ctx.arc(x, y, r, 0, Math.PI * 2)
    ctx.fill()
  }

  const tex = new THREE.CanvasTexture(canvas)
  tex.wrapS = THREE.RepeatWrapping
  tex.wrapT = THREE.RepeatWrapping
  tex.needsUpdate = true
  nucleusBumpTexture = tex
  return tex
}

/**
 * Normal map derived from bump for lighting detail.
 */
export function getNucleusNormalMap(): THREE.CanvasTexture | null {
  if (typeof document === "undefined") return null
  if (nucleusNormalMap) return nucleusNormalMap

  const bump = getNucleusBumpTexture()
  if (!bump) return null

  const size = 1024
  const canvas = document.createElement("canvas")
  canvas.width = size
  canvas.height = size
  const ctx = canvas.getContext("2d")
  if (!ctx) return null

  const bumpCanvas = bump.image as HTMLCanvasElement
  const bumpCtx = bumpCanvas.getContext("2d")
  if (!bumpCtx) return null
  const bumpData = bumpCtx.getImageData(0, 0, size, size)

  const normalData = ctx.createImageData(size, size)
  const strength = 2.0

  for (let y = 0; y < size; y++) {
    for (let x = 0; x < size; x++) {
      const idx = (y * size + x) * 4

      const getHeight = (px: number, py: number) => {
        const cx = ((px % size) + size) % size
        const cy = ((py % size) + size) % size
        return bumpData.data[(cy * size + cx) * 4] / 255.0
      }

      const left = getHeight(x - 1, y)
      const right = getHeight(x + 1, y)
      const up = getHeight(x, y - 1)
      const down = getHeight(x, y + 1)

      const dx = (left - right) * strength
      const dy = (up - down) * strength

      const nx = dx
      const ny = dy
      const nz = 1.0
      const len = Math.sqrt(nx * nx + ny * ny + nz * nz)

      normalData.data[idx] = Math.floor(((nx / len) * 0.5 + 0.5) * 255)
      normalData.data[idx + 1] = Math.floor(((ny / len) * 0.5 + 0.5) * 255)
      normalData.data[idx + 2] = Math.floor(((nz / len) * 0.5 + 0.5) * 255)
      normalData.data[idx + 3] = 255
    }
  }

  ctx.putImageData(normalData, 0, 0)

  const tex = new THREE.CanvasTexture(canvas)
  tex.wrapS = THREE.RepeatWrapping
  tex.wrapT = THREE.RepeatWrapping
  tex.needsUpdate = true
  nucleusNormalMap = tex
  return tex
}

/**
 * Soft glow sprite texture.
 */
export function getGlowTexture(): THREE.CanvasTexture | null {
  if (typeof document === "undefined") return null
  if (glowTexture) return glowTexture

  const size = 256
  const canvas = document.createElement("canvas")
  canvas.width = size
  canvas.height = size
  const ctx = canvas.getContext("2d")
  if (!ctx) return null

  const grad = ctx.createRadialGradient(size / 2, size / 2, 0, size / 2, size / 2, size / 2)
  grad.addColorStop(0, "rgba(100,220,255,0.8)")
  grad.addColorStop(0.3, "rgba(60,190,250,0.4)")
  grad.addColorStop(0.6, "rgba(40,160,230,0.12)")
  grad.addColorStop(1, "rgba(20,100,180,0)")
  ctx.fillStyle = grad
  ctx.fillRect(0, 0, size, size)

  const tex = new THREE.CanvasTexture(canvas)
  tex.needsUpdate = true
  glowTexture = tex
  return tex
}

/**
 * Membrane bump texture — wider, softer organic wrinkles.
 * For the outer translucent membrane — lipid vesicle appearance.
 */
export function getMembraneBumpTexture(): THREE.CanvasTexture | null {
  if (typeof document === "undefined") return null
  if (membraneBumpTexture) return membraneBumpTexture

  const size = 1024
  const canvas = document.createElement("canvas")
  canvas.width = size
  canvas.height = size
  const ctx = canvas.getContext("2d")
  if (!ctx) return null

  ctx.fillStyle = "#808080"
  ctx.fillRect(0, 0, size, size)

  // Wide organic wrinkles — lipid bilayer folds
  for (let i = 0; i < 3000; i++) {
    const x = Math.random() * size
    const y = Math.random() * size
    const r = 3 + Math.random() * 10
    const bright = 140 + Math.random() * 115
    const grad = ctx.createRadialGradient(x, y, 0, x, y, r)
    grad.addColorStop(0, `rgba(${bright},${bright},${bright},0.6)`)
    grad.addColorStop(0.5, `rgba(${bright},${bright},${bright},0.2)`)
    grad.addColorStop(1, "rgba(128,128,128,0)")
    ctx.fillStyle = grad
    ctx.beginPath()
    ctx.arc(x, y, r, 0, Math.PI * 2)
    ctx.fill()
  }

  // Membrane crevices
  for (let i = 0; i < 2000; i++) {
    const x = Math.random() * size
    const y = Math.random() * size
    const r = 2 + Math.random() * 8
    const dark = 30 + Math.random() * 50
    const grad = ctx.createRadialGradient(x, y, 0, x, y, r)
    grad.addColorStop(0, `rgba(${dark},${dark},${dark},0.55)`)
    grad.addColorStop(0.5, `rgba(${dark},${dark},${dark},0.18)`)
    grad.addColorStop(1, "rgba(128,128,128,0)")
    ctx.fillStyle = grad
    ctx.beginPath()
    ctx.arc(x, y, r, 0, Math.PI * 2)
    ctx.fill()
  }

  // Fine membrane grain
  for (let i = 0; i < 4000; i++) {
    const x = Math.random() * size
    const y = Math.random() * size
    const r = 0.5 + Math.random() * 2.0
    const v = Math.random() > 0.5 ? 150 + Math.random() * 105 : 30 + Math.random() * 50
    const grad = ctx.createRadialGradient(x, y, 0, x, y, r)
    grad.addColorStop(0, `rgba(${v},${v},${v},0.7)`)
    grad.addColorStop(1, "rgba(128,128,128,0)")
    ctx.fillStyle = grad
    ctx.beginPath()
    ctx.arc(x, y, r, 0, Math.PI * 2)
    ctx.fill()
  }

  const tex = new THREE.CanvasTexture(canvas)
  tex.wrapS = THREE.RepeatWrapping
  tex.wrapT = THREE.RepeatWrapping
  tex.needsUpdate = true
  membraneBumpTexture = tex
  return tex
}
