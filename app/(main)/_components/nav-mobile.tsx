import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Separator } from '@/components/ui/separator';
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from '@/components/ui/sheet';
import useNav from '@/hooks/useNav';
import { Menu } from 'lucide-react';
import Link from 'next/link';
import { FunctionComponent } from 'react';

interface NavMobileProps {}

const NavMobile: FunctionComponent<NavMobileProps> = () => {
  const listNav = useNav();

  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant="ghost" size="icon">
          <Menu />
        </Button>
      </SheetTrigger>
      <SheetContent className="bg-gradient-to-br cursor-pointer from-cyan-800 via-cyan-900 to-gray-900">
        <SheetHeader>
          <SheetTitle>NAKIET</SheetTitle>
        </SheetHeader>
        <Separator className="my-4" />
        <div className="w-full flex flex-col gap-y-4 items-start">
          {listNav.map((nav, index) => (
            <Link className="text-lg font-semibold" href={nav.href} key={index}>
              {nav.title}
            </Link>
          ))}
        </div>
      </SheetContent>
    </Sheet>
  );
};

export default NavMobile;
