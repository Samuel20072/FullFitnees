// src/components/Dashboard/Dashboard.tsx
import { useState } from "react";
import Sidebar from "../../components/admin/Sidebar";
import HeaderBar from "../../components/admin/HeaderBar";
import StatCard from "../../components/admin/StatCard";
import ChartBox from "../../components/admin/ChartBox";
import CalendarBox from "../../components/admin/CalendarBox";
import PaymentsTable from "../../components/admin/PaymentsTable";
import { FaUsers, FaDollarSign } from "react-icons/fa";
import ClientesDashboard from "../../components/admin/ClientesDashboard";

export default function Dashboard() {
  const [activePage, setActivePage] = useState("inicio"); // ⬅ Página por defecto

  return (
    <div className="min-h-screen bg-gray-100 flex">
      <Sidebar onSelect={setActivePage} activePage={activePage} />

      <main className="flex-1 p-6 space-y-6">
        <HeaderBar />

        {/* Contenido dinámico */}
        {activePage === "inicio" && (
          <>
            <section className="grid grid-cols-4 gap-4">
              <StatCard icon={<FaDollarSign />} title="Total Ingresos" value="$23,902" change="+4.2%" color="green" />
              <StatCard icon={<FaUsers />} title="Clientes Activos" value="16,815" change="+1.7%" color="green" />
              <StatCard icon={<FaUsers />} title="Nuevos Clientes" value="1,457" change="-2.9%" color="red" />
              <StatCard icon={<FaUsers />} title="Entrenadores" value="12" change="+0.9%" color="green" />
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
