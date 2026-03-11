import { useAuth } from "@/src/context/AuthContext";
import { ShoppingBag, Package, Clock, CheckCircle2, Truck, XCircle } from "lucide-react";
import { motion } from "framer-motion";
import PageTransition from "@/src/components/PageTransition";

export default function Orders() {
  const { user } = useAuth();

  const orders = [
    { id: "BS-98765", date: "2024-03-10", total: 299.00, status: "Shipping", items: 2 },
    { id: "BS-98764", date: "2024-03-05", total: 189.00, status: "Completed", items: 1 },
    { id: "BS-98763", date: "2024-02-28", total: 75.00, status: "Cancelled", items: 1 },
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case "Completed": return "bg-emerald-100 text-emerald-600";
      case "Shipping": return "bg-blue-100 text-blue-600";
      case "Pending": return "bg-amber-100 text-amber-600";
      case "Cancelled": return "bg-red-100 text-red-600";
      default: return "bg-gray-100 text-gray-600";
    }
  };

  const getStatusIcon = (status: string) => {
    switch (status) {
      case "Completed": return <CheckCircle2 size={14} />;
      case "Shipping": return <Truck size={14} />;
      case "Pending": return <Clock size={14} />;
      case "Cancelled": return <XCircle size={14} />;
      default: return <Package size={14} />;
    }
  };

  return (
    <PageTransition>
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="flex items-center gap-4">
          <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-blue-100 text-blue-600">
            <ShoppingBag size={24} />
          </div>
          <div>
            <h1 className="text-4xl font-extrabold text-gray-900">My Orders</h1>
            <p className="mt-1 text-gray-500">Track and manage your recent purchases.</p>
          </div>
        </div>

        <div className="mt-12 space-y-6">
          {orders.map((order, i) => (
            <motion.div
              key={order.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              className="group overflow-hidden rounded-[32px] bg-white p-8 shadow-sm ring-1 ring-gray-100 transition-all hover:shadow-xl"
            >
              <div className="flex flex-col gap-8 sm:flex-row sm:items-center sm:justify-between">
                <div className="flex items-center gap-6">
                  <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-gray-50 text-gray-400">
                    <Package size={32} />
                  </div>
                  <div>
                    <p className="text-sm font-bold text-gray-400 uppercase tracking-widest">Order ID</p>
                    <h3 className="text-xl font-extrabold text-gray-900">{order.id}</h3>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-8 sm:grid-cols-3">
                  <div>
                    <p className="text-xs font-bold text-gray-400 uppercase tracking-widest">Date</p>
                    <p className="mt-1 font-bold text-gray-900">{order.date}</p>
                  </div>
                  <div>
                    <p className="text-xs font-bold text-gray-400 uppercase tracking-widest">Items</p>
                    <p className="mt-1 font-bold text-gray-900">{order.items} Products</p>
                  </div>
                  <div>
                    <p className="text-xs font-bold text-gray-400 uppercase tracking-widest">Total</p>
                    <p className="mt-1 font-extrabold text-blue-600">${order.total.toFixed(2)}</p>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <span className={`flex items-center gap-2 rounded-full px-4 py-2 text-xs font-bold ${getStatusColor(order.status)}`}>
                    {getStatusIcon(order.status)} {order.status}
                  </span>
                  <button className="rounded-xl bg-gray-50 px-6 py-3 text-sm font-bold text-gray-500 transition-all hover:bg-gray-100">
                    Details
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </PageTransition>
  );
}
