import { Link } from "@tanstack/react-router";
import { Phone, Mail, MapPin } from "lucide-react";

export function Footer() {
  return (
    <footer className="border-t border-border mt-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-10 py-16 grid gap-12 md:grid-cols-4">
        <div className="md:col-span-2">
          <div className="flex items-center gap-2.5">
            <span className="relative inline-flex h-8 w-8 items-center justify-center rounded-md bg-gradient-accent">
              <span className="absolute inset-0.5 rounded-[5px] bg-background" />
              <span className="relative font-display text-base">L</span>
            </span>
            <span className="text-sm font-medium">Lyttle Smart Homes</span>
          </div>
          <p className="mt-5 max-w-md text-sm text-muted-foreground leading-relaxed">
            Qualified Loxone Gold Partner and smart home installer based in Glenarm, serving all of Northern Ireland and the Republic of Ireland.
          </p>
        </div>

        <div>
          <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground">Visit</p>
          <ul className="mt-4 space-y-2.5 text-sm">
            <li><Link to="/about" className="hover:text-primary transition">About</Link></li>
            <li><Link to="/services" className="hover:text-primary transition">Services</Link></li>
            <li><Link to="/reviews" className="hover:text-primary transition">Reviews</Link></li>
            <li><Link to="/contact" className="hover:text-primary transition">Contact</Link></li>
          </ul>
        </div>

        <div>
          <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground">Reach us</p>
          <ul className="mt-4 space-y-2.5 text-sm text-muted-foreground">
            <li className="flex items-center gap-2"><Phone className="h-3.5 w-3.5" /> +44 7447 089033</li>
            <li className="flex items-center gap-2"><Mail className="h-3.5 w-3.5" /> hello@lyttlesmarthomes.co.uk</li>
            <li className="flex items-center gap-2"><MapPin className="h-3.5 w-3.5" /> Glenarm, Northern Ireland</li>
          </ul>
        </div>
      </div>
      <div className="border-t border-border">
        <div className="mx-auto max-w-7xl px-6 lg:px-10 py-6 flex flex-col md:flex-row gap-3 items-center justify-between text-xs text-muted-foreground">
          <p>© {new Date().getFullYear()} Lyttle Smart Homes Ltd. All rights reserved.</p>
          <p>Loxone Gold Partner · Verified by Expert Trades</p>
        </div>
      </div>
    </footer>
  );
}
