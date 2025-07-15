// src/components/Services.tsx
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const services = [
  {
    id: 1,
    name: "Yoga Flow",
    image: "/assets/yoga.jpg",
    video: "/videos/yoga.mp4",
    description: "Find your inner peace with our yoga sessions.",
  },
  {
    id: 2,
    name: "Spin Revolution",
    image: "/assets/spin.jpg",
    video: "/videos/spin.mp4",
    description: "Experience high-intensity cardio with our spin classes.",
  },
  {
    id: 3,
    name: "Powerlifting",
    image: "/assets/powerlifting.jpg",
    video: "/videos/powerlifting.mp4",
    description: "Build strength and power with our weightlifting program.",
  },
];

export default function Services() {
  const navigate = useNavigate();
  const [hoveredId, setHoveredId] = useState<number | null>(null);

  const handleClick = (clase: any) => {
    navigate(`/clase/${clase.id}`, { state: clase });
  };

  return (
    <section className="text-white px-6 py-16 max-w-7xl mx-auto">
      <h3 className="text-2xl font-semibold mb-10">Our Classes</h3>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {services.map((clase) => (
          <div
            key={clase.id}
            onClick={() => handleClick(clase)}
            onMouseEnter={() => setHoveredId(clase.id)}
            onMouseLeave={() => setHoveredId(null)}
            className="cursor-pointer relative rounded-xl overflow-hidden"
          >
            <AnimatePresence mode="wait">
              {hoveredId === clase.id ? (
                <motion.video
                  key="video"
                  src={clase.video}
                  autoPlay
                  loop
                  muted
                  className="w-full h-40 object-cover rounded-xl"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                />
              ) : (
                <motion.img
                  key="image"
                  src={clase.image}
                  alt={clase.name}
                  className="w-full h-40 object-cover rounded-xl"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                />
              )}
            </AnimatePresence>

            <div className="mt-4">
              <p className="font-bold">{clase.name}</p>
              <p className="text-sm text-gray-400">{clase.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
