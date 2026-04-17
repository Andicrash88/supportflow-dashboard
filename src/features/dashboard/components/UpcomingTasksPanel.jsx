import { StatusBadge } from "@/components/ui/StatusBadge";

export function UpcomingTasksPanel({ tasks }) {
  return (
    <section className="rounded-2xl border border-slate-200 bg-white p-5 shadow-panel">
      <div className="flex items-center justify-between gap-4">
        <div>
          <h2 className="text-lg font-semibold text-slate-950">Today's and upcoming tasks</h2>
          <p className="mt-1 text-sm text-slate-500">Internal follow-ups ordered by the next due date.</p>
        </div>
        <p className="text-sm text-slate-500">{tasks.length} scheduled</p>
      </div>

      {tasks.length ? (
        <div className="mt-5 space-y-4">
          {tasks.map((task) => (
            <article className="rounded-2xl border border-slate-200 p-4" key={task.id}>
              <div className="flex items-start justify-between gap-4">
                <div>
                  <p className="text-xs font-medium uppercase tracking-[0.2em] text-brand-700">{task.id}</p>
                  <p className="mt-2 font-medium text-slate-900">{task.title}</p>
                  <p className="mt-1 text-sm text-slate-500">{task.category}</p>
                </div>
                <StatusBadge value={task.status} />
              </div>
              <div className="mt-4 flex items-center justify-between gap-3 text-sm text-slate-500">
                <span>{task.owner}</span>
                <div className="text-right">
                  <p className="font-medium text-slate-700">{task.dueLabel}</p>
                  <p>{task.formattedDueDate}</p>
                </div>
              </div>
            </article>
          ))}
        </div>
      ) : (
        <div className="mt-5 rounded-2xl border border-dashed border-slate-200 bg-slate-50 px-4 py-8 text-center text-sm text-slate-500">
          Nothing is due next. Add future operations work in a later phase when task creation is enabled.
        </div>
      )}
    </section>
  );
}
