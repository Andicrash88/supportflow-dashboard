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
    <div className="overflow-hidden rounded-2xl border border-[#D0D7DE] bg-white shadow-panel transition duration-200 hover:shadow-[0_16px_28px_rgba(15,23,42,0.08)] dark:border-[#30363D] dark:bg-[#161B22] dark:hover:shadow-[0_18px_32px_rgba(2,6,23,0.35)]">
      <div className="overflow-x-auto">
        <table className="min-w-full divide-y divide-slate-200 text-left text-sm dark:divide-[#30363D]">
          <thead className="bg-slate-50 dark:bg-[#0B0E14]">
            <tr className="text-slate-500 dark:text-[#8B949E]">
              <th className="px-5 py-4 font-medium">Ticket</th>
              <th className="px-5 py-4 font-medium">Priority</th>
              <th className="px-5 py-4 font-medium">Status</th>
              <th className="px-5 py-4 font-medium">Assignee</th>
              <th className="px-5 py-4 font-medium">Channel</th>
              <th className="px-5 py-4 font-medium">Created</th>
              <th className="px-5 py-4 font-medium text-right">Actions</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-100 bg-white dark:divide-[#30363D] dark:bg-[#161B22]">
            {tickets.map((ticket) => (
              <tr key={ticket.id}>
                <td className="px-5 py-4">
                  <p className="font-medium text-slate-900 dark:text-[#F0F6FC]">{ticket.subject}</p>
                  <p className="mt-1 text-xs text-slate-500 dark:text-[#8B949E]">{ticket.id} | {ticket.requester}</p>
                </td>
                <td className="px-5 py-4">
                  <StatusBadge value={ticket.priority} variant="priority" />
                </td>
                <td className="px-5 py-4">
                  <StatusBadge value={ticket.status} />
                </td>
                <td className="px-5 py-4 text-slate-600 dark:text-[#8B949E]">{ticket.assignee}</td>
                <td className="px-5 py-4 text-slate-600 dark:text-[#8B949E]">{ticket.channel}</td>
                <td className="px-5 py-4 text-slate-600 dark:text-[#8B949E]">
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
