import { LayoutDashboard, Ticket, ListTodo, Settings, LifeBuoy } from "lucide-react";
import { NavLink } from "react-router-dom";
import { cn } from "@/lib/utils";

const navigation = [
  { label: "Dashboard", to: "/dashboard", icon: LayoutDashboard },
  { label: "Tickets", to: "/tickets", icon: Ticket },
  { label: "Tasks", to: "/tasks", icon: ListTodo },
  { label: "Settings", to: "/settings", icon: Settings },
];

export function Sidebar() {
  return (
    <aside className="flex h-full w-full flex-col rounded-[28px] border border-white/60 bg-ink-950 px-5 py-6 text-white shadow-panel">
      <div className="flex items-center gap-3 border-b border-white/10 pb-6">
        <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-brand-600">
          <LifeBuoy className="h-5 w-5" />
        </div>
        <div>
          <p className="text-lg font-semibold tracking-tight">SupportFlow</p>
          <p className="text-sm text-slate-400">Ops command center</p>
        </div>
      </div>

      <nav className="mt-6 space-y-2">
        {navigation.map(({ label, to, icon: Icon }) => (
          <NavLink
            key={to}
            className={({ isActive }) =>
              cn(
                "flex items-center gap-3 rounded-2xl px-4 py-3 text-sm font-medium transition",
                isActive ? "bg-white text-slate-950" : "text-slate-300 hover:bg-white/10 hover:text-white",
              )
            }
            to={to}
          >
            <Icon className="h-4 w-4" />
            <span>{label}</span>
          </NavLink>
        ))}
      </nav>

      <div className="mt-auto rounded-3xl bg-white/5 p-4">
        <p className="text-sm font-medium">Phase 1 scaffold</p>
        <p className="mt-2 text-sm leading-6 text-slate-400">
          The navigation shell is ready for auth guards, nested modules, and API-backed workflows.
        </p>
      </div>
    </aside>
  );
}
