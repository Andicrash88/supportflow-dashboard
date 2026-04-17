import { Plus } from "lucide-react";
import { PageHeader } from "@/components/ui/PageHeader";
import { TicketList } from "@/features/tickets/components/TicketList";
import { usePageTitle } from "@/hooks/usePageTitle";

export function TicketsPage() {
  usePageTitle("Tickets");

  return (
    <div className="space-y-8">
      <PageHeader
        eyebrow="Queue"
        title="Tickets"
        description="A placeholder queue view with seeded records and realistic table structure for the next implementation phase."
        actions={
          <button
            className="inline-flex items-center gap-2 rounded-2xl bg-brand-700 px-4 py-3 text-sm font-semibold text-white transition hover:bg-brand-800"
            type="button"
          >
            <Plus className="h-4 w-4" />
            New ticket
          </button>
        }
      />
      <TicketList />
    </div>
  );
}
