import { createFileRoute, Link } from "@tanstack/react-router";
import { Layout } from "@/components/site/Layout";
import { Reveal } from "@/components/site/Reveal";
import { ArrowUpRight } from "lucide-react";
import owner from "@/assets/owner-peter.png";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About Peter Lyttle — Lyttle Smart Homes" },
      { name: "description", content: "Meet Peter Lyttle, qualified electrical engineer and Loxone Gold Partner behind Lyttle Smart Homes." },
      { property: "og:title", content: "About — Lyttle Smart Homes" },
      { property: "og:description", content: "Engineering precision, hospitality at heart." },
    ],
  }),
  component: About,
});

function About() {
  return (
    <Layout>
      <section className="mx-auto max-w-5xl px-6 lg:px-10 pt-24 pb-16">
        <Reveal direction="up" delay={0.1}>
          <p className="text-xs uppercase tracking-[0.25em] text-primary">About the studio</p>
        </Reveal>
        <Reveal direction="up" delay={0.2}>
          <h1 className="mt-6 font-display text-5xl lg:text-7xl leading-[0.95] text-balance">
            A studio born on the factory floor.
          </h1>
        </Reveal>
        <Reveal direction="up" delay={0.3}>
          <p className="mt-8 max-w-2xl text-lg text-muted-foreground leading-relaxed">
            Lyttle Smart Homes Ltd is the work of Peter Lyttle — a qualified electrical and electronic engineer who treats every home like a precision build.
          </p>
        </Reveal>
      </section>

      <section className="mx-auto max-w-6xl px-6 lg:px-10 py-16 grid lg:grid-cols-12 gap-12">
        <div className="lg:col-span-5">
          <Reveal direction="left">
            <div className="relative aspect-[4/5] rounded-2xl overflow-hidden shadow-elevated border border-border bg-surface">
              <img src={owner} alt="Peter Lyttle, founder of Lyttle Smart Homes" className="h-full w-full object-cover object-top" loading="lazy" />
              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-background/90 to-transparent p-5">
                <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground">Founder</p>
                <p className="mt-1 font-display text-2xl text-foreground">Peter Lyttle</p>
                <p className="text-sm text-muted-foreground">Electrical & Electronic Engineer</p>
              </div>
            </div>
          </Reveal>
        </div>
        <div className="lg:col-span-7 space-y-6 text-muted-foreground leading-relaxed">
          <Reveal direction="up" delay={0.1}>
            <p>
              Peter spent years working for some of the largest engineering companies in Northern Ireland — most recently Michelin Tyres in Ballymena. When the plant closed, he saw an opportunity to take everything he'd learned about complex industrial systems and apply it to something far more personal: people's homes.
            </p>
          </Reveal>
          <Reveal direction="up" delay={0.2}>
            <p>
              That engineering DNA is what sets the studio apart. Every cable run is documented. Every scene is calibrated. Every system is tested under real conditions before we hand over the keys.
            </p>
          </Reveal>
          <Reveal direction="up" delay={0.3}>
            <p>
              Based in Glenarm on the Antrim coast, the studio covers the whole of Northern Ireland and the Republic of Ireland. We work with self-builders, architects, electricians and homeowners — anyone who wants their home to feel as considered as it looks.
            </p>
          </Reveal>
          <Reveal direction="up" delay={0.4}>
            <p className="text-foreground">
              The biggest reward, Peter will tell you, is the moment a client walks through their finished home and realises it can do more than they ever expected.
            </p>
          </Reveal>

          <Reveal direction="up" delay={0.5}>
            <div className="pt-6 grid grid-cols-2 gap-px bg-border rounded-xl overflow-hidden border border-border">
              {[
                { k: "Loxone", v: "Gold Partner" },
                { k: "Verified", v: "Expert Trades" },
                { k: "NI + ROI", v: "Coverage area" },
                { k: "10+ yrs", v: "Engineering" },
              ].map((s) => (
                <div key={s.k} className="bg-background p-5">
                  <div className="font-display text-xl text-foreground">{s.k}</div>
                  <div className="text-xs mt-1">{s.v}</div>
                </div>
              ))}
            </div>
          </Reveal>

          <Reveal direction="up" delay={0.6}>
            <div className="pt-4">
              <Link to="/contact" className="inline-flex items-center gap-2 rounded-full bg-gradient-accent px-6 py-3.5 text-sm font-medium text-primary-foreground shadow-glow">
                Work with Peter <ArrowUpRight className="h-4 w-4" />
              </Link>
            </div>
          </Reveal>
        </div>
      </section>
    </Layout>
  );
}
