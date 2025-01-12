import { FunctionComponent } from 'react';
import CardService from './card-service';

interface ServicesProps {}

const Services: FunctionComponent<ServicesProps> = () => {
  return (
    <div className="w-full mt-[150px] flex flex-col items-center gap-y-10">
      <p className="text-7xl font-bold">My Service</p>
      <div className="lg:w-full w-[90%] flex lg:flex-row flex-col items-center justify-around gap-6 ">
        <CardService
          title="Frontend Dev"
          content="I can help you create a frontend application that is both
                visually appealing and functional, with a focus on user
                experience and performance. I have experience with a variety of
                frontend technologies, including HTML, CSS, JavaScript,
                React.js, and Next.js."
        />
        <CardService
          title="Backend Dev"
          content="I can help you create a backend system that is both scalable and
                secure, with a focus on performance and reliability. I have
                experience with a variety of backend technologies, including
                Node.js, Express, Honos.js, MySQL, MongoDB, Redis, and Firebase."
        />
        <CardService
          title="Mobile Dev"
          content="I can help you create a mobile application that is both visually
                appealing and functional, with a focus on user experience and
                performance. I have experience with a variety of frontend and
                backend technologies, including Dart, Flutter, and Firebase."
        />
      </div>
    </div>
  );
};

export default Services;
