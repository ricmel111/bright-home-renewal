import { Link } from "@tanstack/react-router";
import { useState } from "react";
import { Menu, X, Phone } from "lucide-react";
import logo from "@/assets/logo-lyttle.png";

const nav = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/services", label: "Services" },
  { to: "/reviews", label: "Reviews" },
  { to: "/contact", label: "Contact" },
] as const;

export function Header() {
  const [open, setOpen] = useState(false);
  return (
    <header className="fixed inset-x-0 top-0 z-50 backdrop-blur-xl bg-background/60 border-b border-border">
      <div className="mx-auto max-w-7xl px-6 lg:px-10 h-16 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2.5 group">
          <img src={logo} alt="Lyttle Smart Homes logo" className="h-8 w-auto object-contain" />
          <span className="text-sm font-medium tracking-wide hidden sm:inline">Lyttle <span className="text-muted-foreground">Smart Homes</span></span>
        </Link>

        <nav className="hidden md:flex items-center gap-1">
          {nav.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              className="px-3 py-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
              activeProps={{ className: "px-3 py-2 text-sm text-foreground" }}
              activeOptions={{ exact: true }}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="hidden md:flex items-center gap-3">
          <a href="tel:+447447089033" className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors">
            <Phone className="h-3.5 w-3.5" /> +44 7447 089033
          </a>
          <Link to="/contact" className="inline-flex items-center rounded-full bg-gradient-accent px-4 py-2 text-sm font-medium text-primary-foreground shadow-glow hover:opacity-90 transition">
            Get a quote
          </Link>
        </div>

        <button onClick={() => setOpen(!open)} className="md:hidden p-2 -mr-2 text-foreground" aria-label="Menu">
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {open && (
        <div className="md:hidden border-t border-border bg-background/95 backdrop-blur-xl">
          <div className="px-6 py-4 flex flex-col gap-1">
            {nav.map((item) => (
              <Link key={item.to} to={item.to} onClick={() => setOpen(false)} className="py-2 text-sm text-muted-foreground hover:text-foreground">
                {item.label}
              </Link>
            ))}
            <Link to="/contact" onClick={() => setOpen(false)} className="mt-3 inline-flex items-center justify-center rounded-full bg-gradient-accent px-4 py-2.5 text-sm font-medium text-primary-foreground">
              Get a quote
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
