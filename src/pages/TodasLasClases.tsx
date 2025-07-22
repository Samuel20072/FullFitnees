import { useClases } from "../contexts/ClaseContext";
import Header from "../components/inicio/header";
import Footer from "../components/inicio/footer";
import { motion } from "framer-motion";

export default function TodasLasClases() {
  const { clases } = useClases();

  return (
    <>
      <Header />

      <section className="bg-white py-12 px-6 md:px-16 min-h-screen">
        <div className="max-w-7xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-3xl font-bold text-center text-gray-900 mb-10"
          >
            Todas las Clases
          </motion.h2>

          {clases.length === 0 ? (
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center text-gray-500"
            >
              No hay clases disponibles.
            </motion.p>
          ) : (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
            >
              {clases.map((clase, index) => (
                <motion.div
                  key={clase.id}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: index * 0.05 }}
                  className="bg-white border border-gray-200 rounded-xl shadow-md overflow-hidden hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
                >
                  <img
                    src={clase.image}
                    alt={clase.title}
                    className="w-full h-48 object-cover"
                  />
                  <div className="p-5">
                    <p className="text-sm text-gray-500">{clase.fecha} | {clase.hora}</p>
                    <h3 className="text-xl font-semibold text-gray-800 mt-2">
                      {clase.title}
                    </h3>
                    <p className="text-sm text-gray-600 mt-1 line-clamp-2">
                      {clase.description}
                    </p>
                    <button className="mt-4 w-full text-sm bg-[#0D80F2] text-white py-2 rounded-md hover:bg-[#1E88E5] transition">
                      Ver Detalles
                    </button>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          )}
        </div>
      </section>

      <Footer />
    </>
  );
}
