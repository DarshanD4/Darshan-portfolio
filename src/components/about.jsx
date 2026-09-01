import { motion } from "framer-motion";

function About() {
  const highlights = [
    {
      title: "Mobile-First Focus",
      desc: "Architecting responsive, high-framerate mobile applications for iOS & Android using Flutter and React Native.",
      icon: (
        <svg className="w-5 h-5 text-sky-600 dark:text-sky-400" fill="none" stroke="currentColor" strokeWidth="2.2" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
        </svg>
      ),
    },
    {
      title: "AI Model Integration",
      desc: "Connecting machine learning models (CNNs, CV, and anomaly detection) with intuitive mobile client interfaces.",
      icon: (
        <svg className="w-5 h-5 text-indigo-600 dark:text-indigo-400" fill="none" stroke="currentColor" strokeWidth="2.2" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
        </svg>
      ),
    },
    {
      title: "Fast MVP Execution",
      desc: "Delivering production-grade MVPs rapidly with modular codebases, clean state management, and real-time backends.",
      icon: (
        <svg className="w-5 h-5 text-emerald-600 dark:text-emerald-400" fill="none" stroke="currentColor" strokeWidth="2.2" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      ),
    },
    {
      title: "Backend & Cloud Synergy",
      desc: "Seamless integration with Firebase, Supabase, SQLite, and REST APIs for scalable data sync and authentication.",
      icon: (
        <svg className="w-5 h-5 text-rose-600 dark:text-rose-400" fill="none" stroke="currentColor" strokeWidth="2.2" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M5 12h14M12 5l7 7-7 7" />
        </svg>
      ),
    },
  ];

  return (
    <section id="about" className="py-24 px-4 sm:px-8 bg-slate-50/60 dark:bg-slate-900/40 border-t border-slate-200/70 dark:border-slate-800 transition-colors duration-500">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-bold uppercase tracking-widest text-sky-600 dark:text-sky-400">
            About Me
          </span>
          <h2 className="mt-3 text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-900 dark:text-white">
            Engineering with focus, precision & speed
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-600 dark:text-slate-300 leading-relaxed font-normal">
            A developer who bridges user-centric mobile product design with robust engineering and applied machine learning.
          </p>
        </div>

        {/* 2-Column Story & Snapshot */}
        <div className="grid gap-12 lg:grid-cols-12 items-start">
          {/* Story Narrative */}
          <div className="lg:col-span-6 space-y-5 text-slate-600 dark:text-slate-300 leading-relaxed text-base">
            <p>
              I am a Flutter Developer Intern at{" "}
              <a
                href="https://bytecraftstudios.in/"
                target="_blank"
                rel="noreferrer"
                className="font-bold text-slate-900 dark:text-white underline decoration-sky-500 decoration-2 hover:text-sky-600 dark:hover:text-sky-400 transition"
              >
                ByteCraft Studios
              </a>
              , specializing in building high-performance cross-platform mobile applications. I translate intricate product requirements into smooth, responsive, and maintainable experiences using Flutter and React Native.
            </p>
            <p>
              My background spans mobile architecture, state management, and applied artificial intelligence—including designing CNN-based deepfake verification models that reach verified 85% accuracy.
            </p>
            <p>
              I work with a collaborative, product-first mindset: optimizing runtime efficiency, refining UI micro-interactions, and shipping high-impact features that delight users.
            </p>

            <div className="pt-3">
              <a
                href="https://github.com/DarshanD4"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 text-sm font-bold text-slate-900 dark:text-white hover:text-sky-600 dark:hover:text-sky-400 transition"
              >
                <span>View my open-source code on GitHub</span>
                <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </a>
            </div>
          </div>

          {/* Highlights 2x2 Grid */}
          <div className="lg:col-span-6 grid gap-4 sm:grid-cols-2">
            {highlights.map((item) => (
              <div
                key={item.title}
                className="pro-card p-6 flex flex-col justify-between"
              >
                <div>
                  <div className="w-10 h-10 rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-200/80 dark:border-slate-700 flex items-center justify-center mb-4 shadow-2xs">
                    {item.icon}
                  </div>
                  <h3 className="text-base font-bold text-slate-900 dark:text-white mb-2">{item.title}</h3>
                  <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 leading-relaxed font-normal">
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
