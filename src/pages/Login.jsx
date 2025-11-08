import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Eye, Mail, Lock, LogIn, Sparkles, EyeOff, ArrowRight, Shield, Zap } from 'lucide-react';

const Login = () => {
  const [formData, setFormData] = useState({ email: '', password: '' });
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    await new Promise((resolve) => setTimeout(resolve, 2000));
    console.log('Login data:', formData);
    setIsLoading(false);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-slate-100 flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      
      {/* --- Animated Background --- */}
      <div className="absolute inset-0 overflow-hidden -z-10">
        {/* Floating gradient lights */}
        <div className="absolute -top-32 -right-24 w-96 h-96 bg-blue-200/40 rounded-full blur-[120px] animate-pulse"></div>
        <div className="absolute -bottom-32 -left-24 w-96 h-96 bg-indigo-300/40 rounded-full blur-[120px] animate-pulse" style={{ animationDelay: '1.5s' }}></div>
        <div className="absolute top-1/2 left-1/2 w-[28rem] h-[28rem] bg-sky-200/30 rounded-full blur-[150px] animate-pulse" style={{ transform: 'translate(-50%, -50%)', animationDelay: '3s' }}></div>
      </div>

      {/* --- Main Login Card --- */}
      <div className="max-w-md w-full space-y-8 relative z-10">
        
        {/* Header Section */}
        <div className="text-center">
          <div className="flex items-center justify-center mb-6">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-indigo-400 rounded-2xl blur-md opacity-70 animate-pulse"></div>
              <div className="relative bg-white p-4 rounded-2xl shadow-lg border border-blue-100">
                <Sparkles className="h-8 w-8 text-blue-600" />
              </div>
            </div>
          </div>

          <div className="inline-flex items-center px-4 py-1.5 rounded-full bg-white/80 backdrop-blur-md border border-blue-200 mb-4 shadow-sm">
            <div className="w-2 h-2 bg-green-500 rounded-full animate-ping mr-2"></div>
            <span className="text-sm font-semibold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
              Welcome Back
            </span>
          </div>

          <h2 className="text-4xl font-bold text-gray-900 mb-3">
            Sign In to{' '}
            <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
              RetinaScan
            </span>
          </h2>
          <p className="text-gray-600 text-lg">
            Continue your AI-powered healthcare journey
          </p>
        </div>

        {/* --- Form Section --- */}
        <div className="bg-white/95 backdrop-blur-md rounded-3xl shadow-xl border border-blue-100 overflow-hidden transition-all hover:shadow-2xl">
          <div className="p-8">
            <form className="space-y-6" onSubmit={handleSubmit}>
              
              {/* Email Field */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Email Address</label>
                <div className="relative">
                  <Mail className="absolute left-3 top-1/2 -translate-y-1/2 text-blue-500 w-5 h-5" />
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    placeholder="Enter your email"
                    className="w-full pl-11 pr-3 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-400 focus:border-blue-400 text-gray-800 transition-all"
                  />
                </div>
              </div>

              {/* Password Field */}
              <div>
                <div className="flex justify-between mb-1">
                  <label className="block text-sm font-medium text-gray-700">Password</label>
                  <Link to="/forgot-password" className="text-sm text-blue-600 hover:text-blue-500">
                    Forgot password?
                  </Link>
                </div>
                <div className="relative">
                  <Lock className="absolute left-3 top-1/2 -translate-y-1/2 text-blue-500 w-5 h-5" />
                  <input
                    type={showPassword ? 'text' : 'password'}
                    name="password"
                    value={formData.password}
                    onChange={handleChange}
                    required
                    placeholder="Enter your password"
                    className="w-full pl-11 pr-10 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-400 focus:border-blue-400 text-gray-800 transition-all"
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-blue-500 transition"
                  >
                    {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                  </button>
                </div>
              </div>

              {/* Remember Me */}
              <div className="flex items-center space-x-2">
                <input
                  type="checkbox"
                  id="remember"
                  className="w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
                />
                <label htmlFor="remember" className="text-sm text-gray-600">
                  Remember me for 30 days
                </label>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={isLoading}
                className="w-full flex items-center justify-center space-x-2 py-3 rounded-xl font-semibold text-white bg-gradient-to-r from-blue-500 to-indigo-500 hover:from-blue-600 hover:to-indigo-600 shadow-lg hover:shadow-xl transition-all duration-300"
              >
                {isLoading ? (
                  <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                ) : (
                  <>
                    <LogIn className="w-5 h-5" />
                    <span>Sign In</span>
                    <ArrowRight className="w-4 h-4" />
                  </>
                )}
              </button>
            </form>

            {/* Divider */}
            <div className="mt-8 text-center border-t border-gray-200 pt-6">
              <p className="text-sm text-gray-600">
                Don’t have an account?{' '}
                <Link to="/register" className="text-blue-600 font-semibold hover:text-blue-500">
                  Create one
                </Link>
              </p>
            </div>
          </div>

          {/* Bottom Info Bar */}
          <div className="bg-blue-50 border-t border-blue-100 px-8 py-4 text-xs text-gray-600 flex justify-center gap-4">
            <div className="flex items-center gap-1">
              <Shield className="w-3 h-3 text-green-500" />
              <span>Bank-level Security</span>
            </div>
            <div className="flex items-center gap-1">
              <Zap className="w-3 h-3 text-blue-500" />
              <span>HIPAA Compliant</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
