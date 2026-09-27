import { useState } from "react";
import { motion } from "framer-motion";
import CertificateModal from "./CertificateModal";

export default function Credentials() {
  const [activeModalCert, setActiveModalCert] = useState(null);

  const byteCraftCert = {
    title: "Flutter Developer Internship Completion Letter",
    issuer: "ByteCraft Studios",
    badge: "Internship Completed · 2026",
    period: "2026",
    authority: "Dhiraj Zope (Founder & CEO)",
    pdfUrl: "/Darshan_MP_ByteCraft_Internship_Letter.pdf",
    summary:
      "Darshan M P showed a strong understanding of Flutter, Dart, creativity in solving logic challenges, and dedication to delivering user-centered products. ByteCraft Studios formally acknowledges successful completion of his engineering internship.",
  };

  const codeInfiniteCert = {
    title: "Android App Development Internship Certificate",
    issuer: "Code Infinite (Division of Sangam Soft Solutions)",
    badge: "Internship Completed · 2024",
    period: "Aug 13, 2024 – Sep 15, 2024",
    authority: "Project Manager (Code Infinite)",
    pdfUrl: "/Darshan_MP_Code_Infinite_Certificate.pdf",
    summary:
      "This is to certify that Mr. Darshan M P (Reg. No: 711722243027) successfully completed his Android App Development Internship at Code Infinite from 13/08/2024 to 15/09/2024 with exemplary conduct and performance.",
  };

  const primaryCredentials = [
    {
      status: "INTERNSHIP COMPLETED",
      statusColor: "emerald",
      domain: "Flutter Development",
      organization: "ByteCraft Studios",
      year: "2026",
      actionText: "View Letter ↗",
      certData: byteCraftCert,
      description: "Production mobile development across REST APIs, responsive UIs, and state management.",
      verified: true,
    },
    {
      status: "INTERNSHIP COMPLETED",
      statusColor: "emerald",
      domain: "App Development",
      organization: "Code Infinite",
      year: "2024",
      actionText: "View Letter ↗",
      certData: codeInfiniteCert,
      description: "React Native and Android mobile engineering, Supabase backend, and real-time MVP delivery.",
      verified: true,
    },
    {
      status: "DEGREE CANDIDATE",
      statusColor: "sky",
      domain: "B.Tech AI & Data Science",
      organization: "KGISL Institute of Tech",
      year: "2022 – 2026",
      actionText: "CGPA: 7.9 / 10",
      description: "Machine Learning, Deep Learning, Computer Vision, Algorithms, and Software Engineering.",
      verified: true,
    },
    {
      status: "HACKATHON RUNNER-UP",
      statusColor: "indigo",
      domain: "Modular AI Assistant",
      organization: "AITM Codefest",
      year: "2024",
      actionText: "Awarded ↗",
      description: "Secured 2nd prize building an intelligent modular desktop & mobile assistant architecture.",
      verified: true,
    },
    {
      status: "COMPETITION RUNNER-UP",
      statusColor: "amber",
      domain: "Autonomous RL Racing",
      organization: "Amazon AWS DeepRacer",
      year: "2023",
      actionText: "Awarded ↗",
      description: "Reinforcement learning model optimization for autonomous model vehicle navigation.",
      verified: true,
    },
    {
      status: "VERIFIED IDENTITY",
      statusColor: "slate",
      domain: "Open-Source & Repos",
      organization: "GitHub / DarshanD4",
      year: "Active",
      actionText: "View GitHub ↗",
      url: "https://github.com/DarshanD4",
      description: "Public repositories covering Flutter mobile clients, PyTorch deepfake detectors, and utilities.",
      verified: true,
    },
  ];

  return (
    <section id="credentials" className="py-24 px-4 sm:px-8 bg-slate-50/60 dark:bg-slate-900/40 border-t border-slate-200/70 dark:border-slate-800 transition-colors duration-500">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-xs font-bold uppercase tracking-widest text-sky-600 dark:text-sky-400">
            Verified Proof
          </span>
          <h2 className="mt-3 text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-900 dark:text-white">
            Credentials & Certifications
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-600 dark:text-slate-300 leading-relaxed font-normal">
            Formal verification letters, completed industry internships, degree milestones, and competitive hackathon honors.
          </p>
        </div>

        {/* Credentials Grid */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {primaryCredentials.map((cred, idx) => (
            <motion.div
              key={cred.domain + cred.organization}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.4, delay: idx * 0.08 }}
              className="pro-card p-6 flex flex-col justify-between hover:shadow-lg transition-all"
            >
              <div>
                {/* Status Pill */}
                <div className="flex items-center justify-between gap-2 mb-4">
                  <span
                    className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[10px] font-extrabold tracking-wider ${
                      cred.statusColor === "emerald"
                        ? "bg-emerald-50 dark:bg-emerald-950/60 border border-emerald-200 dark:border-emerald-800 text-emerald-700 dark:text-emerald-300"
                        : cred.statusColor === "sky"
                        ? "bg-sky-50 dark:bg-sky-950/60 border border-sky-200 dark:border-sky-800 text-sky-700 dark:text-sky-300"
                        : cred.statusColor === "indigo"
                        ? "bg-indigo-50 dark:bg-indigo-950/60 border border-indigo-200 dark:border-indigo-800 text-indigo-700 dark:text-indigo-300"
                        : cred.statusColor === "amber"
                        ? "bg-amber-50 dark:bg-amber-950/60 border border-amber-200 dark:border-amber-800 text-amber-700 dark:text-amber-300"
                        : "bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-600 dark:text-slate-300"
                    }`}
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-current" />
                    {cred.status}
                  </span>

                  <span className="text-xs font-bold text-slate-400 dark:text-slate-500 font-mono-code">
                    {cred.year}
                  </span>
                </div>

                {/* Domain & Organization */}
                <h3 className="text-xl font-bold text-slate-900 dark:text-white tracking-tight mb-1">
                  {cred.domain}
                </h3>
                <p className="text-sm font-semibold text-slate-700 dark:text-slate-300 mb-3">
                  {cred.organization}
                </p>

                <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed font-normal mb-6">
                  {cred.description}
                </p>
              </div>

              {/* Bottom Action Row */}
              <div className="pt-4 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between">
                <div className="flex items-center gap-1.5 text-[11px] font-semibold text-slate-500 dark:text-slate-400">
                  <svg className="w-3.5 h-3.5 text-emerald-500" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                  <span>Verified Record</span>
                </div>

                {cred.certData ? (
                  <button
                    type="button"
                    onClick={() => setActiveModalCert(cred.certData)}
                    className="inline-flex items-center gap-1 font-bold text-xs text-sky-600 dark:text-sky-400 hover:text-sky-700 dark:hover:text-sky-300 transition cursor-pointer"
                  >
                    <span>{cred.actionText}</span>
                  </button>
                ) : cred.url ? (
                  <a
                    href={cred.url}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-1 font-bold text-xs text-sky-600 dark:text-sky-400 hover:text-sky-700 dark:hover:text-sky-300 transition"
                  >
                    <span>{cred.actionText}</span>
                  </a>
                ) : (
                  <span className="font-bold text-xs text-slate-700 dark:text-slate-300">
                    {cred.actionText}
                  </span>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Reusable Certificate Modal */}
      <CertificateModal
        isOpen={Boolean(activeModalCert)}
        onClose={() => setActiveModalCert(null)}
        certificate={activeModalCert}
      />
    </section>
  );
}
