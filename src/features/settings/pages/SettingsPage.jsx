import { PageHeader } from "@/components/ui/PageHeader";
import { useAuth } from "@/context/AuthContext";
import { usePageTitle } from "@/hooks/usePageTitle";

export function SettingsPage() {
  usePageTitle("Settings");
  const { user } = useAuth();

  return (
    <div className="space-y-8">
      <PageHeader
        eyebrow="Workspace"
        title="Settings"
        description="Placeholder account and workspace settings with enough structure to evolve into real preference and permission screens."
      />

      <section className="grid gap-4 xl:grid-cols-2">
        <article className="rounded-2xl border border-slate-200 bg-white p-6 shadow-panel">
          <h2 className="text-lg font-semibold text-slate-950">Profile</h2>
          <dl className="mt-5 space-y-4 text-sm">
            <div className="flex items-center justify-between gap-4 border-b border-slate-100 pb-4">
              <dt className="text-slate-500">Name</dt>
              <dd className="font-medium text-slate-900">{user.name}</dd>
            </div>
            <div className="flex items-center justify-between gap-4 border-b border-slate-100 pb-4">
              <dt className="text-slate-500">Email</dt>
              <dd className="font-medium text-slate-900">{user.email}</dd>
            </div>
            <div className="flex items-center justify-between gap-4">
              <dt className="text-slate-500">Team</dt>
              <dd className="font-medium text-slate-900">{user.team}</dd>
            </div>
          </dl>
        </article>

        <article className="rounded-2xl border border-dashed border-slate-300 bg-slate-50 p-6">
          <h2 className="text-lg font-semibold text-slate-950">Phase 2 hooks</h2>
          <p className="mt-3 text-sm leading-6 text-slate-600">
            This panel is intentionally lightweight. It is the right place for notification settings, roles, SLA rules,
            and integrations once backend services are introduced.
          </p>
        </article>
      </section>
    </div>
  );
}
