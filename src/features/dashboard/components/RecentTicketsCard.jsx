import { StatusBadge } from "@/components/ui/StatusBadge";

export function RecentTicketsCard({ tickets }) {
  return (
    <section className="rounded-2xl border border-[#D0D7DE] bg-white p-5 shadow-panel transition duration-200 hover:shadow-[0_16px_28px_rgba(15,23,42,0.08)] dark:border-[#30363D] dark:bg-[#161B22] dark:hover:shadow-[0_18px_32px_rgba(2,6,23,0.35)]">
      <div className="flex items-center justify-between gap-4">
        <div>
          <h2 className="text-lg font-semibold text-slate-950 dark:text-[#F0F6FC]">Recent tickets</h2>
          <p className="mt-1 text-sm text-slate-500 dark:text-[#8B949E]">Most recent customer conversations from the live queue.</p>
        </div>
        <p className="text-sm text-slate-500 dark:text-[#8B949E]">{tickets.length}/5 shown</p>
      </div>

      {tickets.length ? (
        <div className="mt-5 overflow-x-auto">
          <table className="min-w-[640px] divide-y divide-slate-200 text-left text-sm dark:divide-[#30363D]">
            <thead>
              <tr className="text-slate-500 dark:text-[#8B949E]">
                <th className="pb-3 font-medium">Ticket</th>
                <th className="pb-3 font-medium">Priority</th>
                <th className="pb-3 font-medium">Status</th>
                <th className="pb-3 font-medium">Created</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100 dark:divide-[#30363D]">
              {tickets.map((ticket) => (
                <tr key={ticket.id}>
                  <td className="py-4">
                    <p className="font-medium text-slate-900 dark:text-[#F0F6FC]">{ticket.subject}</p>
                    <p className="mt-1 text-xs text-slate-500 dark:text-[#8B949E]">
                      {ticket.id} | {ticket.requester}
                    </p>
                  </td>
                  <td className="py-4">
                    <StatusBadge value={ticket.priority} variant="priority" />
                  </td>
                  <td className="py-4">
                    <StatusBadge value={ticket.status} />
                  </td>
                  <td className="py-4 text-slate-600 dark:text-[#8B949E]">{ticket.createdLabel}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      ) : (
        <div className="mt-5 rounded-2xl border border-dashed border-[#D0D7DE] bg-slate-50 px-4 py-8 text-center text-sm text-slate-500 dark:border-[#30363D] dark:bg-[#0B0E14] dark:text-[#8B949E]">
          No recent ticket activity yet. New customer requests will appear here as soon as they enter the queue.
        </div>
      )}
    </section>
  );
}
