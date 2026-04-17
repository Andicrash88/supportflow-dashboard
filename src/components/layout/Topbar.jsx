import { Bell, LogOut, Search } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { StatusBadge } from "@/components/ui/StatusBadge";
import { ThemeToggle } from "@/components/ui/ThemeToggle";
import { useAuth } from "@/hooks/useAuth";
import { getInitials } from "@/lib/utils";

export function Topbar() {
  const navigate = useNavigate();
  const { user, logout } = useAuth();

  const handleLogout = () => {
    logout();
    navigate("/login", { replace: true });
  };

  return (
    <header className="flex flex-col gap-4 rounded-[28px] border border-slate-200 bg-white/80 px-5 py-4 shadow-panel backdrop-blur dark:border-slate-800 dark:bg-slate-950/75 sm:flex-row sm:items-center sm:justify-between">
      <div className="flex max-w-xl items-center gap-3 rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 dark:border-slate-800 dark:bg-slate-900">
        <Search className="h-4 w-4 text-slate-400 dark:text-slate-500" />
        <input
          className="w-full border-none bg-transparent text-sm text-slate-900 outline-none placeholder:text-slate-400 dark:text-slate-100 dark:placeholder:text-slate-500"
          placeholder="Search tickets, tasks, or teammates"
          type="text"
        />
      </div>

      <div className="flex flex-wrap items-center gap-3 sm:justify-end">
        <ThemeToggle compact showLabel={false} />
        <button
          className="inline-flex items-center gap-2 rounded-2xl border border-slate-200 bg-white px-4 py-3 text-sm font-medium text-slate-600 transition hover:border-rose-200 hover:text-rose-600 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-300 dark:hover:border-rose-500 dark:hover:text-rose-300"
          onClick={handleLogout}
          type="button"
        >
          <LogOut className="h-4 w-4" />
          Log out
        </button>

        <button
          aria-label="Notifications"
          className="flex h-11 w-11 items-center justify-center rounded-2xl border border-slate-200 bg-white text-slate-600 transition hover:border-brand-200 hover:text-brand-700 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-300 dark:hover:border-brand-500 dark:hover:text-brand-300"
          type="button"
        >
          <Bell className="h-5 w-5" />
        </button>

        <div className="flex items-center gap-3 rounded-2xl border border-slate-200 bg-white px-3 py-2 dark:border-slate-700 dark:bg-slate-900">
          <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-brand-100 font-semibold text-brand-800 dark:bg-brand-900/50 dark:text-brand-200">
            {getInitials(user.name)}
          </div>
          <div>
            <p className="text-sm font-semibold text-slate-900 dark:text-slate-100">{user.name}</p>
            <div className="mt-1 flex items-center gap-2">
              <p className="text-xs text-slate-500 dark:text-slate-400">{user.role}</p>
              <StatusBadge value={user.status} />
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
