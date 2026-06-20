import type { Metadata, Viewport } from "next"
import { Inter } from "next/font/google"
import SceneWrapper from "@/components/SceneWrapper"
import LenisProvider from "@/components/LenisProvider"
import { LoadingProvider } from "@/components/LoadingContext"
import LoadingScreen from "@/components/LoadingScreen"
import "./globals.css"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "EverCeutical | Where Science Meets Cellular Innovation",
  description:
    "Advanced exosome biotechnology engineered for regenerative medicine, aesthetic dermatology, and cellular optimization.",
  icons: {
    icon: [
      { url: "images/logo.png", type: "image/png" },
    ],
    shortcut: "images/logo.png",
    apple: [
      { url: "images/logo.png", type: "image/png" },
    ],
  },
}

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  userScalable: true,
  themeColor: "#0c1929",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.className} antialiased`}>
        <LoadingProvider>
          <LoadingScreen />
          <LenisProvider>
            <SceneWrapper />
            <div className="relative" style={{ zIndex: 10 }}>
              {children}
            </div>
          </LenisProvider>
        </LoadingProvider>
      </body>
    </html>
  )
}
