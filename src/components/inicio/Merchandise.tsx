import story1 from "../../assets/fullFinnes.png";
import story2 from "../../assets/gym.jfif";
import story3 from "../../assets/rumba.png";

const articuloPrincipal = {
  image: story1,
  category: "Nutrición",
  title: "Guía de alimentación para mejorar tu rendimiento en el gimnasio",
  date: "13 Ago 2024",
  timeToRead: "4 min de lectura",
  summary:
    "Descubre qué alimentos potenciarán tus entrenamientos y cómo planificar tus comidas para tener más energía y resultados visibles.",
};

const articulosLaterales = [
  {
    image: story2,
    category: "Rutinas",
    title: "5 rutinas efectivas para perder grasa corporal en 4 semanas",
    date: "09 Ago 2024",
    timeToRead: "4 min de lectura",
  },
  {
    image: story3,
    category: "Clases Grupales",
    title: "Beneficios de la rumba fitness: cardio, diversión y comunidad",
    date: "10 Ago 2024",
    timeToRead: "4 min de lectura",
  },
  {
    image: story2,
    category: "Consejos",
    title: "Errores comunes al empezar en el gimnasio (y cómo evitarlos)",
    date: "06 Ago 2024",
    timeToRead: "4 min de lectura",
  },
];

export default function LatestStories() {
  return (
    <section className="w-full bg-white py-12 px-6 md:px-16">
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-bold text-gray-900">Últimos Artículos</h2>
          <button className="border border-gray-800 px-4 py-1 rounded-full text-sm hover:bg-gray-800 hover:text-white transition">
            Ver más artículos
          </button>
        </div>

        <div className="grid md:grid-cols-3 gap-10">
          {/* Artículo Principal */}
          <div className="md:col-span-2">
            <div className="bg-gray-100 rounded-xl overflow-hidden mb-4 h-64">
              <img
                src={articuloPrincipal.image}
                alt="Artículo principal"
                className="w-full h-full object-cover"
              />
            </div>
            <p className="text-sm text-gray-500">{articuloPrincipal.category}</p>
            <h3 className="text-lg font-semibold text-gray-900 mt-1 mb-1">
              {articuloPrincipal.title}
            </h3>
            <p className="text-xs text-gray-500 mb-1">
              {articuloPrincipal.date} • {articuloPrincipal.timeToRead}
            </p>
            <p className="text-sm text-gray-600">{articuloPrincipal.summary}</p>
          </div>

          {/* Artículos Laterales */}
          <div className="flex flex-col gap-6">
            {articulosLaterales.map((story, idx) => (
              <div key={idx} className="flex gap-4">
                <div className="w-20 h-20 rounded-xl overflow-hidden bg-gray-200 flex-shrink-0">
                  <img
                    src={story.image}
                    alt={story.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <p className="text-xs text-gray-500">{story.category}</p>
                  <h4 className="text-sm font-semibold text-gray-900 leading-snug">
                    {story.title}
                  </h4>
                  <p className="text-xs text-gray-500 mt-1">
                    {story.date} • {story.timeToRead}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
