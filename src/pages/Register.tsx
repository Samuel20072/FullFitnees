import { useState } from "react";
import InputField from "../components/auth/InputField";

export default function Register() {
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
      alert("Passwords do not match");
      return;
    }

    const userToSave = {
      fullName: formData.fullName,
      cc: formData.cc,
      phone: formData.phone,
      email: formData.email,
    };

    localStorage.setItem("registeredUser", JSON.stringify(userToSave));
    alert("Usuario registrado exitosamente");

    // Puedes redirigir al login si lo deseas:
    // navigate("/login");
  };

  return (
    <div className="min-h-screen bg-black flex items-center justify-center text-white">
      <form
        onSubmit={handleSubmit}
        className="bg-[#111] p-10 rounded-xl shadow-lg w-full max-w-md"
      >
        <h2 className="text-2xl font-bold mb-6 text-center">Register</h2>

        <InputField
          label="Full Name"
          type="text"
          name="fullName"
          value={formData.fullName}
          onChange={handleChange}
        />
        <InputField
          label="C.C."
          type="text"
          name="cc"
          value={formData.cc}
          onChange={handleChange}
        />
        <InputField
          label="Phone Number"
          type="text"
          name="phone"
          value={formData.phone}
          onChange={handleChange}
        />
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
        <InputField
          label="Confirm Password"
          type="password"
          name="confirmPassword"
          value={formData.confirmPassword}
          onChange={handleChange}
        />

        <button
          type="submit"
          className="w-full bg-[#1E88E5]  py-2 rounded-lg font-semibold text-black mt-4"
        >
          Register
        </button>
      </form>
    </div>
  );
}
