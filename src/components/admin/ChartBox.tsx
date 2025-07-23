// src/components/Dashboard/ChartBox.tsx
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  CartesianGrid,
} from "recharts";

const ingresosMensuales = [
  { mes: "Ene", valor: 4000 },
  { mes: "Feb", valor: 4200 },
  { mes: "Mar", valor: 8900 },
  { mes: "Abr", valor: 4300 },
  { mes: "May", valor: 7000 },
  { mes: "Jun", valor: 2800 },
];

export default function ChartBox() {
  return (
    <div className="col-span-2 bg-white rounded-xl shadow p-6 w-full min-w-[300px]">
      <h2 className="text-lg font-semibold mb-4 text-gray-800">Total Ingresos (Mensual)</h2>
      <ResponsiveContainer width="100%" height={250}>
        <BarChart data={ingresosMensuales}>
          <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
          <XAxis dataKey="mes" stroke="#888" />
          <YAxis stroke="#888" />
          <Tooltip
            contentStyle={{ backgroundColor: "#fff", borderRadius: "8px", borderColor: "#ccc" }}
            labelStyle={{ fontWeight: "bold" }}
          />
          <Bar dataKey="valor" fill="#1E88E5" radius={[6, 6, 0, 0]} />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}
