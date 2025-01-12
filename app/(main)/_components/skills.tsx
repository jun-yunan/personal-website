import { FunctionComponent } from 'react';
import Image from 'next/image';

interface SkillsProps {}

const Skills: FunctionComponent<SkillsProps> = () => {
  return (
    <div className="mt-[150px] w-full flex flex-col items-center gap-y-10">
      <p className="text-7xl font-bold">My Skills</p>
      <div className="relative w-full flex items-center flex-wrap gap-6">
        <Image
          alt=""
          width={100}
          height={100}
          className="lg:w-[100px] lg:h-[100px] size-12"
          src="/HTML5.svg"
        />
        <Image
          alt=""
          width={100}
          height={100}
          className="lg:w-[100px] lg:h-[100px] size-12"
          src="/CSS3.svg"
        />
        <Image
          alt=""
          width={100}
          height={100}
          className="lg:w-[100px] lg:h-[100px] size-12"
          src="/JavaScript.svg"
        />
        <Image
          alt=""
          width={100}
          height={100}
          className="lg:w-[100px] lg:h-[100px] size-12"
          src="/TypeScript.svg"
        />
        <Image
          alt=""
          width={100}
          height={100}
          className="lg:w-[100px] lg:h-[100px] size-12"
          src="/React.svg"
        />
        <Image
          alt=""
          width={100}
          height={100}
          className="lg:w-[100px] lg:h-[100px] size-12"
          src="/Next.js.svg"
        />
        <Image
          alt=""
          width={100}
          height={100}
          className="lg:w-[100px] lg:h-[100px] size-12"
          src="/Tailwind CSS.svg"
        />
        <Image
          alt=""
          width={100}
          height={100}
          className="lg:w-[100px] lg:h-[100px] size-12"
          src="/Node.js.svg"
        />
        <Image
          alt=""
          width={100}
          height={100}
          className="lg:w-[100px] lg:h-[100px] size-12"
          src="/Bun.svg"
        />
        <Image
          alt=""
          width={100}
          height={100}
          className="lg:w-[100px] lg:h-[100px] size-12"
          src="/Express.svg"
        />
        <Image
          alt=""
          width={100}
          height={100}
          className="lg:w-[100px] lg:h-[100px] size-12"
          src="/MongoDB.svg"
        />
        <Image
          alt=""
          width={100}
          height={100}
          className="lg:w-[100px] lg:h-[100px] size-12"
          src="/MySQL.svg"
        />
        <Image
          alt=""
          width={100}
          height={100}
          className="lg:w-[100px] lg:h-[100px] size-12"
          src="/Redis.svg"
        />
        <Image
          alt=""
          width={100}
          height={100}
          className="lg:w-[100px] lg:h-[100px] size-12"
          src="/Docker.svg"
        />
        <Image
          alt=""
          width={100}
          height={100}
          className="lg:w-[100px] lg:h-[100px] size-12"
          src="/Git.svg"
        />
        <Image
          alt=""
          width={100}
          height={100}
          className="lg:w-[100px] lg:h-[100px] size-12"
          src="/Dart.svg"
        />
        <Image
          alt=""
          width={100}
          height={100}
          className="lg:w-[100px] lg:h-[100px] size-12"
          src="/Flutter.svg"
        />
        <Image
          alt=""
          width={100}
          height={100}
          className="lg:w-[100px] lg:h-[100px] size-12"
          src="/Firebase.svg"
        />
      </div>
    </div>
  );
};

export default Skills;
