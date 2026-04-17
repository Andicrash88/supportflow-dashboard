export function PageHeader({ eyebrow, title, description, actions }) {
  return (
    <div className="flex flex-col gap-5 border-b border-slate-200 pb-6 dark:border-slate-800 sm:flex-row sm:items-end sm:justify-between">
      <div className="max-w-2xl">
        {eyebrow ? <p className="text-sm font-medium uppercase tracking-[0.2em] text-brand-700">{eyebrow}</p> : null}
        <h1 className="mt-2 text-3xl font-semibold tracking-tight text-slate-950 dark:text-slate-50">{title}</h1>
        {description ? <p className="mt-2 text-sm leading-6 text-slate-600 dark:text-slate-400">{description}</p> : null}
      </div>
      {actions ? <div className="flex items-center gap-3">{actions}</div> : null}
    </div>
  );
}
