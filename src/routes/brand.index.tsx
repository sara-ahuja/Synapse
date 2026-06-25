import { createFileRoute, Link } from "@tanstack/react-router";
import { Button } from "@/components/ui/button";
import { Plus, Rocket, Users, BarChart3, Wallet, ArrowUpRight } from "lucide-react";

export const Route = createFileRoute("/brand/")({
  head: () => ({ meta: [{ title: "Brand Dashboard — Synapse" }] }),
  component: BrandDashboard,
});

const overview = [
  { label: "Active campaigns", value: "6", delta: "+2 this month", icon: Rocket },
  { label: "Creator applications", value: "184", delta: "32 new", icon: Users },
  { label: "Campaign performance", value: "8.7M", delta: "+18% impressions", icon: BarChart3 },
  { label: "Budget remaining", value: "$184K", delta: "of $320K quarterly", icon: Wallet },
];

const activeCampaigns = [
  { title: "Spring skincare launch", stage: "Live", creators: 8, spend: "$32,400", progress: 64 },
  { title: "Summer outdoor capsule", stage: "Sourcing", creators: 3, spend: "$4,200", progress: 18 },
  { title: "Coffee ritual series", stage: "Live", creators: 5, spend: "$18,900", progress: 47 },
];

const applications = [
  { name: "Aria Wilde", handle: "@ariawilde", followers: "412K", score: 96 },
  { name: "Noah Kim", handle: "@noah.k", followers: "228K", score: 91 },
  { name: "Sasha Vine", handle: "@sashavine", followers: "684K", score: 88 },
];

function BrandDashboard() {
  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="relative rounded-2xl overflow-hidden border border-border/60 bg-gradient-soft p-8">
        <div className="absolute inset-0 bg-mesh opacity-50 pointer-events-none" />
        <div className="relative flex flex-col md:flex-row md:items-center md:justify-between gap-6">
          <div>
            <div className="text-xs font-medium text-primary">Lumière Beauty workspace</div>
            <h1 className="mt-1 text-3xl md:text-4xl font-semibold tracking-tight">Good morning, Maya.</h1>
            <p className="mt-2 text-muted-foreground">6 campaigns live · 32 new applications since yesterday.</p>
          </div>
          <Button asChild size="lg" className="bg-gradient-brand text-white shadow-glow hover:opacity-90 h-12 px-6">
            <Link to="/brand/create"><Plus className="h-4 w-4" /> Create campaign</Link>
          </Button>
        </div>
      </div>

      {/* Overview */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        {overview.map((s) => (
          <div key={s.label} className="rounded-xl border border-border/60 bg-background p-5 shadow-elegant">
            <div className="flex items-center justify-between">
              <span className="text-xs text-muted-foreground">{s.label}</span>
              <div className="h-7 w-7 rounded-md bg-muted text-muted-foreground flex items-center justify-center">
                <s.icon className="h-3.5 w-3.5" />
              </div>
            </div>
            <div className="mt-3 text-2xl font-semibold tracking-tight">{s.value}</div>
            <div className="mt-1 text-xs text-success flex items-center gap-1"><ArrowUpRight className="h-3 w-3" />{s.delta}</div>
          </div>
        ))}
      </div>

      <div className="grid lg:grid-cols-3 gap-6">
        {/* Active campaigns */}
        <div className="lg:col-span-2 rounded-2xl border border-border/60 bg-background p-6 shadow-elegant">
          <div className="flex items-center justify-between mb-5">
            <h2 className="text-lg font-semibold tracking-tight">Active campaigns</h2>
            <Button variant="ghost" size="sm">View all</Button>
          </div>
          <div className="space-y-3">
            {activeCampaigns.map((c) => (
              <div key={c.title} className="p-4 rounded-xl border border-border/60 hover:border-primary/30 transition">
                <div className="flex items-center justify-between">
                  <div>
                    <div className="text-sm font-semibold">{c.title}</div>
                    <div className="text-xs text-muted-foreground mt-0.5">{c.creators} creators · {c.spend} spent</div>
                  </div>
                  <span className={`text-xs px-2 py-1 rounded-full ${c.stage === "Live" ? "bg-success/15 text-success" : "bg-muted text-muted-foreground"}`}>{c.stage}</span>
                </div>
                <div className="mt-3 h-1.5 rounded-full bg-muted overflow-hidden">
                  <div className="h-full bg-gradient-brand" style={{ width: `${c.progress}%` }} />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Applications */}
        <div className="rounded-2xl border border-border/60 bg-background p-6 shadow-elegant">
          <div className="flex items-center justify-between mb-5">
            <h2 className="text-lg font-semibold tracking-tight">Top applications</h2>
            <Button variant="ghost" size="sm">All</Button>
          </div>
          <div className="space-y-3">
            {applications.map((a) => (
              <div key={a.handle} className="flex items-center gap-3 p-3 rounded-lg hover:bg-muted/50 transition">
                <div className="h-9 w-9 rounded-full bg-gradient-brand text-white text-xs font-semibold flex items-center justify-center">{a.name[0]}</div>
                <div className="flex-1 min-w-0">
                  <div className="text-sm font-medium truncate">{a.name}</div>
                  <div className="text-xs text-muted-foreground truncate">{a.handle} · {a.followers}</div>
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
