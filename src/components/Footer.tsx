<<<<<<< HEAD
import { ShoppingCart, Facebook, Twitter, Instagram, Youtube, Mail } from "lucide-react";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="bg-gray-900 pt-20 pb-10 text-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-4">
          <div className="space-y-6">
=======
import { Link } from "react-router-dom";
import { ShoppingCart, Mail, Share2, Globe } from "lucide-react";

export default function Footer() {
  return (
    <footer className="border-t border-gray-100 bg-white pt-16 pb-8">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-4">
          <div className="col-span-1 md:col-span-1">
>>>>>>> 7b5cd04338e29b30299724e59f508cee8c52e0bf
            <Link to="/" className="flex items-center gap-2">
              <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-blue-600 text-white">
                <ShoppingCart size={18} />
              </div>
<<<<<<< HEAD
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
=======
              <span className="text-xl font-bold tracking-tight text-gray-900">BlueShop</span>
            </Link>
            <p className="mt-4 text-sm leading-relaxed text-gray-500">
              Providing high-quality modern essentials for your home and lifestyle. 
              Minimalist design for maximum impact.
            </p>
            <div className="mt-6 flex gap-4">
              <button className="text-gray-400 hover:text-gray-600"><Globe size={20} /></button>
              <button className="text-gray-400 hover:text-gray-600"><Mail size={20} /></button>
              <button className="text-gray-400 hover:text-gray-600"><Share2 size={20} /></button>
>>>>>>> 7b5cd04338e29b30299724e59f508cee8c52e0bf
            </div>
          </div>

          <div>
<<<<<<< HEAD
            <h4 className="text-lg font-bold">Shop</h4>
            <ul className="mt-6 space-y-4 text-sm text-gray-400">
              <li><Link to="/shop" className="hover:text-white">All Products</Link></li>
              <li><Link to="/shop" className="hover:text-white">Electronics</Link></li>
              <li><Link to="/shop" className="hover:text-white">Home Office</Link></li>
              <li><Link to="/shop" className="hover:text-white">Footwear</Link></li>
=======
            <h3 className="text-sm font-bold uppercase tracking-wider text-gray-900">Shop</h3>
            <ul className="mt-4 space-y-2">
              <li><Link to="#" className="text-sm text-gray-500 hover:text-gray-900">New Arrivals</Link></li>
              <li><Link to="#" className="text-sm text-gray-500 hover:text-gray-900">Best Sellers</Link></li>
              <li><Link to="#" className="text-sm text-gray-500 hover:text-gray-900">Gift Cards</Link></li>
              <li><Link to="#" className="text-sm text-gray-500 hover:text-gray-900">Sale</Link></li>
>>>>>>> 7b5cd04338e29b30299724e59f508cee8c52e0bf
            </ul>
          </div>

          <div>
<<<<<<< HEAD
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
=======
            <h3 className="text-sm font-bold uppercase tracking-wider text-gray-900">Support</h3>
            <ul className="mt-4 space-y-2">
              <li><Link to="#" className="text-sm text-gray-500 hover:text-gray-900">Shipping Info</Link></li>
              <li><Link to="#" className="text-sm text-gray-500 hover:text-gray-900">Returns</Link></li>
              <li><Link to="#" className="text-sm text-gray-500 hover:text-gray-900">Contact Us</Link></li>
              <li><Link to="#" className="text-sm text-gray-500 hover:text-gray-900">FAQ</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-bold uppercase tracking-wider text-gray-900">Newsletter</h3>
            <p className="mt-4 text-sm text-gray-500">Subscribe to get special offers and once-in-a-lifetime deals.</p>
            <div className="mt-4 flex gap-2">
              <input 
                type="email" 
                placeholder="Your email" 
                className="w-full rounded-lg border border-gray-200 px-4 py-2 text-sm outline-none focus:border-blue-500"
              />
              <button className="rounded-lg bg-blue-600 px-4 py-2 text-sm font-semibold text-white hover:bg-blue-700">
                Join
              </button>
            </div>
          </div>
        </div>

        <div className="mt-16 flex flex-col items-center justify-between border-t border-gray-100 pt-8 md:flex-row">
          <p className="text-xs text-gray-400">© 2024 BlueShop. All rights reserved.</p>
          <div className="mt-4 flex gap-6 md:mt-0">
            <Link to="#" className="text-xs text-gray-400 hover:text-gray-600">Privacy Policy</Link>
            <Link to="#" className="text-xs text-gray-400 hover:text-gray-600">Terms of Service</Link>
          </div>
>>>>>>> 7b5cd04338e29b30299724e59f508cee8c52e0bf
        </div>
      </div>
    </footer>
  );
}
