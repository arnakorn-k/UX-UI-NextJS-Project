import { Link } from "react-router-dom";
import { ShoppingCart, Mail, Share2, Globe } from "lucide-react";

export default function Footer() {
  return (
    <footer className="border-t border-gray-100 bg-white pt-16 pb-8">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-4">
          <div className="col-span-1 md:col-span-1">
            <Link to="/" className="flex items-center gap-2">
              <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-blue-600 text-white">
                <ShoppingCart size={18} />
              </div>
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
            </div>
          </div>

          <div>
            <h3 className="text-sm font-bold uppercase tracking-wider text-gray-900">Shop</h3>
            <ul className="mt-4 space-y-2">
              <li><Link to="#" className="text-sm text-gray-500 hover:text-gray-900">New Arrivals</Link></li>
              <li><Link to="#" className="text-sm text-gray-500 hover:text-gray-900">Best Sellers</Link></li>
              <li><Link to="#" className="text-sm text-gray-500 hover:text-gray-900">Gift Cards</Link></li>
              <li><Link to="#" className="text-sm text-gray-500 hover:text-gray-900">Sale</Link></li>
            </ul>
          </div>

          <div>
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
        </div>
      </div>
    </footer>
  );
}
