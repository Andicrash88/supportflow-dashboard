import { currentUser as seedUser } from "@/data/user";

const AUTH_STORAGE_KEY = "supportflow.session";

function toDisplayName(email) {
  const [localPart = "supportflow user"] = email.split("@");

  return localPart
    .split(/[._-]+/)
    .filter(Boolean)
    .map((segment) => segment.charAt(0).toUpperCase() + segment.slice(1))
    .join(" ");
}

function createSessionUser(email) {
  return {
    ...seedUser,
    id: `usr-${email.toLowerCase()}`,
    email,
    name: toDisplayName(email) || seedUser.name,
  };
}

function readStoredSession() {
  if (typeof window === "undefined") {
    return null;
  }

  const rawSession = window.localStorage.getItem(AUTH_STORAGE_KEY);

  if (!rawSession) {
    return null;
  }

  try {
    return JSON.parse(rawSession);
  } catch {
    window.localStorage.removeItem(AUTH_STORAGE_KEY);
    return null;
  }
}

export const authService = {
  getSession: () => readStoredSession(),
  login: async ({ email }) => {
    const user = createSessionUser(email.trim().toLowerCase());

    window.localStorage.setItem(AUTH_STORAGE_KEY, JSON.stringify(user));

    return user;
  },
  updateProfile: (updates) => {
    const session = readStoredSession();

    if (!session) {
      return null;
    }

    const nextUser = {
      ...session,
      ...updates,
    };

    window.localStorage.setItem(AUTH_STORAGE_KEY, JSON.stringify(nextUser));

    return nextUser;
  },
  logout: () => {
    if (typeof window === "undefined") {
      return;
    }

    window.localStorage.removeItem(AUTH_STORAGE_KEY);
  },
};
