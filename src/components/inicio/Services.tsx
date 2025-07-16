import { motion } from "framer-motion";
import rumba from "../../assets/rumba.png";
import funcional from "../../assets/Prueba los entrenamientos grupales, dinámicos, divertidos y económicos_.jfif";

const servicios = [
  {
    image: rumba,
    title: "Clases de Rumba",
    description: "Ejercítate al ritmo de la música con nuestras sesiones dirigidas.",
  },
  {
    image: funcional,
    title: "Entrenamiento Funcional",
    description: "Rutinas dinámicas que mejoran fuerza, resistencia y coordinación.",
  },
  {
    image: rumba,
    title: "Entrenamiento Personalizado",
    description: "Un entrenador diseña un plan adaptado a tus metas.",
  },
  {
    image: rumba,
    title: "Zona de Pesas",
    description: "Área equipada para potenciar tu masa muscular.",
  },
];

export default function Servicios() {
  return (
    <section className="w-full bg-white py-12 px-6 md:px-16">
      <div className="max-w-7xl mx-auto">
        {/* Título */}
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-3xl font-bold text-gray-900 text-center mb-12"
        >
          Nuestros Servicios
        </motion.h2>

        {/* Tarjetas de servicios */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
          {servicios.map((serv, idx) => (
            <motion.div
              key={idx}
              whileHover={{ scale: 1.05 }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: idx * 0.2 }}
              className="flex flex-col bg-white rounded-xl overflow-hidden shadow-md"
            >
              <div className="h-52 w-full bg-gray-100 overflow-hidden">
                <img
                  src={serv.image}
                  alt={serv.title}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-4">
                <h3 className="text-md font-semibold text-gray-900">
                  {serv.title}
                </h3>
                <p className="text-sm text-gray-600 mt-1">
                  {serv.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
