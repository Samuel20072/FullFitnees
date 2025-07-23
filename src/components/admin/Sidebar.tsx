import { useState } from "react";
import { useNavigate } from "react-router-dom";
import QRScannerModal from "../admin/QRScannerModal";
import { FaBars, FaTimes } from "react-icons/fa";

interface Props {
  onSelect: (page: string) => void;
  activePage: string;
}

export default function Sidebar({ onSelect, activePage }: Props) {
  const [showQRModal, setShowQRModal] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate(); // ✅ Para volver a inicio

  const NavButton = (label: string, page: string) => (
    <button
      onClick={() => {
        onSelect(page);
        setIsOpen(false);
      }}
      className={`text-left ${
        activePage === page ? "font-semibold text-[#1E88E5]" : ""
      }`}
    >
      {label}
    </button>
  );

  return (
    <>
      {/* Botón hamburguesa en móvil */}
      <div className="lg:hidden bg-white p-4 shadow-md flex justify-between items-center">
        <h1
          onClick={() => navigate("/")} // ✅ Volver al inicio al hacer clic en el logo
          className="text-xl font-bold text-[#1E88E5] cursor-pointer"
        >
          FullFit
        </h1>
        <button onClick={() => setIsOpen(!isOpen)} className="text-2xl text-gray-700">
          {isOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      {/* Sidebar */}
      <aside
        className={`fixed lg:static top-0 left-0 h-full lg:h-auto w-64 bg-white shadow-md p-6 flex flex-col gap-6 z-40 transition-transform duration-300 transform ${
          isOpen ? "translate-x-0" : "-translate-x-full lg:translate-x-0"
        }`}
      >
        <h1
          onClick={() => navigate("/")} // ✅ Volver al inicio en escritorio
          className="text-2xl font-bold text-[#1E88E5] hidden lg:block cursor-pointer"
        >
          FullFit
        </h1>

        <nav className="flex flex-col gap-3 text-gray-700">
          <button
            onClick={() => {
              navigate("/"); // ✅ Ir a página de inicio real
              setIsOpen(false);
            }}
            className="text-left text-[#1E88E5] font-semibold"
          >
           volver a Inicio
          </button>

          {NavButton("Dashboard", "inicio")}
          {NavButton("Clientes", "clientes")}
          {NavButton("Eventos", "eventos")}
          {NavButton("Entrenadores", "entrenadores")}
          {NavButton("Productos", "productos")}

          <button
            onClick={() => {
              setIsOpen(false);
              setShowQRModal(true);
            }}
            className="text-left text-[#1E88E5] hover:underline mt-4"
          >
            Escanear QR
          </button>
        </nav>

        <div className="mt-auto text-sm text-gray-400 hidden lg:block">© 2025 FullFit</div>

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

      {isOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-30 lg:hidden"
          onClick={() => setIsOpen(false)}
        />
      )}
    </>
  );
}
