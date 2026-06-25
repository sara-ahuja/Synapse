import { createFileRoute } from "@tanstack/react-router";
import { ComingSoon } from "@/components/synapse/ComingSoon";

export const Route = createFileRoute("/brand/creators")({
  component: () => <ComingSoon title="Creators" subtitle="Search, save and shortlist creators across the network." />,
});
