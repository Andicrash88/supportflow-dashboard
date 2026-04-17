import { ListTodo } from "lucide-react";

export function TaskListEmptyState({ hasTasks, onCreate, onResetFilters }) {
  return (
    <div className="rounded-2xl border border-dashed border-slate-200 bg-slate-50 px-6 py-12 text-center">
      <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-white text-brand-700 shadow-sm">
        <ListTodo className="h-6 w-6" />
      </div>
      <h3 className="mt-4 text-lg font-semibold text-slate-950">
        {hasTasks ? "No tasks match these filters" : "No tasks in the queue yet"}
      </h3>
      <p className="mt-2 text-sm leading-6 text-slate-600">
        {hasTasks
          ? "Try adjusting search, status, category, or sort options to widen the task view."
          : "Create the first local task to start managing internal operations work in this demo."}
      </p>
      <div className="mt-6 flex items-center justify-center gap-3">
        {hasTasks ? (
          <button
            className="rounded-2xl border border-slate-200 bg-white px-4 py-3 text-sm font-semibold text-slate-700 transition hover:border-brand-200 hover:text-brand-700"
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
          Create task
        </button>
      </div>
    </div>
  );
}
