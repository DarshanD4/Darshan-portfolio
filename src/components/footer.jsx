import { motion } from "framer-motion";

function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="border-t-2 border-[#8cc0eb]/30 bg-[#fff9d2] px-6 py-12 text-[#475569] relative overflow-hidden">
      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row gap-6 text-sm items-center justify-between text-center sm:text-left">
        <div>
          <a href="#hero" className="handwritten text-2xl font-bold text-[#0f172a] inline-flex items-center gap-2">
            Darshan MP
            <span className="w-2.5 h-2.5 rounded-full bg-[#8cc0eb]" />
          </a>
          <p className="text-xs sm:text-sm font-medium text-[#475569] mt-1">
            App Developer Intern @ Bytecrafts Studios India & AI Product Developer
          </p>
        </div>

        <div className="flex items-center gap-4">
          <p className="text-xs sm:text-sm font-bold text-[#475569]">
            © {new Date().getFullYear()} Darshan MP.
          </p>
          <motion.button
            type="button"
            onClick={scrollToTop}
            aria-label="Scroll to top"
            className="p-3 rounded-full bg-[#0f172a] text-white shadow-md cursor-pointer hover:bg-[#0f172a]/90 transition"
            whileHover={{ y: -3, scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M5 10l7-7m0 0l7 7m-7-7v18" />
            </svg>
          </motion.button>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
