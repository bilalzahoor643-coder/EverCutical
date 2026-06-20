"use client"

export default function HeroSection() {
  return (
    <section id="hero" className="relative min-h-[70vh] md:min-h-screen flex items-center justify-center bg-transparent">
      <div className="max-w-4xl mx-auto px-6 text-center z-10">
        <div
          className="inline-block mb-4 opacity-0 animate-[fadeUp_0.6s_0.2s_forwards]"
        >
          <span className="text-xs text-[#38bdf8] font-semibold tracking-[0.2em] uppercase bg-[#0ea5e9]/15 px-4 py-1.5 rounded-full border border-[#0ea5e9]/25">
            Korean Exosome Biotechnology
          </span>
        </div>

        <h1
          className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-bold text-white leading-tight mb-4 opacity-0 animate-[fadeUp_0.6s_0.3s_forwards] text-glow-strong"
        >
          Where Science Meets
          <br />
          <span className="text-[#38bdf8]">Cellular Innovation</span>
        </h1>

        <p
          className="text-[#b0d0e8] text-sm md:text-base max-w-xl mx-auto leading-relaxed mb-8 opacity-0 animate-[fadeUp_0.6s_0.4s_forwards]"
        >
          EverCeutical is a Korea-based leader in exosome research and manufacturing,
          delivering high-purity, clinically engineered exosome solutions for
          regenerative medicine and aesthetic dermatology worldwide.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 opacity-0 animate-[fadeUp_0.6s_0.5s_forwards]">
          <a
            href="#products"
            className="inline-flex items-center px-7 py-3 rounded-lg bg-[#0ea5e9] text-white text-sm font-semibold hover:bg-[#0284c7] transition-all duration-300 shadow-lg shadow-[#0ea5e9]/30 hover:shadow-[#0ea5e9]/40"
          >
            Explore Products
            <svg className="w-4 h-4 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </a>
          <a
            href="#learn"
            className="inline-flex items-center px-7 py-3 rounded-lg border border-white/25 text-white/90 text-sm font-semibold hover:border-[#38bdf8]/50 hover:text-[#38bdf8] transition-all duration-300 bg-white/[0.08] backdrop-blur-sm"
          >
            Learn More
          </a>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-0 animate-[fadeUp_0.6s_0.8s_forwards]">
        <span className="text-[10px] text-white/50 tracking-widest uppercase">Scroll</span>
        <div className="w-5 h-8 border-2 border-white/25 rounded-full flex justify-center pt-1.5">
          <div className="w-1 h-2 bg-white/50 rounded-full animate-[scrollBounce_1.5s_infinite]" />
        </div>
      </div>
    </section>
  )
}
