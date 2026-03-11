import { ShoppingCart, ArrowRight, Star, ShieldCheck, Truck, RotateCcw, Eye } from "lucide-react";
import { motion } from "framer-motion";
import { useProducts } from "@/src/context/ProductContext";
import { useCart } from "@/src/context/CartContext";
import { useToast } from "@/src/context/ToastContext";
import PageTransition from "@/src/components/PageTransition";
import { Link, useNavigate } from "react-router-dom";

export default function Home() {
  const { products } = useProducts();
  const navigate = useNavigate();

  return (
    <PageTransition>
      <div className="flex flex-col gap-20 pb-20">
        {/* Hero Section */}
        <section className="relative overflow-hidden bg-gray-50 px-4 pt-16 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-7xl">
            <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2">
              <motion.div 
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                className="z-10"
              >
                <span className="inline-block rounded-full bg-blue-100 px-4 py-1 text-xs font-bold text-blue-600">
                  New Arrival 2024
                </span>
                <h1 className="mt-6 text-5xl font-extrabold tracking-tight text-gray-900 sm:text-7xl">
                  Elevate Your <br />
                  <span className="text-blue-600">Daily Lifestyle</span>
                </h1>
                <p className="mt-6 max-w-lg text-lg leading-relaxed text-gray-500">
                  Experience the perfect blend of minimalist design and high-performance functionality with our latest collection.
                </p>
                <div className="mt-10 flex flex-wrap gap-4">
                  <button 
                    onClick={() => navigate("/shop")}
                    className="flex items-center gap-2 rounded-xl bg-blue-600 px-8 py-4 text-lg font-bold text-white transition-all hover:bg-blue-700 hover:shadow-lg active:scale-95"
                  >
                    Shop Now <ArrowRight size={20} />
                  </button>
                  <button className="rounded-xl border border-gray-200 bg-white px-8 py-4 text-lg font-bold text-gray-900 transition-all hover:bg-gray-50 active:scale-95">
                    Learn More
                  </button>
                </div>
              </motion.div>
              <motion.div 
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8 }}
                className="relative"
              >
                <div className="aspect-square w-full overflow-hidden rounded-[40px] bg-white shadow-2xl">
                  <img 
                    src="https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&q=80&w=1200" 
                    alt="Featured Product"
                    className="h-full w-full object-cover"
                    referrerPolicy="no-referrer"
                  />
                </div>
                <div className="absolute -bottom-6 -left-6 rounded-2xl bg-white p-6 shadow-xl">
                  <div className="flex items-center gap-4">
                    <div className="flex h-12 w-12 items-center justify-center rounded-full bg-blue-100 text-blue-600">
                      <ShieldCheck size={24} />
                    </div>
                    <div>
                      <p className="text-sm font-bold text-gray-900">Quality Guaranteed</p>
                      <p className="text-xs text-gray-500">Premium materials only</p>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Features */}
        <section className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
            {[
              { icon: <Truck size={24} />, title: "Free Shipping", desc: "On all orders over $100" },
              { icon: <ShieldCheck size={24} />, title: "Secure Payment", desc: "100% secure payment processing" },
              { icon: <RotateCcw size={24} />, title: "Easy Returns", desc: "30-day money-back guarantee" },
            ].map((feature, i) => (
              <div key={i} className="flex items-center gap-4 rounded-3xl bg-white p-8 shadow-sm ring-1 ring-gray-100">
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-blue-50 text-blue-600">
                  {feature.icon}
                </div>
                <div>
                  <h3 className="font-bold text-gray-900">{feature.title}</h3>
                  <p className="text-sm text-gray-500">{feature.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Featured Products */}
        <section className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            <div>
              <h2 className="text-3xl font-extrabold text-gray-900">Featured Products</h2>
              <p className="mt-2 text-gray-500">Handpicked items for your premium lifestyle.</p>
            </div>
            <Link to="/shop" className="flex items-center gap-2 text-sm font-bold text-blue-600 hover:underline">
              View All <ArrowRight size={16} />
            </Link>
          </div>
          <div className="mt-10 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {products.slice(0, 4).map((product) => (
              <div key={product.id}>
                <ProductCardItem product={product} />
              </div>
            ))}
          </div>
        </section>
      </div>
    </PageTransition>
  );
}

// Internal component for Product Card to avoid circular dependency issues in this quick build
function ProductCardItem({ product }: { product: any }) {
  const { addToCart } = useCart();
  const { addToast } = useToast();
  const navigate = useNavigate();

  return (
    <motion.div
      whileHover={{ y: -10 }}
      className="group relative overflow-hidden rounded-3xl bg-white shadow-sm ring-1 ring-gray-100 transition-all hover:shadow-xl"
    >
      <div className="aspect-[4/5] overflow-hidden" onClick={() => navigate(`/product/${product.id}`)}>
        <img 
          src={product.image} 
          alt={product.name}
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
          referrerPolicy="no-referrer"
        />
      </div>
      <div className="p-6">
        <div className="flex items-center justify-between">
          <span className="text-xs font-medium text-gray-400 uppercase tracking-wider">{product.category}</span>
          <div className="flex items-center gap-1 text-xs font-bold text-blue-600">
            <Star size={12} fill="currentColor" /> 4.5
          </div>
        </div>
        <h3 
          className="mt-2 text-lg font-bold text-gray-900 group-hover:text-blue-600 transition-colors cursor-pointer"
          onClick={() => navigate(`/product/${product.id}`)}
        >
          {product.name}
        </h3>
        <p className="mt-2 text-xl font-extrabold text-gray-900">${product.price.toFixed(2)}</p>
        
        <div className="mt-6 flex gap-2">
          <button 
            onClick={() => { addToCart(product); addToast("Added Successfully!", "success"); }}
            className="flex flex-1 items-center justify-center gap-2 rounded-xl bg-blue-600 py-3 text-sm font-bold text-white transition-all hover:bg-blue-700 active:scale-95"
          >
            <ShoppingCart size={16} /> Add to Cart
          </button>
          <button 
            onClick={() => navigate(`/product/${product.id}`)}
            className="flex h-11 w-11 items-center justify-center rounded-xl bg-gray-100 text-gray-600 transition-all hover:bg-gray-200"
          >
            <Eye size={18} />
          </button>
        </div>
      </div>
    </motion.div>
  );
}
