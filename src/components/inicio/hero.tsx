import { motion } from "framer-motion";
import gym from "../../assets/gym.jfif"; // Asegúrate que la ruta es correcta

export default function Hero() {
  return (
    <section
      className="relative bg-cover bg-center text-white px-8 py-32 text-center"
      style={{
        backgroundImage: `url(${gym})`,
      }}
    >
      {/* Fondo oscuro semi-transparente para legibilidad */}
      <div className="absolute inset-0 z-0"></div>

      {/* Contenido encima del fondo */}
      <div className="relative z-10 max-w-4xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-5xl font-bold mb-4"
        >
          Libera al Atleta que Llevas Dentro
        </motion.h2>
        <p className="text-gray-300 mb-6">
          Estamos dedicados a ayudarte a alcanzar tus metas físicas a través del poder del fitness.
        </p>
        <div className="flex justify-center gap-4">
          <button className="bg-[#1E88E5] px-6 py-2 rounded-full text-black font-semibold">
            UNIRME AHORA
          </button>
          <button className="border border-[#1E88E5] px-6 py-2 rounded-full font-semibold">
            PRUEBA GRATUITA
          </button>
        </div>
      </div>
    </section>
  );
}
