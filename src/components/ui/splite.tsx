interface SplineSceneProps {
  scene: string
  className?: string
}

export function SplineScene({ scene, className }: SplineSceneProps) {
  // Convert splinecode URL to embed URL
  const embedUrl = scene.replace('scene.splinecode', 'scene.splinecode');
  
  return (
    <div className={`w-full h-full ${className || ''}`}>
      <iframe 
        src={`https://my.spline.design/robotfollowcursorforlandingpage-kZDDjO5HuC9GJUM2/`}
        frameBorder="0"
        width="100%"
        height="100%"
        style={{ border: 'none' }}
        allow="autoplay; fullscreen"
        title="3D Robot"
      />
    </div>
  )
}
