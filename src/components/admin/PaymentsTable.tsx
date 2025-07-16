// src/components/Dashboard/PaymentsTable.tsx
const pagos = [
  { curso: "Plan mensual", cliente: "Juan Pérez", id: "#112345", monto: "$70.000", estado: "Pagado" },
  { curso: "Plan trimestral", cliente: "Ana López", id: "#112346", monto: "$180.000", estado: "Pagado" },
  { curso: "Plan mensual", cliente: "Carlos Ruiz", id: "#112347", monto: "$70.000", estado: "Pendiente" },
];

export default function PaymentsTable() {
  return (
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
              <td className={`font-medium ${pago.estado === "Pagado" ? "text-green-600" : "text-yellow-500"}`}>
                {pago.estado}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </section>
  );
}
