"use client"

import { useRef, useMemo, useEffect } from "react"
import { useFrame } from "@react-three/fiber"
import * as THREE from "three"
import { SimplexNoise } from "./SimplexNoise"
import {
  getNucleusBumpTexture,
  getNucleusNormalMap,
  getGlowTexture,
} from "./exosomeTextures"

interface ExosomeModelProps {
  scale?: number
  position?: [number, number, number]
  speed?: number
  phase?: number
}

/**
 * Creates a sphere with organic vertex displacement along normals.
 * Used for both nucleus (subtle) and membrane (more aggressive).
 */
function createDisplacedGeo(
  baseRadius: number,
  segments: number,
  noise: SimplexNoise,
  seed: number,
  amplitude: number,
  frequency: number
): THREE.BufferGeometry {
  const geo = new THREE.SphereGeometry(baseRadius, segments, segments)
  const pos = geo.attributes.position
  const normal = geo.attributes.normal

  // Store base positions for animation
  const basePositions = new Float32Array(pos.array.length)
  basePositions.set(pos.array)

  for (let i = 0; i < pos.count; i++) {
    const nx = normal.getX(i)
    const ny = normal.getY(i)
    const nz = normal.getZ(i)

    // FBM for natural-looking organic displacement
    const n = noise.fbm(
      nx * frequency + seed,
      ny * frequency + seed + 100,
      nz * frequency + seed + 200,
      4, 2.0, 0.5
    )

    const displacement = 1 + n * amplitude

    pos.setXYZ(
      i,
      nx * baseRadius * displacement,
      ny * baseRadius * displacement,
      nz * baseRadius * displacement
    )
  }

  geo.computeVertexNormals()
  return geo
}

function createMat(props: THREE.MeshPhysicalMaterialParameters): THREE.MeshPhysicalMaterial {
  return new THREE.MeshPhysicalMaterial(props)
}

export default function ExosomeModel({
  scale = 1,
  position = [0, 0, 0],
  speed = 1,
  phase = 0,
}: ExosomeModelProps) {
  const groupRef = useRef<THREE.Group>(null)
  const outerRef = useRef<THREE.Mesh>(null)
  const innerRef = useRef<THREE.Mesh>(null)
  const glowRef = useRef<THREE.Sprite>(null)
  const time = useRef(phase)

  const isMobile = typeof window !== "undefined" && window.innerWidth < 768
  const segments = isMobile ? 28 : 48

  // ── Noise for vertex displacement ──
  const noise = useMemo(() => new SimplexNoise(42), [])

  // ── Membrane: organic displaced sphere ──
  const membraneGeoRef = useRef<THREE.BufferGeometry>(
    createDisplacedGeo(1.0, segments, noise, 0, 0.06, 1.8)
  )

  // ── Nucleus: subtly displaced sphere ──
  const nucleusGeoRef = useRef<THREE.BufferGeometry>(
    createDisplacedGeo(0.42, segments, noise, 50, 0.025, 2.4)
  )

  // ── Textures ──
  const membraneBump = useMemo(() => getNucleusBumpTexture(), [])
  const nucleusBump = useMemo(() => getNucleusBumpTexture(), [])
  const nucleusNormal = useMemo(() => getNucleusNormalMap(), [])
  const glowTex = useMemo(() => getGlowTexture(), [])

  // ════════════════════════════════════════════
  // OUTER MEMBRANE — whitish, very transparent, organic wrinkles
  // ════════════════════════════════════════════
  const membraneMat = useRef(createMat({
    color: new THREE.Color("#c8e8f8"),
    emissive: new THREE.Color("#1878a0"),
    emissiveIntensity: 0.2,
    roughness: 0.18,
    metalness: 0.0,
    transmission: 0.92,
    thickness: 0.7,
    transparent: true,
    opacity: 0.28,
    side: THREE.DoubleSide,
    depthWrite: false,
    clearcoat: 1.0,
    clearcoatRoughness: 0.04,
    ior: 1.33,
    attenuationColor: new THREE.Color("#58b8e0"),
    attenuationDistance: 3.0,
    specularIntensity: 1.4,
    specularColor: new THREE.Color("#e8f4ff"),
    ...(membraneBump ? { bumpMap: membraneBump, bumpScale: 0.018 } : {}),
  }))

  // ════════════════════════════════════════════
  // INNER NUCLEUS — solid blue, granular texture + normal map
  // ════════════════════════════════════════════
  const nucleusMat = useRef(createMat({
    color: new THREE.Color("#1a98b8"),
    emissive: new THREE.Color("#0c6888"),
    emissiveIntensity: 0.45,
    roughness: 0.32,
    metalness: 0.0,
    transmission: 0.1,
    thickness: 2.0,
    transparent: true,
    opacity: 0.95,
    side: THREE.FrontSide,
    depthWrite: false,
    clearcoat: 0.55,
    clearcoatRoughness: 0.12,
    ior: 1.4,
    attenuationColor: new THREE.Color("#085878"),
    attenuationDistance: 1.0,
    specularIntensity: 1.0,
    specularColor: new THREE.Color("#90d8f0"),
    ...(nucleusBump ? { bumpMap: nucleusBump, bumpScale: 0.06 } : {}),
    ...(nucleusNormal ? { normalMap: nucleusNormal, normalScale: new THREE.Vector2(0.8, 0.8) } : {}),
  }))

  useEffect(() => {
    const mMat = membraneMat.current
    const nMat = nucleusMat.current
    return () => {
      mMat.dispose()
      nMat.dispose()
      membraneGeoRef.current.dispose()
      nucleusGeoRef.current.dispose()
    }
  }, [])

  useFrame((_, delta) => {
    if (!groupRef.current) return
    time.current += delta * speed
    const t = time.current

    // ── Emissive pulse ──
    membraneMat.current.emissiveIntensity = 0.2 + Math.sin(t * 0.5) * 0.08
    nucleusMat.current.emissiveIntensity = 0.45 + Math.sin(t * 0.6 + 0.5) * 0.12

    // ── Organic movement ──
    const w1 = Math.sin(t * 0.9) * 0.025
    const w2 = Math.sin(t * 1.4 + 0.7) * 0.015
    const squash = w1 + w2
    const stretch = -squash * 0.7
    const wobbleX = Math.sin(t * 1.2 + 2.5) * 0.01
    const wobbleZ = Math.cos(t * 0.8 + 0.3) * 0.008

    groupRef.current.scale.set(
      scale * (1 + stretch + wobbleX),
      scale * (1 + squash),
      scale * (1 + stretch * 0.3 + wobbleZ)
    )

    groupRef.current.position.set(position[0], position[1], position[2])

    // ── Faster rotation ──
    groupRef.current.rotation.y += delta * (0.06 + Math.sin(t * 0.2) * 0.02)
    groupRef.current.rotation.x = Math.sin(t * 0.12 + phase) * 0.04
    groupRef.current.rotation.z = Math.cos(t * 0.1 + 1.0) * 0.03

    // ── Membrane vertex animation — subtle breathing displacement ──
    const membraneGeo = membraneGeoRef.current
    const membranePos = membraneGeo.attributes.position
    const membraneNorm = membraneGeo.attributes.normal
    if (membranePos && membraneNorm) {
      for (let i = 0; i < membranePos.count; i++) {
        const nx = membraneNorm.getX(i)
        const ny = membraneNorm.getY(i)
        const nz = membraneNorm.getZ(i)

        // Animate displacement over time — organic membrane movement
        const n = noise.fbm(
          nx * 1.8 + t * 0.05,
          ny * 1.8 + t * 0.03 + 100,
          nz * 1.8 + t * 0.04 + 200,
          3, 2.0, 0.5
        )

        const animatedDisp = 1 + n * 0.06 + Math.sin(t * 0.3 + i * 0.001) * 0.008

        membranePos.setXYZ(
          i,
          nx * 1.0 * animatedDisp,
          ny * 1.0 * animatedDisp,
          nz * 1.0 * animatedDisp
        )
      }
      membranePos.needsUpdate = true
      membraneGeo.computeVertexNormals()
    }
  })

  return (
    <group ref={groupRef}>
      {/* Glow sprite — bloom halo */}
      {glowTex && (
        <sprite ref={glowRef} scale={[3.0, 3.0, 1]} renderOrder={-1}>
          <spriteMaterial
            map={glowTex}
            transparent
            depthWrite={false}
            blending={THREE.AdditiveBlending}
            opacity={0.45}
          />
        </sprite>
      )}

      {/* Outer membrane — transparent, wrinkled */}
      <mesh
        ref={outerRef}
        geometry={membraneGeoRef.current}
        material={membraneMat.current}
        frustumCulled={false}
      />

      {/* Inner nucleus — solid blue, textured */}
      <mesh
        ref={innerRef}
        geometry={nucleusGeoRef.current}
        material={nucleusMat.current}
        frustumCulled={false}
      />
    </group>
  )
}
