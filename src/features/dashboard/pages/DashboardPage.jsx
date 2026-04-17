import { PageHeader } from "@/components/ui/PageHeader";
import { DashboardStats } from "@/features/dashboard/components/DashboardStats";
import { RecentTicketsCard } from "@/features/dashboard/components/RecentTicketsCard";
import { TicketVolumeChartCard } from "@/features/dashboard/components/TicketVolumeChartCard";
import { UpcomingTasksPanel } from "@/features/dashboard/components/UpcomingTasksPanel";
import {
  getDashboardMetrics,
  getRecentTickets,
  getUpcomingTasks,
  getWeeklyTicketVolume,
} from "@/features/dashboard/lib/dashboardSelectors";
import { tasks } from "@/data/tasks";
import { usePageTitle } from "@/hooks/usePageTitle";
import { useTickets } from "@/hooks/useTickets";

export function DashboardPage() {
  usePageTitle("Dashboard");
  const { tickets } = useTickets();
  const metrics = getDashboardMetrics(tickets, tasks);
  const recentTickets = getRecentTickets(tickets);
  const upcomingTasks = getUpcomingTasks(tasks);
  const weeklyVolume = getWeeklyTicketVolume(tickets);

  return (
    <div className="space-y-8">
      <PageHeader
        eyebrow="Support Ops"
        title="Team dashboard"
        description="A live seeded overview of queue health, recent ticket activity, and the next internal support actions."
      />

      <DashboardStats metrics={metrics} />

      <TicketVolumeChartCard data={weeklyVolume} />

      <section className="grid gap-6 xl:grid-cols-[minmax(0,1.5fr)_minmax(0,1fr)]">
        <RecentTicketsCard tickets={recentTickets} />
        <UpcomingTasksPanel tasks={upcomingTasks} />
      </section>
    </div>
  );
}
