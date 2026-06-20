export default function BlogPostLoading() {
  return (
    <main className="min-h-screen bg-[#f0f4f7]">
      <div className="pt-28 pb-16 md:pt-36 md:pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="max-w-3xl mx-auto">
            {/* Header skeleton */}
            <div className="mb-8">
              <div className="h-4 w-32 bg-gray-200 rounded-full mb-4 animate-pulse" />
              <div className="h-10 w-3/4 bg-gray-200 rounded-xl mb-3 animate-pulse" />
              <div className="h-6 w-1/2 bg-gray-200 rounded-lg mb-4 animate-pulse" />
              <div className="flex gap-3">
                <div className="h-4 w-20 bg-gray-200 rounded-full animate-pulse" />
                <div className="h-4 w-24 bg-gray-200 rounded-full animate-pulse" />
              </div>
            </div>
            {/* Content skeleton */}
            <div className="space-y-4">
              {[...Array(8)].map((_, i) => (
                <div key={i} className="h-4 bg-gray-200 rounded-lg animate-pulse" style={{ width: `${85 + (i % 3) * 5}%` }} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}
