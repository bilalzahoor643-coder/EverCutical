export default function BlogLoading() {
  return (
    <main className="min-h-screen bg-[#f8fafc]">
      {/* Hero skeleton */}
      <div className="min-h-[60vh] flex items-center justify-center">
        <div className="w-full max-w-4xl mx-auto px-4 sm:px-6 text-center space-y-4">
          <div className="h-4 w-32 bg-[#e2e8f0] rounded-full mb-4 animate-pulse" />
          <div className="h-10 w-3/4 bg-[#e2e8f0] rounded-xl mb-3 animate-pulse" />
          <div className="h-6 w-1/2 bg-[#e2e8f0] rounded-lg mb-4 animate-pulse" />
          <div className="flex justify-center gap-4">
            <div className="h-4 w-20 bg-[#e2e8f0] rounded-full animate-pulse" />
            <div className="h-4 w-24 bg-[#e2e8f0] rounded-full animate-pulse" />
          </div>
        </div>
      </div>
      {/* Content skeleton */}
      <div className="max-w-3xl mx-auto px-4 sm:px-6 pb-20 space-y-6">
        {[85, 90, 75, 95, 80].map((w, i) => (
          <div key={i} className="h-4 bg-[#e2e8f0] rounded-lg animate-pulse" style={{ width: `${w}%` }} />
        ))}
      </div>
    </main>
  )
}
