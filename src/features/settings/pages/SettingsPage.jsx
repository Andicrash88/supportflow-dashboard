import { useEffect, useState } from "react";
import { Check, Moon, SunMedium, UserRound } from "lucide-react";
import { PageHeader } from "@/components/ui/PageHeader";
import { ThemeToggle } from "@/components/ui/ThemeToggle";
import { useAuth } from "@/hooks/useAuth";
import { useTheme } from "@/hooks/useTheme";
import { usePageTitle } from "@/hooks/usePageTitle";
import { getInitials } from "@/lib/utils";

export function SettingsPage() {
  usePageTitle("Settings");
  const { updateProfile, user } = useAuth();
  const { isDarkMode, setTheme, theme } = useTheme();
  const [formValues, setFormValues] = useState({
    name: user.name,
    email: user.email,
  });
  const [isSaved, setIsSaved] = useState(false);

  useEffect(() => {
    setFormValues({
      name: user.name,
      email: user.email,
    });
  }, [user.email, user.name]);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormValues((currentValues) => ({ ...currentValues, [name]: value }));
    setIsSaved(false);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    updateProfile({
      name: formValues.name.trim(),
      email: formValues.email.trim().toLowerCase(),
    });
    setIsSaved(true);
  };

  return (
    <div className="space-y-8">
      <PageHeader
        eyebrow="Workspace"
        title="Settings"
        description="Manage your local SupportFlow profile and workspace appearance preferences from one polished settings hub."
      />

      <section className="grid gap-6 xl:grid-cols-[minmax(0,1.3fr)_minmax(0,0.9fr)]">
        <article className="rounded-2xl border border-slate-200 bg-white p-6 shadow-panel dark:border-slate-800 dark:bg-slate-950">
          <div className="flex items-start justify-between gap-4">
            <div>
              <h2 className="text-lg font-semibold text-slate-950 dark:text-slate-50">Profile settings</h2>
              <p className="mt-2 text-sm leading-6 text-slate-600 dark:text-slate-400">
                Update the locally stored profile shown across the dashboard, topbar, and settings workspace.
              </p>
            </div>
            <div className="flex h-14 w-14 items-center justify-center rounded-3xl bg-brand-100 text-lg font-semibold text-brand-800 dark:bg-brand-900/40 dark:text-brand-200">
              {getInitials(formValues.name)}
            </div>
          </div>

          <form className="mt-6 space-y-5" onSubmit={handleSubmit}>
            <div className="grid gap-5 md:grid-cols-2">
              <Field label="Full name">
                <input
                  className="mt-2 w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-slate-900 outline-none focus:border-brand-300 focus:bg-white dark:border-slate-700 dark:bg-slate-900 dark:text-slate-100 dark:focus:border-brand-500 dark:focus:bg-slate-950"
                  name="name"
                  onChange={handleChange}
                  required
                  type="text"
                  value={formValues.name}
                />
              </Field>

              <Field label="Work email">
                <input
                  className="mt-2 w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-slate-900 outline-none focus:border-brand-300 focus:bg-white dark:border-slate-700 dark:bg-slate-900 dark:text-slate-100 dark:focus:border-brand-500 dark:focus:bg-slate-950"
                  name="email"
                  onChange={handleChange}
                  required
                  type="email"
                  value={formValues.email}
                />
              </Field>

              <Field label="Role">
                <input
                  className="mt-2 w-full rounded-2xl border border-slate-200 bg-slate-100 px-4 py-3 text-sm text-slate-500 outline-none dark:border-slate-700 dark:bg-slate-900 dark:text-slate-400"
                  readOnly
                  type="text"
                  value={user.role}
                />
              </Field>

              <Field label="Team">
                <input
                  className="mt-2 w-full rounded-2xl border border-slate-200 bg-slate-100 px-4 py-3 text-sm text-slate-500 outline-none dark:border-slate-700 dark:bg-slate-900 dark:text-slate-400"
                  readOnly
                  type="text"
                  value={user.team}
                />
              </Field>
            </div>

            <div className="flex flex-col gap-3 border-t border-slate-200 pt-5 dark:border-slate-800 sm:flex-row sm:items-center sm:justify-between">
              <p className="text-sm text-slate-500 dark:text-slate-400">
                These changes are stored locally in this browser so the demo feels like a real workspace.
              </p>
              <div className="flex items-center gap-3">
                {isSaved ? (
                  <span className="inline-flex items-center gap-2 rounded-2xl bg-emerald-50 px-3 py-2 text-sm font-medium text-emerald-700 dark:bg-emerald-950/50 dark:text-emerald-300">
                    <Check className="h-4 w-4" />
                    Saved
                  </span>
                ) : null}
                <button
                  className="inline-flex items-center gap-2 rounded-2xl bg-brand-700 px-4 py-3 text-sm font-semibold text-white transition hover:bg-brand-800"
                  type="submit"
                >
                  Save profile
                </button>
              </div>
            </div>
          </form>
        </article>

        <div className="space-y-6">
          <article className="rounded-2xl border border-slate-200 bg-white p-6 shadow-panel dark:border-slate-800 dark:bg-slate-950">
            <div className="flex items-start justify-between gap-4">
              <div>
                <h2 className="text-lg font-semibold text-slate-950 dark:text-slate-50">Theme</h2>
                <p className="mt-2 text-sm leading-6 text-slate-600 dark:text-slate-400">
                  Choose the workspace appearance that feels best for long support sessions.
                </p>
              </div>
              <ThemeToggle />
            </div>

            <div className="mt-5 grid gap-3">
              <ThemeOption
                active={theme === "light"}
                description="Bright, calm, and clear for daytime operations."
                icon={SunMedium}
                label="Light mode"
                onClick={() => setTheme("light")}
              />
              <ThemeOption
                active={theme === "dark"}
                description="Focused contrast tuned for dashboards, tables, and modal workflows."
                icon={Moon}
                label="Dark mode"
                onClick={() => setTheme("dark")}
              />
            </div>
          </article>

          <article className="rounded-2xl border border-slate-200 bg-white p-6 shadow-panel dark:border-slate-800 dark:bg-slate-950">
            <div className="flex items-start gap-4">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-brand-100 text-brand-800 dark:bg-brand-900/40 dark:text-brand-200">
                <UserRound className="h-5 w-5" />
              </div>
              <div>
                <h2 className="text-lg font-semibold text-slate-950 dark:text-slate-50">Workspace preview</h2>
                <p className="mt-2 text-sm leading-6 text-slate-600 dark:text-slate-400">
                  Your profile details are reused throughout the shell so the experience feels consistent and portfolio-ready.
                </p>
              </div>
            </div>

            <div className="mt-5 rounded-3xl border border-slate-200 bg-slate-50 p-5 dark:border-slate-800 dark:bg-slate-900">
              <div className="flex items-center gap-4">
                <div className="flex h-14 w-14 items-center justify-center rounded-3xl bg-brand-100 font-semibold text-brand-800 dark:bg-brand-900/40 dark:text-brand-200">
                  {getInitials(formValues.name)}
                </div>
                <div>
                  <p className="text-base font-semibold text-slate-950 dark:text-slate-50">{formValues.name}</p>
                  <p className="text-sm text-slate-500 dark:text-slate-400">{formValues.email}</p>
                  <p className="mt-1 text-xs uppercase tracking-[0.18em] text-slate-400 dark:text-slate-500">
                    {user.role}
                  </p>
                </div>
              </div>
              <p className="mt-4 text-sm leading-6 text-slate-600 dark:text-slate-400">
                Current interface mode: <span className="font-medium text-slate-900 dark:text-slate-200">{isDarkMode ? "Dark" : "Light"}</span>
              </p>
            </div>
          </article>
        </div>
      </section>
    </div>
  );
}

function Field({ children, label }) {
  return (
    <label className="block">
      <span className="text-xs font-medium uppercase tracking-[0.2em] text-slate-500 dark:text-slate-400">{label}</span>
      {children}
    </label>
  );
}

function ThemeOption({ active, description, icon: Icon, label, onClick }) {
  return (
    <button
      className={[
        "flex items-start gap-4 rounded-2xl border px-4 py-4 text-left transition",
        active
          ? "border-brand-300 bg-brand-50 text-slate-900 dark:border-brand-500 dark:bg-brand-900/20 dark:text-slate-100"
          : "border-slate-200 bg-slate-50 text-slate-700 hover:border-brand-200 hover:bg-white dark:border-slate-800 dark:bg-slate-900 dark:text-slate-300 dark:hover:border-brand-600 dark:hover:bg-slate-950",
      ].join(" ")}
      onClick={onClick}
      type="button"
    >
      <div className="mt-0.5 flex h-10 w-10 items-center justify-center rounded-2xl bg-white text-brand-700 dark:bg-slate-950 dark:text-brand-300">
        <Icon className="h-4 w-4" />
      </div>
      <div className="flex-1">
        <div className="flex items-center justify-between gap-3">
          <p className="font-semibold">{label}</p>
          {active ? <Check className="h-4 w-4 text-brand-700 dark:text-brand-300" /> : null}
        </div>
        <p className="mt-1 text-sm leading-6 text-slate-500 dark:text-slate-400">{description}</p>
      </div>
    </button>
  );
}
