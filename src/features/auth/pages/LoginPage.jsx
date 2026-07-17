import { CheckCircle2, ShieldCheck, Sparkles } from "lucide-react";
import { LoginForm } from "@/components/forms/LoginForm";
import { usePageTitle } from "@/hooks/usePageTitle";

const highlights = [
  "Live queue visibility for every support lane",
  "SLA-safe handoffs between tickets and task boards",
  "Workspace settings designed for growing teams",
];

export function LoginPage() {
  usePageTitle("Login");

  return (
    <main className="min-h-screen px-4 py-6 sm:px-6 lg:px-8">
      <div className="mx-auto flex min-h-[calc(100vh-3rem)] max-w-6xl items-center justify-center">
        <div className="grid w-full max-w-5xl gap-6 lg:grid-cols-[1.05fr_0.95fr]">
          <section className="flex flex-col justify-between rounded-[32px] border border-[#D0D7DE] bg-ink-950 p-8 text-white shadow-panel dark:border-[#30363D] dark:bg-[#161B22] sm:p-10">
            <div>
              <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-slate-200 dark:border-[#30363D] dark:bg-[#0B0E14] dark:text-[#8B949E]">
                <Sparkles className="h-4 w-4" />
                SupportFlow
              </div>

              <h1 className="mt-6 max-w-xl text-4xl font-semibold tracking-tight sm:text-5xl">
                Run support operations from one calm, reliable workspace.
              </h1>
              <p className="mt-5 max-w-2xl text-base leading-7 text-slate-300 dark:text-[#8B949E]">
                Sign in to access dashboards, ticket queues, task coordination, and workspace controls built for modern
                support teams.
              </p>
            </div>

            <div className="mt-10 grid gap-4 sm:grid-cols-2">
              <div className="rounded-3xl border border-white/10 bg-white/5 p-5 dark:border-[#30363D] dark:bg-[#0B0E14]">
                <div className="flex items-center gap-3">
                  <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-[#238636]/12 text-[#238636]">
                    <ShieldCheck className="h-5 w-5" />
                  </div>
                  <div>
                    <p className="text-sm font-medium text-slate-300 dark:text-[#8B949E]">Local auth demo</p>
                    <p className="text-lg font-semibold">No backend required</p>
                  </div>
                </div>
                <p className="mt-4 text-sm leading-6 text-slate-400 dark:text-[#8B949E]">
                  Use any valid email and a password with at least 6 characters to start a local session.
                </p>
              </div>

              <div className="rounded-3xl border border-white/10 bg-white/5 p-5 dark:border-[#30363D] dark:bg-[#0B0E14]">
                <p className="text-sm font-medium uppercase tracking-[0.18em] text-slate-400 dark:text-[#8B949E]">What you get</p>
                <ul className="mt-4 space-y-3 text-sm text-slate-200 dark:text-[#F0F6FC]">
                  {highlights.map((item) => (
                    <li className="flex items-start gap-3" key={item}>
                      <CheckCircle2 className="mt-0.5 h-4 w-4 text-[#238636]" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </section>

          <section className="rounded-[32px] border border-[#D0D7DE] bg-white p-8 shadow-panel dark:border-[#30363D] dark:bg-[#161B22] sm:p-10">
            <div className="mb-8">
              <p className="text-sm font-medium uppercase tracking-[0.2em] text-brand-700">Sign in</p>
              <h2 className="mt-2 text-3xl font-semibold tracking-tight text-slate-950 dark:text-[#F0F6FC]">Welcome back</h2>
              <p className="mt-2 text-sm leading-6 text-slate-500 dark:text-[#8B949E]">
                Enter your workspace email and password to continue into SupportFlow.
              </p>
            </div>

            <LoginForm />
          </section>
        </div>
      </div>
    </main>
  );
}
