import { useEffect } from "react";
import { Html5QrcodeScanner } from "html5-qrcode";
import { motion } from "framer-motion";

type Props = {
  isOpen: boolean;
  onClose: () => void;
  onResult: (usuario: {
    fullName: string;
    estado: "activo" | "inactivo";
  } | null) => void;
};

export default function QRScannerModal({ isOpen, onClose, onResult }: Props) {
  useEffect(() => {
    if (!isOpen) return;

    const scanner = new Html5QrcodeScanner("qr-reader", { fps: 10, qrbox: 250 }, false);

    scanner.render(
      (decodedText) => {
        scanner.clear().then(() => {
          validarQR(decodedText);
        });
      },
      (err) => console.warn("Escaneo fallido", err)
    );

    return () => {
      scanner.clear().catch(() => {});
    };
  }, [isOpen]);

  const validarQR = (texto: string) => {
    const [cc, username] = texto.split("|");
    const data = localStorage.getItem("usuarios_fullfit");

    if (!data) {
      onResult(null);
      onClose();
      return;
    }

    const usuarios = JSON.parse(data);
    const usuario = usuarios.find(
      (u: any) => u.cc === cc && u.username === username
    );

    onResult(
      usuario
        ? { fullName: usuario.fullName, estado: usuario.estado }
        : null
    );

    onClose();
  };

  if (!isOpen) return null; // ✅ Para evitar render innecesario

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center">
      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.8, opacity: 0 }}
        className="bg-white rounded-lg p-6 w-full max-w-sm shadow-lg relative"
      >
        <button
          onClick={onClose}
          className="absolute top-2 right-2 text-gray-500 hover:text-red-600"
        >
          ✖
        </button>
        <h2 className="text-lg font-bold mb-4 text-center">Escanea un QR</h2>
        <div id="qr-reader" className="w-full" />
      </motion.div>
    </div>
  );
}
