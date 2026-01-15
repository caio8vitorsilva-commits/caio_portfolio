'use client'

import { Suspense, lazy, useCallback, memo } from 'react'
import type { Application } from '@splinetool/runtime'

const Spline = lazy(() => import('@splinetool/react-spline'))

interface SplineSceneProps {
  scene: string
  className?: string
}

export const SplineScene = memo(function SplineScene({ scene, className }: SplineSceneProps) {
  const onLoad = useCallback((splineApp: Application) => {
    if (splineApp) {
      const canvas = splineApp.canvas
      if (canvas) {
        // Apply GPU acceleration
        canvas.style.willChange = 'contents'
        canvas.style.transform = 'translate3d(0,0,0)'
        canvas.style.backfaceVisibility = 'hidden'
        
        // Force lower quality for better FPS
        const dpr = Math.min(window.devicePixelRatio, 1)
        canvas.width = canvas.clientWidth * dpr
        canvas.height = canvas.clientHeight * dpr
        
        // Disable antialiasing for performance
        canvas.style.imageRendering = 'optimizeSpeed'
      }
    }
  }, [])

  return (
    <div 
      className={className} 
      style={{ 
        contain: 'strict',
        isolation: 'isolate',
        transform: 'translateZ(0)',
        willChange: 'transform'
      }}
    >
      <Suspense 
        fallback={
          <div className="w-full h-full flex items-center justify-center bg-black">
            <div className="w-8 h-8 border-2 border-neutral-600 border-t-neutral-300 rounded-full animate-spin" />
          </div>
        }
      >
        <Spline
          scene={scene}
          className="w-full h-full"
          onLoad={onLoad}
        />
      </Suspense>
    </div>
  )
})
