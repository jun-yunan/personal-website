import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { FunctionComponent } from 'react';

interface CardServiceProps {
  title: string;
  content: string;
}

const CardService: FunctionComponent<CardServiceProps> = ({
  content,
  title,
}) => {
  return (
    <Card className="bg-gradient-to-tr cursor-pointer from-cyan-800 via-cyan-900 to-gray-900 text-white rounded-lg shadow-xl overflow-hidden transform hover:scale-105 transition-transform duration-300">
      <CardHeader className="p-6 border-b border-cyan-700">
        <CardTitle>
          <h3 className="text-4xl font-bold text-cyan-400 tracking-wide">
            {title}
          </h3>
        </CardTitle>
      </CardHeader>
      <CardContent className="p-6 lg:h-[220px] min-h-[220px]">
        <p className="text-lg text-gray-300 leading-relaxed whitespace-pre-wrap">
          {content}
        </p>
      </CardContent>
      <CardFooter className="p-6 flex justify-center">
        <button className="relative px-10 py-3 text-white rounded-full bg-gradient-to-r from-cyan-500 to-cyan-600 shadow-lg hover:from-cyan-400 hover:to-cyan-500 hover:shadow-cyan-400/50 transition-all duration-300 text-lg font-medium">
          <span className="absolute inset-0 blur-lg opacity-50 bg-gradient-to-r from-cyan-500 to-cyan-600 rounded-full"></span>
          Contact Me
        </button>
      </CardFooter>
    </Card>
  );
};

export default CardService;
