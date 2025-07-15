import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import { FaChartBar, FaUsers, FaCalendarAlt, FaDollarSign } from "react-icons/fa";

const ingresosMensuales = [
  { mes: "Jan", valor: 4000 },
  { mes: "Feb", valor: 4200 },
  { mes: "Mar", valor: 8900 },
  { mes: "Apr", valor: 4300 },
  { mes: "May", valor: 7000 },
  { mes: "Jun", valor: 2800 },
];

const pagos = [
  {
    curso: "Plan mensual",
    cliente: "Juan Pérez",
    id: "#112345",
    monto: "$70.000",
    estado: "Pagado",
  },
  {
    curso: "Plan trimestral",
    cliente: "Ana López",
    id: "#112346",
    monto: "$180.000",
    estado: "Pagado",
  },
  {
    curso: "Plan mensual",
    cliente: "Carlos Ruiz",
    id: "#112347",
    monto: "$70.000",
    estado: "Pendiente",
  },
];

export default function Dashboard() {
  return (
    <div className="min-h-screen bg-gray-100 flex">
      {/* Sidebar */}
      <aside className="w-64 bg-white shadow-md p-6 flex flex-col gap-6">
        <h1 className="text-2xl font-bold text-indigo-600">FullFit</h1>
        <nav className="flex flex-col gap-3 text-gray-700">
          <a href="#" className="font-semibold text-indigo-600">
            Dashboard
          </a>
          <a href="#">Clientes</a>
          <a href="#">Eventos</a>
          <a href="#">Entrenadores</a>
          <a href="#">Productos</a>
        </nav>
        <div className="mt-auto text-sm text-gray-400">© 2025 FullFit</div>
      </aside>

      {/* Main */}
      <main className="flex-1 p-6 space-y-6">
        <header className="flex justify-between items-center">
          <h2 className="text-xl font-bold">Dashboard</h2>
          <input
            type="text"
            placeholder="Buscar..."
            className="border px-3 py-2 rounded-md shadow-sm w-64"
          />
        </header>

        {/* Stats */}
        <section className="grid grid-cols-4 gap-4">
          <StatCard icon={<FaDollarSign />} title="Total Ingresos" value="$23,902" change="+4.2%" color="green" />
          <StatCard icon={<FaUsers />} title="Clientes Activos" value="16,815" change="+1.7%" color="green" />
          <StatCard icon={<FaUsers />} title="Nuevos Clientes" value="1,457" change="-2.9%" color="red" />
          <StatCard icon={<FaUsers />} title="Entrenadores" value="12" change="+0.9%" color="green" />
        </section>

        {/* Graficador y calendario */}
        <section className="grid grid-cols-3 gap-6">
          <div className="col-span-2 bg-white rounded-xl shadow p-6">
            <h2 className="text-lg font-semibold mb-4">Total Ingresos</h2>
            <ResponsiveContainer width="100%" height={250}>
              <BarChart data={ingresosMensuales}>
                <XAxis dataKey="mes" />
                <YAxis />
                <Tooltip />
                <Bar dataKey="valor" fill="#6366f1" radius={[4, 4, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </div>

          <div className="bg-white rounded-xl shadow p-6 flex flex-col justify-between">
            <div>
              <h2 className="text-lg font-semibold mb-4">Septiembre 2024</h2>
              <div className="grid grid-cols-7 text-center text-sm text-gray-600">
                <span>Lun</span>
                <span>Mar</span>
                <span>Mié</span>
                <span>Jue</span>
                <span>Vie</span>
                <span>Sáb</span>
                <span>Dom</span>
                {Array.from({ length: 30 }, (_, i) => (
                  <div
                    key={i}
                    className={`py-1 ${
                      i === 18 ? "bg-indigo-600 text-white rounded-full" : ""
                    }`}
                  >
                    {i + 1}
                  </div>
                ))}
              </div>
            </div>
            <div className="mt-4">
              <h3 className="text-sm text-gray-500">Crecimiento comunidad</h3>
              <p className="text-4xl font-bold text-indigo-600">65%</p>
              <p className="text-sm text-gray-400">+0.9% desde el mes pasado</p>
            </div>
          </div>
        </section>

        {/* Pagos recientes */}
        <section className="bg-white p-6 rounded-xl shadow">
          <h2 className="text-lg font-semibold mb-4">Últimos Pagos</h2>
          <table className="w-full text-sm text-left">
            <thead className="text-gray-400 border-b">
              <tr>
                <th className="pb-2">Plan</th>
                <th className="pb-2">Cliente</th>
                <th className="pb-2">ID</th>
                <th className="pb-2">Monto</th>
                <th className="pb-2">Estado</th>
              </tr>
            </thead>
            <tbody>
              {pagos.map((pago, i) => (
                <tr key={i} className="border-b text-gray-700">
                  <td className="py-2">{pago.curso}</td>
                  <td>{pago.cliente}</td>
                  <td>{pago.id}</td>
                  <td>{pago.monto}</td>
                  <td
                    className={`font-medium ${
                      pago.estado === "Pagado"
                        ? "text-green-600"
                        : "text-yellow-500"
                    }`}
                  >
                    {pago.estado}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </section>
      </main>
    </div>
  );
}

function StatCard({
  icon,
  title,
  value,
  change,
  color,
}: {
  icon: React.ReactNode;
  title: string;
  value: string;
  change: string;
  color: "green" | "red";
}) {
  return (
    <div className="bg-white p-4 rounded-xl shadow flex flex-col gap-1">
      <div className="text-gray-400 text-sm">{title}</div>
      <div className="flex items-center gap-2">
        <span className="text-2xl font-bold">{value}</span>
        <span className={`text-sm ${color === "green" ? "text-green-600" : "text-red-600"}`}>
          {change}
        </span>
      </div>
    </div>
  );
}
