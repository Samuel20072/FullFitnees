import { useState } from "react";
import InputField from "../components/auth/InputField";

export default function Login() {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Login", formData);
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
          className="w-full bg-green-500 py-2 rounded-lg font-semibold text-black mt-4"
        >
          Login
        </button>
      </form>
    </div>
  );
}