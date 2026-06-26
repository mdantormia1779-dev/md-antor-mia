"use client";

import React, { useState } from "react";
import { Lock, Mail, Eye, EyeOff, Loader2 } from "lucide-react";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Link from "next/link";
import { authClient } from "@/lib/auth-client";

const LoginPage = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({ email: "", password: "" });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // ইমেইল লগইন লজিক
  const handleLogin = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const { data, error } = await authClient.signIn.email({
        email: formData.email,
        password: formData.password,
        rememberMe: true,
        callbackURL: "/admin",
      });

      if (error) {
        toast.error(error.message || "Invalid credentials!");
      } else {
        toast.success("Login successful!");
      }
    } catch (err) {
      toast.error("Something went wrong!");
    } finally {
      setLoading(false);
    }
  };

  // গুগল লগইন লজিক
  const handleGoogleLogin = async () => {
    try {
      await authClient.signIn.social({
        provider: "google",
        callbackURL: "/admin",
      });
    } catch (err) {
      toast.error("Google login failed!");
    }
  };

  return (
    <div className="flex items-center justify-center py-6 bg-black min-h-screen">
      <ToastContainer theme="dark" />

      <div className="w-full max-w-md bg-gray-900/50 border border-white/10 p-8 rounded-3xl backdrop-blur-sm">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold text-white mb-2">Welcome Back</h2>
          <p className="text-gray-400">Enter your credentials to access your account</p>
        </div>

        <form onSubmit={handleLogin} className="space-y-4">
          <div className="relative">
            <Mail className="absolute left-3 top-3.5 text-gray-500" size={18} />
            <input
              name="email"
              type="email"
              required
              onChange={handleChange}
              className="w-full pl-10 pr-4 py-3 bg-gray-950 border border-white/10 rounded-xl text-white outline-none focus:border-indigo-500 transition-all"
              placeholder="Email address"
            />
          </div>

          <div className="relative">
            <Lock className="absolute left-3 top-3.5 text-gray-500" size={18} />
            <input
              name="password"
              type={showPassword ? "text" : "password"}
              required
              onChange={handleChange}
              className="w-full pl-10 pr-12 py-3 bg-gray-950 border border-white/10 rounded-xl text-white outline-none focus:border-indigo-500 transition-all"
              placeholder="Password"
            />
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="absolute right-3 top-3.5 text-gray-500 hover:text-white transition-colors"
            >
              {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
            </button>
          </div>

          <button
            type="submit"
            disabled={loading}
            className="w-full py-3 mt-4 bg-indigo-600 hover:bg-indigo-700 text-white rounded-xl font-bold transition-all flex items-center justify-center gap-2"
          >
            {loading ? (
              <><Loader2 className="animate-spin" size={20} /> Signing in...</>
            ) : (
              "Sign In"
            )}
          </button>
        </form>

        <button
          type="button"
          onClick={handleGoogleLogin}
          className="w-full mt-6 py-3 flex items-center justify-center gap-3 bg-white hover:bg-gray-100 text-black rounded-xl font-bold transition-all"
        >
          {/* Google Icon */}
          <svg className="w-5 h-5" viewBox="0 0 24 24"><path fill="currentColor" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" /><path fill="currentColor" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" /><path fill="currentColor" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" /><path fill="currentColor" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" /></svg>
          Continue with Google
        </button>

        <p className="text-center text-sm text-gray-500 mt-6">
          Dont have an account?{" "}
          {/* <Link href="/register" className="text-indigo-400 hover:underline">
            Sign Up
          </Link> */}
        </p>
      </div>
    </div>
  );
};

export default LoginPage;