import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

function Contact() {
  const [copied, setCopied] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState("idle"); // 'idle' | 'success' | 'error'
  const [statusText, setStatusText] = useState("");

  const handleCopyEmail = () => {
    navigator.clipboard.writeText("darshanmp4056@gmail.com");
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formData.name.trim() || !formData.email.trim() || !formData.message.trim()) {
      setSubmitStatus("error");
      setStatusText("Please fill out all required fields.");
      return;
    }

    setIsSubmitting(true);
    setSubmitStatus("idle");
    setStatusText("");

    try {
      // Direct email endpoint via Web3Forms (or custom key)
      const accessKey = import.meta.env.VITE_WEB3FORMS_KEY || "82069e2c-5dfd-4b85-80df-[#publickey]";
      
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          access_key: accessKey,
          name: formData.name,
          email: formData.email,
          subject: formData.subject || `Portfolio Contact from ${formData.name}`,
          message: formData.message,
          from_name: "Darshan MP Portfolio",
        }),
      });

      const result = await response.json();

      if (result.success || response.ok) {
        setSubmitStatus("success");
        setStatusText("Thank you! Your message has been sent directly to my inbox.");
        setFormData({ name: "", email: "", subject: "", message: "" });
      } else {
        // Fallback to mailto link if API key is unconfigured or returns error
        window.location.href = `mailto:darshanmp4056@gmail.com?subject=${encodeURIComponent(
          formData.subject || `Message from ${formData.name}`
        )}&body=${encodeURIComponent(`Name: ${formData.name}\nEmail: ${formData.email}\n\n${formData.message}`)}`;
        
        setSubmitStatus("success");
        setStatusText("Opening your mail app to complete sending...");
      }
    } catch (err) {
      console.error("Form submission error:", err);
      // Direct mailto fallback on network failure
      window.location.href = `mailto:darshanmp4056@gmail.com?subject=${encodeURIComponent(
        formData.subject || `Message from ${formData.name}`
      )}&body=${encodeURIComponent(`Name: ${formData.name}\nEmail: ${formData.email}\n\n${formData.message}`)}`;
      
      setSubmitStatus("success");
      setStatusText("Redirecting to your mail client...");
    } finally {
      setIsSubmitting(false);
    }
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
        <svg className="w-8 h-8 text-[#0f172a]" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
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
        <svg className="w-8 h-8 text-[#0f172a]" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
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
        <svg className="w-8 h-8 text-[#0f172a]" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
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
        <svg className="w-8 h-8 text-[#0f172a]" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
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
          <p className="text-xs sm:text-sm uppercase tracking-[0.35em] text-[#8cc0eb] font-extrabold">Get In Touch</p>
          <h2 className="handwritten scribble-title mt-4 text-4xl sm:text-5xl font-bold text-[#0f172a]">Let’s Build Something Together</h2>
          <p className="mt-4 mx-auto max-w-2xl text-[#475569] text-base sm:text-lg leading-relaxed font-medium">
            Send me a direct email below or connect via social channels to discuss opportunities, freelance projects, or technical collaborations.
          </p>
        </motion.div>

        {/* Direct Email Contact Form + Social Info Grid */}
        <div className="grid gap-12 lg:grid-cols-12 max-w-5xl mx-auto items-start text-left mb-16">
          {/* Direct Email Form Card */}
          <motion.div
            className="lg:col-span-7 layered-card bg-white p-8 sm:p-10 rounded-[2.5rem] shadow-[0_16px_35px_rgba(15,23,42,0.06)]"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex items-center gap-3 mb-6 border-b border-[#0f172a]/10 pb-4">
              <div className="flex items-center justify-center w-12 h-12 rounded-2xl bg-[#bfddf0] text-[#0f172a] shadow-xs">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
                </svg>
              </div>
              <div>
                <h3 className="handwritten text-3xl font-extrabold text-[#0f172a]">Send Direct Email</h3>
                <p className="text-xs uppercase tracking-wider text-[#8cc0eb] font-extrabold">Instant Inbox Delivery</p>
              </div>
            </div>

            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="grid gap-5 sm:grid-cols-2">
                <div>
                  <label htmlFor="name" className="block text-xs uppercase tracking-wider font-extrabold text-[#0f172a] mb-2">
                    Your Name <span className="text-[#f4b3a1]">*</span>
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="John Doe"
                    className="w-full rounded-2xl border-2 border-[#8cc0eb]/40 bg-[#fff9d2]/40 px-4 py-3 text-sm text-[#0f172a] outline-none transition focus:border-[#8cc0eb] focus:bg-white focus:ring-2 focus:ring-[#8cc0eb]/30"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-xs uppercase tracking-wider font-extrabold text-[#0f172a] mb-2">
                    Your Email <span className="text-[#f4b3a1]">*</span>
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="john@example.com"
                    className="w-full rounded-2xl border-2 border-[#8cc0eb]/40 bg-[#fff9d2]/40 px-4 py-3 text-sm text-[#0f172a] outline-none transition focus:border-[#8cc0eb] focus:bg-white focus:ring-2 focus:ring-[#8cc0eb]/30"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="subject" className="block text-xs uppercase tracking-wider font-extrabold text-[#0f172a] mb-2">
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  placeholder="Project Inquiry / Job Opportunity"
                  className="w-full rounded-2xl border-2 border-[#8cc0eb]/40 bg-[#fff9d2]/40 px-4 py-3 text-sm text-[#0f172a] outline-none transition focus:border-[#8cc0eb] focus:bg-white focus:ring-2 focus:ring-[#8cc0eb]/30"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-xs uppercase tracking-wider font-extrabold text-[#0f172a] mb-2">
                  Message <span className="text-[#f4b3a1]">*</span>
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows="4"
                  required
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Hi Darshan, I'd like to talk about..."
                  className="w-full rounded-2xl border-2 border-[#8cc0eb]/40 bg-[#fff9d2]/40 px-4 py-3 text-sm text-[#0f172a] outline-none transition focus:border-[#8cc0eb] focus:bg-white focus:ring-2 focus:ring-[#8cc0eb]/30 resize-none"
                />
              </div>

              {submitStatus !== "idle" && (
                <div
                  className={`p-4 rounded-2xl text-xs sm:text-sm font-bold flex items-center gap-2 ${
                    submitStatus === "success"
                      ? "bg-[#bfddf0] text-[#0f172a] border border-[#8cc0eb]"
                      : "bg-[#f4b3a1]/40 text-[#0f172a] border border-[#f4b3a1]"
                  }`}
                >
                  {submitStatus === "success" ? (
                    <svg className="w-5 h-5 text-[#0f172a] shrink-0" fill="none" stroke="currentColor" strokeWidth="3" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                  ) : (
                    <svg className="w-5 h-5 text-[#0f172a] shrink-0" fill="none" stroke="currentColor" strokeWidth="3" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                    </svg>
                  )}
                  <span>{statusText}</span>
                </div>
              )}

              <motion.button
                type="submit"
                disabled={isSubmitting}
                className="w-full rounded-full bg-[#0f172a] text-white font-extrabold py-4 px-6 text-sm tracking-wider uppercase flex items-center justify-center gap-3 shadow-md hover:bg-[#0f172a]/90 cursor-pointer disabled:opacity-70 transition"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                {isSubmitting ? (
                  <>
                    <svg className="animate-spin h-5 w-5 text-white" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                    </svg>
                    <span>Sending Message...</span>
                  </>
                ) : (
                  <>
                    <span>Send Message</span>
                    <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                  </>
                )}
              </motion.button>
            </form>
          </motion.div>

          {/* Quick Info & Direct Mail Note */}
          <motion.div
            className="lg:col-span-5 flex flex-col gap-6"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="layered-card bg-[#fff9d2] p-8 rounded-[2.5rem]">
              <h3 className="handwritten text-3xl font-bold text-[#0f172a] mb-3">Direct Contact</h3>
              <p className="text-base leading-relaxed text-[#475569] font-medium">
                Prefer sending directly from your personal mail app or WhatsApp? Click any card below or write directly to <span className="font-extrabold text-[#0f172a]">darshanmp4056@gmail.com</span>.
              </p>
              <div className="mt-6 space-y-3 text-sm font-bold text-[#0f172a]">
                <div className="flex items-center gap-3">
                  <span className="w-3 h-3 rounded-full bg-[#8cc0eb] shrink-0" />
                  <span>Based in India</span>
                </div>
                <div className="flex items-center gap-3">
                  <span className="w-3 h-3 rounded-full bg-[#f4b3a1] shrink-0" />
                  <span>Currently @ Bytecrafts Studios India</span>
                </div>
                <div className="flex items-center gap-3">
                  <span className="w-3 h-3 rounded-full bg-[#bfddf0] shrink-0" />
                  <span>Response Time: &lt; 24 Hours</span>
                </div>
              </div>
            </div>

            <div className="layered-card bg-[#bfddf0] p-8 rounded-[2.5rem]">
              <h4 className="handwritten text-2xl font-bold text-[#0f172a] mb-2">Freelance & Collaborations</h4>
              <p className="text-sm text-[#475569] leading-relaxed font-medium">
                Open for mobile app development, Flutter/React Native consulting, and AI model integration projects.
              </p>
            </div>
          </motion.div>
        </div>

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
                  className="layered-card rounded-[2.5rem] p-7 flex flex-col justify-between items-center text-center cursor-pointer transition-shadow hover:shadow-[0_20px_35px_rgba(15,23,42,0.06)] relative h-[250px] select-none"
                  whileHover={{ y: -6, rotate: -0.5 }}
                  whileTap={{ scale: 0.97 }}
                >
                  <div className="flex flex-col items-center gap-3 mt-2">
                    <div className="flex items-center justify-center w-14 h-14 rounded-2xl bg-white/40 shadow-xs border border-[#0f172a]/5">
                      {card.icon}
                    </div>
                    <div>
                      <h3 className="handwritten text-2xl font-extrabold text-[#0f172a]">{card.name}</h3>
                      <p className="text-[10px] uppercase tracking-wider text-[#475569] font-extrabold mt-0.5 font-sans">Click to Copy ID</p>
                    </div>
                  </div>

                  <div className="w-full mt-4">
                    <p className="text-xs sm:text-sm font-extrabold text-[#0f172a] truncate font-sans px-2 bg-white/40 rounded-xl py-2.5 border border-[#0f172a]/5 shadow-xs">
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
                        className="absolute -top-12 bg-[#0f172a] text-white px-4 py-2 rounded-full text-xs font-extrabold shadow-md tracking-wider"
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
                className="layered-card rounded-[2.5rem] p-7 flex flex-col justify-between items-center text-center cursor-pointer transition-shadow hover:shadow-[0_20px_35px_rgba(15,23,42,0.06)] h-[250px] select-none"
                whileHover={{ y: -6, rotate: 0.5 }}
                whileTap={{ scale: 0.97 }}
              >
                <div className="flex flex-col items-center gap-3 mt-2">
                  <div className="flex items-center justify-center w-14 h-14 rounded-2xl bg-white/40 shadow-xs border border-[#0f172a]/5">
                    {card.icon}
                  </div>
                  <div>
                    <h3 className="handwritten text-2xl font-extrabold text-[#0f172a]">{card.name}</h3>
                    <p className="text-[10px] uppercase tracking-wider text-[#475569] font-extrabold mt-0.5 font-sans">Open Link</p>
                  </div>
                </div>

                <div className="w-full mt-4">
                  <p className="text-xs sm:text-sm font-extrabold text-[#0f172a] truncate font-sans px-2 bg-white/40 rounded-xl py-2.5 border border-[#0f172a]/5 shadow-xs">
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
