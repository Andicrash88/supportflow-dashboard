const THEME_STORAGE_KEY = "supportflow.theme";

export const themeStorageService = {
  getTheme: () => {
    if (typeof window === "undefined") {
      return "light";
    }

    const storedTheme = window.localStorage.getItem(THEME_STORAGE_KEY);
    return storedTheme === "dark" ? "dark" : "light";
  },
  saveTheme: (theme) => {
    if (typeof window === "undefined") {
      return;
    }

    window.localStorage.setItem(THEME_STORAGE_KEY, theme);
  },
};
