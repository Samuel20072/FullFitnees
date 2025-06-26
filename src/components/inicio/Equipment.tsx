import { motion } from "framer-motion";

export default function Equipment() {
  return (
    <section className="bg-black text-white px-8 py-16 grid md:grid-cols-2 gap-6">
      <motion.img src="/assets/equipment.jpg" alt="Equipment" className="rounded-xl" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1 }} />
      <div className="flex flex-col justify-center">
        <h3 className="text-3xl font-bold mb-4">Comfortable Gym</h3>
        <p className="text-gray-400">Our facility is made to elevate your experience. Fully equipped with the latest technology.</p>
      </div>
    </section>
  );
}