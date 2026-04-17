import { AuthProvider } from "@/context/AuthContext";
import { TasksProvider } from "@/context/TasksContext";
import { ThemeProvider } from "@/context/ThemeContext";
import { TicketsProvider } from "@/context/TicketsContext";

export function AppProviders({ children }) {
  return (
    <ThemeProvider>
      <AuthProvider>
        <TicketsProvider>
          <TasksProvider>{children}</TasksProvider>
        </TicketsProvider>
      </AuthProvider>
    </ThemeProvider>
  );
}
