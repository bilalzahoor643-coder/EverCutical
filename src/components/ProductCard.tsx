"use client"

import Link from "next/link"
import { ProductData } from "@/data/siteData"

interface ProductCardProps {
  product: ProductData
}

export default function ProductCard({ product }: ProductCardProps) {
  return (
    <Link href={product.href} className="group block">
      <div className="relative glass-card rounded-2xl overflow-hidden shadow-[0_4px_20px_rgba(0,0,0,0.06)] hover:shadow-[0_12px_40px_rgba(0,0,0,0.12)] transition-all duration-500 sm:hover:-translate-y-1">
        {/* Category Badge */}
        <div className="absolute top-3 left-3 z-10">
          <span
            className="text-[10px] font-bold tracking-wider uppercase px-2.5 py-1 rounded-full"
            style={{
              background: product.accentColor + "18",
              color: product.accentColor,
            }}
          >
            {product.category}
          </span>
        </div>

        {/* Size Badge */}
        <div className="absolute top-3 right-3 z-10">
          <span className="text-[10px] font-semibold bg-white/[0.08] text-white/60 px-2 py-1 rounded-full">
            {product.size}
          </span>
        </div>

        {/* Product Image */}
        <div className="relative w-full h-48 overflow-hidden bg-white/[0.03]">
          <img
            src={product.img}
            alt={product.fullName}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
            draggable={false}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0c1929] via-transparent to-transparent opacity-60" />
        </div>

        {/* Product Info */}
        <div className="p-4">
          <h3 className="text-sm font-bold text-white mb-1 line-clamp-1 group-hover:text-[#38bdf8] transition-colors">
            {product.fullName}
          </h3>
          <p className="text-xs text-white/50 mb-3 line-clamp-2 leading-relaxed">
            {product.desc}
          </p>

          {/* Benefits Preview */}
          <div className="space-y-1.5 mb-4">
            {product.benefits.slice(0, 2).map((benefit, i) => (
              <div key={i} className="flex items-start gap-2">
                <svg
                  className="w-3 h-3 mt-0.5 shrink-0"
                  style={{ color: product.accentColor }}
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                </svg>
                <span className="text-[11px] text-white/60 line-clamp-1">{benefit}</span>
              </div>
            ))}
          </div>

          {/* CTA Button */}
          <div
            className="flex items-center justify-center gap-2 w-full py-2.5 rounded-xl text-white text-xs font-semibold transition-all duration-300 group-hover:shadow-lg"
            style={{
              background: `linear-gradient(135deg, ${product.accentColor}, ${product.accentColor}cc)`,
              boxShadow: `0 4px 12px ${product.accentColor}20`,
            }}
          >
            View Details
            <svg className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </div>
        </div>
      </div>
    </Link>
  )
}
