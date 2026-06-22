"use client"

import { use, useEffect, useRef, useState } from "react"
import Link from "next/link"
import { notFound } from "next/navigation"
import Navbar from "@/components/Navbar"
import Footer from "@/components/Footer"
import { blogPosts, type ContentBlock } from "@/data/scrapedData"

function useInView(threshold = 0.15, rootMargin?: string) {
  const ref = useRef<HTMLDivElement>(null)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const isMobile = window.innerWidth < 768
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setVisible(true)
      },
      { threshold: isMobile ? 0.01 : threshold, rootMargin: rootMargin ?? (isMobile ? "200px 0px 0px 0px" : "0px 0px -30px 0px") }
    )
    obs.observe(el)
    const timer = isMobile ? setTimeout(() => setVisible(true), 1500) : setTimeout(() => setVisible(true), 4000)
    return () => { obs.disconnect(); clearTimeout(timer) }
  }, [threshold, rootMargin])

  return { ref, visible }
}

function AnimatedBlock({ children, index = 0 }: { children: React.ReactNode; index?: number }) {
  const { ref, visible } = useInView(0.1)
  return (
    <div
      ref={ref}
      style={{
        opacity: visible ? 1 : 0,
        transform: `translateY(${visible ? 0 : 24}px)`,
        transition: `opacity 0.7s cubic-bezier(0.22,1,0.36,1) ${index * 0.04}s, transform 0.7s cubic-bezier(0.22,1,0.36,1) ${index * 0.04}s`,
      }}
    >
      {children}
    </div>
  )
}

function ContentRenderer({ blocks }: { blocks: ContentBlock[] }) {
  let blockIndex = 0
  return (
    <div className="space-y-8">
      {blocks.map((block, i) => {
        switch (block.type) {
          case "heading": {
            const idx = blockIndex++
            const Tag = block.level === 2 ? "h2" : block.level === 3 ? "h3" : "h4"
            return (
              <AnimatedBlock key={i} index={idx}>
                <Tag
                  id={block.text?.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/-+$/, "")}
                  className={`font-bold text-[#0f172a] leading-snug scroll-mt-28 ${
                    block.level === 2
                      ? "text-2xl md:text-[28px] mt-14 mb-6 pb-4 border-b border-[#e2e8f0]"
                      : block.level === 3
                      ? "text-xl md:text-[22px] mt-10 mb-5"
                      : "text-lg mt-8 mb-4"
                  }`}
                >
                  {block.text}
                </Tag>
              </AnimatedBlock>
            )
          }
          case "paragraph": {
            const idx = blockIndex++
            return (
              <AnimatedBlock key={i} index={idx}>
                <p className="text-[#334155] text-[15px] md:text-[16px] leading-[1.9]">
                  {block.text}
                </p>
              </AnimatedBlock>
            )
          }
          case "list": {
            const idx = blockIndex++
            return (
              <AnimatedBlock key={i} index={idx}>
                <ul className="space-y-3.5 py-2">
                  {block.items?.map((item, j) => (
                    <li key={j} className="flex items-start gap-3.5 text-[#334155] text-[15px] md:text-[16px] leading-[1.8]">
                      <span className="mt-2.5 w-2 h-2 rounded-full bg-[#0ea5e9] shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </AnimatedBlock>
            )
          }
          case "image": {
            const idx = blockIndex++
            return (
              <AnimatedBlock key={i} index={idx}>
                <figure className="my-10 rounded-2xl overflow-hidden border border-[#e2e8f0]">
                  <img
                    src={block.src}
                    alt={block.alt || ""}
                    className="w-full h-auto object-cover hover:scale-[1.02] transition-transform duration-700"
                    loading="lazy"
                  />
                </figure>
              </AnimatedBlock>
            )
          }
          case "table": {
            const idx = blockIndex++
            return (
              <AnimatedBlock key={i} index={idx}>
                <div className="my-10 overflow-x-auto rounded-xl border border-[#e2e8f0]">
                  <table className="w-full text-sm">
                    <thead>
                      <tr className="bg-[#f8fafc]">
                        {block.headers?.map((h, j) => (
                          <th key={j} className="px-3 py-2 sm:px-6 sm:py-4 text-left text-[#0f172a] font-semibold tracking-wide text-[13px]">
                            {h}
                          </th>
                        ))}
                      </tr>
                    </thead>
                    <tbody>
                      {block.rows?.map((row, j) => (
                        <tr key={j} className={`${j % 2 === 0 ? "bg-white" : "bg-[#f8fafc]"} hover:bg-[#f1f5f9] transition-colors duration-200`}>
                          {row.map((cell, k) => (
                            <td key={k} className="px-3 py-2 sm:px-6 sm:py-4 text-[#334155] border-t border-[#e2e8f0] text-[14px]">
                              {cell}
                            </td>
                          ))}
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </AnimatedBlock>
            )
          }
          case "quote": {
            const idx = blockIndex++
            return (
              <AnimatedBlock key={i} index={idx}>
                <blockquote className="my-8 pl-7 border-l-4 border-[#38bdf8] bg-gradient-to-r from-[#38bdf8]/[0.06] to-transparent rounded-r-2xl py-6 pr-7">
                  <p className="text-[#0f172a] text-[15px] md:text-[16px] leading-[1.85] italic font-medium">
                    &ldquo;{block.text}&rdquo;
                  </p>
                </blockquote>
              </AnimatedBlock>
            )
          }
          case "divider": {
            const idx = blockIndex++
            return (
              <AnimatedBlock key={i} index={idx}>
                <div className="my-12 flex items-center gap-4">
                  <div className="flex-1 h-px bg-gradient-to-r from-transparent via-[#0ea5e9]/15 to-transparent" />
                  <div className="w-1.5 h-1.5 rounded-full bg-[#0ea5e9]/20" />
                  <div className="flex-1 h-px bg-gradient-to-r from-transparent via-[#0ea5e9]/15 to-transparent" />
                </div>
              </AnimatedBlock>
            )
          }
          default:
            return null
        }
      })}
    </div>
  )
}

function TableOfContents({ blocks }: { blocks: ContentBlock[] }) {
  const headings = blocks
    .filter((b) => b.type === "heading" && b.level === 2)
    .map((b) => b.text || "")

  if (headings.length < 2) return null

  return (
    <nav className="hidden xl:block w-64 shrink-0">
      <div className="sticky top-28 rounded-2xl bg-[#f8fafc] border border-[#e2e8f0] p-6">
        <h4 className="text-[11px] font-bold tracking-[0.2em] uppercase text-[#38bdf8] mb-5 pb-3 border-b border-[#e2e8f0]">
          Table of Contents
        </h4>
        <ul className="space-y-3">
          {headings.map((h, i) => (
            <li key={i}>
              <a
                href={`#${h.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/-+$/, "")}`}
                className="text-[13px] text-[#64748b] hover:text-[#0f172a] transition-colors duration-200 leading-snug block py-0.5 hover:pl-1 transition-all"
              >
                {h}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  )
}

function RelatedArticles({ currentSlug }: { currentSlug: string }) {
  const related = blogPosts.filter((p) => p.slug !== currentSlug).slice(0, 3)
  const { ref, visible } = useInView(0.1)

  return (
    <section ref={ref} className="py-16 md:py-24">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div
          className="text-center mb-12"
          style={{
            opacity: visible ? 1 : 0,
            transform: `translateY(${visible ? 0 : 40}px)`,
            transition: "opacity 1.3s cubic-bezier(0.22,1,0.36,1), transform 1.3s cubic-bezier(0.22,1,0.36,1)",
          }}
        >
          <span className="inline-block text-[10px] text-[#38bdf8] font-bold tracking-[0.25em] uppercase bg-[#0ea5e9]/[0.08] px-4 py-1.5 rounded-full mb-4">
            Continue Reading
          </span>
          <h2 className="text-2xl md:text-3xl font-bold text-[#0f172a]">
            Related <span className="text-[#38bdf8]">Articles</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 md:gap-7">
          {related.map((post, i) => (
            <Link
              key={post.id}
              href={`/blogs/${post.slug}`}
              className="group relative rounded-2xl overflow-hidden glass-card transition-all duration-500 hover:-translate-y-1"
              style={{
                opacity: visible ? 1 : 0,
                transform: `translateY(${visible ? 0 : 50}px)`,
                transition: `opacity 1.1s cubic-bezier(0.22,1,0.36,1) ${0.2 + i * 0.15}s, transform 1.1s cubic-bezier(0.22,1,0.36,1) ${0.2 + i * 0.15}s`,
              }}
            >
              <div className="relative h-48 overflow-hidden">
                {post.image ? (
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    loading="lazy"
                  />
                ) : (
                  <div className="w-full h-full bg-gradient-to-br from-[#0ea5e9]/10 to-[#f1f5f9]/10 flex items-center justify-center">
                    <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="#0ea5e9" strokeWidth="1.5">
                      <path d="M12 2L2 7l10 5 10-5-10-5z" />
                      <path d="M2 17l10 5 10-5" />
                      <path d="M2 12l10 5 10-5" />
                    </svg>
                  </div>
                )}
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent" />
              </div>
              <div className="p-5 sm:p-6">
                <div className="flex items-center gap-2 mb-3">
                  <span className="text-[10px] sm:text-[11px] font-bold tracking-wider uppercase text-[#38bdf8]">{post.category}</span>
                  <span className="text-[#94a3b8]">·</span>
                  <span className="text-[10px] sm:text-[11px] text-[#94a3b8]">{post.readTime}</span>
                </div>
                <h3 className="text-[15px] font-bold text-[#0f172a] leading-snug line-clamp-2 group-hover:text-[#38bdf8] transition-colors duration-300">
                  {post.title}
                </h3>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}

export default function BlogContent({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = use(params)
  const post = blogPosts.find((p) => p.slug === slug)

  if (!post) {
    notFound()
    return null
  }

  const hero = useInView(0.1)
  const cta = useInView(0.2)

  const categoryColors: Record<string, string> = {
    Research: "#0ea5e9",
    Science: "#10b981",
    Technology: "#8b5cf6",
    Clinical: "#f59e0b",
  }

  return (
    <>
      {/* ═══════════ HERO ═══════════ */}
      <section className="relative pt-28 pb-8 md:pt-36 md:pb-12 overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-[#0ea5e9]/[0.03] to-transparent" />
          <div className="absolute top-20 right-[10%] w-80 h-80 rounded-full bg-[#0ea5e9]/[0.04] blur-3xl" />
          <div className="absolute bottom-0 left-[5%] w-60 h-60 rounded-full bg-[#38bdf8]/[0.02] blur-3xl" />
        </div>

        <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6">
          <div
            ref={hero.ref}
            style={{
              opacity: hero.visible ? 1 : 0,
              transform: `translateY(${hero.visible ? 0 : 30}px)`,
              transition: "opacity 1s cubic-bezier(0.22,1,0.36,1), transform 1s cubic-bezier(0.22,1,0.36,1)",
            }}
          >
            <nav className="flex items-center gap-2 text-xs text-[#94a3b8] mb-8">
              <Link href="/" className="hover:text-[#0f172a] transition-colors">Home</Link>
              <span>/</span>
              <Link href="/blogs" className="hover:text-[#0f172a] transition-colors">Blog</Link>
              <span>/</span>
              <span className="text-[#38bdf8] truncate max-w-[200px]">{post.title}</span>
            </nav>

            <div className="flex flex-wrap items-center gap-3 mb-6">
              <span
                className="px-4 py-1.5 rounded-full text-[10px] font-bold tracking-wider uppercase"
                style={{
                  background: `${categoryColors[post.category] || "#0ea5e9"}15`,
                  color: categoryColors[post.category] || "#0ea5e9",
                }}
              >
                {post.category}
              </span>
              <span className="text-xs text-[#94a3b8]">{post.date}</span>
              <span className="text-[#94a3b8]">·</span>
              <span className="text-xs text-[#94a3b8]">{post.readTime}</span>
            </div>

            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-[44px] font-bold text-[#0f172a] leading-[1.2] mb-7 max-w-3xl">
              {post.title}
            </h1>

            <div className="flex items-center gap-4 mb-10">
              <div className="w-11 h-11 rounded-full bg-gradient-to-br from-[#0ea5e9] to-[#38bdf8] flex items-center justify-center text-white text-sm font-bold">
                EC
              </div>
              <div>
                <div className="text-sm font-semibold text-[#0f172a]">{post.author || "EverCeutical"}</div>
                <div className="text-xs text-[#94a3b8]">{post.date}</div>
              </div>
            </div>
          </div>

          {post.image && (
            <div
              className="relative rounded-3xl overflow-hidden"
              style={{
                opacity: hero.visible ? 1 : 0,
                transform: `translateY(${hero.visible ? 0 : 40}px) scale(${hero.visible ? 1 : 0.98})`,
                transition: "opacity 1.2s cubic-bezier(0.22,1,0.36,1) 0.2s, transform 1.2s cubic-bezier(0.22,1,0.36,1) 0.2s",
              }}
            >
              <img
                src={post.image}
                alt={post.title}
                className="w-full h-64 md:h-80 lg:h-[440px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#f1f5f9]/40 via-transparent to-transparent" />
            </div>
          )}
        </div>
      </section>

      {/* ═══════════ CONTENT ═══════════ */}
      <section className="relative py-10 md:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="flex gap-8 xl:gap-14 items-start">
            <article className="flex-1 min-w-0 glass-card p-6 sm:p-8 md:p-12 lg:p-16">
              <ContentRenderer blocks={post.content} />
            </article>

            <TableOfContents blocks={post.content} />
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 mt-10 max-w-4xl mx-auto">
            <Link
              href="/blogs"
              className="flex items-center gap-2.5 text-sm text-[#38bdf8] font-semibold hover:gap-4 transition-all duration-300 group"
            >
              <span className="w-9 h-9 rounded-full bg-[#0ea5e9]/10 flex items-center justify-center group-hover:bg-[#0ea5e9] group-hover:text-white transition-all duration-300">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="19" y1="12" x2="5" y2="12" />
                  <polyline points="12 19 5 12 12 5" />
                </svg>
              </span>
              Back to Blog
            </Link>
            <div className="flex items-center gap-2.5">
              <span className="text-xs text-[#94a3b8] mr-1 font-medium">Share</span>
              {[
                { name: "Facebook", path: "M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z" },
                { name: "Twitter", path: "M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z" },
                { name: "LinkedIn", path: "M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2zM4 2a2 2 0 110 4 2 2 0 010-4z" },
              ].map((platform) => (
                <button
                  key={platform.name}
                  className="w-9 h-9 rounded-full bg-[#f8fafc] flex items-center justify-center text-[#38bdf8] hover:bg-[#0ea5e9] hover:text-white transition-all duration-300 hover:scale-110"
                  aria-label={`Share on ${platform.name}`}
                >
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d={platform.path} />
                  </svg>
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════ RELATED ARTICLES ═══════════ */}
      <RelatedArticles currentSlug={post.slug} />

      {/* ═══════════ CTA ═══════════ */}
      <section className="relative py-14 md:py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <div
            ref={cta.ref}
            className="relative rounded-3xl p-8 sm:p-10 md:p-14 text-center overflow-hidden"
            style={{
              background: "linear-gradient(135deg, #0ea5e9 0%, #0f172a 100%)",
              opacity: cta.visible ? 1 : 0,
              transform: `translateY(${cta.visible ? 0 : 40}px) scale(${cta.visible ? 1 : 0.97})`,
              transition: "opacity 1.3s cubic-bezier(0.22,1,0.36,1), transform 1.3s cubic-bezier(0.22,1,0.36,1)",
            }}
          >
            <div className="absolute inset-0 pointer-events-none overflow-hidden">
              <div className="absolute -top-24 -right-24 w-64 h-64 rounded-full bg-white/[0.04] blur-2xl" />
              <div className="absolute -bottom-20 -left-20 w-52 h-52 rounded-full bg-white/[0.03] blur-2xl" />
            </div>
            <div className="relative z-10">
              <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
                Interested in <span className="text-[#38bdf8]">Exosome Therapy</span>?
              </h2>
              <p className="text-white/70 text-sm md:text-base max-w-lg mx-auto mb-8 leading-relaxed">
                Explore our range of advanced exosome formulations designed for professional clinical use.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <Link href="/products" className="px-9 py-4 rounded-full bg-[#0ea5e9] text-white text-sm font-bold hover:bg-[#0284c7] transition-all duration-300 hover:scale-105">
                  View Products
                </Link>
                <Link href="/contact" className="px-9 py-4 rounded-full border border-white/30 text-white text-sm font-semibold hover:bg-white/10 transition-all duration-300 hover:scale-105">
                  Contact Us
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
