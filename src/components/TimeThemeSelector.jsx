import React from "react";
import { useTheme } from "../context/ThemeContext";

function TimeThemeSelector() {
  const { activeInfo, formattedTime, isAuto, toggleTheme, activeTheme } = useTheme();

  return (
    <button
      type="button"
      onClick={toggleTheme}
      className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-slate-100/90 dark:bg-slate-800/90 border border-slate-200/80 dark:border-slate-700/80 text-xs font-semibold text-slate-700 dark:text-slate-200 shadow-2xs hover:border-sky-400 dark:hover:border-sky-500 transition-all cursor-pointer group"
      title={`Local Time: ${formattedTime} • Mode: ${activeInfo.label} (${activeInfo.hours}) • ${isAuto ? "Auto Time-Switch Active" : "Manual Override (Click to return to Auto)"}`}
      aria-label="Toggle light/dark theme"
    >
      <span className="text-sm transition-transform group-hover:scale-110">
        {activeInfo.emoji}
      </span>
      <span className="font-mono-code text-[11px] text-slate-500 dark:text-slate-400">
        {formattedTime}
      </span>
      <span className="font-bold text-slate-900 dark:text-white">
        {activeTheme === "light" ? "Light" : "Dark"}
      </span>
      <span className="text-[10px] px-1.5 py-0.2 rounded-full font-mono bg-sky-500/10 text-sky-600 dark:text-sky-400 border border-sky-500/20 hidden sm:inline">
        {isAuto ? "Auto" : "Manual"}
      </span>
    </button>
  );
}

export default TimeThemeSelector;
