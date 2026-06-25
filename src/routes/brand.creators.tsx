import { createFileRoute } from "@tanstack/react-router";
import { Button } from "@/components/ui/button";
import { Search, BadgeCheck, MapPin, Sparkles } from "lucide-react";
import { creatorMarket, inr } from "@/lib/synapse-data";
import { cn } from "@/lib/utils";

export const Route = createFileRoute("/brand/creators")({
  head: () => ({ meta: [{ title: "Creators — Synapse" }] }),
  component: BrandCreators,
});

const filters = [
  "All",
  "Skincare",
  "Beauty",
  "Tech",
  "Finance",
  "Food",
  "Fashion",
  "Comedy",
  "Regional",
  "UPSC / Education",
];

function BrandCreators() {
  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-semibold tracking-tight">Creator marketplace</h1>
        <p className="mt-1 text-muted-foreground text-sm max-w-2xl">
          Browse verified Indian creators across every niche, city and language. Or describe what
          you want — MatchIQ will rank the best fits semantically.
        </p>
      </div>

      <div className="rounded-2xl border border-border/60 bg-gradient-soft p-5 shadow-elegant">
        <div className="flex items-center gap-2 text-sm font-medium text-primary mb-2">
          <Sparkles className="h-4 w-4" /> Semantic search
        </div>
        <div className="relative">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
          <input
            defaultValue="Affordable skincare creators in Mumbai with engaged Gen Z female audiences"
            className="w-full h-11 pl-10 pr-3 rounded-lg border border-border/60 bg-background text-sm focus:outline-none focus:border-ring"
          />
        </div>
        <div className="mt-3 flex flex-wrap gap-1.5 text-[11px]">
          {[
            "College creators under ₹15k",
            "Tamil tech creators",
            "Gen Z fashion creators in Delhi",
            "Bengali comedy under 500K",
          ].map((q) => (
            <button
              key={q}
              className="px-2 py-1 rounded-md bg-background border border-border/60 text-muted-foreground hover:text-foreground hover:border-primary/40 transition"
            >
              {q}
            </button>
          ))}
        </div>
      </div>

      <div className="flex flex-wrap gap-2">
        {filters.map((f, i) => (
          <button
            key={f}
            className={cn(
              "text-xs px-3 py-1.5 rounded-full border transition",
              i === 0
                ? "bg-primary/10 border-primary/30 text-primary font-medium"
                : "border-border/60 text-muted-foreground hover:text-foreground hover:border-primary/40",
            )}
          >
            {f}
          </button>
        ))}
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {creatorMarket.map((c) => (
          <div
            key={c.id}
            className="rounded-2xl border border-border/60 bg-background p-5 shadow-elegant hover:border-primary/30 transition"
          >
            <div className="flex items-start gap-3">
              <div className="h-12 w-12 rounded-xl bg-gradient-brand text-white text-sm font-semibold flex items-center justify-center">
                {c.name[0]}
              </div>
              <div className="flex-1 min-w-0">
                <div className="text-sm font-semibold truncate flex items-center gap-1.5">
                  {c.name}
                  {c.verified && <BadgeCheck className="h-4 w-4 text-success" />}
                </div>
                <div className="text-xs text-muted-foreground truncate">
                  {c.handle} ·{" "}
                  <span className="inline-flex items-center gap-0.5">
                    <MapPin className="h-3 w-3" /> {c.city}
                  </span>
                </div>
                <div className="text-[11px] text-muted-foreground mt-0.5">{c.niche}</div>
              </div>
            </div>
            <div className="mt-4 grid grid-cols-3 gap-2 text-xs text-center">
              <div className="rounded-md bg-muted/60 p-2">
                <div className="font-semibold">{c.followers}</div>
                <div className="text-[10px] text-muted-foreground uppercase tracking-wide">
                  Followers
                </div>
              </div>
              <div className="rounded-md bg-muted/60 p-2">
                <div className="font-semibold">{c.engagement}</div>
                <div className="text-[10px] text-muted-foreground uppercase tracking-wide">
                  ER
                </div>
              </div>
              <div className="rounded-md bg-muted/60 p-2">
                <div className="font-semibold">{inr(c.rate)}</div>
                <div className="text-[10px] text-muted-foreground uppercase tracking-wide">
                  / Reel
                </div>
              </div>
            </div>
            <div className="mt-3 text-[11px] text-muted-foreground">
              Languages: {c.language}
            </div>
            <div className="mt-4 flex gap-2">
              <Button variant="outline" size="sm" className="flex-1">
                View
              </Button>
              <Button size="sm" className="flex-1 bg-gradient-brand text-white hover:opacity-90">
                Invite
              </Button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
