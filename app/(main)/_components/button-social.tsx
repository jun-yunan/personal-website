import Link from 'next/link';
import { FunctionComponent } from 'react';

interface ButtonSocialProps {
  href: string;
  children: React.ReactNode;
  label?: string;
}

const ButtonSocial: FunctionComponent<ButtonSocialProps> = ({
  href,
  children,
  label,
}) => {
  return (
    <Link
      href={href}
      className="group relative flex items-center justify-center p-3 rounded-full border-[3px] border-gray-500 transition-all duration-300 hover:border-cyan-500 hover:shadow-[0_0_15px_#00bcd4] focus:outline-none"
      aria-label={label}
    >
      <span className="absolute inset-0 rounded-full bg-gradient-to-r from-cyan-500 to-blue-500 blur-xl opacity-0 group-hover:opacity-50 transition-opacity duration-300"></span>
      <span className="relative text-white">{children}</span>
    </Link>
  );
};

export default ButtonSocial;
