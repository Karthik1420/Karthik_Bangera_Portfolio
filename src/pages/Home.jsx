// src/pages/Home.jsx
import Hero from '../components/sections/Hero';
import About from '../components/sections/About';
import Skills from '../components/sections/Skills';
import Work from '../components/sections/Work';
import Journey from '../components/sections/Journey';
import Contact from '../components/sections/Contact';

export default function Home() {
  return (
    <main id="main-content">
      <Hero />
      <About />
      <Skills />
      <Work />
      <Journey />
      <Contact />
    </main>
  );
}
