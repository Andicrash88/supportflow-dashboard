import { cn } from "@/lib/utils";

const badgeStyles = {
  status: {
    Open: "bg-amber-50 text-amber-700 ring-amber-200",
    "In Progress": "bg-sky-50 text-sky-700 ring-sky-200",
    Pending: "bg-slate-100 text-slate-700 ring-slate-200",
    Resolved: "bg-emerald-50 text-emerald-700 ring-emerald-200",
    Planned: "bg-indigo-50 text-indigo-700 ring-indigo-200",
    Blocked: "bg-rose-50 text-rose-700 ring-rose-200",
    online: "bg-emerald-50 text-emerald-700 ring-emerald-200",
  },
  priority: {
    Urgent: "bg-rose-50 text-rose-700 ring-rose-200",
    High: "bg-orange-50 text-orange-700 ring-orange-200",
    Medium: "bg-amber-50 text-amber-700 ring-amber-200",
    Low: "bg-emerald-50 text-emerald-700 ring-emerald-200",
  },
};

export function StatusBadge({ value, variant = "status" }) {
  const styles = badgeStyles[variant] || badgeStyles.status;

  return (
    <span
      className={cn(
        "inline-flex items-center rounded-full px-2.5 py-1 text-xs font-medium ring-1 ring-inset",
        styles[value] || "bg-slate-100 text-slate-700 ring-slate-200",
      )}
    >
      {value}
    </span>
  );
}
