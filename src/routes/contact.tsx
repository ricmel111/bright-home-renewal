import { createFileRoute } from "@tanstack/react-router";
import { Layout } from "@/components/site/Layout";
import { Phone, Mail, MapPin, Send } from "lucide-react";
import { useState } from "react";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — Lyttle Smart Homes" },
      { name: "description", content: "Get in touch with Lyttle Smart Homes. Based in Glenarm, serving Northern Ireland and the Republic of Ireland." },
      { property: "og:title", content: "Contact — Lyttle Smart Homes" },
      { property: "og:description", content: "Tell us about your project." },
    ],
  }),
  component: Contact,
});

function Contact() {
  const [sent, setSent] = useState(false);
  return (
    <Layout>
      <section className="mx-auto max-w-7xl px-6 lg:px-10 pt-24 pb-16 grid lg:grid-cols-12 gap-16">
        <div className="lg:col-span-5">
          <p className="text-xs uppercase tracking-[0.25em] text-primary">Contact</p>
          <h1 className="mt-6 font-display text-5xl lg:text-6xl leading-[0.95] text-balance">
            Tell us about your home.
          </h1>
          <p className="mt-6 text-muted-foreground leading-relaxed max-w-md">
            New build, retrofit, or single-room upgrade — drop us a line and Peter will be in touch personally, usually within a working day.
          </p>

          <ul className="mt-12 space-y-6">
            <li className="flex items-start gap-4">
              <span className="inline-flex h-10 w-10 items-center justify-center rounded-lg border border-border bg-surface"><Phone className="h-4 w-4 text-primary" /></span>
              <div>
                <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground">Phone / WhatsApp</p>
                <a href="tel:+447447089033" className="font-display text-xl hover:text-primary transition">+44 7447 089033</a>
              </div>
            </li>
            <li className="flex items-start gap-4">
              <span className="inline-flex h-10 w-10 items-center justify-center rounded-lg border border-border bg-surface"><Mail className="h-4 w-4 text-primary" /></span>
              <div>
                <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground">Email</p>
                <a href="mailto:hello@lyttlesmarthomes.co.uk" className="font-display text-xl hover:text-primary transition">hello@lyttlesmarthomes.co.uk</a>
              </div>
            </li>
            <li className="flex items-start gap-4">
              <span className="inline-flex h-10 w-10 items-center justify-center rounded-lg border border-border bg-surface"><MapPin className="h-4 w-4 text-primary" /></span>
              <div>
                <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground">Studio</p>
                <p className="font-display text-xl">Glenarm, Co. Antrim</p>
                <p className="text-sm text-muted-foreground mt-0.5">Covering NI & ROI</p>
              </div>
            </li>
          </ul>
        </div>

        <div className="lg:col-span-7">
          <form
            onSubmit={(e) => { e.preventDefault(); setSent(true); }}
            className="rounded-3xl border border-border bg-surface p-8 lg:p-10 space-y-5"
          >
            <div className="grid sm:grid-cols-2 gap-5">
              <Field label="Your name" name="name" required />
              <Field label="Email" name="email" type="email" required />
            </div>
            <div className="grid sm:grid-cols-2 gap-5">
              <Field label="Phone" name="phone" type="tel" />
              <Field label="Location" name="location" placeholder="e.g. Belfast, Dublin" />
            </div>
            <Field label="Project type" name="project" placeholder="New build, retrofit, single room…" />
            <div>
              <label className="block text-xs uppercase tracking-[0.18em] text-muted-foreground mb-2">Tell us more</label>
              <textarea
                name="message"
                rows={5}
                className="w-full rounded-xl border border-border bg-background/40 px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-primary/40 transition resize-none"
                placeholder="A few lines about what you're hoping to achieve…"
              />
            </div>

            <button
              type="submit"
              className="inline-flex items-center gap-2 rounded-full bg-gradient-accent px-6 py-3.5 text-sm font-medium text-primary-foreground shadow-glow hover:opacity-90 transition"
            >
              <Send className="h-4 w-4" /> {sent ? "Thank you — we'll be in touch" : "Send enquiry"}
            </button>
            <p className="text-xs text-muted-foreground">We never share your details. Replies usually within one working day.</p>
          </form>
        </div>
      </section>
    </Layout>
  );
}

function Field({ label, name, type = "text", required, placeholder }: { label: string; name: string; type?: string; required?: boolean; placeholder?: string }) {
  return (
    <div>
      <label className="block text-xs uppercase tracking-[0.18em] text-muted-foreground mb-2">{label}</label>
      <input
        type={type}
        name={name}
        required={required}
        placeholder={placeholder}
        className="w-full rounded-xl border border-border bg-background/40 px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-primary/40 transition"
      />
    </div>
  );
}
