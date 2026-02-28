import { Link, useLocation } from "react-router-dom";
import { ShoppingCart, Search, User } from "lucide-react";
import { cn } from "@/src/lib/utils";

export default function Navbar() {
  const location = useLocation();
  const isDashboard = location.pathname.startsWith("/dashboard");

  if (isDashboard) return null;

  return (
    <nav className="sticky top-0 z-50 w-full border-b border-gray-100 bg-white/80 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <div className="flex items-center gap-8">
          <Link to="/" className="flex items-center gap-2">
            <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-blue-600 text-white">
              <ShoppingCart size={18} />
            </div>
            <span className="text-xl font-bold tracking-tight text-gray-900">BlueShop</span>
          </Link>
          <div className="hidden md:flex md:items-center md:gap-6">
            <Link to="/" className="text-sm font-medium text-blue-600">Home</Link>
            <Link to="/products" className="text-sm font-medium text-gray-500 hover:text-gray-900">Products</Link>
            <Link to="/about" className="text-sm font-medium text-gray-500 hover:text-gray-900">About</Link>
            <Link to="/contact" className="text-sm font-medium text-gray-500 hover:text-gray-900">Contact</Link>
          </div>
        </div>

        <div className="flex items-center gap-4">
          <div className="relative hidden sm:block">
            <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-400" />
            <input
              type="text"
              placeholder="Search products..."
              className="h-10 w-64 rounded-full bg-gray-100 pl-10 pr-4 text-sm outline-none ring-blue-500 focus:ring-2"
            />
          </div>
          <button className="relative p-2 text-gray-500 hover:text-gray-900">
            <ShoppingCart size={20} />
            <span className="absolute right-1 top-1 flex h-4 w-4 items-center justify-center rounded-full bg-blue-600 text-[10px] font-bold text-white">
              3
            </span>
          </button>
          <Link
            to="/login"
            className="rounded-lg bg-blue-600 px-6 py-2 text-sm font-semibold text-white transition-colors hover:bg-blue-700"
          >
            Login
          </Link>
        </div>
      </div>
    </nav>
  );
}
