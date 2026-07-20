import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

function Skills() {
  const [activeCategory, setActiveCategory] = useState("All");

  const skills = [
    { name: "Dart", type: "Language", category: "Languages" },
    { name: "Flutter", type: "Framework", category: "Mobile" },
    { name: "React Native", type: "Framework", category: "Mobile" },
    { name: "Python", type: "Language", category: "Languages" },
    { name: "C", type: "Language", category: "Languages" },
    { name: "Firebase", type: "Backend", category: "Backend & Tools" },
    { name: "REST APIs", type: "Integration", category: "Backend & Tools" },
    { name: "SQLite", type: "Database", category: "Backend & Tools" },
    { name: "Git", type: "Tool", category: "Backend & Tools" },
    { name: "Figma", type: "Design", category: "Backend & Tools" },
  ];

  const categories = ["All", "Mobile", "Languages", "Backend & Tools"];

  const bgColors = ["#fff9d2", "#bfddf0", "#8cc0eb", "#ffebcc"];

  const filteredSkills = activeCategory === "All"
    ? skills
    : skills.filter((s) => s.category === activeCategory);

  const getIcon = (name) => {
    const defaultStyle = "w-8 h-8 text-[#0f172a] mb-3 transition-transform group-hover:scale-110";
    switch (name) {
      case "Dart":
        return (
          <svg className={defaultStyle} fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364-6.364l-.707.707M6.343 17.657l-.707.707m0-12.728l.707.707m12.728 12.728l-.707.707M12 8a4 4 0 100 8 4 4 0 000-8z"></path>
          </svg>
        );
      case "Flutter":
        return (
          <svg className={defaultStyle} fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z"></path>
          </svg>
        );
      case "React Native":
        return (
          <svg className={defaultStyle} fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"></path>
          </svg>
        );
      case "Python":
        return (
          <svg className={defaultStyle} fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"></path>
          </svg>
        );
      case "C":
        return (
          <svg className={defaultStyle} fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" d="M8 9l3 3-3 3m5 0h3M5 20h14a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"></path>
          </svg>
        );
      case "Firebase":
        return (
          <svg className={defaultStyle} fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 18.657A8 8 0 016.343 7.343S7 9 9 10c0-2 .5-5 2.986-7C14 5 16.09 5.777 17.656 7.343A7.975 7.975 0 0120 13a7.975 7.975 0 01-2.343 5.657z"></path>
          </svg>
        );
      case "REST APIs":
        return (
          <svg className={defaultStyle} fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z"></path>
          </svg>
        );
      case "SQLite":
        return (
          <svg className={defaultStyle} fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4"></path>
          </svg>
        );
      case "Git":
        return (
          <svg className={defaultStyle} fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4"></path>
          </svg>
        );
      case "Figma":
        return (
          <svg className={defaultStyle} fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z"></path>
          </svg>
        );
      default:
        return (
          <svg className={defaultStyle} fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"></path>
          </svg>
        );
    }
  };

  return (
    <section id="skills" className="sketch-section py-24 px-6 bg-[#fff9d2] overflow-hidden">
      <div className="max-w-6xl mx-auto">
        <motion.div 
          className="mb-10 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <p className="text-xs sm:text-sm uppercase tracking-[0.35em] text-[#8cc0eb] font-extrabold">Core Capabilities</p>
          <h2 className="handwritten scribble-title mt-4 text-4xl sm:text-5xl font-bold text-[#0f172a]">Technical Stack</h2>
          <p className="mt-4 mx-auto max-w-2xl text-[#475569] text-base sm:text-lg">
            Specialized across cross-platform mobile frameworks, machine learning models, and production integrations.
          </p>
        </motion.div>

        {/* Category Filters */}
        <div className="flex flex-wrap items-center justify-center gap-3 mb-12">
          {categories.map((cat) => (
            <motion.button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-5 py-2.5 rounded-full text-xs font-black uppercase tracking-wider transition cursor-pointer ${
                activeCategory === cat
                  ? "bg-[#0f172a] text-white shadow-md"
                  : "bg-white/80 text-[#0f172a] border border-[#0f172a]/10 hover:bg-[#bfddf0]"
              }`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {cat}
            </motion.button>
          ))}
        </div>

        <motion.div layout className="grid gap-6 grid-cols-2 sm:grid-cols-3 lg:grid-cols-5">
          <AnimatePresence mode="popLayout">
            {filteredSkills.map((skill, index) => (
              <motion.div
                key={skill.name}
                layout
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                transition={{ duration: 0.3 }}
                style={{ backgroundColor: bgColors[index % bgColors.length] }}
                className="depth-card rounded-[2rem] p-6 flex flex-col items-center justify-center text-center cursor-pointer group select-none transition-shadow hover:shadow-[0_16px_30px_rgba(15,23,42,0.08)]"
                whileHover={{ 
                  scale: 1.06, 
                  rotate: index % 2 === 0 ? 1.5 : -1.5,
                  y: -5 
                }}
                whileTap={{ scale: 0.95 }}
              >
                {getIcon(skill.name)}
                <p className="handwritten text-xl font-extrabold text-[#0f172a] leading-none mb-1">{skill.name}</p>
                <span className="text-[10px] uppercase tracking-widest text-[#475569] font-extrabold font-sans mt-1">{skill.type}</span>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}

export default Skills;
