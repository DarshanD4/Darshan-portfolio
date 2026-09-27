import { motion } from "framer-motion";
import heroImage from "../assets/mine1.png";
import ProfileCard from "./ProfileCard";
import { useTheme } from "../context/ThemeContext";

function Hero() {
  const { activeInfo } = useTheme();

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
      className="relative min-h-[92vh] flex items-center justify-center pt-28 pb-16 px-4 sm:px-8 overflow-hidden"
    >
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
            <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-900 dark:bg-slate-800 text-white text-xs font-semibold shadow-xs border border-slate-800 dark:border-slate-700">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              <span>Available for Full-Time Roles & Opportunities</span>
            </span>

            <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-sky-50 dark:bg-sky-950/70 border border-sky-200/80 dark:border-sky-800 text-xs font-semibold text-sky-700 dark:text-sky-300">
              <span className="w-1.5 h-1.5 rounded-full bg-sky-500" />
              Completed Internships · ByteCraft & Code Infinite
            </span>
          </motion.div>

          {/* Role Subheading */}
          <motion.div variants={itemVariants} className="mb-3">
            <span className="text-xs sm:text-sm font-extrabold uppercase tracking-widest text-sky-600 dark:text-sky-400">
              Flutter Developer · AI/ML · Full-Stack
            </span>
          </motion.div>

          {/* Main Headline */}
          <motion.h1 
            variants={itemVariants}
            className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-slate-900 dark:text-white leading-[1.12]"
          >
            I build <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-600 via-indigo-500 to-sky-400 dark:from-sky-400 dark:to-indigo-300">mobile experiences</span> & intelligent products.
          </motion.h1>

          {/* Distinctive Lead Statement */}
          <motion.p 
            variants={itemVariants}
            className="mt-6 text-base sm:text-lg text-slate-600 dark:text-slate-300 max-w-2xl leading-relaxed font-normal"
          >
            I turn ideas into polished mobile products, from interface to API to deployment. Specialized in production Flutter engineering, cross-platform architecture, and integrating applied AI models into fluid, responsive apps.
          </motion.p>

          {/* Primary Call to Actions */}
          <motion.div 
            variants={itemVariants}
            className="mt-8 flex flex-wrap items-center justify-center lg:justify-start gap-3.5 w-full sm:w-auto"
          >
            <a
              href="#projects"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl btn-theme-primary text-sm font-bold shadow-sm hover:shadow-md transition"
            >
              <span>Explore my work</span>
              <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
              </svg>
            </a>

            <a
              href="/Darshan_MP_Resume.pdf"
              target="_blank"
              rel="noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-white dark:bg-slate-800 hover:bg-slate-50 dark:hover:bg-slate-700 text-slate-900 dark:text-white border border-slate-200 dark:border-slate-700 text-sm font-bold shadow-xs hover:shadow-sm transition"
            >
              <svg className="w-4 h-4 text-sky-600 dark:text-sky-400" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
              </svg>
              <span>Download Resume</span>
            </a>

            <a
              href="#credentials"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-3.5 rounded-xl bg-slate-100 dark:bg-slate-800/80 hover:bg-slate-200 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-200 text-sm font-bold transition"
            >
              <svg className="w-4 h-4 text-emerald-500" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <span>View Verified Letters</span>
            </a>
          </motion.div>

          {/* Core Tech Stack Pills */}
          <motion.div 
            variants={itemVariants}
            className="mt-10 pt-6 border-t border-slate-200/70 dark:border-slate-800 flex items-center gap-2 flex-wrap justify-center lg:justify-start"
          >
            <span className="text-xs font-bold uppercase tracking-wider text-slate-400 mr-2">Core Tech:</span>
            {["Flutter", "Dart", "React Native", "Python", "REST APIs", "Firebase", "PyTorch / CNN"].map((tech) => (
              <span key={tech} className="tech-tag">
                {tech}
              </span>
            ))}
          </motion.div>
        </div>

        {/* Right Interactive Profile Column with mine1 photo */}
        <motion.div 
          variants={itemVariants}
          className="lg:col-span-5 flex justify-center lg:justify-end"
        >
          <div className="relative w-full max-w-[310px]">
            <ProfileCard
              avatarUrl={heroImage}
              name="Darshan M P"
              title="Flutter & AI Developer"
              handle="DarshanD4"
              status="Completed Internships · 2026"
              contactText="Connect"
              onContactClick={() => {
                const el = document.getElementById("contact");
                if (el) el.scrollIntoView({ behavior: "smooth" });
              }}
              behindGlowEnabled={true}
              behindGlowColor={activeInfo.colorHex}
              enableTilt={true}
            />
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}

export default Hero;