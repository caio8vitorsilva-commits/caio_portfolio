import { SplineScene } from "@/components/ui/splite";
import { Card } from "@/components/ui/card";
import { useState, useEffect } from "react";

export function RobotSection() {
  const [showRobot, setShowRobot] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    
    const timer = setTimeout(() => setShowRobot(true), 500);
    
    return () => {
      window.removeEventListener('resize', checkMobile);
      clearTimeout(timer);
    };
  }, []);

  // Hide entire section on mobile
  if (isMobile) return null;

  return (
    <section className="w-full py-12 sm:py-16 md:py-24 px-4 sm:px-6 md:px-12 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <Card className="w-full bg-secondary border-border relative overflow-hidden">
          
          <div className="flex flex-col md:flex-row">
            {/* Left content */}
            <div className="flex-1 p-6 sm:p-8 md:p-10 relative z-10 flex flex-col justify-center">
              <p className="section-number mb-3 text-xs sm:text-sm">04/ CRIATIVIDADE</p>
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-foreground leading-tight font-heading">
                Criatividade & <span className="text-muted-foreground">Tecnologia</span>
              </h2>
              <p className="mt-4 text-muted-foreground max-w-lg text-sm sm:text-base leading-relaxed">
                Trago sua interface para a vida com cenas 3D impressionantes. 
                Crio experiências imersivas que capturam a atenção e aprimoram seu design.
              </p>
            </div>

            {/* Right content - 3D Robot */}
            <div className="flex-1 relative h-[350px] lg:h-[450px] bg-background rounded-r-lg">
              {showRobot ? (
                <SplineScene 
                  scene="https://prod.spline.design/kZDDjO5HuC9GJUM2/scene.splinecode"
                  className="w-full h-full"
                />
              ) : (
                <div className="w-full h-full flex items-center justify-center">
                  <div className="w-6 h-6 border-2 border-muted-foreground border-t-foreground rounded-full animate-spin" />
                </div>
              )}
            </div>
          </div>
        </Card>
      </div>
    </section>
  );
}
