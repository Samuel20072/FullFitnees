import { Link } from "react-router-dom";

export default function Header() {
  const user = JSON.parse(localStorage.getItem("loggedUser") || "null");

  return (
    <header className="bg-black text-white py-4 px-6 flex justify-between items-center">
      <h1 className="text-xl font-bold">Full Fitnees</h1>
      <nav className="flex gap-6 items-center">
        <Link to="/" className="hover:text-[#1E88E5] 0">Inicio</Link>
        <Link to="/classes" className="hover:text-[#1E88E5] ">Clases</Link>
        <Link to="/trainers" className="hover:text-[#1E88E5] ">Entrenadores</Link>

        {/* Crear Clase: Solo entrenador o admin */}
        {(user?.role === "entrenador" || user?.role === "admin") && (
          <Link to="/create-class" className="hover:text-[#1E88E5] ">Crear Clase</Link>
        )}

        {/* Crear Entrenador: Solo admin */}
        {user?.role === "admin" && (
          <Link to="/create-trainer" className="hover:text-[#1E88E5] ">Crear Entrenador</Link>
        )}

        {/* Perfil o Login/Register */}
        {user ? (
          <Link to="/profile" className="hover:text-[#1E88E5] ">
            Perfil
          </Link>
        ) : (
          <>
            <Link to="/login" className="hover:text-[#1E88E5] ">Login</Link>
            <Link to="/register" className="hover:text-[#1E88E5] ">Register</Link>
          </>
        )}

        {user && (
          <img
            src="/avatar.png"
            alt="User"
            className="w-8 h-8 rounded-full border border-white"
            title={user.fullName}
          />
        )}
      </nav>
    </header>
  );
}
