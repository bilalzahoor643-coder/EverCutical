"use client"

import { EffectComposer, Bloom } from "@react-three/postprocessing"

export default function PostProcessingMobile() {
  return (
    <EffectComposer multisampling={0}>
      <Bloom
        intensity={0.25}
        luminanceThreshold={0.5}
        luminanceSmoothing={0.9}
        mipmapBlur
      />
    </EffectComposer>
  )
}
