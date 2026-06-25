import { createFileRoute, Link } from "@tanstack/react-router";
import { Button } from "@/components/ui/button";
import { Sparkles, Search } from "lucide-react";
import {
  recommendedCampaigns,
  pendingApplications,
  activeCollabs,
  inr,
  inrRange,
} from "@/lib/synapse-data";
import { cn } from "@/lib/utils";

export const Route = createFileRoute("/creator/campaigns")({
  head: () => ({ meta: [{ title: "Campaigns — Synapse" }] }),
  component: CreatorCampaigns,
});

const tabs = ["Recommended", "My applications", "Active collabs"] as const;

const applicationTone: Record<string, string> = {
  Shortlisted: "bg-success/15 text-success",
  "Under review": "bg-muted text-muted-foreground",
  "Awaiting brief": "bg-amber-500/15 text-amber-600",
};

function CreatorCampaigns() {
  return (
    <div className="space-y-8">
      <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4">
        <div>
          <h1 className="text-3xl font-semibold tracking-tight">Campaigns</h1>
          <p className="mt-1 text-muted-foreground text-sm max-w-2xl">
            Browse open briefs, track your applications and manage active collabs — all in one
            workspace.
          </p>
        </div>
        <div className="relative w-full md:w-80">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
          <input
            placeholder="Search briefs (e.g. ‘skincare, Mumbai’)"
            className="w-full h-10 pl-10 pr-3 rounded-lg border border-border/60 bg-background text-sm focus:outline-none focus:border-ring"
          />
        </div>
      </div>

      <div className="flex gap-2 border-b border-border/60">
        {tabs.map((t, i) => (
          <button
            key={t}
            className={cn(
              "px-3 py-2 text-sm font-medium border-b-2 -mb-px transition",
              i === 0
                ? "border-primary text-foreground"
                : "border-transparent text-muted-foreground hover:text-foreground",
            )}
          >
            {t}
          </button>
        ))}
      </div>

      {/* Recommended */}
      <section className="space-y-4">
        <div className="flex items-center gap-2 text-sm font-medium text-primary">
          <Sparkles className="h-4 w-4" /> MatchIQ recommendations
        </div>
        <div className="grid md:grid-cols-2 gap-4">
          {recommendedCampaigns.map((c) => (
            <div
              key={c.id}
              className="rounded-2xl border border-border/60 bg-background p-5 shadow-elegant hover:border-primary/30 transition"
            >
              <div className="flex items-start justify-between gap-3">
                <div className="min-w-0">
                  <div className="text-xs text-muted-foreground">
                    {c.brand} · {c.category} ·{" "}
                    <span className="px-1.5 py-0.5 rounded bg-muted text-[10px] uppercase font-medium">
                      {c.type}
                    </span>
                  </div>
                  <div className="text-sm font-semibold mt-1">{c.title}</div>
                </div>
                <div className="text-right shrink-0">
                  <div className="text-lg font-semibold text-gradient-brand leading-none">
                    {c.score}%
                  </div>
                  <div className="text-[10px] text-muted-foreground uppercase tracking-wider mt-0.5">
                    match
                  </div>
                </div>
              </div>
              <div className="mt-3 grid grid-cols-2 gap-2 text-xs">
                <Stat
                  label="Budget"
                  value={
                    c.budgetMin === 0 && c.budgetMax === 0
                      ? "Gifted"
                      : inrRange(c.budgetMin, c.budgetMax)
                  }
                />
                <Stat label="Language" value={c.language} />
                <Stat label="Audience" value={c.audience} />
                <Stat label="Location" value={c.location} />
              </div>
              <div className="mt-3 pt-3 border-t border-border/60 text-xs text-muted-foreground">
                <span className="text-primary font-medium">Why this match?</span>{" "}
                {c.reasons[0].detail}
              </div>
              <div className="mt-3 flex gap-2">
                <Button variant="outline" size="sm" className="flex-1">
                  Details
                </Button>
                <Button size="sm" className="flex-1 bg-gradient-brand text-white hover:opacity-90">
                  Apply
                </Button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* My applications */}
      <section className="space-y-3">
        <h2 className="text-lg font-semibold tracking-tight">My applications</h2>
        <div className="rounded-2xl border border-border/60 bg-background shadow-elegant overflow-hidden divide-y divide-border/60">
          {pendingApplications.map((a) => (
            <div
              key={a.title}
              className="px-5 py-4 flex items-center justify-between gap-4 hover:bg-muted/30 transition"
            >
              <div className="min-w-0">
                <div className="text-sm font-medium truncate">{a.title}</div>
                <div className="text-xs text-muted-foreground mt-0.5">
                  {a.brand} · applied {a.appliedOn}
                </div>
              </div>
              <div className="flex items-center gap-3 shrink-0">
                <span
                  className={cn(
                    "text-xs px-2 py-0.5 rounded-full font-medium",
                    applicationTone[a.status],
                  )}
                >
                  {a.status}
                </span>
                <Button variant="ghost" size="sm" asChild>
                  <Link to="/creator/messages">View</Link>
                </Button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Active collabs */}
      <section className="space-y-3">
        <h2 className="text-lg font-semibold tracking-tight">Active collaborations</h2>
        <div className="grid md:grid-cols-2 gap-4">
          {activeCollabs.map((a) => (
            <div
              key={a.title}
              className="rounded-2xl border border-border/60 bg-background p-5 shadow-elegant"
            >
              <div className="flex items-start justify-between gap-3">
                <div className="min-w-0">
                  <div className="text-xs text-muted-foreground">{a.brand}</div>
                  <div className="text-sm font-semibold mt-0.5">{a.title}</div>
                </div>
                <span className="text-xs px-2 py-0.5 rounded-full bg-primary/10 text-primary font-medium">
                  {a.stage}
                </span>
              </div>
              <div className="mt-3 flex items-center justify-between text-xs text-muted-foreground">
                <span>Due {a.due}</span>
                <span className="font-semibold text-foreground">{inr(a.value)}</span>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

function Stat({ label, value }: { label: string; value: string }) {
  return (
    <div className="rounded-md bg-muted/60 px-2 py-1.5">
      <div className="text-[10px] text-muted-foreground uppercase tracking-wide">{label}</div>
      <div className="font-medium truncate">{value}</div>
    </div>
  );
}
