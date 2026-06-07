import Navbar from "./components/navbar";
import Hero from "./components/hero";
import About from "./components/about";
import Skills from "./components/skills";
import Projects from "./components/projects";
import Experience from "./components/experience";
import Contact from "./components/contact";
import Footer from "./components/footer";

function App() {
  return (
    <div className="min-h-screen bg-transparent text-[#0f172a] text-center">
      <Navbar />
      <main className="pt-24">
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Experience />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;