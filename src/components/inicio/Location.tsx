export default function Location() {
  return (
    <section className="bg-[#111] text-white px-8 py-16 flex flex-col md:flex-row items-center gap-8">
      <img src="/assets/location.jpg" alt="Location" className="rounded-xl w-full md:w-1/2" />
      <div>
        <h3 className="text-3xl font-bold mb-4">Location</h3>
        <p className="text-gray-400">123 Fitness Avenue, Example City, ST 45678</p>
      </div>
    </section>
  );
}