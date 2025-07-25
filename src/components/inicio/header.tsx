import { useState, useRef, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import fullFinnes from "../../assets/fullFinnes.png";
import { FaCircleUser } from "react-icons/fa6";
import { motion, AnimatePresence } from "framer-motion";
import { FaBars, FaTimes, FaUserCircle, FaSignOutAlt } from "react-icons/fa";

export default function Header() {
  const navigate = useNavigate();
  const [showMenu, setShowMenu] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  const user = JSON.parse(localStorage.getItem("loggedUser") || "null");

  const handleLogout = () => {
    localStorage.removeItem("loggedUser");
    navigate("/login");
  };

  const fechaVencimiento = user?.fechaVencimiento
    ? new Date(user.fechaVencimiento).toLocaleDateString("es-CO", {
        year: "numeric",
        month: "long",
        day: "numeric",
      })
    : null;

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setShowMenu(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const NavigationLinks = () => (
    <>
      <Link to="/" className="hover:text-[#1E88E5]">Inicio</Link>
      <Link to="/clases" className="hover:text-[#1E88E5]">Clases</Link>
      <Link to="/productos" className="hover:text-[#1E88E5]">Productos</Link>
      <Link to="/entrenadores" className="hover:text-[#1E88E5]">Entrenadores</Link>
      {(user?.role === "entrenador" || user?.role === "admin") && (
        <Link to="/create-class" className="hover:text-[#1E88E5]">Crear Clase</Link>
      )}
      {user?.role === "admin" && (
        <Link to="/admin/dashboard" className="hover:text-[#1E88E5]">Admin</Link>
      )}
      {user?.role === "cliente" && fechaVencimiento && (
        <span className="text-sm text-gray-300">
          Vence: <span className="text-white font-semibold">{fechaVencimiento}</span>
        </span>
      )}
    </>
  );

  return (
    <header className="bg-[#121417] text-white py-4 px-6 flex justify-between items-center relative z-50">
      {/* Logo */}
     <Link to="/" className="flex items-center gap-3">
  <img src={fullFinnes} alt="Logo" className="w-10 h-10 object-contain" />
  <h1 className="text-xl font-bold">Full Fitness</h1>
</Link>

      {/* Desktop nav */}
      <nav className="hidden md:flex gap-6 items-center text-sm">
        <NavigationLinks />

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

      {/* Mobile menu button */}
      <button
        className="md:hidden text-white text-2xl"
        onClick={() => setMobileMenuOpen(true)}
      >
        <FaBars />
      </button>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 bg-[#121417] text-white z-50 p-6 flex flex-col gap-6"
          >
            <div className="flex justify-between items-center">
              <h1 className="text-xl font-bold">Menú</h1>
              <button onClick={() => setMobileMenuOpen(false)} className="text-2xl">
                <FaTimes />
              </button>
            </div>

            <div className="flex flex-col gap-4 text-lg mt-4">
              <NavigationLinks />
              {user ? (
                <>
                  <Link to="/profile" onClick={() => setMobileMenuOpen(false)}>Mi perfil</Link>
                  <button
                    onClick={() => {
                      setMobileMenuOpen(false);
                      handleLogout();
                    }}
                    className="text-red-400 text-left"
                  >
                    Cerrar sesión
                  </button>
                </>
              ) : (
                <Link
                  to="/login"
                  onClick={() => setMobileMenuOpen(false)}
                  className="bg-[#0D80F2] text-white text-center py-2 rounded-lg"
                >
                  Iniciar sesión
                </Link>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}


