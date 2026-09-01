import { motion } from "framer-motion";
import bytecraftLogo from "../assets/bytecraft_logo.png";

function Experience() {
  const timeline = [
    {
      role: "Flutter Developer Intern",
      company: "ByteCraft Studios",
      companyUrl: "https://bytecraftstudios.in/",
      logo: bytecraftLogo,
      period: "Jun 2026 – Present",
      isCurrent: true,
      type: "Internship",
      details: [
        "Designed and developed the complete Employee role of a cross-platform application using Flutter, working across frontend development, backend development, and REST API integration.",
        "Built and refined responsive UI/UX, reusable components, navigation flows, and role-specific features, with a focus on consistency and usability across screen sizes.",
        "Implemented animations and interactive UI behavior while working with Flutter state-management concepts including ChangeNotifier and ValueNotifier.",
      ],
    },
    {
      role: "App Developer Intern",
      company: "Finance App",
      companyUrl: "https://github.com/DarshanD4/PersonalFinanceTracker",
      period: "Aug 2024 – Sep 2024",
      isCurrent: false,
      type: "Mobile Engineering",
      details: [
        "Developed a cross-platform Personal Finance Tracking application with 8+ core screens using Flutter.",
        "Implemented the App’s UI/UX component design using Figma and made MVP in 2 days.",
        "Debugged and optimized UI performance during testing to reduce application lag.",
      ],
    },
  ];

  return (
    <section id="experience" className="py-24 px-4 sm:px-8 bg-white border-t border-slate-200/70">
      <div className="max-w-4xl mx-auto">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-xs font-bold uppercase tracking-widest text-sky-600">
            Career & Roles
          </span>
          <h2 className="mt-3 text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-900">
            Professional Experience
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-600 leading-relaxed font-normal">
            Track record of production mobile engineering internships and cross-platform app delivery.
          </p>
        </div>

        {/* Modern Vertical Timeline */}
        <div className="relative border-l-2 border-slate-200 ml-4 sm:ml-8 pl-6 sm:pl-10 space-y-10">
          {timeline.map((item, index) => (
            <motion.div
              key={`${item.company}-${item.role}`}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="relative"
            >
              {/* Timeline Indicator Dot */}
              <span
                className={`absolute -left-[31px] sm:-left-[47px] top-6 flex h-4 w-4 items-center justify-center rounded-full ${
                  item.isCurrent
                    ? "bg-sky-500 ring-4 ring-sky-100 ring-offset-2 ring-offset-white"
                    : "bg-slate-300 ring-4 ring-slate-100"
                }`}
              />

              {/* Card Container */}
              <div className="pro-card p-6 sm:p-8 bg-slate-50/50 hover:bg-white transition-all">
                {/* Header row */}
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-slate-200/80 pb-5">
                  <div className="flex items-start gap-4">
                    {item.logo && (
                      <a
                        href={item.companyUrl}
                        target="_blank"
                        rel="noreferrer"
                        className="shrink-0 transition-transform hover:scale-105"
                      >
                        <img
                          src={item.logo}
                          alt={`${item.company} logo`}
                          className="h-10 sm:h-12 w-auto max-w-[120px] object-contain rounded-xl bg-slate-900 p-2 border border-slate-800 shadow-xs"
                        />
                      </a>
                    )}
                    <div>
                      <div className="flex items-center gap-2.5 flex-wrap">
                        <h3 className="text-xl font-bold text-slate-900">{item.role}</h3>
                        {item.isCurrent && (
                          <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-sky-50 border border-sky-200 text-[11px] font-bold text-sky-700">
                            <span className="w-1.5 h-1.5 rounded-full bg-sky-500 animate-pulse" />
                            Current
                          </span>
                        )}
                      </div>

                      <div className="mt-1 flex items-center gap-2 text-sm">
                        {item.companyUrl ? (
                          <a
                            href={item.companyUrl}
                            target="_blank"
                            rel="noreferrer"
                            className="inline-flex items-center gap-1 font-semibold text-sky-600 hover:text-sky-700 transition"
                          >
                            <span>{item.company}</span>
                            <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                            </svg>
                          </a>
                        ) : (
                          <span className="font-semibold text-slate-700">{item.company}</span>
                        )}
                        <span className="text-slate-300">•</span>
                        <span className="text-slate-500 font-medium">{item.type}</span>
                      </div>
                    </div>
                  </div>

                  <span className="self-start sm:self-center px-3 py-1 rounded-lg bg-slate-100 border border-slate-200 text-xs font-bold text-slate-600">
                    {item.period}
                  </span>
                </div>

                {/* Details list */}
                <ul className="mt-5 space-y-2.5 text-slate-600 text-sm leading-relaxed">
                  {item.details.map((detail, idx) => (
                    <li key={idx} className="flex items-start gap-2.5">
                      <svg className="w-4 h-4 text-sky-500 shrink-0 mt-0.5" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                      </svg>
                      <span>{detail}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Education & Honors Card */}
        <div className="mt-12 grid gap-6 sm:grid-cols-2">
          {/* Education */}
          <div className="pro-card p-6 sm:p-7 bg-slate-50/50">
            <div className="flex items-center gap-3 mb-3">
              <div className="w-9 h-9 rounded-xl bg-white border border-slate-200/80 flex items-center justify-center text-sky-600 shadow-2xs">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2.2" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 14l9-5-9-5-9 5 9 5z" />
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
                </svg>
              </div>
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-slate-400">Education</span>
                <h3 className="text-base font-bold text-slate-900">B.Tech in Artificial Intelligence & Data Science</h3>
              </div>
            </div>
            <p className="text-sm font-semibold text-slate-700 mt-2">KGISL Institute of Technology</p>
            <div className="flex items-center justify-between mt-3 pt-3 border-t border-slate-200/80 text-xs font-medium text-slate-500">
              <span>Nov 2022 – May 2026</span>
              <span className="px-2.5 py-0.5 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-700 font-bold">CGPA: 7.9 / 10</span>
            </div>
          </div>

          {/* Achievements */}
          <div className="pro-card p-6 sm:p-7 bg-slate-50/50">
            <div className="flex items-center gap-3 mb-3">
              <div className="w-9 h-9 rounded-xl bg-white border border-slate-200/80 flex items-center justify-center text-indigo-600 shadow-2xs">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2.2" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                </svg>
              </div>
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-slate-400">Honors & Competitions</span>
                <h3 className="text-base font-bold text-slate-900">Key Achievements</h3>
              </div>
            </div>
            <ul className="mt-2 space-y-2 text-xs sm:text-sm text-slate-600 leading-relaxed">
              <li className="flex items-start gap-2">
                <span className="text-sky-500 font-bold">•</span>
                <span><strong>Runner-Up:</strong> AITM Codefest 2024 for Modular AI Assistant</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-sky-500 font-bold">•</span>
                <span><strong>Runner-Up:</strong> Amazon AWS DeepRacer Competition (2023)</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Experience;
