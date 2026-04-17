import { useState } from "react";
import { Plus } from "lucide-react";
import { PageHeader } from "@/components/ui/PageHeader";
import { TicketFilters } from "@/features/tickets/components/TicketFilters";
import { TicketFormModal } from "@/features/tickets/components/TicketFormModal";
import { TicketList } from "@/features/tickets/components/TicketList";
import { TicketSummary } from "@/features/tickets/components/TicketSummary";
import { getFilteredTickets, getTicketMetrics } from "@/features/tickets/lib/ticketSelectors";
import { usePageTitle } from "@/hooks/usePageTitle";
import { useTickets } from "@/hooks/useTickets";

const defaultControls = {
  searchQuery: "",
  statusFilter: "All statuses",
  priorityFilter: "All priorities",
  sortBy: "newest",
};

export function TicketsPage() {
  usePageTitle("Tickets");
  const { createTicket, deleteTicket, resolveTicket, tickets, updateTicket } = useTickets();
  const [controls, setControls] = useState(defaultControls);
  const [activeModal, setActiveModal] = useState(null);
  const [selectedTicket, setSelectedTicket] = useState(null);

  const filteredTickets = getFilteredTickets(tickets, controls);
  const metrics = getTicketMetrics(tickets);

  const openCreateModal = () => {
    setSelectedTicket(null);
    setActiveModal("create");
  };

  const openEditModal = (ticket) => {
    setSelectedTicket(ticket);
    setActiveModal("edit");
  };

  const closeModal = () => {
    setActiveModal(null);
    setSelectedTicket(null);
  };

  const handleControlChange = (event) => {
    const { name, value } = event.target;
    setControls((currentControls) => ({ ...currentControls, [name]: value }));
  };

  const handleResetFilters = () => {
    setControls(defaultControls);
  };

  const handleCreateTicket = (ticketInput) => {
    createTicket(ticketInput);
    closeModal();
  };

  const handleEditTicket = (ticketInput) => {
    updateTicket(selectedTicket.id, ticketInput);
    closeModal();
  };

  const handleDeleteTicket = (ticketId) => {
    const targetTicket = tickets.find((ticket) => ticket.id === ticketId);

    if (!targetTicket) {
      return;
    }

    if (window.confirm(`Delete ${targetTicket.id}? This removes it from the local queue.`)) {
      deleteTicket(ticketId);
    }
  };

  return (
    <div className="space-y-8">
      <PageHeader
        eyebrow="Queue"
        title="Tickets"
        description="Manage the local support queue with searchable records, filters, and in-browser CRUD backed by local storage."
        actions={
          <button
            className="inline-flex items-center gap-2 rounded-2xl bg-brand-700 px-4 py-3 text-sm font-semibold text-white transition hover:bg-brand-800"
            onClick={openCreateModal}
            type="button"
          >
            <Plus className="h-4 w-4" />
            New ticket
          </button>
        }
      />

      <TicketSummary metrics={metrics} />

      <TicketFilters
        controls={controls}
        onChange={handleControlChange}
        onReset={handleResetFilters}
        resultCount={filteredTickets.length}
        totalCount={tickets.length}
      />

      <TicketList
        hasTickets={tickets.length > 0}
        onCreate={openCreateModal}
        onDelete={handleDeleteTicket}
        onEdit={openEditModal}
        onResetFilters={handleResetFilters}
        onResolve={resolveTicket}
        tickets={filteredTickets}
      />

      {activeModal ? (
        <TicketFormModal
          mode={activeModal}
          onClose={closeModal}
          onSubmit={activeModal === "create" ? handleCreateTicket : handleEditTicket}
          ticket={selectedTicket}
        />
      ) : null}
    </div>
  );
}
