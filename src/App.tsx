import { useState } from 'react';
import { Hero } from './components/Hero';
import { Services } from './components/Services';
import { About } from './components/About';
import { WhyChooseUs } from './components/WhyChooseUs';
import { Contact } from './components/Contact';
import { MobileNav } from './components/MobileNav';

export default function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-white">
      <MobileNav isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />
      <Hero />
      <Services />
      <About />
      <WhyChooseUs />
      <Contact />
    </div>
  );
}
