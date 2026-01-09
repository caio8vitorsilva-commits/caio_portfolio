import React from 'react';
import { cn } from '@/lib/utils';

interface IlluminatedHeroProps {
  onComplete?: () => void;
}

export function IlluminatedHero({ onComplete }: IlluminatedHeroProps) {
  React.useEffect(() => {
    const timer = setTimeout(() => {
      onComplete?.();
    }, 3500);
    return () => clearTimeout(timer);
  }, [onComplete]);

  return (
    <div className="fixed inset-0 z-50 flex min-h-screen w-full flex-col items-center justify-center overflow-hidden bg-background">
      {/* Background glow effects */}
      <div className="pointer-events-none absolute inset-0">
        <div
          className="absolute left-1/2 top-0 h-[600px] w-[800px] -translate-x-1/2 rounded-full bg-foreground/10 blur-[120px]"
          style={{
            animation: 'onloadbgt 1.5s ease-out forwards',
          }}
        />
        <div
          className="absolute bottom-0 left-1/2 h-[600px] w-[800px] -translate-x-1/2 rounded-full bg-foreground/10 blur-[120px]"
          style={{
            animation: 'onloadbgb 1.5s ease-out forwards',
          }}
        />
      </div>

      {/* Content */}
      <div
        className="relative z-10 flex flex-col items-center px-6 text-center"
        style={{
          animation: 'onloadopacity 1.2s ease-out forwards',
        }}
      >
        <p className="mb-4 text-sm font-medium uppercase tracking-widest text-muted-foreground">
          Portfólio
        </p>

        <h1 className="font-heading text-4xl font-bold leading-tight tracking-tight md:text-6xl lg:text-7xl">
          <span className="text-foreground">Bem-vindo ao meu portfólio.</span>
          <br />
          <span className="relative inline-block">
            <span className="relative z-10 bg-gradient-to-b from-foreground via-foreground/90 to-muted-foreground bg-clip-text text-transparent">
              Onde ideias ganham forma.
            </span>
            <span className="absolute inset-0 bg-gradient-to-r from-foreground/20 via-foreground/10 to-transparent blur-xl" />
          </span>
        </h1>

        <p className="mt-6 max-w-xl text-lg text-muted-foreground md:text-xl">
          Ideias transformadas em experiências visuais com propósito.
        </p>

        {/* Loading indicator */}
        <div className="mt-12 flex flex-col items-center gap-3">
          <div className="h-1 w-32 overflow-hidden rounded-full bg-muted">
            <div
              className="h-full bg-foreground"
              style={{
                animation: 'loadingBar 3s ease-out forwards',
              }}
            />
          </div>
          <span className="text-xs text-muted-foreground">Carregando...</span>
        </div>
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
