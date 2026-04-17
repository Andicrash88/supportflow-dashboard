import { Inbox, ListChecks, CheckCircle2, TimerReset } from "lucide-react";
import { StatCard } from "@/components/ui/StatCard";

export function DashboardStats({ metrics }) {
  const cards = [
    {
      title: "Total Tickets",
      value: metrics.totalTickets,
      change: `${metrics.activeTickets} currently active across the queue`,
      icon: Inbox,
      tone: "brand",
    },
    {
      title: "Open Tickets",
      value: metrics.openTickets,
      change: `${metrics.inProgressTickets} already being worked`,
      icon: TimerReset,
    },
    {
      title: "Resolved Tickets",
      value: metrics.resolvedTickets,
      change: `${metrics.totalTickets ? Math.round((metrics.resolvedTickets / metrics.totalTickets) * 100) : 0}% of seeded volume resolved`,
      icon: CheckCircle2,
    },
    {
      title: "Pending Tasks",
      value: metrics.pendingTasks,
      change: `${metrics.dueTodayTasks} due today${metrics.overdueTasks ? `, ${metrics.overdueTasks} overdue` : ""}`,
      icon: ListChecks,
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
