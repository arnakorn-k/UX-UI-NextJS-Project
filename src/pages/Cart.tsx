import { useCart } from "@/src/context/CartContext";
import { Link, useNavigate } from "react-router-dom";
import { ShoppingCart, Trash2, Plus, Minus, ArrowRight, ShoppingBag } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import PageTransition from "@/src/components/PageTransition";

export default function Cart() {
  const { cart, removeFromCart, updateQuantity, totalPrice, totalItems } = useCart();
  const navigate = useNavigate();

  if (cart.length === 0) {
    return (
      <PageTransition>
        <div className="flex min-h-[60vh] flex-col items-center justify-center text-center px-4">
          <div className="flex h-24 w-24 items-center justify-center rounded-full bg-gray-100 text-4xl">🛒</div>
          <h2 className="mt-8 text-3xl font-extrabold text-gray-900">Your cart is empty</h2>
          <p className="mt-2 text-gray-500">Looks like you haven't added anything to your cart yet.</p>
          <Link 
            to="/shop" 
            className="mt-8 flex items-center gap-2 rounded-2xl bg-blue-600 px-8 py-4 text-sm font-bold text-white transition-all hover:bg-blue-700 hover:shadow-lg active:scale-95"
          >
            Start Shopping <ArrowRight size={18} />
          </Link>
        </div>
      </PageTransition>
    );
  }

  return (
    <PageTransition>
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-extrabold text-gray-900">Shopping Cart</h1>
        <p className="mt-2 text-gray-500">You have {totalItems} items in your cart.</p>

        <div className="mt-12 grid grid-cols-1 gap-12 lg:grid-cols-3">
          {/* Cart Items */}
          <div className="lg:col-span-2 space-y-6">
            <AnimatePresence mode="popLayout">
              {cart.map((item) => (
                <motion.div
                  key={item.id}
                  layout
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: 20 }}
                  className="flex flex-col gap-6 rounded-3xl bg-white p-6 shadow-sm ring-1 ring-gray-100 sm:flex-row sm:items-center"
                >
                  <div className="h-24 w-24 shrink-0 overflow-hidden rounded-2xl bg-gray-50">
                    <img src={item.image} alt={item.name} className="h-full w-full object-cover" />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-start justify-between">
                      <div>
                        <h3 className="text-lg font-bold text-gray-900">{item.name}</h3>
                        <p className="text-xs font-medium text-gray-400 uppercase tracking-wider">{item.category}</p>
                      </div>
                      <button 
                        onClick={() => removeFromCart(item.id)}
                        className="text-gray-400 hover:text-red-500 transition-colors"
                      >
                        <Trash2 size={20} />
                      </button>
                    </div>
                    <div className="mt-6 flex items-center justify-between">
                      <div className="flex items-center gap-4 rounded-xl bg-gray-100 p-1">
                        <button 
                          onClick={() => updateQuantity(item.id, -1)}
                          className="flex h-8 w-8 items-center justify-center rounded-lg bg-white text-gray-600 shadow-sm hover:bg-gray-50 active:scale-95"
                        >
                          <Minus size={14} />
                        </button>
                        <span className="w-6 text-center text-sm font-bold text-gray-900">{item.quantity}</span>
                        <button 
                          onClick={() => updateQuantity(item.id, 1)}
                          className="flex h-8 w-8 items-center justify-center rounded-lg bg-white text-gray-600 shadow-sm hover:bg-gray-50 active:scale-95"
                        >
                          <Plus size={14} />
                        </button>
                      </div>
                      <p className="text-lg font-extrabold text-blue-600">${(item.price * item.quantity).toFixed(2)}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>

          {/* Order Summary */}
          <div className="lg:col-span-1">
            <div className="sticky top-24 rounded-[32px] bg-white p-8 shadow-sm ring-1 ring-gray-100">
              <h2 className="text-xl font-extrabold text-gray-900">Order Summary</h2>
              <div className="mt-8 space-y-4">
                <div className="flex justify-between text-sm font-medium text-gray-500">
                  <span>Subtotal</span>
                  <span className="text-gray-900 font-bold">${totalPrice.toFixed(2)}</span>
                </div>
                <div className="flex justify-between text-sm font-medium text-gray-500">
                  <span>Shipping</span>
                  <span className="text-emerald-500 font-bold uppercase tracking-widest text-[10px]">Free</span>
                </div>
                <div className="my-6 border-t border-gray-50 pt-6">
                  <div className="flex justify-between">
                    <span className="text-lg font-bold text-gray-900">Total</span>
                    <span className="text-3xl font-extrabold text-blue-600">${totalPrice.toFixed(2)}</span>
                  </div>
                </div>
                <button 
                  onClick={() => navigate("/checkout")}
                  className="flex w-full items-center justify-center gap-2 rounded-2xl bg-blue-600 py-5 text-sm font-bold text-white transition-all hover:bg-blue-700 hover:shadow-xl active:scale-[0.98]"
                >
                  Proceed to Checkout <ArrowRight size={18} />
                </button>
                <Link 
                  to="/shop" 
                  className="flex w-full items-center justify-center gap-2 rounded-2xl bg-gray-50 py-5 text-sm font-bold text-gray-500 transition-all hover:bg-gray-100"
                >
                  Continue Shopping
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </PageTransition>
  );
}
