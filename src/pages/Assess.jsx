// src/pages/Assess.jsx
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { 
  DollarSign, Zap, TrendingUp, Shield, 
  ArrowRight, Loader2, AlertCircle, 
  IndianRupee
} from 'lucide-react';

const Assess = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  
  const [formData, setFormData] = useState({
    revenue: '',
    electricity: '',
    upi_txn: '',
    receipts: '',
    gst: 'no',
    age: '',
    topups: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    try {
      const response = await fetch('https://msme-credit-score-backend.onrender.com/api/predict', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          revenue: parseFloat(formData.revenue),
          electricity: parseFloat(formData.electricity),
          upi_txn: parseFloat(formData.upi_txn),
          receipts: parseFloat(formData.receipts),
          gst: formData.gst,
          age: parseFloat(formData.age),
          topups: parseFloat(formData.topups)
        })
      });

      if (!response.ok) throw new Error('API Error');

      const result = await response.json();
      console.log(response)
      navigate('/result', { 
        state: { 
          risk: result.risk_level,
          probability: result.default_probability,
          score: result.credit_score,
          formData 
        } 
      });
    } catch (err) {
      setError('Failed to assess. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-green-50 pt-24 pb-20 px-4">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-10 left-10 w-72 h-72 bg-blue-300 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-float"></div>
        <div className="absolute top-40 right-10 w-72 h-72 bg-green-300 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-float" style={{animationDelay: '2s'}}></div>
      </div>

      <div className="relative max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
            Assess MSME Credit Risk
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Enter business data. Get instant AI-powered credit score.
          </p>
        </div>

        <div className="bg-white/80 backdrop-blur-md rounded-3xl p-8 lg:p-12 shadow-xl">
          <form onSubmit={handleSubmit} className="space-y-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

              {/* Monthly Revenue */}
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  <IndianRupee className="inline h-4 w-4 mr-1 text-green-600" />
                  Monthly Revenue (₹)
                </label>
                <input type="number" name="revenue" value={formData.revenue} onChange={handleChange} required placeholder="e.g. 100000" className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:border-green-500 focus:ring-2 focus:ring-green-200 transition-all" />
              </div>

              {/* Electricity Bill */}
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  <Zap className="inline h-4 w-4 mr-1 text-yellow-600" />
                  Electricity Bill (₹)
                </label>
                <input type="number" name="electricity" value={formData.electricity} onChange={handleChange} required placeholder="e.g. 500" className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:border-green-500 focus:ring-2 focus:ring-green-200 transition-all" />
              </div>

              {/* UPI Transactions (count) */}
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  <TrendingUp className="inline h-4 w-4 mr-1 text-blue-600" />
                  UPI Transactions / month
                </label>
                <input type="number" name="upi_txn" value={formData.upi_txn} onChange={handleChange} required placeholder="e.g. 15" className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:border-green-500 focus:ring-2 focus:ring-green-200 transition-all" />
              </div>

              {/* Digital Receipts */}
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Digital Receipts / month
                </label>
                <input type="number" name="receipts" value={formData.receipts} onChange={handleChange} required placeholder="e.g. 5" className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:border-green-500 focus:ring-2 focus:ring-green-200 transition-all" />
              </div>

              {/* GST */}
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  <Shield className="inline h-4 w-4 mr-1 text-purple-600" />
                  GST Filed?
                </label>
                <select name="gst" value={formData.gst} onChange={handleChange} className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:border-green-500 focus:ring-2 focus:ring-green-200 transition-all">
                  <option value="no">No</option>
                  <option value="yes">Yes</option>
                </select>
              </div>

              {/* Shop Age (months) */}
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Shop Age (months)
                </label>
                <input type="number" name="age" value={formData.age} onChange={handleChange} required placeholder="e.g. 22" className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:border-green-500 focus:ring-2 focus:ring-green-200 transition-all" />
              </div>

              {/* Mobile Top-ups */}
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Mobile Top-ups / month
                </label>
                <input type="number" name="topups" value={formData.topups} onChange={handleChange} required placeholder="e.g. 3" className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:border-green-500 focus:ring-2 focus:ring-green-200 transition-all" />
              </div>
            </div>

            {error && (
              <div className="flex items-center space-x-2 text-red-600 bg-red-50 p-4 rounded-xl">
                <AlertCircle className="h-5 w-5" />
                <span>{error}</span>
              </div>
            )}

            <button
              type="submit"
              disabled={loading}
              className="w-full bg-gradient-to-r from-blue-600 to-green-600 hover:from-blue-700 hover:to-green-700 text-white font-bold py-4 px-8 rounded-xl flex items-center justify-center space-x-3 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl disabled:opacity-70"
            >
              {loading ? (
                <> <Loader2 className="h-6 w-6 animate-spin" /> <span>Analyzing...</span> </>
              ) : (
                <> <Zap className="h-6 w-6" /> <span>Assess Credit Risk</span> <ArrowRight className="h-5 w-5" /> </>
              )}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Assess;