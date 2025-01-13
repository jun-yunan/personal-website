import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { FunctionComponent } from 'react';

interface FormContactProps {}

const FormContact: FunctionComponent<FormContactProps> = () => {
  return (
    <form className="w-full flex flex-col gap-y-6 bg-gray-800 p-6 rounded-lg shadow-md">
      <Input
        placeholder="Enter your name"
        type="text"
        className="bg-gray-700 text-white placeholder-gray-400 border-0 focus:ring-2 focus:ring-cyan-400"
      />
      <Input
        placeholder="Enter your email"
        type="email"
        className="bg-gray-700 text-white placeholder-gray-400 border-0 focus:ring-2 focus:ring-cyan-400"
      />
      <Input
        placeholder="Enter your subject"
        type="text"
        className="bg-gray-700 text-white placeholder-gray-400 border-0 focus:ring-2 focus:ring-cyan-400"
      />
      <Textarea
        placeholder="Enter your message"
        rows={7}
        className="bg-gray-700 text-white placeholder-gray-400 border-0 focus:ring-2 focus:ring-cyan-400"
      />
      <Button
        type="submit"
        className="bg-cyan-500 text-white font-semibold py-3 px-6 rounded-lg shadow-lg hover:bg-cyan-600 transition-all"
      >
        Submit
      </Button>
    </form>
  );
};

export default FormContact;
