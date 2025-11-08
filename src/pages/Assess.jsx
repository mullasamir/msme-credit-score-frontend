import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { 
  Upload, DollarSign, Zap, Shield, TrendingUp, 
  ArrowRight, Loader2, AlertCircle, CheckCircle 
} from 'lucide-react';

const Assess = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [formData, setFormData] = useState({
    monthly_revenue: '',
    electricity_bill: '',
    upi_volume: '',
    gst_registered: 'No',
    business_age: '',
    outstanding_loans: ''
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
      const response = await fetch('http://127.0.0.1:5000/api/predict', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          monthly_revenue: parseFloat(formData.monthly_revenue),
          electricity_bill: parseFloat(formData.electricity_bill),
          upi_volume: parseFloat(formData.upi_volume),
          digital_rec: parseFloat(formData.digital_rec),
          gst_registered: formData.gst_registered === 'Yes' ? 1 : 0,
          business_age: parseFloat(formData.business_age),
          outstanding_loans: parseFloat(formData.outstanding_loans)
        })
      });

      if (!response.ok) throw new Error('API Error');

      const result = await response.json();
      
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
      {/* Background Orbs */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-10 left-10 w-72 h-72 bg-blue-300 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-float"></div>
        <div className="absolute top-40 right-10 w-72 h-72 bg-green-300 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-float" style={{animationDelay: '2s'}}></div>
      </div>

      <div className="relative max-w-4xl mx-auto">
        <div className="text-center mb-16 animate-fadeInUp">
          <div className="inline-flex items-center px-6 py-3 rounded-full bg-white/80 backdrop-blur-md border border-gray-200 shadow-sm mb-8 animate-pulse">
            <Zap className="h-5 w-5 text-green-600 mr-2" />
            <span className="text-sm font-semibold bg-gradient-to-r from-blue-600 to-green-600 bg-clip-text text-transparent">
              AI Credit Scoring Engine
            </span>
          </div>

          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
            Assess MSME Credit Risk
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Enter business data. Get instant AI-powered credit score using alternative signals.
          </p>
        </div>

        <div className="card card-hover p-8 lg:p-12 shadow-xl">
          <form onSubmit={handleSubmit} className="space-y-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Monthly Revenue */}
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  <DollarSign className="inline h-4 w-4 mr-1 text-green-600" />
                  Monthly Revenue (₹)
                </label>
                <input
                  type="number"
                  name="monthly_revenue"
                  value={formData.monthly_revenue}
                  onChange={handleChange}
                  required
                  placeholder="e.g. 45000"
                  className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:border-green-500 focus:ring-2 focus:ring-green-200 transition-all duration-300"
                />
              </div>

              {/* Electricity Bill */}
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  <Zap className="inline h-4 w-4 mr-1 text-yellow-600" />
                  Avg. Monthly Electricity Bill (₹)
                </label>
                <input
                  type="number"
                  name="electricity_bill"
                  value={formData.electricity_bill}
                  onChange={handleChange}
                  required
                  placeholder="e.g. 3200"
                  className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:border-green-500 focus:ring-2 focus:ring-green-200 transition-all duration-300"
                />
              </div>

              {/* UPI Volume */}
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  <TrendingUp className="inline h-4 w-4 mr-1 text-blue-600" />
                  Monthly UPI Volume (₹)
                </label>
                <input
                  type="number"
                  name="upi_volume"
                  value={formData.upi_volume}
                  onChange={handleChange}
                  required
                  placeholder="e.g. 60000"
                  className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:border-green-500 focus:ring-2 focus:ring-green-200 transition-all duration-300"
                />
              </div>


              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  <TrendingUp className="inline h-4 w-4 mr-1 text-blue-600" />
                  Digital Reciepts (₹)
                </label>
                <input
                  type="number"
                  name="Digital Reciepts"
                  value={formData.digital_rec}
                  onChange={handleChange}
                  required
                  placeholder="e.g. 60000"
                  className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:border-green-500 focus:ring-2 focus:ring-green-200 transition-all duration-300"
                />
              </div>

              {/* GST Registered */}
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  <Shield className="inline h-4 w-4 mr-1 text-purple-600" />
                  GST Registered?
                </label>
                <select
                  name="gst_registered"
                  value={formData.gst_registered}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:border-green-500 focus:ring-2 focus:ring-green-200 transition-all duration-300"
                >
                  <option value="No">No</option>
                  <option value="Yes">Yes</option>
                </select>
              </div>

              {/* Business Age */}
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Business Age (Years)
                </label>
                <input
                  type="number"
                  name="business_age"
                  value={formData.business_age}
                  onChange={handleChange}
                  required
                  placeholder="e.g. 3"
                  className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:border-green-500 focus:ring-2 focus:ring-green-200 transition-all duration-300"
                />
              </div>

              {/* Outstanding Loans */}
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Outstanding Loans (₹)
                </label>
                <input
                  type="number"
                  name="outstanding_loans"
                  value={formData.outstanding_loans}
                  onChange={handleChange}
                  required
                  placeholder="e.g. 50000"
                  className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:border-green-500 focus:ring-2 focus:ring-green-200 transition-all duration-300"
                />
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
              className="w-full bg-gradient-to-r from-blue-600 to-green-600 hover:from-blue-700 hover:to-green-700 text-white font-bold py-4 px-8 rounded-xl flex items-center justify-center space-x-3 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl disabled:opacity-70 disabled:cursor-not-allowed"
            >
              {loading ? (
                <>
                  <Loader2 className="h-6 w-6 animate-spin" />
                  <span>Analyzing Risk...</span>
                </>
              ) : (
                <>
                  <Zap className="h-6 w-6" />
                  <span>Assess Credit Risk</span>
                  <ArrowRight className="h-5 w-5" />
                </>
              )}
            </button>
          </form>
        </div>

        {/* Info Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
          {[
            { icon: Shield, title: 'Secure & Private', desc: 'Your data is encrypted and never stored.' },
            { icon: Upload, title: 'No Documents', desc: 'Just enter numbers. No paperwork.' },
            { icon: CheckCircle, title: 'Instant Result', desc: 'Get score in under 10 seconds.' }
          ].map((info, i) => (
            <div key={i} className="bg-white/70 backdrop-blur-sm rounded-2xl p-6 text-center hover-lift">
              <info.icon className="h-10 w-10 mx-auto mb-3 text-green-600" />
              <h3 className="font-semibold text-gray-900 mb-1">{info.title}</h3>
              <p className="text-sm text-gray-600">{info.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Assess;