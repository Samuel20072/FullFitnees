// src/pages/EntrenadorDetalle.tsx
import { motion } from "framer-motion";
import { useParams } from "react-router-dom";
import Header from "../components/inicio/header";
import Footer from "../components/inicio/footer";

export default function EntrenadorDetalle() {
  const { id } = useParams(); // ID del entrenador si usas rutas dinámicas

  return (
   <>  
    <Header/>
   <section className="bg-[#111] text-white px-8 py-16 min-h-screen">
      <motion.h2
        className="text-4xl font-bold mb-4"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        Perfil del Entrenador
      </motion.h2>
      <div className="grid md:grid-cols-2 gap-8">
        <img
          src="/assets/entrenador.jpg"
          alt="Entrenador"
          className="rounded-xl w-full h-auto object-cover"
        />
        <div>
          <h3 className="text-2xl font-semibold mb-2">Laura Ríos</h3>
          <p className="text-gray-300 mb-4">
            Entrenadora certificada con más de 10 años de experiencia en
            entrenamiento funcional, Zumba, y asesorías personalizadas.
          </p>
          <ul className="list-disc ml-5 text-gray-400 space-y-2">
            <li>Especialidades: Zumba, Cardio, HIIT</li>
            <li>Idiomas: Español, Inglés</li>
            <li>Experiencia: 10+ años</li>
            <li>Contacto: laura.rios@gymfit.com</li>
          </ul>
        </div>
      </div>
    </section>
    <Footer></Footer>
   </>
    
  );
}
