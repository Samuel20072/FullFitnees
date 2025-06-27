// src/components/Merchandise.tsx
import { useNavigate } from "react-router-dom";

const items = [
  { id: 1, name: "Water bottles", image: "/assets/bottle.jpg", description: "Stay hydrated with our premium water bottles." },
  { id: 2, name: "Gym bags", image: "/assets/bag.jpg", description: "Carry your gear in style." },
  { id: 3, name: "Gym jacket", image: "/assets/jacket.jpg", description: "Look sharp while you sweat." },
];

export default function Merchandise() {
  const navigate = useNavigate();

  const handleClick = (item: any) => {
    navigate(`/product/${item.id}`, { state: item });
  };

  return (
    <section className="bg-black text-white px-8 py-16">
      <h3 className="text-3xl font-bold mb-8">Get Fit in Style with FullFit Merchandise</h3>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {items.map((item) => (
          <div
            key={item.id}
            className="bg-[#111] p-6 rounded-xl text-center cursor-pointer hover:scale-105 transition"
            onClick={() => handleClick(item)}
          >
            <img src={item.image} alt={item.name} className="h-40 object-cover rounded mb-4" />
            <p>{item.name}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
