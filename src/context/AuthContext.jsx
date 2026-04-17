import { createContext, useEffect, useMemo, useState } from "react";
import { authService } from "@/services/authService";

export const AuthContext = createContext(null);

export function AuthProvider({ children }) {
  const [user, setUser] = useState(() => authService.getSession());
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setUser(authService.getSession());
  }, []);

  const value = useMemo(
    () => ({
      user,
      isLoading,
      isAuthenticated: Boolean(user),
      login: async (credentials) => {
        setIsLoading(true);

        try {
          const nextUser = await authService.login(credentials);
          setUser(nextUser);

          return nextUser;
        } finally {
          setIsLoading(false);
        }
      },
      logout: () => {
        authService.logout();
        setUser(null);
      },
    }),
    [isLoading, user],
  );

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}
