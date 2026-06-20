import { products } from "@/data/siteData"
import { notFound } from "next/navigation"
import ProductPageClient from "./ProductPageClient"

export function generateStaticParams() {
  return products.map((p) => ({ slug: p.id }))
}

export default async function ProductPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const product = products.find((p) => p.id === slug)
  if (!product) notFound()
  return <ProductPageClient slug={slug} />
}
