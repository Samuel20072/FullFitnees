import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import img1 from "../../assets/fullFinnes.png";
import img2 from "../../assets/gym.jfif";
import img3 from "../../assets/rumba.png";

const images = [img1, img2, img3];

export default function HeroSlider() {
  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % images.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative h-[400px] max-w-6xl mx-auto rounded-xl overflow-hidden text-white">
      <AnimatePresence>
        <motion.div
          key={currentImage}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1 }}
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `url(${images[currentImage]})`,
          }}
        />
      </AnimatePresence>

      {/* Fondo oscuro para legibilidad */}
      <div className="absolute inset-0 bg-black/50 z-10" />

      {/* Contenido del slider */}
      {/* <div className="relative z-20 flex flex-col items-center justify-center h-full text-center px-4">
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-5xl font-bold mb-4"
        >
          Libera al Atleta que Llevas Dentro
        </motion.h2>
        <p className="text-gray-300 mb-6 max-w-xl">
          Estamos dedicados a ayudarte a alcanzar tus metas físicas a través del poder del fitness.
        </p>
        <div className="flex gap-4">
          <button className="bg-[#1E88E5] px-6 py-2 rounded-full text-black font-semibold">
            UNIRME AHORA
          </button>
          <button className="border border-[#1E88E5] px-6 py-2 rounded-full font-semibold">
            PRUEBA GRATUITA
          </button>
        </div>
      </div> */}
    </section>
  );
}
