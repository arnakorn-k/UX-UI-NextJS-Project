<<<<<<< HEAD
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useCart } from "@/src/context/CartContext";
import { useToast } from "@/src/context/ToastContext";
import { motion } from "framer-motion";
import { CreditCard, Truck, ShieldCheck, ArrowRight, CheckCircle2 } from "lucide-react";
import PageTransition from "@/src/components/PageTransition";

export default function Checkout() {
  const { cart, totalPrice, clearCart } = useCart();
  const { addToast } = useToast();
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [formData, setFormData] = useState({
    fullName: "",
    address: "",
    phone: "",
    cardNumber: "",
    expiry: "",
    cvv: ""
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.fullName || !formData.address || !formData.phone) {
      addToast("Please fill in all required fields", "error");
      return;
    }

    setIsLoading(true);
    // Simulate payment processing
    await new Promise(resolve => setTimeout(resolve, 2000));
    setIsLoading(false);
    setIsSuccess(true);
    clearCart();
    addToast("Order Placed Successfully!", "success");
  };

  if (isSuccess) {
    return (
      <PageTransition>
        <div className="flex min-h-[70vh] flex-col items-center justify-center px-4 text-center">
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            className="flex h-24 w-24 items-center justify-center rounded-full bg-emerald-100 text-emerald-500"
          >
            <CheckCircle2 size={48} />
          </motion.div>
          <h2 className="mt-8 text-4xl font-extrabold text-gray-900">Thank You!</h2>
          <p className="mt-4 text-lg text-gray-500">Your order has been placed successfully. Order ID: #BS-{Math.floor(Math.random() * 100000)}</p>
          <button 
            onClick={() => navigate("/")}
            className="mt-10 rounded-2xl bg-blue-600 px-10 py-4 text-sm font-bold text-white transition-all hover:bg-blue-700 hover:shadow-xl active:scale-95"
          >
            Back to Home
          </button>
        </div>
      </PageTransition>
    );
  }

  return (
    <PageTransition>
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-extrabold text-gray-900">Checkout</h1>
        
        <div className="mt-12 grid grid-cols-1 gap-12 lg:grid-cols-3">
          {/* Checkout Form */}
          <div className="lg:col-span-2 space-y-8">
            <form onSubmit={handleSubmit} className="space-y-8">
              <div className="rounded-[32px] bg-white p-8 shadow-sm ring-1 ring-gray-100">
                <h2 className="flex items-center gap-3 text-xl font-extrabold text-gray-900">
                  <Truck className="text-blue-600" /> Shipping Information
                </h2>
                <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2">
                  <div className="sm:col-span-2">
                    <label className="block text-sm font-bold text-gray-700">Full Name</label>
                    <input
                      type="text"
                      required
                      value={formData.fullName}
                      onChange={(e) => setFormData({...formData, fullName: e.target.value})}
                      className="mt-2 w-full rounded-xl border border-gray-200 bg-white py-3 px-4 text-sm outline-none transition-all focus:border-blue-500 focus:ring-4 focus:ring-blue-500/10"
                      placeholder="John Doe"
                    />
                  </div>
                  <div className="sm:col-span-2">
                    <label className="block text-sm font-bold text-gray-700">Shipping Address</label>
                    <textarea
                      required
                      rows={3}
                      value={formData.address}
                      onChange={(e) => setFormData({...formData, address: e.target.value})}
                      className="mt-2 w-full rounded-xl border border-gray-200 bg-white py-3 px-4 text-sm outline-none transition-all focus:border-blue-500 focus:ring-4 focus:ring-blue-500/10"
                      placeholder="123 Street Name, City, State, Zip"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-bold text-gray-700">Phone Number</label>
                    <input
                      type="tel"
                      required
                      value={formData.phone}
                      onChange={(e) => setFormData({...formData, phone: e.target.value})}
                      className="mt-2 w-full rounded-xl border border-gray-200 bg-white py-3 px-4 text-sm outline-none transition-all focus:border-blue-500 focus:ring-4 focus:ring-blue-500/10"
                      placeholder="+1 234 567 890"
                    />
                  </div>
                </div>
              </div>

              <div className="rounded-[32px] bg-white p-8 shadow-sm ring-1 ring-gray-100">
                <h2 className="flex items-center gap-3 text-xl font-extrabold text-gray-900">
                  <CreditCard className="text-blue-600" /> Payment Method
                </h2>
                <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2">
                  <div className="sm:col-span-2">
                    <label className="block text-sm font-bold text-gray-700">Card Number</label>
                    <input
                      type="text"
                      required
                      className="mt-2 w-full rounded-xl border border-gray-200 bg-white py-3 px-4 text-sm outline-none transition-all focus:border-blue-500 focus:ring-4 focus:ring-blue-500/10"
                      placeholder="0000 0000 0000 0000"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-bold text-gray-700">Expiry Date</label>
                    <input
                      type="text"
                      required
                      className="mt-2 w-full rounded-xl border border-gray-200 bg-white py-3 px-4 text-sm outline-none transition-all focus:border-blue-500 focus:ring-4 focus:ring-blue-500/10"
                      placeholder="MM/YY"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-bold text-gray-700">CVV</label>
                    <input
                      type="text"
                      required
                      className="mt-2 w-full rounded-xl border border-gray-200 bg-white py-3 px-4 text-sm outline-none transition-all focus:border-blue-500 focus:ring-4 focus:ring-blue-500/10"
                      placeholder="123"
                    />
                  </div>
                </div>
              </div>

              <button
                type="submit"
                disabled={isLoading}
                className="flex w-full items-center justify-center gap-2 rounded-2xl bg-blue-600 py-5 text-lg font-bold text-white transition-all hover:bg-blue-700 hover:shadow-xl active:scale-[0.98] disabled:opacity-70"
              >
                {isLoading ? (
                  <div className="h-6 w-6 animate-spin rounded-full border-2 border-white border-t-transparent" />
                ) : (
                  <>Complete Purchase <ArrowRight size={20} /></>
                )}
              </button>
            </form>
          </div>

          {/* Summary */}
          <div className="lg:col-span-1">
            <div className="sticky top-24 space-y-6">
              <div className="rounded-[32px] bg-white p-8 shadow-sm ring-1 ring-gray-100">
                <h2 className="text-xl font-extrabold text-gray-900">Your Order</h2>
                <div className="mt-8 space-y-4">
                  {cart.map(item => (
                    <div key={item.id} className="flex items-center gap-4">
                      <div className="h-12 w-12 shrink-0 overflow-hidden rounded-lg bg-gray-50">
                        <img src={item.image} alt={item.name} className="h-full w-full object-cover" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <p className="truncate text-sm font-bold text-gray-900">{item.name}</p>
                        <p className="text-xs text-gray-500">Qty: {item.quantity}</p>
                      </div>
                      <p className="text-sm font-bold text-gray-900">${(item.price * item.quantity).toFixed(2)}</p>
                    </div>
                  ))}
                  <div className="my-6 border-t border-gray-50 pt-6">
                    <div className="flex justify-between">
                      <span className="text-lg font-bold text-gray-900">Total</span>
                      <span className="text-2xl font-extrabold text-blue-600">${totalPrice.toFixed(2)}</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="rounded-3xl bg-blue-50 p-6">
                <div className="flex items-center gap-3 text-blue-600">
                  <ShieldCheck size={24} />
                  <p className="text-sm font-bold">Secure Checkout</p>
                </div>
                <p className="mt-2 text-xs text-blue-600/70">Your data is protected by industry-standard encryption.</p>
=======
import { Link } from "react-router-dom";
import { ShoppingCart, ShieldCheck, Truck, Smile, ChevronRight } from "lucide-react";
import { motion } from "motion/react";

const cartItems = [
  { id: 1, name: "SpeedRunner Elite", details: "Size: 42, Color: Crimson Red", price: 120.00, quantity: 1, image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&q=80&w=100" },
  { id: 2, name: "Minimalist Chrono", details: "Case: Silver, Band: Leather", price: 170.00, quantity: 2, image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&q=80&w=100" },
];

export default function Checkout() {
  return (
    <div className="min-h-screen bg-gray-50 pb-20 pt-10">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Breadcrumbs */}
        <nav className="flex items-center gap-2 text-xs font-medium text-gray-400">
          <Link to="/" className="hover:text-gray-900">Home</Link>
          <ChevronRight size={12} />
          <Link to="#" className="hover:text-gray-900">Cart</Link>
          <ChevronRight size={12} />
          <span className="text-gray-900">Checkout</span>
        </nav>

        <h1 className="mt-6 text-4xl font-extrabold text-gray-900">Checkout</h1>
        <p className="mt-2 text-sm text-gray-500">Please review your order and enter shipping details below.</p>

        <div className="mt-12 grid grid-cols-1 gap-10 lg:grid-cols-12">
          {/* Left Column: Items & Shipping */}
          <div className="space-y-10 lg:col-span-7">
            {/* Your Items */}
            <section className="rounded-[32px] bg-white p-8 shadow-sm ring-1 ring-gray-100">
              <h2 className="text-xl font-extrabold text-gray-900">Your Items</h2>
              <div className="mt-8 divide-y divide-gray-50">
                {cartItems.map((item) => (
                  <div key={item.id} className="flex items-center gap-6 py-6 first:pt-0 last:pb-0">
                    <img src={item.image} alt={item.name} className="h-20 w-20 rounded-2xl object-cover" />
                    <div className="flex-1">
                      <h3 className="text-lg font-bold text-gray-900">{item.name}</h3>
                      <p className="text-xs text-gray-400">{item.details}</p>
                    </div>
                    <div className="text-right">
                      <p className="text-sm font-bold text-gray-400">x{item.quantity}</p>
                      <p className="mt-1 text-lg font-extrabold text-blue-600">${(item.price * item.quantity).toFixed(2)}</p>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* Shipping Information */}
            <section className="rounded-[32px] bg-white p-8 shadow-sm ring-1 ring-gray-100">
              <h2 className="text-xl font-extrabold text-gray-900">Shipping Information</h2>
              <form className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2">
                <div>
                  <label className="block text-sm font-bold text-gray-700">Full Name</label>
                  <input
                    type="text"
                    placeholder="John Doe"
                    className="mt-2 w-full rounded-xl border border-gray-200 bg-white px-4 py-3 text-sm outline-none transition-all focus:border-blue-500 focus:ring-4 focus:ring-blue-500/10"
                  />
                </div>
                <div>
                  <label className="block text-sm font-bold text-gray-700">Phone Number</label>
                  <input
                    type="tel"
                    placeholder="+1 (555) 000-0000"
                    className="mt-2 w-full rounded-xl border border-gray-200 bg-white px-4 py-3 text-sm outline-none transition-all focus:border-blue-500 focus:ring-4 focus:ring-blue-500/10"
                  />
                </div>
                <div className="sm:col-span-2">
                  <label className="block text-sm font-bold text-gray-700">Street Address</label>
                  <input
                    type="text"
                    placeholder="123 Blue Avenue, Suite 400"
                    className="mt-2 w-full rounded-xl border border-gray-200 bg-white px-4 py-3 text-sm outline-none transition-all focus:border-blue-500 focus:ring-4 focus:ring-blue-500/10"
                  />
                </div>
                <div>
                  <label className="block text-sm font-bold text-gray-700">City</label>
                  <input
                    type="text"
                    placeholder="San Francisco"
                    className="mt-2 w-full rounded-xl border border-gray-200 bg-white px-4 py-3 text-sm outline-none transition-all focus:border-blue-500 focus:ring-4 focus:ring-blue-500/10"
                  />
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-bold text-gray-700">State</label>
                    <input
                      type="text"
                      placeholder="CA"
                      className="mt-2 w-full rounded-xl border border-gray-200 bg-white px-4 py-3 text-sm outline-none transition-all focus:border-blue-500 focus:ring-4 focus:ring-blue-500/10"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-bold text-gray-700">Zip</label>
                    <input
                      type="text"
                      placeholder="94105"
                      className="mt-2 w-full rounded-xl border border-gray-200 bg-white px-4 py-3 text-sm outline-none transition-all focus:border-blue-500 focus:ring-4 focus:ring-blue-500/10"
                    />
                  </div>
                </div>
              </form>
            </section>
          </div>

          {/* Right Column: Order Summary */}
          <div className="lg:col-span-5">
            <div className="sticky top-24 rounded-[32px] bg-white p-8 shadow-sm ring-1 ring-gray-100">
              <h2 className="text-xl font-extrabold text-gray-900">Order Summary</h2>
              <div className="mt-8 space-y-4">
                <div className="flex justify-between text-sm font-medium text-gray-500">
                  <span>Subtotal</span>
                  <span className="text-gray-900 font-bold">$290.00</span>
                </div>
                <div className="flex justify-between text-sm font-medium text-gray-500">
                  <span>Shipping</span>
                  <span className="text-emerald-500 font-bold uppercase tracking-widest text-[10px]">Free</span>
                </div>
                <div className="flex justify-between text-sm font-medium text-gray-500">
                  <span>Estimated Tax</span>
                  <span className="text-gray-900 font-bold">$24.65</span>
                </div>
                <div className="my-6 border-t border-gray-50 pt-6">
                  <div className="flex justify-between">
                    <span className="text-lg font-bold text-gray-900">Total Price</span>
                    <span className="text-3xl font-extrabold text-blue-600">$314.65</span>
                  </div>
                </div>
                <button className="flex w-full items-center justify-center gap-2 rounded-2xl bg-blue-600 py-5 text-sm font-bold text-white transition-all hover:bg-blue-700 hover:shadow-xl active:scale-[0.98]">
                  Confirm Order <ChevronRight size={18} />
                </button>
                <button className="w-full rounded-2xl bg-gray-50 py-5 text-sm font-bold text-gray-500 transition-all hover:bg-gray-100">
                  Cancel & Return to Cart
                </button>
              </div>

              <div className="mt-10 grid grid-cols-3 gap-4 border-t border-gray-50 pt-10">
                <div className="text-center">
                  <div className="mx-auto flex h-10 w-10 items-center justify-center rounded-full bg-blue-50 text-blue-600">
                    <ShieldCheck size={20} />
                  </div>
                  <p className="mt-2 text-[10px] font-bold uppercase tracking-widest text-gray-400">Secure</p>
                </div>
                <div className="text-center">
                  <div className="mx-auto flex h-10 w-10 items-center justify-center rounded-full bg-blue-50 text-blue-600">
                    <Truck size={20} />
                  </div>
                  <p className="mt-2 text-[10px] font-bold uppercase tracking-widest text-gray-400">Insured</p>
                </div>
                <div className="text-center">
                  <div className="mx-auto flex h-10 w-10 items-center justify-center rounded-full bg-blue-50 text-blue-600">
                    <Smile size={20} />
                  </div>
                  <p className="mt-2 text-[10px] font-bold uppercase tracking-widest text-gray-400">Guaranteed</p>
                </div>
>>>>>>> 7b5cd04338e29b30299724e59f508cee8c52e0bf
              </div>
            </div>
          </div>
        </div>
      </div>
<<<<<<< HEAD
    </PageTransition>
=======
    </div>
>>>>>>> 7b5cd04338e29b30299724e59f508cee8c52e0bf
  );
}
