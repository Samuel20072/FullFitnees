import { useState } from "react";
import InputField from "../components/auth/InputField";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const users = [
    {
      fullName: "Juan Pérez",
      email: "cliente@example.com",
      password: "cliente123",
      role: "cliente",
    },
    {
      fullName: "Ana Torres",
      email: "entrenador@example.com",
      password: "entrenador123",
      role: "entrenador",
    },
    {
      fullName: "Carlos Gómez",
      email: "admin@example.com",
      password: "admin123",
      role: "admin",
    },
  ];

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const foundUser = users.find(
      (u) => u.email === formData.email && u.password === formData.password
    );

    if (!foundUser) {
      alert("Usuario o contraseña incorrectos");
      return;
    }

    localStorage.setItem("loggedUser", JSON.stringify(foundUser));
    alert(`Bienvenido, ${foundUser.fullName} (${foundUser.role})`);

    // Redireccionar al dashboard o a la página que quieras
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
          className="w-full bg-[#1E88E5]  py-2 rounded-lg font-semibold text-black mt-4"
        >
          Login
        </button>
      </form>
    </div>
  );
}
