import { FunctionComponent } from 'react';
import Header from './_components/header';

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
    </div>
  );
};

export default MainLayout;
