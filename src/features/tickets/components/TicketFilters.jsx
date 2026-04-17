import { Search, SlidersHorizontal } from "lucide-react";
import {
  ticketPriorityOptions,
  ticketSortOptions,
  ticketStatusOptions,
} from "@/features/tickets/lib/ticketOptions";

export function TicketFilters({ controls, resultCount, totalCount, onChange, onReset }) {
  return (
    <section className="rounded-2xl border border-slate-200 bg-white p-5 shadow-panel dark:border-slate-800 dark:bg-slate-950">
      <div className="flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
        <div className="grid flex-1 gap-4 md:grid-cols-2 xl:grid-cols-[minmax(0,2fr)_repeat(3,minmax(0,1fr))]">
          <label className="block">
            <span className="text-xs font-medium uppercase tracking-[0.2em] text-slate-500 dark:text-slate-400">Search</span>
            <div className="mt-2 flex items-center gap-3 rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 dark:border-slate-700 dark:bg-slate-900">
              <Search className="h-4 w-4 text-slate-400 dark:text-slate-500" />
              <input
                className="w-full border-none bg-transparent text-sm text-slate-900 outline-none placeholder:text-slate-400 dark:text-slate-100 dark:placeholder:text-slate-500"
                name="searchQuery"
                onChange={onChange}
                placeholder="Search tickets, requesters, or assignees"
                type="text"
                value={controls.searchQuery}
              />
            </div>
          </label>

          <FilterSelect label="Status" name="statusFilter" onChange={onChange} options={ticketStatusOptions} value={controls.statusFilter} />
          <FilterSelect
            label="Priority"
            name="priorityFilter"
            onChange={onChange}
            options={ticketPriorityOptions}
            value={controls.priorityFilter}
          />
          <label className="block">
            <span className="text-xs font-medium uppercase tracking-[0.2em] text-slate-500">Sort</span>
            <select
              className="mt-2 w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-slate-900 outline-none transition focus:border-brand-300 focus:bg-white"
              name="sortBy"
              onChange={onChange}
              value={controls.sortBy}
            >
              {ticketSortOptions.map((option) => (
                <option key={option.value} value={option.value}>
                  {option.label}
                </option>
              ))}
            </select>
          </label>
        </div>

        <div className="flex items-center justify-between gap-3 lg:flex-col lg:items-end">
          <div className="text-sm text-slate-500 dark:text-slate-400">
            Showing <span className="font-semibold text-slate-900">{resultCount}</span> of{" "}
            <span className="font-semibold text-slate-900 dark:text-slate-100">{totalCount}</span> tickets
          </div>
          <button
            className="inline-flex items-center gap-2 rounded-2xl border border-slate-200 bg-white px-4 py-3 text-sm font-semibold text-slate-700 transition hover:border-brand-200 hover:text-brand-700 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-200 dark:hover:border-brand-500 dark:hover:text-brand-300"
            onClick={onReset}
            type="button"
          >
            <SlidersHorizontal className="h-4 w-4" />
            Reset filters
          </button>
        </div>
      </div>
    </section>
  );
}

function FilterSelect({ label, name, onChange, options, value }) {
  return (
    <label className="block">
      <span className="text-xs font-medium uppercase tracking-[0.2em] text-slate-500 dark:text-slate-400">{label}</span>
      <select
        className="mt-2 w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-slate-900 outline-none transition focus:border-brand-300 focus:bg-white dark:border-slate-700 dark:bg-slate-900 dark:text-slate-100 dark:focus:border-brand-500 dark:focus:bg-slate-950"
        name={name}
        onChange={onChange}
        value={value}
      >
        {options.map((option) => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </select>
    </label>
  );
}
