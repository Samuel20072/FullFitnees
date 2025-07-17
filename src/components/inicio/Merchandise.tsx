import producto1 from "../../assets/fullFinnes.png";
import producto2 from "../../assets/gym.jfif";
import producto3 from "../../assets/rumba.png";

const productoPrincipal = {
  image: producto1,
  category: "Proteína",
  name: "Whey Protein Pro 2Kg",
  price: "$180.000 COP",
  summary:
    "Mejora tu recuperación muscular con esta proteína de alta calidad, ideal para después de tus entrenamientos.",
};

const productosLaterales = [
  {
    image: producto2,
    category: "Accesorios",
    name: "Guantes de Entrenamiento",
    price: "$35.000 COP",
  },
  {
    image: producto3,
    category: "Suplementos",
    name: "Creatina Monohidratada 300g",
    price: "$65.000 COP",
  },
  {
    image: producto2,
    category: "Ropa Deportiva",
    name: "Camiseta Dry-Fit FullFitness",
    price: "$40.000 COP",
  },
];

export default function ProductosDestacados() {
  return (
    <section className="w-full bg-white py-12 px-6 md:px-16">
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-bold text-gray-900">Productos en venta</h2>
          <button className="border border-gray-800 px-4 py-1 rounded-full text-sm hover:bg-gray-800 hover:text-white transition">
            Ver todos los productos
          </button>
        </div>

        <div className="grid md:grid-cols-3 gap-10">
          {/* Producto Principal */}
          <div className="md:col-span-2">
            <div className="bg-gray-100 rounded-xl overflow-hidden mb-4 h-64">
              <img
                src={productoPrincipal.image}
                alt="Producto principal"
                className="w-full h-full object-cover"
              />
            </div>
            <p className="text-sm text-gray-500">{productoPrincipal.category}</p>
            <h3 className="text-lg font-semibold text-gray-900 mt-1 mb-1">
              {productoPrincipal.name}
            </h3>
            <p className="text-sm text-green-600 font-semibold mb-1">
              {productoPrincipal.price}
            </p>
            <p className="text-sm text-gray-600">{productoPrincipal.summary}</p>
          </div>

          {/* Productos Laterales */}
          <div className="flex flex-col gap-6">
            {productosLaterales.map((producto, idx) => (
              <div key={idx} className="flex gap-4">
                <div className="w-20 h-20 rounded-xl overflow-hidden bg-gray-200 flex-shrink-0">
                  <img
                    src={producto.image}
                    alt={producto.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <p className="text-xs text-gray-500">{producto.category}</p>
                  <h4 className="text-sm font-semibold text-gray-900 leading-snug">
                    {producto.name}
                  </h4>
                  <p className="text-xs text-green-600 font-semibold mt-1">
                    {producto.price}
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
