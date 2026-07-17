import { useEffect, useState } from "react";
import { Modal } from "@/components/ui/Modal";
import { taskCategoryOptions, taskStatusOptions } from "@/features/tasks/lib/taskOptions";

const defaultTaskForm = {
  title: "",
  owner: "",
  dueDate: "",
  status: "Planned",
  category: "Operations",
};

export function TaskFormModal({ mode, onClose, onSubmit, task }) {
  const [formValues, setFormValues] = useState(defaultTaskForm);

  useEffect(() => {
    if (task) {
      setFormValues({
        title: task.title,
        owner: task.owner,
        dueDate: task.dueDate,
        status: task.status,
        category: task.category || task.type,
      });
      return;
    }

    setFormValues(defaultTaskForm);
  }, [task]);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormValues((currentValues) => ({ ...currentValues, [name]: value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    onSubmit({
      title: formValues.title.trim(),
      owner: formValues.owner.trim(),
      dueDate: formValues.dueDate,
      status: formValues.status,
      category: formValues.category,
      type: formValues.category,
    });
  };

  return (
    <Modal
      description={
        mode === "create"
          ? "Create a new internal support task using the same fields as the seeded operations queue."
          : "Update the task details without leaving the management workflow."
      }
      onClose={onClose}
      title={mode === "create" ? "Create task" : `Edit ${task.id}`}
    >
      <form className="space-y-5" onSubmit={handleSubmit}>
        <div className="grid gap-5 md:grid-cols-2">
          <Field label="Task title" required>
            <input
              className="mt-2 w-full rounded-2xl border border-[#D0D7DE] bg-slate-50 px-4 py-3 text-sm text-slate-900 outline-none transition focus:border-brand-300 focus:bg-white dark:border-[#30363D] dark:bg-[#0B0E14] dark:text-[#F0F6FC] dark:focus:border-[#2F81F7] dark:focus:bg-[#161B22]"
              name="title"
              onChange={handleChange}
              placeholder="Describe the follow-up work"
              required
              type="text"
              value={formValues.title}
            />
          </Field>
          <Field label="Owner" required>
            <input
              className="mt-2 w-full rounded-2xl border border-[#D0D7DE] bg-slate-50 px-4 py-3 text-sm text-slate-900 outline-none transition focus:border-brand-300 focus:bg-white dark:border-[#30363D] dark:bg-[#0B0E14] dark:text-[#F0F6FC] dark:focus:border-[#2F81F7] dark:focus:bg-[#161B22]"
              name="owner"
              onChange={handleChange}
              placeholder="Assigned teammate"
              required
              type="text"
              value={formValues.owner}
            />
          </Field>
          <Field label="Due date" required>
            <input
              className="mt-2 w-full rounded-2xl border border-[#D0D7DE] bg-slate-50 px-4 py-3 text-sm text-slate-900 outline-none transition focus:border-brand-300 focus:bg-white dark:border-[#30363D] dark:bg-[#0B0E14] dark:text-[#F0F6FC] dark:focus:border-[#2F81F7] dark:focus:bg-[#161B22]"
              name="dueDate"
              onChange={handleChange}
              required
              type="date"
              value={formValues.dueDate}
            />
          </Field>
          <Field label="Status">
            <select
              className="mt-2 w-full rounded-2xl border border-[#D0D7DE] bg-slate-50 px-4 py-3 text-sm text-slate-900 outline-none transition focus:border-brand-300 focus:bg-white dark:border-[#30363D] dark:bg-[#0B0E14] dark:text-[#F0F6FC] dark:focus:border-[#2F81F7] dark:focus:bg-[#161B22]"
              name="status"
              onChange={handleChange}
              value={formValues.status}
            >
              {taskStatusOptions.filter((option) => !option.startsWith("All ")).map((option) => (
                <option key={option} value={option}>
                  {option}
                </option>
              ))}
            </select>
          </Field>
          <Field label="Category">
            <select
              className="mt-2 w-full rounded-2xl border border-[#D0D7DE] bg-slate-50 px-4 py-3 text-sm text-slate-900 outline-none transition focus:border-brand-300 focus:bg-white dark:border-[#30363D] dark:bg-[#0B0E14] dark:text-[#F0F6FC] dark:focus:border-[#2F81F7] dark:focus:bg-[#161B22]"
              name="category"
              onChange={handleChange}
              value={formValues.category}
            >
              {taskCategoryOptions.filter((option) => !option.startsWith("All ")).map((option) => (
                <option key={option} value={option}>
                  {option}
                </option>
              ))}
            </select>
          </Field>
        </div>

        <div className="flex items-center justify-end gap-3 border-t border-[#D0D7DE] pt-5 dark:border-[#30363D]">
          <button
            className="rounded-2xl border border-[#D0D7DE] bg-white px-4 py-3 text-sm font-semibold text-slate-700 transition hover:border-slate-300 hover:bg-slate-50 hover:text-slate-950 dark:border-[#30363D] dark:bg-[#0B0E14] dark:text-[#8B949E] dark:hover:border-[#2F81F7] dark:hover:text-[#F0F6FC]"
            onClick={onClose}
            type="button"
          >
            Cancel
          </button>
          <button
            className="rounded-2xl bg-brand-700 px-4 py-3 text-sm font-semibold text-white transition hover:bg-brand-800"
            type="submit"
          >
            {mode === "create" ? "Create task" : "Save changes"}
          </button>
        </div>
      </form>
    </Modal>
  );
}

function Field({ children, label, required = false }) {
  return (
    <label className="block">
      <span className="text-xs font-medium uppercase tracking-[0.2em] text-slate-500 dark:text-[#8B949E]">
        {label}
        {required ? " *" : ""}
      </span>
      {children}
    </label>
  );
}
