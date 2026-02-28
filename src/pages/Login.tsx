import { Link, useNavigate } from "react-router-dom";
import { Mail, Lock, Eye, EyeOff, ShoppingCart } from "lucide-react";
import { useState, FormEvent } from "react";
import { motion } from "motion/react";

export default function Login() {
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();

  const handleLogin = (e: FormEvent) => {
    e.preventDefault();
    navigate("/dashboard");
  };

  return (
    <div className="flex min-h-[calc(100vh-64px)] items-center justify-center bg-gray-50 px-4 py-12">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="w-full max-w-md rounded-[32px] bg-white p-10 shadow-2xl shadow-blue-100"
      >
        <div className="text-center">
          <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-xl bg-blue-600 text-white">
            <ShoppingCart size={24} />
          </div>
          <h1 className="mt-6 text-3xl font-extrabold text-gray-900">Welcome Back</h1>
          <p className="mt-2 text-sm text-gray-500">Please enter your details to sign in to your account.</p>
        </div>

        <form className="mt-10 space-y-6" onSubmit={handleLogin}>
          <div>
            <label className="block text-sm font-bold text-gray-700">Email Address</label>
            <div className="relative mt-2">
              <Mail className="absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-gray-400" />
              <input
                type="email"
                required
                placeholder="name@company.com"
                className="w-full rounded-xl border border-gray-200 bg-white py-3 pl-12 pr-4 text-sm outline-none transition-all focus:border-blue-500 focus:ring-4 focus:ring-blue-500/10"
              />
            </div>
          </div>

          <div>
            <div className="flex items-center justify-between">
              <label className="block text-sm font-bold text-gray-700">Password</label>
              <Link to="#" className="text-xs font-bold text-blue-600 hover:underline">Forgot password?</Link>
            </div>
            <div className="relative mt-2">
              <Lock className="absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-gray-400" />
              <input
                type={showPassword ? "text" : "password"}
                required
                placeholder="••••••••"
                className="w-full rounded-xl border border-gray-200 bg-white py-3 pl-12 pr-12 text-sm outline-none transition-all focus:border-blue-500 focus:ring-4 focus:ring-blue-500/10"
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600"
              >
                {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
              </button>
            </div>
          </div>

          <div className="rounded-xl bg-red-50 p-4 text-center text-xs font-medium text-red-600">
            ⚠ Invalid email or password. Please try again.
          </div>

          <div className="flex items-center gap-3">
            <input type="checkbox" id="remember" className="h-4 w-4 rounded border-gray-300 text-blue-600 focus:ring-blue-500" />
            <label htmlFor="remember" className="text-sm font-medium text-gray-500">Remember me for 30 days</label>
          </div>

          <button
            type="submit"
            className="w-full rounded-xl bg-blue-600 py-4 text-sm font-bold text-white transition-all hover:bg-blue-700 hover:shadow-lg active:scale-[0.98]"
          >
            Sign In
          </button>
        </form>

        <div className="relative mt-10">
          <div className="absolute inset-0 flex items-center"><div className="w-full border-t border-gray-100"></div></div>
          <div className="relative flex justify-center text-xs uppercase tracking-widest text-gray-400">
            <span className="bg-white px-4">Or continue with</span>
          </div>
        </div>

        <div className="mt-8 grid grid-cols-2 gap-4">
          <button className="flex items-center justify-center gap-3 rounded-xl border border-gray-200 py-3 text-sm font-bold text-gray-700 transition-all hover:bg-gray-50">
            <img src="https://www.google.com/favicon.ico" alt="Google" className="h-5 w-5" />
            Google
          </button>
          <button className="flex items-center justify-center gap-3 rounded-xl border border-gray-200 py-3 text-sm font-bold text-gray-700 transition-all hover:bg-gray-50">
            <img src="https://www.facebook.com/favicon.ico" alt="Facebook" className="h-5 w-5" />
            Facebook
          </button>
        </div>

        <p className="mt-10 text-center text-sm text-gray-500">
          Don't have an account? <Link to="#" className="font-bold text-blue-600 hover:underline">Register Now</Link>
        </p>
      </motion.div>
    </div>
  );
}
