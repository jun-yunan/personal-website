import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { FunctionComponent } from 'react';

interface CardProjectProps {
  title: string;
  description: string;
  content: string;
}

const CardProject: FunctionComponent<CardProjectProps> = ({
  title,
  description,
  content,
}) => {
  return (
    <Card className="bg-gradient-to-tr from-gray-800 via-cyan-900 to-gray-900 text-white rounded-xl shadow-md overflow-hidden transform hover:scale-105 transition-all duration-300">
      <CardHeader className="px-6 pt-6 pb-4">
        <CardTitle className="text-2xl font-bold">{title}</CardTitle>
        <CardDescription className="mt-2 text-gray-400">
          {description}
        </CardDescription>
      </CardHeader>
      <CardContent className="px-6 py-4 text-gray-200">{content}</CardContent>
      <CardFooter className="px-6 pb-6">
        <Button className="bg-cyan-600 hover:bg-cyan-500 text-white px-4 py-2 rounded-md">
          Visit
        </Button>
      </CardFooter>
    </Card>
  );
};

export default CardProject;
