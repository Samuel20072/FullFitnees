export default function HeaderBar() {
  return (
    <header className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-4">
      <h2 className="text-2xl font-bold text-gray-800">Dashboard</h2>
      <input
        type="text"
        placeholder="Buscar..."
        className="border border-gray-300 px-4 py-2 rounded-md shadow-sm w-full sm:w-64 text-sm"
      />
    </header>
  );
}
