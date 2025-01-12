'use client';

import { FunctionComponent } from 'react';
import Logo from './logo';
import NavDesktop from './nav-desktop';

interface HeaderProps {}

const Header: FunctionComponent<HeaderProps> = () => {
  return (
    <div className="fixed top-0 right-0 left-0 w-full justify-around h-[75px] flex items-center border-b">
      <Logo />
      <NavDesktop />
    </div>
  );
};

export default Header;
