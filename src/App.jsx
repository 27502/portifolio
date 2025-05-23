import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Blog from "./components/Projects";
import AboutMe from "./components/AboutMe";
import ProjectsCarousel from "./components/ProjectsCarousel";

function App() {
  return (
    <div>
      <Navbar />
      <Hero />
      <AboutMe />
      <Blog />
      <ProjectsCarousel />
      <Footer />
    </div>
  );
}

export default App;
