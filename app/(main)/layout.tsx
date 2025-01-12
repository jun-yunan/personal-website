import { FunctionComponent } from 'react';
import Header from './_components/header';

interface MainLayoutProps {
  children: React.ReactNode;
}

const MainLayout: FunctionComponent<MainLayoutProps> = ({ children }) => {
  return (
    <div className="flex flex-col w-full items-center relative">
      <Header />
      <main className="mt-[75px] w-[85%] flex flex-col items-center">
        {children}
      </main>
    </div>
  );
};

export default MainLayout;
