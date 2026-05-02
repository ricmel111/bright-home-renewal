import { createFileRoute, Link } from "@tanstack/react-router";
import { Layout } from "@/components/site/Layout";
import { Star, ArrowUpRight } from "lucide-react";

export const Route = createFileRoute("/reviews")({
  head: () => ({
    meta: [
      { title: "Reviews — Lyttle Smart Homes" },
      { name: "description", content: "Genuine, verified reviews from homeowners across Northern Ireland and the Republic of Ireland." },
      { property: "og:title", content: "Reviews — Lyttle Smart Homes" },
      { property: "og:description", content: "Real words from real clients." },
    ],
  }),
  component: Reviews,
});

const reviews = [
  { quote: "We were delighted with the work Peter did and we are so much happier with our new system. Peter removed the old system and completely replaced it with Loxone. He was recommended by my brother-in-law who was extremely pleased with the work he did at their house.", author: "Loxone homeowner" },
  { quote: "Lightning had damaged my system and despite trying for over a year the original electrician couldn't fix the problems. Loxone sent Peter round and within an hour he knew the issue and the equipment was ordered up.", author: "Verified Loxone client" },
  { quote: "Complex systems brilliantly installed and integrated into our home. We had an ageing A/V and lighting system that was crumbling. Peter was prepared to tackle the job and worked through every issue.", author: "Antrim homeowner" },
  { quote: "Peter was very professional, arrived on time to start the work, did a very tidy job, online invoice system was super handy. Will ask him to do work again.", author: "Repeat client" },
  { quote: "Peter did a fantastic job for my mum, upgrading her old Honeywell heating control to a new Nest system. Explained everything in great detail and installed the app on my phone for remote control. Cannot recommend enough.", author: "Family install" },
  { quote: "Peter is an expert when it comes to smart home devices and home automation. He installed a Nest Hello video doorbell and got my Nest Learning Thermostats fully operational. Really glad I got him in.", author: "Nest homeowner" },
  { quote: "Reliable, knowledgeable, tidy engineer. Peter discussed what I needed and visited my home to review the job. Arrived on time and completed a very tidy install with no fuss or mess.", author: "First-time client" },
  { quote: "Excellent install of the new 3rd edition Nest controls. He installed it without any issues and actually fixed what had been installed previously. Great knowledge of the system.", author: "Verified review" },
  { quote: "Fantastic company. Highly recommend. Peter was knowledgeable in relation to the cameras I required and carried out the job to a very high standard.", author: "CCTV install" },
];

function Reviews() {
  return (
    <Layout>
      <section className="mx-auto max-w-5xl px-6 lg:px-10 pt-24 pb-12 text-center">
        <p className="text-xs uppercase tracking-[0.25em] text-primary">Reviews</p>
        <h1 className="mt-6 font-display text-5xl lg:text-7xl leading-[0.95] text-balance">
          Real words. Real homes.
        </h1>
        <div className="mt-8 inline-flex items-center gap-2 rounded-full border border-border bg-surface px-4 py-2 text-sm">
          <span className="flex gap-0.5 text-accent">
            {Array.from({ length: 5 }).map((_, i) => <Star key={i} className="h-3.5 w-3.5 fill-current" />)}
          </span>
          5.0 average · Verified by Expert Trades
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 lg:px-10 py-16">
        <div className="columns-1 md:columns-2 lg:columns-3 gap-6 [column-fill:_balance]">
          {reviews.map((r, i) => (
            <figure key={i} className="break-inside-avoid mb-6 rounded-2xl border border-border bg-surface p-7">
              <div className="flex gap-0.5 text-accent">
                {Array.from({ length: 5 }).map((_, j) => <Star key={j} className="h-3.5 w-3.5 fill-current" />)}
              </div>
              <blockquote className="mt-4 text-sm leading-relaxed text-foreground/90">"{r.quote}"</blockquote>
              <figcaption className="mt-5 text-xs uppercase tracking-[0.18em] text-muted-foreground">— {r.author}</figcaption>
            </figure>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 lg:px-10 py-16 text-center">
        <Link to="/contact" className="inline-flex items-center gap-2 rounded-full bg-gradient-accent px-6 py-3.5 text-sm font-medium text-primary-foreground shadow-glow">
          Become the next happy client <ArrowUpRight className="h-4 w-4" />
        </Link>
      </section>
    </Layout>
  );
}
