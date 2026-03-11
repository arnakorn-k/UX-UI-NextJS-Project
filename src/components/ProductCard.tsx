import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { ShoppingCart, Eye, Star } from "lucide-react";
import { motion } from "framer-motion";
import { Product } from "@/src/context/ProductContext";
import { useCart } from "@/src/context/CartContext";
import { useToast } from "@/src/context/ToastContext";

interface ProductCardProps {
  product: Product;
}

export default function ProductCard({ product }: ProductCardProps) {
  const { addToCart } = useCart();
  const { addToast } = useToast();
  const navigate = useNavigate();

  const handleAddToCart = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    addToCart(product);
    addToast("Added Successfully!", "success");
  };

  return (
    <motion.div
      whileHover={{ y: -10 }}
      className="group relative overflow-hidden rounded-3xl bg-white shadow-sm ring-1 ring-gray-100 transition-all hover:shadow-xl"
      onClick={() => navigate(`/product/${product.id}`)}
    >
      <div className="aspect-[4/5] overflow-hidden">
        <img 
          src={product.image} 
          alt={product.name}
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
          referrerPolicy="no-referrer"
        />
        <div className="absolute right-4 top-4 flex flex-col gap-2 opacity-0 transition-opacity group-hover:opacity-100">
          <button 
            onClick={handleAddToCart}
            className="flex h-10 w-10 items-center justify-center rounded-full bg-white text-blue-600 shadow-lg hover:bg-blue-600 hover:text-white"
          >
            <ShoppingCart size={18} />
          </button>
          <button 
            onClick={() => navigate(`/product/${product.id}`)}
            className="flex h-10 w-10 items-center justify-center rounded-full bg-white text-gray-600 shadow-lg hover:bg-gray-100"
          >
            <Eye size={18} />
          </button>
        </div>
      </div>
      <div className="p-6">
        <div className="flex items-center justify-between">
          <span className="text-xs font-medium text-gray-400 uppercase tracking-wider">{product.category}</span>
          <div className="flex items-center gap-1 text-xs font-bold text-blue-600">
            <Star size={12} fill="currentColor" /> 4.5
          </div>
        </div>
        <h3 className="mt-2 text-lg font-bold text-gray-900 group-hover:text-blue-600 transition-colors">{product.name}</h3>
        <p className="mt-2 text-xl font-extrabold text-gray-900">${product.price.toFixed(2)}</p>
        
        <button 
          onClick={handleAddToCart}
          className="mt-6 flex w-full items-center justify-center gap-2 rounded-xl bg-blue-600 py-3 text-sm font-bold text-white transition-all hover:bg-blue-700 active:scale-95"
        >
          <ShoppingCart size={16} /> Add to Cart
        </button>
      </div>
    </motion.div>
  );
}
