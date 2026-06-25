import { createFileRoute, Link } from "@tanstack/react-router";
import { Button } from "@/components/ui/button";
import {
  Plus,
  Rocket,
  Users,
  BarChart3,
  Wallet,
  ArrowUpRight,
  BadgeCheck,
  Clock,
  ShieldCheck,
  Sparkles,
} from "lucide-react";
import {
  brandActiveCampaigns,
  brandProfile,
  creatorMatches,
  inr,
} from "@/lib/synapse-data";

export const Route = createFileRoute("/brand/")({
  head: () => ({ meta: [{ title: "Brand Dashboard — Synapse" }] }),
  component: BrandDashboard,
});

const overview = [
  { label: "Active campaigns", value: "6", delta: "+2 this month", icon: Rocket },
  { label: "Creator applications", value: "184", delta: "32 new", icon: Users },
  { label: "Reach delivered", value: "8.7M", delta: "+18% impressions", icon: BarChart3 },
  { label: "Budget remaining", value: inr(1840000), delta: `of ${inr(3200000)} quarterly`, icon: Wallet },
];

function BrandDashboard() {
  return (
    <div className="space-y-8">
      {/* Header — Create Campaign is the primary CTA */}
      <div className="relative rounded-2xl overflow-hidden border border-border/60 bg-gradient-soft p-8">
        <div className="absolute inset-0 bg-mesh opacity-50 pointer-events-none" />
        <div className="relative flex flex-col md:flex-row md:items-center md:justify-between gap-6">
          <div>
            <div className="text-xs font-medium text-primary">
              {brandProfile.name} workspace
            </div>
            <h1 className="mt-1 text-3xl md:text-4xl font-semibold tracking-tight">
              Good morning, {brandProfile.manager.split(" ")[0]}.
            </h1>
            <p className="mt-2 text-muted-foreground">
              6 campaigns live · 32 new applications since yesterday.
            </p>
            <div className="mt-4 flex flex-wrap items-center gap-2 text-xs">
              <span className="inline-flex items-center gap-1 px-2 py-1 rounded-full bg-success/15 text-success font-medium">
                <BadgeCheck className="h-3 w-3" /> Verified brand
              </span>
              <span className="inline-flex items-center gap-1 px-2 py-1 rounded-full bg-background border border-border/60 text-muted-foreground">
                <ShieldCheck className="h-3 w-3" /> Payment reliability{" "}
                {brandProfile.paymentReliability}%
              </span>
              <span className="inline-flex items-center gap-1 px-2 py-1 rounded-full bg-background border border-border/60 text-muted-foreground">
                <Clock className="h-3 w-3" /> Avg payout {brandProfile.avgPaymentDays} days
              </span>
              <span className="inline-flex items-center gap-1 px-2 py-1 rounded-full bg-background border border-border/60 text-muted-foreground">
                {brandProfile.pastCollabs} prior collaborations
              </span>
            </div>
          </div>
          <Button
            asChild
            size="lg"
            className="bg-gradient-brand text-white shadow-glow hover:opacity-90 h-12 px-6"
          >
            <Link to="/brand/create">
              <Plus className="h-4 w-4" /> Create Campaign
            </Link>
          </Button>
        </div>
      </div>

      {/* Overview */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        {overview.map((s) => (
          <div
            key={s.label}
            className="rounded-xl border border-border/60 bg-background p-5 shadow-elegant"
          >
            <div className="flex items-center justify-between">
              <span className="text-xs text-muted-foreground">{s.label}</span>
              <div className="h-7 w-7 rounded-md bg-muted text-muted-foreground flex items-center justify-center">
                <s.icon className="h-3.5 w-3.5" />
              </div>
            </div>
            <div className="mt-3 text-2xl font-semibold tracking-tight">{s.value}</div>
            <div className="mt-1 text-xs text-success flex items-center gap-1">
              <ArrowUpRight className="h-3 w-3" />
              {s.delta}
            </div>
          </div>
        ))}
      </div>

      <div className="grid lg:grid-cols-3 gap-6">
        {/* Active campaigns */}
        <div className="lg:col-span-2 rounded-2xl border border-border/60 bg-background p-6 shadow-elegant">
          <div className="flex items-center justify-between mb-5">
            <div>
              <h2 className="text-lg font-semibold tracking-tight">Active campaigns</h2>
              <p className="text-xs text-muted-foreground mt-0.5">
                Live and sourcing — manage briefs, creators and spend.
              </p>
            </div>
            <Button variant="ghost" size="sm" asChild>
              <Link to="/brand/campaigns">View all</Link>
            </Button>
          </div>
          <div className="space-y-3">
            {brandActiveCampaigns.map((c) => (
              <div
                key={c.title}
                className="p-4 rounded-xl border border-border/60 hover:border-primary/30 transition"
              >
                <div className="flex items-center justify-between">
                  <div className="min-w-0">
                    <div className="text-sm font-semibold truncate">{c.title}</div>
                    <div className="text-xs text-muted-foreground mt-0.5">
                      {c.creators} creators · {inr(c.spend)} spent
                    </div>
                  </div>
                  <span
                    className={`text-xs px-2 py-1 rounded-full ${c.stage === "Live" ? "bg-success/15 text-success" : "bg-muted text-muted-foreground"}`}
                  >
                    {c.stage}
                  </span>
                </div>
                <div className="mt-3 h-1.5 rounded-full bg-muted overflow-hidden">
                  <div
                    className="h-full bg-gradient-brand"
                    style={{ width: `${c.progress}%` }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Applications */}
        <div className="rounded-2xl border border-border/60 bg-background p-6 shadow-elegant">
          <div className="flex items-center justify-between mb-5">
            <div>
              <h2 className="text-lg font-semibold tracking-tight">Top applications</h2>
              <p className="text-xs text-muted-foreground mt-0.5 flex items-center gap-1">
                <Sparkles className="h-3 w-3 text-primary" /> Ranked by MatchIQ
              </p>
            </div>
            <Button variant="ghost" size="sm" asChild>
              <Link to="/brand/creators">All</Link>
            </Button>
          </div>
          <div className="space-y-3">
            {creatorMatches.slice(0, 4).map((a) => (
              <div
                key={a.handle}
                className="flex items-center gap-3 p-3 rounded-lg hover:bg-muted/50 transition"
              >
                <div className="h-9 w-9 rounded-full bg-gradient-brand text-white text-xs font-semibold flex items-center justify-center">
                  {a.name[0]}
                </div>
                <div className="flex-1 min-w-0">
                  <div className="text-sm font-medium truncate flex items-center gap-1.5">
                    {a.name}
                    {a.verified && (
                      <BadgeCheck className="h-3.5 w-3.5 text-success" />
                    )}
                  </div>
                  <div className="text-xs text-muted-foreground truncate">
                    {a.handle} · {a.city} · {a.followers}
                  </div>
                </div>
                <div className="text-sm font-semibold text-gradient-brand">{a.score}%</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
