import { motion } from "framer-motion";
import img1 from "../../assets/john-fornander-TAZoUmDqzXk-unsplash.jpg";
import img2 from "../../assets/danielle-cerullo-CQfNt66ttZM-unsplash.jpg";
import img3 from "../../assets/samuel-girven-2e4lbLTqPIo-unsplash.jpg";

export default function HeroSlider() {
  return (
    <section className="w-full bg-white py-16 px-6 md:px-20">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-10">
        {/* Texto izquierdo */}
        <motion.div
          className="md:w-1/2 text-center md:text-left"
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
        >
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
            Transforma tu cuerpo <br />
            con <span className="text-[#0D80F2]">Full Fitness</span>
          </h1>
          <p className="mt-4 text-gray-600 max-w-md text-sm md:text-base">
            Descubre nuestras clases, entrenamientos personalizados y todo lo
            que necesitas para lograr tus objetivos físicos. Vive la mejor
            experiencia fitness de tu vida.
          </p>
          <button className="mt-6 px-6 py-2 bg-[#0D80F2] hover:bg-[#1E88E5] text-white rounded-full text-sm transition">
            Comienza hoy
          </button>
        </motion.div>

        {/* Imágenes lado derecho */}
        <motion.div
          className="md:w-1/2 flex flex-col gap-6"
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
        >
          <div className="w-full h-60 rounded-xl overflow-hidden shadow-lg">
            <img src={img1} alt="Gimnasio Full Fitness" className="w-full h-full object-cover" />
          </div>
          <div className="flex gap-6">
            <div className="w-2/3 h-60 rounded-xl overflow-hidden shadow-md">
              <img src={img2} alt="Entrenamiento" className="w-full h-full object-cover" />
            </div>
            <div className="w-1/3 h-60 rounded-xl overflow-hidden shadow-md">
              <img src={img3} alt="Pesas" className="w-full h-full object-cover" />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
