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
        <article className="rounded-2xl border border-[#D0D7DE] bg-white p-5 shadow-panel transition duration-200 hover:-translate-y-0.5 hover:shadow-[0_16px_28px_rgba(15,23,42,0.08)] dark:border-[#30363D] dark:bg-[#161B22] dark:hover:shadow-[0_18px_32px_rgba(2,6,23,0.35)]" key={task.id}>
          <div className="flex items-start justify-between gap-3">
            <div>
              <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-brand-700">{task.id}</p>
              <h2 className="mt-2 text-lg font-semibold text-slate-950 dark:text-[#F0F6FC]">{task.title}</h2>
            </div>
            <StatusBadge value={task.status} />
          </div>

          <dl className="mt-6 space-y-3 text-sm text-slate-600 dark:text-[#8B949E]">
            {getTaskCardRows(task).map((row) => (
              <div className="flex items-start justify-between gap-4" key={row.label}>
                <dt className="shrink-0">{row.label}</dt>
                <dd className={["min-w-0 break-words text-right", row.emphasized ? "font-medium text-slate-900 dark:text-[#F0F6FC]" : ""].join(" ")}>{row.value}</dd>
              </div>
            ))}
          </dl>

          <div className="mt-6 flex flex-wrap gap-2 border-t border-[#D0D7DE] pt-4 dark:border-[#30363D]">
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
          ? "border-rose-200 bg-rose-50 text-rose-700 hover:border-rose-300 hover:bg-rose-100 dark:border-[#F85149]/25 dark:bg-[#F85149]/10 dark:text-[#F85149] dark:hover:border-[#F85149]/45"
          : "border-[#D0D7DE] bg-white text-slate-700 hover:border-brand-200 hover:bg-slate-50 hover:text-brand-700 dark:border-[#30363D] dark:bg-[#0B0E14] dark:text-[#8B949E] dark:hover:border-[#2F81F7] dark:hover:bg-[#161B22] dark:hover:text-[#F0F6FC]",
      ].join(" ")}
      onClick={onClick}
      type="button"
    >
      <Icon className="h-3.5 w-3.5" />
      {label}
    </button>
  );
}
