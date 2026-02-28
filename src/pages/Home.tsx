import { Link, useNavigate } from "react-router-dom";
import { ShoppingCart, ArrowRight } from "lucide-react";
import { motion } from "motion/react";

const categories = [
  { name: "Electronics", items: "120+ Items", icon: "💻", color: "bg-blue-50" },
  { name: "Fashion", items: "450+ Items", icon: "👕", color: "bg-purple-50" },
  { name: "Furniture", items: "80+ Items", icon: "🛋️", color: "bg-orange-50" },
  { name: "Beauty", items: "210+ Items", icon: "💄", color: "bg-pink-50" },
];

const featuredProducts = [
  {
    id: 1,
    name: "Premium Wireless Headphones",
    price: 299.00,
    category: "Audio",
    rating: 4.8,
    image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&q=80&w=800",
  },
  {
    id: 2,
    name: "Vintage Digital Camera",
    price: 189.00,
    category: "Cameras",
    rating: 4.5,
    image: "https://images.unsplash.com/photo-1526170315870-ef68971ef028?auto=format&fit=crop&q=80&w=800",
  },
  {
    id: 3,
    name: "Minimalist Desk Lamp",
    price: 75.00,
    category: "Home Office",
    rating: 4.9,
    image: "https://images.unsplash.com/photo-1534073828943-f801091bb18c?auto=format&fit=crop&q=80&w=800",
  },
  {
    id: 4,
    name: "Elite Runner Sneakers",
    price: 120.00,
    category: "Footwear",
    rating: 4.7,
    image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&q=80&w=800",
  },
];

export default function Home() {
  const navigate = useNavigate();

  return (
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
                  onClick={() => navigate("/checkout")}
                  className="rounded-xl bg-blue-600 px-8 py-4 text-lg font-bold text-white transition-all hover:bg-blue-700 hover:shadow-lg active:scale-95"
                >
                  Shop Collection
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
              <div className="aspect-square w-full overflow-hidden rounded-3xl bg-white shadow-2xl">
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
                    <ShoppingCart size={24} />
                  </div>
                  <div>
                    <p className="text-sm font-bold text-gray-900">Fast Delivery</p>
                    <p className="text-xs text-gray-500">Within 24 hours</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Shop by Category */}
      <section className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          <h2 className="text-3xl font-bold text-gray-900">Shop by Category</h2>
          <Link to="#" className="text-sm font-bold text-blue-600 hover:underline">View All</Link>
        </div>
        <div className="mt-10 grid grid-cols-2 gap-6 md:grid-cols-4">
          {categories.map((category) => (
            <motion.div
              key={category.name}
              whileHover={{ y: -5 }}
              className="group cursor-pointer rounded-2xl border border-gray-100 bg-white p-8 text-center transition-all hover:shadow-xl"
            >
              <div className={`mx-auto flex h-16 w-16 items-center justify-center rounded-2xl ${category.color} text-3xl`}>
                {category.icon}
              </div>
              <h3 className="mt-6 text-lg font-bold text-gray-900">{category.name}</h3>
              <p className="mt-1 text-sm text-gray-400">{category.items}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Featured Products */}
      <section className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          <h2 className="text-3xl font-bold text-gray-900">Featured Products</h2>
          <div className="flex gap-2">
            <button className="flex h-10 w-10 items-center justify-center rounded-full border border-gray-200 bg-white text-gray-400 hover:bg-gray-50">
              <ArrowRight className="rotate-180" size={20} />
            </button>
            <button className="flex h-10 w-10 items-center justify-center rounded-full border border-gray-200 bg-white text-gray-400 hover:bg-gray-50">
              <ArrowRight size={20} />
            </button>
          </div>
        </div>
        <div className="mt-10 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {featuredProducts.map((product) => (
            <motion.div
              key={product.id}
              whileHover={{ y: -10 }}
              className="group relative overflow-hidden rounded-3xl bg-white shadow-sm transition-all hover:shadow-xl"
            >
              <div className="aspect-[4/5] overflow-hidden">
                <img 
                  src={product.image} 
                  alt={product.name}
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="p-6">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-medium text-gray-400">{product.category}</span>
                  <div className="flex items-center gap-1 text-xs font-bold text-blue-600">
                    <span>★</span> {product.rating}
                  </div>
                </div>
                <h3 className="mt-2 text-lg font-bold text-gray-900">{product.name}</h3>
                <p className="mt-2 text-xl font-extrabold text-gray-900">${product.price.toFixed(2)}</p>
                <button className="mt-6 flex w-full items-center justify-center gap-2 rounded-xl bg-blue-600 py-3 text-sm font-bold text-white transition-colors hover:bg-blue-700">
                  <ShoppingCart size={16} /> Add to Cart
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  );
}
