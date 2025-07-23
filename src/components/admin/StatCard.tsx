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
    <div className="bg-white p-5 rounded-xl shadow-md flex flex-col gap-2 w-full min-w-[140px]">
      <div className="flex items-center justify-between">
        <span className="text-sm text-gray-500">{title}</span>
        <span className="text-xl text-gray-400">{icon}</span>
      </div>

      <div className="flex items-end justify-between">
        <span className="text-2xl font-bold text-gray-900">{value}</span>
        <span className={`text-sm font-medium ${color === "green" ? "text-green-600" : "text-red-600"}`}>
          {change}
        </span>
      </div>
    </div>
  );
}
