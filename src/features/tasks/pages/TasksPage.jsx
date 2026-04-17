import { Filter } from "lucide-react";
import { PageHeader } from "@/components/ui/PageHeader";
import { TaskBoard } from "@/features/tasks/components/TaskBoard";
import { usePageTitle } from "@/hooks/usePageTitle";

export function TasksPage() {
  usePageTitle("Tasks");

  return (
    <div className="space-y-8">
      <PageHeader
        eyebrow="Execution"
        title="Tasks"
        description="A lightweight operations board stub for internal work tracking, ready for statuses, assignees, and drag-and-drop enhancements later."
        actions={
          <button
            className="inline-flex items-center gap-2 rounded-2xl border border-slate-200 bg-white px-4 py-3 text-sm font-semibold text-slate-700 transition hover:border-brand-200 hover:text-brand-700"
            type="button"
          >
            <Filter className="h-4 w-4" />
            Filter
          </button>
        }
      />
      <TaskBoard />
    </div>
  );
}
