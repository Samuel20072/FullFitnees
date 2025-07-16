// src/components/common/Modal.tsx
import type { ReactNode } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  children: ReactNode;
}

export default function Modal({ isOpen, onClose, title, children }: ModalProps) {
  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 bg-black/40 z-50 flex items-center justify-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            className="bg-white rounded-xl p-6 shadow-xl w-full max-w-lg relative"
          >
            <button
              onClick={onClose}
              className="absolute top-2 right-3 text-gray-400 hover:text-red-500 text-xl"
            >
              &times;
            </button>
            <h2 className="text-xl font-semibold text-gray-800 mb-4">{title}</h2>
            {children}
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
