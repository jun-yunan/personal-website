import { title } from 'process';

const listNav = [
  {
    title: 'Home',
    href: '/home',
  },
  {
    title: 'About',
    href: '/about',
  },
  {
    title: 'Skills',
    href: '/skills',
  },
  {
    title: 'Portfolio',
    href: '/portfolio',
  },
  {
    title: 'Contact',
    href: '/contact',
  },
];

export default function useNav() {
  return listNav;
}
