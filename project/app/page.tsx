'use client';

import { useEffect } from 'react';
import CustomCursor from '@/components/ui/CustomCursor';
import Navbar from '@/components/navigation/Navbar';
import Hero from '@/components/sections/Hero';
import TechStack from '@/components/sections/TechStack';
import About from '@/components/sections/About';
import Projects from '@/components/sections/Projects';
import Skills from '@/components/sections/Skills';
import Contact from '@/components/sections/Contact';
import Footer from '@/components/sections/Footer';

export default function Home() {
  useEffect(() => {
    // Smooth scrolling for anchor links
    document.documentElement.style.scrollBehavior = 'smooth';
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-purple-900">
      <CustomCursor />
      <Navbar />
      <main>
        <Hero />
        <TechStack />
        <About />
        <Projects />
        <Skills />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}