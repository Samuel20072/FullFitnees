import { useState } from "react";
import Card from "../common/Card";
import PieChartBox from "../common/PieChartBox";
import ClientesTable from "./ClientesTable";
import Modal from "../common/Modal"; // Asegúrate de tener un modal reutilizable

type Cliente = {
  id: number;
  nombre: string;
  correo: string;
  telefono: string;
  estado: string;
  plan: string;
  fechaRegistro: string;
};

const initialClientes: Cliente[] = [/* ...tus clientes */];

export default function ClientesDashboard() {
  const [clientes, setClientes] = useState<Cliente[]>(initialClientes);
  const [filtro, setFiltro] = useState("Todos");
  const [modalAbierto, setModalAbierto] = useState(false);

  // Nuevo cliente temporal
  const [nuevoCliente, setNuevoCliente] = useState<Partial<Cliente>>({
    nombre: "",
    correo: "",
    telefono: "",
    estado: "Activo",
    plan: "Mensual",
    fechaRegistro: new Date().toISOString().slice(0, 10),
  });

  const handleAgregarCliente = () => {
    if (!nuevoCliente.nombre || !nuevoCliente.correo) return;

    const nuevo: Cliente = {
      ...(nuevoCliente as Cliente),
      id: clientes.length + 1,
    };
    setClientes([...clientes, nuevo]);
    setModalAbierto(false);
    setNuevoCliente({
      nombre: "",
      correo: "",
      telefono: "",
      estado: "Activo",
      plan: "Mensual",
      fechaRegistro: new Date().toISOString().slice(0, 10),
    });
  };

  const filtrados = clientes.filter((c) =>
    filtro === "Todos" ? true : c.estado === filtro
  );

  const total = clientes.length;
  const activos = clientes.filter((c) => c.estado === "Activo").length;
  const inactivos = clientes.filter((c) => c.estado === "Inactivo").length;

  const dataEstado = [
    { name: "Activos", value: activos },
    { name: "Inactivos", value: inactivos },
  ];

  const planes = [...new Set(clientes.map((c) => c.plan))];
  const dataPlanes = planes.map((plan) => ({
    name: plan,
    value: clientes.filter((c) => c.plan === plan).length,
  }));

  return (
    <div className="bg-gray-100 p-8 rounded-xl min-h-screen space-y-10">
      {/* Header con botón */}
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
        <h2 className="text-3xl font-bold text-gray-800">Panel de Clientes</h2>
        <div className="flex gap-3 items-center">
          <select
            className="border border-gray-300 bg-white px-4 py-2 rounded-md text-sm shadow-sm"
            value={filtro}
            onChange={(e) => setFiltro(e.target.value)}
          >
            <option value="Todos">Todos</option>
            <option value="Activo">Activos</option>
            <option value="Inactivo">Inactivos</option>
          </select>
          <button
            onClick={() => setModalAbierto(true)}
            className="bg-indigo-600 text-white px-4 py-2 rounded-md text-sm shadow-sm hover:bg-indigo-700"
          >
            + Crear Cliente
          </button>
        </div>
      </div>

      {/* Tarjetas */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Card title="Total Clientes" value={total} color="text-indigo-600" />
        <Card title="Clientes Activos" value={activos} color="text-green-500" />
        <Card title="Clientes Inactivos" value={inactivos} color="text-red-500" />
      </div>

      {/* Gráficas */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <PieChartBox title="Distribución por Estado" data={dataEstado} colors={["#34D399", "#F87171"]} />
        <PieChartBox title="Clientes por Plan" data={dataPlanes} colors={["#6366f1", "#fbbf24", "#10b981"]} />
      </div>

      {/* Tabla */}
      <ClientesTable clientes={filtrados} />

      {/* Modal */}
      <Modal isOpen={modalAbierto} onClose={() => setModalAbierto(false)} title="Nuevo Cliente">
        <div className="space-y-3">
          <input
            type="text"
            placeholder="Nombre"
            value={nuevoCliente.nombre}
            onChange={(e) => setNuevoCliente({ ...nuevoCliente, nombre: e.target.value })}
            className="w-full border px-3 py-2 rounded-md text-sm"
          />
          <input
            type="email"
            placeholder="Correo"
            value={nuevoCliente.correo}
            onChange={(e) => setNuevoCliente({ ...nuevoCliente, correo: e.target.value })}
            className="w-full border px-3 py-2 rounded-md text-sm"
          />
          <input
            type="text"
            placeholder="Teléfono"
            value={nuevoCliente.telefono}
            onChange={(e) => setNuevoCliente({ ...nuevoCliente, telefono: e.target.value })}
            className="w-full border px-3 py-2 rounded-md text-sm"
          />
          <select
            value={nuevoCliente.estado}
            onChange={(e) => setNuevoCliente({ ...nuevoCliente, estado: e.target.value })}
            className="w-full border px-3 py-2 rounded-md text-sm"
          >
            <option value="Activo">Activo</option>
            <option value="Inactivo">Inactivo</option>
          </select>
          <select
            value={nuevoCliente.plan}
            onChange={(e) => setNuevoCliente({ ...nuevoCliente, plan: e.target.value })}
            className="w-full border px-3 py-2 rounded-md text-sm"
          >
            <option value="Mensual">Mensual</option>
            <option value="Trimestral">Trimestral</option>
            <option value="Anual">Anual</option>
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
