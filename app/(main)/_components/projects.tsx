import { FunctionComponent } from 'react';
import CardProject from './card-project';
import { motion } from 'framer-motion';

interface LatestProjectsProps {}

const LatestProjects: FunctionComponent<LatestProjectsProps> = () => {
  // Variants for animations
  const sectionVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: 'easeOut' },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.6, ease: 'easeOut' },
    },
  };

  return (
    <motion.div
      className="w-full mt-[150px] flex flex-col items-center gap-y-12"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
    >
      {/* Header Section */}
      <motion.div
        className="flex items-center gap-x-4"
        variants={sectionVariants}
      >
        <p className="text-5xl hidden lg:block font-extrabold tracking-wide text-gray-200">
          Latest
        </p>
        <p className="text-5xl font-extrabold tracking-wide text-cyan-400">
          Projects
        </p>
      </motion.div>

      {/* Projects Section */}
      <motion.div
        className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        variants={sectionVariants}
      >
        <motion.div variants={cardVariants}>
          <CardProject
            title="Blog Travel"
            description="Explore the world through my travel stories."
            content="A Next.js blog platform featuring real-time updates and dynamic maps integration."
          />
        </motion.div>
        <motion.div variants={cardVariants}>
          <CardProject
            title="Chat App"
            description="Connect and chat seamlessly."
            content="A chat application built with React, Firebase, and TailwindCSS for a smooth UI experience."
          />
        </motion.div>
        <motion.div variants={cardVariants}>
          <CardProject
            title="Threadly"
            description="Threads made simple."
            content="A discussion forum with powerful moderation tools, built using Node.js and MongoDB."
          />
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default LatestProjects;
