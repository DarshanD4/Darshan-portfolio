import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

function Contact() {
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText("darshanmp4056@gmail.com");
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const contactChannels = [
    {
      name: "Email Address",
      value: "darshanmp4056@gmail.com",
      actionText: "Copy Email",
      isCopy: true,
      onClick: handleCopyEmail,
      badge: "Primary Contact",
      icon: (
        <svg className="w-6 h-6 text-sky-600 dark:text-sky-400" fill="none" stroke="currentColor" strokeWidth="2.2" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      ),
    },
    {
      name: "LinkedIn",
      value: "m-p-darshan",
      actionText: "View Profile",
      url: "https://linkedin.com/in/m-p-darshan",
      badge: "Professional Network",
      icon: (
        <svg className="w-6 h-6 text-blue-600 dark:text-blue-400" fill="none" stroke="currentColor" strokeWidth="2.2" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      ),
    },
    {
      name: "WhatsApp",
      value: "+91 86100 68665",
      actionText: "Chat on WhatsApp",
      url: "https://wa.me/918610068665",
      badge: "Instant Chat",
      icon: (
        <svg className="w-6 h-6 text-emerald-600 dark:text-emerald-400" fill="none" stroke="currentColor" strokeWidth="2.2" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.94.725l.548 2.2a1 1 0 01-.321.988l-1.305.98a10.582 10.582 0 004.872 4.872l.98-1.305a1 1 0 01.988-.321l2.2.548a1 1 0 01.725.94V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
        </svg>
      ),
    },
    {
      name: "GitHub",
      value: "DarshanD4",
      actionText: "View Repositories",
      url: "https://github.com/DarshanD4",
      badge: "Code & Projects",
      icon: (
        <svg className="w-6 h-6 text-slate-800 dark:text-slate-200" fill="none" stroke="currentColor" strokeWidth="2.2" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
        </svg>
      ),
    },
  ];

  return (
    <section id="contact" className="py-24 px-4 sm:px-8 bg-slate-50/60 dark:bg-slate-900/40 border-t border-slate-200/70 dark:border-slate-800 transition-colors duration-500">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-xs font-bold uppercase tracking-widest text-sky-600 dark:text-sky-400">
            Get In Touch
          </span>
          <h2 className="mt-3 text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-900 dark:text-white">
            Let’s Build Something Together
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-600 dark:text-slate-300 leading-relaxed font-normal">
            Whether you have an upcoming project, freelance inquiry, or technical collaboration, feel free to reach out directly through any channel below.
          </p>
        </div>

        {/* Contact Grid */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4 max-w-5xl mx-auto">
          {contactChannels.map((channel) => {
            if (channel.isCopy) {
              return (
                <div
                  key={channel.name}
                  onClick={channel.onClick}
                  className="pro-card p-6 flex flex-col justify-between cursor-pointer group hover:border-sky-300 dark:hover:border-sky-500 relative"
                >
                  <div>
                    <div className="flex items-center justify-between gap-2 mb-4">
                      <div className="w-11 h-11 rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-200/80 dark:border-slate-700 flex items-center justify-center shadow-2xs group-hover:border-sky-300 transition">
                        {channel.icon}
                      </div>
                      <span className="px-2.5 py-0.5 rounded-full bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-[10px] font-bold text-slate-600 dark:text-slate-300">
                        {channel.badge}
                      </span>
                    </div>

                    <h3 className="text-base font-bold text-slate-900 dark:text-white mb-1">{channel.name}</h3>
                    <p className="text-xs font-mono-code text-slate-600 dark:text-slate-400 break-all mb-6">
                      {channel.value}
                    </p>
                  </div>

                  <div className="pt-4 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between text-xs font-bold text-sky-600 dark:text-sky-400 group-hover:text-sky-700">
                    <span>{channel.actionText}</span>
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
                    </svg>
                  </div>

                  {/* Toast Alert */}
                  <AnimatePresence>
                    {copied && (
                      <motion.div
                        initial={{ opacity: 0, y: 10, scale: 0.95 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: -10, scale: 0.95 }}
                        className="absolute -top-12 left-1/2 -translate-x-1/2 bg-slate-900 dark:bg-sky-500 text-white text-xs font-bold px-3 py-1.5 rounded-lg shadow-lg whitespace-nowrap z-20"
                      >
                        Email copied to clipboard!
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            }

            return (
              <a
                key={channel.name}
                href={channel.url}
                target="_blank"
                rel="noreferrer"
                className="pro-card p-6 flex flex-col justify-between group hover:border-sky-300 dark:hover:border-sky-500 transition"
              >
                <div>
                  <div className="flex items-center justify-between gap-2 mb-4">
                    <div className="w-11 h-11 rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-200/80 dark:border-slate-700 flex items-center justify-center shadow-2xs group-hover:border-sky-300 transition">
                      {channel.icon}
                    </div>
                    <span className="px-2.5 py-0.5 rounded-full bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-[10px] font-bold text-slate-600 dark:text-slate-300">
                      {channel.badge}
                    </span>
                  </div>

                  <h3 className="text-base font-bold text-slate-900 dark:text-white mb-1">{channel.name}</h3>
                  <p className="text-xs font-mono-code text-slate-600 dark:text-slate-400 break-all mb-6">
                    {channel.value}
                  </p>
                </div>

                <div className="pt-4 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between text-xs font-bold text-sky-600 dark:text-sky-400 group-hover:text-sky-700">
                  <span>{channel.actionText}</span>
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                </div>
              </a>
            );
          })}
        </div>

        {/* Availability Banner */}
        <div className="mt-12 max-w-3xl mx-auto p-6 rounded-2xl bg-white dark:bg-slate-800/80 border border-slate-200/80 dark:border-slate-700 shadow-xs flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
          <div className="flex items-center gap-3">
            <div className="w-3 h-3 rounded-full bg-emerald-500 animate-pulse shrink-0" />
            <p className="text-sm font-medium text-slate-700 dark:text-slate-300">
              <strong className="text-slate-900 dark:text-white">Current Status:</strong> Open for mobile development & AI engineering collaborations.
            </p>
          </div>

          <a
            href="mailto:darshanmp4056@gmail.com"
            className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-slate-900 dark:bg-sky-500 hover:bg-slate-800 dark:hover:bg-sky-600 text-white text-xs font-bold transition shadow-xs"
          >
            <span>Direct Email</span>
            <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}

export default Contact;
