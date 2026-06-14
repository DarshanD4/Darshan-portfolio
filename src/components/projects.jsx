import { motion } from "framer-motion";

function Projects() {
  const projects = [
    {
      title: "NetGap",
      description: "An AI-powered social community featuring smart user classification, responsive feeds, instant messaging, and a collaborative recommendation engine.",
      tech: ["React Native", "Supabase", "REST APIs"],
      demo: "https://drive.google.com/file/d/1mXtIi4Ulm4UhhC_sgtDDhB80cA-kqhhq/view?usp=sharing",
      code: null,
      bg: "#f4b3a1",
    },
    {
      title: "LipSync Deepfake Detector",
      description: "A deep learning CNN model designed to identify facial and temporal voice synchronization anomalies, reaching a verified 85% detection accuracy.",
      tech: ["Python", "TensorFlow", "Computer Vision"],
      demo: "https://drive.google.com/file/d/130EktnODFbe3FtVFtZDG-q6JewUyPtiB/view?usp=sharing",
      code: "https://github.com/dharun18vk/cross_model_forgery",
      bg: "#bfddf0",
    },
    {
      title: "3D Isometric Stack Game",
      description: "An adaptive, mobile arcade game built with Flutter featuring real-time 3D custom painters, responsive particle physics engines, and mood-matching dynamic design palettes.",
      tech: ["Flutter", "Dart", "Custom Paint"],
      demo: "https://drive.google.com/file/d/1E8C0MZWOEh87k_q2hu7Ebufelaav7LPu/view?usp=drivesdk",
      code: null, // Change this string to your GitHub repo link if you push your code!
      bg: "#87c5b7", // Inherits the original teal color of your game background
    },
    {
      title: "Personal Finance Tracker",
      description: "A high-fidelity cross-platform finance manager designed with Flutter and Firebase, featuring 8+ custom screens, interactive charting, and real-time ledger tracking.",
      tech: ["Flutter", "Firebase", "Figma"],
      demo: "https://drive.google.com/file/d/1MO1gBZDc_1FvPEaRIuyEHIpJuwypH2PB/view?usp=sharing",
      code: "https://github.com/DarshanD4/PersonalFinanceTracker",
      bg: "#8cc0eb",
    },
  ];

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { type: "spring", stiffness: 100, damping: 15 } 
    },
  };

  return (
    <section id="projects" className="sketch-section py-24 px-6 bg-[#eef1f5] overflow-hidden">
      <div className="max-w-6xl mx-auto text-center">
        <motion.div 
          className="mb-14"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <p className="text-xs sm:text-sm uppercase tracking-[0.35em] text-[#8cc0eb] font-bold">Projects</p>
          <h2 className="handwritten scribble-title mt-4 text-4xl font-bold text-[#0f172a]">Selected work</h2>
          <p className="mt-4 mx-auto max-w-2xl text-[#475569] text-base sm:text-lg">
            A sample of product and AI projects that highlight my experience in mobile design, app architecture, and model-driven features.
          </p>
        </motion.div>

        <motion.div 
          className="grid gap-8 md:grid-cols-2 lg:grid-cols-3"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {projects.map((project) => (
            <motion.div
              key={project.title}
              variants={cardVariants}
              style={{ backgroundColor: project.bg, borderColor: project.bg === '#8cc0eb' ? '#6faee3' : '#8cc0eb' }}
              className="layered-card overflow-hidden rounded-[2.5rem] p-8 flex flex-col justify-between items-stretch text-center cursor-pointer transition-shadow hover:shadow-[0_20px_35px_rgba(15,23,42,0.06)]"
              whileHover={{ y: -6 }}
            >
              <div className="relative">
                <div className="absolute -top-6 right-6 h-20 w-20 rounded-full bg-white/40 blur-2xl" />
                <h3 className="handwritten text-2xl sm:text-3xl font-extrabold text-[#0f172a]">{project.title}</h3>
                <p className="mt-4 mx-auto max-w-[280px] text-sm sm:text-base leading-relaxed text-[#475569] min-h-[80px]">
                  {project.description}
                </p>
                
                <div className="mt-6 flex flex-wrap justify-center gap-2">
                  {project.tech.map((item) => (
                    <span key={item} className="project-chip font-bold text-[10px] uppercase tracking-wider shadow-sm border border-[#0f172a]/5">
                      {item}
                    </span>
                  ))}
                </div>
              </div>

              <div className="mt-10 flex items-center justify-center gap-3 w-full">
                <motion.a 
                  href={project.demo} 
                  target="_blank"
                  rel="noreferrer"
                  className="flex-1 flex items-center justify-center gap-2 rounded-full bg-[#0f172a] text-white px-5 py-2.5 text-xs font-bold shadow-sm transition hover:bg-[#0f172a]/90"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z"></path>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                  </svg>
                  Demo
                </motion.a>
                {project.code ? (
                  <motion.a 
                    href={project.code} 
                    target="_blank"
                    rel="noreferrer"
                    className="flex-1 flex items-center justify-center gap-2 rounded-full bg-white text-[#0f172a] border-2 border-[#0f172a] px-5 py-2 text-xs font-bold shadow-sm transition hover:bg-[#eef1f5]"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"></path>
                    </svg>
                    Code
                  </motion.a>
                ) : null}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

export default Projects;