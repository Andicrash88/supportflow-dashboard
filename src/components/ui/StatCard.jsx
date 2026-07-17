import { cn } from "@/lib/utils";

export function StatCard({ title, value, change, icon: Icon, tone = "default" }) {
  const toneClasses = {
    default: "bg-white text-slate-900 dark:border-[#30363D] dark:bg-[#161B22] dark:text-[#F0F6FC]",
    brand: "bg-brand-900 text-white",
  };

  return (
    <article
      className={cn(
        "rounded-2xl border border-[#D0D7DE] p-5 shadow-panel transition duration-200 hover:-translate-y-0.5 hover:shadow-[0_16px_28px_rgba(15,23,42,0.08)] dark:hover:shadow-[0_18px_32px_rgba(2,6,23,0.35)]",
        toneClasses[tone],
      )}
    >
      <div className="flex items-start justify-between gap-4">
        <div>
          <p className={cn("text-sm font-medium", tone === "brand" ? "text-brand-100" : "text-slate-500 dark:text-[#8B949E]")}>{title}</p>
          <p className="mt-3 text-3xl font-semibold tracking-tight">{value}</p>
        </div>
        {Icon ? (
          <div className={cn("rounded-xl p-3", tone === "brand" ? "bg-white/10" : "bg-slate-100 dark:bg-[#0B0E14]")}>
            <Icon className={cn("h-5 w-5", tone === "brand" ? "text-white" : "text-slate-700 dark:text-[#F0F6FC]")} />
          </div>
        ) : null}
      </div>
      <p className={cn("mt-4 text-sm", tone === "brand" ? "text-brand-100" : "text-slate-500 dark:text-[#8B949E]")}>{change}</p>
    </article>
  );
}
