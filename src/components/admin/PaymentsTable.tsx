// src/components/Dashboard/PaymentsTable.tsx
import { useUsuarios } from "../../contexts/UserContext";

export default function PaymentsTable() {
  const { usuarios } = useUsuarios();

  const pagos = usuarios
    .filter((u) => u.role === "cliente" && u.fechaPago && u.fechaVencimiento)
    .map((u, index) => ({
      plan: "Plan mensual", // o puedes calcular según fechas
      cliente: u.fullName,
      id: `#PAG-${index + 1000}`,
      monto: "$80.000", // fijo o variable según el plan
      estado: u.estado === "activo" ? "Pagado" : "Pendiente",
    }));

  return (
    <section className="bg-white p-6 rounded-xl shadow overflow-x-auto">
      <h2 className="text-lg font-semibold mb-4 text-gray-800">Últimos Pagos</h2>

      {pagos.length === 0 ? (
        <p className="text-gray-500 text-sm">No hay pagos registrados aún.</p>
      ) : (
        <table className="w-full min-w-[600px] text-sm text-left">
          <thead className="text-gray-500 border-b">
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
              <tr
                key={i}
                className="border-b text-gray-700 hover:bg-gray-50 transition"
              >
                <td className="py-2">{pago.plan}</td>
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
      )}
    </section>
  );
}
