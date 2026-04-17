import { createContext, useEffect, useMemo, useState } from "react";
import { ticketStorageService } from "@/services/ticketStorageService";

export const TicketsContext = createContext(null);

function sortByNewest(tickets) {
  return [...tickets].sort((left, right) => new Date(right.createdAt) - new Date(left.createdAt));
}

function getNextTicketId(tickets) {
  const maxId = tickets.reduce((highest, ticket) => {
    const numericId = Number(ticket.id.replace("TCK-", ""));
    return Number.isNaN(numericId) ? highest : Math.max(highest, numericId);
  }, 1044);

  return `TCK-${maxId + 1}`;
}

export function TicketsProvider({ children }) {
  const [tickets, setTickets] = useState(() => ticketStorageService.getTickets());

  useEffect(() => {
    ticketStorageService.saveTickets(tickets);
  }, [tickets]);

  const value = useMemo(
    () => ({
      tickets,
      createTicket: (ticketInput) => {
        setTickets((currentTickets) =>
          sortByNewest([
            {
              ...ticketInput,
              id: getNextTicketId(currentTickets),
              createdAt: new Date().toISOString(),
            },
            ...currentTickets,
          ]),
        );
      },
      updateTicket: (ticketId, updates) => {
        setTickets((currentTickets) =>
          sortByNewest(
            currentTickets.map((ticket) => (ticket.id === ticketId ? { ...ticket, ...updates } : ticket)),
          ),
        );
      },
      resolveTicket: (ticketId) => {
        setTickets((currentTickets) =>
          sortByNewest(
            currentTickets.map((ticket) =>
              ticket.id === ticketId ? { ...ticket, status: "Resolved" } : ticket,
            ),
          ),
        );
      },
      deleteTicket: (ticketId) => {
        setTickets((currentTickets) => currentTickets.filter((ticket) => ticket.id !== ticketId));
      },
    }),
    [tickets],
  );

  return <TicketsContext.Provider value={value}>{children}</TicketsContext.Provider>;
}
