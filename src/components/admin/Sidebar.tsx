import { useState } from "react";
import QRScannerModal from "../admin/QRScannerModal";

interface Props {
  onSelect: (page: string) => void;
  activePage: string;
}

export default function Sidebar({ onSelect, activePage }: Props) {
  const [showQRModal, setShowQRModal] = useState(false);

  return (
    <aside className="w-64 bg-white shadow-md p-6 flex flex-col gap-6">
      <h1 className="text-2xl font-bold text-[#1E88E5]">FullFit</h1>

      <nav className="flex flex-col gap-3 text-gray-700">
        <button onClick={() => onSelect("inicio")} className={activePage === "inicio" ? "font-semibold text-[#1E88E5] text-left" : "text-left"}>
          Dashboard
        </button>
        <button onClick={() => onSelect("clientes")} className={activePage === "clientes" ? "font-semibold text-[#1E88E5] text-left" : "text-left"}>
          Clientes
        </button>
        <button onClick={() => onSelect("eventos")} className={activePage === "eventos" ? "font-semibold text-[#1E88E5] text-left" : "text-left"}>
          Eventos
        </button>
        <button onClick={() => onSelect("entrenadores")} className={activePage === "entrenadores" ? "font-semibold text-[#1E88E5] text-left" : "text-left"}>
          Entrenadores
        </button>
        <button onClick={() => onSelect("productos")} className={activePage === "productos" ? "font-semibold text-[#1E88E5] text-left" : "text-left"}>
          Productos
        </button>

        <button
          onClick={() => setShowQRModal(true)}
          className="text-left text-[#1E88E5] hover:underline mt-4"
        >
          Escanear QR
        </button>
      </nav>

      <div className="mt-auto text-sm text-gray-400">© 2025 FullFit</div>

      <QRScannerModal
        isOpen={showQRModal}
        onClose={() => setShowQRModal(false)}
        onResult={(usuario) => {
          if (!usuario) {
            alert("❌ Usuario no encontrado");
          } else if (usuario.estado === "activo") {
            alert(`✅ Acceso permitido: ${usuario.fullName}`);
          } else {
            alert(`🚫 Membresía inactiva: ${usuario.fullName}`);
          }
        }}
      />
    </aside>
  );
}
