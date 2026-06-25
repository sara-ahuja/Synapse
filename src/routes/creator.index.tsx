import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Sparkles, ChevronDown, Bookmark, ExternalLink, TrendingUp, Wallet, FileCheck, Briefcase, Check } from "lucide-react";
import { cn } from "@/lib/utils";

export const Route = createFileRoute("/creator/")({
  head: () => ({ meta: [{ title: "Creator Dashboard — Synapse" }] }),
  component: CreatorDashboard,
});

const stats = [
  { label: "Profile completion", value: "82%", icon: TrendingUp, accent: true },
  { label: "Active collaborations", value: "4", icon: Briefcase },
  { label: "Pending applications", value: "7", icon: FileCheck },
  { label: "Pending payments", value: "$12,400", icon: Wallet },
];

const campaigns = [
  {
    brand: "Lumière Beauty",
    initials: "LB",
    title: "Spring skincare launch — Gen Z edit",
    budget: "$6,000 – $9,000",
    deliverables: "2 Reels · 3 Stories · 1 TikTok",
    score: 96,
    reasons: [
      { label: "Audience overlap", detail: "88% female, 18–24, US/UK match" },
      { label: "Budget fit", detail: "Your avg rate ($7.5K) inside posted range" },
      { label: "Content niche similarity", detail: "Skincare & wellness — your top 2 niches" },
      { label: "Previous campaign relevance", detail: "4 prior beauty deals at >90% performance" },
    ],
  },
  {
    brand: "Field & Forge",
    initials: "FF",
    title: "Outdoor essentials — summer drop",
    budget: "$3,500 – $5,500",
    deliverables: "1 Reel · 4 Stories",
    score: 89,
    reasons: [
      { label: "Audience overlap", detail: "62% match on outdoor lifestyle segment" },
      { label: "Budget fit", detail: "Slightly below your usual range" },
      { label: "Content niche similarity", detail: "Adjacent: travel & lifestyle" },
      { label: "Previous campaign relevance", detail: "2 outdoor brand deals last 12 mo" },
    ],
  },
  {
    brand: "Noma Coffee",
    initials: "NC",
    title: "Morning ritual storytelling series",
    budget: "$2,800",
    deliverables: "3 TikToks · 2 Stories",
    score: 84,
    reasons: [
      { label: "Audience overlap", detail: "Strong overlap with coffee / WFH audience" },
      { label: "Budget fit", detail: "Within range for short-form deliverables" },
      { label: "Content niche similarity", detail: "Lifestyle adjacency" },
      { label: "Previous campaign relevance", detail: "First-time category for you" },
    ],
  },
];

function CreatorDashboard() {
  return (
    <div className="space-y-8">
      {/* Welcome */}
      <div className="relative rounded-2xl overflow-hidden border border-border/60 bg-gradient-soft p-8">
        <div className="absolute inset-0 bg-mesh opacity-50 pointer-events-none" />
        <div className="relative flex flex-col md:flex-row md:items-end md:justify-between gap-6">
          <div>
            <div className="text-xs font-medium text-primary">Welcome back</div>
            <h1 className="mt-1 text-3xl md:text-4xl font-semibold tracking-tight">Hi, Aria 👋</h1>
            <p className="mt-2 text-muted-foreground max-w-lg">
              You have <span className="font-medium text-foreground">3 new matches</span> from MatchIQ today and <span className="font-medium text-foreground">$12,400</span> in upcoming payments.
            </p>
          </div>
          <div className="flex items-center gap-3">
            <Button variant="outline" className="bg-background/80 backdrop-blur">Complete profile</Button>
            <Button className="bg-gradient-brand text-white shadow-glow hover:opacity-90">View matches</Button>
          </div>
        </div>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        {stats.map((s) => (
          <div key={s.label} className="rounded-xl border border-border/60 bg-background p-5 shadow-elegant">
            <div className="flex items-center justify-between">
              <span className="text-xs text-muted-foreground">{s.label}</span>
              <div className={cn("h-7 w-7 rounded-md flex items-center justify-center", s.accent ? "bg-gradient-brand text-white" : "bg-muted text-muted-foreground")}>
                <s.icon className="h-3.5 w-3.5" />
              </div>
            </div>
            <div className="mt-3 text-2xl font-semibold tracking-tight">{s.value}</div>
            {s.accent && (
              <div className="mt-3 h-1.5 rounded-full bg-muted overflow-hidden">
                <div className="h-full w-[82%] bg-gradient-brand" />
              </div>
            )}
          </div>
        ))}
      </div>

      {/* Recommended campaigns */}
      <div>
        <div className="flex items-center justify-between mb-5">
          <div>
            <div className="flex items-center gap-2 text-sm font-medium text-primary">
              <Sparkles className="h-4 w-4" /> Recommended campaigns
            </div>
            <h2 className="mt-1 text-2xl font-semibold tracking-tight">Powered by MatchIQ</h2>
          </div>
          <Button variant="ghost" size="sm">See all</Button>
        </div>
        <div className="space-y-4">
          {campaigns.map((c) => (
            <CampaignCard key={c.title} {...c} />
          ))}
        </div>
      </div>
    </div>
  );
}

function CampaignCard({
  brand, initials, title, budget, deliverables, score, reasons,
}: {
  brand: string; initials: string; title: string; budget: string; deliverables: string; score: number;
  reasons: { label: string; detail: string }[];
}) {
  const [open, setOpen] = useState(false);
  return (
    <div className="rounded-2xl border border-border/60 bg-background shadow-elegant overflow-hidden hover:border-primary/30 transition">
      <div className="p-6 flex flex-col lg:flex-row lg:items-center gap-6">
        <div className="flex items-start gap-4 flex-1 min-w-0">
          <div className="h-12 w-12 rounded-xl bg-gradient-brand flex items-center justify-center text-white font-semibold text-sm shrink-0">
            {initials}
          </div>
          <div className="min-w-0">
            <div className="text-xs text-muted-foreground">{brand}</div>
            <div className="text-base font-semibold mt-0.5 truncate">{title}</div>
            <div className="mt-2 flex flex-wrap gap-x-4 gap-y-1 text-xs text-muted-foreground">
              <span><span className="text-foreground font-medium">Budget</span> · {budget}</span>
              <span><span className="text-foreground font-medium">Deliverables</span> · {deliverables}</span>
            </div>
          </div>
        </div>
        <div className="flex items-center gap-4 lg:gap-6">
          <div className="text-right">
            <div className="text-[10px] uppercase tracking-wider text-muted-foreground">Compatibility</div>
            <div className="text-2xl font-semibold text-gradient-brand leading-none mt-1">{score}%</div>
          </div>
          <div className="flex items-center gap-2">
            <Button variant="ghost" size="icon" aria-label="Save"><Bookmark className="h-4 w-4" /></Button>
            <Button variant="outline" size="sm"><ExternalLink className="h-3.5 w-3.5" /> Details</Button>
            <Button size="sm" className="bg-gradient-brand text-white hover:opacity-90">Apply</Button>
          </div>
        </div>
      </div>
      <button
        onClick={() => setOpen((v) => !v)}
        className="w-full border-t border-border/60 px-6 py-3 flex items-center justify-between text-sm text-muted-foreground hover:bg-muted/40 transition"
      >
        <span className="flex items-center gap-2">
          <Sparkles className="h-3.5 w-3.5 text-primary" /> Why this match?
        </span>
        <ChevronDown className={cn("h-4 w-4 transition", open && "rotate-180")} />
      </button>
      {open && (
        <div className="border-t border-border/60 bg-gradient-soft/50 p-6 grid sm:grid-cols-2 gap-4">
          {reasons.map((r) => (
            <div key={r.label} className="flex gap-3">
              <div className="h-5 w-5 rounded-full bg-success/15 text-success flex items-center justify-center shrink-0 mt-0.5">
                <Check className="h-3 w-3" />
              </div>
              <div>
                <div className="text-sm font-medium">{r.label}</div>
                <div className="text-xs text-muted-foreground">{r.detail}</div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
