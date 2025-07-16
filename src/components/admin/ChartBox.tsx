// src/components/Dashboard/ChartBox.tsx
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const ingresosMensuales = [
  { mes: "Jan", valor: 4000 },
  { mes: "Feb", valor: 4200 },
  { mes: "Mar", valor: 8900 },
  { mes: "Apr", valor: 4300 },
  { mes: "May", valor: 7000 },
  { mes: "Jun", valor: 2800 },
];

export default function ChartBox() {
  return (
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
  );
}
