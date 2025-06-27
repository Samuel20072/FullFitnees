import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="relative bg-black text-white px-8 py-20 text-center">
      <motion.h2
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="text-5xl font-bold mb-4"
      >
        Libera al Atleta que Llevas Dentro
      </motion.h2>
      <p className="text-gray-400 mb-6">
        Estamos dedicados a ayudarte a alcanzar tus metas físicas a través del poder del fitness.
      </p>
      <div className="flex justify-center gap-4 mb-8">
        <button className="bg-[#1E88E5] px-6 py-2 rounded-full text-black font-semibold">
          UNIRME AHORA
        </button>
        <button className="border border-[#1E88E5] px-6 py-2 rounded-full font-semibold">
          PRUEBA GRATUITA
        </button>
      </div>
      <img
        src="https://images.unsplash.com/photo-1571019613914-85f342c9dbad"
        alt="Gimnasio"
        className="mx-auto rounded-xl shadow-lg max-w-3xl"
      />
    </section>
  );
}
