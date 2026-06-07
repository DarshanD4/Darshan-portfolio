import { motion } from "framer-motion";
import heroImage from "../assets/1.jpg";
import ProfileCard from "./ProfileCard";

function Hero() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 25 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
  };

  const imageVariants = {
    hidden: { opacity: 0, scale: 0.95 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.8, ease: "easeOut" } },
  };

  const titleText = "Building scalable cross-platform products with AI, Flutter, and React Native.";
  const titleWords = titleText.split(" ");

  const descText = "I build high-performance mobile apps and intelligent system integrations, connecting elegant, user-centric interfaces with robust backend architectures. Focused on delivering premium digital experiences through clean code, design precision, and scalable model-driven features that perform flawlessly at launch. Whether designing fluid interfaces or fine-tuning underlying performance metrics, I prioritize user engagement and code excellence in every line I write.";
  const descWords = descText.split(" ");

  const titleContainerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.03,
      },
    },
  };

  const wordVariants = {
    hidden: { opacity: 0, y: 15 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.4, ease: "easeOut" },
    },
  };

  return (
    <section
      id="hero"
      className="relative sketch-section min-h-screen flex items-center bg-[radial-gradient(circle_at_top,_rgba(255,249,210,0.95),_transparent_35%),linear-gradient(180deg,_#fff9d2_0%,_#ffebcc_100%)] px-6 overflow-hidden"
    >
      <div className="hero-splash blue" />
      <div className="hero-splash peach" />

      <motion.div 
        className="max-w-6xl mx-auto grid gap-12 lg:grid-cols-2 items-center py-12"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <div className="text-center lg:text-left flex flex-col items-center lg:items-start">
          <motion.p 
            className="mb-4 text-xs sm:text-sm uppercase tracking-[0.35em] text-[#8cc0eb] font-bold"
            variants={itemVariants}
          >
            AI-driven mobile application developer
          </motion.p>

          <motion.h1 
            className="handwritten scribble-title responsive-heading text-4xl sm:text-5xl md:text-6xl font-extrabold leading-tight tracking-tight text-[#0f172a] flex flex-wrap justify-center lg:justify-start"
            variants={titleContainerVariants}
            initial="hidden"
            animate="visible"
          >
            {titleWords.map((word, i) => (
              <motion.span
                key={i}
                variants={wordVariants}
                className="inline-block mr-[0.25em]"
              >
                {word}
              </motion.span>
            ))}
          </motion.h1>

          <motion.div 
            className="mt-6 flex justify-center lg:justify-start"
            variants={itemVariants}
          >
            <motion.span 
              className="hero-tag cursor-default"
              whileHover={{ scale: 1.05, rotate: 1 }}
              whileTap={{ scale: 0.95 }}
            >
              AI + Mobile Product Design
            </motion.span>
          </motion.div>

          <motion.p 
            className="handwritten mt-8 mx-auto max-w-2xl text-lg leading-8 text-[#475569] lg:mx-0 text-center lg:text-left flex flex-wrap justify-center lg:justify-start"
            variants={titleContainerVariants}
            initial="hidden"
            animate="visible"
          >
            {descWords.map((word, i) => (
              <motion.span
                key={i}
                variants={wordVariants}
                className="inline-block mr-[0.22em]"
              >
                {word}
              </motion.span>
            ))}
          </motion.p>


        </div>

        <motion.div 
          className="relative mx-auto max-w-[280px] lg:justify-self-end z-10 w-full pt-4"
          variants={imageVariants}
        >
          <ProfileCard
            avatarUrl={heroImage}
            name="Darshan M P"
            title="AI & Mobile Developer"
            handle="DarshanD4"
            status="Available for Work"
            contactText="WhatsApp Me"
            onContactClick={() => window.open("https://wa.me/918610068665", "_blank")}
            behindGlowEnabled={true}
            behindGlowColor="rgba(140, 192, 235, 0.4)"
            enableTilt={true}
          />


        </motion.div>
      </motion.div>
    </section>
  );
}

export default Hero;