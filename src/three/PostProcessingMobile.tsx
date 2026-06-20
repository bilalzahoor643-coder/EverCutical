"use client"

import { EffectComposer, Bloom, Vignette } from "@react-three/postprocessing"

export default function PostProcessingMobile() {
  return (
    <EffectComposer multisampling={0}>
      <Bloom
        intensity={0.4}
        luminanceThreshold={0.45}
        luminanceSmoothing={0.9}
        mipmapBlur
      />
      <Vignette offset={0.3} darkness={0.35} />
    </EffectComposer>
  )
}
