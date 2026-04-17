import { cn } from "@/lib/utils";

export function StatCard({ title, value, change, icon: Icon, tone = "default" }) {
  const toneClasses = {
    default: "bg-white text-slate-900 dark:border-slate-800 dark:bg-slate-950 dark:text-slate-100",
    brand: "bg-brand-900 text-white",
  };

  return (
    <article className={cn("rounded-2xl border border-slate-200 p-5 shadow-panel", toneClasses[tone])}>
      <div className="flex items-start justify-between gap-4">
        <div>
          <p className={cn("text-sm", tone === "brand" ? "text-brand-100" : "text-slate-500 dark:text-slate-400")}>{title}</p>
          <p className="mt-3 text-3xl font-semibold tracking-tight">{value}</p>
        </div>
        {Icon ? (
          <div className={cn("rounded-xl p-3", tone === "brand" ? "bg-white/10" : "bg-slate-100 dark:bg-slate-900")}>
            <Icon className={cn("h-5 w-5", tone === "brand" ? "text-white" : "text-slate-700 dark:text-slate-300")} />
          </div>
        ) : null}
      </div>
      <p className={cn("mt-4 text-sm", tone === "brand" ? "text-brand-100" : "text-slate-500 dark:text-slate-400")}>{change}</p>
    </article>
  );
}
