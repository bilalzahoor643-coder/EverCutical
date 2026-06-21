"use client"

import { createContext, useContext, useState, useCallback, useEffect, type ReactNode } from "react"

interface LoadingState {
  contentReady: boolean
  setContentReady: (v: boolean) => void
  allReady: boolean
}

const LoadingContext = createContext<LoadingState>({
  contentReady: false,
  setContentReady: () => {},
  allReady: false,
})

export function useLoading() {
  return useContext(LoadingContext)
}

export function LoadingProvider({ children }: { children: ReactNode }) {
  const [contentReady, setContentReady] = useState(false)
  const handleSetContentReady = useCallback((v: boolean) => setContentReady(v), [])

  useEffect(() => {
    const timer = setTimeout(() => setContentReady(true), 1000)
    return () => clearTimeout(timer)
  }, [])

  return (
    <LoadingContext.Provider
      value={{
        contentReady,
        setContentReady: handleSetContentReady,
        allReady: contentReady,
      }}
    >
      {children}
    </LoadingContext.Provider>
  )
}
