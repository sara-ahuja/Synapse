import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Sparkles,
  Check,
  Wand2,
  BadgeCheck,
  ShieldCheck,
  Clock,
  IndianRupee,
} from "lucide-react";
import { cn } from "@/lib/utils";
import { creatorMatches, inr, type CreatorMatch } from "@/lib/synapse-data";

export const Route = createFileRoute("/brand/create")({
  head: () => ({ meta: [{ title: "MatchIQ — Create Campaign — Synapse" }] }),
  component: CreateCampaign,
});

type Phase = "form" | "analyzing" | "results";

const analyzingSteps = [
  "Parsing campaign brief and intent…",
  "Embedding semantic query across 48,200+ creators…",
  "Scoring audience, niche, budget, language, location…",
  "Cross-checking past campaign performance & reliability…",
  "Ranking and generating explanations…",
];

function CreateCampaign() {
  const [phase, setPhase] = useState<Phase>("form");
  const [step, setStep] = useState(0);
  const [nlQuery, setNlQuery] = useState(
    "Affordable skincare creators in Mumbai with highly engaged Gen Z female audiences",
  );

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
    }, 700);
  };

  return (
    <div className="space-y-8">
      <div>
        <div className="text-xs font-medium text-primary flex items-center gap-2">
          <Sparkles className="h-3.5 w-3.5" /> MatchIQ Recommendation Engine
        </div>
        <h1 className="mt-2 text-3xl md:text-4xl font-semibold tracking-tight">
          Create a campaign
        </h1>
        <p className="mt-2 text-muted-foreground max-w-2xl">
          Publish a structured brief, or describe what you want in plain English. MatchIQ ranks
          every creator on audience, niche, budget, language and history — and explains the
          reasoning for each recommendation.
        </p>
      </div>

      <div className="grid lg:grid-cols-5 gap-6">
        {/* Form */}
        <div className="lg:col-span-3 rounded-2xl border border-border/60 bg-background p-6 shadow-elegant space-y-5">
          <div className="grid sm:grid-cols-2 gap-4">
            <Field label="Campaign title" defaultValue="Ubtan Face Wash — Gen Z push" />
            <Field label="Brand" defaultValue="Mamaearth" />
            <Field label="Budget (INR)" defaultValue="₹6,00,000" icon={IndianRupee} />
            <Field label="Timeline" defaultValue="15 Apr – 30 May 2026" />
            <Field label="Target audience" defaultValue="Female · 18–26 · Tier 1 + Tier 2" />
            <Field label="Location & language" defaultValue="Pan India · Hindi + English" />
          </div>
          <div>
            <Label>Campaign type</Label>
            <div className="flex flex-wrap gap-2 mt-2">
              {[
                "Paid collab",
                "Gifted collab",
                "UGC only",
                "Affiliate",
                "Event invite",
                "Product launch",
                "PR package",
              ].map((t, i) => (
                <span
                  key={t}
                  className={cn(
                    "text-xs px-3 py-1.5 rounded-full border",
                    i === 0
                      ? "bg-primary/10 border-primary/30 text-primary font-medium"
                      : "bg-muted border-border/60 text-foreground",
                  )}
                >
                  {t}
                </span>
              ))}
            </div>
          </div>
          <div>
            <Label>Deliverables</Label>
            <div className="flex flex-wrap gap-2 mt-2">
              {["2× Reels", "4× Stories", "1× YT Short", "1× UGC asset"].map((d) => (
                <span
                  key={d}
                  className="text-xs px-3 py-1.5 rounded-full bg-muted text-foreground border border-border/60"
                >
                  {d}
                </span>
              ))}
            </div>
          </div>
          <div>
            <Label>Campaign description</Label>
            <textarea
              className="mt-2 w-full rounded-lg border border-border/60 bg-background p-3 text-sm resize-none focus:outline-none focus:border-ring h-24"
              defaultValue="Launching our new Ubtan Face Wash to Gen Z India. Bright, optimistic, morning-routine storytelling in Hindi + English. Authentic skin-first hero shots, with a clear price callout (₹249)."
            />
          </div>

          <div className="rounded-xl border border-border/60 bg-gradient-soft p-4">
            <Label className="flex items-center gap-2 text-primary">
              <Wand2 className="h-3.5 w-3.5" /> Semantic search — describe what you want
            </Label>
            <input
              value={nlQuery}
              onChange={(e) => setNlQuery(e.target.value)}
              className="mt-2 w-full rounded-lg border border-border/60 bg-background h-10 px-3 text-sm focus:outline-none focus:border-ring"
              placeholder='e.g. "Tamil tech creators under ₹15k" or "College creators in Delhi"'
            />
            <div className="mt-2 flex flex-wrap gap-1.5 text-[11px]">
              {[
                "Affordable skincare creators in Mumbai",
                "College creators under ₹15k",
                "Tamil tech creators",
                "Gen Z fashion creators in Delhi",
              ].map((q) => (
                <button
                  key={q}
                  onClick={() => setNlQuery(q)}
                  className="px-2 py-1 rounded-md bg-background border border-border/60 text-muted-foreground hover:text-foreground hover:border-primary/40 transition"
                >
                  {q}
                </button>
              ))}
            </div>
          </div>

          <Button
            onClick={runMatchIQ}
            disabled={phase === "analyzing"}
            className="bg-gradient-brand text-white shadow-glow hover:opacity-90 h-11 px-6 w-full sm:w-auto"
          >
            <Sparkles className="h-4 w-4" /> Generate AI Matches
          </Button>
        </div>

        {/* MatchIQ panel */}
        <div className="lg:col-span-2">
          <div className="rounded-2xl border border-border/60 bg-background shadow-elegant overflow-hidden sticky top-24">
            <div className="p-5 border-b border-border/60 bg-gradient-soft">
              <div className="flex items-center gap-2 text-sm font-semibold">
                <Sparkles className="h-4 w-4 text-primary" /> MatchIQ Engine
              </div>
              <p className="text-xs text-muted-foreground mt-1">
                Semantic ranking across audience, niche, budget, language, location, history and
                engagement quality.
              </p>
            </div>

            {phase === "form" && (
              <div className="p-8 text-center text-sm text-muted-foreground">
                Fill out a brief and press{" "}
                <span className="text-foreground font-medium">Generate AI Matches</span> to start.
              </div>
            )}

            {phase === "analyzing" && (
              <div className="p-6 space-y-3">
                {analyzingSteps.map((s, i) => (
                  <div
                    key={s}
                    className={cn(
                      "flex items-center gap-3 text-sm rounded-lg p-3 transition",
                      i < step && "text-foreground",
                      i === step && "bg-gradient-soft text-foreground",
                      i > step && "text-muted-foreground/60",
                    )}
                  >
                    <div
                      className={cn(
                        "h-5 w-5 rounded-full flex items-center justify-center shrink-0",
                        i < step
                          ? "bg-success text-white"
                          : i === step
                            ? "bg-gradient-brand text-white"
                            : "bg-muted",
                      )}
                    >
                      {i < step ? (
                        <Check className="h-3 w-3" />
                      ) : i === step ? (
                        <Sparkles className="h-3 w-3 animate-pulse" />
                      ) : null}
                    </div>
                    <span>{s}</span>
                  </div>
                ))}
              </div>
            )}

            {phase === "results" && (
              <div className="p-5 text-sm space-y-3">
                <div className="flex items-center justify-between">
                  <div>
                    <div className="text-xs text-muted-foreground">Ranked</div>
                    <div className="font-semibold">
                      {creatorMatches.length} recommendations
                    </div>
                  </div>
                  <div className="text-xs text-success font-medium">Avg 90% match</div>
                </div>
                <div className="text-xs text-muted-foreground">
                  Interpreted: <span className="text-foreground font-medium">"{nlQuery}"</span>
                </div>
                <div className="rounded-lg bg-muted/50 p-3 text-xs text-muted-foreground leading-relaxed">
                  MatchIQ weighted{" "}
                  <span className="text-foreground font-medium">audience overlap</span>,{" "}
                  <span className="text-foreground font-medium">niche similarity</span>,{" "}
                  <span className="text-foreground font-medium">budget fit</span>,{" "}
                  <span className="text-foreground font-medium">language & location</span> and{" "}
                  <span className="text-foreground font-medium">past campaign performance</span>{" "}
                  to produce this shortlist.
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
            <div>
              <h2 className="text-xl font-semibold tracking-tight">Recommended creators</h2>
              <p className="text-sm text-muted-foreground mt-0.5">
                Each card explains why MatchIQ ranked this creator — audit before you invite.
              </p>
            </div>
            <Button variant="outline" size="sm">
              Export shortlist
            </Button>
          </div>
          <div className="grid md:grid-cols-2 gap-4">
            {creatorMatches.map((m) => (
              <CreatorCard key={m.handle} {...m} />
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

function CreatorCard(props: CreatorMatch) {
  return (
    <div className="rounded-2xl border border-border/60 bg-background p-5 shadow-elegant hover:border-primary/30 transition">
      <div className="flex items-start gap-4">
        <div className="h-14 w-14 rounded-2xl bg-gradient-brand text-white font-semibold flex items-center justify-center shrink-0">
          {props.name[0]}
        </div>
        <div className="flex-1 min-w-0">
          <div className="flex items-start justify-between gap-3">
            <div className="min-w-0">
              <div className="text-sm font-semibold truncate flex items-center gap-1.5">
                {props.name}
                {props.verified && <BadgeCheck className="h-4 w-4 text-success" />}
              </div>
              <div className="text-xs text-muted-foreground truncate">
                {props.handle} · {props.city} · {props.niche}
              </div>
              <div className="text-[11px] text-muted-foreground mt-0.5">
                Languages: {props.language}
              </div>
            </div>
            <div className="text-right shrink-0">
              <div className="text-xl font-semibold text-gradient-brand leading-none">
                {props.score}%
              </div>
              <div className="text-[10px] text-muted-foreground uppercase tracking-wider mt-1">
                match
              </div>
            </div>
          </div>
          <div className="mt-3 grid grid-cols-2 gap-2 text-xs">
            <Stat label="Followers" value={props.followers} />
            <Stat label="Engagement" value={props.engagement} />
            <Stat label="Niche" value={props.niche.split(" · ")[0]} />
            <Stat
              label="Budget fit"
              value={props.budgetFit}
              tone={
                props.budgetFit === "Inside budget"
                  ? "good"
                  : props.budgetFit === "Slight stretch"
                    ? "warn"
                    : "muted"
              }
            />
          </div>
        </div>
      </div>

      <div className="mt-4 pt-4 border-t border-border/60">
        <div className="flex items-center gap-2 text-xs font-semibold text-primary mb-2">
          <Sparkles className="h-3.5 w-3.5" /> Why this creator?
        </div>
        <p className="text-xs text-muted-foreground leading-relaxed">{props.why}</p>
        <div className="mt-3 space-y-1.5">
          {props.reasons.map((r) => (
            <div key={r} className="flex items-center gap-2 text-xs text-muted-foreground">
              <Check className="h-3 w-3 text-success shrink-0" />
              {r}
            </div>
          ))}
        </div>
      </div>

      <div className="mt-4 pt-4 border-t border-border/60 flex items-center justify-between text-xs">
        <div className="flex flex-wrap items-center gap-x-3 gap-y-1 text-muted-foreground">
          <span className="flex items-center gap-1">
            <ShieldCheck className="h-3 w-3" /> {props.reliability}% reliable
          </span>
          <span className="flex items-center gap-1">
            <Clock className="h-3 w-3" /> {props.responseTime}
          </span>
          <span>{props.completion}% completion</span>
        </div>
        <div className="flex items-center gap-2">
          <span className="text-foreground font-medium">{inr(props.rate)}/Reel</span>
        </div>
      </div>

      <div className="mt-3 flex items-center justify-between">
        <span className="text-xs">
          Confidence:{" "}
          <span
            className={cn(
              "font-semibold",
              props.confidence === "High" ? "text-success" : "text-amber-600",
            )}
          >
            {props.confidence}
          </span>
        </span>
        <div className="flex gap-2">
          <Button variant="outline" size="sm">
            View profile
          </Button>
          <Button size="sm" className="bg-gradient-brand text-white hover:opacity-90">
            Invite
          </Button>
        </div>
      </div>
    </div>
  );
}

function Stat({
  label,
  value,
  tone,
}: {
  label: string;
  value: string;
  tone?: "good" | "warn" | "muted";
}) {
  return (
    <div className="rounded-md bg-muted/60 px-2 py-1.5">
      <span className="text-muted-foreground">{label}</span>{" "}
      <span
        className={cn(
          "font-medium float-right",
          tone === "good" && "text-success",
          tone === "warn" && "text-amber-600",
        )}
      >
        {value}
      </span>
    </div>
  );
}

function Label({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div className={cn("text-xs font-medium text-muted-foreground", className)}>{children}</div>
  );
}

function Field({
  label,
  defaultValue,
  icon: Icon,
}: {
  label: string;
  defaultValue: string;
  icon?: React.ComponentType<{ className?: string }>;
}) {
  return (
    <div>
      <Label>{label}</Label>
      <div className="relative mt-1.5">
        {Icon && (
          <Icon className="absolute left-3 top-1/2 -translate-y-1/2 h-3.5 w-3.5 text-muted-foreground" />
        )}
        <input
          defaultValue={defaultValue}
          className={cn(
            "w-full rounded-lg border border-border/60 bg-background h-10 px-3 text-sm focus:outline-none focus:border-ring",
            Icon && "pl-8",
          )}
        />
      </div>
    </div>
  );
}
