import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "About", href: "#about" },
    { name: "Skills", href: "#skills" },
    { name: "Projects", href: "#projects" },
    { name: "Experience", href: "#experience" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <nav
      className={`fixed top-0 w-full z-50 border-b border-[#8cc0eb]/10 handwritten transition-all duration-300 backdrop-blur-md ${
        scrolled
          ? "bg-[rgba(255,255,255,0.95)] py-3 shadow-[0_8px_30px_rgb(15,23,42,0.06)]"
          : "bg-[rgba(255,255,255,0.85)] py-4 shadow-[0_16px_0_rgba(140,192,235,0.04)]"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between text-[#0f172a]">
        <motion.a
          href="#hero"
          className="inline-flex items-center gap-2 text-2xl font-bold tracking-tight text-[#0f172a]"
          whileHover={{ scale: 1.03 }}
          whileTap={{ scale: 0.98 }}
        >
          Darshan MP
          <span className="inline-flex h-3 w-3 rounded-full bg-[#8cc0eb]" />
        </motion.a>

        {/* Desktop Navigation */}
        <div className="hidden md:flex gap-8 text-[#475569] text-base font-semibold items-center">
          {navLinks.map((link) => (
            <motion.a
              key={link.name}
              href={link.href}
              className="relative py-1 text-[#475569] transition-colors hover:text-[#0f172a]"
              whileHover={{ y: -1 }}
              whileTap={{ y: 0 }}
            >
              {link.name}
            </motion.a>
          ))}
        </div>

        <motion.a
          href="/MA_SD_Resume.pdf"
          target="_blank"
          rel="noreferrer"
          className="hidden md:inline-flex items-center rounded-full border border-[#8cc0eb]/40 bg-white px-6 py-2.5 text-sm font-semibold text-[#0f172a] transition-all hover:bg-[#dfe7f0] hover:border-[#8cc0eb]/80"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          Resume
        </motion.a>

        {/* Mobile menu button */}
        <motion.button
          type="button"
          onClick={() => setMenuOpen((prev) => !prev)}
          className="inline-flex md:hidden items-center justify-center rounded-full border border-[#8cc0eb]/25 bg-white p-2.5 text-[#0f172a] transition hover:bg-[#dfe7f0]"
          aria-label="Toggle navigation menu"
          whileTap={{ scale: 0.9 }}
        >
          <div className="flex flex-col gap-1.5 justify-center items-center w-6 h-4">
            <motion.span
              animate={menuOpen ? { rotate: 45, y: 5.5 } : { rotate: 0, y: 0 }}
              className="block h-0.5 w-6 bg-[#0f172a] rounded"
            />
            <motion.span
              animate={menuOpen ? { opacity: 0 } : { opacity: 1 }}
              className="block h-0.5 w-6 bg-[#0f172a] rounded"
            />
            <motion.span
              animate={menuOpen ? { rotate: -45, y: -5.5 } : { rotate: 0, y: 0 }}
              className="block h-0.5 w-6 bg-[#0f172a] rounded"
            />
          </div>
        </motion.button>
      </div>

      {/* Mobile Navigation Dropdown */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25, ease: "easeInOut" }}
            className="md:hidden border-t border-[#8cc0eb]/15 bg-white px-6 py-4 text-center shadow-[0_8px_30px_rgba(15,23,42,0.08)] overflow-hidden"
          >
            <div className="flex flex-col gap-2 py-2">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="block py-2.5 text-base font-semibold text-[#475569] transition hover:text-[#0f172a] hover:bg-[#8cc0eb]/5 rounded-xl"
                  onClick={() => setMenuOpen(false)}
                >
                  {link.name}
                </a>
              ))}
              <a
                href="/MA_SD_Resume.pdf"
                target="_blank"
                rel="noreferrer"
                className="mt-3 inline-flex w-full justify-center rounded-full border border-[#8cc0eb]/30 bg-[#eef1f5] px-5 py-3 text-sm font-bold text-[#0f172a] transition hover:bg-[#dfe7f0]"
                onClick={() => setMenuOpen(false)}
              >
                Resume
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}

export default Navbar;