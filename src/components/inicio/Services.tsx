// src/components/Services.tsx
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import rumba from "../../assets/rumba.png";

const services = [
  {
    id: 1,
    name: "Zumba",
    image: rumba,
    description: "Clase de Rumba terapia llena de ritmo y energía.",
    duration: "60 minutos",
    schedule: "Lunes, Miércoles, Viernes",
    level: "Todos los niveles",
    trainer: "Laura Ríos",
  },
  {
    id: 2,
    name: "Yoga",
    image: "/assets/yoga.jpg", // Asegúrate que esta imagen esté en la carpeta 'public/assets'
    description: "Clase de Yoga para mejorar tu flexibilidad y concentración.",
    duration: "45 minutos",
    schedule: "Martes y Jueves",
    level: "Principiante",
    trainer: "Carlos Méndez",
  },
  {
    id: 3,
    name: "Boxing",
    image: "/assets/boxing.jpg",
    description: "Entrenamiento de boxeo para aumentar fuerza y resistencia.",
    duration: "50 minutos",
    schedule: "Lunes a Viernes",
    level: "Intermedio",
    trainer: "Ana Torres",
  },
  {
    id: 4,
    name: "Martial Arts",
    image: "/assets/martial arts.jpg", // Ojo: nombres de archivo con espacios pueden dar error
    description: "Técnicas de artes marciales para defensa personal.",
    duration: "70 minutos",
    schedule: "Miércoles y Sábado",
    level: "Avanzado",
    trainer: "Sensei Jiménez",
  },
];

export default function Services() {
  const navigate = useNavigate();

  const handleClick = (clase: any) => {
    navigate(`/clase/${clase.id}`, { state: clase });
  };

  return (
    <section className="bg-[#111] text-white px-8 py-16">
      <h3 className="text-3xl font-bold mb-8">Transform Your Fitness Journey</h3>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
        {services.map((clase) => (
          <motion.div
            key={clase.id}
            whileHover={{ scale: 1.05 }}
            className="bg-black p-6 rounded-xl text-center border border-[#1E88E5] cursor-pointer"
            onClick={() => handleClick(clase)}
          >
            <img
              src={clase.image}
              alt={clase.name}
              className="h-40 w-full object-cover rounded mb-4"
            />
            <p>{clase.name}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
