import { Outlet, createFileRoute } from "@tanstack/react-router";
import { AppShell, type NavItem } from "@/components/synapse/AppShell";
import { LayoutDashboard, Rocket, Users, Sparkles, MessageSquare, Settings } from "lucide-react";

export const Route = createFileRoute("/brand")({
  component: BrandLayout,
});

const nav: NavItem[] = [
  { label: "Dashboard", to: "/brand", icon: <LayoutDashboard /> },
  { label: "Campaigns", to: "/brand/campaigns", icon: <Rocket /> },
  { label: "Creators", to: "/brand/creators", icon: <Users /> },
  { label: "MatchIQ", to: "/brand/create", icon: <Sparkles /> },
  { label: "Messages", to: "/brand/messages", icon: <MessageSquare /> },
  { label: "Settings", to: "/brand/settings", icon: <Settings /> },
];

function BrandLayout() {
  return (
    <AppShell nav={nav} role="Brand">
      <Outlet />
    </AppShell>
  );
}
