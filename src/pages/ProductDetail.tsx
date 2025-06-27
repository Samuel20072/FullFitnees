// src/pages/ProductDetail.tsx
import { useLocation, useNavigate } from "react-router-dom";

export default function ProductDetail() {
  const location = useLocation();
  const navigate = useNavigate();
  const product = location.state;

  if (!product) return <p className="text-white p-6">Producto no encontrado.</p>;

  return (
    <div className="bg-black text-white min-h-screen p-8">
      <button
        onClick={() => navigate(-1)}
        className="text-green-400 mb-6 hover:underline"
      >
        ← Volver
      </button>
      <div className="flex flex-col md:flex-row items-center gap-8">
        <img src={product.image} alt={product.name} className="w-80 rounded-xl" />
        <div>
          <h2 className="text-4xl font-bold mb-4">{product.name}</h2>
          <p className="text-gray-400">{product.description}</p>
        </div>
      </div>
    </div>
  );
}
