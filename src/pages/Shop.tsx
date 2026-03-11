import { useState } from "react";
import { Search, Filter, SlidersHorizontal } from "lucide-react";
import { useProducts } from "@/src/context/ProductContext";
import { useCart } from "@/src/context/CartContext";
import { useToast } from "@/src/context/ToastContext";
import { useNavigate } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import PageTransition from "@/src/components/PageTransition";
import { Star, ShoppingCart, Eye } from "lucide-react";

export default function Shop() {
  const { products } = useProducts();
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [priceRange, setPriceRange] = useState(500);

  const categories = ["All", ...new Set(products.map(p => p.category))];

  const filteredProducts = products.filter(p => {
    const matchesSearch = p.name.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = selectedCategory === "All" || p.category === selectedCategory;
    const matchesPrice = p.price <= priceRange;
    return matchesSearch && matchesCategory && matchesPrice;
  });

  return (
    <PageTransition>
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="flex flex-col gap-8 md:flex-row md:items-center md:justify-between">
          <div>
            <h1 className="text-4xl font-extrabold text-gray-900">Our Shop</h1>
            <p className="mt-2 text-gray-500">Explore our collection of premium products.</p>
          </div>
          <div className="relative w-full max-w-md">
            <Search className="absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-gray-400" />
            <input
              type="text"
              placeholder="Search products..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full rounded-2xl border border-gray-200 bg-white py-4 pl-12 pr-4 text-sm outline-none transition-all focus:border-blue-500 focus:ring-4 focus:ring-blue-500/10"
            />
          </div>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-12 lg:grid-cols-4">
          {/* Filters */}
          <aside className="space-y-10">
            <div>
              <h3 className="flex items-center gap-2 text-lg font-bold text-gray-900">
                <Filter size={20} /> Categories
              </h3>
              <div className="mt-6 flex flex-wrap gap-2 lg:flex-col">
                {categories.map(cat => (
                  <button
                    key={cat}
                    onClick={() => setSelectedCategory(cat)}
                    className={`rounded-xl px-4 py-2 text-left text-sm font-bold transition-all ${
                      selectedCategory === cat 
                        ? "bg-blue-600 text-white shadow-lg shadow-blue-200" 
                        : "bg-white text-gray-500 ring-1 ring-gray-100 hover:bg-gray-50"
                    }`}
                  >
                    {cat}
                  </button>
                ))}
              </div>
            </div>

            <div>
              <h3 className="flex items-center gap-2 text-lg font-bold text-gray-900">
                <SlidersHorizontal size={20} /> Price Range
              </h3>
              <div className="mt-6 space-y-4">
                <input
                  type="range"
                  min="0"
                  max="1000"
                  step="10"
                  value={priceRange}
                  onChange={(e) => setPriceRange(Number(e.target.value))}
                  className="h-2 w-full cursor-pointer appearance-none rounded-lg bg-gray-200 accent-blue-600"
                />
                <div className="flex items-center justify-between text-sm font-bold text-gray-500">
                  <span>$0</span>
                  <span className="text-blue-600">${priceRange}</span>
                </div>
              </div>
            </div>
          </aside>

          {/* Product Grid */}
          <div className="lg:col-span-3">
            <AnimatePresence mode="popLayout">
              {filteredProducts.length > 0 ? (
                <motion.div 
                  layout
                  className="grid grid-cols-1 gap-8 sm:grid-cols-2 xl:grid-cols-3"
                >
                  {filteredProducts.map(product => (
                    <div key={product.id}>
                      <ShopProductCard product={product} />
                    </div>
                  ))}
                </motion.div>
              ) : (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="flex flex-col items-center justify-center py-20 text-center"
                >
                  <div className="flex h-20 w-20 items-center justify-center rounded-3xl bg-gray-100 text-4xl">🔍</div>
                  <h3 className="mt-6 text-xl font-bold text-gray-900">No products found</h3>
                  <p className="mt-2 text-gray-500">Try adjusting your search or filters.</p>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </PageTransition>
  );
}

function ShopProductCard({ product }: { product: any }) {
  const { addToCart } = useCart();
  const { addToast } = useToast();
  const navigate = useNavigate();

  return (
    <motion.div
      layout
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.9 }}
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
