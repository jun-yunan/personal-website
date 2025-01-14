import { Facebook, Instagram, Linkedin, Twitter } from 'lucide-react';
import Image from 'next/image';
import { FunctionComponent } from 'react';
import { motion } from 'framer-motion';
import ButtonSocial from './button-social';
import TypingEffect from './typing-effect';
import Socials from './socials';

interface HomeProps {}

const Home: FunctionComponent<HomeProps> = () => {
  // Variants for motion animations
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.3, delayChildren: 0.2 },
    },
  };

  const textVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: 'easeOut' },
    },
  };

  const imageVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 1, ease: 'easeInOut' },
    },
  };

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.4 }}
      variants={containerVariants}
      className="w-full h-[450px] mt-[50px] flex flex-col lg:flex-row items-center justify-around"
    >
      {/* Left Section with Text */}
      <motion.div
        className="flex flex-col items-start gap-y-8"
        variants={containerVariants}
      >
        <motion.div
          variants={textVariants}
          className="flex flex-col items-start gap-y-2"
        >
          <motion.p variants={textVariants} className="text-2xl font-semibold">
            Hello, It&apos;s Me
          </motion.p>
          <TypingEffect />
          <motion.p variants={textVariants} className="text-2xl font-semibold">
            And I am a Fullstack Developer
          </motion.p>
        </motion.div>

        <motion.div variants={textVariants}>
          <Socials />
        </motion.div>

        <motion.button
          variants={textVariants}
          className="bg-cyan-500 px-12 py-3 text-white rounded-full shadow-lg hover:bg-cyan-600 transition-all duration-500 relative text-xl font-semibold"
        >
          <span className="absolute inset-0 rounded-lg blur-lg opacity-50 bg-cyan-500"></span>
          More about me
        </motion.button>
      </motion.div>

      {/* Right Section with Image */}
      <motion.div
        variants={imageVariants}
        className="relative w-[450px] h-[450px] rounded-full flex items-center justify-center"
      >
        <div className="absolute inset-0 blur-[30px] rounded-full bg-gradient-to-r from-cyan-400 to-blue-500 opacity-75"></div>

        <div className="w-[420px] hidden h-[420px] bg-white rounded-full lg:flex items-center justify-center">
          <div className="relative w-[400px] h-[400px] overflow-hidden rounded-full">
            <Image
              src="/avatar-1.jpg"
              width={400}
              height={400}
              className="object-cover"
              alt=""
            />
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default Home;
