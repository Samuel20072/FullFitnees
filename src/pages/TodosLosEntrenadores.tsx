import { useEntrenadores } from "../contexts/EntrenadorContext";
import Header from "../components/inicio/header";
import Footer from "../components/inicio/footer";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

export default function TodosLosEntrenadores() {
  const { entrenadores } = useEntrenadores();

  return (
    <>
      <Header />

      <section className="bg-white w-full py-12 px-6 md:px-16 min-h-screen">
        <div className="max-w-7xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-3xl font-bold text-gray-900 mb-10 text-center"
          >
            Conoce a nuestros entrenadores
          </motion.h2>

          {entrenadores.length === 0 ? (
            <p className="text-center text-gray-500">
              No hay entrenadores disponibles.
            </p>
          ) : (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8"
            >
              {entrenadores.map((entrenador, index) => (
                <Link
                  key={entrenador.id}
                  to={`/entrenadores/${entrenador.id}`}
                >
                  <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: index * 0.05 }}
                    className="bg-white border border-gray-200 rounded-xl shadow hover:shadow-lg transition duration-300 overflow-hidden hover:-translate-y-1"
                  >
                    <img
                      src={entrenador.foto}
                      alt={entrenador.nombre}
                      className="w-full h-48 object-cover"
                    />
                    <div className="p-4">
                      <h3 className="text-lg font-semibold text-gray-900">
                        {entrenador.nombre}
                      </h3>
                      <p className="text-sm text-gray-600 mb-1">
                        Especialidad: {entrenador.especialidad}
                      </p>
                      <p className="text-sm text-gray-500">
                        Experiencia: {entrenador.experiencia}
                      </p>
                      {entrenador.descripcion && (
                        <p className="text-sm text-gray-600 mt-2 line-clamp-2">
                          {entrenador.descripcion}
                        </p>
                      )}
                    </div>
                  </motion.div>
                </Link>
              ))}
            </motion.div>
          )}
        </div>
      </section>

      <Footer />
    </>
  );
}
