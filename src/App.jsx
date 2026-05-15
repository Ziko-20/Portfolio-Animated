import { useState, useEffect } from 'react';
import GradientBackground from './components/ui/GradientBackground';
import AnimatedCursor from './components/ui/AnimatedCursor';
import NoiseOverlay from './components/ui/NoiseOverlay';
import ScrollProgress from './components/ui/ScrollProgress';
import LoadingScreen from './components/LoadingScreen';
import Navigation from './components/Navigation';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Experience from './components/Experience';
import TechStack from './components/TechStack';
import Contact from './components/Contact';
import Footer from './components/Footer';
import { useLenis } from './hooks/useLenis';

function Portfolio() {
  useLenis();

  return (
    <div className="relative min-h-screen text-zinc-50 font-sans overflow-x-hidden">
      <GradientBackground />
      <NoiseOverlay />
      <ScrollProgress />
      <AnimatedCursor />
      <Navigation />
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Experience />
        <TechStack />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default function App() {
  const [loaded, setLoaded] = useState(false);

  // Prevent body scroll while loading
  useEffect(() => {
    if (!loaded) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => { document.body.style.overflow = ''; };
  }, [loaded]);

  return (
    <>
      <LoadingScreen onComplete={() => setLoaded(true)} />
      {loaded && <Portfolio />}
    </>
  );
}
