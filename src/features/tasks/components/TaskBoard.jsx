import { CheckCheck, Pencil, Trash2 } from "lucide-react";
import { StatusBadge } from "@/components/ui/StatusBadge";
import { TaskListEmptyState } from "@/features/tasks/components/TaskListEmptyState";
import { getTaskCardRows } from "@/features/tasks/lib/taskSelectors";

export function TaskBoard({
  hasTasks,
  onComplete,
  onCreate,
  onDelete,
  onEdit,
  onResetFilters,
  tasks,
}) {
  if (!tasks.length) {
    return <TaskListEmptyState hasTasks={hasTasks} onCreate={onCreate} onResetFilters={onResetFilters} />;
  }

  return (
    <div className="grid gap-4 lg:grid-cols-2 2xl:grid-cols-3">
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
            {getTaskCardRows(task).map((row) => (
              <div className="flex items-center justify-between gap-4" key={row.label}>
                <dt>{row.label}</dt>
                <dd className={row.emphasized ? "font-medium text-slate-900" : ""}>{row.value}</dd>
              </div>
            ))}
          </dl>

          <div className="mt-6 flex flex-wrap gap-2 border-t border-slate-200 pt-4">
            <ActionButton icon={Pencil} label="Edit" onClick={() => onEdit(task)} />
            {task.status !== "Completed" ? (
              <ActionButton icon={CheckCheck} label="Complete" onClick={() => onComplete(task.id)} />
            ) : null}
            <ActionButton destructive icon={Trash2} label="Delete" onClick={() => onDelete(task.id)} />
          </div>
        </article>
      ))}
    </div>
  );
}

function ActionButton({ destructive = false, icon: Icon, label, onClick }) {
  return (
    <button
      className={[
        "inline-flex items-center gap-2 rounded-2xl border px-3 py-2 text-xs font-semibold transition",
        destructive
          ? "border-rose-200 bg-rose-50 text-rose-700 hover:border-rose-300 hover:bg-rose-100"
          : "border-slate-200 bg-white text-slate-700 hover:border-brand-200 hover:text-brand-700",
      ].join(" ")}
      onClick={onClick}
      type="button"
    >
      <Icon className="h-3.5 w-3.5" />
      {label}
    </button>
  );
}
