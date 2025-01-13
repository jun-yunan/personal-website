import { FunctionComponent } from 'react';
import ButtonSocial from './button-social';
import { Facebook, Instagram, Linkedin, Twitter } from 'lucide-react';

interface SocialsProps {}

const Socials: FunctionComponent<SocialsProps> = () => {
  return (
    <div className="flex items-center gap-x-4 mt-4">
      <ButtonSocial href="https://instagram.com">
        <Instagram className="text-white hover:text-cyan-400 transition-colors" />
      </ButtonSocial>
      <ButtonSocial href="https://www.facebook.com/nguyen.anh.kiet.870764">
        <Facebook className="text-white hover:text-cyan-400 transition-colors" />
      </ButtonSocial>
      <ButtonSocial href="https://linkedin.com">
        <Linkedin className="text-white hover:text-cyan-400 transition-colors" />
      </ButtonSocial>
      <ButtonSocial href="https://twitter.com">
        <Twitter className="text-white hover:text-cyan-400 transition-colors" />
      </ButtonSocial>
    </div>
  );
};

export default Socials;
