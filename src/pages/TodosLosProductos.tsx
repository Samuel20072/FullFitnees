import { useProductos } from "../contexts/ProductoContext";
import Header from "../components/inicio/header";
import Footer from "../components/inicio/footer";
import { motion } from "framer-motion";

export default function TodosLosProductos() {
  const { productos } = useProductos();

  return (
    <>
      <Header />

      <section className="w-full bg-white py-12 px-6 md:px-16 min-h-screen">
        <div className="max-w-7xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-3xl font-bold text-gray-900 mb-10 text-center"
          >
            Todos los productos
          </motion.h2>

          {productos.length === 0 ? (
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center text-gray-500"
            >
              No hay productos disponibles.
            </motion.p>
          ) : (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8"
            >
              {productos.map((producto, index) => (
                <motion.div
                  key={producto.id}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: index * 0.05 }}
                  className="bg-white border border-gray-200 rounded-lg shadow-md overflow-hidden hover:shadow-xl hover:-translate-y-1 transition-transform duration-300"
                >
                  <img
                    src={producto.image}
                    alt={producto.name}
                    className="w-full h-48 object-cover"
                  />
                  <div className="p-4">
                    <p className="text-xs text-gray-500 mb-1">{producto.category}</p>
                    <h3 className="text-lg font-semibold text-gray-800">{producto.name}</h3>
                    <p className="text-sm text-green-600 font-bold mb-2">{producto.price}</p>
                    <p className="text-sm text-gray-600 line-clamp-2">
                      {producto.summary || "Sin descripción disponible."}
                    </p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          )}
        </div>
      </section>

      <Footer />
    </>
  );
}
