import { useState } from "react";
import Card from "../common/Card";
import PieChartBox from "../common/PieChartBox";
import ClientesTable from "./ClientesTable";
import Modal from "../common/Modal";
import { useUsuarios } from "../../contexts/UserContext";
import type { Usuario } from "../../contexts/UserContext";

export default function ClientesDashboard() {
  const { usuarios, addUser } = useUsuarios();
  const [filtro, setFiltro] = useState<"Todos" | "activo" | "inactivo">("Todos");
  const [modalAbierto, setModalAbierto] = useState(false);

  const [nuevoCliente, setNuevoCliente] = useState<Partial<Usuario>>({
    cc: "",
    fullName: "",
    username: "",
    email: "",
    phone: "",
    password: "cliente123",
    role: "cliente",
    estado: "activo",
  });

  const handleAgregarCliente = () => {
    if (
      !nuevoCliente.cc ||
      !nuevoCliente.fullName ||
      !nuevoCliente.username ||
      !nuevoCliente.email ||
      !nuevoCliente.phone
    ) {
      alert("Completa todos los campos requeridos");
      return;
    }

    const hoy = new Date();
    const fechaPago = hoy.toISOString().split("T")[0];
    const fechaVencimiento = new Date(hoy.setMonth(hoy.getMonth() + 1))
      .toISOString()
      .split("T")[0];

    addUser({
      ...(nuevoCliente as Usuario),
      role: nuevoCliente.role as "cliente",
      estado: nuevoCliente.estado as "activo" | "inactivo",
      fechaPago: nuevoCliente.estado === "activo" ? fechaPago : undefined,
      fechaVencimiento: nuevoCliente.estado === "activo" ? fechaVencimiento : undefined,
    });

    setModalAbierto(false);
    setNuevoCliente({
      cc: "",
      fullName: "",
      username: "",
      email: "",
      phone: "",
      password: "cliente123",
      role: "cliente",
      estado: "activo",
    });
  };

  const clientesFiltrados = usuarios.filter(
    (u) => u.role === "cliente" && (filtro === "Todos" || u.estado === filtro)
  );

  const total = usuarios.filter((u) => u.role === "cliente").length;
  const activos = usuarios.filter((u) => u.role === "cliente" && u.estado === "activo").length;
  const inactivos = usuarios.filter((u) => u.role === "cliente" && u.estado === "inactivo").length;

  const dataEstado = [
    { name: "Activos", value: activos },
    { name: "Inactivos", value: inactivos },
  ];

  return (
    <div className="bg-gray-100 p-4 md:p-8 rounded-xl min-h-screen space-y-10">
      {/* Header con botón */}
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
        <h2 className="text-3xl font-bold text-gray-800">Panel de Clientes</h2>
        <div className="flex flex-col sm:flex-row gap-3 items-stretch sm:items-center">
          <select
            className="border border-gray-300 bg-white px-4 py-2 rounded-md text-sm shadow-sm"
            value={filtro}
            onChange={(e) => setFiltro(e.target.value as "Todos" | "activo" | "inactivo")}
          >
            <option value="Todos">Todos</option>
            <option value="activo">Activos</option>
            <option value="inactivo">Inactivos</option>
          </select>
          <button
            onClick={() => setModalAbierto(true)}
            className="bg-[#1E88E5] text-white px-4 py-2 rounded-md text-sm shadow-sm hover:bg-blue-700"
          >
            + Crear Cliente
          </button>
        </div>
      </div>

      {/* Tarjetas */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        <Card title="Total Clientes" value={total} color="text-[#1E88E5]" />
        <Card title="Clientes Activos" value={activos} color="text-green-500" />
        <Card title="Clientes Inactivos" value={inactivos} color="text-red-500" />
      </div>

      {/* Gráficas */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <PieChartBox title="Distribución por Estado" data={dataEstado} colors={["#34D399", "#F87171"]} />
        <PieChartBox title="Clientes por Plan" data={[]} colors={["#6366f1", "#fbbf24", "#10b981"]} />
      </div>

      {/* Tabla de clientes */}
      <ClientesTable clientes={clientesFiltrados} />

      {/* Modal responsive */}
      <Modal isOpen={modalAbierto} onClose={() => setModalAbierto(false)} title="Nuevo Cliente">
        <div className="space-y-3">
          {[
            { name: "cc", placeholder: "Cédula" },
            { name: "fullName", placeholder: "Nombre completo" },
            { name: "username", placeholder: "Nombre de usuario" },
            { name: "email", placeholder: "Correo" },
            { name: "phone", placeholder: "Teléfono" },
          ].map(({ name, placeholder }) => (
            <input
              key={name}
              type="text"
              placeholder={placeholder}
              value={(nuevoCliente as any)[name]}
              onChange={(e) =>
                setNuevoCliente((prev) => ({
                  ...prev,
                  [name]: e.target.value,
                }))
              }
              className="w-full border px-3 py-2 rounded-md text-sm"
            />
          ))}

          <select
            value={nuevoCliente.estado}
            onChange={(e) => setNuevoCliente({ ...nuevoCliente, estado: e.target.value as "activo" | "inactivo" })}
            className="w-full border px-3 py-2 rounded-md text-sm"
          >
            <option value="activo">Activo</option>
            <option value="inactivo">Inactivo</option>
          </select>
        </div>

        <div className="mt-4 text-right">
          <button
            onClick={handleAgregarCliente}
            className="bg-green-600 text-white px-4 py-2 rounded-md text-sm hover:bg-green-700"
          >
            Guardar Cliente
          </button>
        </div>
      </Modal>
    </div>
  );
}
