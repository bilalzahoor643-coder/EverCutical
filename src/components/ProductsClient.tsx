"use client"

import dynamic from "next/dynamic"

const ProductsSection = dynamic(() => import("@/components/ProductsSection"), {
  ssr: false,
  loading: () => (
    <section
      id="products"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      <div className="w-full max-w-7xl mx-auto px-6 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-[#0f172a]">
          Exosome <span className="text-[#38bdf8]">Products</span>
        </h2>
      </div>
    </section>
  ),
})

export default function ProductsClient() {
  return <ProductsSection />
}
