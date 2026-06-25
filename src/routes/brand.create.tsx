import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Sparkles, Check, Wand2 } from "lucide-react";
import { cn } from "@/lib/utils";

export const Route = createFileRoute("/brand/create")({
  head: () => ({ meta: [{ title: "MatchIQ — Create Campaign — Synapse" }] }),
  component: CreateCampaign,
});

type Phase = "form" | "analyzing" | "results";

const analyzingSteps = [
  "Analyzing campaign brief...",
  "Understanding creator profiles...",
  "Ranking compatibility...",
  "Generating recommendations...",
];

const matches = [
  {
    name: "Aria Wilde", handle: "@ariawilde", followers: "412K", engagement: "7.4%", niche: "Beauty · Wellness",
    score: 96, confidence: "High",
    reasons: ["Beauty niche", "Audience overlap (88% Gen Z F)", "Budget compatibility", "Similar campaign history"],
  },
  {
    name: "Noah Kim", handle: "@noah.k", followers: "228K", engagement: "9.1%", niche: "Skincare · Men's",
    score: 92, confidence: "High",
    reasons: ["Skincare adjacency", "High engagement", "Budget compatibility", "2 prior beauty deals"],
  },
  {
    name: "Sasha Vine", handle: "@sashavine", followers: "684K", engagement: "5.8%", niche: "Lifestyle · Beauty",
    score: 88, confidence: "Medium",
    reasons: ["Beauty content history", "Broad reach", "Slightly above budget", "Audience 71% female"],
  },
  {
    name: "Iris Park", handle: "@iris.studio", followers: "164K", engagement: "8.3%", niche: "Clean beauty",
    score: 85, confidence: "Medium",
    reasons: ["Clean-beauty niche fit", "Audience overlap (Gen Z)", "Within budget", "First-time category for brand"],
  },
];

function CreateCampaign() {
  const [phase, setPhase] = useState<Phase>("form");
  const [step, setStep] = useState(0);
  const [nlQuery, setNlQuery] = useState("Affordable skincare creators with highly engaged Gen Z female audiences");

  const runMatchIQ = () => {
    setPhase("analyzing");
    setStep(0);
    const interval = setInterval(() => {
      setStep((s) => {
        if (s >= analyzingSteps.length - 1) {
          clearInterval(interval);
          setTimeout(() => setPhase("results"), 700);
          return s;
        }
        return s + 1;
      });
    }, 850);
  };

  return (
    <div className="space-y-8">
      <div>
        <div className="text-xs font-medium text-primary flex items-center gap-2"><Sparkles className="h-3.5 w-3.5" /> MatchIQ Compatibility Engine</div>
        <h1 className="mt-2 text-3xl md:text-4xl font-semibold tracking-tight">Create a campaign</h1>
        <p className="mt-2 text-muted-foreground max-w-2xl">
          Describe your campaign. MatchIQ analyzes audience, niche, budget and history to rank the best-fit creators with reasoning you can audit.
        </p>
      </div>

      <div className="grid lg:grid-cols-5 gap-6">
        {/* Form */}
        <div className="lg:col-span-3 rounded-2xl border border-border/60 bg-background p-6 shadow-elegant space-y-5">
          <div className="grid sm:grid-cols-2 gap-4">
            <Field label="Campaign title" defaultValue="Spring skincare launch — Gen Z" />
            <Field label="Brand name" defaultValue="Lumière Beauty" />
            <Field label="Budget" defaultValue="$45,000" />
            <Field label="Timeline" defaultValue="Apr 15 – May 30" />
            <Field label="Target audience" defaultValue="Female · 18–24 · US / UK" />
            <Field label="Location" defaultValue="North America" />
          </div>
          <div>
            <Label>Deliverables</Label>
            <div className="flex flex-wrap gap-2 mt-2">
              {["2× Reels", "3× Stories", "1× TikTok", "1× UGC asset"].map((d) => (
                <span key={d} className="text-xs px-3 py-1.5 rounded-full bg-muted text-foreground border border-border/60">{d}</span>
              ))}
            </div>
          </div>
          <div>
            <Label>Campaign description</Label>
            <textarea
              className="mt-2 w-full rounded-lg border border-border/60 bg-background p-3 text-sm resize-none focus:outline-none focus:border-ring h-24"
              defaultValue="Launch our new vitamin-C serum to a Gen Z audience. Bright, optimistic, morning-routine storytelling. Authentic skin-first hero shots."
            />
          </div>

          <div className="rounded-xl border border-border/60 bg-gradient-soft p-4">
            <Label className="flex items-center gap-2 text-primary"><Wand2 className="h-3.5 w-3.5" /> Or describe what you want</Label>
            <input
              value={nlQuery}
              onChange={(e) => setNlQuery(e.target.value)}
              className="mt-2 w-full rounded-lg border border-border/60 bg-background h-10 px-3 text-sm focus:outline-none focus:border-ring"
              placeholder="e.g. Affordable skincare creators with engaged Gen Z female audiences"
            />
          </div>

          <Button onClick={runMatchIQ} disabled={phase === "analyzing"} className="bg-gradient-brand text-white shadow-glow hover:opacity-90 h-11 px-6 w-full sm:w-auto">
            <Sparkles className="h-4 w-4" /> Generate Matches
          </Button>
        </div>

        {/* MatchIQ panel */}
        <div className="lg:col-span-2">
          <div className="rounded-2xl border border-border/60 bg-background shadow-elegant overflow-hidden sticky top-24">
            <div className="p-5 border-b border-border/60 bg-gradient-soft">
              <div className="flex items-center gap-2 text-sm font-semibold">
                <Sparkles className="h-4 w-4 text-primary" /> MatchIQ Compatibility Engine
              </div>
              <p className="text-xs text-muted-foreground mt-1">
                Real-time semantic ranking across 48,200+ verified creators.
              </p>
            </div>

            {phase === "form" && (
              <div className="p-8 text-center text-sm text-muted-foreground">
                Fill out a brief and press <span className="text-foreground font-medium">Generate Matches</span> to start.
              </div>
            )}

            {phase === "analyzing" && (
              <div className="p-6 space-y-3">
                {analyzingSteps.map((s, i) => (
                  <div key={s} className={cn(
                    "flex items-center gap-3 text-sm rounded-lg p-3 transition",
                    i < step && "text-foreground",
                    i === step && "bg-gradient-soft text-foreground",
                    i > step && "text-muted-foreground/60",
                  )}>
                    <div className={cn(
                      "h-5 w-5 rounded-full flex items-center justify-center shrink-0",
                      i < step ? "bg-success text-white" : i === step ? "bg-gradient-brand text-white" : "bg-muted",
                    )}>
                      {i < step ? <Check className="h-3 w-3" /> : i === step ? <Sparkles className="h-3 w-3 animate-pulse" /> : null}
                    </div>
                    <span>{s}</span>
                  </div>
                ))}
              </div>
            )}

            {phase === "results" && (
              <div className="p-5 text-sm">
                <div className="flex items-center justify-between">
                  <div>
                    <div className="text-xs text-muted-foreground">Ranked</div>
                    <div className="font-semibold">{matches.length} recommendations</div>
                  </div>
                  <div className="text-xs text-success font-medium">Avg 90% match</div>
                </div>
                <div className="mt-3 text-xs text-muted-foreground">
                  Interpreted: <span className="text-foreground font-medium">"{nlQuery}"</span>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Results */}
      {phase === "results" && (
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <h2 className="text-xl font-semibold tracking-tight">Recommended creators</h2>
            <Button variant="outline" size="sm">Export shortlist</Button>
          </div>
          <div className="grid md:grid-cols-2 gap-4">
            {matches.map((m) => (
              <CreatorCard key={m.handle} {...m} />
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

function CreatorCard(props: typeof matches[number]) {
  return (
    <div className="rounded-2xl border border-border/60 bg-background p-5 shadow-elegant hover:border-primary/30 transition">
      <div className="flex items-start gap-4">
        <div className="h-14 w-14 rounded-2xl bg-gradient-brand text-white font-semibold flex items-center justify-center shrink-0">{props.name[0]}</div>
        <div className="flex-1 min-w-0">
          <div className="flex items-start justify-between gap-3">
            <div className="min-w-0">
              <div className="text-sm font-semibold truncate">{props.name}</div>
              <div className="text-xs text-muted-foreground truncate">{props.handle} · {props.niche}</div>
            </div>
            <div className="text-right shrink-0">
              <div className="text-xl font-semibold text-gradient-brand leading-none">{props.score}%</div>
              <div className="text-[10px] text-muted-foreground uppercase tracking-wider mt-1">match</div>
            </div>
          </div>
          <div className="mt-3 grid grid-cols-2 gap-2 text-xs">
            <div className="rounded-md bg-muted/60 px-2 py-1.5"><span className="text-muted-foreground">Followers</span> <span className="font-medium float-right">{props.followers}</span></div>
            <div className="rounded-md bg-muted/60 px-2 py-1.5"><span className="text-muted-foreground">Engagement</span> <span className="font-medium float-right">{props.engagement}</span></div>
          </div>
        </div>
      </div>
      <div className="mt-4 pt-4 border-t border-border/60 space-y-1.5">
        {props.reasons.map((r) => (
          <div key={r} className="flex items-center gap-2 text-xs text-muted-foreground">
            <Check className="h-3 w-3 text-success shrink-0" />{r}
          </div>
        ))}
      </div>
      <div className="mt-4 flex items-center justify-between">
        <span className="text-xs">
          Confidence: <span className={cn("font-semibold", props.confidence === "High" ? "text-success" : "text-foreground")}>{props.confidence}</span>
        </span>
        <div className="flex gap-2">
          <Button variant="outline" size="sm">View</Button>
          <Button size="sm" className="bg-gradient-brand text-white hover:opacity-90">Invite</Button>
        </div>
      </div>
    </div>
  );
}

function Label({ children, className }: { children: React.ReactNode; className?: string }) {
  return <div className={cn("text-xs font-medium text-muted-foreground", className)}>{children}</div>;
}

function Field({ label, defaultValue }: { label: string; defaultValue: string }) {
  return (
    <div>
      <Label>{label}</Label>
      <input defaultValue={defaultValue} className="mt-1.5 w-full rounded-lg border border-border/60 bg-background h-10 px-3 text-sm focus:outline-none focus:border-ring" />
    </div>
  );
}
