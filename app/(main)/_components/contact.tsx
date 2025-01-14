import { motion } from 'framer-motion';
import { FunctionComponent } from 'react';
import { AtSign, Phone } from 'lucide-react';
import FormContact from './form-contact';
import Socials from './socials';

interface ContactProps {}

const Contact: FunctionComponent<ContactProps> = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.3, delayChildren: 0.2 },
    },
  };

  const textItemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: 'easeOut' },
    },
  };

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      variants={containerVariants}
      className="w-full mt-[150px] flex flex-col items-center md:flex-row lg:items-start gap-10 bg-gradient-to-tr from-gray-900 via-cyan-800 to-gray-900 text-white p-8 rounded-xl shadow-lg"
    >
      {/* Left Section */}
      <motion.div
        variants={containerVariants}
        className="lg:flex-1 w-full flex flex-col items-start gap-y-6"
      >
        <motion.p
          variants={textItemVariants}
          className="text-5xl font-extrabold text-cyan-400 tracking-wide"
        >
          Contact Me
        </motion.p>
        <motion.p
          variants={textItemVariants}
          className="text-lg leading-relaxed text-gray-300"
        >
          I’d love to connect with you! Whether you have a project in mind, need
          help solving a problem, or just want to chat about technology and
          ideas, feel free to reach out.
        </motion.p>
        <motion.div
          variants={containerVariants}
          className="flex flex-col gap-y-4"
        >
          <motion.div
            variants={textItemVariants}
            className="flex items-center gap-x-2 text-gray-300"
          >
            <AtSign className="text-cyan-400" />
            <p className="text-lg font-medium">nguyenkiet24052003@gmail.com</p>
          </motion.div>
          <motion.div
            variants={textItemVariants}
            className="flex items-center gap-x-2 text-gray-300"
          >
            <Phone className="text-cyan-400" />
            <p className="text-lg font-medium">(84+) 763999584</p>
          </motion.div>
        </motion.div>
        <motion.div variants={textItemVariants}>
          <Socials />
        </motion.div>
      </motion.div>

      {/* Right Section */}
      <div className="lg:flex-1 w-full">
        <FormContact />
      </div>
    </motion.div>
  );
};

export default Contact;
