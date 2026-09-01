import React, { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useTheme, THEME_INFO, THEME_MODES } from "../context/ThemeContext";

function TimeThemeSelector() {
  const { activeTheme, activeInfo, overrideTheme, setManualTheme, formattedTime } = useTheme();
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div className="relative" ref={dropdownRef}>
      <button
        type="button"
        onClick={() => setIsOpen((prev) => !prev)}
        className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-slate-100/90 dark:bg-slate-800/90 hover:bg-slate-200/80 dark:hover:bg-slate-700/80 border border-slate-200/80 dark:border-slate-700/80 text-xs font-semibold text-slate-700 dark:text-slate-200 transition shadow-2xs cursor-pointer"
        title="Time-of-day dynamic theme based on viewer's local device time"
      >
        <span className="text-sm">{activeInfo.emoji}</span>
        <span className="hidden sm:inline font-mono-code text-[11px] text-slate-500 dark:text-slate-400">
          {formattedTime}
        </span>
        <span className="font-bold text-slate-900 dark:text-white">
          {activeInfo.label.split(" ")[0]}
        </span>
        <svg
          className={`w-3 h-3 text-slate-400 transition-transform ${isOpen ? "rotate-180" : ""}`}
          fill="none"
          stroke="currentColor"
          strokeWidth="2.5"
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
        </svg>
      </button>

      {/* Dropdown Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 8, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 8, scale: 0.96 }}
            transition={{ duration: 0.18 }}
            className="absolute right-0 mt-2 w-72 rounded-2xl p-3 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700 shadow-2xl z-50 text-left"
          >
            <div className="flex items-center justify-between px-2 pb-2 mb-2 border-b border-slate-100 dark:border-slate-800">
              <span className="text-[11px] font-bold uppercase tracking-wider text-slate-400">
                Time-of-Day Lighting
              </span>
              <button
                type="button"
                onClick={() => {
                  setManualTheme("auto");
                  setIsOpen(false);
                }}
                className={`text-[10px] font-bold px-2 py-0.5 rounded-md transition ${
                  overrideTheme === "auto"
                    ? "bg-sky-500 text-white"
                    : "bg-slate-100 dark:bg-slate-800 text-slate-500 hover:text-slate-900 dark:hover:text-white"
                }`}
              >
                Auto (Device Time)
              </button>
            </div>

            <div className="space-y-1">
              {Object.values(THEME_MODES).map((modeKey) => {
                const info = THEME_INFO[modeKey];
                const isSelected = activeTheme === modeKey;

                return (
                  <button
                    key={modeKey}
                    type="button"
                    onClick={() => {
                      setManualTheme(modeKey);
                      setIsOpen(false);
                    }}
                    className={`w-full flex items-center justify-between p-2 rounded-xl text-xs transition cursor-pointer ${
                      isSelected
                        ? "bg-slate-100 dark:bg-slate-800 font-bold border border-slate-200/80 dark:border-slate-700"
                        : "hover:bg-slate-50 dark:hover:bg-slate-800/50 text-slate-600 dark:text-slate-300"
                    }`}
                  >
                    <div className="flex items-center gap-2.5">
                      <span className="text-base">{info.emoji}</span>
                      <div>
                        <div className="flex items-center gap-1.5">
                          <span className="font-bold text-slate-900 dark:text-white">{info.label}</span>
                          <span
                            className="w-2.5 h-2.5 rounded-full inline-block border border-black/10 shadow-2xs"
                            style={{ backgroundColor: info.colorHex }}
                          />
                        </div>
                        <span className="text-[10px] text-slate-400">{info.hours}</span>
                      </div>
                    </div>

                    {isSelected && (
                      <span className="w-1.5 h-1.5 rounded-full bg-sky-500" />
                    )}
                  </button>
                );
              })}
            </div>

            <div className="mt-2.5 pt-2 border-t border-slate-100 dark:border-slate-800 px-2 text-[10px] text-slate-400 leading-tight">
              Shifts theme based on viewer’s device clock: <strong className="text-slate-600 dark:text-slate-300">Morning #ffeaa7</strong>, <strong className="text-slate-600 dark:text-slate-300">Midday #fdcb6e</strong>, <strong className="text-slate-600 dark:text-slate-300">Sunset</strong>, & <strong className="text-slate-600 dark:text-slate-300">Night</strong>.
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default TimeThemeSelector;
