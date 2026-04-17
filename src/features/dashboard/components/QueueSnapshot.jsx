import { tickets } from "@/data/tickets";
import { tasks } from "@/data/tasks";
import { StatusBadge } from "@/components/ui/StatusBadge";

export function QueueSnapshot() {
  return (
    <section className="grid gap-6 xl:grid-cols-[minmax(0,1.5fr)_minmax(0,1fr)]">
      <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-panel">
        <div className="flex items-center justify-between">
          <h2 className="text-lg font-semibold text-slate-950">Latest tickets</h2>
          <p className="text-sm text-slate-500">Seeded records</p>
        </div>
        <div className="mt-5 overflow-x-auto">
          <table className="min-w-full divide-y divide-slate-200 text-left text-sm">
            <thead>
              <tr className="text-slate-500">
                <th className="pb-3 font-medium">Ticket</th>
                <th className="pb-3 font-medium">Requester</th>
                <th className="pb-3 font-medium">Status</th>
                <th className="pb-3 font-medium">Assignee</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              {tickets.map((ticket) => (
                <tr key={ticket.id}>
                  <td className="py-4">
                    <p className="font-medium text-slate-900">{ticket.subject}</p>
                    <p className="mt-1 text-xs text-slate-500">{ticket.id}</p>
                  </td>
                  <td className="py-4 text-slate-600">{ticket.requester}</td>
                  <td className="py-4">
                    <StatusBadge value={ticket.status} />
                  </td>
                  <td className="py-4 text-slate-600">{ticket.assignee}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-panel">
        <div className="flex items-center justify-between">
          <h2 className="text-lg font-semibold text-slate-950">Action queue</h2>
          <p className="text-sm text-slate-500">Tasks due soon</p>
        </div>
        <div className="mt-5 space-y-4">
          {tasks.map((task) => (
            <article className="rounded-2xl border border-slate-200 p-4" key={task.id}>
              <div className="flex items-start justify-between gap-4">
                <div>
                  <p className="font-medium text-slate-900">{task.title}</p>
                  <p className="mt-1 text-sm text-slate-500">{task.type}</p>
                </div>
                <StatusBadge value={task.status} />
              </div>
              <div className="mt-4 flex items-center justify-between text-sm text-slate-500">
                <span>{task.owner}</span>
                <span>{task.dueDate}</span>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
