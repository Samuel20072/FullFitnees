// src/components/common/PieChartBox.tsx
import { PieChart, Pie, Cell, Tooltip, ResponsiveContainer } from "recharts";

type DataItem = { name: string; value: number };
type Props = {
  title: string;
  data: DataItem[];
  colors: string[];
};

export default function PieChartBox({ title, data, colors }: Props) {
  return (
    <div className="bg-white rounded-xl shadow-sm p-6 ring-1 ring-gray-200">
      <h3 className="text-lg font-semibold text-gray-800 mb-4">{title}</h3>
      <ResponsiveContainer width="100%" height={250}>
        <PieChart>
          <Pie
            data={data}
            dataKey="value"
            nameKey="name"
            cx="50%"
            cy="50%"
            outerRadius={80}
            label
          >
            {data.map((_, index) => (
              <Cell key={`cell-${index}`} fill={colors[index % colors.length]} />
            ))}
          </Pie>
          <Tooltip />
        </PieChart>
      </ResponsiveContainer>
    </div>
  );
}
