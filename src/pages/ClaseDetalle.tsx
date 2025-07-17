import { useParams } from "react-router-dom";
import { useClases } from "../context/ClaseContext";
import Header from "../components/inicio/header";
import Footer from "../components/inicio/footer";

export default function ClaseDetalle() {
  const { id } = useParams();
  const { clases } = useClases();
  const clase = clases.find((c) => c.id === parseInt(id || ""));

  if (!clase) {
    return (
      <>
        <Header />
        <div className="min-h-screen flex items-center justify-center bg-white">
          <h1 className="text-2xl font-bold text-red-600">
            Clase no encontrada
          </h1>
        </div>
        <Footer />
      </>
    );
  }

  return (
    <>
      <Header />

      <main className="min-h-screen bg-gray-100 py-10 px-4 md:px-10">
        <div className="max-w-5xl mx-auto bg-white shadow-lg rounded-lg overflow-hidden">
          {/* Imagen principal */}
          <img
            src={clase.image}
            alt={clase.title}
            className="w-full h-96 object-cover"
          />

          {/* Contenido de la clase */}
          <div className="p-6 md:p-10">
            <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              {clase.title}
            </h1>

            <div className="flex flex-col sm:flex-row sm:items-center gap-4 mb-6 text-gray-600">
              <p>
                <strong>📅 Fecha:</strong> {clase.fecha}
              </p>
              <p>
                <strong>⏰ Hora:</strong> {clase.hora}
              </p>
            </div>

            <p className="text-lg text-gray-700 leading-relaxed mb-8">
              {clase.description}
            </p>

            {/* Lista de videos */}
            {clase.videos.length > 0 && (
              <div>
                <h2 className="text-xl font-semibold text-gray-800 mb-2">
                  🎥 Videos relacionados
                </h2>
                <ul className="list-disc pl-6 text-blue-600">
                  {clase.videos.map((url, i) => (
                    <li key={i}>
                      <a
                        href={url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="underline hover:text-blue-800"
                      >
                        Ver video {i + 1}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        </div>
      </main>

      <Footer />
    </>
  );
}
