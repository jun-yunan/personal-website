import useNav from '@/hooks/useNav';
import Link from 'next/link';
import { FunctionComponent } from 'react';

interface NavDesktopProps {}

const NavDesktop: FunctionComponent<NavDesktopProps> = () => {
  const listNav = useNav();

  return (
    <div className="flex items-center gap-x-6">
      {listNav.map((nav) => (
        <Link
          href={''}
          key={nav.title}
          className="text-lg font-semibold p-2 rounded-lg"
        >
          {nav.title}
        </Link>
      ))}
    </div>
  );
};

export default NavDesktop;
