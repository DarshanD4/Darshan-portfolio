import { useState } from "react";
import { motion } from "framer-motion";
import ProjectModal from "./ProjectModal";
import {
  EdprowiseMockup,
  NetGapMockup,
  LipSyncMockup,
  FinanceTrackerMockup,
} from "./ProjectMockups";

function Projects() {
  const [activeProjectModal, setActiveProjectModal] = useState(null);

  const projects = [
    {
      id: "edprowise",
      title: "Edprowise",
      subtitle: "Enterprise Employee Management & ERP Platform",
      badge: "PROFESSIONAL PROJECT",
      productionTag: "Built in Production",
      role: "Flutter Developer",
      platform: "Cross-Platform (iOS, Android, Tablet)",
      status: "Active Production Deployment",
      architectureType: "Clean Modular Services",
      category: "Enterprise Mobile System",
      description:
        "Engineered the complete employee lifecycle platform in Flutter, covering mission-critical HR operations, payroll processing, and responsive layout scaling across all device form factors.",
      tech: [
        "Flutter",
        "Dart",
        "REST APIs",
        "Firebase",
        "State Management",
        "Responsive UI",
        "Payroll Engine",
      ],
      mockup: <EdprowiseMockup />,
      architecture: [
        { layer: "Frontend", name: "Flutter Client", tech: "Adaptive UI / Components" },
        { layer: "State", name: "Service Layer", tech: "ChangeNotifier / Repositories" },
        { layer: "Network", name: "REST API", tech: "HTTPS / JSON Serializers" },
        { layer: "Backend", name: "Enterprise Server", tech: "Auth / Business Rules" },
        { layer: "Storage", name: "Database", tech: "Cloud SQL & Document Store" },
      ],
      contributions: [
        "Full REST API integration across 20+ enterprise endpoints with error resilient caching.",
        "Engineered dynamic Payroll and Salary Slip modules with instant calculation and PDF export.",
        "Built comprehensive Attendance and Leave Management workflows with status tracking.",
        "Created LMS modules and interactive Timetable schedule views for institutional users.",
        "Implemented IT Declaration workflows with tax slab validation and document upload.",
        "Designed responsive layouts supporting seamless landscape and portrait phone/tablet adaptation.",
      ],
      features: [
        "Authentication & Role-Based Access Control (RBAC) for Employee and Manager personas.",
        "Dynamic Monthly Salary Slips with itemized deductions, gross pay, and IT declaration history.",
        "Biometric/Geofence-ready Clock-In/Clock-Out attendance tracking and absence regularization.",
        "Leave request submission, balance calculation, and hierarchical managerial approvals.",
        "Learning Management System (LMS) modules with coursework tracking and schedule timetables.",
      ],
      demo: null,
      code: null,
    },
    {
      id: "netgap",
      title: "NetGap",
      subtitle: "Mindset-Based Entrepreneur Community & AI Matchmaking",
      badge: "STARTUP PROJECT",
      productionTag: "Real-World Product",
      role: "Mobile Engineer & Co-Founder",
      platform: "React Native (iOS & Android)",
      status: "Beta Testing",
      architectureType: "Client-Cloud Realtime",
      category: "Social Platform & AI Engine",
      description:
        "A mindset-driven mobile community platform engineered in React Native for entrepreneurs. Integrates Gemini AI for contextual peer matching, real-time Supabase feeds, and collaborative founder channels.",
      tech: ["React Native", "Supabase", "Gemini AI", "REST APIs", "Node.js", "PostgreSQL"],
      mockup: <NetGapMockup />,
      architecture: [
        { layer: "Mobile", name: "React Native App", tech: "Tailwind / Navigation" },
        { layer: "Realtime", name: "Supabase Client", tech: "WebSockets & Channels" },
        { layer: "AI Match", name: "Gemini AI Model", tech: "User Taxonomy Embedding" },
        { layer: "Backend", name: "PostgreSQL DB", tech: "Row Level Security (RLS)" },
      ],
      contributions: [
        "Engineered 12+ reactive mobile views with custom gestures and real-time state listeners.",
        "Implemented Gemini AI prompting pipeline to evaluate founder mindsets and suggest synergies.",
        "Built Supabase PostgreSQL schema with Row-Level Security and instant WebSocket chat delivery.",
        "Integrated dynamic community feeds, content bookmarking, and peer direct messaging.",
      ],
      features: [
        "AI Mindset Matching algorithm calculating percentage compatibility between entrepreneurs.",
        "Instant messaging and thread discussions with optimistic UI updates.",
        "Curated founder knowledge feeds with peer validation metrics.",
      ],
      demo: "https://drive.google.com/file/d/1mXtIi4Ulm4UhhC_sgtDDhB80cA-kqhhq/view?usp=sharing",
      code: null,
    },
    {
      id: "lipsync",
      title: "LipSync Deepfake Detector",
      subtitle: "Audio-Visual Temporal Anomaly Verification AI",
      badge: "RESEARCH & AI MODEL",
      productionTag: "85% Verified Accuracy",
      role: "AI / Deep Learning Researcher",
      platform: "Python / PyTorch Framework",
      status: "Benchmark Validated",
      architectureType: "Dual-Stream Neural Network",
      category: "Computer Vision & Deep Learning",
      description:
        "A dual-stream deep learning CNN and Bidirectional LSTM network that analyzes phoneme-viseme temporal misalignments to detect synthetic lip-sync manipulations with verified 85% accuracy.",
      tech: ["PyTorch", "CNN", "LSTM", "Computer Vision", "OpenCV", "Python", "Librosa"],
      mockup: <LipSyncMockup />,
      architecture: [
        { layer: "Video", name: "Facial Landmark Mesh", tech: "OpenCV / dlib 68-pts" },
        { layer: "Audio", name: "MFCC Spectrogram", tech: "Librosa Audio Pipeline" },
        { layer: "Model", name: "CNN + Bi-LSTM", tech: "Temporal Feature Fusion" },
        { layer: "Decision", name: "Anomaly Classifier", tech: "Cross-Modal Contrastive Loss" },
      ],
      contributions: [
        "Formulated cross-modal temporal feature extractor correlating speech audio with lip movement.",
        "Trained CNN backbone to isolate fine-grained visual artifacts around mouth boundaries.",
        "Integrated Bidirectional LSTM cells to model temporal continuity across consecutive video frames.",
        "Achieved 85% verification accuracy across diverse open benchmark synthetic video datasets.",
      ],
      features: [
        "Dual-pipeline synchronous audio-visual extraction from raw MP4 media.",
        "Spatial bounding and crop normalization for speaker oral regions.",
        "Automated confidence metric and forgery heatmap overlay generator.",
      ],
      demo: "https://drive.google.com/file/d/130EktnODFbe3FtVFtZDG-q6JewUyPtiB/view?usp=sharing",
      code: "https://github.com/dharun18vk/cross_model_forgery",
    },
    {
      id: "finance",
      title: "Personal Finance Tracker",
      subtitle: "Offline-First Mobile Budget & Expense Analytics",
      badge: "MOBILE APPLICATION",
      productionTag: "Production MVP",
      role: "Flutter Mobile Developer",
      platform: "Flutter (Android & iOS)",
      status: "Completed & Deployed",
      architectureType: "Offline-First SQLite + Cloud",
      category: "Mobile Application",
      description:
        "Full-scale personal finance and expense analytics client built in Flutter with 8+ polished screens, Figma design system implementation, interactive charts, and local SQLite offline persistence.",
      tech: ["Flutter", "Dart", "Firebase", "SQLite", "Figma", "Charts"],
      mockup: <FinanceTrackerMockup />,
      architecture: [
        { layer: "UI / UX", name: "Flutter Screens", tech: "Figma Component System" },
        { layer: "Local DB", name: "SQLite Engine", tech: "Instant Offline Sync" },
        { layer: "Cloud", name: "Firebase Auth", tech: "Remote Account Backup" },
      ],
      contributions: [
        "Implemented 8+ interactive production screens designed originally in Figma.",
        "Engineered local SQLite caching so users can record financial entries without internet access.",
        "Created interactive category spending charts and monthly budget forecasts.",
        "Optimized UI render passes and eliminated frame drops for 60fps interaction.",
      ],
      features: [
        "Instant transaction logging with categorization (Food, Bills, Tech, Savings).",
        "Visual budget limit indicators with automated threshold alerts.",
        "Full offline functionality with automatic background cloud sync upon reconnection.",
      ],
      demo: "https://drive.google.com/file/d/1MO1gBZDc_1FvPEaRIuyEHIpJuwypH2PB/view?usp=sharing",
      code: "https://github.com/DarshanD4/PersonalFinanceTracker",
    },
  ];

  return (
    <section
      id="projects"
      className="py-24 px-4 sm:px-8 bg-slate-50/60 dark:bg-slate-900/40 border-t border-slate-200/70 dark:border-slate-800 transition-colors duration-500"
    >
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-bold uppercase tracking-widest text-sky-600 dark:text-sky-400">
            Selected Engineering Portfolio
          </span>
          <h2 className="mt-3 text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-slate-900 dark:text-white">
            Featured Products & Systems
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-600 dark:text-slate-300 leading-relaxed font-normal">
            Production mobile applications, enterprise ERP platforms, AI anomaly detectors, and responsive cross-platform architectures.
          </p>
        </div>

        {/* Alternating Feature Project Showcase */}
        <div className="space-y-12">
          {projects.map((project, index) => {
            const isReversed = index % 2 === 1;

            return (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="pro-card p-6 sm:p-10 bg-white dark:bg-slate-800/80 hover:shadow-xl transition-all"
              >
                <div
                  className={`grid gap-8 lg:grid-cols-12 items-center ${
                    isReversed ? "lg:flex-row-reverse" : ""
                  }`}
                >
                  {/* Text Details Column */}
                  <div
                    className={`lg:col-span-6 flex flex-col justify-between ${
                      isReversed ? "lg:order-2" : "lg:order-1"
                    }`}
                  >
                    <div>
                      {/* Top Badges */}
                      <div className="flex flex-wrap items-center gap-2 mb-4">
                        <span className="px-3 py-1 rounded-full bg-sky-50 dark:bg-sky-950/70 border border-sky-200 dark:border-sky-800 text-[11px] font-extrabold tracking-wider text-sky-700 dark:text-sky-300 uppercase">
                          {project.badge}
                        </span>

                        {project.productionTag && (
                          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-50 dark:bg-emerald-950/60 border border-emerald-200 dark:border-emerald-800 text-[11px] font-bold text-emerald-700 dark:text-emerald-300">
                            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                            {project.productionTag}
                          </span>
                        )}
                      </div>

                      {/* Main Title & Subtitle */}
                      <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white tracking-tight">
                        {project.title}
                      </h3>
                      <p className="text-sm font-semibold text-sky-600 dark:text-sky-400 mt-1 mb-3">
                        {project.subtitle}
                      </p>

                      {/* Description */}
                      <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300 leading-relaxed font-normal mb-6">
                        {project.description}
                      </p>

                      {/* Tech Chips */}
                      <div className="flex flex-wrap gap-2 mb-8">
                        {project.tech.map((tag) => (
                          <span key={tag} className="tech-tag text-xs font-semibold">
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Action Buttons */}
                    <div className="flex flex-wrap items-center gap-3 pt-5 border-t border-slate-100 dark:border-slate-800">
                      <button
                        type="button"
                        onClick={() => setActiveProjectModal(project)}
                        className="inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl btn-theme-primary text-xs font-bold transition shadow-xs hover:shadow-md cursor-pointer"
                      >
                        <span>View Case Study</span>
                        <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                        </svg>
                      </button>

                      {project.demo && (
                        <a
                          href={project.demo}
                          target="_blank"
                          rel="noreferrer"
                          className="inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-slate-100 dark:bg-slate-700 hover:bg-slate-200 dark:hover:bg-slate-600 text-slate-900 dark:text-white text-xs font-bold transition"
                        >
                          <svg className="w-3.5 h-3.5 text-sky-500" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
                            <path strokeLinecap="round" strokeLinejoin="round" d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                          </svg>
                          <span>View Demo</span>
                        </a>
                      )}

                      {project.code && (
                        <a
                          href={project.code}
                          target="_blank"
                          rel="noreferrer"
                          className="inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-white dark:bg-slate-800 hover:bg-slate-50 dark:hover:bg-slate-700 text-slate-900 dark:text-white border border-slate-200 dark:border-slate-700 text-xs font-bold transition shadow-2xs"
                        >
                          <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                          </svg>
                          <span>Source Code</span>
                        </a>
                      )}
                    </div>
                  </div>

                  {/* Visual Mockup Column */}
                  <div
                    className={`lg:col-span-6 ${
                      isReversed ? "lg:order-1" : "lg:order-2"
                    }`}
                  >
                    <div className="relative group cursor-pointer" onClick={() => setActiveProjectModal(project)}>
                      {project.mockup}
                      <div className="absolute inset-0 rounded-2xl bg-sky-500/0 group-hover:bg-sky-500/5 transition-colors pointer-events-none" />
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Stack Game Bonus Showcase */}
        <div className="mt-12 p-6 rounded-2xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-sky-50 dark:bg-sky-950/60 border border-sky-200 dark:border-sky-800 flex items-center justify-center text-sky-600 dark:text-sky-400 font-bold">
              3D
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h4 className="text-base font-bold text-slate-900 dark:text-white">
                  3D Isometric Stack Mobile Game
                </h4>
                <span className="text-[10px] px-2 py-0.5 rounded-full bg-slate-100 dark:bg-slate-700 text-slate-600 dark:text-slate-300 font-semibold">
                  Flutter Canvas & Physics
                </span>
              </div>
              <p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">
                Smooth arcade mechanics built with Flutter CustomPainter, 3D projection, and particle physics engines.
              </p>
            </div>
          </div>

          <a
            href="https://drive.google.com/file/d/1E8C0MZWOEh87k_q2hu7Ebufelaav7LPu/view?usp=drivesdk"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-slate-100 dark:bg-slate-700 hover:bg-slate-200 dark:hover:bg-slate-600 text-slate-900 dark:text-white text-xs font-bold transition shrink-0"
          >
            <span>Play Demo Video</span>
            <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
            </svg>
          </a>
        </div>
      </div>

      {/* Case Study Modal */}
      <ProjectModal
        isOpen={Boolean(activeProjectModal)}
        onClose={() => setActiveProjectModal(null)}
        project={activeProjectModal}
      />
    </section>
  );
}

export default Projects;