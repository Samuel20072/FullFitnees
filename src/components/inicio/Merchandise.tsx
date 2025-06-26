const items = [
  { name: "Water bottles", image: "/assets/bottle.jpg" },
  { name: "Gym bags", image: "/assets/bag.jpg" },
  { name: "Gym jacket", image: "/assets/jacket.jpg" },
];

export default function Merchandise() {
  return (
    <section className="bg-black text-white px-8 py-16">
      <h3 className="text-3xl font-bold mb-8">Get Fit in Style with FullFit Merchandise</h3>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {items.map((item, idx) => (
          <div key={idx} className="bg-[#111] p-6 rounded-xl text-center">
            <img src={item.image} alt={item.name} className="h-40 object-cover rounded mb-4" />
            <p>{item.name}</p>
          </div>
        ))}
      </div>
    </section>
  );
}