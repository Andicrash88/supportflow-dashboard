export function PageHeader({ eyebrow, title, description, actions }) {
  return (
    <div className="flex flex-col gap-4 border-b border-[#D0D7DE] pb-6 dark:border-[#30363D] sm:flex-row sm:items-end sm:justify-between">
      <div className="max-w-2xl">
        {eyebrow ? <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-brand-700">{eyebrow}</p> : null}
        <h1 className="mt-2 text-3xl font-semibold tracking-tight text-slate-950 dark:text-[#F0F6FC]">{title}</h1>
        {description ? <p className="mt-3 max-w-xl text-sm leading-6 text-slate-600 dark:text-[#8B949E]">{description}</p> : null}
      </div>
      {actions ? <div className="flex items-center gap-3">{actions}</div> : null}
    </div>
  );
}
