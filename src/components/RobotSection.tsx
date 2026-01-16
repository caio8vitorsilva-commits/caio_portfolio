import { SplineScene } from "@/components/ui/splite";
import { Card } from "@/components/ui/card";
import { useState, useEffect } from "react";

export function RobotSection() {
  const [showRobot, setShowRobot] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // Check if mobile
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    checkMobile();
    window.addEventListener('resize', checkMobile);
    
    // Delay loading for better performance
    const timer = setTimeout(() => setShowRobot(true), 500);
    
    return () => {
      window.removeEventListener('resize', checkMobile);
      clearTimeout(timer);
    };
  }, []);

  return (
    <section className="w-full py-12 sm:py-16 md:py-24 px-4 sm:px-6 md:px-12 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <Card className="w-full bg-black/[0.96] relative overflow-hidden">
          
          <div className="flex flex-col md:flex-row">
            {/* Left content */}
            <div className="flex-1 p-5 sm:p-6 md:p-8 relative z-10 flex flex-col justify-center">
              <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 leading-tight">
                Criatividade & Tecnologia
              </h2>
              <p className="mt-3 text-neutral-300 max-w-lg text-xs sm:text-sm md:text-base leading-relaxed">
                Trago sua interface para a vida com cenas 3D impressionantes. 
                Crio experiências imersivas que capturam a atenção e aprimoram seu design.
              </p>
            </div>

            {/* Right content - 3D Robot or Mobile Placeholder */}
            <div className="flex-1 relative h-[200px] sm:h-[250px] md:h-[350px] lg:h-[400px]">
              {showRobot && !isMobile ? (
                <SplineScene 
                  scene="https://prod.spline.design/kZDDjO5HuC9GJUM2/scene.splinecode"
                  className="w-full h-full"
                />
              ) : (
                <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-neutral-900 to-black rounded-b-lg md:rounded-b-none md:rounded-r-lg">
                  {isMobile ? (
                    <div className="text-center p-4">
                      <div className="w-12 h-12 sm:w-14 sm:h-14 mx-auto mb-3 rounded-full bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center">
                        <span className="text-xl sm:text-2xl">🤖</span>
                      </div>
                      <p className="text-neutral-400 text-xs sm:text-sm">
                        Visualização 3D disponível em desktop
                      </p>
                    </div>
                  ) : (
                    <div className="w-6 h-6 border-2 border-neutral-600 border-t-neutral-300 rounded-full animate-spin" />
                  )}
                </div>
              )}
            </div>
          </div>
        </Card>
      </div>
    </section>
  );
}
