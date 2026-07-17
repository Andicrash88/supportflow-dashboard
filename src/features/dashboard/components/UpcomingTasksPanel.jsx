import { StatusBadge } from "@/components/ui/StatusBadge";

export function UpcomingTasksPanel({ tasks }) {
  return (
    <section className="rounded-2xl border border-[#D0D7DE] bg-white p-5 shadow-panel transition duration-200 hover:shadow-[0_16px_28px_rgba(15,23,42,0.08)] dark:border-[#30363D] dark:bg-[#161B22] dark:hover:shadow-[0_18px_32px_rgba(2,6,23,0.35)]">
      <div className="flex items-center justify-between gap-4">
        <div>
          <h2 className="text-lg font-semibold text-slate-950 dark:text-[#F0F6FC]">Today's and upcoming tasks</h2>
          <p className="mt-1 text-sm text-slate-500 dark:text-[#8B949E]">Internal follow-ups ordered by the next due date.</p>
        </div>
        <p className="text-sm text-slate-500 dark:text-[#8B949E]">{tasks.length} scheduled</p>
      </div>

      {tasks.length ? (
        <div className="mt-5 space-y-4">
          {tasks.map((task) => (
            <article className="rounded-2xl border border-[#D0D7DE] p-4 transition-colors hover:bg-slate-50 dark:border-[#30363D] dark:bg-[#0B0E14] dark:hover:bg-[#161B22]" key={task.id}>
              <div className="flex items-start justify-between gap-4">
                <div>
                  <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-brand-700">{task.id}</p>
                  <p className="mt-2 font-medium text-slate-900 dark:text-[#F0F6FC]">{task.title}</p>
                  <p className="mt-1 text-sm text-slate-500 dark:text-[#8B949E]">{task.category}</p>
                </div>
                <StatusBadge value={task.status} />
              </div>
              <div className="mt-4 flex items-center justify-between gap-3 text-sm text-slate-500 dark:text-[#8B949E]">
                <span>{task.owner}</span>
                <div className="text-right">
                  <p className="font-medium text-slate-700 dark:text-[#F0F6FC]">{task.dueLabel}</p>
                  <p>{task.formattedDueDate}</p>
                </div>
              </div>
            </article>
          ))}
        </div>
      ) : (
        <div className="mt-5 rounded-2xl border border-dashed border-[#D0D7DE] bg-slate-50 px-4 py-8 text-center text-sm text-slate-500 dark:border-[#30363D] dark:bg-[#0B0E14] dark:text-[#8B949E]">
          Nothing is due next. Completed work drops out automatically so the panel stays focused.
        </div>
      )}
    </section>
  );
}
