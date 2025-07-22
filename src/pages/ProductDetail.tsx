// src/pages/ProductDetail.tsx
import { useParams, useNavigate } from "react-router-dom";
import { useProductos } from "../contexts/ProductoContext";
import { motion } from "framer-motion";
import Header from "../components/inicio/header";
import Footer from "../components/inicio/footer";

export default function ProductDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const { productos } = useProductos();

  const producto = productos.find((p) => p.id === Number(id));

  if (!producto) {
    return (
      <div className="min-h-screen flex flex-col justify-center items-center bg-white">
        <p className="text-gray-600 text-xl">Producto no encontrado 😢</p>
        <button
          onClick={() => navigate(-1)}
          className="mt-4 px-4 py-2 bg-indigo-600 text-white rounded hover:bg-indigo-700 transition"
        >
          Volver
        </button>
      </div>
    );
  }

  return (
    <>
      <Header />
      <main className="bg-white min-h-screen py-12 px-6 md:px-16">
        <div className="max-w-6xl mx-auto">
          <button
            onClick={() => navigate(-1)}
            className="text-[#0D80F2]  mb-6 hover:underline text-sm"
          >
            ← Volver a productos
          </button>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            {/* Imagen */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4 }}
              className="rounded-lg overflow-hidden shadow-lg"
            >
              <img
                src={producto.image}
                alt={producto.name}
                className="w-full h-96 object-cover"
              />
            </motion.div>

            {/* Detalles */}
            <motion.div
              initial={{ x: 50, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.5 }}
              className="flex flex-col justify-between"
            >
              <div>
                <h1 className="text-3xl font-bold text-gray-900 mb-2">
                  {producto.name}
                </h1>
                <p className="text-sm text-gray-500 mb-6">{producto.category}</p>
                <p className="text-lg text-green-600 font-semibold mb-4">{producto.price}</p>
                <p className="text-gray-700 leading-relaxed mb-6">
                  {producto.summary || "Este producto no tiene descripción."}
                </p>
              </div>

              <button className="mt-8 bg-[#0D80F2] hover:bg-[#1E88E5] text-white text-sm px-5 py-2 rounded transition w-fit">
                Agregar al carrito
              </button>
            </motion.div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
