import { createFileRoute } from "@tanstack/react-router";
import { ComingSoon } from "@/components/synapse/ComingSoon";

export const Route = createFileRoute("/creator/messages")({
  component: () => <ComingSoon title="Messages" subtitle="Conversations with brands you collaborate with." />,
});
