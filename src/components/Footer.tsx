import { ShoppingCart, Facebook, Twitter, Instagram, Youtube, Mail } from "lucide-react";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="bg-gray-900 pt-20 pb-10 text-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-4">
          <div className="space-y-6">
            <Link to="/" className="flex items-center gap-2">
              <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-blue-600 text-white">
                <ShoppingCart size={18} />
              </div>
              <span className="text-xl font-bold tracking-tight">BlueShop</span>
            </Link>
            <p className="text-sm leading-relaxed text-gray-400">
              Your one-stop destination for premium lifestyle products. Minimalist design, maximum performance.
            </p>
            <div className="flex gap-4">
              {[Facebook, Twitter, Instagram, Youtube].map((Icon, i) => (
                <a key={i} href="#" className="flex h-10 w-10 items-center justify-center rounded-xl bg-gray-800 text-gray-400 transition-all hover:bg-blue-600 hover:text-white">
                  <Icon size={18} />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="text-lg font-bold">Shop</h4>
            <ul className="mt-6 space-y-4 text-sm text-gray-400">
              <li><Link to="/shop" className="hover:text-white">All Products</Link></li>
              <li><Link to="/shop" className="hover:text-white">Electronics</Link></li>
              <li><Link to="/shop" className="hover:text-white">Home Office</Link></li>
              <li><Link to="/shop" className="hover:text-white">Footwear</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-bold">Support</h4>
            <ul className="mt-6 space-y-4 text-sm text-gray-400">
              <li><Link to="#" className="hover:text-white">Help Center</Link></li>
              <li><Link to="#" className="hover:text-white">Shipping Policy</Link></li>
              <li><Link to="#" className="hover:text-white">Returns & Refunds</Link></li>
              <li><Link to="#" className="hover:text-white">Privacy Policy</Link></li>
            </ul>
          </div>

          <div className="space-y-6">
            <h4 className="text-lg font-bold">Newsletter</h4>
            <p className="text-sm text-gray-400">Subscribe to get special offers and once-in-a-lifetime deals.</p>
            <div className="relative">
              <Mail className="absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-gray-500" />
              <input 
                type="email" 
                placeholder="Your email" 
                className="w-full rounded-xl bg-gray-800 py-3 pl-12 pr-4 text-sm outline-none ring-1 ring-gray-700 focus:ring-blue-600"
              />
            </div>
            <button className="w-full rounded-xl bg-blue-600 py-3 text-sm font-bold transition-all hover:bg-blue-700">
              Subscribe
            </button>
          </div>
        </div>

        <div className="mt-20 border-t border-gray-800 pt-10 text-center text-xs text-gray-500">
          <p>© 2024 BlueShop E-Commerce. All rights reserved. Designed with ❤️ for modern shoppers.</p>
        </div>
      </div>
    </footer>
  );
}
