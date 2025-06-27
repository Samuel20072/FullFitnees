// src/pages/ClaseDetalle.tsx
import { motion } from "framer-motion";
import { useParams } from "react-router-dom";
import Header from "../components/inicio/header";
import Footer from "../components/inicio/footer";
export default function ClaseDetalle() {
  const { id } = useParams(); // ID de la clase si estás usando rutas dinámicas

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
        Detalle de la Clase
      </motion.h2>
      <p className="text-gray-400 mb-6">
        Aquí encontrarás toda la información sobre la clase seleccionada.
      </p>

      <div className="grid md:grid-cols-2 gap-8">
        <img
          src="/assets/zumba.jpg" // puedes cambiar esto por props o data
          alt="Clase"
          className="rounded-xl w-full h-auto object-cover"
        />
        <div>
          <h3 className="text-2xl font-semibold mb-2">Zumba Intensivo</h3>
          <p className="text-gray-300 mb-4">
            Una clase llena de energía que mezcla baile y cardio para ayudarte
            a mantenerte en forma mientras te diviertes.
          </p>
          <ul className="list-disc ml-5 text-gray-400 space-y-2">
            <li>Duración: 60 minutos</li>
            <li>Horarios: Lunes, Miércoles, Viernes</li>
            <li>Nivel: Todos los niveles</li>
            <li>Entrenador: Laura Ríos</li>
          </ul>
        </div>
      </div>
    </section>
    <Footer></Footer>
    </>
   
  );
}
