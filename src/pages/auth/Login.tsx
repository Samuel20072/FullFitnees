import { useState } from "react";
import InputField from "../../components/auth/InputField";
import { useNavigate } from "react-router-dom";
import { useUsuarios } from "../../contexts/UserContext";
import { FaEnvelope, FaLock } from "react-icons/fa";
import { motion } from "framer-motion";

export default function Login() {
  const navigate = useNavigate();
  const { usuarios } = useUsuarios();

  const [formData, setFormData] = useState({ email: "", password: "" });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const foundUser = usuarios.find(
      (u) => u.email === formData.email && u.password === formData.password
    );

    if (!foundUser) return alert("Usuario o contraseña incorrectos");

    if (foundUser.estado !== "activo")
      return alert("Tu cuenta está inactiva. Por favor renueva tu mensualidad.");

    localStorage.setItem("loggedUser", JSON.stringify(foundUser));
    alert(`Bienvenido, ${foundUser.fullName} (${foundUser.role})`);
    navigate("/");
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-black flex items-center justify-center px-4">
      <motion.form
        onSubmit={handleSubmit}
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="bg-[#1c1c1c] p-10 rounded-2xl shadow-2xl w-full max-w-md text-white"
      >
        <h2 className="text-3xl font-bold mb-2 text-center text-white">Bienvenido</h2>
        <p className="text-sm text-gray-400 text-center mb-8">
          Inicia sesión con tu cuenta registrada
        </p>

        {/* Email */}
        <InputField
          label="Email"
          name="email"
          type="email"
          placeholder="correo@example.com"
          value={formData.email}
          onChange={handleChange}
          icon={<FaEnvelope />}
        />

        {/* Password */}
        <InputField
          label="Contraseña"
          name="password"
          type="password"
          placeholder="••••••••"
          value={formData.password}
          onChange={handleChange}
          icon={<FaLock />}
        />

        {/* Botón login */}
        <button
          type="submit"
          className="w-full bg-[#1E88E5] hover:bg-[#0D80F2] text-white font-semibold py-2 rounded-md transition-all"
        >
          Iniciar sesión
        </button>

        {/* Enlaces de ayuda */}
        <div className="mt-6 flex justify-between text-xs text-gray-400">
          <a href="#" className="hover:underline">¿Olvidaste tu contraseña?</a>
          <a href="/registro" className="hover:underline">Crear cuenta</a>
        </div>
      </motion.form>
    </div>
  );
}
