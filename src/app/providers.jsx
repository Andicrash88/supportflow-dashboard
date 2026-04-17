import { AuthProvider } from "@/context/AuthContext";
import { TicketsProvider } from "@/context/TicketsContext";

export function AppProviders({ children }) {
  return (
    <AuthProvider>
      <TicketsProvider>{children}</TicketsProvider>
    </AuthProvider>
  );
}
