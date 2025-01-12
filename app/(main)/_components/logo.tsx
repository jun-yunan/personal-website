import { FunctionComponent } from 'react';

interface LogoProps {}

const Logo: FunctionComponent<LogoProps> = () => {
  return (
    <div className="flex items-start justify-center">
      <p className="text-2xl font-bold animate-pulse">NAKIET</p>
    </div>
  );
};

export default Logo;
