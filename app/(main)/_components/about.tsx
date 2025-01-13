import { FunctionComponent } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';

interface AboutProps {}

const About: FunctionComponent<AboutProps> = () => {
  // Variants for motion animations
  const imageVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 1, ease: 'easeInOut' },
    },
  };

  const textVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.8, ease: 'easeOut' },
    },
  };

  return (
    <motion.div
      id="about"
      className="w-full flex flex-col"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.4 }}
    >
      <div className="w-full lg:mt-[150px] lg:flex-row flex-col flex items-center justify-around">
        {/* Left Section with Image */}
        <motion.div
          variants={imageVariants}
          className="relative w-[450px] h-[450px] rounded-full flex items-center justify-center"
        >
          <div className="absolute hidden lg:block inset-0 blur-[30px] rounded-full bg-gradient-to-r from-cyan-400 to-blue-500 opacity-75"></div>
          <div className="lg:w-[420px] lg:h-[420px] w-[370px] h-[370px] bg-white rounded-full flex items-center justify-center">
            <div className="relative lg:w-[400px] lg:h-[400px] w-[350px] h-[350px] overflow-hidden rounded-full">
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

        {/* Right Section with Text */}
        <motion.div
          variants={textVariants}
          className="lg:max-w-[40%] w-[90%] flex flex-col lg:items-start items-center gap-y-6"
        >
          <p className="lg:text-7xl text-7xl font-bold">About Me</p>
          <p className="text-4xl font-semibold">Nguyen Anh Kiet</p>
          <p className="lg:text-lg text-base text-wrap break-words whitespace-pre-wrap">
            I&apos;m a 22-year-old software engineering student passionate about
            creating scalable and user-friendly applications with expertise in
            frontend technologies like HTML, CSS, JavaScript, React.js, and
            Next.js, backend development using Node.js, Express, Hono.js,
            databases such as MySQL, MongoDB, Redis, and Firebase, as well as
            mobile development with Flutter for Android, combined with
            proficiency in version control using Git and deployment with Docker,
            constantly striving to deliver efficient, maintainable, and
            impactful solutions for modern software challenges.
          </p>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default About;
