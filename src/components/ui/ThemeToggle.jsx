import { Moon, SunMedium } from "lucide-react";
import { cn } from "@/lib/utils";
import { useTheme } from "@/hooks/useTheme";

export function ThemeToggle({ compact = false, showLabel = true }) {
  const { isDarkMode, toggleTheme } = useTheme();
  const nextThemeLabel = isDarkMode ? "Switch to light mode" : "Switch to dark mode";

  return (
    <button
      aria-label={nextThemeLabel}
      className={cn(
        "inline-flex items-center gap-2 rounded-2xl border px-4 py-3 text-sm font-semibold transition",
        "border-[#D0D7DE] bg-white text-slate-700 hover:border-brand-200 hover:bg-slate-50 hover:text-brand-700",
        "dark:border-[#30363D] dark:bg-[#161B22] dark:text-[#8B949E] dark:hover:border-[#2F81F7] dark:hover:bg-[#0B0E14] dark:hover:text-[#F0F6FC]",
        compact ? "h-11 w-11 justify-center px-0 py-0" : "",
      )}
      onClick={toggleTheme}
      title={nextThemeLabel}
      type="button"
    >
      {isDarkMode ? <SunMedium className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
      {showLabel && !compact ? (isDarkMode ? "Light mode" : "Dark mode") : null}
    </button>
  );
}
