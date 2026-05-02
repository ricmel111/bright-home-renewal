import { Link } from "@tanstack/react-router";
import { Phone, Mail, MapPin } from "lucide-react";
import logo from "@/assets/logo-lyttle.png";
import { Reveal } from "@/components/site/Reveal";

export function Footer() {
  return (
    <footer className="border-t border-border mt-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-10 py-16 grid gap-12 md:grid-cols-4">
        <div className="md:col-span-2">
          <Reveal direction="up" delay={0.1}>
            <div className="flex items-center gap-2.5">
              <img src={logo} alt="Lyttle Smart Homes logo" className="h-10 w-auto object-contain" />
            </div>
            <p className="mt-5 max-w-md text-sm text-muted-foreground leading-relaxed">
              Qualified Loxone Gold Partner and smart home installer based in Glenarm, serving all of Northern Ireland and the Republic of Ireland.
            </p>
          </Reveal>
        </div>

        <div>
          <Reveal direction="up" delay={0.2}>
            <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground">Visit</p>
            <ul className="mt-4 space-y-2.5 text-sm">
              <li><Link to="/about" className="hover:text-primary transition">About</Link></li>
              <li><Link to="/services" className="hover:text-primary transition">Services</Link></li>
              <li><Link to="/reviews" className="hover:text-primary transition">Reviews</Link></li>
              <li><Link to="/contact" className="hover:text-primary transition">Contact</Link></li>
            </ul>
          </Reveal>
        </div>

        <div>
          <Reveal direction="up" delay={0.3}>
            <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground">Reach us</p>
            <ul className="mt-4 space-y-2.5 text-sm text-muted-foreground">
              <li className="flex items-center gap-2"><Phone className="h-3.5 w-3.5" /> +44 7447 089033</li>
              <li className="flex items-center gap-2"><Mail className="h-3.5 w-3.5" /> hello@lyttlesmarthomes.co.uk</li>
              <li className="flex items-center gap-2"><MapPin className="h-3.5 w-3.5" /> Glenarm, Northern Ireland</li>
            </ul>
          </Reveal>
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
