"use client"

import { createContext, useContext, useState, useCallback, useEffect, type ReactNode } from "react"

interface LoadingState {
  sceneReady: boolean
  texturesReady: boolean
  contentReady: boolean
  setSceneReady: (v: boolean) => void
  setTexturesReady: (v: boolean) => void
  setContentReady: (v: boolean) => void
  allReady: boolean
}

const LoadingContext = createContext<LoadingState>({
  sceneReady: false,
  texturesReady: false,
  contentReady: false,
  setSceneReady: () => {},
  setTexturesReady: () => {},
  setContentReady: () => {},
  allReady: false,
})

export function useLoading() {
  return useContext(LoadingContext)
}

export function LoadingProvider({ children }: { children: ReactNode }) {
  const [sceneReady, setSceneReady] = useState(false)
  const [texturesReady, setTexturesReady] = useState(false)
  const [contentReady, setContentReady] = useState(false)

  const handleSetSceneReady = useCallback((v: boolean) => setSceneReady(v), [])
  const handleSetTexturesReady = useCallback((v: boolean) => setTexturesReady(v), [])
  const handleSetContentReady = useCallback((v: boolean) => setContentReady(v), [])

  // Auto-mark content ready after 1.5s max
  useEffect(() => {
    const timer = setTimeout(() => {
      setContentReady(true)
    }, 1500)
    return () => clearTimeout(timer)
  }, [])

  return (
    <LoadingContext.Provider
      value={{
        sceneReady,
        texturesReady,
        contentReady,
        setSceneReady: handleSetSceneReady,
        setTexturesReady: handleSetTexturesReady,
        setContentReady: handleSetContentReady,
        allReady: contentReady,
      }}
    >
      {children}
    </LoadingContext.Provider>
  )
}
