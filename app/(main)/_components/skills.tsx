import { FunctionComponent } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';

interface SkillsProps {}

const Skills: FunctionComponent<SkillsProps> = () => {
  // Variants for container and items
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2, delayChildren: 0.1 },
    },
  };

  const titleVariants = {
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
      className="mt-[150px] w-full flex flex-col items-center gap-y-10"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
    >
      {/* Title Animation */}
      <motion.p
        variants={titleVariants}
        className="text-5xl font-extrabold text-cyan-400 tracking-wide"
      >
        My Skills
      </motion.p>

      {/* Skills Grid */}
      <motion.div
        className="grid grid-cols-3 lg:grid-cols-6 gap-6"
        variants={containerVariants}
      >
        {/* Skill Items */}
        {[
          'HTML5',
          'CSS3',
          'JavaScript',
          'TypeScript',
          'React',
          'Next.js',
          'Tailwind CSS',
          'Node.js',
          'Bun',
          'Express',
          'MongoDB',
          'MySQL',
          'Redis',
          'Docker',
          'Git',
          'Dart',
          'Flutter',
          'Firebase',
        ].map((skill) => (
          <motion.div
            key={skill}
            className="group cursor-pointer relative w-24 h-24 md:w-28 md:h-28 flex items-center justify-center rounded-xl bg-gradient-to-tr from-gray-900 to-cyan-800 shadow-lg hover:scale-105 transform transition duration-300"
            variants={cardVariants}
          >
            <Image
              alt={skill}
              width={100}
              height={100}
              className="w-16 h-16 md:w-20 md:h-20 object-contain"
              src={`/${skill}.svg`}
            />
            {/* Tooltip */}
            <motion.div
              className="absolute bottom-2 scale-0 group-hover:scale-100 transform transition duration-300 text-sm text-white bg-gray-800 px-2 py-1 rounded shadow-md"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.3, delay: 0.2 }}
            >
              {skill}
            </motion.div>
          </motion.div>
        ))}
      </motion.div>
    </motion.div>
  );
};

export default Skills;
