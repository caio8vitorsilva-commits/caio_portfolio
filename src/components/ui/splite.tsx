'use client'

import { Suspense, lazy, useCallback, useEffect, useRef, memo } from 'react'
import type { Application } from '@splinetool/runtime'

const Spline = lazy(() => import('@splinetool/react-spline'))

interface SplineSceneProps {
  scene: string
  className?: string
}

export const SplineScene = memo(function SplineScene({ scene, className }: SplineSceneProps) {
  const splineRef = useRef<Application | null>(null)
  const rafRef = useRef<number | null>(null)

  const onLoad = useCallback((splineApp: Application) => {
    if (splineApp) {
      splineRef.current = splineApp
      
      // Optimize canvas for performance
      const canvas = splineApp.canvas
      if (canvas) {
        // Limit pixel ratio to 1.5 for better performance
        const ctx = canvas.getContext('webgl2') || canvas.getContext('webgl')
        if (ctx) {
          // Enable performance optimizations
          canvas.style.willChange = 'transform'
          canvas.style.transform = 'translateZ(0)'
        }
      }

      // Use requestAnimationFrame for smooth 120fps rendering
      const animate = () => {
        rafRef.current = requestAnimationFrame(animate)
      }
      animate()
    }
  }, [])

  // Cleanup on unmount
  useEffect(() => {
    return () => {
      if (rafRef.current) {
        cancelAnimationFrame(rafRef.current)
      }
    }
  }, [])

  return (
    <Suspense 
      fallback={
        <div className="w-full h-full flex items-center justify-center">
          <div className="w-8 h-8 border-2 border-foreground/20 border-t-foreground rounded-full animate-spin" />
        </div>
      }
    >
      <Spline
        scene={scene}
        className={className}
        onLoad={onLoad}
      />
    </Suspense>
  )
})
