import { motion } from "framer-motion";

const services = ["Zumba", "Yoga", "Boxing", "Martial Arts"];

export default function Services() {
  return (
    <section className="bg-[#111] text-white px-8 py-16">
      <h3 className="text-3xl font-bold mb-8">Transform Your Fitness Journey</h3>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
        {services.map((service, idx) => (
          <motion.div
            key={idx}
            whileHover={{ scale: 1.05 }}
            className="bg-black p-6 rounded-xl text-center border border-green-500"
          >
            <img src={`/assets/${service.toLowerCase()}.jpg`} alt={service} className="h-40 object-cover rounded mb-4" />
            <p>{service}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}