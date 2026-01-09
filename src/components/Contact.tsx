import * as React from "react";
import { Mail, Linkedin, Github, ArrowUpRight } from "lucide-react";
import { cn } from "@/lib/utils";

const Contact = React.forwardRef<HTMLElement, React.HTMLAttributes<HTMLElement>>(
  ({ className, ...props }, ref) => {
    const links = [
      {
        icon: Mail,
        label: "Email",
        href: "mailto:contato@caiovitor.dev",
        text: "contato@caiovitor.dev",
      },
      { icon: Linkedin, label: "LinkedIn", href: "#", text: "/in/caiovitor" },
      { icon: Github, label: "GitHub", href: "#", text: "/caiovitor" },
    ];

    return (
      <section
        ref={ref}
        id="contato"
        className={cn("py-32 px-6 md:px-12", className)}
        {...props}
      >
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-16">
            <div>
              <p className="section-number mb-4">04/ CONTATO</p>
              <h2 className="font-heading text-4xl md:text-6xl font-bold mb-8 leading-tight">
                Vamos construir algo
                <span className="text-muted-foreground"> incrível juntos?</span>
              </h2>
              <p className="text-muted-foreground text-lg max-w-md">
                Estou disponível para oportunidades de trabalho, projetos freelance
                ou apenas para trocar uma ideia sobre tecnologia.
              </p>
            </div>

            <div className="space-y-6">
              {links.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="group flex items-center justify-between p-6 border border-border rounded-lg hover:bg-card transition-colors"
                >
                  <div className="flex items-center gap-4">
                    <link.icon className="w-6 h-6 text-muted-foreground group-hover:text-foreground transition-colors" />
                    <div>
                      <p className="text-sm text-muted-foreground">{link.label}</p>
                      <p className="text-foreground font-medium">{link.text}</p>
                    </div>
                  </div>
                  <ArrowUpRight className="w-5 h-5 text-muted-foreground group-hover:text-foreground group-hover:translate-x-1 group-hover:-translate-y-1 transition-all" />
                </a>
              ))}
            </div>
          </div>
        </div>
      </section>
    );
  }
);
Contact.displayName = "Contact";

export default Contact;
