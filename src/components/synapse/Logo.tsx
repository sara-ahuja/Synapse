import { Link } from "@tanstack/react-router";

export function Logo({ to = "/" }: { to?: string }) {
  return (
    <Link to={to} className="flex items-center gap-2 group">
      <div className="relative h-8 w-8 rounded-lg bg-gradient-brand shadow-glow flex items-center justify-center">
        <div className="absolute inset-0 rounded-lg bg-white/20 opacity-0 group-hover:opacity-100 transition-opacity" />
        <svg viewBox="0 0 24 24" className="h-4 w-4 text-white" fill="none" stroke="currentColor" strokeWidth="2.5">
          <path d="M5 12h4l3-7 4 14 3-7h4" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </div>
      <span className="font-semibold text-lg tracking-tight text-foreground">Synapse</span>
    </Link>
  );
}
