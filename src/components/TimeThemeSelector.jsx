import React from "react";
import { useTheme } from "../context/ThemeContext";

function TimeThemeSelector() {
  const { activeInfo, formattedTime } = useTheme();

  return (
    <div
      className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-slate-100/90 dark:bg-slate-800/90 border border-slate-200/80 dark:border-slate-700/80 text-xs font-semibold text-slate-700 dark:text-slate-200 shadow-2xs select-none"
      title={`Local Time: ${formattedTime} (${activeInfo.label})`}
    >
      <span className="text-sm">{activeInfo.emoji}</span>
      <span className="font-mono-code text-[11px] text-slate-500 dark:text-slate-400">
        {formattedTime}
      </span>
      <span className="font-bold text-slate-900 dark:text-white">
        {activeInfo.label.split(" ")[0]}
      </span>
    </div>
  );
}

export default TimeThemeSelector;
