// src/components/Merchandise.tsx
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const items = [
  {
    id: 1,
    name: "Protein Boost",
    image: "/assets/shake.jpg",
    video: "/videos/shake.mp4", // opcional si quieres mostrar video
    description: "Fuel your workouts with our premium protein shakes.",
  },
  {
    id: 2,
    name: "Gear Up",
    image: "/assets/bag.jpg",
    video: "/videos/bag.mp4",
    description: "Carry your essentials in style with our durable gym bags.",
  },
  {
    id: 3,
    name: "Flex Bands",
    image: "/assets/bands.jpg",
    video: "/videos/bands.mp4",
    description: "Enhance your training with our versatile resistance bands.",
  },
];

export default function Merchandise() {
  const navigate = useNavigate();
  const [hoveredId, setHoveredId] = useState<number | null>(null);

  const handleClick = (item: any) => {
    navigate(`/product/${item.id}`, { state: item });
  };

  return (
    <section className="text-white px-6 py-16 max-w-7xl mx-auto">
      <h3 className="text-2xl font-semibold mb-10">Featured Products</h3>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {items.map((item) => (
          <div
            key={item.id}
            onClick={() => handleClick(item)}
            onMouseEnter={() => setHoveredId(item.id)}
            onMouseLeave={() => setHoveredId(null)}
            className="cursor-pointer relative rounded-xl overflow-hidden"
          >
            <AnimatePresence mode="wait">
              {hoveredId === item.id ? (
                <motion.video
                  key="video"
                  src={item.video}
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
                  src={item.image}
                  alt={item.name}
                  className="w-full h-40 object-cover rounded-xl"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                />
              )}
            </AnimatePresence>

            <div className="mt-4">
              <p className="font-bold">{item.name}</p>
              <p className="text-gray-400 text-sm">{item.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
