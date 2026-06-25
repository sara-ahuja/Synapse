import { createFileRoute } from "@tanstack/react-router";
import { Link } from "@tanstack/react-router";
import { MarketingNav } from "@/components/synapse/MarketingNav";
import { Button } from "@/components/ui/button";
import {
  ArrowRight,
  Sparkles,
  ShieldCheck,
  Wallet,
  ScanSearch,
  FileSignature,
  Check,
} from "lucide-react";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Synapse — Professional collaboration infrastructure for the Indian creator economy" },
      {
        name: "description",
        content:
          "Synapse is the professional infrastructure layer for brand–creator collaboration in India. Transparent briefs, intelligent matchmaking with MatchIQ, and escrowed payments — no more WhatsApp chaos.",
      },
      { property: "og:title", content: "Synapse — Built for the Indian creator economy" },
      {
        property: "og:description",
        content:
          "Stop running collaborations on Instagram DMs and Excel. Synapse gives brands and creators a structured workspace with AI-ranked matchmaking and secure payments.",
      },
    ],
  }),
  component: Index,
});

const stats = [
  { label: "Verified creators", value: "48,200+" },
  { label: "Indian brands onboard", value: "1,940" },
  { label: "Campaigns launched", value: "12,800" },
  { label: "Avg. MatchIQ score", value: "93%" },
];

const pillars = [
  {
    icon: ScanSearch,
    title: "Intelligent matchmaking, not endless scrolling",
    body:
      "MatchIQ reads your brief and ranks every creator on audience, niche, budget, language and past performance — in seconds, with reasoning you can audit.",
  },
  {
    icon: FileSignature,
    title: "Structured briefs and deliverables",
    body:
      "Move every collaboration off WhatsApp. Briefs, milestones, content review and revisions live in one workspace, with a clear paper trail for both sides.",
  },
  {
    icon: Wallet,
    title: "Escrowed payments, on time",
    body:
      "Brands fund campaigns up-front. Creators see exactly when money releases. No more chasing invoices three months after delivery.",
  },
  {
    icon: ShieldCheck,
    title: "Verified profiles and reliability scores",
    body:
      "Every creator and brand carries a verified badge, response time, completion rate and payment timeline. Trust becomes visible, not implied.",
  },
];

function Index() {
  return (
    <div className="min-h-screen bg-background relative overflow-hidden">
      <div className="absolute inset-0 bg-mesh pointer-events-none" />
      <div className="relative">
        <MarketingNav />

        {/* Hero */}
        <section className="mx-auto max-w-7xl px-6 pt-24 pb-28 text-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-border/70 bg-background/80 backdrop-blur px-3 py-1 text-xs font-medium text-muted-foreground mb-8">
            <span className="h-1.5 w-1.5 rounded-full bg-success animate-pulse" />
            MatchIQ 2.0 — semantic creator search, now live in India
          </div>
          <h1 className="text-5xl md:text-7xl font-semibold tracking-tight text-foreground leading-[1.04] max-w-5xl mx-auto">
            Professional collaboration infrastructure <br className="hidden md:block" />
            <span className="text-gradient-brand">for the Indian creator economy.</span>
          </h1>
          <p className="mt-7 text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Synapse is where serious brands and creators run their work. Intelligent matchmaking,
            transparent briefs, and escrowed payments — not another social feed.
          </p>
          <div className="mt-10 flex flex-col sm:flex-row gap-3 justify-center">
            <Button
              asChild
              size="lg"
              className="bg-gradient-brand text-white shadow-glow hover:opacity-90 h-12 px-6 text-base"
            >
              <Link to="/brand">
                Launch a campaign <ArrowRight className="ml-1 h-4 w-4" />
              </Link>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="h-12 px-6 text-base bg-background/80 backdrop-blur"
            >
              <Link to="/creator">
                Join as a creator <ArrowRight className="ml-1 h-4 w-4" />
              </Link>
            </Button>
          </div>
          <div className="mt-6 text-xs text-muted-foreground">
            Trusted by Mamaearth · Nykaa · boAt · Zomato · Plum · Sugar · Wow Skin Science
          </div>

          {/* Stats */}
          <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-px rounded-2xl overflow-hidden border border-border/60 bg-border/60 max-w-4xl mx-auto shadow-elegant">
            {stats.map((s) => (
              <div key={s.label} className="bg-background/95 backdrop-blur p-6 text-left">
                <div className="text-2xl md:text-3xl font-semibold tracking-tight text-foreground">
                  {s.value}
                </div>
                <div className="text-xs text-muted-foreground mt-1">{s.label}</div>
              </div>
            ))}
          </div>
        </section>

        {/* Product mock */}
        <section className="mx-auto max-w-6xl px-6 pb-24">
          <div className="rounded-2xl border border-border/60 bg-background/80 backdrop-blur shadow-elegant overflow-hidden">
            <div className="border-b border-border/60 px-4 py-3 flex items-center gap-2">
              <div className="h-2.5 w-2.5 rounded-full bg-muted-foreground/20" />
              <div className="h-2.5 w-2.5 rounded-full bg-muted-foreground/20" />
              <div className="h-2.5 w-2.5 rounded-full bg-muted-foreground/20" />
              <div className="ml-4 text-xs text-muted-foreground">
                synapse.in/brand/campaigns/new
              </div>
            </div>
            <div className="grid md:grid-cols-2 gap-0">
              <div className="p-8 border-r border-border/60">
                <div className="text-xs font-medium text-muted-foreground mb-2">Campaign brief</div>
                <div className="text-base font-medium text-foreground">
                  Mamaearth · Ubtan Face Wash — Gen Z push
                </div>
                <div className="mt-4 space-y-2 text-sm text-muted-foreground">
                  <div className="flex justify-between">
                    <span>Budget</span>
                    <span className="text-foreground font-medium">₹6,00,000</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Deliverables</span>
                    <span className="text-foreground font-medium">2 Reels + 4 Stories</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Audience</span>
                    <span className="text-foreground font-medium">Female · 18–26 · India</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Language</span>
                    <span className="text-foreground font-medium">Hindi · English</span>
                  </div>
                </div>
              </div>
              <div className="p-8 bg-gradient-soft">
                <div className="flex items-center gap-2 text-xs font-medium text-primary mb-3">
                  <Sparkles className="h-3.5 w-3.5" /> MatchIQ recommendation
                </div>
                <div className="rounded-xl bg-background border border-border/70 p-4 shadow-sm">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="h-10 w-10 rounded-full bg-gradient-brand" />
                      <div>
                        <div className="text-sm font-semibold flex items-center gap-1.5">
                          @riya.glows
                          <span className="text-[10px] px-1.5 py-0.5 rounded bg-success/15 text-success font-medium">
                            Verified
                          </span>
                        </div>
                        <div className="text-xs text-muted-foreground">
                          412K · Mumbai · Skincare
                        </div>
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="text-lg font-semibold text-gradient-brand">96%</div>
                      <div className="text-[10px] text-muted-foreground uppercase tracking-wide">
                        match
                      </div>
                    </div>
                  </div>
                  <div className="mt-4 space-y-1.5 text-xs text-muted-foreground">
                    <div className="flex items-center gap-2">
                      <Check className="h-3 w-3 text-success" /> Audience 89% Gen Z female, Tier 1
                    </div>
                    <div className="flex items-center gap-2">
                      <Check className="h-3 w-3 text-success" /> Skincare niche · 4 prior D2C deals
                    </div>
                    <div className="flex items-center gap-2">
                      <Check className="h-3 w-3 text-success" /> Reel rate ₹22k — inside budget
                    </div>
                    <div className="flex items-center gap-2">
                      <Check className="h-3 w-3 text-success" /> 98% reliability · responds &lt; 4 hrs
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Pillars */}
        <section id="problem" className="mx-auto max-w-7xl px-6 py-24">
          <div className="max-w-2xl">
            <div className="text-sm font-medium text-primary">Why Synapse</div>
            <h2 className="mt-2 text-4xl md:text-5xl font-semibold tracking-tight text-foreground">
              Brand–creator deals have outgrown WhatsApp and Excel.
            </h2>
            <p className="mt-4 text-muted-foreground text-lg">
              India's creator economy now moves serious money. Synapse is the workspace it deserves —
              built for transparency, accountability and speed.
            </p>
          </div>
          <div className="mt-14 grid md:grid-cols-2 gap-px bg-border/60 rounded-2xl overflow-hidden border border-border/60">
            {pillars.map((p) => (
              <div key={p.title} className="bg-background p-8">
                <div className="h-10 w-10 rounded-lg bg-gradient-soft border border-border/60 flex items-center justify-center text-primary">
                  <p.icon className="h-5 w-5" />
                </div>
                <h3 className="mt-5 text-lg font-semibold tracking-tight">{p.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{p.body}</p>
              </div>
            ))}
          </div>
        </section>

        {/* MatchIQ */}
        <section id="matchiq" className="mx-auto max-w-7xl px-6 py-24">
          <div className="rounded-3xl border border-border/60 bg-gradient-soft p-12 md:p-16 text-center relative overflow-hidden">
            <div className="absolute inset-0 bg-mesh opacity-60 pointer-events-none" />
            <div className="relative">
              <div className="inline-flex items-center gap-2 rounded-full bg-background/80 backdrop-blur px-3 py-1 text-xs font-medium text-primary border border-border/60">
                <Sparkles className="h-3.5 w-3.5" /> MatchIQ Recommendation Engine
              </div>
              <h2 className="mt-6 text-4xl md:text-5xl font-semibold tracking-tight max-w-3xl mx-auto">
                Search the way you actually think.
              </h2>
              <p className="mt-5 text-lg text-muted-foreground max-w-2xl mx-auto">
                Type <span className="text-foreground font-medium">"affordable skincare creators in Mumbai"</span>{" "}
                or <span className="text-foreground font-medium">"Tamil tech creators under ₹15k"</span>. MatchIQ
                understands meaning — not just keywords — and explains every recommendation.
              </p>
              <div className="mt-10 flex flex-col sm:flex-row gap-3 justify-center">
                <Button
                  asChild
                  size="lg"
                  className="bg-gradient-brand text-white shadow-glow hover:opacity-90 h-12 px-6"
                >
                  <Link to="/brand/create">
                    Try MatchIQ <ArrowRight className="ml-1 h-4 w-4" />
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </section>

        <footer className="border-t border-border/60 mt-12">
          <div className="mx-auto max-w-7xl px-6 py-10 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-muted-foreground">
            <div className="flex items-center gap-3">
              <div className="h-6 w-6 rounded-md bg-gradient-brand" />
              <span>© {new Date().getFullYear()} Synapse Labs · Made in India</span>
            </div>
            <div className="flex items-center gap-6">
              <a href="#" className="hover:text-foreground">
                Privacy
              </a>
              <a href="#" className="hover:text-foreground">
                Terms
              </a>
              <a href="#" className="hover:text-foreground">
                Trust & Safety
              </a>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
}
