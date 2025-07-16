// src/components/Dashboard/HeaderBar.tsx
export default function HeaderBar() {
  return (
    <header className="flex justify-between items-center">
      <h2 className="text-xl font-bold">Dashboard</h2>
      <input
        type="text"
        placeholder="Buscar..."
        className="border px-3 py-2 rounded-md shadow-sm w-64"
      />
    </header>
  );
}
