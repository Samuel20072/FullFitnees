// src/pages/Inicio.tsx
import Header from '../components/inicio/header';
import HeroSlider from '../components/inicio/hero';
import Services from '../components/inicio/Services';

import Merchandise from '../components/inicio/Merchandise';
import Footer from '../components/inicio/footer';

export default function Inicio() {
  return (
    <div className="bg-[#121417] text-white font-sans">
      <Header />
      <HeroSlider />
      <Services />
      <Merchandise />
      <Footer />
    </div>
  );
}
