import { blogPosts } from "@/data/scrapedData"
import Navbar from "@/components/Navbar"
import Footer from "@/components/Footer"
import BlogContent from "./BlogDetailClient"

export function generateStaticParams() {
  return blogPosts.map((post) => ({ slug: post.slug }))
}

export default function BlogDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  return (
    <main className="min-h-screen bg-transparent">
      <Navbar />
      <BlogContent params={params} />
      <Footer />
    </main>
  )
}
