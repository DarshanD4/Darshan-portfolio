import { motion } from "framer-motion";
import bytecraftLogo from "../assets/bytecraft_logo.png";

function Experience() {
  const timeline = [
    {
      role: "App Developer Intern",
      company: "Bytecraft Studios",
      companyUrl: "https://bytecraftstudios.in/",
      logo: bytecraftLogo,
      period: "2026 – Present",
      isCurrent: true,
      type: "Internship",
      details: [
        "Developing high-performance cross-platform mobile applications utilizing Flutter and React Native.",
        "Collaborating with product managers and UI/UX designers to architect modular, maintainable client features.",
        "Optimizing application state management, network caching, and asset pipelines for fast load times and fluid 60fps UI.",
      ],
    },
    {
      role: "AI Model Developer",
      company: "LipSync Deepfake Detection",
      companyUrl: "https://github.com/dharun18vk/cross_model_forgery",
      period: "2026",
      isCurrent: false,
      type: "AI Research & Development",
      details: [
        "Architected a deep learning CNN model engineered for audio-visual synchronization manipulation detection.",
        "Attained verified 85% detection accuracy using combined spatial feature extraction and temporal modeling.",
        "Implemented multi-factor metadata validation pipelines for robust forgery classification.",
      ],
    },
    {
      role: "App Developer Intern",
      company: "Finance App",
      companyUrl: "https://github.com/DarshanD4/PersonalFinanceTracker",
      period: "2024",
      isCurrent: false,
      type: "Mobile Engineering",
      details: [
        "Engineered a cross-platform personal finance tracker featuring 8+ custom responsive screens in Flutter.",
        "Built interactive charting, local SQLite caching, and real-time Firebase authentication.",
        "Delivered a rapid 2-day MVP turnaround from initial Figma UI design to production APK.",
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
            Work Experience
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-600 leading-relaxed font-normal">
            A track record of mobile engineering roles, production internships, and AI research projects.
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
      </div>
    </section>
  );
}

export default Experience;
