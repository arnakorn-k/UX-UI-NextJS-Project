import { useParams, useNavigate } from "react-router-dom";
import { ShoppingCart, ArrowLeft, Star, ShieldCheck, Truck, RotateCcw, Plus, Minus } from "lucide-react";
import { useState } from "react";
import { motion } from "framer-motion";
import { useProducts } from "@/src/context/ProductContext";
import { useCart } from "@/src/context/CartContext";
import { useToast } from "@/src/context/ToastContext";
import PageTransition from "@/src/components/PageTransition";

export default function ProductDetail() {
  const { id } = useParams();
  const { products } = useProducts();
  const { addToCart } = useCart();
  const { addToast } = useToast();
  const navigate = useNavigate();
  const [quantity, setQuantity] = useState(1);

  const product = products.find(p => p.id === id);

  if (!product) {
    return (
      <div className="flex min-h-[60vh] flex-col items-center justify-center text-center">
        <h2 className="text-2xl font-bold text-gray-900">Product Not Found</h2>
        <button onClick={() => navigate("/shop")} className="mt-4 text-blue-600 hover:underline">Back to Shop</button>
      </div>
    );
  }

  const handleAddToCart = () => {
    for (let i = 0; i < quantity; i++) {
      addToCart(product);
    }
    addToast(`${quantity} ${product.name} added to cart`, "success");
  };

  const handleBuyNow = () => {
    addToCart(product);
    navigate("/checkout");
  };

  return (
    <PageTransition>
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <button 
          onClick={() => navigate(-1)}
          className="flex items-center gap-2 text-sm font-bold text-gray-500 hover:text-gray-900"
        >
          <ArrowLeft size={18} /> Back
        </button>

        <div className="mt-12 grid grid-cols-1 gap-16 lg:grid-cols-2">
          {/* Product Image */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="overflow-hidden rounded-[40px] bg-white shadow-2xl ring-1 ring-gray-100"
          >
            <img 
              src={product.image} 
              alt={product.name}
              className="h-full w-full object-cover"
              referrerPolicy="no-referrer"
            />
          </motion.div>

          {/* Product Info */}
          <div className="flex flex-col justify-center">
            <span className="text-sm font-bold uppercase tracking-widest text-blue-600">{product.category}</span>
            <h1 className="mt-4 text-4xl font-extrabold text-gray-900 sm:text-5xl">{product.name}</h1>
            
            <div className="mt-6 flex items-center gap-4">
              <div className="flex items-center gap-1 text-lg font-bold text-blue-600">
                <Star size={20} fill="currentColor" /> 4.8
              </div>
              <span className="text-sm text-gray-400">(120 Reviews)</span>
              <span className="h-4 w-px bg-gray-200" />
              <span className={`text-sm font-bold ${product.stock > 0 ? "text-emerald-500" : "text-red-500"}`}>
                {product.stock > 0 ? `${product.stock} in Stock` : "Out of Stock"}
              </span>
            </div>

            <p className="mt-8 text-3xl font-extrabold text-gray-900">${product.price.toFixed(2)}</p>
            
            <p className="mt-8 text-lg leading-relaxed text-gray-500">
              {product.description}
            </p>

            <div className="mt-10 flex flex-col gap-6 sm:flex-row sm:items-center">
              <div className="flex items-center gap-4 rounded-2xl bg-gray-100 p-2">
                <button 
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className="flex h-10 w-10 items-center justify-center rounded-xl bg-white text-gray-600 shadow-sm hover:bg-gray-50 active:scale-95"
                >
                  <Minus size={18} />
                </button>
                <span className="w-8 text-center font-bold text-gray-900">{quantity}</span>
                <button 
                  onClick={() => setQuantity(quantity + 1)}
                  className="flex h-10 w-10 items-center justify-center rounded-xl bg-white text-gray-600 shadow-sm hover:bg-gray-50 active:scale-95"
                >
                  <Plus size={18} />
                </button>
              </div>

              <div className="flex flex-1 gap-4">
                <button 
                  onClick={handleAddToCart}
                  className="flex flex-1 items-center justify-center gap-2 rounded-2xl bg-blue-600 py-4 text-sm font-bold text-white transition-all hover:bg-blue-700 hover:shadow-lg active:scale-95"
                >
                  <ShoppingCart size={20} /> Add to Cart
                </button>
                <button 
                  onClick={handleBuyNow}
                  className="flex flex-1 items-center justify-center rounded-2xl border-2 border-blue-600 py-4 text-sm font-bold text-blue-600 transition-all hover:bg-blue-50 active:scale-95"
                >
                  Buy Now
                </button>
              </div>
            </div>

            {/* Features */}
            <div className="mt-12 grid grid-cols-3 gap-4 border-t border-gray-100 pt-12">
              <div className="text-center">
                <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-2xl bg-blue-50 text-blue-600">
                  <Truck size={24} />
                </div>
                <p className="mt-3 text-xs font-bold text-gray-900">Free Delivery</p>
              </div>
              <div className="text-center">
                <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-2xl bg-blue-50 text-blue-600">
                  <ShieldCheck size={24} />
                </div>
                <p className="mt-3 text-xs font-bold text-gray-900">Secure Payment</p>
              </div>
              <div className="text-center">
                <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-2xl bg-blue-50 text-blue-600">
                  <RotateCcw size={24} />
                </div>
                <p className="mt-3 text-xs font-bold text-gray-900">Easy Returns</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </PageTransition>
  );
}
