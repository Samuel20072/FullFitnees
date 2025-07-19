import { useProductos } from "../../contexts/ProductoContext";
import { Link } from "react-router-dom";

export default function ProductosDestacados() {
  const { productos } = useProductos();

  const productoPrincipal = productos[0];
  const productosLaterales = productos.slice(1, 4);

  if (!productoPrincipal) return null;

  return (
    <section className="w-full bg-white py-12 px-6 md:px-16">
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-bold text-gray-900">Productos en venta</h2>
          <Link
  to="/productos"
  className="border bg-gray-800 text-white px-4 py-1 rounded-full text-sm hover:bg-gray-900 transition"
>
  Ver todos los productos
</Link>
        </div>

        <div className="grid md:grid-cols-3 gap-10">
          {/* Producto Principal */}
          <div className="md:col-span-2">
            <div className="bg-gray-100 rounded-xl overflow-hidden mb-4 h-64">
              <img
                src={productoPrincipal.image}
                alt={productoPrincipal.name}
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
            <p className="text-sm text-gray-600">
              {productoPrincipal.summary ?? "Sin descripción disponible."}
            </p>
          </div>

          {/* Productos Laterales */}
          <div className="flex flex-col gap-6">
            {productosLaterales.map((producto) => (
              <div key={producto.id} className="flex gap-4">
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
