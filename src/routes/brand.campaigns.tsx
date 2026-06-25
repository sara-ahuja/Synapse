import { createFileRoute, Link } from "@tanstack/react-router";
import { Button } from "@/components/ui/button";
import { Plus, Sparkles, Users, IndianRupee, Calendar } from "lucide-react";
import { brandActiveCampaigns, inr } from "@/lib/synapse-data";
import { cn } from "@/lib/utils";

export const Route = createFileRoute("/brand/campaigns")({
  head: () => ({ meta: [{ title: "Campaigns — Synapse" }] }),
  component: BrandCampaigns,
});

const allCampaigns = [
  ...brandActiveCampaigns.map((c) => ({
    ...c,
    type: "Paid collab",
    budget: 800000,
    timeline: "12 Apr – 30 May",
  })),
  {
    title: "Mamaearth × Holi Glow (UGC pack)",
    stage: "Draft",
    creators: 0,
    spend: 0,
    progress: 0,
    type: "UGC only",
    budget: 250000,
    timeline: "Starts 1 May",
  },
  {
    title: "Onam Skincare Edit — South India",
    stage: "Completed",
    creators: 22,
    spend: 1240000,
    progress: 100,
    type: "Product launch",
    budget: 1400000,
    timeline: "Aug – Sep 2025",
  },
];

const tone: Record<string, string> = {
  Live: "bg-success/15 text-success",
  Sourcing: "bg-amber-500/15 text-amber-600",
  Draft: "bg-muted text-muted-foreground",
  Completed: "bg-primary/10 text-primary",
};

function BrandCampaigns() {
  return (
    <div className="space-y-8">
      <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4">
        <div>
          <h1 className="text-3xl font-semibold tracking-tight">Campaigns</h1>
          <p className="mt-1 text-muted-foreground text-sm">
            Manage live, drafted and completed campaigns. Every brief is structured —
            deliverables, payments and reviews live in one place.
          </p>
        </div>
        <Button
          asChild
          size="lg"
          className="bg-gradient-brand text-white shadow-glow hover:opacity-90 h-11 px-5"
        >
          <Link to="/brand/create">
            <Plus className="h-4 w-4" /> Create Campaign
          </Link>
        </Button>
      </div>

      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        <Kpi label="Total campaigns" value={String(allCampaigns.length)} />
        <Kpi label="Live now" value={String(allCampaigns.filter((c) => c.stage === "Live").length)} />
        <Kpi label="Creators engaged" value={String(allCampaigns.reduce((a, b) => a + b.creators, 0))} />
        <Kpi label="Quarter spend" value={inr(allCampaigns.reduce((a, b) => a + b.spend, 0))} />
      </div>

      <div className="rounded-2xl border border-border/60 bg-background shadow-elegant overflow-hidden">
        <div className="px-6 py-4 border-b border-border/60 flex items-center justify-between">
          <div className="text-sm font-semibold">All campaigns</div>
          <div className="flex gap-2 text-xs">
            {["All", "Live", "Sourcing", "Draft", "Completed"].map((t, i) => (
              <button
                key={t}
                className={cn(
                  "px-2.5 py-1 rounded-md border",
                  i === 0
                    ? "bg-primary/10 border-primary/30 text-primary font-medium"
                    : "border-border/60 text-muted-foreground hover:text-foreground",
                )}
              >
                {t}
              </button>
            ))}
          </div>
        </div>
        <div className="divide-y divide-border/60">
          {allCampaigns.map((c) => (
            <div
              key={c.title}
              className="px-6 py-4 grid grid-cols-12 gap-4 items-center hover:bg-muted/30 transition"
            >
              <div className="col-span-12 md:col-span-5">
                <div className="text-sm font-semibold">{c.title}</div>
                <div className="mt-1 flex flex-wrap items-center gap-x-3 gap-y-0.5 text-xs text-muted-foreground">
                  <span className="px-1.5 py-0.5 rounded bg-muted text-[10px] uppercase tracking-wide font-medium">
                    {c.type}
                  </span>
                  <span className="flex items-center gap-1">
                    <Calendar className="h-3 w-3" /> {c.timeline}
                  </span>
                </div>
              </div>
              <div className="col-span-4 md:col-span-2 text-xs">
                <div className="text-muted-foreground">Creators</div>
                <div className="mt-0.5 font-medium flex items-center gap-1">
                  <Users className="h-3 w-3" /> {c.creators}
                </div>
              </div>
              <div className="col-span-4 md:col-span-2 text-xs">
                <div className="text-muted-foreground">Spend / Budget</div>
                <div className="mt-0.5 font-medium flex items-center gap-1">
                  <IndianRupee className="h-3 w-3" />
                  {(c.spend / 100000).toFixed(1)}L / {(c.budget / 100000).toFixed(1)}L
                </div>
              </div>
              <div className="col-span-4 md:col-span-2">
                <span
                  className={cn(
                    "text-xs px-2 py-0.5 rounded-full font-medium",
                    tone[c.stage],
                  )}
                >
                  {c.stage}
                </span>
                <div className="mt-2 h-1.5 rounded-full bg-muted overflow-hidden">
                  <div
                    className="h-full bg-gradient-brand"
                    style={{ width: `${c.progress}%` }}
                  />
                </div>
              </div>
              <div className="col-span-12 md:col-span-1 flex md:justify-end">
                {c.stage === "Draft" ? (
                  <Button asChild size="sm" className="bg-gradient-brand text-white">
                    <Link to="/brand/create">
                      <Sparkles className="h-3.5 w-3.5" /> Match
                    </Link>
                  </Button>
                ) : (
                  <Button variant="outline" size="sm">
                    Open
                  </Button>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function Kpi({ label, value }: { label: string; value: string }) {
  return (
    <div className="rounded-xl border border-border/60 bg-background p-5 shadow-elegant">
      <div className="text-xs text-muted-foreground">{label}</div>
      <div className="mt-2 text-2xl font-semibold tracking-tight">{value}</div>
    </div>
  );
}
