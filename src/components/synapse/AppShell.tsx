import type { ReactNode } from "react";
import { Link, useRouterState } from "@tanstack/react-router";
import { Logo } from "./Logo";
import { cn } from "@/lib/utils";
import { Bell, Search, Settings as SettingsIcon } from "lucide-react";

export interface NavItem {
  label: string;
  to: string;
  icon: ReactNode;
}

export function AppShell({
  nav,
  role,
  children,
}: {
  nav: NavItem[];
  role: "Creator" | "Brand";
  children: ReactNode;
}) {
  const pathname = useRouterState({ select: (s) => s.location.pathname });
  return (
    <div className="min-h-screen bg-mesh">
      <div className="flex">
        <aside className="hidden lg:flex w-64 shrink-0 flex-col border-r border-border/60 bg-background/70 backdrop-blur-xl h-screen sticky top-0">
          <div className="h-16 flex items-center px-6 border-b border-border/60">
            <Logo />
          </div>
          <div className="px-3 py-2">
            <div className="text-[10px] uppercase tracking-wider font-semibold text-muted-foreground px-3 py-2">
              {role} workspace
            </div>
          </div>
          <nav className="flex-1 px-3 space-y-0.5">
            {nav.map((item) => {
              const active = pathname === item.to || (item.to !== "/" && pathname.startsWith(item.to + "/"));
              return (
                <Link
                  key={item.to}
                  to={item.to}
                  className={cn(
                    "flex items-center gap-3 rounded-lg px-3 py-2 text-sm font-medium transition",
                    active
                      ? "bg-accent text-accent-foreground shadow-sm"
                      : "text-muted-foreground hover:bg-muted hover:text-foreground",
                  )}
                >
                  <span className={cn("[&_svg]:size-4", active && "text-primary")}>{item.icon}</span>
                  {item.label}
                </Link>
              );
            })}
          </nav>
          <div className="p-3 border-t border-border/60">
            <div className="rounded-xl bg-gradient-soft p-4 border border-border/60">
              <div className="text-xs font-semibold text-foreground">Upgrade to Pro</div>
              <div className="text-xs text-muted-foreground mt-1">Unlock unlimited MatchIQ recommendations.</div>
            </div>
          </div>
        </aside>
        <div className="flex-1 min-w-0">
          <header className="sticky top-0 z-30 h-16 border-b border-border/60 bg-background/70 backdrop-blur-xl">
            <div className="h-full px-6 flex items-center justify-between gap-4">
              <div className="relative max-w-md flex-1">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                <input
                  placeholder="Search campaigns, creators, brands..."
                  className="w-full h-9 pl-9 pr-3 rounded-lg bg-muted/60 border border-transparent text-sm focus:outline-none focus:border-ring focus:bg-background transition"
                />
              </div>
              <div className="flex items-center gap-2">
                <button className="h-9 w-9 rounded-lg hover:bg-muted flex items-center justify-center text-muted-foreground">
                  <Bell className="h-4 w-4" />
                </button>
                <button className="h-9 w-9 rounded-lg hover:bg-muted flex items-center justify-center text-muted-foreground">
                  <SettingsIcon className="h-4 w-4" />
                </button>
                <div className="h-9 w-9 rounded-full bg-gradient-brand flex items-center justify-center text-white text-xs font-semibold ml-2">
                  {role[0]}
                </div>
              </div>
            </div>
          </header>
          <main className="p-6 lg:p-10 max-w-[1400px] mx-auto">{children}</main>
        </div>
      </div>
    </div>
  );
}
