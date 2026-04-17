import { Moon, SunMedium } from "lucide-react";
import { cn } from "@/lib/utils";
import { useTheme } from "@/hooks/useTheme";

export function ThemeToggle({ compact = false, showLabel = true }) {
  const { isDarkMode, toggleTheme } = useTheme();

  return (
    <button
      aria-label="Toggle theme"
      className={cn(
        "inline-flex items-center gap-2 rounded-2xl border px-4 py-3 text-sm font-semibold transition",
        "border-slate-200 bg-white text-slate-700 hover:border-brand-200 hover:text-brand-700",
        "dark:border-slate-700 dark:bg-slate-900 dark:text-slate-200 dark:hover:border-brand-500 dark:hover:text-brand-300",
        compact ? "h-11 w-11 justify-center px-0 py-0" : "",
      )}
      onClick={toggleTheme}
      type="button"
    >
      {isDarkMode ? <SunMedium className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
      {showLabel && !compact ? (isDarkMode ? "Light mode" : "Dark mode") : null}
    </button>
  );
}
