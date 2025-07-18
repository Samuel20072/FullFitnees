import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { useClases } from "../../contexts/ClaseContext"; // ✅ aquí importas el hook

export default function Clases() {
  const navigate = useNavigate();
  const { clases } = useClases(); // ✅ Usas las clases del contexto

  return (
    <section className="w-full bg-white py-12 px-6 md:px-16">
      <div className="max-w-7xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-3xl font-bold text-gray-900 text-center mb-12"
        >
          Nuestras clases
        </motion.h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
          {clases.map((clase, idx) => (
            <motion.div
              key={clase.id}
              whileHover={{ scale: 1.05 }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: idx * 0.2 }}
              className="cursor-pointer flex flex-col bg-white rounded-xl overflow-hidden shadow-md"
              onClick={() => navigate(`/clases/${clase.id}`)}
            >
              <div className="h-52 w-full bg-gray-100 overflow-hidden">
                <img
                  src={clase.image}
                  alt={clase.title}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-4">
                <h3 className="text-md font-semibold text-gray-900">
                  {clase.title}
                </h3>
                <p className="text-sm text-gray-600 mt-1">
                  {clase.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
