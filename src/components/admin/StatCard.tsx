// src/components/Dashboard/StatCard.tsx
export default function StatCard({
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
