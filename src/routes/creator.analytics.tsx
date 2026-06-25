import { createFileRoute } from "@tanstack/react-router";
import { ComingSoon } from "@/components/synapse/ComingSoon";

export const Route = createFileRoute("/creator/analytics")({
  component: () => <ComingSoon title="Analytics" subtitle="Performance across every campaign and channel." />,
});
