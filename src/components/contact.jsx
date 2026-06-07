import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

function Contact() {
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText("darshanmp4056@gmail.com");
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const socials = [
    {
      name: "LinkedIn",
      username: "m-p-darshan",
      url: "https://linkedin.com/in/m-p-darshan",
      bg: "#bfddf0",
      accent: "#8cc0eb",
      isCopy: false,
      icon: (
        <svg className="w-10 h-10 text-[#0f172a]" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
        </svg>
      ),
    },
    {
      name: "WhatsApp",
      username: "+91 86100 68665",
      url: "https://wa.me/918610068665",
      bg: "#fff9d2",
      accent: "#f4b3a1",
      isCopy: false,
      icon: (
        <svg className="w-10 h-10 text-[#0f172a]" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.94.725l.548 2.2a1 1 0 01-.321.988l-1.305.98a10.582 10.582 0 004.872 4.872l.98-1.305a1 1 0 01.988-.321l2.2.548a1 1 0 01.725.94V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path>
        </svg>
      ),
    },
    {
      name: "GitHub",
      username: "DarshanD4",
      url: "https://github.com/DarshanD4",
      bg: "#f4b3a1",
      accent: "#8cc0eb",
      isCopy: false,
      icon: (
        <svg className="w-10 h-10 text-[#0f172a]" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"></path>
        </svg>
      ),
    },
    {
      name: "Gmail ID",
      username: "darshanmp4056@gmail.com",
      url: null,
      bg: "#8cc0eb",
      accent: "#bfddf0",
      isCopy: true,
      icon: (
        <svg className="w-10 h-10 text-[#0f172a]" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
        </svg>
      ),
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
    hidden: { opacity: 0, y: 30, scale: 0.95 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { type: "spring", stiffness: 100, damping: 15 },
    },
  };

  return (
    <section id="contact" className="sketch-section py-24 px-6 bg-[#ffebcc] overflow-hidden">
      <div className="max-w-6xl mx-auto text-center">
        <motion.div
          className="mb-14"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <p className="text-xs sm:text-sm uppercase tracking-[0.35em] text-[#8cc0eb] font-bold">Get in touch</p>
          <h2 className="handwritten scribble-title mt-4 text-4xl font-bold text-[#0f172a]">Let’s build something together</h2>
          <p className="mt-4 mx-auto max-w-2xl text-[#475569] text-base sm:text-lg leading-relaxed">
            Reach out via any of these channels to discuss freelance projects, internships, product partnerships, or technical collaborations.
          </p>
        </motion.div>

        {/* Social Cards Grid */}
        <motion.div
          className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4 max-w-5xl mx-auto"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {socials.map((card) => {
            if (card.isCopy) {
              return (
                <motion.div
                  key={card.name}
                  variants={cardVariants}
                  onClick={handleCopyEmail}
                  style={{ backgroundColor: card.bg }}
                  className="layered-card rounded-[2.5rem] p-8 flex flex-col justify-between items-center text-center cursor-pointer transition-shadow hover:shadow-[0_20px_35px_rgba(15,23,42,0.06)] relative h-[250px] select-none"
                  whileHover={{ y: -6, rotate: -0.5 }}
                  whileTap={{ scale: 0.97 }}
                >
                  <div className="flex flex-col items-center gap-4 mt-2">
                    <div className="flex items-center justify-center w-16 h-16 rounded-2xl bg-white/40 shadow-sm border border-[#0f172a]/5">
                      {card.icon}
                    </div>
                    <div>
                      <h3 className="handwritten text-2xl font-extrabold text-[#0f172a]">{card.name}</h3>
                      <p className="text-xs uppercase tracking-wider text-[#475569]/80 font-bold mt-1 font-sans">Click to Copy ID</p>
                    </div>
                  </div>

                  <div className="w-full mt-4">
                    <p className="text-sm font-bold text-[#0f172a] truncate font-sans px-2 bg-white/30 rounded-xl py-2.5 border border-[#0f172a]/5">
                      {card.username}
                    </p>
                  </div>

                  {/* Copy Alert Popup */}
                  <AnimatePresence>
                    {copied && (
                      <motion.span
                        initial={{ opacity: 0, y: 10, scale: 0.8 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: -10, scale: 0.8 }}
                        className="absolute -top-12 bg-[#0f172a] text-white px-4 py-2 rounded-full text-xs font-bold shadow-md tracking-wider"
                      >
                        Copied to Clipboard!
                      </motion.span>
                    )}
                  </AnimatePresence>
                </motion.div>
              );
            }

            return (
              <motion.a
                key={card.name}
                href={card.url}
                target="_blank"
                rel="noreferrer"
                variants={cardVariants}
                style={{ backgroundColor: card.bg }}
                className="layered-card rounded-[2.5rem] p-8 flex flex-col justify-between items-center text-center cursor-pointer transition-shadow hover:shadow-[0_20px_35px_rgba(15,23,42,0.06)] h-[250px] select-none"
                whileHover={{ y: -6, rotate: 0.5 }}
                whileTap={{ scale: 0.97 }}
              >
                <div className="flex flex-col items-center gap-4 mt-2">
                  <div className="flex items-center justify-center w-16 h-16 rounded-2xl bg-white/40 shadow-sm border border-[#0f172a]/5">
                    {card.icon}
                  </div>
                  <div>
                    <h3 className="handwritten text-2xl font-extrabold text-[#0f172a]">{card.name}</h3>
                    <p className="text-xs uppercase tracking-wider text-[#475569]/80 font-bold mt-1 font-sans">Open Link</p>
                  </div>
                </div>

                <div className="w-full mt-4">
                  <p className="text-sm font-bold text-[#0f172a] truncate font-sans px-2 bg-white/30 rounded-xl py-2.5 border border-[#0f172a]/5">
                    {card.username}
                  </p>
                </div>
              </motion.a>
            );
          })}
        </motion.div>


      </div>
    </section>
  );
}

export default Contact;
