// src/pages/ClaseDetalle.tsx
import { motion } from "framer-motion";
import { useLocation, useNavigate } from "react-router-dom";
import Header from "../components/inicio/header";
import Footer from "../components/inicio/footer";

export default function ClaseDetalle() {
  const location = useLocation();
  const navigate = useNavigate();
  const clase = location.state;

  if (!clase) {
    return (
      <div className="bg-black text-white min-h-screen flex items-center justify-center">
        <p>Clase no encontrada.</p>
      </div>
    );
  }

  return (
    <>
      <Header />
      <section className="bg-black text-white px-8 py-16 min-h-screen">
        <motion.h2
          className="text-4xl font-bold mb-4"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          {clase.name}
        </motion.h2>
        <p className="text-gray-400 mb-6">{clase.description}</p>

        <div className="grid md:grid-cols-2 gap-8">
          <img
            src={clase.image}
            alt={clase.name}
            className="rounded-xl w-full h-auto object-cover"
          />
          <div>
            <ul className="list-disc ml-5 text-gray-400 space-y-2">
              <li>Duración: {clase.duration}</li>
              <li>Horarios: {clase.schedule}</li>
              <li>Nivel: {clase.level}</li>
              <li>Entrenador: {clase.trainer}</li>
            </ul>
            <button
              onClick={() => navigate(-1)}
              className="mt-6 bg-[#1E88E5] text-black px-4 py-2 rounded-full font-semibold"
            >
              Volver
            </button>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}
