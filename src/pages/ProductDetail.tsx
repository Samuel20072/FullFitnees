// src/components/ProductDetail.tsx
import { useLocation, useNavigate } from "react-router-dom";

export default function ProductDetail() {
  const location = useLocation();
  const navigate = useNavigate();
  const product = location.state;

  if (!product)
    return <p className="text-white p-6">Producto no encontrado.</p>;

  return (
    <div className="bg-[#121417] text-white min-h-screen px-6 py-10">
      <button
        onClick={() => navigate(-1)}
        className="text-green-400 mb-8 hover:underline"
      >
        ← Volver
      </button>

      {/* Imagen del producto */}
      <div className="flex flex-col items-center md:flex-row md:justify-center gap-4 mb-12">
        <img
          src={product.image1}
          alt={`${product.name} 1`}
          className="w-[280px] h-auto rounded-md object-cover"
        />
        <img
          src={product.image2}
          alt={`${product.name} 2`}
          className="w-[280px] h-auto rounded-md object-cover"
        />
      </div>

      {/* Detalles del producto */}
      <div className="max-w-4xl mx-auto">
        <h1 className="text-lg text-white font-semibold mb-2">
          {product.name}
        </h1>
        <p className="text-gray-400 text-sm leading-relaxed mb-8">
          {product.description}
        </p>

        {/* Información del producto */}
        <h2 className="text-white font-medium text-sm mb-4">Product Details</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 text-sm border-t border-white/20 pt-4">
          <div>
            <p className="text-gray-500">Price</p>
            <p>${product.price}</p>
          </div>
          <div>
            <p className="text-gray-500">Category</p>
            <p>{product.category}</p>
          </div>
          <div>
            <p className="text-gray-500">Material</p>
            <p>{product.material}</p>
          </div>
          <div>
            <p className="text-gray-500">Care Instructions</p>
            <p>{product.careInstructions}</p>
          </div>
        </div>

        {/* Botón de acción */}
        <div className="mt-10">
          <button className="bg-blue-500 text-white text-sm px-5 py-2 rounded hover:bg-blue-600 transition">
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
}
