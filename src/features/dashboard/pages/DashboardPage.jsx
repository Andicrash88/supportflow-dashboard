import { Inbox, ListChecks, Clock3, TrendingUp } from "lucide-react";
import { PageHeader } from "@/components/ui/PageHeader";
import { StatCard } from "@/components/ui/StatCard";
import { TicketVolumeChart } from "@/components/charts/TicketVolumeChart";
import { QueueSnapshot } from "@/features/dashboard/components/QueueSnapshot";
import { tickets } from "@/data/tickets";
import { tasks } from "@/data/tasks";
import { usePageTitle } from "@/hooks/usePageTitle";

export function DashboardPage() {
  usePageTitle("Dashboard");

  return (
    <div className="space-y-8">
      <PageHeader
        eyebrow="Support Ops"
        title="Team dashboard"
        description="A production-ready shell for monitoring queues, workload, and upcoming support actions before real services are connected."
      />

      <section className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
        <StatCard change="+8% from last week" icon={Inbox} title="Open tickets" tone="brand" value={tickets.length} />
        <StatCard change="3 tasks due today" icon={ListChecks} title="Active tasks" value={tasks.length} />
        <StatCard change="Median first reply 18m" icon={Clock3} title="SLA at risk" value="06" />
        <StatCard change="Steady backlog trend" icon={TrendingUp} title="CSAT trend" value="94%" />
      </section>

      <TicketVolumeChart />
      <QueueSnapshot />
    </div>
  );
}
