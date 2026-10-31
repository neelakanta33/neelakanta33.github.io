import Nav from './components/Nav.jsx';
import Hero from './components/Hero.jsx';
import Playground from './components/Playground.jsx';
import Work from './components/Work.jsx';
import Projects from './components/Projects.jsx';
import Skills from './components/Skills.jsx';
import Contact from './components/Contact.jsx';
import Footer from './components/Footer.jsx';

export default function App() {
  return (
    <>
      <div className="wrap">
        <Nav />
        <Hero />
      </div>
      <main>
        <Playground />
        <Work />
        <Projects />
        <Skills />
        <Contact />
      </main>
      <div className="wrap">
        <Footer />
      </div>
    </>
  );
}
