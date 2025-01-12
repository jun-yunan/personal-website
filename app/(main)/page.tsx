import About from './_components/about';
import Home from './_components/home';

export default function LandingPage() {
  return (
    <div className="flex flex-col w-full h-full">
      <Home />
      <About />
    </div>
  );
}
