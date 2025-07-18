// src/pages/Inicio.tsx
import Header from '../components/inicio/header';
import HeroSlider from '../components/inicio/hero';
import Clases from '../components/inicio/Clases';

import Merchandise from '../components/inicio/Merchandise';
import Footer from '../components/inicio/footer';

export default function Inicio() {
  return (
    <div className="text-white font-sans">
      <Header />
      <HeroSlider />
      <Clases />
      <Merchandise />
      <Footer />
    </div>
  );
}
