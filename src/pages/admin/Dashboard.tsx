// src/components/Dashboard/Dashboard.tsx
import { useState, useMemo } from "react";
import Sidebar from "../../components/admin/Sidebar";
import HeaderBar from "../../components/admin/HeaderBar";
import StatCard from "../../components/admin/StatCard";
import ChartBox from "../../components/admin/ChartBox";
import CalendarBox from "../../components/admin/CalendarBox";
import PaymentsTable from "../../components/admin/PaymentsTable";
import ClientesDashboard from "../../components/admin/ClientesDashboard";
import { FaUsers, FaDollarSign } from "react-icons/fa";
import { useUsuarios } from "../../contexts/UserContext";

export default function Dashboard() {
  const [activePage, setActivePage] = useState("inicio");
  const { usuarios } = useUsuarios();

  const clientesActivos = useMemo(
    () => usuarios.filter((u) => u.role === "cliente" && u.estado === "activo").length,
    [usuarios]
  );

  const nuevosClientes = useMemo(
    () => usuarios.filter((u) => u.role === "cliente" && /* lógica */ true).length,
    [usuarios]
  );

  const entrenadores = useMemo(
    () => usuarios.filter((u) => u.role === "entrenador").length,
    [usuarios]
  );

  const totalIngresos = useMemo(() => clientesActivos * 80000, [clientesActivos]);

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col lg:flex-row">
      {/* Sidebar (hidden on small, visible on lg+) */}
      <div className="w-full lg:w-64 flex-shrink-0">
        <Sidebar onSelect={setActivePage} activePage={activePage} />
      </div>

      {/* Main Content */}
      <main className="flex-1 p-4 sm:p-6 space-y-6">
        <HeaderBar />

        {activePage === "inicio" && (
          <>
            {/* Stats Cards */}
            <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              <StatCard
                icon={<FaDollarSign />}
                title="Total Ingresos"
                value={`$${totalIngresos.toLocaleString()} COP`}
                change="+4.2%"
                color="green"
              />
              <StatCard
                icon={<FaUsers />}
                title="Clientes Activos"
                value={clientesActivos.toString()}
                change="+1.7%"
                color="green"
              />
              <StatCard
                icon={<FaUsers />}
                title="Nuevos Clientes"
                value={nuevosClientes.toString()}
                change="-2.9%"
                color="red"
              />
              <StatCard
                icon={<FaUsers />}
                title="Entrenadores"
                value={entrenadores.toString()}
                change="+0.9%"
                color="green"
              />
            </section>

            {/* Chart + Calendar */}
            <section className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              <div className="lg:col-span-2">
                <ChartBox />
              </div>
              <CalendarBox />
            </section>

            {/* Tabla de pagos */}
            <PaymentsTable />
          </>
        )}

        {activePage === "clientes" && <ClientesDashboard />}

        {activePage === "eventos" && (
          <section>
            <h2 className="text-2xl font-bold text-gray-800 mb-4">Eventos</h2>
            <p className="text-gray-500">Aquí puedes gestionar los eventos.</p>
          </section>
        )}

        {activePage === "entrenadores" && (
          <section>
            <h2 className="text-2xl font-bold text-gray-800 mb-4">Entrenadores</h2>
            <p className="text-gray-500">Sección para administrar entrenadores.</p>
          </section>
        )}

        {activePage === "productos" && (
          <section>
            <h2 className="text-2xl font-bold text-gray-800 mb-4">Productos</h2>
            <p className="text-gray-500">Aquí puedes agregar o editar productos.</p>
          </section>
        )}
      </main>
    </div>
  );
}
