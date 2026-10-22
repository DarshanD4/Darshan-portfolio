import React, { createContext, useContext, useState, useEffect, useMemo } from "react";

const ThemeContext = createContext();

export const THEME_MODES = {
  LIGHT: "light", // 9:00 AM - 3:00 PM
  DARK: "dark",   // 3:00 PM - 9:00 AM
};

export const THEME_INFO = {
  [THEME_MODES.LIGHT]: {
    id: "light",
    label: "Light Mode",
    hours: "9 AM – 3 PM",
    colorHex: "#0284c7",
    emoji: "☀️",
    description: "Crisp, clean light mode (Active 9:00 AM – 3:00 PM)",
  },
  [THEME_MODES.DARK]: {
    id: "dark",
    label: "Dark Mode",
    hours: "3 PM – 9 AM",
    colorHex: "#38bdf8",
    emoji: "🌙",
    description: "Deep midnight dark mode (Active 3:00 PM – 9:00 AM)",
  },
};

/**
 * 9:00 AM to 3:00 PM -> Light Mode
 * Rest of the time (3:00 PM to 9:00 AM) -> Dark Mode
 */
export const getThemeForHour = (hour) => {
  if (hour >= 9 && hour < 15) {
    return THEME_MODES.LIGHT;
  }
  return THEME_MODES.DARK;
};

export function ThemeProvider({ children }) {
  const [overrideTheme, setOverrideTheme] = useState(() => {
    try {
      const saved = sessionStorage.getItem("portfolio_theme_override");
      if (saved === "light" || saved === "dark") return saved;
      // Clean up any stale legacy values
      sessionStorage.removeItem("portfolio_theme_override");
      return "auto";
    } catch {
      return "auto";
    }
  });

  const [currentTime, setCurrentTime] = useState(new Date());

  // Check and update time every 15 seconds to ensure instant auto-switch
  useEffect(() => {
    const update = () => setCurrentTime(new Date());
    update();
    const timer = setInterval(update, 15000);
    return () => clearInterval(timer);
  }, []);

  const autoTheme = useMemo(() => {
    return getThemeForHour(currentTime.getHours());
  }, [currentTime]);

  const activeTheme = overrideTheme === "auto" ? autoTheme : overrideTheme;
  const activeInfo = THEME_INFO[activeTheme] || THEME_INFO[THEME_MODES.DARK];

  const formattedTime = useMemo(() => {
    return currentTime.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" });
  }, [currentTime]);

  // Synchronize 'dark' and theme classes on <html> root element
  useEffect(() => {
    const root = document.documentElement;
    root.classList.remove("theme-light", "theme-dark", "theme-morning", "theme-midday", "theme-evening", "theme-night");
    root.classList.add(`theme-${activeTheme}`);

    if (activeTheme === THEME_MODES.DARK) {
      root.classList.add("dark");
    } else {
      root.classList.remove("dark");
    }
  }, [activeTheme]);

  const setManualTheme = (themeKey) => {
    setOverrideTheme(themeKey);
    try {
      if (themeKey === "auto") {
        sessionStorage.removeItem("portfolio_theme_override");
      } else {
        sessionStorage.setItem("portfolio_theme_override", themeKey);
      }
    } catch {}
  };

  const toggleTheme = () => {
    // If currently auto, switch to the opposite of auto
    // If already manual, cycle: auto -> light -> dark -> auto
    if (overrideTheme === "auto") {
      setManualTheme(autoTheme === THEME_MODES.DARK ? THEME_MODES.LIGHT : THEME_MODES.DARK);
    } else {
      // Return to auto
      setManualTheme("auto");
    }
  };

  return (
    <ThemeContext.Provider
      value={{
        activeTheme,
        activeInfo,
        autoTheme,
        overrideTheme,
        isAuto: overrideTheme === "auto",
        setManualTheme,
        toggleTheme,
        currentTime,
        formattedTime,
        isNight: activeTheme === THEME_MODES.DARK,
      }}
    >
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error("useTheme must be used within a ThemeProvider");
  }
  return context;
}
