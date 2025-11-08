
import React from 'react';
import { Link } from 'react-router-dom';
import { 
  DollarSign, 
  Mail, 
  Github, 
  Twitter, 
  Linkedin, 
  MapPin, 
  Phone, 
  Clock,
  Shield,
  TrendingUp,
  ArrowRight,
  Sparkles,
  Store,
  Award,
  MessageCircle,
  Landmark
} from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Score Prediction', path: '/assess' },
  ];

  const services = [
    'Alternative Credit Scoring',
    'UPI & Bill Analysis',
    'Real-time Risk Assessment',
    'Lender API Integration',
    'MSME Loan Reports',
    'Rural Lending Support'
  ];

  const company = [
    'About AltScore',
    'AI Technology',
    'Research & Impact',
    'Case Studies',
    'Careers',
    'Press'
  ];

  const contactInfo = [
    {
      icon: MapPin,
      text: 'Fintech Hub, Mumbai, India',
      subtext: 'Headquarters'
    },
    {
      icon: Phone,
      text: '+91 98765 43210',
      subtext: '24/7 Lender Support'
    },
    {
      icon: Mail,
      text: 'hello@altscore.in',
      subtext: 'Business Inquiries'
    },
    {
      icon: Clock,
      text: 'Mon - Sat: 9:00 - 18:00',
      subtext: 'IST'
    }
  ];

  const socialLinks = [
    { icon: Github, name: 'GitHub', url: 'https://github.com/altscore', color: 'hover:text-gray-700' },
    { icon: Twitter, name: 'Twitter', url: 'https://twitter.com/altscore', color: 'hover:text-blue-500' },
    { icon: Linkedin, name: 'LinkedIn', url: 'https://linkedin.com/company/altscore', color: 'hover:text-blue-600' },
    { icon: Mail, name: 'Email', url: 'mailto:hello@altscore.in', color: 'hover:text-green-600' }
  ];

  return (
    <footer className="relative bg-gradient-to-br from-slate-50 via-blue-50/30 to-green-50/30 border-t border-gray-200 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Gradient Orbs */}
        <div className="absolute -top-20 -left-20 w-80 h-80 bg-blue-200/40 rounded-full blur-3xl opacity-50"></div>
        <div className="absolute -bottom-20 -right-20 w-80 h-80 bg-green-200/40 rounded-full blur-3xl opacity-50"></div>
        
        {/* Grid Pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(34,197,94,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(34,197,94,0.05)_1px,transparent_1px)] bg-[size:64px_64px]"></div>
      </div>

      <div className="relative z-10">
        {/* Main Footer Content */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-5 gap-12">
            {/* Brand Column */}
            <div className="xl:col-span-2">
              <div className="flex items-center space-x-3 mb-6">
                <div className="relative">
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-green-500 rounded-2xl blur opacity-75"></div>
                  <div className="relative bg-white p-3 rounded-full shadow-lg border border-blue-100">
                    <Landmark className="h-7 w-7 text-green-600" />
                  </div>
                </div>
                <div className="flex flex-col">
                  <span className="text-2xl font-bold text-gray-900">
                    AltScore
                  </span>
                  <div className="flex items-center space-x-1">
                    <Sparkles className="h-3 w-3 text-green-500" />
                    <span className="text-xs text-gray-600 font-medium">AI Credit for MSMEs</span>
                  </div>
                </div>
              </div>

              <p className="text-gray-600 mb-6 leading-relaxed max-w-md">
                Unlocking ₹45 lakh crore credit gap for 63 million unbanked MSMEs using AI-powered 
                alternative data — UPI, electricity bills, and digital receipts.
              </p>

              {/* Trust Badges */}
              <div className="flex flex-wrap gap-4 mb-8">
                <div className="flex items-center space-x-2 px-3 py-2 bg-white rounded-lg border border-green-100 shadow-sm">
                  <Shield className="h-4 w-4 text-green-600" />
                  <span className="text-xs font-medium text-gray-700">ISO 27001</span>
                </div>
                <div className="flex items-center space-x-2 px-3 py-2 bg-white rounded-lg border border-green-100 shadow-sm">
                  <Award className="h-4 w-4 text-yellow-600" />
                  <span className="text-xs font-medium text-gray-700">87.4% Accuracy</span>
                </div>
                <div className="flex items-center space-x-2 px-3 py-2 bg-white rounded-lg border border-green-100 shadow-sm">
                  <Store className="h-4 w-4 text-blue-600" />
                  <span className="text-xs font-medium text-gray-700">10K+ MSMEs Scored</span>
                </div>
              </div>

              {/* Social Links */}
              <div className="flex space-x-4">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`p-3 bg-white border border-gray-200 rounded-xl text-gray-500 ${social.color} transition-all duration-300 hover:scale-110 hover:shadow-md hover:border-gray-300`}
                    aria-label={social.name}
                  >
                    <social.icon className="h-5 w-5" />
                  </a>
                ))}
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-6 flex items-center">
                <span className="bg-gradient-to-r from-blue-600 to-green-600 bg-clip-text text-transparent">
                  Quick Links
                </span>
              </h3>
              <ul className="space-y-3">
                {quickLinks.map((link, index) => (
                  <li key={index}>
                    <Link
                      to={link.path}
                      className="text-gray-600 hover:text-green-600 transition-all duration-300 group flex items-center space-x-2"
                    >
                      <ArrowRight className="h-3 w-3 text-green-500 opacity-0 group-hover:opacity-100 transform group-hover:translate-x-1 transition-all duration-300" />
                      <span>{link.name}</span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Services */}
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-6 flex items-center">
                <span className="bg-gradient-to-r from-blue-600 to-green-600 bg-clip-text text-transparent">
                  Our Services
                </span>
              </h3>
              <ul className="space-y-3">
                {services.map((service, index) => (
                  <li key={index}>
                    <div className="text-gray-600 hover:text-green-600 transition-colors duration-300 group flex items-center space-x-2 cursor-pointer">
                      <div className="w-1.5 h-1.5 bg-green-500 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                      <span className="text-sm">{service}</span>
                    </div>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact Info */}
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-6 flex items-center">
                <span className="bg-gradient-to-r from-blue-600 to-green-600 bg-clip-text text-transparent">
                  Contact Us
                </span>
              </h3>
              <div className="space-y-4">
                {contactInfo.map((contact, index) => (
                  <div key={index} className="flex items-start space-x-3 group">
                    <div className="p-2 bg-white rounded-lg border border-green-100 shadow-sm group-hover:border-green-300 transition-colors duration-300">
                      <contact.icon className="h-4 w-4 text-green-600" />
                    </div>
                    <div>
                      <p className="text-gray-700 font-medium text-sm group-hover:text-green-600 transition-colors duration-300">
                        {contact.text}
                      </p>
                      <p className="text-gray-500 text-xs mt-1">{contact.subtext}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Newsletter Section */}
        <div className="border-t border-gray-200 bg-white/50 backdrop-blur-sm">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
            <div className="flex flex-col lg:flex-row items-center justify-between gap-6">
              <div className="flex items-center space-x-3">
                <Mail className="h-6 w-6 text-green-600" />
                <div>
                  <h4 className="text-lg font-semibold text-gray-900">Lender Updates</h4>
                  <p className="text-gray-600 text-sm">Get insights on MSME lending and AI scoring</p>
                </div>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-3 w-full lg:w-auto">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="px-4 py-3 bg-white border border-gray-300 rounded-xl text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all duration-300 flex-1 min-w-64 shadow-sm"
                />
                <button className="bg-gradient-to-r from-blue-500 to-green-500 hover:from-blue-600 hover:to-green-600 text-white font-semibold px-6 py-3 rounded-xl transition-all duration-300 transform hover:scale-105 hover:shadow-lg flex items-center space-x-2 shadow-md">
                  <span>Subscribe</span>
                  <ArrowRight className="h-4 w-4" />
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-200 bg-white/80 backdrop-blur-md">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
            <div className="flex flex-col md:flex-row items-center justify-between gap-4">
              <div className="flex items-center space-x-4 text-sm text-gray-600">
                <span>&copy; {currentYear} AltScore. All rights reserved.</span>
                <div className="hidden md:flex items-center space-x-4">
                  <span className="text-gray-400">•</span>
                  <a href="#" className="hover:text-green-600 transition-colors duration-300">Privacy Policy</a>
                  <span className="text-gray-400">•</span>
                  <a href="#" className="hover:text-green-600 transition-colors duration-300">Terms of Service</a>
                  <span className="text-gray-400">•</span>
                  <a href="#" className="hover:text-green-600 transition-colors duration-300">API Docs</a>
                </div>
              </div>
              
              <div className="flex items-center space-x-2 text-gray-600 text-sm">
                <TrendingUp className="h-4 w-4 text-green-600 animate-pulse" />
                <span>
                  Made with passion for{' '}
                  <span className="bg-gradient-to-r from-blue-600 to-green-600 bg-clip-text text-transparent font-semibold">
                    financial inclusion
                  </span>
                </span>
              </div>
            </div>

            {/* Mobile Links */}
            <div className="flex flex-wrap items-center justify-center gap-4 mt-4 md:hidden">
              <a href="#" className="text-gray-600 hover:text-green-600 transition-colors duration-300 text-sm">Privacy</a>
              <span className="text-gray-400">•</span>
              <a href="#" className="text-gray-600 hover:text-green-600 transition-colors duration-300 text-sm">Terms</a>
              <span className="text-gray-400">•</span>
              <a href="#" className="text-gray-600 hover:text-green-600 transition-colors duration-300 text-sm">API</a>
            </div>
          </div>
        </div>
      </div>

      {/* Floating Action Button */}
      <div className="fixed bottom-6 right-6 z-50">
        <button className="bg-gradient-to-r from-blue-500 to-green-500 hover:from-blue-600 hover:to-green-600 text-white p-4 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-110 group">
          <MessageCircle className="h-6 w-6" />
          <div className="absolute inset-0 bg-white/20 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
        </button>
      </div>
    </footer>
  );
};

export default Footer;