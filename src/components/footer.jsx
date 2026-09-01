import { motion } from "framer-motion";

function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="border-t border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900/90 px-4 sm:px-8 py-10 text-slate-500 dark:text-slate-400 transition-colors duration-500">
      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row gap-6 items-center justify-between text-center sm:text-left">
        <div>
          <a href="#hero" className="text-base font-bold text-slate-900 dark:text-white inline-flex items-center gap-2">
            <span className="w-6 h-6 rounded-lg bg-slate-900 dark:bg-sky-500 text-white flex items-center justify-center text-xs font-extrabold">D</span>
            <span>Darshan MP</span>
          </a>
          <p className="text-xs font-normal text-slate-500 dark:text-slate-400 mt-1">
            Flutter Developer Intern @ ByteCraft Studios • Cross-Platform Mobile & AI Systems
          </p>
        </div>

        <div className="flex items-center gap-4">
          <p className="text-xs font-medium text-slate-400 dark:text-slate-500">
            © {new Date().getFullYear()} Darshan MP. All rights reserved.
          </p>
          <button
            type="button"
            onClick={scrollToTop}
            aria-label="Scroll to top"
            className="p-2.5 rounded-xl bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-200 shadow-2xs transition cursor-pointer"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M5 10l7-7m0 0l7 7m-7-7v18" />
            </svg>
          </button>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
