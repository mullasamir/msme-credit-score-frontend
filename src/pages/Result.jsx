import React from 'react';
import { useLocation, Link } from 'react-router-dom';
import { 
  ArrowLeft, DollarSign, Shield, TrendingUp, 
  CheckCircle, AlertCircle, XCircle, Award 
} from 'lucide-react';

const Result = () => {
  const location = useLocation();
  const { risk, probability, score, formData } = location.state || {};

  if (!risk) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-50 to-green-50">
        <div className="text-center">
          <XCircle className="h-16 w-16 text-red-500 mx-auto mb-4" />
          <h2 className="text-2xl font-bold text-gray-900">No Result Found</h2>
          <Link to="/assess" className="mt-4 inline-block text-blue-600 hover:underline">
            ← Go Back to Assessment
          </Link>
        </div>
      </div>
    );
  }

  const riskConfig = {
    "Low Risk": { color: 'from-green-500 to-emerald-600', icon: CheckCircle, badge: 'text-green-600 bg-green-100' },
    "Medium Risk": { color: 'from-yellow-500 to-orange-600', icon: AlertCircle, badge: 'text-orange-600 bg-orange-100' },
    "High Risk": { color: 'from-red-500 to-rose-600', icon: XCircle, badge: 'text-red-600 bg-red-100' }
  };

  const config = riskConfig[risk];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-green-50 to-blue-50 pt-24 pb-20 px-4">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-10 right-10 w-72 h-72 bg-green-300 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-float"></div>
      </div>

      <div className="relative max-w-4xl mx-auto">
        <Link to="/assess" className="inline-flex items-center text-gray-600 hover:text-green-600 mb-8 group">
          <ArrowLeft className="h-5 w-5 mr-2 group-hover:-translate-x-1 transition-transform" />
          Back to Assessment
        </Link>

        <div className="text-center mb-12">
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-4">
            Credit Risk: <span className={`bg-gradient-to-r ${ config.color} bg-clip-text text-transparent`}>{risk}</span>
          </h1>
          <div className={`inline-flex items-center px-6 py-2 rounded-full ${config.badge} font-semibold text-sm`}>
            <config.icon className="h-5 w-5 mr-2" />
            {risk} Risk
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          <div className="bg-white/80 backdrop-blur-md rounded-2xl p-6 text-center shadow-lg">
            <Award className="h-10 w-10 mx-auto mb-3 text-yellow-600" />
            <div className="text-3xl font-bold text-gray-900">{score || 'N/A'}</div>
            <div className="text-sm text-gray-600">Credit Score</div>
          </div>
          <div className="bg-white/80 backdrop-blur-md rounded-2xl p-6 text-center shadow-lg">
            <TrendingUp className="h-10 w-10 mx-auto mb-3 text-green-600" />
            <div className="text-3xl font-bold text-gray-900">{(probability * 100).toFixed(1)}%</div>
            <div className="text-sm text-gray-600">Default Probability</div>
          </div>
          <div className="bg-white/80 backdrop-blur-md rounded-2xl p-6 text-center shadow-lg">
            <DollarSign className="h-10 w-10 mx-auto mb-3 text-blue-600" />
            <div className="text-3xl font-bold text-gray-900">₹{(formData.monthly_revenue * 3).toLocaleString()}</div>
            <div className="text-sm text-gray-600">Est. Loan Eligibility</div>
          </div>
        </div>

        <div className="bg-white/70 backdrop-blur-sm rounded-3xl p-8 shadow-xl">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Input Summary</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
           
            {[
              ['Revenue', `₹${formData.revenue}`],
              ['Electricity', `₹${formData.electricity}`],
              ['UPI Volume', `${formData.upi_txn}`],
              ['Digital Reciepts', `₹${formData.receipts}`],
              ['GST', formData.gst],
              ['Shop Age', `${formData.age} years`],
              ['Mobile - Topup', `${formData.topups}`]
            ].map(([label, value]) => (
              <div key={label} className="flex justify-between py-2 border-b border-gray-100">
                <span className="text-gray-600">{label}:</span>
                <span className="font-semibold text-gray-900">{value}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-12 text-center">
          <Link
            to="/assess"
            className="inline-flex items-center bg-gradient-to-r from-blue-600 to-green-600 hover:from-blue-700 hover:to-green-700 text-white font-bold py-4 px-8 rounded-xl shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300"
          >
            <Shield className="h-6 w-6 mr-2" />
            Assess Another Business
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Result;