import { Link, useLocation } from "react-router-dom";
<<<<<<< HEAD
import { ShoppingCart, Search, User, LogOut, LayoutDashboard, Menu, X } from "lucide-react";
import { useAuth } from "@/src/context/AuthContext";
import { useCart } from "@/src/context/CartContext";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function Navbar() {
  const { user, logout, isAuthenticated } = useAuth();
  const { totalItems } = useCart();
  const location = useLocation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "Shop", path: "/shop" },
    { name: "Orders", path: "/orders", protected: true },
    { name: "Dashboard", path: "/dashboard", protected: true },
  ];
=======
import { ShoppingCart, Search, User } from "lucide-react";
import { cn } from "@/src/lib/utils";

export default function Navbar() {
  const location = useLocation();
  const isDashboard = location.pathname.startsWith("/dashboard");

  if (isDashboard) return null;
>>>>>>> 7b5cd04338e29b30299724e59f508cee8c52e0bf

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
<<<<<<< HEAD
            {navLinks.map(link => (
              (!link.protected || isAuthenticated) && (
                <Link 
                  key={link.name}
                  to={link.path} 
                  className={`text-sm font-medium transition-colors ${
                    location.pathname === link.path ? "text-blue-600" : "text-gray-500 hover:text-gray-900"
                  }`}
                >
                  {link.name}
                </Link>
              )
            ))}
=======
            <Link to="/" className="text-sm font-medium text-blue-600">Home</Link>
            <Link to="/products" className="text-sm font-medium text-gray-500 hover:text-gray-900">Products</Link>
            <Link to="/about" className="text-sm font-medium text-gray-500 hover:text-gray-900">About</Link>
            <Link to="/contact" className="text-sm font-medium text-gray-500 hover:text-gray-900">Contact</Link>
>>>>>>> 7b5cd04338e29b30299724e59f508cee8c52e0bf
          </div>
        </div>

        <div className="flex items-center gap-4">
<<<<<<< HEAD
          <Link to="/cart" className="relative p-2 text-gray-500 hover:text-gray-900">
            <ShoppingCart size={20} />
            {totalItems > 0 && (
              <span className="absolute right-1 top-1 flex h-4 w-4 items-center justify-center rounded-full bg-blue-600 text-[10px] font-bold text-white">
                {totalItems}
              </span>
            )}
          </Link>

          {isAuthenticated ? (
            <div className="hidden items-center gap-4 md:flex">
              <span className="text-sm font-medium text-gray-700">Hi, {user?.username}</span>
              <button 
                onClick={logout}
                className="flex items-center gap-2 rounded-lg bg-gray-100 px-4 py-2 text-sm font-semibold text-gray-700 transition-colors hover:bg-gray-200"
              >
                <LogOut size={16} /> Logout
              </button>
            </div>
          ) : (
            <Link
              to="/login"
              className="hidden rounded-lg bg-blue-600 px-6 py-2 text-sm font-semibold text-white transition-colors hover:bg-blue-700 md:block"
            >
              Login
            </Link>
          )}

          <button 
            className="p-2 text-gray-500 md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="border-t border-gray-100 bg-white md:hidden"
          >
            <div className="flex flex-col gap-4 p-4">
              {navLinks.map(link => (
                (!link.protected || isAuthenticated) && (
                  <Link 
                    key={link.name}
                    to={link.path} 
                    onClick={() => setIsMenuOpen(false)}
                    className="text-sm font-medium text-gray-500 hover:text-gray-900"
                  >
                    {link.name}
                  </Link>
                )
              ))}
              {isAuthenticated ? (
                <button 
                  onClick={() => { logout(); setIsMenuOpen(false); }}
                  className="flex items-center gap-2 text-sm font-medium text-red-500"
                >
                  <LogOut size={16} /> Logout
                </button>
              ) : (
                <Link 
                  to="/login" 
                  onClick={() => setIsMenuOpen(false)}
                  className="text-sm font-medium text-blue-600"
                >
                  Login
                </Link>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
=======
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
>>>>>>> 7b5cd04338e29b30299724e59f508cee8c52e0bf
    </nav>
  );
}
