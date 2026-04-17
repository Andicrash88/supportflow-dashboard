function matchesFilter(value, filterLabel) {
  return filterLabel.startsWith("All ") || value === filterLabel;
}

function sortTickets(tickets, sortBy) {
  const sortedTickets = [...tickets].sort((left, right) => new Date(right.createdAt) - new Date(left.createdAt));

  if (sortBy === "oldest") {
    return sortedTickets.reverse();
  }

  return sortedTickets;
}

export function getFilteredTickets(tickets, controls) {
  const query = controls.searchQuery.trim().toLowerCase();

  return sortTickets(
    tickets.filter((ticket) => {
      const matchesSearch =
        !query ||
        [ticket.subject, ticket.requester, ticket.id, ticket.assignee, ticket.channel]
          .filter(Boolean)
          .some((field) => field.toLowerCase().includes(query));

      return (
        matchesSearch &&
        matchesFilter(ticket.status, controls.statusFilter) &&
        matchesFilter(ticket.priority, controls.priorityFilter)
      );
    }),
    controls.sortBy,
  );
}

export function getTicketMetrics(tickets) {
  return {
    totalTickets: tickets.length,
    openTickets: tickets.filter((ticket) => ticket.status === "Open").length,
    inProgressTickets: tickets.filter((ticket) => ticket.status === "In Progress").length,
    resolvedTickets: tickets.filter((ticket) => ticket.status === "Resolved").length,
  };
}
