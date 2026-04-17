import { Pencil, Trash2, CheckCheck } from "lucide-react";
import { StatusBadge } from "@/components/ui/StatusBadge";
import { formatDate } from "@/lib/utils";
import { TicketListEmptyState } from "@/features/tickets/components/TicketListEmptyState";

export function TicketList({
  hasTickets,
  onCreate,
  onDelete,
  onEdit,
  onResetFilters,
  onResolve,
  tickets,
}) {
  if (!tickets.length) {
    return <TicketListEmptyState hasTickets={hasTickets} onCreate={onCreate} onResetFilters={onResetFilters} />;
  }

  return (
    <div className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-panel">
      <div className="overflow-x-auto">
        <table className="min-w-full divide-y divide-slate-200 text-left text-sm">
          <thead className="bg-slate-50">
            <tr className="text-slate-500">
              <th className="px-5 py-4 font-medium">Ticket</th>
              <th className="px-5 py-4 font-medium">Priority</th>
              <th className="px-5 py-4 font-medium">Status</th>
              <th className="px-5 py-4 font-medium">Assignee</th>
              <th className="px-5 py-4 font-medium">Channel</th>
              <th className="px-5 py-4 font-medium">Created</th>
              <th className="px-5 py-4 font-medium text-right">Actions</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-100 bg-white">
            {tickets.map((ticket) => (
              <tr key={ticket.id}>
                <td className="px-5 py-4">
                  <p className="font-medium text-slate-900">{ticket.subject}</p>
                  <p className="mt-1 text-xs text-slate-500">{ticket.id} | {ticket.requester}</p>
                </td>
                <td className="px-5 py-4">
                  <StatusBadge value={ticket.priority} variant="priority" />
                </td>
                <td className="px-5 py-4">
                  <StatusBadge value={ticket.status} />
                </td>
                <td className="px-5 py-4 text-slate-600">{ticket.assignee}</td>
                <td className="px-5 py-4 text-slate-600">{ticket.channel}</td>
                <td className="px-5 py-4 text-slate-600">
                  {formatDate(ticket.createdAt, {
                    month: "short",
                    day: "numeric",
                    year: "numeric",
                    hour: "numeric",
                    minute: "2-digit",
                  })}
                </td>
                <td className="px-5 py-4">
                  <div className="flex justify-end gap-2">
                    <ActionButton icon={Pencil} label="Edit" onClick={() => onEdit(ticket)} />
                    {ticket.status !== "Resolved" ? (
                      <ActionButton icon={CheckCheck} label="Resolve" onClick={() => onResolve(ticket.id)} />
                    ) : null}
                    <ActionButton destructive icon={Trash2} label="Delete" onClick={() => onDelete(ticket.id)} />
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
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
