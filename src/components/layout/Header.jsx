
import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { DollarSign, Sparkles, Menu, X, Landmark } from 'lucide-react';

const Header = () => {
  const location = useLocation();
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 w-full z-50 backdrop-blur-xl bg-white/60 border-b border-white/30 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-3 group relative">
            <div className="relative flex items-center justify-center">
              {/* Animated gradient ring */}
              <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-blue-500 via-purple-500 to-green-500 blur-md opacity-70 animate-pulse"></div>

              {/* Semi-transparent circle */}
              <div className="relative p-3 rounded-full bg-white/20 border border-white/30">
              {/* <Landmark /> */}
                <Landmark className="h-7 w-7 text-black-600 group-hover:text-blue-600 transition-all duration-300" />
              </div>

              {/* Glowing reflection */}
              <div className="absolute -bottom-1 w-10 h-2 bg-gradient-to-r from-blue-400 to-green-400 blur-md opacity-60 rounded-full"></div>
            </div>

            {/* Text beside logo */}
            <div className="flex flex-col ml-2">
              <span className="text-2xl font-extrabold bg-gradient-to-r from-blue-700 via-purple-600 to-green-600 bg-clip-text text-transparent tracking-tight">
                Alt<span className="font-light">Score</span>
              </span>
              <div className="flex items-center space-x-1">
                <Sparkles className="h-3 w-3 text-yellow-400 animate-pulse" />
                <span className="text-xs text-gray-500 font-medium tracking-wide">
                  AI Credit for MSMEs
                </span>
              </div>
            </div>
          </Link>

          {/* Desktop Navigation - Only 3 Items */}
          <nav className="hidden md:flex items-center space-x-2 bg-white/70 backdrop-blur-sm rounded-2xl px-3 py-2 border border-gray-100 shadow-sm">
            {[
              { path: '/', label: 'Home' },
              { path: '/about', label: 'About' },
              { path: '/assess', label: 'Score Prediction' },
            ].map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`px-5 py-2 rounded-xl text-md font-semibold transition-all duration-300 ${
                  location.pathname === item.path
                    ? 'bg-gradient-to-r from-blue-50 to-green-50 text-blue-700 shadow-inner'
                    : 'text-gray-700 hover:bg-gray-50'
                }`}
              >
                {item.label}
              </Link>
            ))}
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden p-2 rounded-lg bg-white/60 border border-gray-200 backdrop-blur-md"
          >
            {menuOpen ? (
              <X className="h-6 w-6 text-gray-700" />
            ) : (
              <Menu className="h-6 w-6 text-gray-700" />
            )}
          </button>
        </div>

        {/* Mobile Menu - Only 3 Items */}
        {menuOpen && (
          <div className="md:hidden mt-2 bg-white/80 backdrop-blur-xl border border-gray-100 rounded-2xl shadow-lg py-3 space-y-1 animate-fadeInDown">
            {[
              { path: '/', label: 'Home' },
              { path: '/about', label: 'About' },
              { path: '/assess', label: 'Score Prediction' },
              
            ].map((item) => (
              <Link
                key={item.path}
                to={item.path}
                onClick={() => setMenuOpen(false)}
                className={`block px-6 py-3 rounded-xl font-medium transition-colors duration-300 ${
                  location.pathname === item.path
                    ? 'bg-gradient-to-r from-blue-100 to-green-100 text-blue-700'
                    : 'hover:bg-gray-50 text-gray-700'
                }`}
              >
                {item.label}
              </Link>
            ))}
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
