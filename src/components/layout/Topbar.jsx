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
    <header className="flex flex-col gap-4 rounded-[28px] border border-[#D0D7DE] bg-white px-5 py-4 shadow-panel dark:border-[#30363D] dark:bg-[#161B22] sm:flex-row sm:items-center sm:justify-between">
      <div className="flex max-w-xl items-center gap-3 rounded-2xl border border-[#D0D7DE] bg-slate-50 px-4 py-3 transition-colors hover:bg-white dark:border-[#30363D] dark:bg-[#0B0E14] dark:hover:bg-[#161B22]">
        <Search className="h-4 w-4 text-slate-400 dark:text-[#8B949E]" />
        <input
          className="w-full border-none bg-transparent text-sm text-slate-900 outline-none placeholder:text-slate-400 dark:text-[#F0F6FC] dark:placeholder:text-[#8B949E]"
          placeholder="Search tickets, tasks, or teammates"
          type="text"
        />
      </div>

      <div className="flex flex-wrap items-center gap-3 sm:justify-end">
        <ThemeToggle compact showLabel={false} />
        <button
          className="inline-flex items-center gap-2 rounded-2xl border border-[#D0D7DE] bg-white px-4 py-3 text-sm font-medium text-slate-600 transition hover:border-[#F85149]/40 hover:bg-rose-50 hover:text-rose-600 dark:border-[#30363D] dark:bg-[#161B22] dark:text-[#8B949E] dark:hover:border-[#F85149] dark:hover:bg-[#0B0E14] dark:hover:text-[#F0F6FC]"
          onClick={handleLogout}
          type="button"
        >
          <LogOut className="h-4 w-4" />
          Log out
        </button>

        <button
          aria-label="Notifications"
          className="flex h-11 w-11 items-center justify-center rounded-2xl border border-[#D0D7DE] bg-white text-slate-600 transition hover:border-brand-200 hover:bg-slate-50 hover:text-brand-700 dark:border-[#30363D] dark:bg-[#161B22] dark:text-[#8B949E] dark:hover:border-[#2F81F7] dark:hover:bg-[#0B0E14] dark:hover:text-[#F0F6FC]"
          type="button"
        >
          <Bell className="h-5 w-5" />
        </button>

        <div className="flex items-center gap-3 rounded-2xl border border-[#D0D7DE] bg-white px-3 py-2 dark:border-[#30363D] dark:bg-[#161B22]">
          <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-brand-100 font-semibold text-brand-800 dark:bg-[#0B0E14] dark:text-[#2F81F7]">
            {getInitials(user.name)}
          </div>
          <div>
            <p className="text-sm font-semibold text-slate-900 dark:text-[#F0F6FC]">{user.name}</p>
            <div className="mt-1 flex items-center gap-2">
              <p className="text-xs text-slate-500 dark:text-[#8B949E]">{user.role}</p>
              <StatusBadge value={user.status} />
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
