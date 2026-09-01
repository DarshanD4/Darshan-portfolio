import { motion } from "framer-motion";

function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="border-t border-slate-200 bg-white px-4 sm:px-8 py-10 text-slate-500">
      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row gap-6 items-center justify-between text-center sm:text-left">
        <div>
          <a href="#hero" className="text-base font-bold text-slate-900 inline-flex items-center gap-2">
            <span className="w-6 h-6 rounded-lg bg-slate-900 text-white flex items-center justify-center text-xs font-extrabold">D</span>
            <span>Darshan MP</span>
          </a>
          <p className="text-xs font-normal text-slate-500 mt-1">
            App Developer Intern @ Bytecraft Studios India • Cross-Platform Mobile & AI Systems
          </p>
        </div>

        <div className="flex items-center gap-4">
          <p className="text-xs font-medium text-slate-400">
            © {new Date().getFullYear()} Darshan MP. All rights reserved.
          </p>
          <button
            type="button"
            onClick={scrollToTop}
            aria-label="Scroll to top"
            className="p-2.5 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-700 shadow-2xs transition"
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
