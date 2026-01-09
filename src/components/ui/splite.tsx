import "@splinetool/viewer";
import React from "react";
import { cn } from "@/lib/utils";

declare global {
  namespace JSX {
    interface IntrinsicElements {
      "spline-viewer": React.DetailedHTMLProps<
        React.HTMLAttributes<HTMLElement> & {
          url: string;
        },
        HTMLElement
      >;
    }
  }
}

interface SplineSceneProps {
  scene: string;
  className?: string;
}

export function SplineScene({ scene, className }: SplineSceneProps) {
  return (
    <div className={cn("relative w-full h-full overflow-hidden", className)}>
      <spline-viewer url={scene} className="spline-viewer w-full h-full" />
    </div>
  );
}

