import { motion } from "framer-motion";
import { QRCodeCanvas } from "qrcode.react";

type QRModalProps = {
  value: string;
  onClose: () => void;
};

export default function QRModal({ value, onClose }: QRModalProps) {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-60 z-50 flex items-center justify-center">
      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.8, opacity: 0 }}
        className="bg-white rounded-xl p-6 shadow-2xl text-center max-w-sm w-full relative"
      >
        <button
          onClick={onClose}
          className="absolute top-2 right-3 text-gray-500 hover:text-red-500 text-xl"
        >
          ×
        </button>

        <h3 className="text-xl font-bold text-gray-800 mb-4">Tu código QR de acceso</h3>

        <QRCodeCanvas
          value={value}
          size={200}
          bgColor="#ffffff"
          fgColor="#000000"
          includeMargin={true}
        />

        <p className="mt-4 text-sm text-gray-600">
          Escanea este código en la entrada del gimnasio.
        </p>
      </motion.div>
    </div>
  );
}
