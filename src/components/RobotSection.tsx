'use client'

import { SplineScene } from "@/components/ui/splite";
import { Card } from "@/components/ui/card";
import { Spotlight } from "@/components/ui/spotlight";

export function RobotSection() {
  return (
    <section className="py-20 px-6 md:px-12">
      <div className="max-w-7xl mx-auto">
        <Card className="w-full min-h-[500px] bg-card/50 backdrop-blur-sm relative overflow-hidden border-border">
          <Spotlight
            className="-top-40 left-0 md:left-60 md:-top-20"
            fill="white"
          />
          
          <div className="flex flex-col md:flex-row h-full min-h-[500px]">
            {/* Left content */}
            <div className="flex-1 p-8 md:p-12 relative z-10 flex flex-col justify-center">
              <h2 className="text-4xl md:text-5xl font-heading font-bold bg-clip-text text-transparent bg-gradient-to-b from-foreground to-muted-foreground">
                Inovação &amp; Tecnologia
              </h2>
              <p className="mt-6 text-muted-foreground max-w-lg text-lg leading-relaxed">
                Unindo criatividade e código para construir experiências digitais únicas. 
                Pronto para transformar ideias em soluções tecnológicas modernas e eficientes.
              </p>
            </div>

            {/* Right content - 3D Robot */}
            <div className="flex-1 relative min-h-[320px] md:min-h-[500px] overflow-hidden">
              <SplineScene
                scene="https://prod.spline.design/kZDDjO5HuC9GJUM2/scene.splinecode"
                className="absolute inset-0"
              />
            </div>
          </div>
        </Card>
      </div>
    </section>
  );
}

export default RobotSection;
