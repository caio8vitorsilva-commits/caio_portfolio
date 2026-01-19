import React from 'react';
import { cn } from '@/lib/utils';

interface IlluminatedHeroProps {
  onComplete?: () => void;
}

export function IlluminatedHero({ onComplete }: IlluminatedHeroProps) {
  // Removed auto-complete timer - user must click button

  return (
    <div className="fixed inset-0 z-50 flex min-h-screen w-full flex-col items-center justify-center overflow-hidden bg-black">
      {/* Background glow effects */}
      <div className="pointer-events-none absolute inset-0">
        <div
          className="absolute left-1/2 top-0 h-[600px] w-[800px] -translate-x-1/2 rounded-full bg-white/5 blur-[120px]"
          style={{
            animation: 'onloadbgt 1.5s ease-out forwards',
          }}
        />
        <div
          className="absolute bottom-0 left-1/2 h-[600px] w-[800px] -translate-x-1/2 rounded-full bg-white/5 blur-[120px]"
          style={{
            animation: 'onloadbgb 1.5s ease-out forwards',
          }}
        />
      </div>

      {/* Content */}
      <div
        className="relative z-10 flex flex-col items-center px-4 sm:px-6 text-center max-w-4xl mx-auto"
        style={{
          animation: 'onloadopacity 1.2s ease-out forwards',
        }}
      >
        <p className="mb-4 text-xs sm:text-sm font-medium uppercase tracking-widest text-muted-foreground">
          PORTFÓLIO
        </p>

        <h1 className="font-heading text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-bold uppercase leading-tight tracking-tight">
          <span className="text-foreground">BEM-VINDO AO MEU PORTFÓLIO</span>
          <br />
          <span className="relative inline-block mt-2">
            <span className="relative z-10 bg-gradient-to-b from-foreground via-foreground/90 to-muted-foreground bg-clip-text text-transparent">
              ONDE IDEIAS GANHAM FORMA
            </span>
          </span>
        </h1>

        <p className="mt-4 sm:mt-6 max-w-xl text-sm sm:text-base md:text-lg text-muted-foreground px-4">
          Ideias transformadas em experiências visuais com propósito
        </p>

        {/* CTA Button */}
        <button
          onClick={() => onComplete?.()}
          className="mt-8 sm:mt-12 group relative overflow-hidden rounded-full bg-foreground px-6 sm:px-8 py-2.5 sm:py-3 text-xs sm:text-sm font-medium uppercase tracking-wider text-background transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-foreground/20"
        >
          <span className="relative z-10">Explorar</span>
          <div className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-background/20 to-transparent transition-transform duration-500 group-hover:translate-x-full" />
        </button>
      </div>

      {/* Grid pattern overlay */}
      <div className="pointer-events-none absolute inset-0 opacity-[0.03]">
        <svg className="h-full w-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern
              id="grid"
              width="40"
              height="40"
              patternUnits="userSpaceOnUse"
            >
              <path
                d="M 40 0 L 0 0 0 40"
                fill="none"
                stroke="currentColor"
                strokeWidth="1"
              />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid)" />
        </svg>
      </div>
    </div>
  );
}
