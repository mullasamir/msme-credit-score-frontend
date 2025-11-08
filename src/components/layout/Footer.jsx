// src/components/Footer.jsx
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  DollarSign, Mail, Github, Twitter, Linkedin, MapPin, Phone, Clock,
  Shield, TrendingUp, ArrowRight, Sparkles, Store, Award, MessageCircle,
  Landmark, X
} from 'lucide-react';

// Import Chat Component
import Chat from '../../pages/Chat'; // Adjust path if needed

const Footer = () => {
  const [isChatOpen, setIsChatOpen] = useState(false);
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

  const contactInfo = [
    { icon: MapPin, text: 'Fintech Hub, Mumbai, India', subtext: 'Headquarters' },
    { icon: Phone, text: '+91 98765 43210', subtext: '24/7 Lender Support' },
    { icon: Mail, text: 'hello@altscore.in', subtext: 'Business Inquiries' },
    { icon: Clock, text: 'Mon - Sat: 9:00 - 18:00', subtext: 'IST' }
  ];

  const socialLinks = [
    { icon: Github, name: 'GitHub', url: 'https://github.com/altscore', color: 'hover:text-gray-700' },
    { icon: Twitter, name: 'Twitter', url: 'https://twitter.com/altscore', color: 'hover:text-blue-500' },
    { icon: Linkedin, name: 'LinkedIn', url: 'https://linkedin.com/company/altscore', color: 'hover:text-blue-600' },
    { icon: Mail, name: 'Email', url: 'mailto:hello@altscore.in', color: 'hover:text-green-600' }
  ];

  return (
    <>
      <footer className="relative bg-gradient-to-br from-slate-50 via-blue-50/30 to-green-50/30 border-t border-gray-200 overflow-hidden">
        {/* ... your existing footer content ... */}
        {/* (Keep everything from your original Footer) */}

        {/* Floating Chat Button */}
        <div className="fixed bottom-6 right-6 z-50">
          <button
            onClick={() => setIsChatOpen(true)}
            className="bg-gradient-to-r from-blue-500 to-green-500 hover:from-blue-600 hover:to-green-600 text-white p-4 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-110 group"
          >
            <MessageCircle className="h-6 w-6" />
            <div className="absolute inset-0 bg-white/20 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          </button>
        </div>
      </footer>

      {/* Chat Modal */}
      {isChatOpen && (
        <div className="fixed inset-0 z-50 flex items-end justify-end p-4 md:p-6">
          {/* Overlay */}
          <div
            className="absolute inset-0 bg-black/30 backdrop-blur-sm"
            onClick={() => setIsChatOpen(false)}
          />

          {/* Chat Window */}
          <div className="relative w-full max-w-md bg-white rounded-2xl shadow-2xl overflow-hidden animate-in slide-in-from-bottom duration-300">
            {/* Header */}
            <div className="bg-gradient-to-r from-blue-500 to-green-500 text-white p-4 flex items-center justify-between">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center">
                  <MessageCircle className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="font-semibold">AltScore Assistant</h3>
                  <p className="text-xs opacity-90">Ask about credit scoring</p>
                </div>
              </div>
              <button
                onClick={() => setIsChatOpen(false)}
                className="p-1 hover:bg-white/20 rounded-full transition-colors"
              >
                <X className="h-5 w-5" />
              </button>
            </div>

            {/* Chat Component */}
            <div className="h-96">
              <Chat />
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Footer;