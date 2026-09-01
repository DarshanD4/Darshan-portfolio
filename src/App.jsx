import { ThemeProvider } from "./context/ThemeContext";
import Navbar from "./components/navbar";
import Hero from "./components/hero";
import About from "./components/about";
import Experience from "./components/experience";
import Projects from "./components/projects";
import Skills from "./components/skills";
import Contact from "./components/contact";
import Footer from "./components/footer";

function PortfolioContent() {
  return (
    <div className="relative min-h-screen bg-[var(--bg-main)] text-[var(--text-primary)] selection:bg-sky-500 selection:text-white transition-colors duration-500 overflow-x-hidden">
      {/* Dynamic Ambient Background Orbs */}
      <div
        className="fixed top-0 left-1/4 w-[600px] h-[400px] rounded-full blur-3xl pointer-events-none -z-10 transition-colors duration-700"
        style={{ backgroundColor: "var(--ambient-orb-1)" }}
      />
      <div
        className="fixed top-1/3 right-10 w-[500px] h-[500px] rounded-full blur-3xl pointer-events-none -z-10 transition-colors duration-700"
        style={{ backgroundColor: "var(--ambient-orb-2)" }}
      />
      <div
        className="fixed bottom-10 left-10 w-[450px] h-[450px] rounded-full blur-3xl pointer-events-none -z-10 transition-colors duration-700"
        style={{ backgroundColor: "var(--ambient-orb-3)" }}
      />

      <Navbar />
      <main>
        <Hero />
        <About />
        <Experience />
        <Projects />
        <Skills />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

function App() {
  return (
    <ThemeProvider>
      <PortfolioContent />
    </ThemeProvider>
  );
}

export default App;