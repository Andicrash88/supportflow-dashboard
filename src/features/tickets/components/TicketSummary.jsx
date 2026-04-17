import { Inbox, TimerReset, CheckCircle2, CircleDashed } from "lucide-react";
import { StatCard } from "@/components/ui/StatCard";

export function TicketSummary({ metrics }) {
  const cards = [
    {
      title: "Total tickets",
      value: metrics.totalTickets,
      change: "All records currently in the local queue",
      icon: Inbox,
      tone: "brand",
    },
    {
      title: "Open",
      value: metrics.openTickets,
      change: "Waiting for team pickup or first action",
      icon: CircleDashed,
    },
    {
      title: "In progress",
      value: metrics.inProgressTickets,
      change: "Actively being worked by the support team",
      icon: TimerReset,
    },
    {
      title: "Resolved",
      value: metrics.resolvedTickets,
      change: "Closed successfully in the working set",
      icon: CheckCircle2,
    },
  ];

  return (
    <section className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
      {cards.map((card) => (
        <StatCard key={card.title} {...card} />
      ))}
    </section>
  );
}
