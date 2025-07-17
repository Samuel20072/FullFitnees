import { Link } from "react-router-dom";
import fullFinnes from "../../assets/fullFinnes.png";

export default function Header() {
  const user = JSON.parse(localStorage.getItem("loggedUser") || "null");

  return (
    <header className="bg-[#121417] text-white py-4 px-6 flex justify-between items-center">
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
      <nav className="flex gap-6 items-center text-sm sm:text-base">
        <Link to="/" className="hover:text-[#1E88E5]">Inicio</Link>
        <Link to="/classes" className="hover:text-[#1E88E5]">Clases</Link>
        <Link to="/classes" className="hover:text-[#1E88E5]">Productos</Link>
        <Link to="/trainers" className="hover:text-[#1E88E5]">Entrenadores</Link>

        {/* Crear Clase: Solo entrenador o admin */}
        {(user?.role === "entrenador" || user?.role === "admin") && (
          <Link to="/create-class" className="hover:text-[#1E88E5]">Crear Clase</Link>
        )}

        {/* Crear Entrenador: Solo admin */}
        {user?.role === "admin" && (
          <Link to="/admin/dashboard" className="hover:text-[#1E88E5]">admin</Link>
        )}

        {/* Perfil o Login/Register */}
        {user ? (
          <>
            <Link to="/profile" className="hover:text-[#1E88E5]">Perfil</Link>
            <img
              src="/avatar.png"
              alt="User"
              className="w-8 h-8 rounded-full border border-white"
              title={user.fullName}
            />
          </>
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
