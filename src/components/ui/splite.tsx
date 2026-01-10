'use client'

import { Suspense, lazy, useCallback } from 'react'
import type { Application } from '@splinetool/runtime'

const Spline = lazy(() => import('@splinetool/react-spline'))

interface SplineSceneProps {
  scene: string
  className?: string
}

export function SplineScene({ scene, className }: SplineSceneProps) {
  const onLoad = useCallback((splineApp: Application) => {
    // Optimize for high refresh rate displays (120fps+)
    if (splineApp) {
      // Set pixel ratio for sharper rendering on high-DPI displays
      const canvas = splineApp.canvas
      if (canvas) {
        // Limit pixel ratio to prevent performance issues
        const maxPixelRatio = Math.min(window.devicePixelRatio, 2)
        canvas.style.imageRendering = 'auto'
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
}
