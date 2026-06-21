"use client"

import { useRef, useMemo, useEffect } from "react"
import { useFrame, useThree } from "@react-three/fiber"
import * as THREE from "three"
import { SimplexNoise } from "./SimplexNoise"
import {
  getNucleusBumpTexture,
  getNucleusNormalMap,
  getMembraneBumpTexture,
  getGlowTexture,
} from "./exosomeTextures"

function createCoreGeo(segments: number, noise: SimplexNoise): THREE.BufferGeometry {
  const geo = new THREE.SphereGeometry(1.0, segments, segments)
  const pos = geo.attributes.position
  const normal = geo.attributes.normal
  for (let i = 0; i < pos.count; i++) {
    const nx = normal.getX(i)
    const ny = normal.getY(i)
    const nz = normal.getZ(i)
    const l1 = noise.fbm(nx * 1.5, ny * 1.5 + 100, nz * 1.5 + 200, 4, 2.0, 0.5)
    const l2 = noise.fbm(nx * 4.0 + 50, ny * 4.0 + 150, nz * 4.0 + 250, 3, 2.2, 0.45)
    const l3 = noise.fbm(nx * 8.0 + 100, ny * 8.0 + 200, nz * 8.0 + 300, 2, 2.0, 0.5)
    const l4 = noise.fbm(nx * 16.0 + 150, ny * 16.0 + 250, nz * 16.0 + 350, 2, 2.0, 0.5)
    const disp = 1 + l1 * 0.04 + l2 * 0.025 + l3 * 0.015 + l4 * 0.008
    pos.setXYZ(i, nx * disp, ny * disp, nz * disp)
  }
  geo.computeVertexNormals()
  return geo
}

function createMembraneGeo(segments: number, noise: SimplexNoise): THREE.BufferGeometry {
  const geo = new THREE.SphereGeometry(1.0, segments, segments)
  const pos = geo.attributes.position
  const normal = geo.attributes.normal
  for (let i = 0; i < pos.count; i++) {
    const nx = normal.getX(i)
    const ny = normal.getY(i)
    const nz = normal.getZ(i)
    const l1 = noise.fbm(nx * 2.0 + 300, ny * 2.0 + 400, nz * 2.0 + 500, 3, 2.0, 0.5)
    const l2 = noise.fbm(nx * 5.0 + 350, ny * 5.0 + 450, nz * 5.0 + 550, 2, 2.0, 0.5)
    const l3 = noise.fbm(nx * 10.0 + 400, ny * 10.0 + 500, nz * 10.0 + 600, 2, 2.0, 0.5)
    const disp = 1 + l1 * 0.06 + l2 * 0.035 + l3 * 0.015
    pos.setXYZ(i, nx * disp, ny * disp, nz * disp)
  }
  geo.computeVertexNormals()
  return geo
}

interface ExoInstance {
  baseX: number
  baseY: number
  baseZ: number
  scale: number
  rotSpeedX: number
  rotSpeedY: number
  rotSpeedZ: number
  floatSpeedX: number
  floatSpeedY: number
  floatSpeedZ: number
  floatAmpX: number
  floatAmpY: number
  floatAmpZ: number
  phaseX: number
  phaseY: number
  phaseZ: number
  memScale: number
}

const CAM_Z = 14
const TAN_HALF_FOV = Math.tan((55 * Math.PI) / 360)
const ASPECT = 16 / 9

function halfExtents(z: number, overshoot: number) {
  const d = CAM_Z - z
  const hw = d * TAN_HALF_FOV * overshoot
  return { hw, hh: hw / ASPECT }
}

function scatter(
  zMin: number, zMax: number,
  cols: number, rows: number,
  overshoot: number,
  jitterX: number, jitterY: number,
  rand: () => number,
): [number, number, number][] {
  const zMid = (zMin + zMax) / 2
  const { hw, hh } = halfExtents(zMid, overshoot)
  const pts: [number, number, number][] = []
  for (let r = 0; r < rows; r++) {
    for (let c = 0; c < cols; c++) {
      const gx = -hw + (c + 0.5) * (2 * hw) / cols
      const gy = -hh + (r + 0.5) * (2 * hh) / rows
      pts.push([
        gx + (rand() - 0.5) * jitterX,
        gy + (rand() - 0.5) * jitterY,
        zMin + rand() * (zMax - zMin),
      ])
    }
  }
  return pts
}

function generateInstances(isMobile: boolean): ExoInstance[] {
  const instances: ExoInstance[] = []
  let seed = 42
  const rand = () => {
    seed = (seed * 16807) % 2147483647
    return (seed - 1) / 2147483646
  }

  // LAYER 1: NEAR — large, covers ALL edges + corners
  {
    const c = isMobile ? 3 : 6
    const r = isMobile ? 2 : 3
    const pts = scatter(-0.5, -5, c, r, 1.8, 1.5, 1.0, rand)
    for (const [x, y, z] of pts) {
      instances.push({
        baseX: x, baseY: y, baseZ: z,
        scale: isMobile ? 0.75 + rand() * 0.15 : 1.0 + rand() * 0.35,
        rotSpeedX: (0.05 + rand() * 0.06) * 0.7,
        rotSpeedY: (0.04 + rand() * 0.05) * 0.7,
        rotSpeedZ: (0.025 + rand() * 0.04) * 0.7,
        floatSpeedX: 0.4 + rand() * 0.25,
        floatSpeedY: 0.35 + rand() * 0.2,
        floatSpeedZ: 0.2 + rand() * 0.14,
        floatAmpX: 0.4 + rand() * 0.3,
        floatAmpY: 0.35 + rand() * 0.25,
        floatAmpZ: 0.12 + rand() * 0.09,
        phaseX: rand() * Math.PI * 2,
        phaseY: rand() * Math.PI * 2,
        phaseZ: rand() * Math.PI * 2,
        memScale: 1.35 + rand() * 0.1,
      })
    }
  }

  // LAYER 2: HERO — dominant foreground
  {
    const c = isMobile ? 4 : 6
    const r = isMobile ? 3 : 4
    const pts = scatter(-3, -9, c, r, 1.7, 1.2, 0.8, rand)
    for (const [x, y, z] of pts) {
      instances.push({
        baseX: x, baseY: y, baseZ: z,
        scale: isMobile ? 0.5 + rand() * 0.12 : 0.75 + rand() * 0.25,
        rotSpeedX: 0.06 + rand() * 0.08,
        rotSpeedY: 0.05 + rand() * 0.06,
        rotSpeedZ: 0.035 + rand() * 0.05,
        floatSpeedX: 0.5 + rand() * 0.3,
        floatSpeedY: 0.4 + rand() * 0.25,
        floatSpeedZ: 0.25 + rand() * 0.18,
        floatAmpX: 0.4 + rand() * 0.3,
        floatAmpY: 0.25 + rand() * 0.15,
        floatAmpZ: 0.12 + rand() * 0.09,
        phaseX: rand() * Math.PI * 2,
        phaseY: rand() * Math.PI * 2,
        phaseZ: rand() * Math.PI * 2,
        memScale: 1.35 + rand() * 0.1,
      })
    }
  }

  // LAYER 3: MID — medium, dense fill
  {
    const c = isMobile ? 4 : 8
    const r = isMobile ? 3 : 5
    const pts = scatter(-8, -18, c, r, 1.5, 1.0, 0.7, rand)
    for (const [x, y, z] of pts) {
      instances.push({
        baseX: x, baseY: y, baseZ: z,
        scale: isMobile ? 0.22 + rand() * 0.06 : 0.32 + rand() * 0.1,
        rotSpeedX: 0.08 + rand() * 0.06,
        rotSpeedY: 0.06 + rand() * 0.05,
        rotSpeedZ: 0.04 + rand() * 0.035,
        floatSpeedX: 0.4 + rand() * 0.25,
        floatSpeedY: 0.35 + rand() * 0.2,
        floatSpeedZ: 0.1 + rand() * 0.08,
        floatAmpX: 0.45 + rand() * 0.3,
        floatAmpY: 0.4 + rand() * 0.25,
        floatAmpZ: 0.14 + rand() * 0.09,
        phaseX: rand() * Math.PI * 2,
        phaseY: rand() * Math.PI * 2,
        phaseZ: rand() * Math.PI * 2,
        memScale: 1.35 + rand() * 0.1,
      })
    }
  }

  // LAYER 4: DEEP — small, behind
  {
    const c = isMobile ? 5 : 10
    const r = isMobile ? 3 : 5
    const pts = scatter(-18, -35, c, r, 1.4, 0.7, 0.5, rand)
    for (const [x, y, z] of pts) {
      instances.push({
        baseX: x, baseY: y, baseZ: z,
        scale: isMobile ? 0.12 + rand() * 0.04 : 0.18 + rand() * 0.07,
        rotSpeedX: 0.08 + rand() * 0.06,
        rotSpeedY: 0.07 + rand() * 0.04,
        rotSpeedZ: 0.045 + rand() * 0.03,
        floatSpeedX: 0.35 + rand() * 0.2,
        floatSpeedY: 0.3 + rand() * 0.18,
        floatSpeedZ: 0.16 + rand() * 0.12,
        floatAmpX: 0.3 + rand() * 0.15,
        floatAmpY: 0.25 + rand() * 0.12,
        floatAmpZ: 0.08 + rand() * 0.05,
        phaseX: rand() * Math.PI * 2,
        phaseY: rand() * Math.PI * 2,
        phaseZ: rand() * Math.PI * 2,
        memScale: 1.35 + rand() * 0.1,
      })
    }
  }

  // LAYER 5: FAR BG — tiny cloud
  {
    const c = isMobile ? 5 : 12
    const r = isMobile ? 3 : 5
    const pts = scatter(-35, -55, c, r, 1.3, 0.5, 0.35, rand)
    for (const [x, y, z] of pts) {
      instances.push({
        baseX: x, baseY: y, baseZ: z,
        scale: isMobile ? 0.06 + rand() * 0.04 : 0.08 + rand() * 0.05,
        rotSpeedX: 0.09 + rand() * 0.06,
        rotSpeedY: 0.075 + rand() * 0.05,
        rotSpeedZ: 0.05 + rand() * 0.035,
        floatSpeedX: 0.35 + rand() * 0.2,
        floatSpeedY: 0.25 + rand() * 0.15,
        floatSpeedZ: 0.15 + rand() * 0.1,
        floatAmpX: 0.35 + rand() * 0.2,
        floatAmpY: 0.3 + rand() * 0.15,
        floatAmpZ: 0.1 + rand() * 0.07,
        phaseX: rand() * Math.PI * 2,
        phaseY: rand() * Math.PI * 2,
        phaseZ: rand() * Math.PI * 2,
        memScale: 1.35 + rand() * 0.1,
      })
    }
  }

  return instances
}

export default function ExosomeParticles() {
  const groupRef = useRef<THREE.Group>(null)
  const coreInstanceRef = useRef<THREE.InstancedMesh>(null)
  const memInstanceRef = useRef<THREE.InstancedMesh>(null)
  const glowInstanceRef = useRef<THREE.InstancedMesh>(null)
  const time = useRef(0)
  const mouseRef = useRef({ x: 0, y: 0 })
  const { viewport } = useThree()

  const isMobile = viewport.width < 768
  const segments = isMobile ? 32 : 48

  const noise = useMemo(() => new SimplexNoise(42), [])

  const coreGeo = useMemo(() => createCoreGeo(segments, noise), [segments, noise])
  const memGeo = useMemo(() => createMembraneGeo(segments, noise), [segments, noise])

  const coreBump = useMemo(() => getNucleusBumpTexture(), [])
  const coreNormal = useMemo(() => getNucleusNormalMap(), [])
  const memBump = useMemo(() => getMembraneBumpTexture(), [])

  const coreMat = useMemo(() => new THREE.MeshStandardMaterial({
    color: new THREE.Color("#1890c8"),
    emissive: new THREE.Color("#1078a8"),
    emissiveIntensity: 0.4,
    roughness: 0.65,
    metalness: 0.0,
    transparent: false,
    side: THREE.FrontSide,
    depthWrite: true,
    ...(coreBump ? { bumpMap: coreBump, bumpScale: 0.22 } : {}),
    ...(coreNormal ? { normalMap: coreNormal, normalScale: new THREE.Vector2(1.8, 1.8) } : {}),
  }), [coreBump, coreNormal])

  const memMat = useMemo(() => new THREE.MeshPhysicalMaterial({
    color: new THREE.Color("#c8dce8"),
    emissive: new THREE.Color("#4080a0"),
    emissiveIntensity: 0.08,
    roughness: 0.3,
    metalness: 0.0,
    transmission: 0.88,
    thickness: 0.5,
    transparent: true,
    opacity: 0.22,
    side: THREE.DoubleSide,
    depthWrite: false,
    clearcoat: 0.6,
    clearcoatRoughness: 0.1,
    ior: 1.33,
    attenuationColor: new THREE.Color("#a0c8e0"),
    attenuationDistance: 2.0,
    specularIntensity: 1.0,
    specularColor: new THREE.Color("#e0f0ff"),
    ...(memBump ? { bumpMap: memBump, bumpScale: 0.015 } : {}),
  }), [memBump])

  const glowTex = useMemo(() => getGlowTexture(), [])

  const instances = useMemo(() => generateInstances(isMobile), [isMobile])
  const count = instances.length

  const dummy = useMemo(() => {
    const o = new THREE.Object3D()
    o.matrixAutoUpdate = false
    return o
  }, [])

  useEffect(() => {
    const handleMouse = (e: MouseEvent) => {
      mouseRef.current.x = (e.clientX / window.innerWidth) * 2 - 1
      mouseRef.current.y = -(e.clientY / window.innerHeight) * 2 + 1
    }
    window.addEventListener("mousemove", handleMouse, { passive: true })
    return () => window.removeEventListener("mousemove", handleMouse)
  }, [])

  useEffect(() => {
    if (!coreInstanceRef.current || !memInstanceRef.current) return
    for (let i = 0; i < count; i++) {
      const e = instances[i]
      dummy.position.set(e.baseX, e.baseY, e.baseZ)
      dummy.rotation.set(0, 0, 0)
      dummy.scale.setScalar(e.scale)
      dummy.updateMatrix()
      coreInstanceRef.current.setMatrixAt(i, dummy.matrix)
      dummy.scale.setScalar(e.scale * e.memScale)
      dummy.updateMatrix()
      memInstanceRef.current.setMatrixAt(i, dummy.matrix)
    }
    coreInstanceRef.current.instanceMatrix.needsUpdate = true
    memInstanceRef.current.instanceMatrix.needsUpdate = true
  }, [count, instances, dummy])

  useEffect(() => {
    return () => {
      coreGeo.dispose()
      memGeo.dispose()
      coreMat.dispose()
      memMat.dispose()
    }
  }, [coreGeo, memGeo, coreMat, memMat])

  useFrame((_, delta) => {
    if (!coreInstanceRef.current || !memInstanceRef.current || !groupRef.current) return
    const dt = Math.min(delta, 0.05)
    time.current += dt
    const t = time.current * 3.0

    const tx = mouseRef.current.x * 0.08
    const ty = mouseRef.current.y * 0.06
    groupRef.current.position.x += (tx - groupRef.current.position.x) * 0.5 * dt
    groupRef.current.position.y += (ty - groupRef.current.position.y) * 0.5 * dt

    const coreMesh = coreInstanceRef.current
    const memMesh = memInstanceRef.current
    const m = dummy.matrix
    const pos = dummy.position
    const quat = dummy.quaternion
    const scl = dummy.scale
    const euler = dummy.rotation

    for (let i = 0; i < count; i++) {
      const e = instances[i]

      pos.x = e.baseX + Math.sin(t * e.floatSpeedX + e.phaseX) * e.floatAmpX
      pos.y = e.baseY + Math.cos(t * e.floatSpeedY + e.phaseY) * e.floatAmpY
      pos.z = e.baseZ + Math.sin(t * e.floatSpeedZ + e.phaseZ) * e.floatAmpZ

      euler.x = t * e.rotSpeedX
      euler.y = t * e.rotSpeedY
      euler.z = t * e.rotSpeedZ

      scl.x = scl.y = scl.z = e.scale
      quat.setFromEuler(euler)
      m.compose(pos, quat, scl)
      coreMesh.setMatrixAt(i, m)

      scl.x = scl.y = scl.z = e.scale * e.memScale
      m.compose(pos, quat, scl)
      memMesh.setMatrixAt(i, m)
    }

    coreMesh.instanceMatrix.needsUpdate = true
    memMesh.instanceMatrix.needsUpdate = true
  })

  return (
    <group ref={groupRef}>
      <instancedMesh
        ref={coreInstanceRef}
        args={[coreGeo, coreMat, count]}
        frustumCulled={false}
      />
      <instancedMesh
        ref={memInstanceRef}
        args={[memGeo, memMat, count]}
        frustumCulled={false}
      />
      <ambientLight intensity={0.9} color="#b0d8f0" />
      <directionalLight position={[0, 3, 10]} intensity={2.4} color="#e0f4ff" />
      <directionalLight position={[-4, 2, 8]} intensity={1.0} color="#80b8d8" />
      <directionalLight position={[4, -1, 6]} intensity={0.6} color="#70b0d0" />
    </group>
  )
}
