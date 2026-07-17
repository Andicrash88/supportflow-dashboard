import { cn } from "@/lib/utils";

const badgeStyles = {
  status: {
    Open: "bg-amber-50 text-amber-700 ring-amber-200 dark:bg-[#D29922]/12 dark:text-[#D29922] dark:ring-[#D29922]/30",
    "In Progress": "bg-sky-50 text-sky-700 ring-sky-200 dark:bg-[#2F81F7]/12 dark:text-[#2F81F7] dark:ring-[#2F81F7]/30",
    Pending: "bg-slate-100 text-slate-700 ring-slate-200 dark:bg-[#30363D]/50 dark:text-[#8B949E] dark:ring-[#30363D]",
    Resolved: "bg-emerald-50 text-emerald-700 ring-emerald-200 dark:bg-[#238636]/12 dark:text-[#238636] dark:ring-[#238636]/30",
    Completed: "bg-emerald-50 text-emerald-700 ring-emerald-200 dark:bg-[#238636]/12 dark:text-[#238636] dark:ring-[#238636]/30",
    Planned: "bg-indigo-50 text-indigo-700 ring-indigo-200 dark:bg-[#2F81F7]/12 dark:text-[#2F81F7] dark:ring-[#2F81F7]/30",
    Blocked: "bg-rose-50 text-rose-700 ring-rose-200 dark:bg-[#F85149]/12 dark:text-[#F85149] dark:ring-[#F85149]/30",
    online: "bg-emerald-50 text-emerald-700 ring-emerald-200 dark:bg-[#238636]/12 dark:text-[#238636] dark:ring-[#238636]/30",
  },
  priority: {
    Urgent: "bg-rose-50 text-rose-700 ring-rose-200 dark:bg-[#F85149]/12 dark:text-[#F85149] dark:ring-[#F85149]/30",
    High: "bg-orange-50 text-orange-700 ring-orange-200 dark:bg-[#F85149]/12 dark:text-[#F85149] dark:ring-[#F85149]/30",
    Medium: "bg-amber-50 text-amber-700 ring-amber-200 dark:bg-[#D29922]/12 dark:text-[#D29922] dark:ring-[#D29922]/30",
    Low: "bg-emerald-50 text-emerald-700 ring-emerald-200 dark:bg-[#238636]/12 dark:text-[#238636] dark:ring-[#238636]/30",
  },
};

export function StatusBadge({ value, variant = "status" }) {
  const styles = badgeStyles[variant] || badgeStyles.status;

  return (
    <span
      className={cn(
        "inline-flex items-center rounded-full px-2.5 py-1 text-xs font-medium ring-1 ring-inset dark:bg-opacity-20 dark:text-current",
        styles[value] || "bg-slate-100 text-slate-700 ring-slate-200 dark:bg-[#30363D]/50 dark:text-[#8B949E] dark:ring-[#30363D]",
      )}
    >
      {value}
    </span>
  );
}
