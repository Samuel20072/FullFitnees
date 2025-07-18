import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Header from "../components/inicio/header";
import Footer from "../components/inicio/footer";
import QRModal from "../components/modals/QRModal";

type Usuario = {
  cc: string;
  fullName: string;
  username: string;
  email: string;
  phone: string;
  role: "cliente" | "admin" | "entrenador";
  estado: "activo" | "inactivo";
};

export default function Perfil() {
  const navigate = useNavigate();
  const [user, setUser] = useState<Usuario | null>(null);
  const [editUser, setEditUser] = useState<Usuario | null>(null);
  const [showQR, setShowQR] = useState(false);

  useEffect(() => {
    const data = localStorage.getItem("loggedUser");
    if (!data) {
      navigate("/login");
      return;
    }
    const parsed = JSON.parse(data);
    setUser(parsed);
    setEditUser(parsed);
  }, [navigate]);

  if (!user || !editUser) return null;

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setEditUser((prev) => (prev ? { ...prev, [name]: value } : prev));
  };

  const handleSave = () => {
    if (!editUser) return;

    setUser(editUser);
    localStorage.setItem("loggedUser", JSON.stringify(editUser));
    alert("Cambios guardados correctamente");
  };

  const handlePagarMembresia = () => {
    const actualizado = { ...editUser, estado: "activo" as const };
    setUser(actualizado);
    setEditUser(actualizado);
    localStorage.setItem("loggedUser", JSON.stringify(actualizado));
    alert("Pago exitoso. ¡Tu membresía está activa!");
  };

  const handleMostrarAcceso = () => {
    setShowQR(true);
  };

  return (
    <div className="min-h-screen">
      <Header />

      <div className="max-w-2xl mx-auto mt-20 bg-white rounded-xl shadow-xl p-8">
        <h2 className="text-3xl font-bold text-gray-800 mb-6 text-center">
          Mi Perfil
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-8 text-gray-800">
          <Input label="Cédula" value={editUser.cc} name="cc" onChange={handleChange} disabled />
          <Input label="Nombre completo" value={editUser.fullName} name="fullName" onChange={handleChange} />
          <Input label="Nombre de usuario" value={editUser.username} name="username" onChange={handleChange} />
          <Input label="Correo electrónico" value={editUser.email} name="email" onChange={handleChange} />
          <Input label="Teléfono" value={editUser.phone} name="phone" onChange={handleChange} />
          <div>
            <p className="text-gray-500 text-sm mb-1">Rol</p>
            <span className="inline-block bg-blue-100 text-blue-800 text-sm px-3 py-1 rounded-full capitalize">
              {editUser.role}
            </span>
          </div>
          <div>
            <p className="text-gray-500 text-sm mb-1">Estado de membresía</p>
            <span
              className={`inline-block px-3 py-1 rounded-full text-sm font-medium ${
                editUser.estado === "activo"
                  ? "bg-green-100 text-green-800"
                  : "bg-red-100 text-red-700"
              }`}
            >
              {editUser.estado}
            </span>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center mt-6">
          <button
            onClick={handleSave}
            className="px-6 py-2 bg-[#1E88E5] hover:bg-[#0D80F2] text-white rounded-full transition"
          >
            Guardar cambios
          </button>
          <button
            onClick={handlePagarMembresia}
            className="px-6 py-2 bg-green-600 hover:bg-green-700 text-white rounded-full transition"
          >
            Pagar membresía
          </button>
          <button
            onClick={handleMostrarAcceso}
            className="px-6 py-2 bg-black hover:bg-gray-900 text-white rounded-full transition"
          >
            Ingresar al gym
          </button>
        </div>
      </div>

      {/* Modal QR */}
      {showQR && user && (
        <QRModal value={`${user.cc}|${user.username}`} onClose={() => setShowQR(false)} />
      )}

      <Footer />
    </div>
  );
}

// Input reutilizable
function Input({
  label,
  value,
  name,
  onChange,
  disabled = false,
}: {
  label: string;
  value: string;
  name: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  disabled?: boolean;
}) {
  return (
    <div>
      <p className="text-gray-500 text-sm mb-1">{label}</p>
      <input
        type="text"
        name={name}
        value={value}
        onChange={onChange}
        disabled={disabled}
        className="w-full border border-gray-300 px-4 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
    </div>
  );
}
