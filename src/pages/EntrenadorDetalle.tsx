// src/pages/EntrenadorDetalle.tsx
import { useParams, useNavigate } from "react-router-dom";
import { useEntrenadores } from "../contexts/EntrenadorContext";
import Header from "../components/inicio/header";
import Footer from "../components/inicio/footer";
import { motion } from "framer-motion";

export default function EntrenadorDetalle() {
  const { id } = useParams<{ id: string }>();
  const { entrenadores } = useEntrenadores();
  const navigate = useNavigate();

  const entrenador = entrenadores.find((e) => e.id === Number(id));

  if (!entrenador) {
    return (
      <>
        <Header />
        <div className="min-h-screen flex items-center justify-center text-white bg-black">
          <p className="text-lg">Entrenador no encontrado</p>
        </div>
        <Footer />
      </>
    );
  }

  return (
    <>
      <Header />
      <section className="bg-[#111] text-white px-6 md:px-16 py-16 min-h-screen">
        <motion.button
          onClick={() => navigate(-1)}
          whileHover={{ scale: 1.05 }}
          className="text-sm text-blue-400 mb-6 hover:underline"
        >
          ← Volver
        </motion.button>

        <motion.h2
          className="text-4xl font-bold mb-6 text-center md:text-left"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          {entrenador.nombre}
        </motion.h2>

        <div className="grid md:grid-cols-2 gap-10 items-start">
          {/* Foto */}
          <motion.img
            src={entrenador.foto}
            alt={entrenador.nombre}
            className="rounded-xl w-full h-auto object-cover shadow-md"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
          />

          {/* Detalles */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            <p className="text-gray-300 mb-6">{entrenador.descripcion}</p>

            <ul className="space-y-3 text-gray-300">
              <li>
                <span className="text-white font-semibold">Especialidad:</span>{" "}
                {entrenador.especialidad}
              </li>
              <li>
                <span className="text-white font-semibold">Experiencia:</span>{" "}
                {entrenador.experiencia}
              </li>
              {entrenador.idiomas && (
                <li>
                  <span className="text-white font-semibold">Idiomas:</span>{" "}
                  {entrenador.idiomas}
                </li>
              )}
              {entrenador.contacto && (
                <li>
                  <span className="text-white font-semibold">Contacto:</span>{" "}
                  {entrenador.contacto}
                </li>
              )}
            </ul>
          </motion.div>
        </div>
      </section>
      <Footer />
    </>
  );
}
