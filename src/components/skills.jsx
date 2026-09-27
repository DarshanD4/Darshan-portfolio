import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

function Skills() {
  const [hoveredDomain, setHoveredDomain] = useState(null);
  const [activeTab, setActiveTab] = useState("all");

  const skillDomains = [
    {
      id: "flutter",
      title: "Flutter & Mobile",
      category: "mobile",
      tagline: "Cross-Platform Engineering",
      icon: (
        <svg className="w-6 h-6 text-sky-500" fill="none" stroke="currentColor" strokeWidth="2.2" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
        </svg>
      ),
      coreTech: "Flutter & Dart",
      subSkills: [
        "Dart (Object-Oriented & Asynchronous)",
        "State Management (ChangeNotifier, ValueNotifier)",
        "Responsive UI (Phone, Tablet, Landscape adaptation)",
        "REST API Integration & Resilient Caching",
        "React Native & Cross-Platform Bridge",
        "Custom Canvas Painters & Micro-Animations",
      ],
      highlights: "Production mobile apps delivered at ByteCraft & Code Infinite",
    },
    {
      id: "aiml",
      title: "AI & Machine Learning",
      category: "ai",
      tagline: "Applied Deep Learning & Vision",
      icon: (
        <svg className="w-6 h-6 text-indigo-500" fill="none" stroke="currentColor" strokeWidth="2.2" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
        </svg>
      ),
      coreTech: "PyTorch & Computer Vision",
      subSkills: [
        "Python (NumPy, Pandas, SciPy)",
        "PyTorch & TensorFlow Model Training",
        "Convolutional Neural Networks (CNNs)",
        "Bidirectional LSTMs for Temporal Sequences",
        "Computer Vision & Face Mesh with OpenCV",
        "Gemini AI Prompt Engineering & API Orchestration",
      ],
      highlights: "85% verified lip-sync anomaly detector & AWS DeepRacer runner-up",
    },
    {
      id: "backend",
      title: "Backend & Cloud",
      category: "backend",
      tagline: "Scalable Infrastructure & APIs",
      icon: (
        <svg className="w-6 h-6 text-emerald-500" fill="none" stroke="currentColor" strokeWidth="2.2" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z" />
        </svg>
      ),
      coreTech: "Firebase & Supabase",
      subSkills: [
        "RESTful API Architecture & JSON Serialization",
        "Firebase Auth, Firestore & Cloud Storage",
        "Supabase Realtime WebSockets & Database Events",
        "Node.js & Express Endpoints",
        "OAuth & Role-Based Access Control (RBAC)",
        "API Security & Rate Limiting",
      ],
      highlights: "Real-time sync for social communities and enterprise ERPs",
    },
    {
      id: "database",
      title: "Database & Storage",
      category: "database",
      tagline: "Offline-First & Relational Data",
      icon: (
        <svg className="w-6 h-6 text-amber-500" fill="none" stroke="currentColor" strokeWidth="2.2" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4" />
        </svg>
      ),
      coreTech: "SQLite & PostgreSQL",
      subSkills: [
        "SQLite (Local Mobile Offline Caching)",
        "PostgreSQL Relational Schema Design",
        "Supabase Row-Level Security (RLS) Policies",
        "Cloud Firestore Document Collections",
        "Query Optimization & Indexing",
        "Data Migration & Offline Mutation Queues",
      ],
      highlights: "Zero-latency local transaction logs with automatic cloud re-sync",
    },
    {
      id: "tools",
      title: "Tools & Engineering",
      category: "tools",
      tagline: "Dev Workflow & Design Systems",
      icon: (
        <svg className="w-6 h-6 text-purple-500" fill="none" stroke="currentColor" strokeWidth="2.2" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" />
        </svg>
      ),
      coreTech: "Git, Postman, Figma",
      subSkills: [
        "Git, GitHub Version Control & Branching",
        "Postman API Testing & Endpoint Debugging",
        "Figma UI/UX Component Systems & Prototyping",
        "Android Studio, VS Code & DevTools Profiler",
        "Linux CLI & Build Scripting",
        "CI / CD Mobile Deployment Readiness",
      ],
      highlights: "Rapid 2-day MVP turnaround from Figma prototypes to working code",
    },
  ];

  const filteredDomains = activeTab === "all"
    ? skillDomains
    : skillDomains.filter((d) => d.category === activeTab);

  return (
    <section
      id="skills"
      className="py-24 px-4 sm:px-8 bg-white dark:bg-slate-900/80 border-t border-slate-200/70 dark:border-slate-800 transition-colors duration-500"
    >
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="text-xs font-bold uppercase tracking-widest text-sky-600 dark:text-sky-400">
            Technical Stack
          </span>
          <h2 className="mt-3 text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-900 dark:text-white">
            Skills & Specialized Domains
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-600 dark:text-slate-300 leading-relaxed font-normal">
            Hover or tap any core card to expand the specialized sub-skills, libraries, and production patterns I work with daily.
          </p>
        </div>

        {/* Filter Pills */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
          {[
            { id: "all", label: "All Disciplines" },
            { id: "mobile", label: "Flutter & Mobile" },
            { id: "ai", label: "AI & Machine Learning" },
            { id: "backend", label: "Backend & Cloud" },
            { id: "database", label: "Databases" },
            { id: "tools", label: "Tools & Design" },
          ].map((tab) => (
            <button
              key={tab.id}
              type="button"
              onClick={() => setActiveTab(tab.id)}
              className={`px-4 py-2 rounded-xl text-xs font-bold transition cursor-pointer ${
                activeTab === tab.id
                  ? "btn-theme-primary shadow-xs"
                  : "bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-700"
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Interactive Expandable Cards Grid */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 items-start">
          {filteredDomains.map((domain) => {
            const isHovered = hoveredDomain === domain.id;

            return (
              <motion.div
                key={domain.id}
                layout
                onMouseEnter={() => setHoveredDomain(domain.id)}
                onMouseLeave={() => setHoveredDomain(null)}
                onClick={() => setHoveredDomain(isHovered ? null : domain.id)}
                className={`pro-card p-6 sm:p-7 transition-all cursor-pointer ${
                  isHovered
                    ? "border-sky-400 dark:border-sky-500 shadow-xl bg-white dark:bg-slate-800 scale-[1.02]"
                    : "bg-slate-50/50 dark:bg-slate-800/40 hover:bg-white dark:hover:bg-slate-800"
                }`}
              >
                {/* Card Header */}
                <div className="flex items-start justify-between gap-4 mb-4">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-700 flex items-center justify-center shadow-xs">
                      {domain.icon}
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-slate-900 dark:text-white leading-tight">
                        {domain.title}
                      </h3>
                      <span className="text-xs text-sky-600 dark:text-sky-400 font-semibold block mt-0.5">
                        {domain.tagline}
                      </span>
                    </div>
                  </div>

                  <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider bg-slate-100 dark:bg-slate-800 px-2 py-1 rounded-md">
                    {isHovered ? "Expanded" : "Hover"}
                  </span>
                </div>

                {/* Core Tech Pill */}
                <div className="mb-4">
                  <span className="text-xs font-mono-code font-bold text-slate-700 dark:text-slate-300 bg-slate-100 dark:bg-slate-700/60 px-3 py-1 rounded-lg inline-block">
                    {domain.coreTech}
                  </span>
                </div>

                {/* Always visible brief divider */}
                <div className="h-px bg-slate-200/80 dark:border-slate-700 mb-4" />

                {/* Expanded Sub-Skills List (revealed dynamically) */}
                <div className="space-y-2">
                  <div className="text-[11px] font-bold uppercase tracking-wider text-slate-400 mb-2 flex items-center justify-between">
                    <span>Specialized Sub-Skills</span>
                    <span className="text-sky-500 font-mono text-[10px]">
                      {domain.subSkills.length} competencies
                    </span>
                  </div>

                  <ul className="space-y-1.5 text-xs text-slate-600 dark:text-slate-300">
                    {domain.subSkills.map((sub, i) => (
                      <motion.li
                        key={sub}
                        initial={false}
                        animate={{ opacity: 1 }}
                        className="flex items-start gap-2 leading-relaxed"
                      >
                        <span className="text-sky-500 font-bold mt-0.5">›</span>
                        <span className={isHovered ? "font-semibold text-slate-900 dark:text-white" : ""}>
                          {sub}
                        </span>
                      </motion.li>
                    ))}
                  </ul>
                </div>

                {/* Footer contextual highlight */}
                <div className="mt-5 pt-4 border-t border-slate-100 dark:border-slate-800 text-[11px] text-slate-500 dark:text-slate-400 flex items-center gap-1.5 font-medium">
                  <svg className="w-3.5 h-3.5 text-emerald-500 shrink-0" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                  <span>{domain.highlights}</span>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default Skills;
