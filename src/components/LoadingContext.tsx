"use client"

import { createContext, useContext, useState, useCallback, type ReactNode } from "react"

interface LoadingState {
  sceneReady: boolean
  texturesReady: boolean
  setSceneReady: (v: boolean) => void
  setTexturesReady: (v: boolean) => void
  allReady: boolean
}

const LoadingContext = createContext<LoadingState>({
  sceneReady: false,
  texturesReady: false,
  setSceneReady: () => {},
  setTexturesReady: () => {},
  allReady: false,
})

export function useLoading() {
  return useContext(LoadingContext)
}

export function LoadingProvider({ children }: { children: ReactNode }) {
  const [sceneReady, setSceneReady] = useState(false)
  const [texturesReady, setTexturesReady] = useState(false)

  const handleSetSceneReady = useCallback((v: boolean) => setSceneReady(v), [])
  const handleSetTexturesReady = useCallback((v: boolean) => setTexturesReady(v), [])

  return (
    <LoadingContext.Provider
      value={{
        sceneReady,
        texturesReady,
        setSceneReady: handleSetSceneReady,
        setTexturesReady: handleSetTexturesReady,
        allReady: sceneReady && texturesReady,
      }}
    >
      {children}
    </LoadingContext.Provider>
  )
}
