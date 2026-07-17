import { useEffect, useId } from "react";
import { X } from "lucide-react";

export function Modal({ title, description, children, onClose }) {
  const titleId = useId();
  const descriptionId = useId();

  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === "Escape") {
        onClose();
      }
    };

    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [onClose]);

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-950/45 px-4 py-6">
      <div aria-hidden="true" className="absolute inset-0 cursor-default" onClick={onClose} />
      <div
        aria-describedby={description ? descriptionId : undefined}
        aria-labelledby={titleId}
        aria-modal="true"
        className="relative z-10 max-h-[calc(100vh-3rem)] w-full max-w-2xl overflow-y-auto rounded-[28px] border border-[#D0D7DE] bg-white p-5 shadow-panel dark:border-[#30363D] dark:bg-[#161B22] sm:p-6"
        role="dialog"
      >
        <div className="flex items-start justify-between gap-4">
          <div>
            <h2 className="text-xl font-semibold text-slate-950 dark:text-[#F0F6FC]" id={titleId}>{title}</h2>
            {description ? <p className="mt-2 text-sm leading-6 text-slate-600 dark:text-[#8B949E]" id={descriptionId}>{description}</p> : null}
          </div>
          <button
            aria-label="Close modal"
            className="inline-flex h-10 w-10 items-center justify-center rounded-2xl border border-[#D0D7DE] bg-white text-slate-500 transition hover:border-slate-300 hover:bg-slate-50 hover:text-slate-900 dark:border-[#30363D] dark:bg-[#0B0E14] dark:text-[#8B949E] dark:hover:border-[#2F81F7] dark:hover:text-[#F0F6FC]"
            onClick={onClose}
            type="button"
          >
            <X className="h-4 w-4" />
          </button>
        </div>
        <div className="mt-6">{children}</div>
      </div>
    </div>
  );
}
