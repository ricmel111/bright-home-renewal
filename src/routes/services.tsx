import { createFileRoute, Link } from "@tanstack/react-router";
import { Layout } from "@/components/site/Layout";
import { Reveal } from "@/components/site/Reveal";
import { Lightbulb, Thermometer, Speaker, Blinds, Camera, Cpu, Shield, Zap, ArrowUpRight } from "lucide-react";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: "Services — Smart Home Installation by Lyttle Smart Homes" },
      { name: "description", content: "Loxone smart home installation: lighting, heating, audio, shading, security and full home integration in NI and ROI." },
      { property: "og:title", content: "Services — Lyttle Smart Homes" },
      { property: "og:description", content: "Lighting, heating, audio, shading, security and full Loxone integration." },
    ],
  }),
  component: Services,
});

const services = [
  { icon: Lightbulb, title: "Intelligent Lighting", desc: "Circadian scenes, dimming, presence detection and architectural mood lighting tuned to each room." },
  { icon: Thermometer, title: "Heating & Climate", desc: "Room-by-room control, weather-anticipating logic and measurable energy savings on every install." },
  { icon: Speaker, title: "Multi-room Audio", desc: "Discreet, high-fidelity audio with single-source streaming or independent zones." },
  { icon: Blinds, title: "Shading & Blinds", desc: "Sun-tracking blinds and curtains that protect interiors and balance natural light." },
  { icon: Camera, title: "Security & CCTV", desc: "Cameras, intercoms, video doorbells and Google Nest integrations done properly." },
  { icon: Shield, title: "Access Control", desc: "Keyless entry, NFC and biometric door entry seamlessly tied into your home." },
  { icon: Zap, title: "Energy Management", desc: "Solar, battery, EV charging and load balancing in a single intelligent dashboard." },
  { icon: Cpu, title: "Loxone Integration", desc: "We design, install and program complete Loxone systems as a Gold Partner." },
];

function Services() {
  return (
    <Layout>
      <section className="mx-auto max-w-5xl px-6 lg:px-10 pt-24 pb-16">
        <Reveal direction="up" delay={0.1}>
          <p className="text-xs uppercase tracking-[0.25em] text-primary">Services</p>
        </Reveal>
        <Reveal direction="up" delay={0.2}>
          <h1 className="mt-6 font-display text-5xl lg:text-7xl leading-[0.95] text-balance">
            One system. Every room. Quietly brilliant.
          </h1>
        </Reveal>
        <Reveal direction="up" delay={0.3}>
          <p className="mt-8 max-w-2xl text-lg text-muted-foreground leading-relaxed">
            We design, install and program complete smart home systems — from a single Nest thermostat to a full Loxone integration across the whole property.
          </p>
        </Reveal>
      </section>

      <section className="mx-auto max-w-7xl px-6 lg:px-10 py-12">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-px bg-border rounded-2xl overflow-hidden border border-border">
          {services.map((s, i) => (
            <Reveal key={s.title} delay={i * 0.1} direction="up" className="h-full">
              <div className="bg-background p-8 hover:bg-surface transition-colors h-full">
                <s.icon className="h-6 w-6 text-primary" strokeWidth={1.5} />
                <h3 className="mt-6 font-display text-xl">{s.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{s.desc}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 lg:px-10 py-24">
        <Reveal direction="up">
          <div className="rounded-3xl border border-border bg-surface p-10 lg:p-16 text-center">
            <h2 className="font-display text-4xl lg:text-5xl text-balance">Not sure where to start?</h2>
            <p className="mt-4 text-muted-foreground max-w-xl mx-auto">
              Every project begins with a free, no-pressure conversation. Tell us about your home and we'll sketch the possibilities.
            </p>
            <Link to="/contact" className="mt-8 inline-flex items-center gap-2 rounded-full bg-gradient-accent px-6 py-3.5 text-sm font-medium text-primary-foreground shadow-glow">
              Book a consultation <ArrowUpRight className="h-4 w-4" />
            </Link>
          </div>
        </Reveal>
      </section>
    </Layout>
  );
}
