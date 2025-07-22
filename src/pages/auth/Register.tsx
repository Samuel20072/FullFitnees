import { useState } from "react";
import { useNavigate } from "react-router-dom";
import InputField from "../../components/auth/InputField";
import { FaUser, FaIdCard, FaPhone, FaEnvelope, FaLock } from "react-icons/fa";
import { motion } from "framer-motion";

export default function Register() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    fullName: "",
    cc: "",
    phone: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (formData.password !== formData.confirmPassword) {
      alert("Las contraseñas no coinciden");
      return;
    }

    const userToSave = {
      fullName: formData.fullName,
      cc: formData.cc,
      phone: formData.phone,
      email: formData.email,
    };

    localStorage.setItem("registeredUser", JSON.stringify(userToSave));
    alert("✅ Usuario registrado exitosamente");
    navigate("/login");
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-black flex items-center justify-center px-4 text-white">
      <motion.form
        onSubmit={handleSubmit}
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="bg-[#1c1c1c] p-10 rounded-2xl shadow-2xl w-full max-w-md"
      >
        <h2 className="text-3xl font-bold mb-2 text-center">Crear cuenta</h2>
        <p className="text-sm text-gray-400 text-center mb-8">
          Regístrate con tus datos personales
        </p>

        <InputField
          label="Nombre completo"
          name="fullName"
          value={formData.fullName}
          onChange={handleChange}
          icon={<FaUser />}
        />
        <InputField
          label="Cédula"
          name="cc"
          value={formData.cc}
          onChange={handleChange}
          icon={<FaIdCard />}
        />
        <InputField
          label="Teléfono"
          name="phone"
          value={formData.phone}
          onChange={handleChange}
          icon={<FaPhone />}
        />
        <InputField
          label="Email"
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          icon={<FaEnvelope />}
        />
        <InputField
          label="Contraseña"
          type="password"
          name="password"
          value={formData.password}
          onChange={handleChange}
          icon={<FaLock />}
        />
        <InputField
          label="Confirmar contraseña"
          type="password"
          name="confirmPassword"
          value={formData.confirmPassword}
          onChange={handleChange}
          icon={<FaLock />}
        />

        <button
          type="submit"
          className="w-full bg-[#1E88E5] hover:bg-[#0D80F2] text-white font-semibold py-2 rounded-md mt-4 transition-all"
        >
          Registrarme
        </button>

        <div className="mt-6 text-center text-sm text-gray-400">
          ¿Ya tienes cuenta?{" "}
          <a href="/login" className="text-blue-500 hover:underline">
            Iniciar sesión
          </a>
        </div>
      </motion.form>
    </div>
  );
}
