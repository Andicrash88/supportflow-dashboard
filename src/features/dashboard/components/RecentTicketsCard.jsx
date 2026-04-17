import { StatusBadge } from "@/components/ui/StatusBadge";

export function RecentTicketsCard({ tickets }) {
  return (
    <section className="rounded-2xl border border-slate-200 bg-white p-5 shadow-panel">
      <div className="flex items-center justify-between gap-4">
        <div>
          <h2 className="text-lg font-semibold text-slate-950">Recent tickets</h2>
          <p className="mt-1 text-sm text-slate-500">Most recent customer conversations from the seeded queue.</p>
        </div>
        <p className="text-sm text-slate-500">{tickets.length}/5 shown</p>
      </div>

      {tickets.length ? (
        <div className="mt-5 overflow-x-auto">
          <table className="min-w-full divide-y divide-slate-200 text-left text-sm">
            <thead>
              <tr className="text-slate-500">
                <th className="pb-3 font-medium">Ticket</th>
                <th className="pb-3 font-medium">Priority</th>
                <th className="pb-3 font-medium">Status</th>
                <th className="pb-3 font-medium">Created</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              {tickets.map((ticket) => (
                <tr key={ticket.id}>
                  <td className="py-4">
                    <p className="font-medium text-slate-900">{ticket.subject}</p>
                    <p className="mt-1 text-xs text-slate-500">
                      {ticket.id} | {ticket.requester}
                    </p>
                  </td>
                  <td className="py-4">
                    <StatusBadge value={ticket.priority} variant="priority" />
                  </td>
                  <td className="py-4">
                    <StatusBadge value={ticket.status} />
                  </td>
                  <td className="py-4 text-slate-600">{ticket.createdLabel}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      ) : (
        <div className="mt-5 rounded-2xl border border-dashed border-slate-200 bg-slate-50 px-4 py-8 text-center text-sm text-slate-500">
          No tickets yet. New customer requests will appear here as soon as they enter the queue.
        </div>
      )}
    </section>
  );
}
