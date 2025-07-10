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
      <div className="  min-h-screen flex items-center justify-center">
        <p>Clase no encontrada.</p>
      </div>
    );
  }

  return (
    <>
      <Header />
      <section className=" text- px-6 py-16 min-h-screen max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          <div className="mb-10">
            <motion.h2
              className="text-3xl md:text-4xl font-bold mb-2"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
              {clase.name}
            </motion.h2>
            <motion.p
              className="text-gray-400 text-sm md:text-base"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
            >
              {clase.description}
            </motion.p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
            <motion.img
              src={clase.image}
              alt={clase.namewhite}
              className="rounded-xl w-full h-auto object-cover"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
            />

            <motion.div
              className="space-y-4 text-gray-300 text-sm md:text-base"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8 }}
            >
              <div>
                <h4 className = " font-semibold mb-2">Detalles de la Clase</h4>
                <ul className="space-y-1 border border-gray-700 rounded-lg p-4">
                  <li><strong>Duración:</strong> {clase.duration}</li>
                  <li><strong>Horarios:</strong> {clase.schedule}</li>
                  <li><strong>Nivel:</strong> {clase.level}</li>
                  <li><strong>Entrenador:</strong> {clase.trainer}</li>
                </ul>
              </div>

              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => navigate(-1)}
                className="mt-4 bg-[#1E88E5] text-black font-semibold px-6 py-2 rounded-full shadow-md hover:bg-[#1874c2] transition"
              >
                Volver
              </motion.button>
            </motion.div>
          </div>
        </motion.div>
      </section>
      <Footer />
    </>
  );
}
