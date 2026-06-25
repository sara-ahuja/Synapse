import { createFileRoute } from "@tanstack/react-router";
import { ComingSoon } from "@/components/synapse/ComingSoon";

export const Route = createFileRoute("/creator/campaigns")({
  component: () => <ComingSoon title="Campaigns" subtitle="Browse open briefs and your active applications." />,
});
