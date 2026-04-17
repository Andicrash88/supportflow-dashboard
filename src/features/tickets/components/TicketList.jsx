import { tickets } from "@/data/tickets";
import { StatusBadge } from "@/components/ui/StatusBadge";
import { formatRelativeDate } from "@/lib/utils";

export function TicketList() {
  return (
    <div className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-panel">
      <div className="overflow-x-auto">
        <table className="min-w-full divide-y divide-slate-200 text-left text-sm">
          <thead className="bg-slate-50">
            <tr className="text-slate-500">
              <th className="px-5 py-4 font-medium">Ticket</th>
              <th className="px-5 py-4 font-medium">Priority</th>
              <th className="px-5 py-4 font-medium">Status</th>
              <th className="px-5 py-4 font-medium">Channel</th>
              <th className="px-5 py-4 font-medium">Created</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-100 bg-white">
            {tickets.map((ticket) => (
              <tr key={ticket.id}>
                <td className="px-5 py-4">
                  <p className="font-medium text-slate-900">{ticket.subject}</p>
                  <p className="mt-1 text-xs text-slate-500">
                    {ticket.id} • {ticket.requester}
                  </p>
                </td>
                <td className="px-5 py-4 text-slate-600">{ticket.priority}</td>
                <td className="px-5 py-4">
                  <StatusBadge value={ticket.status} />
                </td>
                <td className="px-5 py-4 text-slate-600">{ticket.channel}</td>
                <td className="px-5 py-4 text-slate-600">{formatRelativeDate(ticket.createdAt)}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
