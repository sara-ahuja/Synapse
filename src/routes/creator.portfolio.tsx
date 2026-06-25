import { createFileRoute } from "@tanstack/react-router";
import { Button } from "@/components/ui/button";
import {
  Instagram,
  Youtube,
  Music2,
  MapPin,
  Calendar,
  BadgeCheck,
  ShieldCheck,
  Clock,
} from "lucide-react";
import { inr, creatorProfile } from "@/lib/synapse-data";

export const Route = createFileRoute("/creator/portfolio")({
  head: () => ({ meta: [{ title: "Portfolio — Synapse" }] }),
  component: PortfolioPage,
});

const socials = [
  { icon: Instagram, handle: "@riya.glows", followers: "412K" },
  { icon: Music2, handle: "@riya.glows", followers: "688K" },
  { icon: Youtube, handle: "Riya Sharma", followers: "94K" },
];

const audience = [
  { label: "Female", value: 89 },
  { label: "Age 18–26", value: 71 },
  { label: "Tier 1 metros", value: 64 },
  { label: "Hindi + English", value: 82 },
];

const pricing = [
  { item: "Instagram Reel", price: inr(22000) },
  { item: "TikTok / YT Short", price: inr(15000) },
  { item: "Story set (3)", price: inr(8000) },
  { item: "YouTube integration", price: inr(75000) },
  { item: "UGC pack (5 clips)", price: inr(45000) },
];

const past = [
  { brand: "Mamaearth", year: "2026", result: "4.8M views · 7.2% ER" },
  { brand: "Plum Goodness", year: "2025", result: "9.1% engagement" },
  { brand: "Nykaa", year: "2025", result: "+24K followers" },
  { brand: "Sugar Cosmetics", year: "2024", result: "3.2M reach" },
];

function PortfolioPage() {
  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="rounded-2xl border border-border/60 bg-background overflow-hidden shadow-elegant">
        <div className="h-32 bg-gradient-brand relative">
          <div className="absolute inset-0 bg-mesh opacity-40" />
        </div>
        <div className="px-6 pb-6">
          <div className="flex flex-col md:flex-row md:items-end gap-4 -mt-12">
            <div className="h-24 w-24 rounded-2xl bg-background border-4 border-background shadow-elegant overflow-hidden bg-gradient-to-br from-pink-200 to-purple-300 flex items-center justify-center text-3xl font-semibold text-white">
              R
            </div>
            <div className="flex-1 md:pb-2">
              <div className="flex items-center gap-2 flex-wrap">
                <h1 className="text-2xl font-semibold tracking-tight">
                  {creatorProfile.name}
                </h1>
                <span className="inline-flex items-center gap-1 text-xs px-2 py-0.5 rounded-full bg-success/15 text-success font-medium">
                  <BadgeCheck className="h-3 w-3" /> Verified
                </span>
              </div>
              <div className="mt-1 text-sm text-muted-foreground flex flex-wrap gap-x-4 gap-y-1">
                <span className="flex items-center gap-1">
                  <MapPin className="h-3.5 w-3.5" /> {creatorProfile.city}
                </span>
                <span>{creatorProfile.niches}</span>
                <span>{creatorProfile.handle}</span>
              </div>
              <div className="mt-3 flex flex-wrap items-center gap-2 text-xs">
                <span className="inline-flex items-center gap-1 px-2 py-1 rounded-full bg-background border border-border/60 text-muted-foreground">
                  <ShieldCheck className="h-3 w-3" /> Reliability{" "}
                  {creatorProfile.reliability}%
                </span>
                <span className="inline-flex items-center gap-1 px-2 py-1 rounded-full bg-background border border-border/60 text-muted-foreground">
                  <Clock className="h-3 w-3" /> Responds {creatorProfile.responseTime}
                </span>
                <span className="inline-flex items-center gap-1 px-2 py-1 rounded-full bg-background border border-border/60 text-muted-foreground">
                  Completion {creatorProfile.completion}%
                </span>
              </div>
            </div>
            <div className="flex gap-2 md:pb-2">
              <Button variant="outline">Edit profile</Button>
              <Button className="bg-gradient-brand text-white hover:opacity-90">Share</Button>
            </div>
          </div>
        </div>
      </div>

      <div className="grid lg:grid-cols-3 gap-6">
        <Card title="Social channels">
          <div className="space-y-3">
            {socials.map((s) => (
              <div
                key={s.handle + s.followers}
                className="flex items-center justify-between p-3 rounded-lg bg-muted/50"
              >
                <div className="flex items-center gap-3">
                  <div className="h-8 w-8 rounded-md bg-background border border-border/60 flex items-center justify-center text-muted-foreground">
                    <s.icon className="h-4 w-4" />
                  </div>
                  <div>
                    <div className="text-sm font-medium">{s.handle}</div>
                    <div className="text-xs text-muted-foreground">
                      {s.followers} followers
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </Card>

        <Card title="Engagement">
          <div className="text-4xl font-semibold tracking-tight text-gradient-brand">7.4%</div>
          <div className="text-xs text-muted-foreground mt-1">
            90-day average across IG + Shorts
          </div>
          <div className="mt-5 grid grid-cols-3 gap-3 text-center">
            <Mini label="Avg likes" value="38.2K" />
            <Mini label="Avg comments" value="1.4K" />
            <Mini label="Saves" value="6.8K" />
          </div>
        </Card>

        <Card title="Availability">
          <div className="flex items-center gap-2 text-sm">
            <span className="h-2 w-2 rounded-full bg-success" />
            Accepting briefs · 2 slots this month
          </div>
          <div className="mt-4 space-y-2 text-sm">
            <Slot date="12 Apr" status="Open" />
            <Slot date="26 Apr" status="Open" />
            <Slot date="10 May" status="Booked" />
          </div>
          <Button variant="outline" className="w-full mt-4">
            <Calendar className="h-4 w-4" /> Manage calendar
          </Button>
        </Card>

        <Card title="Audience demographics" className="lg:col-span-2">
          <div className="grid sm:grid-cols-2 gap-4">
            {audience.map((a) => (
              <div key={a.label}>
                <div className="flex justify-between text-sm">
                  <span className="text-muted-foreground">{a.label}</span>
                  <span className="font-medium">{a.value}%</span>
                </div>
                <div className="mt-1.5 h-1.5 rounded-full bg-muted overflow-hidden">
                  <div
                    className="h-full bg-gradient-brand"
                    style={{ width: `${a.value}%` }}
                  />
                </div>
              </div>
            ))}
          </div>
        </Card>

        <Card title="Pricing (INR)">
          <div className="divide-y divide-border/60">
            {pricing.map((p) => (
              <div
                key={p.item}
                className="flex items-center justify-between py-2.5 text-sm"
              >
                <span className="text-muted-foreground">{p.item}</span>
                <span className="font-medium">{p.price}</span>
              </div>
            ))}
          </div>
        </Card>

        <Card title="Past collaborations" className="lg:col-span-2">
          <div className="space-y-2">
            {past.map((p) => (
              <div
                key={p.brand}
                className="flex items-center justify-between p-3 rounded-lg hover:bg-muted/50 transition"
              >
                <div className="flex items-center gap-3">
                  <div className="h-8 w-8 rounded-md bg-gradient-brand text-white flex items-center justify-center text-xs font-semibold">
                    {p.brand[0]}
                  </div>
                  <div>
                    <div className="text-sm font-medium">{p.brand}</div>
                    <div className="text-xs text-muted-foreground">{p.year}</div>
                  </div>
                </div>
                <div className="text-sm font-medium text-success">{p.result}</div>
              </div>
            ))}
          </div>
        </Card>

        <Card title="Portfolio gallery" className="lg:col-span-3">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
            {Array.from({ length: 8 }).map((_, i) => (
              <div
                key={i}
                className="aspect-[3/4] rounded-xl bg-gradient-to-br from-purple-200 via-pink-200 to-blue-200 relative overflow-hidden border border-border/60"
              >
                <div className="absolute inset-0 bg-mesh opacity-60" />
              </div>
            ))}
          </div>
        </Card>
      </div>
    </div>
  );
}

function Card({
  title,
  children,
  className,
}: {
  title: string;
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div
      className={`rounded-2xl border border-border/60 bg-background p-6 shadow-elegant ${className ?? ""}`}
    >
      <div className="text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-4">
        {title}
      </div>
      {children}
    </div>
  );
}

function Mini({ label, value }: { label: string; value: string }) {
  return (
    <div className="rounded-lg bg-muted/50 p-3">
      <div className="text-sm font-semibold">{value}</div>
      <div className="text-[10px] text-muted-foreground uppercase tracking-wide">{label}</div>
    </div>
  );
}

function Slot({ date, status }: { date: string; status: string }) {
  const open = status === "Open";
  return (
    <div className="flex items-center justify-between p-2.5 rounded-md bg-muted/50">
      <span className="text-foreground">{date}</span>
      <span
        className={`text-xs font-medium ${open ? "text-success" : "text-muted-foreground"}`}
      >
        {status}
      </span>
    </div>
  );
}
