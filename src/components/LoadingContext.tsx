"use client"

import { createContext, useContext, useState, useCallback, useEffect, type ReactNode } from "react"

interface LoadingState {
  contentReady: boolean
  setContentReady: (v: boolean) => void
  sceneReady: boolean
  setSceneReady: (v: boolean) => void
  allReady: boolean
}

const LoadingContext = createContext<LoadingState>({
  contentReady: false,
  setContentReady: () => {},
  sceneReady: false,
  setSceneReady: () => {},
  allReady: false,
})

export function useLoading() {
  return useContext(LoadingContext)
}

export function LoadingProvider({ children }: { children: ReactNode }) {
  const [contentReady, setContentReady] = useState(false)
  const [sceneReady, setSceneReady] = useState(false)
  const handleSetContentReady = useCallback((v: boolean) => setContentReady(v), [])
  const handleSetSceneReady = useCallback((v: boolean) => setSceneReady(v), [])

  useEffect(() => {
    const timer = setTimeout(() => setContentReady(true), 300)
    return () => clearTimeout(timer)
  }, [])

  return (
    <LoadingContext.Provider
      value={{
        contentReady,
        setContentReady: handleSetContentReady,
        sceneReady,
        setSceneReady: handleSetSceneReady,
        allReady: contentReady && sceneReady,
      }}
    >
      {children}
    </LoadingContext.Provider>
  )
}
