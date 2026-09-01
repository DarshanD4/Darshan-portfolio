import React, { createContext, useContext, useState, useEffect, useMemo } from "react";

const ThemeContext = createContext();

export const THEME_MODES = {
  MORNING: "morning", // 7:00 AM - 10:00 AM (#ffeaa7 + sky blue + white)
  MIDDAY: "midday", // 10:00 AM - 5:00 PM (#896C6C, #E5BEB5, #EEE6CA, #F5FAE1)
  EVENING: "evening", // 5:00 PM - 8:00 PM (#EEB76B, #E2703A, #9C3D54, #310B0B)
  NIGHT: "night", // 8:00 PM - 7:00 AM (#091540, #1B2CC1, #7692FF, #ABD2FA)
};

export const THEME_INFO = {
  [THEME_MODES.MORNING]: {
    id: "morning",
    label: "Morning Glow",
    hours: "7 AM – 10 AM",
    colorHex: "#ffeaa7",
    emoji: "🌅",
    description: "Soft sunrise sunshine blended with sky blue and white",
  },
  [THEME_MODES.MIDDAY]: {
    id: "midday",
    label: "Midday Light",
    hours: "10 AM – 5 PM",
    colorHex: "#896C6C",
    palette: ["#896C6C", "#E5BEB5", "#EEE6CA", "#F5FAE1"],
    emoji: "☀️",
    description: "Warm slate mocha, blush sand, cream, and sunny ivory",
  },
  [THEME_MODES.EVENING]: {
    id: "evening",
    label: "Evening Sunset",
    hours: "5 PM – 8 PM",
    colorHex: "#E2703A",
    palette: ["#EEB76B", "#E2703A", "#9C3D54", "#310B0B"],
    emoji: "🌇",
    description: "Golden amber, sunset orange, twilight burgundy, and deep dusk",
  },
  [THEME_MODES.NIGHT]: {
    id: "night",
    label: "Midnight Dark",
    hours: "8 PM – 7 AM",
    colorHex: "#7692FF",
    palette: ["#091540", "#1B2CC1", "#7692FF", "#ABD2FA"],
    emoji: "🌙",
    description: "Midnight navy, electric cobalt, glowing periwinkle, and ice cyan",
  },
};

export const getThemeForHour = (hour) => {
  if (hour >= 7 && hour < 10) return THEME_MODES.MORNING;
  if (hour >= 10 && hour < 17) return THEME_MODES.MIDDAY;
  if (hour >= 17 && hour < 20) return THEME_MODES.EVENING;
  return THEME_MODES.NIGHT;
};

export function ThemeProvider({ children }) {
  const [overrideTheme, setOverrideTheme] = useState(() => {
    return sessionStorage.getItem("portfolio_theme_override") || "auto";
  });

  const [currentTime, setCurrentTime] = useState(new Date());

  // Keep time updated
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 30000); // check every 30s
    return () => clearInterval(timer);
  }, []);

  const autoTheme = useMemo(() => {
    return getThemeForHour(currentTime.getHours());
  }, [currentTime]);

  const activeTheme = overrideTheme === "auto" ? autoTheme : overrideTheme;
  const activeInfo = THEME_INFO[activeTheme] || THEME_INFO[THEME_MODES.MIDDAY];

  const formattedTime = useMemo(() => {
    return currentTime.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" });
  }, [currentTime]);

  // Apply theme class to root element
  useEffect(() => {
    const root = document.documentElement;
    const allThemeClasses = Object.values(THEME_MODES).map((t) => `theme-${t}`);
    root.classList.remove(...allThemeClasses);
    root.classList.add(`theme-${activeTheme}`);

    if (activeTheme === THEME_MODES.NIGHT) {
      root.classList.add("dark");
    } else {
      root.classList.remove("dark");
    }
  }, [activeTheme]);

  const setManualTheme = (themeKey) => {
    setOverrideTheme(themeKey);
    if (themeKey === "auto") {
      sessionStorage.removeItem("portfolio_theme_override");
    } else {
      sessionStorage.setItem("portfolio_theme_override", themeKey);
    }
  };

  return (
    <ThemeContext.Provider
      value={{
        activeTheme,
        activeInfo,
        autoTheme,
        overrideTheme,
        setManualTheme,
        currentTime,
        formattedTime,
        isNight: activeTheme === THEME_MODES.NIGHT,
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
