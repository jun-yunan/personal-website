import { FunctionComponent } from 'react';
import Image from 'next/image';
import CardService from './card-service';

interface AboutProps {}

const About: FunctionComponent<AboutProps> = () => {
  return (
    <div id="about" className="w-full flex flex-col">
      <div className="w-full mt-[150px] flex items-center justify-around">
        <div className="relative w-[450px] h-[450px] rounded-full flex items-center justify-center">
          <div className="absolute inset-0 blur-[30px] rounded-full bg-gradient-to-r from-cyan-400 to-blue-500 opacity-75"></div>

          <div className="w-[420px] h-[420px] bg-white rounded-full flex items-center justify-center">
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
        </div>
        <div className="max-w-[40%] flex flex-col items-start gap-y-6">
          <p className="text-7xl font-bold">About Me</p>
          <p className="text-5xl font-semibold">Nguyen Anh Kiet</p>
          <p className="text-lg text-wrap break-words whitespace-pre-wrap ">
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
        </div>
      </div>
      <div className="w-full pt-[150px] flex flex-col items-center gap-y-10">
        <p className="text-7xl font-bold">My Service</p>
        <div className="w-full flex items-center justify-around gap-x-6">
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
    </div>
  );
};

export default About;
