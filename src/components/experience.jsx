import { motion } from "framer-motion";

function Experience() {
  const timeline = [
    {
      role: "App Developer Intern",
      company: "Finance App",
      period: "2024",
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
          <p className="text-xs sm:text-sm uppercase tracking-[0.35em] text-[#8cc0eb] font-bold">Experience</p>
          <h2 className="handwritten scribble-title mt-4 text-4xl font-bold text-[#0f172a]">My journey</h2>
          <p className="mt-4 mx-auto max-w-2xl text-[#475569] text-base sm:text-lg">
            A mix of internship work and AI-focused projects demonstrating mobile development, model design, and product execution.
          </p>
        </motion.div>

        {/* Dotted Timeline Path */}
        <div className="relative border-l-4 border-dashed border-[#8cc0eb]/40 ml-4 sm:ml-8 pl-8 sm:pl-12 space-y-12 text-left">
          {timeline.map((item, index) => (
            <motion.div
              key={item.role}
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="relative"
            >
              {/* Timeline dot marker */}
              <span className="absolute -left-[42px] sm:-left-[58px] top-6 flex h-6 w-6 items-center justify-center rounded-full border-4 border-[#8cc0eb] bg-[#fff9d2] shadow-sm ring-8 ring-[#fff9d2]" />

              <div
                className="layered-card rounded-[2rem] p-8 transition-shadow hover:shadow-[0_16px_30px_rgba(15,23,42,0.05)] cursor-pointer"
                style={{ backgroundColor: index % 2 === 0 ? '#ffffff' : '#bfddf0' }}
              >
                <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between border-b border-[#8cc0eb]/10 pb-4">
                  <div>
                    <h3 className="handwritten text-2xl font-bold text-[#0f172a]">{item.role}</h3>
                    <p className="text-[#8cc0eb] font-bold text-sm sm:text-base">{item.company}</p>
                  </div>
                  <span className="inline-block px-4 py-1.5 rounded-full bg-[#0f172a]/5 text-[11px] font-bold tracking-widest text-[#475569] uppercase self-start sm:self-center">
                    {item.period}
                  </span>
                </div>

                <ul className="mt-6 space-y-3.5 text-[#475569] text-sm sm:text-base">
                  {item.details.map((detail, idx) => (
                    <li key={idx} className="flex items-start gap-3 leading-relaxed">
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
