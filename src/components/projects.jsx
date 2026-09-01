import { motion } from "framer-motion";

function Projects() {
  const projects = [
    {
      title: "NetGap",
      category: "Social Platform & AI Engine",
      description: "An AI-enabled mobile community platform engineered in React Native, featuring smart user taxonomy, real-time dynamic feeds, instant messaging, and a collaborative content recommendation engine.",
      tech: ["React Native", "Supabase", "REST APIs", "Node.js"],
      demo: "https://drive.google.com/file/d/1mXtIi4Ulm4UhhC_sgtDDhB80cA-kqhhq/view?usp=sharing",
      code: null,
      highlight: "Startup Project",
    },
    {
      title: "LipSync Deepfake Detector",
      category: "Computer Vision & Deep Learning",
      description: "A deep learning CNN architecture designed to detect subtle audio-visual temporal anomalies and lip-sync forgery in synthetic media, verified at 85% detection accuracy.",
      tech: ["Python", "TensorFlow", "OpenCV", "CNN"],
      demo: "https://drive.google.com/file/d/130EktnODFbe3FtVFtZDG-q6JewUyPtiB/view?usp=sharing",
      code: "https://github.com/dharun18vk/cross_model_forgery",
      highlight: "Research Model",
    },
    {
      title: "Personal Finance Tracker",
      category: "Mobile Application",
      description: "A full-scale personal finance and budget manager built in Flutter and Firebase, featuring 8+ custom interactive screens, financial analytics charting, and local SQLite offline sync.",
      tech: ["Flutter", "Firebase", "SQLite", "Figma"],
      demo: "https://drive.google.com/file/d/1MO1gBZDc_1FvPEaRIuyEHIpJuwypH2PB/view?usp=sharing",
      code: "https://github.com/DarshanD4/PersonalFinanceTracker",
      highlight: "Production App",
    },
    {
      title: "3D Isometric Stack Game",
      category: "Interactive Game Engine",
      description: "A smooth mobile arcade game built with Flutter featuring 3D custom painters, particle physics simulation engines, dynamic color palette generators, and real-time score tracking.",
      tech: ["Flutter", "Dart", "Custom Paint", "Physics"],
      demo: "https://drive.google.com/file/d/1E8C0MZWOEh87k_q2hu7Ebufelaav7LPu/view?usp=drivesdk",
      code: null,
      highlight: "Game Canvas",
    },
  ];

  return (
    <section id="projects" className="py-24 px-4 sm:px-8 bg-slate-50/70 border-t border-slate-200/70">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-xs font-bold uppercase tracking-widest text-sky-600">
            Featured Portfolio
          </span>
          <h2 className="mt-3 text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-900">
            Selected Projects
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-600 leading-relaxed font-normal">
            A showcase of production-ready mobile applications, machine learning architectures, and interactive software.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid gap-6 md:grid-cols-2">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="pro-card p-7 sm:p-8 bg-white flex flex-col justify-between"
            >
              <div>
                {/* Category & Highlight Pill */}
                <div className="flex items-center justify-between gap-2 mb-4">
                  <span className="text-xs font-bold uppercase tracking-wider text-sky-600">
                    {project.category}
                  </span>
                  <span className="px-2.5 py-0.5 rounded-full bg-slate-100 border border-slate-200 text-[11px] font-semibold text-slate-600">
                    {project.highlight}
                  </span>
                </div>

                <h3 className="text-2xl font-bold text-slate-900 mb-3 tracking-tight">
                  {project.title}
                </h3>

                <p className="text-sm sm:text-base text-slate-600 leading-relaxed mb-6 font-normal">
                  {project.description}
                </p>

                {/* Tech Chips */}
                <div className="flex flex-wrap gap-1.5 mb-8">
                  {project.tech.map((tag) => (
                    <span key={tag} className="tech-tag">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex items-center gap-3 pt-4 border-t border-slate-100">
                {project.demo && (
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noreferrer"
                    className="flex-1 inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-slate-900 hover:bg-slate-800 text-white text-xs font-bold transition shadow-xs"
                  >
                    <svg className="w-4 h-4 text-sky-400" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
                      <path strokeLinecap="round" strokeLinejoin="round" d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span>View Demo</span>
                  </a>
                )}

                {project.code ? (
                  <a
                    href={project.code}
                    target="_blank"
                    rel="noreferrer"
                    className="flex-1 inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-white hover:bg-slate-50 text-slate-900 border border-slate-200 text-xs font-bold transition shadow-2xs"
                  >
                    <svg className="w-4 h-4 text-slate-700" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                    </svg>
                    <span>Source Code</span>
                  </a>
                ) : (
                  <span className="flex-1 text-center text-xs font-semibold text-slate-400 py-2.5">
                    Proprietary Startup Code
                  </span>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;