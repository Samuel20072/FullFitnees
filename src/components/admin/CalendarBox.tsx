// src/components/Dashboard/CalendarBox.tsx
export default function CalendarBox() {
  return (
    <div className="bg-white rounded-xl shadow p-6 flex flex-col justify-between">
      <div>
        <h2 className="text-lg font-semibold mb-4">Septiembre 2024</h2>
        <div className="grid grid-cols-7 text-center text-sm text-gray-600">
          <span>Lun</span><span>Mar</span><span>Mié</span><span>Jue</span><span>Vie</span><span>Sáb</span><span>Dom</span>
          {Array.from({ length: 30 }, (_, i) => (
            <div key={i} className={`py-1 ${i === 18 ? "bg-indigo-600 text-white rounded-full" : ""}`}>
              {i + 1}
            </div>
          ))}
        </div>
      </div>
      <div className="mt-4">
        <h3 className="text-sm text-gray-500">Crecimiento comunidad</h3>
        <p className="text-4xl font-bold text-indigo-600">65%</p>
        <p className="text-sm text-gray-400">+0.9% desde el mes pasado</p>
      </div>
    </div>
  );
}
