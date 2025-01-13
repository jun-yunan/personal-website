import { FunctionComponent } from 'react';

interface FooterProps {}

const Footer: FunctionComponent<FooterProps> = () => {
  return (
    <footer className="w-full h-[75px] mt-[50px] flex items-center justify-center bg-cyan-800 text-white">
      <p className="text-xl font-semibold">Developed by Nguyen Anh Kiet</p>
    </footer>
  );
};

export default Footer;
