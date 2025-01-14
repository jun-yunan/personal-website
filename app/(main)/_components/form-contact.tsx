import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { FunctionComponent } from 'react';

interface FormContactProps {}

const FormContact: FunctionComponent<FormContactProps> = () => {
  const formVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2, delayChildren: 0.1 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: 'easeOut' },
    },
  };

  return (
    <motion.form
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      variants={formVariants}
      className="w-full flex flex-col gap-y-6 bg-gray-800 p-6 rounded-lg shadow-md"
    >
      <motion.div variants={itemVariants}>
        <Input
          placeholder="Enter your name"
          type="text"
          className="bg-gray-700 text-white placeholder-gray-400 border-0 focus:ring-2 focus:ring-cyan-400"
        />
      </motion.div>
      <motion.div variants={itemVariants}>
        <Input
          placeholder="Enter your email"
          type="email"
          className="bg-gray-700 text-white placeholder-gray-400 border-0 focus:ring-2 focus:ring-cyan-400"
        />
      </motion.div>
      <motion.div variants={itemVariants}>
        <Input
          placeholder="Enter your subject"
          type="text"
          className="bg-gray-700 text-white placeholder-gray-400 border-0 focus:ring-2 focus:ring-cyan-400"
        />
      </motion.div>
      <motion.div variants={itemVariants}>
        <Textarea
          placeholder="Enter your message"
          rows={7}
          className="bg-gray-700 text-white placeholder-gray-400 border-0 focus:ring-2 focus:ring-cyan-400"
        />
      </motion.div>
      <motion.div variants={itemVariants}>
        <Button
          type="submit"
          className="bg-cyan-500 text-white font-semibold py-3 px-6 rounded-lg shadow-lg hover:bg-cyan-600 transition-all"
        >
          Submit
        </Button>
      </motion.div>
    </motion.form>
  );
};

export default FormContact;
