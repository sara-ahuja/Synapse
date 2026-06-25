import { Link } from "@tanstack/react-router";
import { Logo } from "./Logo";
import { Button } from "@/components/ui/button";

export function MarketingNav() {
  return (
    <header className="sticky top-0 z-50 w-full">
      <div className="glass border-b border-border/50">
        <div className="mx-auto max-w-7xl px-6 h-16 flex items-center justify-between">
          <Logo />
          <nav className="hidden md:flex items-center gap-8 text-sm text-muted-foreground">
            <a href="#problem" className="hover:text-foreground transition">Why Synapse</a>
            <a href="#matchiq" className="hover:text-foreground transition">MatchIQ</a>
            <Link to="/creator" className="hover:text-foreground transition">For Creators</Link>
            <Link to="/brand" className="hover:text-foreground transition">For Brands</Link>
          </nav>
          <div className="flex items-center gap-2">
            <Button asChild variant="ghost" size="sm">
              <Link to="/creator">Sign in</Link>
            </Button>
            <Button asChild size="sm" className="bg-gradient-brand text-white shadow-glow hover:opacity-90">
              <Link to="/brand">Get started</Link>
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
}
