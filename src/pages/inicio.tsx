// src/pages/Inicio.tsx
import Header from '../components/inicio/header';
import Hero from '../components/inicio/hero';
import Services from '../components/inicio/Services';
import Equipment from '../components/inicio/Equipment';
import Location from '../components/inicio/Location';
import Merchandise from '../components/inicio/Merchandise';
import Membership from '../components/inicio/Membership';
import Footer from '../components/inicio/footer';

export default function Inicio() {
  return (
    <div className="bg-black text-white font-sans">
      <Header />
      <Hero />
      <Services />
      <Equipment />
      <Location />
      <Merchandise />
      <Membership />
      <Footer />
    </div>
  );
}
