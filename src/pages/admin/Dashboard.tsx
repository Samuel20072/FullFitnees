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

  // Memoizar conteos
  const clientesActivos = useMemo(
    () => usuarios.filter((u) => u.role === "cliente" && u.estado === "activo").length,
    [usuarios]
  );

  const nuevosClientes = useMemo(
    () => usuarios.filter((u) => u.role === "cliente" && /* lógica de fecha */ true).length,
    [usuarios]
  );

  const entrenadores = useMemo(
    () => usuarios.filter((u) => u.role === "entrenador").length,
    [usuarios]
  );

  // Suponiendo que ingresos son 80.000 por cliente activo
  const totalIngresos = useMemo(() => clientesActivos * 80000, [clientesActivos]);

  return (
    <div className="min-h-screen bg-gray-100 flex">
      <Sidebar onSelect={setActivePage} activePage={activePage} />

      <main className="flex-1 p-6 space-y-6">
        <HeaderBar />

        {activePage === "inicio" && (
          <>
            <section className="grid grid-cols-4 gap-4">
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

            <section className="grid grid-cols-3 gap-6">
              <ChartBox />
              <CalendarBox />
            </section>

            <PaymentsTable />
          </>
        )}

        {activePage === "clientes" && <ClientesDashboard />}

        {activePage === "eventos" && (
          <div>
            <h2 className="text-2xl font-bold text-gray-800">Eventos</h2>
          </div>
        )}

        {activePage === "entrenadores" && (
          <div>
            <h2 className="text-2xl font-bold text-gray-800">Entrenadores</h2>
          </div>
        )}

        {activePage === "productos" && (
          <div>
            <h2 className="text-2xl font-bold text-gray-800">Productos</h2>
          </div>
        )}
      </main>
    </div>
  );
}
