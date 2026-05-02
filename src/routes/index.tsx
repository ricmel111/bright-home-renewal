import { createFileRoute, Link } from "@tanstack/react-router";
import { Layout } from "@/components/site/Layout";
import { Reveal } from "@/components/site/Reveal";
import { ArrowUpRight, Sparkles, ShieldCheck, MapPin, Star, Lightbulb, Speaker, Thermometer, Camera, Blinds, Cpu } from "lucide-react";
import hero from "@/assets/hero.jpg";
import control from "@/assets/control.jpg";
import exterior from "@/assets/exterior.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Lyttle Smart Homes — Loxone Gold Partner in Northern Ireland" },
      { name: "description", content: "Qualified smart home installer in Glenarm. Loxone Gold Partner serving Northern Ireland and the Republic of Ireland with lighting, audio, heating and security automation." },
      { property: "og:title", content: "Lyttle Smart Homes — Loxone Gold Partner" },
      { property: "og:description", content: "Beautifully integrated smart homes by Peter Lyttle. Loxone Gold Partner. Northern Ireland & ROI." },
    ],
  }),
  component: Index,
});

const services = [
  { icon: Lightbulb, title: "Intelligent Lighting", desc: "Scenes, circadian rhythms, and presence-aware control." },
  { icon: Thermometer, title: "Heating & Climate", desc: "Room-by-room comfort with measurable energy savings." },
  { icon: Speaker, title: "Multi-room Audio", desc: "Discreet, high-fidelity sound that follows you home." },
  { icon: Blinds, title: "Shading & Blinds", desc: "Automated shading that responds to the sun." },
  { icon: Camera, title: "Security & Access", desc: "Cameras, intercoms and intelligent door entry." },
  { icon: Cpu, title: "Loxone Integration", desc: "A single brain that ties every system together." },
];

function Index() {
  return (
    <Layout>
      {/* HERO */}
      <section className="relative isolate overflow-hidden">
        <div className="absolute inset-0 -z-10">
          <img src={hero} alt="" className="h-full w-full object-cover opacity-60" />
          <div className="absolute inset-0 bg-gradient-to-b from-background/40 via-background/50 to-background" />
          <div className="absolute inset-0 bg-gradient-hero" />
        </div>

        <div className="mx-auto max-w-7xl px-6 lg:px-10 pt-28 pb-32 lg:pt-40 lg:pb-44">
          <Reveal delay={0.1}>
            <div className="flex items-center gap-2 text-xs uppercase tracking-[0.25em] text-muted-foreground">
              <span className="inline-block h-px w-8 bg-primary" />
              Loxone Gold Partner · Est. Glenarm
            </div>
          </Reveal>
          <Reveal delay={0.2}>
            <h1 className="mt-8 max-w-4xl font-display text-5xl sm:text-6xl lg:text-8xl leading-[0.95] text-balance">
              A home that <em className="text-primary not-italic">listens.</em>
              <br />
              A home that <span className="bg-gradient-accent bg-clip-text text-transparent">responds.</span>
            </h1>
          </Reveal>
          <Reveal delay={0.3}>
            <p className="mt-8 max-w-xl text-base sm:text-lg text-muted-foreground leading-relaxed">
              Bespoke smart home design and installation across Northern Ireland and the Republic of Ireland —
              crafted by an electrical engineer who actually answers his phone.
            </p>
          </Reveal>
          <Reveal delay={0.4}>
            <div className="mt-10 flex flex-wrap items-center gap-4">
              <Link to="/contact" className="inline-flex items-center gap-2 rounded-full bg-gradient-accent px-6 py-3.5 text-sm font-medium text-primary-foreground shadow-glow hover:opacity-90 transition">
                Start your project <ArrowUpRight className="h-4 w-4" />
              </Link>
              <Link to="/services" className="inline-flex items-center gap-2 rounded-full border border-border px-6 py-3.5 text-sm hover:bg-surface transition">
                Explore services
              </Link>
            </div>
          </Reveal>

          {/* Stat strip */}
          <Reveal delay={0.5} direction="up">
            <div className="mt-20 grid grid-cols-2 sm:grid-cols-4 gap-px bg-border rounded-2xl overflow-hidden border border-border max-w-3xl">
              {[
                { k: "Gold", v: "Loxone Partner" },
                { k: "10+ yrs", v: "Engineering" },
                { k: "5.0★", v: "Verified reviews" },
                { k: "NI + ROI", v: "Coverage" },
              ].map((s) => (
                <div key={s.k} className="bg-background/80 backdrop-blur p-5">
                  <div className="font-display text-2xl">{s.k}</div>
                  <div className="text-xs text-muted-foreground mt-1">{s.v}</div>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* ABOUT */}
      <section className="mx-auto max-w-7xl px-6 lg:px-10 py-24 lg:py-32 grid lg:grid-cols-12 gap-12 items-center">
        <div className="lg:col-span-5">
          <Reveal direction="left">
            <div className="relative aspect-[4/5] rounded-2xl overflow-hidden bg-surface shadow-elevated">
              <img src={control} alt="Smart home control panel" className="h-full w-full object-cover" loading="lazy" />
              <div className="absolute bottom-4 left-4 right-4 rounded-xl bg-background/80 backdrop-blur-md border border-border p-4">
                <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground">Founder</p>
                <p className="mt-1 font-display text-lg">Peter Lyttle</p>
                <p className="text-xs text-muted-foreground">Electrical & Electronic Engineer</p>
              </div>
            </div>
          </Reveal>
        </div>
        <div className="lg:col-span-7">
          <Reveal direction="up" delay={0.1}>
            <p className="text-xs uppercase tracking-[0.25em] text-primary">About the studio</p>
            <h2 className="mt-4 font-display text-4xl lg:text-5xl text-balance">
              Engineering precision, hospitality at heart.
            </h2>
          </Reveal>
          <Reveal direction="up" delay={0.2}>
            <p className="mt-6 text-muted-foreground leading-relaxed">
              Lyttle Smart Homes was founded by Peter Lyttle, a qualified electrical and electronic engineer who has worked with some of Northern Ireland's largest engineering firms. After years on the factory floor, he retrained as a smart home installer and brought that same rigour into people's homes.
            </p>
          </Reveal>
          <Reveal direction="up" delay={0.3}>
            <p className="mt-4 text-muted-foreground leading-relaxed">
              The biggest reward, he'll tell you, is walking back through a finished home and seeing a client realise their house can do more than they ever imagined.
            </p>
            <Link to="/about" className="mt-8 inline-flex items-center gap-2 text-sm text-primary hover:gap-3 transition-all">
              Read the full story <ArrowUpRight className="h-4 w-4" />
            </Link>
          </Reveal>
        </div>
      </section>

      {/* SERVICES */}
      <section className="mx-auto max-w-7xl px-6 lg:px-10 py-24 lg:py-32">
        <Reveal direction="up">
          <div className="flex items-end justify-between flex-wrap gap-6">
            <div>
              <p className="text-xs uppercase tracking-[0.25em] text-primary">What we do</p>
              <h2 className="mt-4 font-display text-4xl lg:text-5xl max-w-2xl text-balance">
                Every system, one elegant interface.
              </h2>
            </div>
            <Link to="/services" className="text-sm text-muted-foreground hover:text-foreground inline-flex items-center gap-1.5">
              All services <ArrowUpRight className="h-3.5 w-3.5" />
            </Link>
          </div>
        </Reveal>

        <div className="mt-14 grid sm:grid-cols-2 lg:grid-cols-3 gap-px bg-border rounded-2xl overflow-hidden border border-border">
          {services.map((s, i) => (
            <Reveal key={s.title} delay={i * 0.1} direction="up" className="h-full">
              <div className="group h-full bg-background p-8 hover:bg-surface transition-colors">
                <s.icon className="h-6 w-6 text-primary" strokeWidth={1.5} />
                <h3 className="mt-6 font-display text-2xl">{s.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{s.desc}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* WHY US — split image */}
      <section className="relative">
        <div className="mx-auto max-w-7xl px-6 lg:px-10 py-24 lg:py-32 grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <Reveal direction="up">
              <p className="text-xs uppercase tracking-[0.25em] text-primary">Why choose us</p>
              <h2 className="mt-4 font-display text-4xl lg:text-5xl text-balance">
                Local, accountable, properly qualified.
              </h2>
            </Reveal>
            <ul className="mt-10 space-y-8">
              {[
                { icon: MapPin, title: "Based in Glenarm", desc: "Covering Northern Ireland and the Republic of Ireland." },
                { icon: ShieldCheck, title: "Properly qualified", desc: "Loxone Gold Partner with engineering credentials behind every install." },
                { icon: Sparkles, title: "Genuine aftercare", desc: "We stay involved long after the last cable is dressed." },
              ].map((f, i) => (
                <Reveal key={f.title} delay={0.2 + i * 0.1} direction="up">
                  <li className="flex gap-5">
                    <span className="shrink-0 inline-flex h-10 w-10 items-center justify-center rounded-lg border border-border bg-surface">
                      <f.icon className="h-4 w-4 text-primary" />
                    </span>
                    <div>
                      <p className="font-medium">{f.title}</p>
                      <p className="mt-1 text-sm text-muted-foreground">{f.desc}</p>
                    </div>
                  </li>
                </Reveal>
              ))}
            </ul>
          </div>
          <Reveal direction="right">
            <div className="relative aspect-[5/6] rounded-2xl overflow-hidden shadow-elevated">
              <img src={exterior} alt="Modern home exterior at dusk" className="h-full w-full object-cover" loading="lazy" />
              <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent" />
            </div>
          </Reveal>
        </div>
      </section>

      {/* TESTIMONIAL pull-quote */}
      <section className="mx-auto max-w-5xl px-6 lg:px-10 py-24 lg:py-32 text-center">
        <Reveal direction="up">
          <div className="flex justify-center gap-1 text-accent">
            {Array.from({ length: 5 }).map((_, i) => <Star key={i} className="h-4 w-4 fill-current" />)}
          </div>
          <blockquote className="mt-8 font-display text-3xl sm:text-4xl lg:text-5xl leading-[1.15] text-balance">
            “Lightning had damaged my system and despite trying for over a year the original electrician couldn't fix it. Within an hour Peter knew the issue.”
          </blockquote>
          <p className="mt-8 text-sm text-muted-foreground">Verified Loxone client</p>
          <Link to="/reviews" className="mt-10 inline-flex items-center gap-2 rounded-full border border-border px-5 py-3 text-sm hover:bg-surface transition">
            Read all reviews <ArrowUpRight className="h-4 w-4" />
          </Link>
        </Reveal>
      </section>

      {/* CTA */}
      <section className="mx-auto max-w-7xl px-6 lg:px-10 py-16">
        <Reveal direction="up">
          <div className="relative overflow-hidden rounded-3xl border border-border bg-surface p-10 lg:p-16">
            <div className="absolute -top-24 -right-24 h-72 w-72 rounded-full bg-gradient-accent opacity-30 blur-3xl" />
            <div className="relative grid lg:grid-cols-2 gap-10 items-center">
              <div>
                <h2 className="font-display text-4xl lg:text-5xl text-balance">Let's design your smart home.</h2>
                <p className="mt-4 text-muted-foreground max-w-md">
                  Whether you're building from scratch or upgrading an existing home, we'd love to talk through what's possible.
                </p>
              </div>
              <div className="flex flex-wrap gap-4 lg:justify-end">
                <Link to="/contact" className="inline-flex items-center gap-2 rounded-full bg-gradient-accent px-6 py-3.5 text-sm font-medium text-primary-foreground shadow-glow">
                  Request a consultation <ArrowUpRight className="h-4 w-4" />
                </Link>
                <a href="tel:+447447089033" className="inline-flex items-center gap-2 rounded-full border border-border px-6 py-3.5 text-sm hover:bg-background transition">
                  Call +44 7447 089033
                </a>
              </div>
            </div>
          </div>
        </Reveal>
      </section>
    </Layout>
  );
}
