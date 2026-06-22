"use client"

import { EffectComposer, Bloom, Vignette } from "@react-three/postprocessing"

export default function PostProcessingDesktop() {
  return (
    <EffectComposer multisampling={0}>
      <Bloom
        intensity={0.3}
        luminanceThreshold={0.4}
        luminanceSmoothing={0.9}
        mipmapBlur
      />
      <Vignette
        offset={0.3}
        darkness={0.25}
      />
    </EffectComposer>
  )
}
