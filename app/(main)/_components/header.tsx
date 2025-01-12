'use client';

import { FunctionComponent } from 'react';
import Logo from './logo';
import NavDesktop from './nav-desktop';
import { useIsMobile } from '@/hooks/use-mobile';
import NavMobile from './nav-mobile';

interface HeaderProps {}

const Header: FunctionComponent<HeaderProps> = () => {
  const isMobile = useIsMobile();
  return (
    <div className="fixed top-0 right-0 left-0 w-full lg:justify-around justify-between lg:h-[75px] h-[60px] lg:px-0 px-4 flex items-center border-b">
      <Logo />
      {isMobile ? <NavMobile /> : <NavDesktop />}
    </div>
  );
};

export default Header;
