// src/components/HeroSlider.tsx
import img1 from "../../assets/fullFinnes.png";
import img2 from "../../assets/gym.jfif";
import img3 from "../../assets/rumba.png";

export default function HeroSlider() {
  return (
    <section className="w-full bg-white py-12 px-6 md:px-16">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-10">
        {/* Texto lado izquierdo */}
        <div className="md:w-1/2 text-center md:text-left">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
            Discover the <br />
            <span className="text-gray-800">World's </span>
            <span className="text-gray-500">Hidden</span> <br />
            Wonders
          </h1>
          <p className="mt-4 text-gray-600 max-w-md text-sm md:text-base">
            Find the unknown marvels and hidden gems that ignite unforgettable experiences. From rare encounters to remarkable destinations, we help you uncover the secrets that turn everyday trips into grand stories.
          </p>
          <button className="mt-6 px-6 py-2 bg-black text-white rounded-full text-sm hover:bg-gray-800">
            Plan your trip
          </button>
        </div>

        {/* Imágenes lado derecho */}
        <div className="md:w-1/2 flex flex-col items-center md:items-end gap-4">
          <div className="w-56 h-80 bg-gray-200 rounded-xl overflow-hidden shadow-md">
            <img src={img1} alt="Lugar 1" className="w-full h-full object-cover" />
          </div>
          <div className="flex gap-4">
            <div className="w-36 h-48 bg-gray-200 rounded-xl overflow-hidden shadow-md">
              <img src={img2} alt="Lugar 2" className="w-full h-full object-cover" />
            </div>
            <div className="w-24 h-24 bg-gray-200 rounded-xl overflow-hidden shadow-md">
              <img src={img3} alt="Lugar 3" className="w-full h-full object-cover" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
