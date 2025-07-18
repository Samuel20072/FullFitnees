import { useState, useRef, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import fullFinnes from "../../assets/fullFinnes.png";
import { FaCircleUser } from "react-icons/fa6";
import { FaUserCircle, FaSignOutAlt } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";

export default function Header() {
  const navigate = useNavigate();
  const [showMenu, setShowMenu] = useState(false);
  const user = JSON.parse(localStorage.getItem("loggedUser") || "null");
  const menuRef = useRef<HTMLDivElement>(null);

  const handleLogout = () => {
    localStorage.removeItem("loggedUser");
    navigate("/login");
  };

  // Cierra el menú si se hace clic fuera
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setShowMenu(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <header className="bg-[#121417] text-white py-4 px-6 flex justify-between items-center relative">
      {/* Logo y título */}
      <div className="flex items-center gap-3">
        <img
          src={fullFinnes}
          alt="Full Fitness Logo"
          className="w-12 h-12 object-contain"
        />
        <h1 className="text-2xl font-bold">Full Fitness</h1>
      </div>

      {/* Navegación */}
      <nav className="flex gap-6 items-center text-sm sm:text-base relative">
        <Link to="/" className="hover:text-[#1E88E5]">Inicio</Link>
        <Link to="/classes" className="hover:text-[#1E88E5]">Clases</Link>
        <Link to="/products" className="hover:text-[#1E88E5]">Productos</Link>
        <Link to="/trainers" className="hover:text-[#1E88E5]">Entrenadores</Link>

        {(user?.role === "entrenador" || user?.role === "admin") && (
          <Link to="/create-class" className="hover:text-[#1E88E5]">Crear Clase</Link>
        )}
        {user?.role === "admin" && (
          <Link to="/admin/dashboard" className="hover:text-[#1E88E5]">Admin</Link>
        )}

        {user ? (
          <div className="relative" ref={menuRef}>
            <button
              className="text-white text-xl"
              onClick={() => setShowMenu((prev) => !prev)}
            >
              <FaCircleUser />
            </button>

            <AnimatePresence>
              {showMenu && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.2 }}
                  className="absolute right-0 mt-2 bg-white text-gray-800 rounded-lg shadow-lg w-48 overflow-hidden z-50"
                >
                  <Link
                    to="/profile"
                    onClick={() => setShowMenu(false)}
                    className="flex items-center gap-2 px-4 py-3 hover:bg-gray-100 transition"
                  >
                    <FaUserCircle className="text-blue-600" />
                    Mi perfil
                  </Link>
                  <button
                    onClick={() => {
                      setShowMenu(false);
                      handleLogout();
                    }}
                    className="flex items-center gap-2 w-full text-left px-4 py-3 hover:bg-gray-100 transition"
                  >
                    <FaSignOutAlt className="text-red-600" />
                    Cerrar sesión
                  </button>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        ) : (
          <Link
            to="/login"
            className="bg-[#0D80F2] hover:bg-[#1E88E5] text-white py-2 px-4 rounded-full transition"
          >
            Únete
          </Link>
        )}
      </nav>
    </header>
  );
}
