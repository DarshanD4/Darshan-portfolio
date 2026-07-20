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
      details: [
        "Developing high-performance cross-platform mobile application features using Flutter and React Native.",
        "Collaborating with UI/UX designers and core engineering team to deliver modular, high-impact mobile app features.",
        "Optimizing state management, API integrations, and mobile application performance for fast load times and fluid UI.",
      ],
    },
    {
      role: "App Developer Intern",
      company: "Finance App",
      period: "2024",
      isCurrent: false,
      details: [
        "Built a cross-platform personal finance tracker with 8+ core screens using Flutter.",
        "Designed UI/UX in Figma and delivered an MVP in 2 days.",
        "Debugged and optimized the app to reduce performance lag during testing.",
      ],
    },
    {
      role: "AI Model Developer",
      company: "LipSync Deepfake Detection",
      period: "2026",
      isCurrent: false,
      details: [
        "Designed a CNN-based lip-sync manipulation detection model.",
        "Achieved 85% accuracy using spatial and temporal modeling techniques.",
        "Added multi-factor metadata validation for stronger verification.",
      ],
    },
  ];

  return (
    <section id="experience" className="sketch-section py-24 px-6 bg-[#fff9d2] overflow-hidden">
      <div className="max-w-4xl mx-auto">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <p className="text-xs sm:text-sm uppercase tracking-[0.35em] text-[#8cc0eb] font-bold">Experience & Roles</p>
          <h2 className="handwritten scribble-title mt-4 text-4xl sm:text-5xl font-bold text-[#0f172a]">My Journey</h2>
          <p className="mt-4 mx-auto max-w-2xl text-[#475569] text-base sm:text-lg">
            A track record of mobile app development internships and AI product execution.
          </p>
        </motion.div>

        {/* Dotted Timeline Path */}
        <div className="relative border-l-4 border-dashed border-[#8cc0eb]/50 ml-4 sm:ml-8 pl-8 sm:pl-12 space-y-12 text-left">
          {timeline.map((item, index) => (
            <motion.div
              key={`${item.company}-${item.role}`}
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.6, delay: index * 0.12 }}
              className="relative"
            >
              {/* Timeline dot marker */}
              <span className={`absolute -left-[42px] sm:-left-[58px] top-6 flex h-6 w-6 items-center justify-center rounded-full border-4 ${item.isCurrent ? 'border-[#0f172a] bg-[#8cc0eb] animate-pulse' : 'border-[#8cc0eb] bg-[#fff9d2]'} shadow-sm ring-8 ring-[#fff9d2]`} />

              <div
                className="layered-card rounded-[2rem] p-6 sm:p-8 transition-all hover:shadow-[0_20px_35px_rgba(15,23,42,0.08)] cursor-pointer"
                style={{ backgroundColor: index % 2 === 0 ? '#ffffff' : '#bfddf0' }}
              >
                <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between border-b border-[#0f172a]/10 pb-4">
                  <div className="flex items-start gap-4">
                    {item.logo && (
                      <a 
                        href={item.companyUrl} 
                        target="_blank" 
                        rel="noreferrer" 
                        className="shrink-0 transition transform hover:scale-105"
                      >
                        <img 
                          src={item.logo} 
                          alt={`${item.company} logo`} 
                          className="h-12 w-auto max-w-[120px] object-contain rounded-lg border border-[#0f172a]/10 bg-black p-1.5 shadow-xs" 
                        />
                      </a>
                    )}
                    <div>
                      <div className="flex items-center gap-3 flex-wrap">
                        <h3 className="handwritten text-2xl sm:text-3xl font-extrabold text-[#0f172a]">{item.role}</h3>
                        {item.isCurrent && (
                          <span className="px-3 py-1 rounded-full bg-[#8cc0eb] text-[#0f172a] text-[10px] font-black uppercase tracking-wider shadow-xs flex items-center gap-1.5">
                            <span className="w-2 h-2 rounded-full bg-[#0f172a] animate-ping" />
                            Current Role
                          </span>
                        )}
                      </div>
                      {item.companyUrl ? (
                        <a
                          href={item.companyUrl}
                          target="_blank"
                          rel="noreferrer"
                          className="inline-flex items-center gap-1 text-[#8cc0eb] hover:text-[#0f172a] font-extrabold text-base sm:text-lg mt-0.5 transition underline decoration-[#8cc0eb]/50"
                        >
                          <span>{item.company}</span>
                          <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                          </svg>
                        </a>
                      ) : (
                        <p className="text-[#8cc0eb] font-extrabold text-base sm:text-lg mt-0.5">{item.company}</p>
                      )}
                    </div>
                  </div>
                  <span className="inline-block px-4 py-1.5 rounded-full bg-[#0f172a]/10 text-[11px] font-extrabold tracking-widest text-[#0f172a] uppercase self-start sm:self-center shadow-xs">
                    {item.period}
                  </span>
                </div>

                <ul className="mt-6 space-y-3 text-[#475569] text-sm sm:text-base">
                  {item.details.map((detail, idx) => (
                    <li key={idx} className="flex items-start gap-3 leading-relaxed font-medium">
                      <svg className="w-5 h-5 text-[#8cc0eb] shrink-0 mt-0.5" fill="none" stroke="currentColor" strokeWidth="3" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7"></path>
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
