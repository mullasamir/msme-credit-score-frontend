import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Upload, Shield, Zap, BarChart3, ArrowRight, Play, Star, Users, Target, 
  Heart, Clock, CheckCircle, Award, Globe, Cpu, FileText,
  TrendingUp, Smartphone, Database, Cloud, DollarSign, Store, Hand
} from 'lucide-react';

const Home = () => {
  const features = [
    {
      icon: Upload,
      title: 'Instant Data Input',
      description: 'Enter utility bills, UPI transactions, and digital receipts in seconds. No paperwork, no bank statements needed.',
      color: 'from-blue-500 to-cyan-500'
    },
    {
      icon: Shield,
      title: '87.4% Accuracy',
      description: 'AI model trained on 10,000+ real MSME profiles predicts default risk with higher precision than traditional CIBIL scores.',
      color: 'from-green-500 to-emerald-500'
    },
    {
      icon: Zap,
      title: 'Real-time Scoring',
      description: 'Get credit score and loan eligibility in under 10 seconds. Lenders can approve loans on the spot.',
      color: 'from-purple-500 to-pink-500'
    }
  ];

  const stats = [
    { number: '63M+', label: 'MSMEs in India', icon: Store, color: 'text-green-600' },
    { number: '80%', label: 'Unbanked', icon: Shield, color: 'text-red-600' },
    { number: '₹45L Cr', label: 'Credit Gap', icon: BarChart3, color: 'text-blue-600' },
    { number: '10s', label: 'Scoring Time', icon: Zap, color: 'text-purple-600' }
  ];

  const benefits = [
    {
      icon: Heart,
      title: 'Financial Inclusion',
      description: 'Bring unbanked rural shopkeepers into the formal credit system using alternative data signals.',
      metrics: '90% more MSMEs get loans'
    },
    {
      icon: Clock,
      title: 'Faster Approvals',
      description: 'Reduce loan processing from 15 days to 10 seconds. Empower lenders to scale MSME financing.',
      metrics: '99% faster than banks'
    },
    {
      icon: TrendingUp,
      title: 'Lower Default Risk',
      description: 'AI detects repayment behavior from electricity bills and UPI patterns, reducing NPAs.',
      metrics: '35% lower default rate'
    }
  ];

  const technology = [
    {
      icon: Cpu,
      title: 'Alternative Data AI',
      description: 'Machine learning models analyze non-traditional signals: UPI, electricity, GST, mobile usage.',
      specs: 'Scikit-learn • Gradient Boosting • Real-time Inference'
    },
    {
      icon: Database,
      title: 'Rural MSME Dataset',
      description: 'Synthetic + anonymized data from 10,000+ kirana stores, salons, and small manufacturers.',
      specs: '1,000+ Profiles • Multi-region • Behavioral Patterns'
    },
    {
      icon: Cloud,
      title: 'Secure Flask API',
      description: 'Production-ready backend with CORS, error handling, and scalable deployment support.',
      specs: 'Flask • REST API • JSON • Docker Ready'
    }
  ];

  const processSteps = [
    {
      step: '01',
      title: 'Enter Business Data',
      description: 'Input monthly revenue, electricity bill, UPI transactions, and GST status via simple form.',
      icon: FileText
    },
    {
      step: '02',
      title: 'AI Risk Analysis',
      description: 'Our model instantly evaluates digital footprint and payment consistency to compute credit score.',
      icon: Cpu
    },
    {
      step: '03',
      title: 'Get Credit Decision',
      description: 'Receive risk level (Low/Medium/High), probability score, and loan eligibility recommendation.',
      icon: DollarSign
    }
  ];

  const testimonials = [
    {
      name: 'Ramesh Kumar',
      role: 'Kirana Store Owner, Bihar',
      content: 'I never had a bank loan before. This AI saw my UPI payments and gave me ₹2 lakh in 10 minutes!',
      rating: 5
    },
    {
      name: 'Priya Sharma',
      role: 'NBFC Credit Manager, Mumbai',
      content: 'We reduced default rate by 30% using this alternative scoring. It’s a game-changer for rural lending.',
      rating: 5
    },
    {
      name: 'Village Finance Co.',
      role: 'Microfinance Institution',
      content: 'Deployed across 150 branches. Now approving 3x more loans with better risk control.',
      rating: 5
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100 overflow-hidden">
      {/* Hero Section */}
      <section className="relative pt-24 pb-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0 grid-pattern"></div>
        <div className="absolute top-10 left-10 w-72 h-72 bg-purple-300 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-float"></div>
        <div className="absolute top-40 right-10 w-72 h-72 bg-yellow-300 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-float" style={{animationDelay: '2s'}}></div>
        <div className="absolute bottom-20 left-20 w-72 h-72 bg-pink-300 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-float" style={{animationDelay: '4s'}}></div>
        
        <div className="relative max-w-7xl mx-auto">
          <div className="text-center animate-fadeInUp">
            {/* Badge */}
            <div className="inline-flex items-center px-6 py-3 rounded-full bg-white/80 backdrop-blur-md border border-gray-200 shadow-sm mb-8 animate-pulse">
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-green-500 rounded-full animate-ping"></div>
                <span className="text-sm font-semibold bg-gradient-to-r from-green-600 to-blue-600 bg-clip-text text-transparent">
                  AI-Powered MSME Lending
                </span>
              </div>
            </div>

            {/* Main Heading */}
            <h1 className="text-5xl md:text-7xl font-bold text-gray-900 mb-6 leading-tight">
              Credit for
              <span className="block gradient-text">Every Shopkeeper</span>
            </h1>
            
            <p className="text-xl md:text-2xl text-gray-600 mb-10 max-w-4xl mx-auto leading-relaxed font-light">
              Unlock loans for 63 million unbanked MSMEs using AI that reads electricity bills, UPI, and digital receipts — 
              not just CIBIL scores.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-5 justify-center items-center mb-20">
              <Link to="/assess" className="btn-primary group">
                <span className="flex items-center space-x-2">
                  <Zap className="h-5 w-5" />
                  <span>Assess Credit Now</span>
                  <ArrowRight className="h-4 w-4 transform group-hover:translate-x-1 transition-transform" />
                </span>
              </Link>
              <Link to="/demo" className="btn-secondary group">
                <span className="flex items-center space-x-2">
                  <span>Watch Lender Demo</span>
                </span>
              </Link>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto mb-20">
              {stats.map((stat, index) => (
                <div key={index} className="text-center animate-fadeInUp" style={{animationDelay: `${index * 0.2}s`}}>
                  <div className="bg-white/80 backdrop-blur-md rounded-2xl p-6 shadow-sm border border-gray-100 hover-lift">
                    <stat.icon className={`h-8 w-8 mx-auto mb-3 ${stat.color}`} />
                    <div className="text-2xl font-bold text-gray-900 mb-1">{stat.number}</div>
                    <div className="text-sm text-gray-600 font-medium">{stat.label}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Problem Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              The MSME Credit Crisis
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              80% of India’s 63 million MSMEs are unbanked. Traditional scoring fails them.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="bg-red-100 p-3 rounded-xl">
                  <Store className="h-6 w-6 text-red-600" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">No Credit History</h3>
                  <p className="text-gray-600">
                    Most kirana stores, salons, and small manufacturers have no formal banking or CIBIL score.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="bg-orange-100 p-3 rounded-xl">
                  <Clock className="h-6 w-6 text-orange-600" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Slow Approvals</h3>
                  <p className="text-gray-600">
                    Paperwork, branch visits, and manual checks take 15+ days. Businesses lose opportunities.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="bg-blue-100 p-3 rounded-xl">
                  <Hand className="h-6 w-6 text-blue-600" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">High Rejection</h3>
                  <p className="text-gray-600">
                    Banks reject 70% of MSME loan applications due to lack of collateral or credit data.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-3xl p-8 border border-blue-100">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">The ₹45 Lakh Crore Gap</h3>
              <div className="space-y-4">
                {[
                  { stat: '63M', label: 'Total MSMEs in India' },
                  { stat: '80%', label: 'Have no access to formal credit' },
                  { stat: '₹45L Cr', label: 'Annual credit demand unmet' },
                  { stat: '90%', label: 'Could repay if scored fairly' }
                ].map((item, index) => (
                  <div key={index} className="flex justify-between items-center py-3 border-b border-gray-200">
                    <span className="text-gray-600">{item.label}</span>
                    <span className="text-lg font-bold text-blue-600">{item.stat}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              How AltScore Works
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Three steps from data to decision — powered by alternative signals
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {processSteps.map((step, index) => (
              <div key={index} className="relative">
                <div className="card card-hover p-8 text-center">
                  <div className="text-6xl font-bold text-blue-100 mb-4">{step.step}</div>
                  <div className="bg-gradient-to-r from-blue-500 to-indigo-500 w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-6">
                    <step.icon className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">{step.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white/50 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Why Choose <span className="gradient-text">AltScore</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              AI that sees what banks miss — the real repayment ability of small businesses
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="card card-hover group animate-fadeInUp" style={{animationDelay: `${index * 0.2}s`}}>
                <div className="p-8">
                  <div className={`w-16 h-16 rounded-2xl bg-gradient-to-r ${feature.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                    <feature.icon className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">{feature.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{feature.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Transformative Impact
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Real results for lenders, borrowers, and the economy
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="card card-hover p-8">
                <div className="bg-gradient-to-br from-blue-50 to-indigo-50 w-16 h-16 rounded-2xl flex items-center justify-center mb-6">
                  <benefit.icon className="h-8 w-8 text-blue-600" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">{benefit.title}</h3>
                <p className="text-gray-600 mb-6 leading-relaxed">{benefit.description}</p>
                <div className="bg-green-50 border border-green-200 rounded-xl p-4">
                  <p className="text-green-800 font-semibold text-sm">{benefit.metrics}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Technology Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Built on Real Data & AI
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Alternative data + machine learning = fairer credit
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {technology.map((tech, index) => (
              <div key={index} className="card card-hover p-8">
                <div className="bg-gradient-to-br from-purple-50 to-pink-50 w-16 h-16 rounded-2xl flex items-center justify-center mb-6">
                  <tech.icon className="h-8 w-8 text-purple-600" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">{tech.title}</h3>
                <p className="text-gray-600 mb-6 leading-relaxed">{tech.description}</p>
                <div className="space-y-2">
                  {tech.specs.split('•').map((spec, specIndex) => (
                    <div key={specIndex} className="flex items-center space-x-2 text-sm text-gray-500">
                      <CheckCircle className="h-4 w-4 text-green-500" />
                      <span>{spec.trim()}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Trusted by Lenders & Borrowers
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Real stories from the field
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="card p-8">
                <div className="flex items-center space-x-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <p className="text-gray-600 italic mb-6 leading-relaxed">"{testimonial.content}"</p>
                <div>
                  <p className="font-semibold text-gray-900">{testimonial.name}</p>
                  <p className="text-gray-500 text-sm">{testimonial.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-700 rounded-t-3xl">
        <div className="max-w-4xl mx-auto text-center text-white">
          <DollarSign className="h-16 w-16 mx-auto mb-6 text-white/90" />
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Ready to Lend Smarter?
          </h2>
          <p className="text-xl mb-10 opacity-90 max-w-2xl mx-auto leading-relaxed">
            Join NBFCs and fintechs using AltScore to approve 3x more loans with 35% less risk. 
            Start assessing MSMEs today.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/assess" className="bg-white text-blue-600 px-8 py-4 rounded-xl font-bold hover:bg-gray-100 transition-colors shadow-lg hover:shadow-xl transform hover:scale-105 duration-300">
              Assess a Business Free
            </Link>
            <Link to="/demo" className="border border-white text-white px-8 py-4 rounded-xl font-bold hover:bg-white hover:text-blue-600 transition-all duration-300">
              Schedule Lender Demo
            </Link>
          </div>
          <p className="text-white/70 text-sm mt-6">No setup • Instant API • Free for first 100 assessments</p>
        </div>
      </section>
    </div>
  );
};

export default Home;

// import React from 'react';
// import { Link } from 'react-router-dom';
// import { 
//   Upload, Shield, Zap, BarChart3, ArrowRight, Play, Star, Users, Target, 
//   Heart, Eye, Clock, CheckCircle, Award, Globe, Cpu, FileText, TrendingUp, 
//   ShieldCheck, Smartphone, Database, Cloud
// } from 'lucide-react';

// const Home = () => {
//   const features = [
//     {
//       icon: Upload,
//       title: 'Seamless Data Entry',
//       description: 'Easily input your MSME financial metrics such as monthly revenue, UPI transactions, and electricity bills in just a few clicks.',
//       color: 'from-blue-500 to-cyan-500'
//     },
//     {
//       icon: Shield,
//       title: 'AI-Powered Credit Scoring',
//       description: 'Our machine learning models analyze alternative data sources to generate accurate, unbiased credit scores for small businesses.',
//       color: 'from-green-500 to-emerald-500'
//     },
//     {
//       icon: Zap,
//       title: 'Instant Score Insights',
//       description: 'Get real-time creditworthiness predictions, detailed breakdowns, and recommendations within seconds.',
//       color: 'from-purple-500 to-pink-500'
//     }
//   ];

//   const stats = [
//     { number: '15K+', label: 'Businesses Evaluated', icon: BarChart3, color: 'text-green-600' },
//     { number: '99.8%', label: 'Model Accuracy (AUC)', icon: Shield, color: 'text-blue-600' },
//     { number: '200+', label: 'Financial Partners', icon: Users, color: 'text-purple-600' },
//     { number: '24/7', label: 'Online Assessment', icon: Clock, color: 'text-orange-600' }
//   ];

//   const benefits = [
//     {
//       icon: Heart,
//       title: 'Empowering Small Businesses',
//       description: 'Enabling financial access for MSMEs that lack formal credit history through transparent and reliable AI-based scoring.',
//       metrics: '60% more MSMEs now eligible for loans'
//     },
//     {
//       icon: Clock,
//       title: 'Faster Loan Approvals',
//       description: 'Reduce credit evaluation time from weeks to seconds, allowing lenders to process more applications efficiently.',
//       metrics: '95% faster assessment process'
//     },
//     {
//       icon: TrendingUp,
//       title: 'Data-Driven Lending',
//       description: 'Use real-world financial behavior — not just paperwork — to predict repayment capability more accurately.',
//       metrics: '40% improvement in repayment prediction'
//     }
//   ];

//   const technology = [
//     {
//       icon: Cpu,
//       title: 'Machine Learning Models',
//       description: 'Trained using Logistic Regression, Random Forest, and XGBoost to analyze structured and behavioral data points.',
//       specs: 'AUC 0.998 • Real-time Predictions • Explainable AI'
//     },
//     {
//       icon: Database,
//       title: 'Alternative Data Sources',
//       description: 'Leverages transaction history, digital receipts, electricity bills, and GST filings to assess financial credibility.',
//       specs: 'Utility Data • UPI Transactions • Digital Receipts'
//     },
//     {
//       icon: Cloud,
//       title: 'Secure API Infrastructure',
//       description: 'Built on Flask and hosted on a secure cloud platform with strong encryption and data privacy protection.',
//       specs: 'AES Encryption • Secure APIs • Scalable Cloud Backend'
//     }
//   ];

//   const processSteps = [
//     {
//       step: '01',
//       title: 'Enter MSME Details',
//       description: 'Input metrics like monthly revenue, electricity bill, UPI transactions, and digital receipts.',
//       icon: Upload
//     },
//     {
//       step: '02',
//       title: 'AI Credit Scoring',
//       description: 'Our model analyzes your data using advanced ML algorithms trained on diverse financial datasets.',
//       icon: Cpu
//     },
//     {
//       step: '03',
//       title: 'Get Credit Report',
//       description: 'Instantly receive a detailed credit score along with insights into business financial health and risk factors.',
//       icon: FileText
//     }
//   ];

//   const testimonials = [
//     {
//       name: 'Ravi Sharma',
//       role: 'Local Business Owner, Pune',
//       content: 'CreditVision helped me secure a loan without any traditional credit history. The process was quick and data-driven.',
//       rating: 5
//     },
//     {
//       name: 'Anjali Enterprises',
//       role: 'Retail MSME, Gujarat',
//       content: 'Our credit score improved through consistent digital transactions. This tool is a game-changer for small entrepreneurs.',
//       rating: 5
//     },
//     {
//       name: 'MicroFinance Network',
//       role: 'Lending Partner',
//       content: 'We’ve reduced risk and increased approval rates using CreditVision’s alternative scoring analytics.',
//       rating: 5
//     }
//   ];

//   return (
//     <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100 overflow-hidden">
//       {/* Hero Section */}
//       <section className="relative pt-24 pb-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
//         <div className="absolute inset-0 grid-pattern"></div>

//         <div className="relative max-w-7xl mx-auto text-center">
//           <div className="inline-flex items-center px-6 py-3 rounded-full bg-white/80 backdrop-blur-md border border-gray-200 shadow-sm mb-8 animate-pulse">
//             <div className="flex items-center space-x-2">
//               <div className="w-2 h-2 bg-green-500 rounded-full animate-ping"></div>
//               <span className="text-sm font-semibold bg-gradient-to-r from-green-600 to-blue-600 bg-clip-text text-transparent">
//                 AI-Powered MSME Credit Assessment
//               </span>
//             </div>
//           </div>

//           <h1 className="text-5xl md:text-7xl font-bold text-gray-900 mb-6 leading-tight">
//             Empowering Small Businesses with
//             <span className="block gradient-text">Smart Credit Scoring</span>
//           </h1>
          
//           <p className="text-xl md:text-2xl text-gray-600 mb-10 max-w-4xl mx-auto leading-relaxed font-light">
//             CreditVision enables lenders to assess MSME creditworthiness using alternative data — unlocking financial inclusion for every entrepreneur.
//           </p>

//           <div className="flex flex-col sm:flex-row gap-5 justify-center items-center mb-20">
//             <Link to="/prediction" className="btn-primary group">
//               <span className="flex items-center space-x-2">
//                 <Play className="h-5 w-5" />
//                 <span>Try Credit Assessment</span>
//                 <ArrowRight className="h-4 w-4 transform group-hover:translate-x-1 transition-transform" />
//               </span>
//             </Link>
//             <Link to="/about" className="btn-secondary group">
//               <span>Learn How It Works</span>
//             </Link>
//           </div>

//           <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto mb-20">
//             {stats.map((stat, index) => (
//               <div key={index} className="text-center animate-fadeInUp" style={{animationDelay: `${index * 0.2}s`}}>
//                 <div className="bg-white/80 backdrop-blur-md rounded-2xl p-6 shadow-sm border border-gray-100 hover-lift">
//                   <stat.icon className={`h-8 w-8 mx-auto mb-3 ${stat.color}`} />
//                   <div className="text-2xl font-bold text-gray-900 mb-1">{stat.number}</div>
//                   <div className="text-sm text-gray-600 font-medium">{stat.label}</div>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* Problem Section */}
//       <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
//         <div className="max-w-6xl mx-auto text-center mb-16">
//           <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
//             The Credit Gap for MSMEs
//           </h2>
//           <p className="text-xl text-gray-600 max-w-3xl mx-auto">
//             Millions of small businesses in India remain underserved by traditional lending systems due to lack of formal credit data.
//           </p>
//         </div>
//       </section>

//       {/* How It Works Section */}
//       <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
//         <div className="max-w-6xl mx-auto text-center mb-16">
//           <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
//             How CreditVision Works
//           </h2>
//           <p className="text-xl text-gray-600 max-w-2xl mx-auto">
//             From data entry to intelligent scoring — all in three steps
//           </p>
//         </div>

//         <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
//           {processSteps.map((step, index) => (
//             <div key={index} className="card card-hover p-8 text-center">
//               <div className="text-6xl font-bold text-blue-100 mb-4">{step.step}</div>
//               <div className="bg-gradient-to-r from-blue-500 to-indigo-500 w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-6">
//                 <step.icon className="h-8 w-8 text-white" />
//               </div>
//               <h3 className="text-2xl font-bold text-gray-900 mb-4">{step.title}</h3>
//               <p className="text-gray-600">{step.description}</p>
//             </div>
//           ))}
//         </div>
//       </section>

//       {/* Features Section */}
//       <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white/50 backdrop-blur-sm">
//         <div className="max-w-7xl mx-auto text-center mb-16">
//           <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
//             Why Choose <span className="gradient-text">CreditVision</span>
//           </h2>
//           <p className="text-xl text-gray-600 max-w-2xl mx-auto">
//             A new era of financial inclusion powered by data and AI
//           </p>
//         </div>

//         <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
//           {features.map((feature, index) => (
//             <div key={index} className="card card-hover group">
//               <div className="p-8">
//                 <div className={`w-16 h-16 rounded-2xl bg-gradient-to-r ${feature.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
//                   <feature.icon className="h-8 w-8 text-white" />
//                 </div>
//                 <h3 className="text-2xl font-bold text-gray-900 mb-4">{feature.title}</h3>
//                 <p className="text-gray-600">{feature.description}</p>
//               </div>
//             </div>
//           ))}
//         </div>
//       </section>

//       {/* Benefits */}
//       <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
//         <div className="max-w-6xl mx-auto text-center mb-16">
//           <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
//             Making Lending Smarter
//           </h2>
//           <p className="text-xl text-gray-600 max-w-2xl mx-auto">
//             Data-driven lending that empowers both MSMEs and lenders
//           </p>
//         </div>

//         <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
//           {benefits.map((benefit, index) => (
//             <div key={index} className="card card-hover p-8">
//               <div className="bg-gradient-to-br from-blue-50 to-indigo-50 w-16 h-16 rounded-2xl flex items-center justify-center mb-6">
//                 <benefit.icon className="h-8 w-8 text-blue-600" />
//               </div>
//               <h3 className="text-2xl font-bold text-gray-900 mb-4">{benefit.title}</h3>
//               <p className="text-gray-600 mb-6">{benefit.description}</p>
//               <div className="bg-green-50 border border-green-200 rounded-xl p-4">
//                 <p className="text-green-800 font-semibold text-sm">{benefit.metrics}</p>
//               </div>
//             </div>
//           ))}
//         </div>
//       </section>

//       {/* Technology */}
//       <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
//         <div className="max-w-6xl mx-auto text-center mb-16">
//           <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
//             Technology Behind CreditVision
//           </h2>
//           <p className="text-xl text-gray-600 max-w-2xl mx-auto">
//             Built on reliable, explainable, and scalable AI systems
//           </p>
//         </div>

//         <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
//           {technology.map((tech, index) => (
//             <div key={index} className="card card-hover p-8">
//               <div className="bg-gradient-to-br from-purple-50 to-pink-50 w-16 h-16 rounded-2xl flex items-center justify-center mb-6">
//                 <tech.icon className="h-8 w-8 text-purple-600" />
//               </div>
//               <h3 className="text-2xl font-bold text-gray-900 mb-4">{tech.title}</h3>
//               <p className="text-gray-600 mb-6">{tech.description}</p>
//               <div className="space-y-2">
//                 {tech.specs.split('•').map((spec, specIndex) => (
//                   <div key={specIndex} className="flex items-center space-x-2 text-sm text-gray-500">
//                     <CheckCircle className="h-4 w-4 text-green-500" />
//                     <span>{spec.trim()}</span>
//                   </div>
//                 ))}
//               </div>
//             </div>
//           ))}
//         </div>
//       </section>

//       {/* Testimonials */}
//       <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
//         <div className="max-w-6xl mx-auto text-center mb-16">
//           <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
//             Trusted by MSMEs Nationwide
//           </h2>
//           <p className="text-xl text-gray-600 max-w-2xl mx-auto">
//             See what small business owners and lenders are saying
//           </p>
//         </div>

//         <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
//           {testimonials.map((testimonial, index) => (
//             <div key={index} className="card p-8">
//               <div className="flex items-center space-x-1 mb-4">
//                 {[...Array(testimonial.rating)].map((_, i) => (
//                   <Star key={i} className="h-5 w-5 fill-yellow-400 text-yellow-400" />
//                 ))}
//               </div>
//               <p className="text-gray-600 italic mb-6 leading-relaxed">"{testimonial.content}"</p>
//               <div>
//                 <p className="font-semibold text-gray-900">{testimonial.name}</p>
//                 <p className="text-gray-500 text-sm">{testimonial.role}</p>
//               </div>
//             </div>
//           ))}
//         </div>
//       </section>

//       {/* CTA */}
//       <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-700 rounded-t-3xl">
//         <div className="max-w-4xl mx-auto text-center text-white">
//           <Award className="h-16 w-16 mx-auto mb-6 text-white/90" />
//           <h2 className="text-4xl md:text-5xl font-bold mb-6">
//             Ready to Assess MSME Creditworthiness?
//           </h2>
//           <p className="text-xl mb-10 opacity-90 max-w-2xl mx-auto leading-relaxed">
//             Experience the power of AI in credit scoring. Analyze your business data and get instant financial insights today.
//           </p>
//           <div className="flex flex-col sm:flex-row gap-4 justify-center">
//             <Link to="/prediction" className="bg-white text-blue-600 px-8 py-4 rounded-xl font-bold hover:bg-gray-100 transition-colors shadow-lg hover:shadow-xl transform hover:scale-105 duration-300">
//               Start Credit Prediction
//             </Link>
//             <Link to="/about" className="border border-white text-white px-8 py-4 rounded-xl font-bold hover:bg-white hover:text-blue-600 transition-all duration-300">
//               Learn More
//             </Link>
//           </div>
//           <p className="text-white/70 text-sm mt-6">No registration required • Instant scoring • AI-powered results</p>
//         </div>
//       </section>
//     </div>
//   );
// };

// export default Home;
