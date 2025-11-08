import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  Eye,
  Mail,
  Lock,
  User,
  UserPlus,
  Sparkles,
  EyeOff,
  ArrowRight,
  Shield,
  CheckCircle
} from 'lucide-react';

const Register = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    password: '',
    confirmPassword: ''
  });
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    await new Promise((resolve) => setTimeout(resolve, 2000));
    console.log('Registration data:', formData);
    setIsLoading(false);
  };

  const passwordStrength = {
    length: formData.password.length >= 8,
    uppercase: /[A-Z]/.test(formData.password),
    number: /[0-9]/.test(formData.password),
    special: /[!@#$%^&*(),.?":{}|<>]/.test(formData.password)
  };

  const strengthScore = Object.values(passwordStrength).filter(Boolean).length;

  return (
    <div className="min-h-screen relative flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8 overflow-hidden bg-gradient-to-br from-gray-50 via-blue-50 to-indigo-100">
      {/* Background */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 -left-32 w-96 h-96 bg-blue-300/30 rounded-full mix-blend-multiply filter blur-3xl animate-float"></div>
        <div className="absolute bottom-0 -right-32 w-96 h-96 bg-indigo-300/30 rounded-full mix-blend-multiply filter blur-3xl animate-float delay-1000"></div>
        
        {/* Blurred Dots */}
        <div className="absolute inset-0">
          <div className="absolute top-1/4 left-1/4 w-6 h-6 bg-blue-300 rounded-full blur-xl opacity-40"></div>
          <div className="absolute top-1/3 right-1/4 w-8 h-8 bg-indigo-300 rounded-full blur-xl opacity-30"></div>
          <div className="absolute bottom-1/4 left-1/3 w-5 h-5 bg-cyan-300 rounded-full blur-xl opacity-40"></div>
          <div className="absolute bottom-1/3 right-1/3 w-7 h-7 bg-purple-300 rounded-full blur-xl opacity-30"></div>
        </div>
      </div>

      <div className="max-w-md w-full space-y-8 relative z-10">
        {/* Header */}
        <div className="text-center animate-fadeInUp">
          <div className="flex items-center justify-center mb-6">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-2xl blur opacity-60 animate-pulse"></div>
              <div className="relative bg-white p-4 rounded-2xl shadow-xl border border-blue-100">
                <UserPlus className="h-8 w-8 bg-gradient-to-r from-blue-600 to-indigo-600 text-blue bg-clip-text" />
              </div>
            </div>
          </div>

          <div className="inline-flex items-center px-4 py-2 rounded-full bg-white/80 backdrop-blur-md border border-blue-200 mb-4 shadow-sm">
            <Sparkles className="h-4 w-4 text-blue-500 mr-2" />
            <span className="text-sm font-semibold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
              Join RetinaScan
            </span>
          </div>

          <h2 className="text-4xl font-bold text-gray-900 mb-2">
            Create Your <span className="gradient-text">Account</span>
          </h2>
          <p className="text-gray-600 text-base">Start your journey in AI-powered healthcare</p>
        </div>

        {/* Form */}
        <div className="bg-white/90 backdrop-blur-xl rounded-3xl shadow-2xl border border-blue-100 p-8 animate-fadeInUp" style={{animationDelay: '0.2s'}}>
          <form className="space-y-6" onSubmit={handleSubmit}>
            {/* Full Name */}
            <div className="space-y-2">
              <label className="block text-sm font-medium text-gray-700">Full Name</label>
              <div className="relative">
                <User className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                <input
                  name="fullName"
                  type="text"
                  required
                  value={formData.fullName}
                  onChange={handleChange}
                  placeholder="Enter your full name"
                  className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 bg-white placeholder-gray-400"
                />
              </div>
            </div>

            {/* Email */}
            <div className="space-y-2">
              <label className="block text-sm font-medium text-gray-700">Email Address</label>
              <div className="relative">
                <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                <input
                  name="email"
                  type="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Enter your email"
                  className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 bg-white placeholder-gray-400"
                />
              </div>
            </div>

            {/* Password */}
            <div className="space-y-2">
              <label className="block text-sm font-medium text-gray-700">Password</label>
              <div className="relative">
                <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                <input
                  name="password"
                  type={showPassword ? 'text' : 'password'}
                  required
                  value={formData.password}
                  onChange={handleChange}
                  placeholder="Create a strong password"
                  className="w-full pl-10 pr-12 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 bg-white placeholder-gray-400"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-blue-500 transition-colors duration-300"
                >
                  {showPassword ? <EyeOff className="h-5 w-5" /> : <Eye className="h-5 w-5" />}
                </button>
              </div>

              {/* Password Strength Indicator */}
              {formData.password && (
                <div className="space-y-2 mt-3">
                  <div className="flex justify-between items-center text-xs">
                    <span className="text-gray-600">Password strength</span>
                    <span className={`font-semibold ${
                      strengthScore === 4 ? 'text-green-600' :
                      strengthScore >= 2 ? 'text-yellow-600' : 'text-red-600'
                    }`}>
                      {strengthScore === 4 ? 'Strong' : strengthScore >= 2 ? 'Medium' : 'Weak'}
                    </span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div 
                      className={`h-2 rounded-full transition-all duration-500 ${
                        strengthScore === 4 ? 'bg-green-500 w-full' :
                        strengthScore === 3 ? 'bg-yellow-500 w-3/4' :
                        strengthScore === 2 ? 'bg-yellow-500 w-1/2' :
                        strengthScore === 1 ? 'bg-red-500 w-1/4' : 'bg-red-500 w-0'
                      }`}
                    ></div>
                  </div>
                  <div className="grid grid-cols-2 gap-2 text-xs">
                    {[
                      { key: 'length', label: '8+ characters' },
                      { key: 'uppercase', label: 'Uppercase letter' },
                      { key: 'number', label: 'Number' },
                      { key: 'special', label: 'Special character' }
                    ].map((req) => (
                      <div key={req.key} className="flex items-center space-x-2">
                        <CheckCircle className={`h-3 w-3 ${
                          passwordStrength[req.key] ? 'text-green-500' : 'text-gray-400'
                        }`} />
                        <span className={passwordStrength[req.key] ? 'text-gray-700' : 'text-gray-500'}>
                          {req.label}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Confirm Password */}
            <div className="space-y-2">
              <label className="block text-sm font-medium text-gray-700">Confirm Password</label>
              <div className="relative">
                <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                <input
                  name="confirmPassword"
                  type={showConfirmPassword ? 'text' : 'password'}
                  required
                  value={formData.confirmPassword}
                  onChange={handleChange}
                  placeholder="Confirm your password"
                  className="w-full pl-10 pr-12 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 bg-white placeholder-gray-400"
                />
                <button
                  type="button"
                  onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                  className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-blue-500 transition-colors duration-300"
                >
                  {showConfirmPassword ? <EyeOff className="h-5 w-5" /> : <Eye className="h-5 w-5" />}
                </button>
              </div>
            </div>

            {/* Terms Agreement */}
            <div className="flex items-start space-x-3">
              <div className="relative flex-shrink-0">
                <input
                  id="agree-terms"
                  name="agree-terms"
                  type="checkbox"
                  required
                  className="sr-only peer"
                />
                <div className="w-5 h-5 bg-white border-2 border-gray-300 rounded-md flex items-center justify-center transition-all duration-300 peer-checked:bg-blue-500 peer-checked:border-blue-500 peer-checked:shadow-lg mt-1">
                  <svg className="w-3 h-3 text-white opacity-0 peer-checked:opacity-100 transition-opacity duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
              </div>
              <label htmlFor="agree-terms" className="text-sm text-gray-600 cursor-pointer">
                I agree to the{' '}
                <a href="#" className="font-semibold text-blue-600 hover:text-blue-500 transition-colors">
                  Terms of Service
                </a>{' '}
                and{' '}
                <a href="#" className="font-semibold text-blue-600 hover:text-blue-500 transition-colors">
                  Privacy Policy
                </a>
              </label>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              disabled={isLoading}
              className="w-full bg-gradient-to-r from-blue-500 to-indigo-500 hover:from-blue-600 hover:to-indigo-600 disabled:from-gray-400 disabled:to-gray-500 text-white font-semibold py-3 px-6 rounded-xl transition-all duration-300 transform hover:scale-105 hover:shadow-xl disabled:scale-100 disabled:shadow-none group relative overflow-hidden"
            >
              <div className="relative z-10 flex items-center justify-center space-x-2">
                {isLoading ? (
                  <>
                    <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                    <span>Creating Account...</span>
                  </>
                ) : (
                  <>
                    <UserPlus className="h-5 w-5" />
                    <span>Create Account</span>
                    <ArrowRight className="h-4 w-4 transform group-hover:translate-x-1 transition-transform" />
                  </>
                )}
              </div>
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
            </button>

            {/* Login Link */}
            <div className="text-center pt-4 border-t border-gray-200">
              <p className="text-gray-600 text-sm">
                Already have an account?{' '}
                <Link to="/login" className="font-semibold text-blue-600 hover:text-blue-500 transition-colors group">
                  Sign in here
                  <ArrowRight className="h-4 w-4 inline ml-1 transform group-hover:translate-x-1 transition-transform" />
                </Link>
              </p>
            </div>
          </form>
        </div>

        {/* Footer Note */}
        <div className="text-center text-xs text-gray-600 mt-6 animate-fadeInUp" style={{animationDelay: '0.4s'}}>
          <div className="flex items-center justify-center space-x-4">
            <div className="flex items-center space-x-1">
              <Shield className="h-3 w-3 text-green-500" />
              <span>Secure by Design</span>
            </div>
            <div className="w-1 h-1 bg-gray-400 rounded-full"></div>
            <div className="flex items-center space-x-1">
              <Sparkles className="h-3 w-3 text-blue-500" />
              <span>AI-Driven Precision</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;