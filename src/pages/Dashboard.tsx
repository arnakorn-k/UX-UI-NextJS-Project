<<<<<<< HEAD
import React, { useState } from "react";
import { useAuth } from "@/src/context/AuthContext";
import { useProducts, Product } from "@/src/context/ProductContext";
import { useToast } from "@/src/context/ToastContext";
import { 
  LayoutDashboard, 
  Package, 
  ShoppingBag, 
  Users, 
  Plus, 
  Edit3, 
  Trash2, 
  Search,
  TrendingUp,
  DollarSign,
  Menu,
  X,
  LogOut
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import PageTransition from "@/src/components/PageTransition";

export default function Dashboard() {
  const { user, isAdmin, logout } = useAuth();
  const { products, addProduct, updateProduct, deleteProduct } = useProducts();
  const { addToast } = useToast();
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editingProduct, setEditingProduct] = useState<Product | null>(null);
  const [activeTab, setActiveTab] = useState("Dashboard");

  const [formData, setFormData] = useState({
    name: "",
    price: 0,
    category: "",
    stock: 0,
    description: "",
    image: ""
  });

  const handleOpenModal = (product?: Product) => {
    if (product) {
      setEditingProduct(product);
      setFormData({
        name: product.name,
        price: product.price,
        category: product.category,
        stock: product.stock,
        description: product.description,
        image: product.image
      });
    } else {
      setEditingProduct(null);
      setFormData({ name: "", price: 0, category: "", stock: 0, description: "", image: "" });
    }
    setIsModalOpen(true);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (editingProduct) {
      updateProduct(editingProduct.id, formData);
      addToast("Product updated successfully", "success");
    } else {
      addProduct(formData);
      addToast("Product added successfully", "success");
    }
    setIsModalOpen(false);
  };

  const stats = [
    { label: "Total Revenue", value: "$12,450", icon: <DollarSign />, color: "bg-blue-500" },
    { label: "Total Orders", value: "156", icon: <ShoppingBag />, color: "bg-emerald-500" },
    { label: "Total Products", value: products.length.toString(), icon: <Package />, color: "bg-amber-500" },
    { label: "New Customers", value: "42", icon: <Users />, color: "bg-purple-500" },
  ];
=======
import { 
  LayoutDashboard, 
  ShoppingBag, 
  User, 
  Heart, 
  Settings, 
  LogOut,
  Search,
  Bell,
  Plus,
  Calendar,
  MoreHorizontal,
  ChevronLeft,
  ChevronRight
} from "lucide-react";
import { Link, useNavigate } from "react-router-dom";
import { motion } from "motion/react";

const stats = [
  { label: "Total Spent", value: "$2,450.00", trend: "+12%", icon: "💳", color: "bg-blue-50", trendColor: "text-emerald-500" },
  { label: "Active Orders", value: "04", trend: "In Transit", icon: "🚚", color: "bg-purple-50", trendColor: "text-blue-500" },
  { label: "Reward Points", value: "1,280", trend: "Gold", icon: "💎", color: "bg-orange-50", trendColor: "text-orange-500" },
  { label: "Items Bought", value: "42", trend: "", icon: "🛍️", color: "bg-emerald-50", trendColor: "text-gray-400" },
];

const orders = [
  { id: "#ORD-7721", product: "Wireless Headphones X1", date: "Oct 24, 2023", status: "Shipped", amount: "$299.00", image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&q=80&w=100" },
  { id: "#ORD-6612", product: "Leather Desk Chair", date: "Oct 21, 2023", status: "Delivered", amount: "$1,250.00", image: "https://images.unsplash.com/photo-1505843490538-5133c6c7d0e1?auto=format&fit=crop&q=80&w=100" },
  { id: "#ORD-5590", product: "RGB Mechanical Keyboard", date: "Oct 18, 2023", status: "Processing", amount: "$159.99", image: "https://images.unsplash.com/photo-1511467687858-23d96c32e4ae?auto=format&fit=crop&q=80&w=100" },
  { id: "#ORD-4401", product: "Desk Organizer Set", date: "Oct 15, 2023", status: "Delivered", amount: "$45.00", image: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?auto=format&fit=crop&q=80&w=100" },
];

export default function Dashboard() {
  const navigate = useNavigate();
>>>>>>> 7b5cd04338e29b30299724e59f508cee8c52e0bf

  return (
    <div className="flex min-h-screen bg-gray-50">
      {/* Sidebar */}
<<<<<<< HEAD
      <AnimatePresence mode="wait">
        {isSidebarOpen && (
          <motion.aside
            initial={{ x: -280 }}
            animate={{ x: 0 }}
            exit={{ x: -280 }}
            className="fixed inset-y-0 left-0 z-50 w-72 bg-white shadow-xl lg:static"
          >
            <div className="flex h-full flex-col p-6">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-blue-600 text-white">
                    <LayoutDashboard size={18} />
                  </div>
                  <span className="text-xl font-bold tracking-tight text-gray-900">BlueAdmin</span>
                </div>
                <button onClick={() => setIsSidebarOpen(false)} className="lg:hidden">
                  <X size={24} />
                </button>
              </div>

              <nav className="mt-12 flex-1 space-y-2">
                {["Dashboard", "Orders", "Products", "Customers", "Settings"].map(tab => (
                  <button
                    key={tab}
                    onClick={() => setActiveTab(tab)}
                    className={`flex w-full items-center gap-3 rounded-xl px-4 py-3 text-sm font-bold transition-all ${
                      activeTab === tab ? "bg-blue-600 text-white shadow-lg shadow-blue-200" : "text-gray-500 hover:bg-gray-50"
                    }`}
                  >
                    {tab === "Dashboard" && <LayoutDashboard size={18} />}
                    {tab === "Orders" && <ShoppingBag size={18} />}
                    {tab === "Products" && <Package size={18} />}
                    {tab === "Customers" && <Users size={18} />}
                    {tab === "Settings" && <TrendingUp size={18} />}
                    {tab}
                  </button>
                ))}
              </nav>

              <button 
                onClick={logout}
                className="mt-auto flex items-center gap-3 rounded-xl px-4 py-3 text-sm font-bold text-red-500 hover:bg-red-50"
              >
                <LogOut size={18} /> Logout
              </button>
            </div>
          </motion.aside>
        )}
      </AnimatePresence>

      {/* Main Content */}
      <main className="flex-1 overflow-auto">
        <header className="flex h-16 items-center justify-between border-b border-gray-100 bg-white px-8">
          <div className="flex items-center gap-4">
            {!isSidebarOpen && (
              <button onClick={() => setIsSidebarOpen(true)} className="p-2 text-gray-500">
                <Menu size={24} />
              </button>
            )}
            <h2 className="text-lg font-bold text-gray-900">{activeTab}</h2>
          </div>
          <div className="flex items-center gap-4">
            <div className="relative hidden sm:block">
              <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-400" />
              <input 
                type="text" 
                placeholder="Search..." 
                className="rounded-xl border border-gray-100 bg-gray-50 py-2 pl-10 pr-4 text-xs outline-none focus:ring-2 focus:ring-blue-500/10"
              />
            </div>
            <div className="h-8 w-8 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center font-bold text-xs">
              {user?.username[0]}
            </div>
=======
      <aside className="fixed left-0 top-0 hidden h-full w-64 flex-col border-r border-gray-100 bg-white lg:flex">
        <div className="flex h-16 items-center gap-3 px-8">
          <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-blue-600 text-white">
            <ShoppingBag size={18} />
          </div>
          <span className="text-xl font-bold tracking-tight text-gray-900">E-Shop</span>
        </div>

        <nav className="mt-8 flex-1 space-y-2 px-4">
          <Link to="#" className="flex items-center gap-3 rounded-xl bg-blue-50 px-4 py-3 text-sm font-bold text-blue-600">
            <LayoutDashboard size={20} /> Dashboard
          </Link>
          <Link to="#" className="flex items-center gap-3 rounded-xl px-4 py-3 text-sm font-bold text-gray-500 hover:bg-gray-50 hover:text-gray-900">
            <ShoppingBag size={20} /> Orders
          </Link>
          <Link to="#" className="flex items-center gap-3 rounded-xl px-4 py-3 text-sm font-bold text-gray-500 hover:bg-gray-50 hover:text-gray-900">
            <User size={20} /> Profile
          </Link>
          <Link to="#" className="flex items-center gap-3 rounded-xl px-4 py-3 text-sm font-bold text-gray-500 hover:bg-gray-50 hover:text-gray-900">
            <Heart size={20} /> Wishlist
          </Link>
          <Link to="#" className="flex items-center gap-3 rounded-xl px-4 py-3 text-sm font-bold text-gray-500 hover:bg-gray-50 hover:text-gray-900">
            <Settings size={20} /> Settings
          </Link>
        </nav>

        <div className="mt-auto border-t border-gray-100 p-6">
          <div className="flex items-center gap-3">
            <img 
              src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=100" 
              alt="User" 
              className="h-10 w-10 rounded-full object-cover"
            />
            <div className="flex-1 overflow-hidden">
              <p className="truncate text-sm font-bold text-gray-900">Alex Johnson</p>
              <p className="truncate text-xs text-gray-400">Premium Member</p>
            </div>
          </div>
          <button 
            onClick={() => navigate("/")}
            className="mt-6 flex w-full items-center justify-center gap-2 rounded-xl bg-gray-50 py-3 text-sm font-bold text-gray-500 hover:bg-gray-100 hover:text-gray-900"
          >
            <LogOut size={18} /> Logout
          </button>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 lg:ml-64">
        {/* Header */}
        <header className="sticky top-0 z-10 flex h-16 items-center justify-between border-b border-gray-100 bg-white/80 px-8 backdrop-blur-md">
          <div className="relative w-96">
            <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-400" />
            <input
              type="text"
              placeholder="Search orders, products or tracking..."
              className="h-10 w-full rounded-xl bg-gray-100 pl-10 pr-4 text-sm outline-none focus:ring-2 focus:ring-blue-500/20"
            />
          </div>
          <div className="flex items-center gap-4">
            <button className="relative rounded-xl p-2 text-gray-400 hover:bg-gray-50 hover:text-gray-900">
              <Bell size={20} />
              <span className="absolute right-2 top-2 h-2 w-2 rounded-full bg-red-500 ring-2 ring-white"></span>
            </button>
            <button className="flex items-center gap-2 rounded-xl bg-blue-600 px-4 py-2 text-sm font-bold text-white hover:bg-blue-700">
              <ShoppingBag size={18} /> Cart (3)
            </button>
>>>>>>> 7b5cd04338e29b30299724e59f508cee8c52e0bf
          </div>
        </header>

        <div className="p-8">
<<<<<<< HEAD
          <PageTransition>
            {activeTab === "Dashboard" && (
              <div className="space-y-8">
                <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
                  {stats.map((stat, i) => (
                    <motion.div
                      key={i}
                      whileHover={{ y: -5 }}
                      className="rounded-3xl bg-white p-6 shadow-sm ring-1 ring-gray-100"
                    >
                      <div className={`flex h-12 w-12 items-center justify-center rounded-2xl ${stat.color} text-white`}>
                        {stat.icon}
                      </div>
                      <p className="mt-4 text-sm font-bold text-gray-500">{stat.label}</p>
                      <p className="mt-1 text-2xl font-extrabold text-gray-900">{stat.value}</p>
                    </motion.div>
                  ))}
                </div>

                <div className="rounded-[32px] bg-white p-8 shadow-sm ring-1 ring-gray-100">
                  <div className="flex items-center justify-between">
                    <h3 className="text-xl font-extrabold text-gray-900">Recent Orders</h3>
                    <button className="text-sm font-bold text-blue-600 hover:underline">View All</button>
                  </div>
                  <div className="mt-8 overflow-x-auto">
                    <table className="w-full text-left">
                      <thead>
                        <tr className="border-b border-gray-50 text-xs font-bold uppercase tracking-wider text-gray-400">
                          <th className="pb-4">Order ID</th>
                          <th className="pb-4">Customer</th>
                          <th className="pb-4">Status</th>
                          <th className="pb-4">Total</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-gray-50">
                        {[1, 2, 3, 4].map(i => (
                          <tr key={i} className="text-sm">
                            <td className="py-4 font-bold text-gray-900">#BS-1234{i}</td>
                            <td className="py-4 text-gray-500">Customer {i}</td>
                            <td className="py-4">
                              <span className="rounded-full bg-emerald-100 px-3 py-1 text-[10px] font-bold text-emerald-600">Completed</span>
                            </td>
                            <td className="py-4 font-bold text-gray-900">$299.00</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            )}

            {activeTab === "Products" && (
              <div className="space-y-8">
                <div className="flex items-center justify-between">
                  <h3 className="text-2xl font-extrabold text-gray-900">Product Management</h3>
                  {isAdmin && (
                    <button 
                      onClick={() => handleOpenModal()}
                      className="flex items-center gap-2 rounded-xl bg-blue-600 px-6 py-3 text-sm font-bold text-white transition-all hover:bg-blue-700 active:scale-95"
                    >
                      <Plus size={18} /> Add Product
                    </button>
                  )}
                </div>

                <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                  {products.map(product => (
                    <div key={product.id} className="group relative overflow-hidden rounded-3xl bg-white p-4 shadow-sm ring-1 ring-gray-100">
                      <div className="aspect-square overflow-hidden rounded-2xl bg-gray-50">
                        <img src={product.image} alt={product.name} className="h-full w-full object-cover" />
                      </div>
                      <div className="mt-4">
                        <h4 className="font-bold text-gray-900">{product.name}</h4>
                        <p className="text-sm font-extrabold text-blue-600">${product.price}</p>
                        <div className="mt-4 flex items-center justify-between">
                          <span className="text-xs font-bold text-gray-400">Stock: {product.stock}</span>
                          {isAdmin && (
                            <div className="flex gap-2">
                              <button 
                                onClick={() => handleOpenModal(product)}
                                className="p-2 text-gray-400 hover:text-blue-600"
                              >
                                <Edit3 size={16} />
                              </button>
                              <button 
                                onClick={() => { deleteProduct(product.id); addToast("Product deleted", "info"); }}
                                className="p-2 text-gray-400 hover:text-red-500"
                              >
                                <Trash2 size={16} />
                              </button>
                            </div>
                          )}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </PageTransition>
        </div>
      </main>

      {/* Modal */}
      <AnimatePresence>
        {isModalOpen && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center px-4">
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsModalOpen(false)}
              className="absolute inset-0 bg-black/20 backdrop-blur-sm"
            />
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              className="relative w-full max-w-lg rounded-[40px] bg-white p-10 shadow-2xl"
            >
              <h3 className="text-2xl font-extrabold text-gray-900">
                {editingProduct ? "Edit Product" : "Add New Product"}
              </h3>
              <form onSubmit={handleSubmit} className="mt-8 space-y-6">
                <div className="grid grid-cols-2 gap-4">
                  <div className="col-span-2">
                    <label className="text-xs font-bold text-gray-500">Product Name</label>
                    <input 
                      type="text" 
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({...formData, name: e.target.value})}
                      className="mt-2 w-full rounded-xl border border-gray-100 bg-gray-50 p-3 text-sm outline-none focus:ring-2 focus:ring-blue-500/10"
                    />
                  </div>
                  <div>
                    <label className="text-xs font-bold text-gray-500">Price ($)</label>
                    <input 
                      type="number" 
                      required
                      value={formData.price}
                      onChange={(e) => setFormData({...formData, price: Number(e.target.value)})}
                      className="mt-2 w-full rounded-xl border border-gray-100 bg-gray-50 p-3 text-sm outline-none focus:ring-2 focus:ring-blue-500/10"
                    />
                  </div>
                  <div>
                    <label className="text-xs font-bold text-gray-500">Stock</label>
                    <input 
                      type="number" 
                      required
                      value={formData.stock}
                      onChange={(e) => setFormData({...formData, stock: Number(e.target.value)})}
                      className="mt-2 w-full rounded-xl border border-gray-100 bg-gray-50 p-3 text-sm outline-none focus:ring-2 focus:ring-blue-500/10"
                    />
                  </div>
                  <div className="col-span-2">
                    <label className="text-xs font-bold text-gray-500">Image URL</label>
                    <input 
                      type="text" 
                      required
                      value={formData.image}
                      onChange={(e) => setFormData({...formData, image: e.target.value})}
                      className="mt-2 w-full rounded-xl border border-gray-100 bg-gray-50 p-3 text-sm outline-none focus:ring-2 focus:ring-blue-500/10"
                    />
                  </div>
                  <div className="col-span-2">
                    <label className="text-xs font-bold text-gray-500">Category</label>
                    <input 
                      type="text" 
                      required
                      value={formData.category}
                      onChange={(e) => setFormData({...formData, category: e.target.value})}
                      className="mt-2 w-full rounded-xl border border-gray-100 bg-gray-50 p-3 text-sm outline-none focus:ring-2 focus:ring-blue-500/10"
                    />
                  </div>
                </div>
                <div className="flex gap-4">
                  <button 
                    type="button"
                    onClick={() => setIsModalOpen(false)}
                    className="flex-1 rounded-xl bg-gray-100 py-4 text-sm font-bold text-gray-500 transition-all hover:bg-gray-200"
                  >
                    Cancel
                  </button>
                  <button 
                    type="submit"
                    className="flex-1 rounded-xl bg-blue-600 py-4 text-sm font-bold text-white transition-all hover:bg-blue-700 active:scale-95"
                  >
                    {editingProduct ? "Update" : "Create"}
                  </button>
                </div>
              </form>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
=======
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-3xl font-extrabold text-gray-900">Dashboard Overview</h1>
              <p className="mt-1 text-sm text-gray-500">Welcome back, Alex! You have 2 orders arriving today.</p>
            </div>
            <div className="flex gap-3">
              <button className="flex items-center gap-2 rounded-xl border border-gray-200 bg-white px-4 py-2 text-sm font-bold text-gray-700 hover:bg-gray-50">
                <Calendar size={18} /> Last 30 Days
              </button>
              <button className="flex items-center gap-2 rounded-xl bg-blue-600 px-4 py-2 text-sm font-bold text-white hover:bg-blue-700">
                <Plus size={18} /> New Order
              </button>
            </div>
          </div>

          {/* Stats Grid */}
          <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {stats.map((stat) => (
              <motion.div
                key={stat.label}
                whileHover={{ y: -5 }}
                className="rounded-3xl bg-white p-6 shadow-sm ring-1 ring-gray-100"
              >
                <div className="flex items-center justify-between">
                  <div className={`flex h-12 w-12 items-center justify-center rounded-2xl ${stat.color} text-2xl`}>
                    {stat.icon}
                  </div>
                  <span className={`text-xs font-bold ${stat.trendColor}`}>{stat.trend}</span>
                </div>
                <p className="mt-4 text-sm font-medium text-gray-400">{stat.label}</p>
                <p className="mt-1 text-2xl font-extrabold text-gray-900">{stat.value}</p>
              </motion.div>
            ))}
          </div>

          {/* Recent Orders */}
          <div className="mt-10 rounded-3xl bg-white p-8 shadow-sm ring-1 ring-gray-100">
            <div className="flex items-center justify-between">
              <h2 className="text-xl font-extrabold text-gray-900">Recent Orders</h2>
              <div className="flex rounded-xl bg-gray-100 p-1">
                {["All Orders", "Processing", "Shipped", "Delivered"].map((tab) => (
                  <button
                    key={tab}
                    className={`rounded-lg px-4 py-1.5 text-xs font-bold transition-all ${
                      tab === "All Orders" ? "bg-blue-600 text-white shadow-md shadow-blue-200" : "text-gray-500 hover:text-gray-900"
                    }`}
                  >
                    {tab}
                  </button>
                ))}
              </div>
            </div>

            <div className="mt-8 overflow-x-auto">
              <table className="w-full text-left">
                <thead>
                  <tr className="border-b border-gray-50 text-[10px] font-bold uppercase tracking-widest text-gray-400">
                    <th className="pb-4">Product</th>
                    <th className="pb-4">Order ID</th>
                    <th className="pb-4">Date</th>
                    <th className="pb-4">Status</th>
                    <th className="pb-4">Amount</th>
                    <th className="pb-4"></th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-50">
                  {orders.map((order) => (
                    <tr key={order.id} className="group">
                      <td className="py-4">
                        <div className="flex items-center gap-3">
                          <img src={order.image} alt="" className="h-10 w-10 rounded-lg object-cover" />
                          <span className="text-sm font-bold text-gray-900">{order.product}</span>
                        </div>
                      </td>
                      <td className="py-4 text-sm font-medium text-gray-400">{order.id}</td>
                      <td className="py-4 text-sm font-medium text-gray-400">{order.date}</td>
                      <td className="py-4">
                        <span className={`rounded-full px-3 py-1 text-[10px] font-bold uppercase tracking-wider ${
                          order.status === "Shipped" ? "bg-blue-50 text-blue-600" :
                          order.status === "Delivered" ? "bg-emerald-50 text-emerald-600" :
                          "bg-orange-50 text-orange-600"
                        }`}>
                          {order.status}
                        </span>
                      </td>
                      <td className="py-4 text-sm font-extrabold text-gray-900">{order.amount}</td>
                      <td className="py-4 text-right">
                        <button className="text-gray-400 hover:text-gray-900"><MoreHorizontal size={20} /></button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <div className="mt-8 flex items-center justify-between border-t border-gray-50 pt-8">
              <p className="text-sm text-gray-400">Showing 1 to 4 of 24 orders</p>
              <div className="flex items-center gap-2">
                <button className="flex h-8 w-8 items-center justify-center rounded-lg border border-gray-200 text-gray-400 hover:bg-gray-50"><ChevronLeft size={16} /></button>
                <button className="flex h-8 w-8 items-center justify-center rounded-lg bg-blue-600 text-xs font-bold text-white">1</button>
                <button className="flex h-8 w-8 items-center justify-center rounded-lg text-xs font-bold text-gray-500 hover:bg-gray-50">2</button>
                <button className="flex h-8 w-8 items-center justify-center rounded-lg text-xs font-bold text-gray-500 hover:bg-gray-50">3</button>
                <button className="flex h-8 w-8 items-center justify-center rounded-lg border border-gray-200 text-gray-400 hover:bg-gray-50"><ChevronRight size={16} /></button>
              </div>
            </div>
          </div>

          {/* Promo Section */}
          <div className="mt-10 overflow-hidden rounded-[32px] bg-blue-600 p-10 text-white">
            <div className="flex items-center justify-between">
              <div className="max-w-md">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-white/20 text-2xl">✨</div>
                <h2 className="mt-6 text-3xl font-extrabold">Save 15% on your next order!</h2>
                <p className="mt-2 text-blue-100">Use your reward points at checkout to redeem this exclusive offer.</p>
              </div>
              <button className="rounded-2xl bg-white px-8 py-4 text-sm font-bold text-blue-600 transition-all hover:bg-blue-50 hover:shadow-xl active:scale-95">
                Redeem Points
              </button>
            </div>
          </div>
        </div>
      </main>
>>>>>>> 7b5cd04338e29b30299724e59f508cee8c52e0bf
    </div>
  );
}
