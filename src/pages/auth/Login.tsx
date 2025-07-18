import { useState } from "react";
import InputField from "../../components/auth/InputField";
import { useNavigate } from "react-router-dom";
import { useUsuarios } from "../../contexts/UserContext"; // Asegúrate del path correcto

export default function Login() {
  const navigate = useNavigate();
  const { usuarios } = useUsuarios(); // Usamos los usuarios del contexto

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const foundUser = usuarios.find(
      (u) =>
        u.email === formData.email &&
        u.password === formData.password
    );

    if (!foundUser) {
      alert("Usuario o contraseña incorrectos");
      return;
    }

    if (foundUser.estado !== "activo") {
      alert("Tu cuenta está inactiva. Por favor renueva tu mensualidad.");
      return;
    }

    localStorage.setItem("loggedUser", JSON.stringify(foundUser));
    alert(`Bienvenido, ${foundUser.fullName} (${foundUser.role})`);

    // Redirigir según el rol si lo deseas
    navigate("/");
  };

  return (
    <div className="min-h-screen bg-black flex items-center justify-center text-white">
      <form
        onSubmit={handleSubmit}
        className="bg-[#111] p-10 rounded-xl shadow-lg w-full max-w-md"
      >
        <h2 className="text-2xl font-bold mb-6 text-center">Login</h2>
        <InputField
          label="Email"
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
        />
        <InputField
          label="Password"
          type="password"
          name="password"
          value={formData.password}
          onChange={handleChange}
        />
        <button
          type="submit"
          className="w-full bg-[#1E88E5] py-2 rounded-lg font-semibold text-black mt-4"
        >
          Login
        </button>
      </form>
    </div>
  );
}
