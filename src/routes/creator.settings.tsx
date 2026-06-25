import { createFileRoute } from "@tanstack/react-router";
import { ComingSoon } from "@/components/synapse/ComingSoon";

export const Route = createFileRoute("/creator/settings")({
  component: () => <ComingSoon title="Settings" subtitle="Account, billing, notifications & integrations." />,
});
