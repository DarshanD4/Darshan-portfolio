import React, { useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function ProjectModal({ isOpen, onClose, project }) {
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape") onClose();
    };
    if (isOpen) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleKeyDown);
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen || !project) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 overflow-y-auto">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-slate-900/65 backdrop-blur-md"
        />

        {/* Modal Window */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          transition={{ duration: 0.25, ease: "easeOut" }}
          className="relative w-full max-w-4xl bg-white dark:bg-slate-900 rounded-3xl shadow-2xl border border-slate-200 dark:border-slate-800 overflow-hidden z-10 flex flex-col max-h-[92vh]"
        >
          {/* Top Header */}
          <div className="flex items-center justify-between px-6 sm:px-8 py-5 border-b border-slate-200/80 dark:border-slate-800 bg-slate-50/80 dark:bg-slate-800/40">
            <div className="flex items-center gap-3">
              <span className="px-3 py-1 rounded-full bg-sky-50 dark:bg-sky-950/70 border border-sky-200 dark:border-sky-800 text-[11px] font-extrabold text-sky-700 dark:text-sky-300 uppercase tracking-wider">
                {project.badge || "Case Study"}
              </span>
              <span className="text-xs font-semibold text-slate-500 dark:text-slate-400 hidden sm:inline">
                {project.category}
              </span>
            </div>

            <button
              onClick={onClose}
              className="p-2 rounded-xl text-slate-400 hover:text-slate-600 dark:hover:text-slate-200 hover:bg-slate-200/60 dark:hover:bg-slate-800 transition cursor-pointer"
              aria-label="Close dialog"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>

          {/* Modal Content Scrollable Body */}
          <div className="flex-1 overflow-y-auto p-6 sm:p-8 space-y-8">
            {/* Title & Subhead */}
            <div>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white tracking-tight">
                {project.title}
              </h2>
              <p className="mt-2 text-base text-slate-600 dark:text-slate-300 leading-relaxed font-normal">
                {project.subtitle || project.description}
              </p>
            </div>

            {/* Quick Meta Cards */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 p-4 rounded-2xl bg-slate-50 dark:bg-slate-800/50 border border-slate-200/80 dark:border-slate-700/80 text-xs">
              <div>
                <span className="text-slate-400 font-bold block uppercase tracking-wider text-[10px]">Role</span>
                <span className="font-bold text-slate-900 dark:text-white text-sm">{project.role || "Developer"}</span>
              </div>
              <div>
                <span className="text-slate-400 font-bold block uppercase tracking-wider text-[10px]">Platform</span>
                <span className="font-bold text-slate-900 dark:text-white text-sm">{project.platform || "Cross-Platform"}</span>
              </div>
              <div>
                <span className="text-slate-400 font-bold block uppercase tracking-wider text-[10px]">Status</span>
                <span className="font-bold text-emerald-600 dark:text-emerald-400 text-sm">{project.status || "Production Ready"}</span>
              </div>
              <div>
                <span className="text-slate-400 font-bold block uppercase tracking-wider text-[10px]">Architecture</span>
                <span className="font-bold text-slate-900 dark:text-white text-sm">{project.architectureType || "Client-Server"}</span>
              </div>
            </div>

            {/* Technologies */}
            <div>
              <h3 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-3">Technologies & Libraries</h3>
              <div className="flex flex-wrap gap-2">
                {project.tech.map((t) => (
                  <span key={t} className="tech-tag text-xs font-semibold">
                    {t}
                  </span>
                ))}
              </div>
            </div>

            {/* Visual Screen / Mockup Render */}
            {project.mockup && (
              <div>
                <h3 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-3">Product Preview</h3>
                <div className="rounded-2xl overflow-hidden border border-slate-200 dark:border-slate-700 bg-slate-900 p-4 sm:p-6 text-white shadow-inner">
                  {project.mockup}
                </div>
              </div>
            )}

            {/* Architecture Pipeline Flow */}
            {project.architecture && (
              <div>
                <h3 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-3">System Architecture</h3>
                <div className="p-5 rounded-2xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200/80 dark:border-slate-700/80">
                  <div className="flex flex-wrap sm:flex-nowrap items-center justify-between gap-3 text-center">
                    {project.architecture.map((step, idx) => (
                      <React.Fragment key={step.name}>
                        <div className="flex-1 min-w-[120px] p-3 rounded-xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 shadow-2xs">
                          <span className="text-[10px] font-bold text-sky-600 dark:text-sky-400 uppercase block">{step.layer}</span>
                          <span className="text-xs font-bold text-slate-900 dark:text-white block mt-0.5">{step.name}</span>
                          <span className="text-[10px] text-slate-500 dark:text-slate-400 block mt-0.5">{step.tech}</span>
                        </div>
                        {idx < project.architecture.length - 1 && (
                          <div className="text-slate-300 dark:text-slate-600 font-bold hidden sm:block">
                            →
                          </div>
                        )}
                      </React.Fragment>
                    ))}
                  </div>
                </div>
              </div>
            )}

            {/* Key Contributions Checklist */}
            {project.contributions && (
              <div>
                <h3 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-3">Key Engineering Contributions</h3>
                <div className="grid gap-3 sm:grid-cols-2">
                  {project.contributions.map((item, idx) => (
                    <div
                      key={idx}
                      className="p-3.5 rounded-xl bg-slate-50 dark:bg-slate-800/50 border border-slate-200/80 dark:border-slate-700/80 flex items-start gap-2.5"
                    >
                      <div className="w-5 h-5 rounded-md bg-emerald-50 dark:bg-emerald-950/60 border border-emerald-200 dark:border-emerald-800 flex items-center justify-center text-emerald-600 dark:text-emerald-400 shrink-0 mt-0.5">
                        <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" strokeWidth="3" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                      <span className="text-xs sm:text-sm text-slate-700 dark:text-slate-300 font-medium leading-snug">
                        {item}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Detailed Feature Breakdown */}
            {project.features && (
              <div>
                <h3 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-3">Core Modules & Features</h3>
                <ul className="space-y-2 text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                  {project.features.map((feat, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <span className="text-sky-500 font-bold">•</span>
                      <span>{feat}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>

          {/* Modal Bottom Action Bar */}
          <div className="px-6 sm:px-8 py-4 border-t border-slate-200/80 dark:border-slate-800 bg-white dark:bg-slate-900 flex flex-wrap items-center justify-between gap-3">
            <span className="text-xs text-slate-400">
              Verified Production Case Study
            </span>

            <div className="flex items-center gap-3">
              {project.demo && (
                <a
                  href={project.demo}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl btn-theme-primary text-xs font-bold transition shadow-xs hover:shadow-md"
                >
                  <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
                    <path strokeLinecap="round" strokeLinejoin="round" d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span>View Project Demo</span>
                </a>
              )}

              {project.code && (
                <a
                  href={project.code}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 text-slate-900 dark:text-white border border-slate-200 dark:border-slate-700 text-xs font-bold transition"
                >
                  <svg className="w-4 h-4 text-slate-700 dark:text-slate-300" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                  </svg>
                  <span>Source Code</span>
                </a>
              )}

              <button
                type="button"
                onClick={onClose}
                className="px-4 py-2.5 rounded-xl text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800 text-xs font-semibold transition cursor-pointer"
              >
                Close
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
