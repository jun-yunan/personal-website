import { FunctionComponent } from 'react';
import Header from './_components/header';
import Footer from './_components/footer';
import { ChevronUp } from 'lucide-react';

interface MainLayoutProps {
  children: React.ReactNode;
}

const MainLayout: FunctionComponent<MainLayoutProps> = ({ children }) => {
  return (
    <div className="relative flex flex-col w-full items-center overflow-x-hidden">
      <Header />
      <main className="mt-[75px] lg:w-[85%] w-full flex flex-col items-center">
        {children}
      </main>
      <Footer />
      <div className="fixed size-16 border-2 bottom-10 right-10 flex items-center justify-center rounded-lg cursor-pointer">
        <ChevronUp className="w-10 h-10" />
      </div>
    </div>
  );
};

export default MainLayout;
