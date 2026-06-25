import { Sparkles } from "lucide-react";

export function ComingSoon({ title, subtitle }: { title: string; subtitle: string }) {
  return (
    <div className="min-h-[60vh] flex items-center justify-center">
      <div className="text-center max-w-md">
        <div className="mx-auto h-12 w-12 rounded-2xl bg-gradient-brand shadow-glow flex items-center justify-center text-white">
          <Sparkles className="h-5 w-5" />
        </div>
        <h1 className="mt-5 text-2xl font-semibold tracking-tight">{title}</h1>
        <p className="mt-2 text-sm text-muted-foreground">{subtitle}</p>
        <div className="mt-6 inline-flex items-center gap-2 text-xs px-3 py-1 rounded-full bg-muted text-muted-foreground">
          Coming soon
        </div>
      </div>
    </div>
  );
}
