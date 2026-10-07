import Navbar from './components/Navbar';

import Hero from './sections/Hero';
import About from './sections/About';
import Expertise from './sections/Expertise';
import Skills from './sections/Skills';
import Experience from './sections/Experience';
import Projects from './sections/Projects';
import AcademicProjects from './sections/AcademicProjects';
import Education from './sections/Education';
import Certifications from './sections/Certifications';
import Currently from './sections/Currently';
import Contact from './sections/Contact';

import Footer from './components/Footer';

function App() {
  return (
    <>
      <Navbar />

      <main>
        <Hero />
        <About />
        <Expertise />
        <Skills />
        <Experience />
        <Projects />
        <AcademicProjects />
        <Education />
        <Certifications />
        <Currently />
        <Contact />
      </main>

      <Footer />
    </>
  );
}

export default App;