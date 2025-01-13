import { FunctionComponent } from 'react';
import { motion } from 'framer-motion';
import CardService from './card-service';

interface ServicesProps {}

const Services: FunctionComponent<ServicesProps> = () => {
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
      className="w-full mt-[150px] flex flex-col items-center gap-y-10"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
    >
      {/* Title Animation */}
      <motion.p variants={sectionVariants} className="text-6xl font-bold">
        My Service
      </motion.p>

      {/* Cards Container */}
      <motion.div
        className="lg:w-full w-[90%] flex lg:flex-row flex-col items-center justify-around gap-6"
        variants={sectionVariants}
      >
        <motion.div variants={cardVariants}>
          <CardService
            title="Frontend Dev"
            content="I can help you create a frontend application that is both
              visually appealing and functional, with a focus on user
              experience and performance. I have experience with a variety of
              frontend technologies, including HTML, CSS, JavaScript,
              React.js, and Next.js."
          />
        </motion.div>

        <motion.div variants={cardVariants}>
          <CardService
            title="Backend Dev"
            content="I can help you create a backend system that is both scalable and
              secure, with a focus on performance and reliability. I have
              experience with a variety of backend technologies, including
              Node.js, Express, Honos.js, MySQL, MongoDB, Redis, and Firebase."
          />
        </motion.div>

        <motion.div variants={cardVariants}>
          <CardService
            title="Mobile Dev"
            content="I can help you create a mobile application that is both visually
              appealing and functional, with a focus on user experience and
              performance. I have experience with a variety of frontend and
              backend technologies, including Dart, Flutter, and Firebase."
          />
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default Services;
