import React from 'react';
import GradientBackground from './components/ui/GradientBackground';
import Navigation from './components/Navigation';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="relative min-h-screen text-slate-50 selection:bg-blue-500/30 font-sans">
      <GradientBackground />
      <Navigation />
      
      <main className="flex flex-col items-center w-full">
        <Hero />
        <About />
        <Projects />
        <Experience />
        <Contact />
      </main>
      
      <Footer />
    </div>
  );
}

export default App;
