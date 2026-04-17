import { Inbox } from "lucide-react";

export function TicketListEmptyState({ hasTickets, onCreate, onResetFilters }) {
  return (
    <div className="rounded-2xl border border-dashed border-slate-200 bg-slate-50 px-6 py-12 text-center dark:border-slate-800 dark:bg-slate-900">
      <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-white text-brand-700 shadow-sm dark:bg-slate-950 dark:text-brand-300">
        <Inbox className="h-6 w-6" />
      </div>
      <h3 className="mt-4 text-lg font-semibold text-slate-950 dark:text-slate-50">
        {hasTickets ? "No tickets match these filters" : "No tickets in the queue yet"}
      </h3>
      <p className="mt-2 text-sm leading-6 text-slate-600 dark:text-slate-400">
        {hasTickets
          ? "Try adjusting search, status, or priority filters to widen the queue view."
          : "Create the first local ticket to start managing the support workflow in this demo environment."}
      </p>
      <div className="mt-6 flex items-center justify-center gap-3">
        {hasTickets ? (
          <button
            className="rounded-2xl border border-slate-200 bg-white px-4 py-3 text-sm font-semibold text-slate-700 transition hover:border-brand-200 hover:text-brand-700 dark:border-slate-700 dark:bg-slate-950 dark:text-slate-200 dark:hover:border-brand-500 dark:hover:text-brand-300"
            onClick={onResetFilters}
            type="button"
          >
            Reset filters
          </button>
        ) : null}
        <button
          className="rounded-2xl bg-brand-700 px-4 py-3 text-sm font-semibold text-white transition hover:bg-brand-800"
          onClick={onCreate}
          type="button"
        >
          Create ticket
        </button>
      </div>
    </div>
  );
}
