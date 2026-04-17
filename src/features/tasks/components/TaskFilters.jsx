import { Search, SlidersHorizontal } from "lucide-react";
import {
  taskCategoryOptions,
  taskSortOptions,
  taskStatusOptions,
} from "@/features/tasks/lib/taskOptions";

export function TaskFilters({ controls, resultCount, totalCount, onChange, onReset }) {
  return (
    <section className="rounded-2xl border border-slate-200 bg-white p-5 shadow-panel">
      <div className="flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
        <div className="grid flex-1 gap-4 md:grid-cols-2 xl:grid-cols-[minmax(0,2fr)_repeat(3,minmax(0,1fr))]">
          <label className="block">
            <span className="text-xs font-medium uppercase tracking-[0.2em] text-slate-500">Search</span>
            <div className="mt-2 flex items-center gap-3 rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3">
              <Search className="h-4 w-4 text-slate-400" />
              <input
                className="w-full border-none bg-transparent text-sm text-slate-900 outline-none placeholder:text-slate-400"
                name="searchQuery"
                onChange={onChange}
                placeholder="Search tasks, owners, or categories"
                type="text"
                value={controls.searchQuery}
              />
            </div>
          </label>

          <FilterSelect label="Status" name="statusFilter" onChange={onChange} options={taskStatusOptions} value={controls.statusFilter} />
          <FilterSelect
            label="Category"
            name="categoryFilter"
            onChange={onChange}
            options={taskCategoryOptions}
            value={controls.categoryFilter}
          />
          <label className="block">
            <span className="text-xs font-medium uppercase tracking-[0.2em] text-slate-500">Sort</span>
            <select
              className="mt-2 w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-slate-900 outline-none transition focus:border-brand-300 focus:bg-white"
              name="sortBy"
              onChange={onChange}
              value={controls.sortBy}
            >
              {taskSortOptions.map((option) => (
                <option key={option.value} value={option.value}>
                  {option.label}
                </option>
              ))}
            </select>
          </label>
        </div>

        <div className="flex items-center justify-between gap-3 lg:flex-col lg:items-end">
          <div className="text-sm text-slate-500">
            Showing <span className="font-semibold text-slate-900">{resultCount}</span> of{" "}
            <span className="font-semibold text-slate-900">{totalCount}</span> tasks
          </div>
          <button
            className="inline-flex items-center gap-2 rounded-2xl border border-slate-200 bg-white px-4 py-3 text-sm font-semibold text-slate-700 transition hover:border-brand-200 hover:text-brand-700"
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
      <span className="text-xs font-medium uppercase tracking-[0.2em] text-slate-500">{label}</span>
      <select
        className="mt-2 w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-slate-900 outline-none transition focus:border-brand-300 focus:bg-white"
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
