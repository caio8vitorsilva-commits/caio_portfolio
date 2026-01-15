'use client'

import { Suspense, lazy, useCallback, useEffect, useRef, memo } from 'react'
import type { Application } from '@splinetool/runtime'

const Spline = lazy(() => import('@splinetool/react-spline'))

interface SplineSceneProps {
  scene: string
  className?: string
}

export const SplineScene = memo(function SplineScene({ scene, className }: SplineSceneProps) {
  const containerRef = useRef<HTMLDivElement>(null)

  const onLoad = useCallback((splineApp: Application) => {
    if (splineApp) {
      const canvas = splineApp.canvas
      if (canvas) {
        // Force high performance rendering
        canvas.style.willChange = 'contents'
        canvas.style.transform = 'translate3d(0,0,0)'
        canvas.style.backfaceVisibility = 'hidden'
        
        // Get WebGL context with high performance settings
        const gl = canvas.getContext('webgl2', {
          antialias: false,
          powerPreference: 'high-performance',
          desynchronized: true,
          preserveDrawingBuffer: false,
          failIfMajorPerformanceCaveat: false
        }) || canvas.getContext('webgl', {
          antialias: false,
          powerPreference: 'high-performance',
          desynchronized: true,
          preserveDrawingBuffer: false
        })
        
        // Set lower pixel ratio for better performance
        const dpr = Math.min(window.devicePixelRatio, 1.5)
        canvas.width = canvas.clientWidth * dpr
        canvas.height = canvas.clientHeight * dpr
      }
    }
  }, [])

  // Apply GPU acceleration to container
  useEffect(() => {
    if (containerRef.current) {
      containerRef.current.style.transform = 'translateZ(0)'
      containerRef.current.style.willChange = 'transform'
    }
  }, [])

  return (
    <div ref={containerRef} className={`${className} gpu-accelerated`} style={{ 
      contain: 'strict',
      isolation: 'isolate'
    }}>
      <Suspense 
        fallback={
          <div className="w-full h-full flex items-center justify-center">
            <div className="w-8 h-8 border-2 border-foreground/20 border-t-foreground rounded-full animate-spin" />
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
