'use client';

import About from './_components/about';
import Contact from './_components/contact';
import Home from './_components/home';
import LatestProjects from './_components/projects';
import Services from './_components/services';
import Skills from './_components/skills';

export default function LandingPage() {
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
