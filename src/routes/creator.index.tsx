import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Sparkles,
  ChevronDown,
  Bookmark,
  ExternalLink,
  TrendingUp,
  Wallet,
  FileCheck,
  Briefcase,
  Check,
  Clock,
  ShieldCheck,
  BadgeCheck,
  ReceiptText,
} from "lucide-react";
import { cn } from "@/lib/utils";
import {
  recommendedCampaigns,
  activeCollabs,
  pendingApplications,
  pendingPayments,
  creatorProfile,
  inr,
  inrRange,
  type PaymentStatus,
} from "@/lib/synapse-data";

export const Route = createFileRoute("/creator/")({
  head: () => ({ meta: [{ title: "Creator Dashboard — Synapse" }] }),
  component: CreatorDashboard,
});

const pendingPaymentTotal = pendingPayments
  .filter((p) => p.status === "Pending" || p.status === "In Escrow")
  .reduce((a, b) => a + b.amount, 0);

const stats = [
  { label: "Profile completion", value: "82%", icon: TrendingUp, accent: true },
  { label: "Active collaborations", value: String(activeCollabs.length), icon: Briefcase },
  { label: "Pending applications", value: String(pendingApplications.length), icon: FileCheck },
  { label: "Pending payments", value: inr(pendingPaymentTotal), icon: Wallet },
];

const paymentTone: Record<PaymentStatus, string> = {
  Pending: "bg-amber-500/15 text-amber-600",
  "In Escrow": "bg-primary/10 text-primary",
  Released: "bg-success/15 text-success",
  Completed: "bg-muted text-muted-foreground",
};

function CreatorDashboard() {
  return (
    <div className="space-y-8">
      {/* Welcome */}
      <div className="relative rounded-2xl overflow-hidden border border-border/60 bg-gradient-soft p-8">
        <div className="absolute inset-0 bg-mesh opacity-50 pointer-events-none" />
        <div className="relative flex flex-col md:flex-row md:items-end md:justify-between gap-6">
          <div>
            <div className="text-xs font-medium text-primary">Welcome back</div>
            <h1 className="mt-1 text-3xl md:text-4xl font-semibold tracking-tight">
              Namaste, {creatorProfile.name.split(" ")[0]} 👋
            </h1>
            <p className="mt-2 text-muted-foreground max-w-xl">
              MatchIQ surfaced{" "}
              <span className="font-medium text-foreground">
                {recommendedCampaigns.length} new campaigns
              </span>{" "}
              for you today.{" "}
              <span className="font-medium text-foreground">{inr(pendingPaymentTotal)}</span> is
              currently pending across brands.
            </p>
            <div className="mt-4 flex flex-wrap items-center gap-2 text-xs">
              <span className="inline-flex items-center gap-1 px-2 py-1 rounded-full bg-success/15 text-success font-medium">
                <BadgeCheck className="h-3 w-3" /> Verified creator
              </span>
              <span className="inline-flex items-center gap-1 px-2 py-1 rounded-full bg-background border border-border/60 text-muted-foreground">
                <ShieldCheck className="h-3 w-3" /> Reliability {creatorProfile.reliability}%
              </span>
              <span className="inline-flex items-center gap-1 px-2 py-1 rounded-full bg-background border border-border/60 text-muted-foreground">
                <Clock className="h-3 w-3" /> Responds {creatorProfile.responseTime}
              </span>
              <span className="inline-flex items-center gap-1 px-2 py-1 rounded-full bg-background border border-border/60 text-muted-foreground">
                Completion {creatorProfile.completion}%
              </span>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <Button variant="outline" asChild className="bg-background/80 backdrop-blur">
              <Link to="/creator/portfolio">View portfolio</Link>
            </Button>
            <Button
              asChild
              className="bg-gradient-brand text-white shadow-glow hover:opacity-90"
            >
              <Link to="/creator/campaigns">Browse all matches</Link>
            </Button>
          </div>
        </div>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        {stats.map((s) => (
          <div
            key={s.label}
            className="rounded-xl border border-border/60 bg-background p-5 shadow-elegant"
          >
            <div className="flex items-center justify-between">
              <span className="text-xs text-muted-foreground">{s.label}</span>
              <div
                className={cn(
                  "h-7 w-7 rounded-md flex items-center justify-center",
                  s.accent
                    ? "bg-gradient-brand text-white"
                    : "bg-muted text-muted-foreground",
                )}
              >
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
      <section>
        <div className="flex items-center justify-between mb-5">
          <div>
            <div className="flex items-center gap-2 text-sm font-medium text-primary">
              <Sparkles className="h-4 w-4" /> Recommended campaigns
            </div>
            <h2 className="mt-1 text-2xl font-semibold tracking-tight">
              MatchIQ picks for you
            </h2>
            <p className="text-sm text-muted-foreground mt-1">
              Ranked on audience overlap, niche similarity, budget compatibility and campaign
              relevance — with reasoning for every score.
            </p>
          </div>
          <Button variant="ghost" size="sm" asChild>
            <Link to="/creator/campaigns">See all</Link>
          </Button>
        </div>
        <div className="space-y-4">
          {recommendedCampaigns.map((c) => (
            <CampaignCard key={c.id} c={c} />
          ))}
        </div>
      </section>

      {/* Active + Applications + Payments */}
      <div className="grid lg:grid-cols-3 gap-6">
        <div className="rounded-2xl border border-border/60 bg-background p-6 shadow-elegant">
          <div className="flex items-center justify-between mb-4">
            <div>
              <div className="text-xs uppercase tracking-wider font-semibold text-muted-foreground">
                Active collaborations
              </div>
              <div className="mt-1 text-lg font-semibold">{activeCollabs.length} in flight</div>
            </div>
            <Briefcase className="h-4 w-4 text-muted-foreground" />
          </div>
          <div className="space-y-3">
            {activeCollabs.map((a) => (
              <div
                key={a.title}
                className="rounded-xl border border-border/60 p-3 hover:border-primary/30 transition"
              >
                <div className="flex items-start justify-between gap-3">
                  <div className="min-w-0">
                    <div className="text-xs text-muted-foreground">{a.brand}</div>
                    <div className="text-sm font-medium truncate">{a.title}</div>
                  </div>
                  <span className="text-xs px-2 py-0.5 rounded-full bg-primary/10 text-primary font-medium shrink-0">
                    {a.stage}
                  </span>
                </div>
                <div className="mt-2 flex items-center justify-between text-xs text-muted-foreground">
                  <span>Due {a.due}</span>
                  <span className="font-medium text-foreground">{inr(a.value)}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="rounded-2xl border border-border/60 bg-background p-6 shadow-elegant">
          <div className="flex items-center justify-between mb-4">
            <div>
              <div className="text-xs uppercase tracking-wider font-semibold text-muted-foreground">
                Pending applications
              </div>
              <div className="mt-1 text-lg font-semibold">
                {pendingApplications.length} awaiting decision
              </div>
            </div>
            <FileCheck className="h-4 w-4 text-muted-foreground" />
          </div>
          <div className="space-y-2.5">
            {pendingApplications.map((a) => (
              <div
                key={a.title}
                className="flex items-center justify-between p-3 rounded-lg hover:bg-muted/50 transition"
              >
                <div className="min-w-0">
                  <div className="text-sm font-medium truncate">{a.title}</div>
                  <div className="text-xs text-muted-foreground">
                    {a.brand} · applied {a.appliedOn}
                  </div>
                </div>
                <span
                  className={cn(
                    "text-xs px-2 py-0.5 rounded-full font-medium shrink-0",
                    a.status === "Shortlisted"
                      ? "bg-success/15 text-success"
                      : a.status === "Awaiting brief"
                        ? "bg-amber-500/15 text-amber-600"
                        : "bg-muted text-muted-foreground",
                  )}
                >
                  {a.status}
                </span>
              </div>
            ))}
          </div>
        </div>

        <div className="rounded-2xl border border-border/60 bg-background p-6 shadow-elegant">
          <div className="flex items-center justify-between mb-4">
            <div>
              <div className="text-xs uppercase tracking-wider font-semibold text-muted-foreground">
                Payments
              </div>
              <div className="mt-1 text-lg font-semibold">
                {inr(pendingPaymentTotal)} pending
              </div>
            </div>
            <Wallet className="h-4 w-4 text-muted-foreground" />
          </div>
          <div className="space-y-2.5">
            {pendingPayments.map((p) => (
              <div key={p.invoice} className="p-3 rounded-lg border border-border/60">
                <div className="flex items-center justify-between gap-3">
                  <div className="min-w-0">
                    <div className="text-sm font-medium truncate">{p.campaign}</div>
                    <div className="text-xs text-muted-foreground truncate">
                      {p.brand} · {p.invoice}
                    </div>
                  </div>
                  <span
                    className={cn(
                      "text-xs px-2 py-0.5 rounded-full font-medium shrink-0",
                      paymentTone[p.status],
                    )}
                  >
                    {p.status}
                  </span>
                </div>
                <div className="mt-2 flex items-center justify-between text-xs">
                  <span className="text-muted-foreground flex items-center gap-1">
                    <ReceiptText className="h-3 w-3" /> {p.eta}
                  </span>
                  <span className="font-semibold">{inr(p.amount)}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

function CampaignCard({ c }: { c: (typeof recommendedCampaigns)[number] }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="rounded-2xl border border-border/60 bg-background shadow-elegant overflow-hidden hover:border-primary/30 transition">
      <div className="p-6 flex flex-col lg:flex-row lg:items-center gap-6">
        <div className="flex items-start gap-4 flex-1 min-w-0">
          <div className="h-12 w-12 rounded-xl bg-gradient-brand flex items-center justify-center text-white font-semibold text-sm shrink-0">
            {c.initials}
          </div>
          <div className="min-w-0">
            <div className="flex items-center gap-2 text-xs text-muted-foreground">
              <span className="font-medium text-foreground">{c.brand}</span>
              <span>·</span>
              <span>{c.category}</span>
              <span className="px-1.5 py-0.5 rounded bg-muted text-[10px] font-medium uppercase tracking-wide">
                {c.type}
              </span>
            </div>
            <div className="text-base font-semibold mt-1 truncate">{c.title}</div>
            <div className="mt-2 flex flex-wrap gap-x-4 gap-y-1 text-xs text-muted-foreground">
              <span>
                <span className="text-foreground font-medium">Budget</span> ·{" "}
                {c.budgetMin === 0 && c.budgetMax === 0
                  ? "Gifted"
                  : inrRange(c.budgetMin, c.budgetMax)}
              </span>
              <span>
                <span className="text-foreground font-medium">Deliverables</span> · {c.deliverables}
              </span>
              <span>
                <span className="text-foreground font-medium">Language</span> · {c.language}
              </span>
            </div>
          </div>
        </div>
        <div className="flex items-center gap-4 lg:gap-6">
          <div className="text-right">
            <div className="text-[10px] uppercase tracking-wider text-muted-foreground">
              Compatibility
            </div>
            <div className="text-2xl font-semibold text-gradient-brand leading-none mt-1">
              {c.score}%
            </div>
          </div>
          <div className="flex items-center gap-2">
            <Button variant="ghost" size="icon" aria-label="Save">
              <Bookmark className="h-4 w-4" />
            </Button>
            <Button variant="outline" size="sm">
              <ExternalLink className="h-3.5 w-3.5" /> Details
            </Button>
            <Button size="sm" className="bg-gradient-brand text-white hover:opacity-90">
              Apply
            </Button>
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
          {c.reasons.map((r) => (
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
