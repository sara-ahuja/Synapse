import { createFileRoute } from "@tanstack/react-router";
import { ComingSoon } from "@/components/synapse/ComingSoon";

export const Route = createFileRoute("/brand/settings")({
  component: () => <ComingSoon title="Settings" subtitle="Team, billing, brand profile & integrations." />,
});
