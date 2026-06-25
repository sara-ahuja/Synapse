import { createFileRoute } from "@tanstack/react-router";
import { ComingSoon } from "@/components/synapse/ComingSoon";

export const Route = createFileRoute("/brand/campaigns")({
  component: () => <ComingSoon title="Campaigns" subtitle="All your live, draft and archived campaigns in one place." />,
});
