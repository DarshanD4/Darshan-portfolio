import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

function Skills() {
  const [activeCategory, setActiveCategory] = useState("All");

  const skills = [
    { name: "Flutter", type: "Framework", category: "Mobile" },
    { name: "React Native", type: "Framework", category: "Mobile" },
    { name: "Android & iOS", type: "Platforms", category: "Mobile" },
    { name: "Dart", type: "Language", category: "Languages" },
    { name: "Python", type: "Language", category: "Languages" },
    { name: "C", type: "Language", category: "Languages" },
    { name: "Firebase Auth & Firestore", type: "Cloud Backend", category: "Backend & Cloud" },
    { name: "REST APIs", type: "Integration", category: "Backend & Cloud" },
    { name: "SQLite", type: "Database", category: "Backend & Cloud" },
    { name: "Postman", type: "API Testing", category: "Tools & Design" },
    { name: "Git & GitHub", type: "Version Control", category: "Tools & Design" },
    { name: "Figma", type: "UI/UX Design", category: "Tools & Design" },
    { name: "Android Studio & VS Code", type: "IDE & Tooling", category: "Tools & Design" },
  ];

  const categories = ["All", "Mobile", "Languages", "Backend & Cloud", "Tools & Design"];

  const filteredSkills = activeCategory === "All"
    ? skills
    : skills.filter((s) => s.category === activeCategory);

  const getIcon = (name) => {
    const iconClass = "w-6 h-6 text-slate-800 dark:text-slate-200 transition-transform group-hover:scale-110";
    switch (name) {
      case "Flutter":
        return (
          <svg className={iconClass} fill="none" stroke="currentColor" strokeWidth="2.2" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
          </svg>
        );
      case "React Native":
        return (
          <svg className={iconClass} fill="none" stroke="currentColor" strokeWidth="2.2" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
          </svg>
        );
      case "Dart":
        return (
          <svg className={iconClass} fill="none" stroke="currentColor" strokeWidth="2.2" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364-6.364l-.707.707M6.343 17.657l-.707.707m0-12.728l.707.707m12.728 12.728l-.707.707M12 8a4 4 0 100 8 4 4 0 000-8z" />
          </svg>
        );
      case "Python":
        return (
          <svg className={iconClass} fill="none" stroke="currentColor" strokeWidth="2.2" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
          </svg>
        );
      case "C":
        return (
          <svg className={iconClass} fill="none" stroke="currentColor" strokeWidth="2.2" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M8 9l3 3-3 3m5 0h3M5 20h14a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
          </svg>
        );
      case "Firebase Auth & Firestore":
        return (
          <svg className={iconClass} fill="none" stroke="currentColor" strokeWidth="2.2" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 18.657A8 8 0 016.343 7.343S7 9 9 10c0-2 .5-5 2.986-7C14 5 16.09 5.777 17.656 7.343A7.975 7.975 0 0120 13a7.975 7.975 0 01-2.343 5.657z" />
          </svg>
        );
      case "REST APIs":
        return (
          <svg className={iconClass} fill="none" stroke="currentColor" strokeWidth="2.2" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z" />
          </svg>
        );
      case "SQLite":
        return (
          <svg className={iconClass} fill="none" stroke="currentColor" strokeWidth="2.2" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4" />
          </svg>
        );
      case "Git & GitHub":
        return (
          <svg className={iconClass} fill="none" stroke="currentColor" strokeWidth="2.2" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" />
          </svg>
        );
      case "Figma":
        return (
          <svg className={iconClass} fill="none" stroke="currentColor" strokeWidth="2.2" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />
          </svg>
        );
      case "Android Studio & VS Code":
        return (
          <svg className={iconClass} fill="none" stroke="currentColor" strokeWidth="2.2" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M8 9l3 3-3 3m5 0h3M5 20h14a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
          </svg>
        );
      default:
        return (
          <svg className={iconClass} fill="none" stroke="currentColor" strokeWidth="2.2" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
          </svg>
        );
    }
  };

  return (
    <section id="skills" className="py-24 px-4 sm:px-8 bg-white dark:bg-slate-900/80 border-t border-slate-200/70 dark:border-slate-800 transition-colors duration-500">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="text-xs font-bold uppercase tracking-widest text-sky-600 dark:text-sky-400">
            Technical Stack
          </span>
          <h2 className="mt-3 text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-900 dark:text-white">
            Skills & Technologies
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-600 dark:text-slate-300 leading-relaxed font-normal">
            A comprehensive overview of programming languages, frameworks, cloud backends, and developer tools.
          </p>
        </div>

        {/* Filter Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
          {categories.map((cat) => (
            <button
              key={cat}
              type="button"
              onClick={() => setActiveCategory(cat)}
              className={`px-4 py-2 rounded-xl text-xs font-bold transition cursor-pointer ${
                activeCategory === cat
                  ? "btn-theme-primary shadow-xs"
                  : "bg-slate-100 dark:bg-slate-800/80 text-slate-600 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-700 hover:text-slate-900 dark:hover:text-white"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Skills Grid */}
        <motion.div layout className="grid gap-4 grid-cols-2 sm:grid-cols-3 md:grid-cols-5">
          <AnimatePresence mode="popLayout">
            {filteredSkills.map((skill) => (
              <motion.div
                key={skill.name}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.25 }}
                className="pro-card p-5 bg-slate-50/50 dark:bg-slate-800/50 hover:bg-white dark:hover:bg-slate-800 flex flex-col items-center justify-center text-center group cursor-default"
              >
                <div className="w-12 h-12 rounded-xl bg-white dark:bg-slate-800 border border-slate-200/80 dark:border-slate-700 flex items-center justify-center mb-3 shadow-2xs group-hover:border-sky-300 transition">
                  {getIcon(skill.name)}
                </div>
                <h3 className="text-sm font-bold text-slate-900 dark:text-white mb-0.5">{skill.name}</h3>
                <span className="text-[11px] font-medium text-slate-500 dark:text-slate-400">{skill.type}</span>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}

export default Skills;
