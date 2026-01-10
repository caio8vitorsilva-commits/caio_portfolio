import * as React from "react";
import { cn } from "@/lib/utils";

const Footer = React.forwardRef<HTMLElement, React.HTMLAttributes<HTMLElement>>(
  ({ className, ...props }, ref) => {
    return (
      <footer
        ref={ref}
        className={cn("py-8 px-6 md:px-12 border-t border-border", className)}
        {...props}
      >
        <div className="max-w-7xl mx-auto flex items-center justify-center">
          <p className="text-muted-foreground text-sm">
            © 2025 Caio Vitor. Todos os direitos reservados.
          </p>
        </div>
      </footer>
    );
  }
);
Footer.displayName = "Footer";

export default Footer;
