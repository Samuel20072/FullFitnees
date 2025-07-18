import { useState } from "react";
import Modal from "../common/Modal";
import { motion } from "framer-motion";
import { useUsuarios } from "../../contexts/UserContext";
import type { Usuario } from "../../contexts/UserContext";

export default function ClientesTable({ clientes }: { clientes: Usuario[] }) {
  const { updateUser } = useUsuarios();
  const [search, setSearch] = useState("");
  const [filtroEstado, setFiltroEstado] = useState("Todos");
  const [modalAbierto, setModalAbierto] = useState(false);
  const [clienteSeleccionado, setClienteSeleccionado] = useState<Usuario | null>(null);
  const [planSeleccionado, setPlanSeleccionado] = useState("Mensual");

  const filtrados = clientes.filter((cliente) => {
    const coincideBusqueda =
      cliente.fullName.toLowerCase().includes(search.toLowerCase()) ||
      cliente.email.toLowerCase().includes(search.toLowerCase());

    const coincideEstado =
      filtroEstado === "Todos" || cliente.estado === filtroEstado;

    return coincideBusqueda && coincideEstado && cliente.role === "cliente";
  });

  const abrirModalPago = (cliente: Usuario) => {
    setClienteSeleccionado(cliente);
    setModalAbierto(true);
  };

  const handleGuardarPago = (e: React.FormEvent) => {
    e.preventDefault();
    if (!clienteSeleccionado) return;

    const hoy = new Date();
    const fechaPago = hoy.toISOString().split("T")[0];
    const fechaVencimiento = new Date(hoy.setMonth(hoy.getMonth() + 1)).toISOString().split("T")[0];

    updateUser(clienteSeleccionado.cc, {
      estado: "activo",
      fechaPago,
      fechaVencimiento,
    });

    setModalAbierto(false);
  };

  return (
    <div className="bg-white rounded-xl shadow-sm ring-1 ring-gray-200 p-6 space-y-6">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
        <h3 className="text-2xl font-bold text-gray-800">Lista de Clientes</h3>
        <div className="flex flex-col md:flex-row gap-3 md:items-center">
          <input
            type="text"
            placeholder="Buscar por nombre o correo..."
            className="px-4 py-2 border border-gray-300 rounded-md shadow-sm text-sm w-full md:w-72"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
          <select
            className="border border-gray-300 bg-white px-4 py-2 rounded-md text-sm shadow-sm"
            value={filtroEstado}
            onChange={(e) => setFiltroEstado(e.target.value)}
          >
            <option value="Todos">Todos</option>
            <option value="activo">Activos</option>
            <option value="inactivo">Inactivos</option>
          </select>
        </div>
      </div>

      {/* Tabla */}
      <div className="overflow-x-auto">
        <table className="w-full text-sm text-left border-separate border-spacing-y-2">
          <thead className="text-gray-500">
            <tr>
              <th className="px-4 py-2 bg-gray-100 rounded-l-md">Nombre</th>
              <th className="px-4 py-2 bg-gray-100">Correo</th>
              <th className="px-4 py-2 bg-gray-100">Teléfono</th>
              <th className="px-4 py-2 bg-gray-100">Estado</th>
              <th className="px-4 py-2 bg-gray-100">Pago</th>
              <th className="px-4 py-2 bg-gray-100">Vencimiento</th>
              <th className="px-4 py-2 bg-gray-100 rounded-r-md">Acciones</th>
            </tr>
          </thead>
          <tbody>
            {filtrados.map((cliente) => (
              <motion.tr
                key={cliente.cc}
                layout
                className="bg-white shadow hover:bg-gray-50 rounded-md"
              >
                <td className="px-4 py-2 rounded-l-md">{cliente.fullName}</td>
                <td className="px-4 py-2">{cliente.email}</td>
                <td className="px-4 py-2">{cliente.phone}</td>
                <td
                  className={`px-4 py-2 font-semibold ${
                    cliente.estado === "activo"
                      ? "text-green-600"
                      : "text-red-600"
                  }`}
                >
                  {cliente.estado}
                </td>
                <td className="px-4 py-2">{cliente.fechaPago || "-"}</td>
                <td className="px-4 py-2">{cliente.fechaVencimiento || "-"}</td>
                <td className="px-4 py-2 flex flex-col md:flex-row gap-2 rounded-r-md">
                  <button
                    onClick={() => abrirModalPago(cliente)}
                    className="text-green-600 text-xs hover:underline"
                  >
                    Agregar Pago
                  </button>
                </td>
              </motion.tr>
            ))}
          </tbody>
        </table>

        {filtrados.length === 0 && (
          <div className="text-center text-gray-500 py-4">
            No se encontraron clientes.
          </div>
        )}
      </div>

      {/* Modal de pago */}
      <Modal
        isOpen={modalAbierto}
        onClose={() => setModalAbierto(false)}
        title={`Agregar Pago - ${clienteSeleccionado?.fullName}`}
      >
        <form onSubmit={handleGuardarPago} className="space-y-4">
          <div>
            <label className="text-sm text-gray-700 block mb-1">Tipo de Plan</label>
            <select
              className="w-full border rounded-md px-4 py-2 text-sm"
              value={planSeleccionado}
              onChange={(e) => setPlanSeleccionado(e.target.value)}
            >
              <option value="Mensual">Mensual</option>
              <option value="Trimestral">Trimestral</option>
              <option value="Anual">Anual</option>
            </select>
          </div>
          <div className="flex justify-end">
            <button
              type="submit"
              className="bg-indigo-600 text-white px-4 py-2 rounded-md text-sm hover:bg-indigo-700"
            >
              Guardar Pago
            </button>
          </div>
        </form>
      </Modal>
    </div>
  );
}
