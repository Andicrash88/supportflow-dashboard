import { seedTickets } from "@/data/tickets";

const TICKETS_STORAGE_KEY = "supportflow.tickets";

function sortByNewest(tickets) {
  return [...tickets].sort((left, right) => new Date(right.createdAt) - new Date(left.createdAt));
}

function readStoredTickets() {
  if (typeof window === "undefined") {
    return sortByNewest(seedTickets);
  }

  const rawTickets = window.localStorage.getItem(TICKETS_STORAGE_KEY);

  if (!rawTickets) {
    return sortByNewest(seedTickets);
  }

  try {
    const parsedTickets = JSON.parse(rawTickets);
    return Array.isArray(parsedTickets) ? sortByNewest(parsedTickets) : sortByNewest(seedTickets);
  } catch {
    window.localStorage.removeItem(TICKETS_STORAGE_KEY);
    return sortByNewest(seedTickets);
  }
}

function saveTickets(tickets) {
  if (typeof window === "undefined") {
    return;
  }

  window.localStorage.setItem(TICKETS_STORAGE_KEY, JSON.stringify(sortByNewest(tickets)));
}

export const ticketStorageService = {
  getTickets: () => readStoredTickets(),
  saveTickets,
  reset: () => {
    if (typeof window === "undefined") {
      return;
    }

    window.localStorage.removeItem(TICKETS_STORAGE_KEY);
  },
};
