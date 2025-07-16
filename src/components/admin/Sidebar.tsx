// src/components/admin/Sidebar.tsx
interface Props {
  onSelect: (page: string) => void;
  activePage: string;
}

export default function Sidebar({ onSelect, activePage }: Props) {
  return (
    <aside className="w-64 bg-white shadow-md p-6 flex flex-col gap-6">
      <h1 className="text-2xl font-bold text-indigo-600">FullFit</h1>
      <nav className="flex flex-col gap-3 text-gray-700">
        <button
          onClick={() => onSelect("inicio")}
          className={`text-left ${activePage === "inicio" ? "font-semibold text-indigo-600" : ""}`}
        >
          Dashboard
        </button>
        <button
          onClick={() => onSelect("clientes")}
          className={`text-left ${activePage === "clientes" ? "font-semibold text-indigo-600" : ""}`}
        >
          Clientes
        </button>
        <button
          onClick={() => onSelect("eventos")}
          className={`text-left ${activePage === "eventos" ? "font-semibold text-indigo-600" : ""}`}
        >
          Eventos
        </button>
        <button
          onClick={() => onSelect("entrenadores")}
          className={`text-left ${activePage === "entrenadores" ? "font-semibold text-indigo-600" : ""}`}
        >
          Entrenadores
        </button>
        <button
          onClick={() => onSelect("productos")}
          className={`text-left ${activePage === "productos" ? "font-semibold text-indigo-600" : ""}`}
        >
          Productos
        </button>
      </nav>
      <div className="mt-auto text-sm text-gray-400">© 2025 FullFit</div>
    </aside>
  );
}
