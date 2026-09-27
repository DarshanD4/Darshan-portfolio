import { useState } from "react";
import { motion } from "framer-motion";
import bytecraftLogo from "../assets/bytecraft_logo.png";
import CertificateModal from "./CertificateModal";

function Experience() {
  const [selectedCertificate, setSelectedCertificate] = useState(null);

  const byteCraftCert = {
    title: "Flutter Developer Internship Completion Letter",
    issuer: "ByteCraft Studios",
    badge: "Completed Internship · 2026",
    period: "2026",
    authority: "Dhiraj Zope (Founder & CEO)",
    pdfUrl: "/Darshan_MP_ByteCraft_Internship_Letter.pdf",
    summary:
      "Darshan M P showed a strong understanding of Flutter, Dart, creativity in solving logic challenges, and dedication to delivering user-centered products. ByteCraft Studios formally acknowledges successful completion of his engineering internship.",
  };

  const codeInfiniteCert = {
    title: "Android App Development Internship Certificate",
    issuer: "Code Infinite (Division of Sangam Soft Solutions)",
    badge: "Completed Internship · 2024",
    period: "Aug 13, 2024 – Sep 15, 2024",
    authority: "Project Manager (Code Infinite)",
    pdfUrl: "/Darshan_MP_Code_Infinite_Certificate.pdf",
    summary:
      "This is to certify that Mr. Darshan M P (Reg. No: 711722243027) successfully completed his Android App Development Internship at Code Infinite from 13/08/2024 to 15/09/2024 with exemplary conduct and performance.",
  };

  const timeline = [
    {
      role: "Flutter Developer Intern",
      company: "ByteCraft Studios",
      companyUrl: "https://bytecraftstudios.in/",
      logo: bytecraftLogo,
      period: "Completed Internship · 2026",
      statusBadge: "Completed",
      type: "Production Mobile Engineering",
      certData: byteCraftCert,
      bullets: [
        "Built and architected cross-platform Flutter applications with high runtime responsiveness.",
        "Integrated robust REST APIs with asynchronous data handling and error resilient caching.",
        "Worked with production state management patterns including ChangeNotifier, ValueNotifier, and scoped services.",
        "Developed responsive interfaces adapted for diverse device screen sizes, orientation modes, and accessibility standards.",
      ],
    },
    {
      role: "App Development Intern",
      company: "Code Infinite",
      companyUrl: "https://codeinfinite.in/",
      logo: null,
      period: "Aug 2024 — Sep 2024",
      statusBadge: "Completed",
      type: "Mobile & Real-Time Systems",
      certData: codeInfiniteCert,
      bullets: [
        "React Native & Android application development, delivering fluid cross-platform experiences.",
        "API / backend integration with structured network services and JSON payloads.",
        "Integrated Supabase backend for real-time authentication, row-level security, and PostgreSQL synchronization.",
        "Engineered real-time application features, modular UI components, and Figma-to-code prototype execution in 2-day MVP cycles.",
      ],
    },
  ];

  return (
    <section id="experience" className="py-24 px-4 sm:px-8 bg-white dark:bg-slate-900/80 border-t border-slate-200/70 dark:border-slate-800 transition-colors duration-500">
      <div className="max-w-4xl mx-auto">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-xs font-bold uppercase tracking-widest text-sky-600 dark:text-sky-400">
            Career & Verified Roles
          </span>
          <h2 className="mt-3 text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-900 dark:text-white">
            Professional Experience
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-600 dark:text-slate-300 leading-relaxed font-normal">
            Proven track record in production cross-platform mobile engineering, client-server integration, and shipping verified applications.
          </p>
        </div>

        {/* Vertical Timeline */}
        <div className="relative border-l-2 border-slate-200 dark:border-slate-700 ml-4 sm:ml-8 pl-6 sm:pl-10 space-y-12">
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
              <span className="absolute -left-[31px] sm:-left-[47px] top-6 flex h-4 w-4 items-center justify-center rounded-full bg-emerald-500 ring-4 ring-emerald-100 dark:ring-emerald-950 ring-offset-2 ring-offset-white dark:ring-offset-slate-900" />

              {/* Card Container */}
              <div className="pro-card p-6 sm:p-8 bg-slate-50/50 dark:bg-slate-800/50 hover:bg-white dark:hover:bg-slate-800 transition-all">
                {/* Header row */}
                <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4 border-b border-slate-200/80 dark:border-slate-700 pb-5">
                  <div className="flex items-start gap-4">
                    {item.logo ? (
                      <a
                        href={item.companyUrl}
                        target="_blank"
                        rel="noreferrer"
                        className="shrink-0 transition-transform hover:scale-105"
                      >
                        <img
                          src={item.logo}
                          alt={`${item.company} logo`}
                          className="h-11 sm:h-12 w-auto max-w-[120px] object-contain rounded-xl bg-slate-900 p-2 border border-slate-800 shadow-xs"
                        />
                      </a>
                    ) : (
                      <div className="w-11 h-11 sm:w-12 sm:h-12 rounded-xl bg-gradient-to-br from-indigo-500 to-sky-600 text-white font-extrabold flex items-center justify-center text-sm shadow-xs shrink-0">
                        CI
                      </div>
                    )}
                    <div>
                      <div className="flex items-center gap-2.5 flex-wrap">
                        <h3 className="text-xl font-bold text-slate-900 dark:text-white">{item.role}</h3>
                        <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full bg-emerald-50 dark:bg-emerald-950/60 border border-emerald-200 dark:border-emerald-800 text-[11px] font-bold text-emerald-700 dark:text-emerald-400">
                          <svg className="w-3 h-3 text-emerald-500" fill="none" stroke="currentColor" strokeWidth="3" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                          </svg>
                          {item.statusBadge}
                        </span>
                      </div>

                      <div className="mt-1 flex items-center gap-2 text-sm flex-wrap">
                        <a
                          href={item.companyUrl}
                          target="_blank"
                          rel="noreferrer"
                          className="inline-flex items-center gap-1 font-bold text-sky-600 dark:text-sky-400 hover:text-sky-700 transition"
                        >
                          <span>{item.company}</span>
                          <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                          </svg>
                        </a>
                        <span className="text-slate-300 dark:text-slate-600">•</span>
                        <span className="text-slate-500 dark:text-slate-400 font-medium">{item.type}</span>
                      </div>
                    </div>
                  </div>

                  <span className="self-start sm:self-center px-3.5 py-1.5 rounded-xl bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-xs font-bold text-slate-700 dark:text-slate-300">
                    {item.period}
                  </span>
                </div>

                {/* Bullets List */}
                <ul className="mt-6 space-y-2.5 text-slate-600 dark:text-slate-300 text-sm leading-relaxed">
                  {item.bullets.map((bullet, idx) => (
                    <li key={idx} className="flex items-start gap-2.5">
                      <svg className="w-4 h-4 text-sky-500 shrink-0 mt-0.5" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                      </svg>
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>

                {/* Proof Action Button */}
                <div className="mt-7 pt-5 border-t border-slate-200/80 dark:border-slate-700/80 flex flex-wrap items-center justify-between gap-3">
                  <div className="flex items-center gap-1.5 text-xs text-slate-500 dark:text-slate-400">
                    <svg className="w-4 h-4 text-emerald-500" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span>Verified Completion Letter Available</span>
                  </div>

                  <div className="flex items-center gap-2">
                    <button
                      type="button"
                      onClick={() => setSelectedCertificate(item.certData)}
                      className="inline-flex items-center gap-2 px-4 py-2 rounded-xl btn-theme-primary text-xs font-bold transition shadow-xs hover:shadow-sm cursor-pointer"
                    >
                      <svg className="w-3.5 h-3.5 text-sky-300" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                      </svg>
                      <span>VIEW COMPLETION LETTER</span>
                    </button>

                    <a
                      href={item.certData.pdfUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="p-2 rounded-xl bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-200 text-xs font-bold transition"
                      title="Open PDF directly"
                    >
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Certificate Modal */}
      <CertificateModal
        isOpen={Boolean(selectedCertificate)}
        onClose={() => setSelectedCertificate(null)}
        certificate={selectedCertificate}
      />
    </section>
  );
}

export default Experience;
