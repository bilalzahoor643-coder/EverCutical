"use client"

import dynamic from "next/dynamic"

const PostProcessingDesktop = dynamic(
  () => import("./PostProcessingDesktop").then((m) => m.default),
  { ssr: false }
)

const PostProcessingMobile = dynamic(
  () => import("./PostProcessingMobile").then((m) => m.default),
  { ssr: false }
)

export function PostProcessing({ isMobile }: { isMobile: boolean }) {
  if (isMobile) return <PostProcessingMobile />
  return <PostProcessingDesktop />
}
