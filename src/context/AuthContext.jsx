import { createContext, useContext, useMemo, useState } from "react";
import { currentUser as seedUser } from "@/data/user";

const AuthContext = createContext(null);

export function AuthProvider({ children }) {
  const [user] = useState(seedUser);

  const value = useMemo(
    () => ({
      user,
      isAuthenticated: Boolean(user),
    }),
    [user],
  );

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

export function useAuth() {
  const context = useContext(AuthContext);

  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider");
  }

  return context;
}
