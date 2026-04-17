import { StatusBadge } from "@/components/ui/StatusBadge";

export function RecentTicketsCard({ tickets }) {
  return (
    <section className="rounded-2xl border border-slate-200 bg-white p-5 shadow-panel dark:border-slate-800 dark:bg-slate-950">
      <div className="flex items-center justify-between gap-4">
        <div>
          <h2 className="text-lg font-semibold text-slate-950 dark:text-slate-50">Recent tickets</h2>
          <p className="mt-1 text-sm text-slate-500 dark:text-slate-400">Most recent customer conversations from the live queue.</p>
        </div>
        <p className="text-sm text-slate-500 dark:text-slate-400">{tickets.length}/5 shown</p>
      </div>

      {tickets.length ? (
        <div className="mt-5 overflow-x-auto">
          <table className="min-w-full divide-y divide-slate-200 text-left text-sm dark:divide-slate-800">
            <thead>
              <tr className="text-slate-500 dark:text-slate-400">
                <th className="pb-3 font-medium">Ticket</th>
                <th className="pb-3 font-medium">Priority</th>
                <th className="pb-3 font-medium">Status</th>
                <th className="pb-3 font-medium">Created</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100 dark:divide-slate-900">
              {tickets.map((ticket) => (
                <tr key={ticket.id}>
                  <td className="py-4">
                    <p className="font-medium text-slate-900 dark:text-slate-100">{ticket.subject}</p>
                    <p className="mt-1 text-xs text-slate-500 dark:text-slate-400">
                      {ticket.id} | {ticket.requester}
                    </p>
                  </td>
                  <td className="py-4">
                    <StatusBadge value={ticket.priority} variant="priority" />
                  </td>
                  <td className="py-4">
                    <StatusBadge value={ticket.status} />
                  </td>
                  <td className="py-4 text-slate-600 dark:text-slate-300">{ticket.createdLabel}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      ) : (
        <div className="mt-5 rounded-2xl border border-dashed border-slate-200 bg-slate-50 px-4 py-8 text-center text-sm text-slate-500 dark:border-slate-800 dark:bg-slate-900 dark:text-slate-400">
          No recent ticket activity yet. New customer requests will appear here as soon as they enter the queue.
        </div>
      )}
    </section>
  );
}
