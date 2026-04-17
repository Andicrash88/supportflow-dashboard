import { AuthProvider } from "@/context/AuthContext";
import { TasksProvider } from "@/context/TasksContext";
import { TicketsProvider } from "@/context/TicketsContext";

export function AppProviders({ children }) {
  return (
    <AuthProvider>
      <TicketsProvider>
        <TasksProvider>{children}</TasksProvider>
      </TicketsProvider>
    </AuthProvider>
  );
}
