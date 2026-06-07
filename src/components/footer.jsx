import { motion } from "framer-motion";

function Footer() {
  return (
    <footer className="layered-card border-t border-[#8cc0eb]/40 bg-[#f4f5f7]/90 px-6 py-12 text-[#475569] handwritten relative overflow-hidden">
      <div className="max-w-6xl mx-auto flex flex-col gap-6 text-sm items-center justify-center text-center">
        


        <p className="text-sm sm:text-base font-bold tracking-wide mt-2">
          © {new Date().getFullYear()} Darshan MP. Built with React and Tailwind CSS.
        </p>
      </div>
    </footer>
  );
}

export default Footer;
