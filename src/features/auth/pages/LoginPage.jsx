import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { LoginForm } from "@/components/forms/LoginForm";
import { usePageTitle } from "@/hooks/usePageTitle";

export function LoginPage() {
  usePageTitle("Login");

  return (
    <main className="min-h-screen bg-hero-grid bg-hero-grid px-4 py-6 sm:px-6 lg:px-8">
      <div className="mx-auto grid min-h-[calc(100vh-3rem)] max-w-6xl items-center gap-8 lg:grid-cols-[1.1fr_0.9fr]">
        <section className="rounded-[32px] border border-white/60 bg-ink-950 p-8 text-white shadow-panel sm:p-10">
          <p className="text-sm font-medium uppercase tracking-[0.24em] text-brand-300">SupportFlow</p>
          <h1 className="mt-4 max-w-xl text-4xl font-semibold tracking-tight sm:text-5xl">
            Ticket operations built for fast-moving support teams.
          </h1>
          <p className="mt-5 max-w-2xl text-base leading-7 text-slate-300">
            Phase 1 focuses on the shell: scalable architecture, strong routing boundaries, polished layout primitives,
            and clean seed data that can later be replaced with APIs.
          </p>

          <div className="mt-8 grid gap-4 sm:grid-cols-3">
            {[
              { label: "Queues", value: "04 live views" },
              { label: "SLA", value: "Ready for metrics" },
              { label: "Forms", value: "Validated with Zod" },
            ].map((item) => (
              <div className="rounded-2xl bg-white/5 p-4" key={item.label}>
                <p className="text-sm text-slate-400">{item.label}</p>
                <p className="mt-2 text-lg font-semibold">{item.value}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="rounded-[32px] border border-slate-200 bg-white p-8 shadow-panel sm:p-10">
          <div className="mb-8">
            <p className="text-sm font-medium uppercase tracking-[0.2em] text-brand-700">Sign in</p>
            <h2 className="mt-2 text-3xl font-semibold tracking-tight text-slate-950">Welcome back</h2>
            <p className="mt-2 text-sm leading-6 text-slate-500">
              This form is intentionally non-functional for now. It validates inputs so the auth layer has a clean seam.
            </p>
          </div>

          <LoginForm />

          <Link className="mt-6 inline-flex items-center gap-2 text-sm font-medium text-brand-700" to="/dashboard">
            Continue to dashboard shell
            <ArrowRight className="h-4 w-4" />
          </Link>
        </section>
      </div>
    </main>
  );
}
