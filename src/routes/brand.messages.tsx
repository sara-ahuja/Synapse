import { createFileRoute } from "@tanstack/react-router";
import { ComingSoon } from "@/components/synapse/ComingSoon";

export const Route = createFileRoute("/brand/messages")({
  component: () => <ComingSoon title="Messages" subtitle="Threads with creators you've engaged." />,
});
