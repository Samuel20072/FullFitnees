import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="relative bg-black text-white px-8 py-20 text-center">
      <motion.h2 initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1 }} className="text-5xl font-bold mb-4">
        Unleash Your Inner Athlete
      </motion.h2>
      <p className="text-gray-400 mb-6">We are dedicated to helping you achieve your body goals through the power of fitness.</p>
      <div className="flex justify-center gap-4">
        <button className="bg-[#1E88E5] px-6 py-2 rounded-full text-black font-semibold">JOIN NOW</button>
        <button className="border border-[#1E88E5] px-6 py-2 rounded-full font-semibold">JOIN FREE TRIAL</button>
      </div>
    </section>
  );
}