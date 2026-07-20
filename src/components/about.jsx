import { motion } from "framer-motion";

function About() {
  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
  };

  return (
    <section id="about" className="sketch-section py-24 px-6 bg-[#ffebcc]">
      <div className="max-w-6xl mx-auto grid gap-12 lg:grid-cols-[1.1fr,0.9fr] items-start">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={{
            hidden: { opacity: 0, x: -30 },
            visible: {
              opacity: 1,
              x: 0,
              transition: {
                staggerChildren: 0.15,
                duration: 0.6,
              },
            },
          }}
        >
          <motion.p 
            className="text-xs sm:text-sm uppercase tracking-[0.35em] text-[#8cc0eb] font-bold"
            variants={{ hidden: { opacity: 0, y: 10 }, visible: { opacity: 1, y: 0 } }}
          >
            Who I am
          </motion.p>
          <motion.h2 
            className="handwritten scribble-title mt-4 text-4xl font-bold text-[#0f172a]"
            variants={{ hidden: { opacity: 0, y: 10 }, visible: { opacity: 1, y: 0 } }}
          >
            About Me
          </motion.h2>
          
          <div className="space-y-6 mt-6">
            <motion.p 
              className="handwritten text-lg sm:text-xl leading-relaxed text-[#475569]"
              variants={{ hidden: { opacity: 0, y: 15 }, visible: { opacity: 1, y: 0, transition: { duration: 0.5 } } }}
            >
              I am an App Developer Intern at <a href="https://bytecraftstudios.in/" target="_blank" rel="noreferrer" className="font-extrabold text-[#0f172a] underline decoration-[#8cc0eb] hover:text-[#8cc0eb] transition">Bytecraft Studios</a> and a mobile developer specializing in building scalable, intelligence-driven mobile applications. Using tools like Flutter, React Native, and Firebase, I translate intricate product ideas into beautiful, production-ready mobile experiences.
            </motion.p>
            <motion.p 
              className="text-base sm:text-lg leading-relaxed text-[#475569]"
              variants={{ hidden: { opacity: 0, y: 15 }, visible: { opacity: 1, y: 0, transition: { duration: 0.5 } } }}
            >
              I focus on designing intuitive, responsive mobile UI layouts and integrating smart AI features. My goal is to build high-performance mobile MVPs that help engineering teams collaborate and launch high-impact mobile products.
            </motion.p>
            <motion.p 
              className="text-base sm:text-lg leading-relaxed text-[#475569]"
              variants={{ hidden: { opacity: 0, y: 15 }, visible: { opacity: 1, y: 0, transition: { duration: 0.5 } } }}
            >
              Check out my work on <a href="https://github.com/DarshanD4" target="_blank" rel="noreferrer" className="font-bold text-[#0f172a] underline decoration-[#8cc0eb] decoration-2 transition hover:text-[#8cc0eb]">GitHub</a> for app source code and project demos.
            </motion.p>
          </div>

          <div className="mt-10 grid gap-4 sm:grid-cols-2">
            <motion.div 
              className="layered-card bg-[#bfddf0] p-6 flex flex-col gap-3"
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              whileHover={{ y: -3 }}
            >
              <div className="flex items-center gap-3">
                <svg className="w-6 h-6 text-[#0f172a] shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"></path>
                </svg>
                <p className="text-xs uppercase tracking-[0.25em] text-[#475569] font-bold">Experience</p>
              </div>
              <p className="text-base font-bold text-[#0f172a] leading-snug">Bytecraft Studios Intern, React Native, Flutter, Firebase</p>
            </motion.div>

            <motion.div 
              className="layered-card bg-[#8cc0eb]/10 p-6 flex flex-col gap-3"
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              whileHover={{ y: -3 }}
            >
              <div className="flex items-center gap-3">
                <svg className="w-6 h-6 text-[#0f172a] shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M13 10V3L4 14h7v7l9-11h-7z"></path>
                </svg>
                <p className="text-xs uppercase tracking-[0.25em] text-[#475569] font-bold">Quality</p>
              </div>
              <p className="text-base font-bold text-[#0f172a] leading-snug">Fast MVPs with polished UX and clean code.</p>
            </motion.div>
          </div>
        </motion.div>

        <motion.div
          className="w-full"
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <motion.div 
            className="layered-card bg-[#fff9d2] p-8 flex flex-col gap-6"
            whileHover={{ rotate: -0.5 }}
          >
            <div>
              <p className="text-xs uppercase tracking-[0.35em] text-[#8cc0eb] font-bold">Current Snapshot</p>
              <p className="mt-4 text-base sm:text-lg leading-relaxed text-[#475569]">
                Currently interning at <a href="https://bytecraftstudios.in/" target="_blank" rel="noreferrer" className="font-extrabold text-[#0f172a] underline decoration-[#8cc0eb] hover:text-[#8cc0eb] transition">Bytecraft Studios</a>, applying AI-first thinking and rapid mobile iteration to build modern mobile apps.
              </p>
            </div>
            
            <div className="grid gap-3 sm:grid-cols-2">
              <span className="flex items-center justify-center gap-2 rounded-full bg-[#ffebcc] px-4 py-2.5 text-sm font-bold text-[#0f172a] shadow-xs">
                <svg className="w-4 h-4 text-[#0f172a]" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z"></path>
                </svg>
                Mobile-first
              </span>
              <span className="flex items-center justify-center gap-2 rounded-full bg-[#bfddf0] px-4 py-2.5 text-sm font-bold text-[#0f172a] shadow-xs">
                <svg className="w-4 h-4 text-[#0f172a]" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"></path>
                </svg>
                AI-ready
              </span>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

export default About;
