'use client';

import About from './_components/about';
import Contact from './_components/contact';
import Home from './_components/home';
import LatestProjects from './_components/projects';
import Services from './_components/services';
import Skills from './_components/skills';
import { motion } from 'framer-motion';

export default function LandingPage() {
  const sectionVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
  };

  return (
    <div className="flex flex-col w-full">
      <Home />

      <About />

      <Services />

      <Skills />

      <LatestProjects />

      <Contact />
    </div>
  );
}
