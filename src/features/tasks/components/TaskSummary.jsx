import { CheckCircle2, CircleDashed, ShieldAlert, ListTodo } from "lucide-react";
import { StatCard } from "@/components/ui/StatCard";

export function TaskSummary({ metrics }) {
  const cards = [
    {
      title: "Total tasks",
      value: metrics.totalTasks,
      change: `${metrics.actionableTasks} still active in the operations queue`,
      icon: ListTodo,
      tone: "brand",
    },
    {
      title: "In progress",
      value: metrics.inProgressTasks,
      change: "Work already underway by the team",
      icon: CircleDashed,
    },
    {
      title: "Blocked",
      value: metrics.blockedTasks,
      change: "Tasks currently waiting on a dependency",
      icon: ShieldAlert,
    },
    {
      title: "Completed",
      value: metrics.completedTasks,
      change: "Finished successfully in the local workspace",
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
