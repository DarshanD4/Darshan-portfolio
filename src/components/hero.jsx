import { motion } from "framer-motion";
import heroImage from "../assets/1.jpg";
import ProfileCard from "./ProfileCard";

function Hero() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.12,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
  };

  return (
    <section
      id="hero"
      className="relative min-h-[90vh] flex items-center justify-center pt-28 pb-16 px-4 sm:px-8 overflow-hidden"
    >
      {/* Subtle Background Glows */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-sky-400/10 rounded-full blur-3xl pointer-events-none -z-10" />
      <div className="absolute top-1/3 right-10 w-[300px] h-[300px] bg-rose-400/5 rounded-full blur-3xl pointer-events-none -z-10" />

      <motion.div 
        className="max-w-6xl mx-auto w-full grid gap-12 lg:grid-cols-12 items-center"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* Left Content Column */}
        <div className="lg:col-span-7 flex flex-col items-center lg:items-start text-center lg:text-left">
          {/* Status Badge */}
          <motion.div variants={itemVariants} className="mb-6 flex flex-wrap items-center justify-center lg:justify-start gap-2.5">
            <a
              href="https://bytecraftstudios.in/"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-900 text-white text-xs font-semibold shadow-xs hover:bg-slate-800 transition"
            >
              <span className="w-2 h-2 rounded-full bg-sky-400 animate-pulse" />
              <span>App Developer Intern @ Bytecraft Studios</span>
              <svg className="w-3.5 h-3.5 text-slate-400" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
              </svg>
            </a>

            <span className="hidden sm:inline-flex items-center px-3 py-1.5 rounded-full bg-slate-100 border border-slate-200/80 text-xs font-semibold text-slate-600">
              Mobile + AI Systems
            </span>
          </motion.div>

          {/* Main Headline */}
          <motion.h1 
            variants={itemVariants}
            className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-slate-900 leading-[1.12]"
          >
            Building high-performance <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-600 to-indigo-600">mobile applications</span> & AI products.
          </motion.h1>

          {/* Description */}
          <motion.p 
            variants={itemVariants}
            className="mt-6 text-base sm:text-lg text-slate-600 max-w-2xl leading-relaxed font-normal"
          >
            Specialized in engineering robust cross-platform mobile apps with Flutter and React Native, integrated with machine learning models and cloud backends. Dedicated to crafting fluid user interfaces, clean architectures, and scalable digital products.
          </motion.p>

          {/* Call to Actions */}
          <motion.div 
            variants={itemVariants}
            className="mt-8 flex flex-wrap items-center justify-center lg:justify-start gap-3.5 w-full sm:w-auto"
          >
            <a
              href="#projects"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-slate-900 hover:bg-slate-800 text-white text-sm font-bold shadow-sm hover:shadow-md transition"
            >
              <span>Explore Projects</span>
              <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
              </svg>
            </a>

            <a
              href="#contact"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-white hover:bg-slate-50 text-slate-900 border border-slate-200 text-sm font-bold shadow-xs hover:shadow-sm transition"
            >
              <span>Get in Touch</span>
              <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </a>
          </motion.div>

          {/* Tech Stack Pills */}
          <motion.div 
            variants={itemVariants}
            className="mt-10 pt-6 border-t border-slate-200/70 flex items-center gap-2 flex-wrap justify-center lg:justify-start"
          >
            <span className="text-xs font-bold uppercase tracking-wider text-slate-400 mr-2">Core Tech:</span>
            {["Flutter", "React Native", "Dart", "Python", "Firebase", "TensorFlow"].map((tech) => (
              <span key={tech} className="tech-tag">
                {tech}
              </span>
            ))}
          </motion.div>
        </div>

        {/* Right Interactive Profile Column */}
        <motion.div 
          variants={itemVariants}
          className="lg:col-span-5 flex justify-center lg:justify-end"
        >
          <div className="relative w-full max-w-[300px]">
            <ProfileCard
              avatarUrl={heroImage}
              name="Darshan M P"
              title="Mobile & AI Developer"
              handle="DarshanD4"
              status="Intern @ Bytecraft Studios"
              contactText="Connect"
              onContactClick={() => {
                const el = document.getElementById("contact");
                if (el) el.scrollIntoView({ behavior: "smooth" });
              }}
              behindGlowEnabled={true}
              behindGlowColor="rgba(56, 189, 248, 0.3)"
              enableTilt={true}
            />
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}

export default Hero;