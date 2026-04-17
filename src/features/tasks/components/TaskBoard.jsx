import { tasks } from "@/data/tasks";
import { StatusBadge } from "@/components/ui/StatusBadge";
import { formatLongDate } from "@/lib/utils";

export function TaskBoard() {
  return (
    <div className="grid gap-4 lg:grid-cols-3">
      {tasks.map((task) => (
        <article className="rounded-2xl border border-slate-200 bg-white p-5 shadow-panel" key={task.id}>
          <div className="flex items-start justify-between gap-3">
            <div>
              <p className="text-xs font-medium uppercase tracking-[0.2em] text-brand-700">{task.id}</p>
              <h2 className="mt-2 text-lg font-semibold text-slate-950">{task.title}</h2>
            </div>
            <StatusBadge value={task.status} />
          </div>
          <dl className="mt-6 space-y-3 text-sm text-slate-600">
            <div className="flex items-center justify-between gap-4">
              <dt>Owner</dt>
              <dd className="font-medium text-slate-900">{task.owner}</dd>
            </div>
            <div className="flex items-center justify-between gap-4">
              <dt>Type</dt>
              <dd>{task.type}</dd>
            </div>
            <div className="flex items-center justify-between gap-4">
              <dt>Due date</dt>
              <dd>{formatLongDate(task.dueDate)}</dd>
            </div>
          </dl>
        </article>
      ))}
    </div>
  );
}
