// src/components/common/Card.tsx
export default function Card({
  title,
  value,
  color,
}: {
  title: string;
  value: number;
  color: string;
}) {
  return (
    <div className="bg-white rounded-lg p-4 shadow text-center">
      <h4 className="text-sm text-gray-500">{title}</h4>
      <p className={`text-2xl font-bold ${color}`}>{value}</p>
    </div>
  );
}
