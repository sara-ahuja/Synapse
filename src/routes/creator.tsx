import { Outlet, createFileRoute } from "@tanstack/react-router";
import { AppShell, type NavItem } from "@/components/synapse/AppShell";
import { LayoutDashboard, Megaphone, User, BarChart3, MessageSquare, Settings } from "lucide-react";

export const Route = createFileRoute("/creator")({
  component: CreatorLayout,
});

const nav: NavItem[] = [
  { label: "Dashboard", to: "/creator", icon: <LayoutDashboard /> },
  { label: "Campaigns", to: "/creator/campaigns", icon: <Megaphone /> },
  { label: "Portfolio", to: "/creator/portfolio", icon: <User /> },
  { label: "Analytics", to: "/creator/analytics", icon: <BarChart3 /> },
  { label: "Messages", to: "/creator/messages", icon: <MessageSquare /> },
  { label: "Settings", to: "/creator/settings", icon: <Settings /> },
];

function CreatorLayout() {
  return (
    <AppShell nav={nav} role="Creator">
      <Outlet />
    </AppShell>
  );
}
