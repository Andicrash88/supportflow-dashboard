import { useEffect, useState } from "react";
import { Modal } from "@/components/ui/Modal";
import {
  ticketChannelOptions,
  ticketPriorityOptions,
  ticketStatusOptions,
} from "@/features/tickets/lib/ticketOptions";

const defaultTicketForm = {
  subject: "",
  requester: "",
  priority: "Medium",
  status: "Open",
  assignee: "",
  channel: "Email",
};

export function TicketFormModal({ mode, ticket, onClose, onSubmit }) {
  const [formValues, setFormValues] = useState(defaultTicketForm);

  useEffect(() => {
    if (ticket) {
      setFormValues({
        subject: ticket.subject,
        requester: ticket.requester,
        priority: ticket.priority,
        status: ticket.status,
        assignee: ticket.assignee,
        channel: ticket.channel,
      });
      return;
    }

    setFormValues(defaultTicketForm);
  }, [ticket]);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormValues((currentValues) => ({ ...currentValues, [name]: value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    onSubmit({
      subject: formValues.subject.trim(),
      requester: formValues.requester.trim(),
      priority: formValues.priority,
      status: formValues.status,
      assignee: formValues.assignee.trim(),
      channel: formValues.channel,
    });
  };

  return (
    <Modal
      description={
        mode === "create"
          ? "Capture a new support ticket using the same fields the seeded queue already uses."
          : "Update the ticket details without leaving the management view."
      }
      onClose={onClose}
      title={mode === "create" ? "Create ticket" : `Edit ${ticket.id}`}
    >
      <form className="space-y-5" onSubmit={handleSubmit}>
        <div className="grid gap-5 md:grid-cols-2">
          <Field label="Ticket title" required>
            <input
              className="mt-2 w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-slate-900 outline-none transition focus:border-brand-300 focus:bg-white"
              name="subject"
              onChange={handleChange}
              placeholder="Describe the customer issue"
              required
              type="text"
              value={formValues.subject}
            />
          </Field>
          <Field label="Requester" required>
            <input
              className="mt-2 w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-slate-900 outline-none transition focus:border-brand-300 focus:bg-white"
              name="requester"
              onChange={handleChange}
              placeholder="Customer or account name"
              required
              type="text"
              value={formValues.requester}
            />
          </Field>
          <Field label="Priority">
            <select
              className="mt-2 w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-slate-900 outline-none transition focus:border-brand-300 focus:bg-white"
              name="priority"
              onChange={handleChange}
              value={formValues.priority}
            >
              {ticketPriorityOptions.filter((option) => !option.startsWith("All ")).map((option) => (
                <option key={option} value={option}>
                  {option}
                </option>
              ))}
            </select>
          </Field>
          <Field label="Status">
            <select
              className="mt-2 w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-slate-900 outline-none transition focus:border-brand-300 focus:bg-white"
              name="status"
              onChange={handleChange}
              value={formValues.status}
            >
              {ticketStatusOptions.filter((option) => !option.startsWith("All ")).map((option) => (
                <option key={option} value={option}>
                  {option}
                </option>
              ))}
            </select>
          </Field>
          <Field label="Assignee" required>
            <input
              className="mt-2 w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-slate-900 outline-none transition focus:border-brand-300 focus:bg-white"
              name="assignee"
              onChange={handleChange}
              placeholder="Assigned teammate"
              required
              type="text"
              value={formValues.assignee}
            />
          </Field>
          <Field label="Channel">
            <select
              className="mt-2 w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-slate-900 outline-none transition focus:border-brand-300 focus:bg-white"
              name="channel"
              onChange={handleChange}
              value={formValues.channel}
            >
              {ticketChannelOptions.map((option) => (
                <option key={option} value={option}>
                  {option}
                </option>
              ))}
            </select>
          </Field>
        </div>

        <div className="flex items-center justify-end gap-3 border-t border-slate-200 pt-5">
          <button
            className="rounded-2xl border border-slate-200 bg-white px-4 py-3 text-sm font-semibold text-slate-700 transition hover:border-slate-300 hover:text-slate-950"
            onClick={onClose}
            type="button"
          >
            Cancel
          </button>
          <button
            className="rounded-2xl bg-brand-700 px-4 py-3 text-sm font-semibold text-white transition hover:bg-brand-800"
            type="submit"
          >
            {mode === "create" ? "Create ticket" : "Save changes"}
          </button>
        </div>
      </form>
    </Modal>
  );
}

function Field({ children, label, required = false }) {
  return (
    <label className="block">
      <span className="text-xs font-medium uppercase tracking-[0.2em] text-slate-500">
        {label}
        {required ? " *" : ""}
      </span>
      {children}
    </label>
  );
}
