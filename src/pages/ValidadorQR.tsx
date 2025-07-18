// src/pages/ValidarQR.tsx
import { useUsuarios } from "../contexts/UserContext"; // asegúrate que la ruta esté bien
import QRScanner from "../components/QRScanner";
import { useState } from "react";

export default function ValidarQR() {
  const { usuarios } = useUsuarios();
  const [mensaje, setMensaje] = useState<string>("");

  const handleResultado = (qrData: string) => {
    const [cc, username] = qrData.split("|");
    const usuario = usuarios.find((u) => u.cc === cc && u.username === username);

    if (!usuario) {
      setMensaje("❌ Usuario no encontrado");
    } else if (usuario.estado === "activo") {
      setMensaje(`✅ Bienvenido, ${usuario.fullName}. Acceso permitido.`);
    } else {
      setMensaje(`⛔ Membresía inactiva para ${usuario.fullName}. Acceso denegado.`);
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 py-10 px-4">
      <h1 className="text-3xl font-bold text-center text-gray-800 mb-6">Escanear código QR</h1>

      <QRScanner onResult={handleResultado} />

      {mensaje && (
        <div className="mt-6 text-center text-lg font-medium">
          <p className={mensaje.includes("✅") ? "text-green-600" : "text-red-600"}>
            {mensaje}
          </p>
        </div>
      )}
    </div>
  );
}
