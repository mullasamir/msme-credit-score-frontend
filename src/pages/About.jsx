// import React from 'react';
// import { Cpu, Users, Target, Heart, Award, Globe, Clock, Shield, Sparkles, Zap, Eye, Stethoscope } from 'lucide-react';

// const About = () => {
//   const values = [
//     {
//       icon: Award,
//       title: 'Excellence',
//       description: 'Committed to delivering the highest standards in AI healthcare technology with proven accuracy and reliability.',
//       color: 'from-yellow-400 to-orange-500',
//       bgColor: 'bg-gradient-to-br from-yellow-50 to-orange-50'
//     },
//     {
//       icon: Globe,
//       title: 'Accessibility',
//       description: 'Making advanced healthcare technology available to everyone, everywhere, breaking down geographical barriers.',
//       color: 'from-green-400 to-teal-500',
//       bgColor: 'bg-gradient-to-br from-green-50 to-teal-50'
//     },
//     {
//       icon: Shield,
//       title: 'Trust',
//       description: 'Building reliable, secure, and transparent AI systems that healthcare professionals can depend on daily.',
//       color: 'from-blue-400 to-cyan-500',
//       bgColor: 'bg-gradient-to-br from-blue-50 to-cyan-50'
//     },
//     {
//       icon: Heart,
//       title: 'Care',
//       description: 'Putting patient well-being and healthcare outcomes at the forefront of every innovation we develop.',
//       color: 'from-pink-400 to-rose-500',
//       bgColor: 'bg-gradient-to-br from-pink-50 to-rose-50'
//     }
//   ];

//   const stats = [
//     { number: '98.2%', label: 'Accuracy Rate', icon: Award, color: 'text-green-600' },
//     { number: '50K+', label: 'Scans Analyzed', icon: Eye, color: 'text-blue-600' },
//     { number: '500+', label: 'Healthcare Partners', icon: Stethoscope, color: 'text-purple-600' },
//     { number: '24/7', label: 'Availability', icon: Clock, color: 'text-orange-600' }
//   ];

//   return (
//     <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50/30 to-indigo-50/30 relative overflow-hidden">
//       {/* Advanced Background Elements */}
//       <div className="absolute inset-0 overflow-hidden">
//         {/* Animated Gradient Orbs */}
//         <div className="absolute top-0 left-0 w-96 h-96 bg-blue-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-float"></div>
//         <div className="absolute top-1/4 right-0 w-80 h-80 bg-purple-200 rounded-full mix-blend-multiply filter blur-3xl opacity-25 animate-float" style={{animationDelay: '2s'}}></div>
//         <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-cyan-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-float" style={{animationDelay: '4s'}}></div>
//         <div className="absolute bottom-1/3 right-1/4 w-64 h-64 bg-indigo-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-float" style={{animationDelay: '1s'}}></div>
        
//         {/* Grid Pattern Overlay */}
//         <div className="absolute inset-0 bg-[linear-gradient(rgba(99,102,241,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(99,102,241,0.1)_1px,transparent_1px)] bg-[size:64px_64px] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_50%,black,transparent)]"></div>
        
//         {/* Animated Dots Pattern */}
//         <div className="absolute inset-0 opacity-30">
//           <div className="absolute top-20 left-10 w-2 h-2 bg-blue-400 rounded-full animate-ping"></div>
//           <div className="absolute top-40 right-20 w-2 h-2 bg-purple-400 rounded-full animate-ping" style={{animationDelay: '1s'}}></div>
//           <div className="absolute bottom-20 left-20 w-2 h-2 bg-cyan-400 rounded-full animate-ping" style={{animationDelay: '2s'}}></div>
//           <div className="absolute bottom-40 right-10 w-2 h-2 bg-indigo-400 rounded-full animate-ping" style={{animationDelay: '3s'}}></div>
//         </div>

//         {/* Floating Elements */}
//         <div className="absolute top-1/4 left-10 animate-float">
//           <div className="w-6 h-6 bg-blue-400/20 rounded-lg rotate-45"></div>
//         </div>
//         <div className="absolute bottom-1/4 right-10 animate-float" style={{animationDelay: '3s'}}>
//           <div className="w-8 h-8 bg-purple-400/20 rounded-full"></div>
//         </div>
//         <div className="absolute top-10 left-1/2 animate-float" style={{animationDelay: '1.5s'}}>
//           <div className="w-4 h-4 bg-cyan-400/30 rounded-lg"></div>
//         </div>
//       </div>

//       {/* Hero Section */}
//       <section className="relative pt-28 pb-20 px-4 sm:px-6 lg:px-8">
//         <div className="max-w-6xl mx-auto text-center">
//           {/* Animated Badge */}
//           <div className="inline-flex items-center px-6 py-3 rounded-2xl bg-white/80 backdrop-blur-md border border-blue-200 shadow-lg mb-8 animate-fadeInUp">
//             <div className="flex items-center space-x-2">
//               <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
//               <Sparkles className="h-4 w-4 text-blue-500" />
//               <span className="text-sm font-semibold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
//                 AI-Powered Healthcare Innovation
//               </span>
//             </div>
//           </div>

//           <h1 className="text-5xl md:text-7xl font-bold text-gray-900 mb-6 leading-tight animate-fadeInUp">
//             About <span className="gradient-text">RetinaScan</span>
//           </h1>
//           <p className="text-xl md:text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed font-light animate-fadeInUp" style={{animationDelay: '0.1s'}}>
//             Pioneering the future of diabetic retinopathy detection through cutting-edge 
//             artificial intelligence and deep learning innovation.
//           </p>

//           {/* Stats Grid */}
//           <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 max-w-4xl mx-auto mt-16">
//             {stats.map((stat, index) => (
//               <div 
//                 key={index} 
//                 className="bg-white/80 backdrop-blur-md rounded-2xl p-6 border border-blue-100 shadow-sm hover-lift animate-fadeInUp"
//                 style={{animationDelay: `${0.2 + index * 0.1}s`}}
//               >
//                 <stat.icon className={`h-8 w-8 mx-auto mb-3 ${stat.color}`} />
//                 <div className="text-2xl font-bold text-gray-900 mb-1">{stat.number}</div>
//                 <div className="text-sm text-gray-600 font-medium">{stat.label}</div>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* Mission Section */}
//       <section className="relative py-20 px-4 sm:px-6 lg:px-8">
//         <div className="max-w-6xl mx-auto">
//           <div className="card p-12 text-center relative overflow-hidden">
//             {/* Background Pattern */}
//             <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-purple-50 opacity-50"></div>
//             <div className="absolute top-0 right-0 w-32 h-32 bg-blue-200 rounded-full -translate-y-16 translate-x-16 opacity-20"></div>
//             <div className="absolute bottom-0 left-0 w-24 h-24 bg-purple-200 rounded-full translate-y-12 -translate-x-12 opacity-20"></div>
            
//             <div className="relative">
//               <div className="flex justify-center mb-8">
//                 <div className="relative">
//                   <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-600 rounded-2xl blur opacity-75 animate-pulse"></div>
//                   <div className="relative bg-white p-4 rounded-2xl shadow-lg border border-blue-100">
//                     <Target className="h-12 w-12 bg-gradient-to-r from-blue-600 to-purple-600 text-black bg-clip-text" />
//                   </div>
//                 </div>
//               </div>
//               <h2 className="text-4xl font-bold text-gray-900 mb-6">Our Mission</h2>
//               <p className="text-xl text-gray-700 leading-relaxed max-w-4xl mx-auto">
//                 To revolutionize diabetic retinopathy screening by making it more <span className="font-semibold text-blue-600">accessible</span>, 
//                 <span className="font-semibold text-purple-600"> accurate</span>, and <span className="font-semibold text-green-600">affordable</span>. 
//                 We combine cutting-edge Convolutional Neural Networks with user-friendly technology to enable 
//                 early detection and prevent vision loss worldwide.
//               </p>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* Values Section */}
//       <section className="relative py-20 px-4 sm:px-6 lg:px-8">
//         <div className="max-w-6xl mx-auto">
//           <div className="text-center mb-16">
//             <div className="inline-flex items-center px-4 py-2 rounded-full bg-white/80 backdrop-blur-md border border-blue-200 mb-4">
//               <Zap className="h-4 w-4 text-blue-500 mr-2" />
//               <span className="text-sm font-semibold text-blue-600">Our Core Principles</span>
//             </div>
//             <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Values</h2>
//             <p className="text-xl text-gray-600 max-w-2xl mx-auto">
//               The guiding principles that drive every innovation and decision we make
//             </p>
//           </div>

//           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
//             {values.map((value, index) => (
//               <div 
//                 key={index} 
//                 className="card card-hover p-8 text-center group relative overflow-hidden animate-fadeInUp"
//                 style={{animationDelay: `${index * 0.1}s`}}
//               >
//                 {/* Background Gradient */}
//                 <div className={`absolute inset-0 ${value.bgColor} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}></div>
                
//                 <div className="relative">
//                   <div className={`w-20 h-20 rounded-3xl bg-gradient-to-r ${value.color} flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
//                     <value.icon className="h-10 w-10 text-white" />
//                   </div>
//                   <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-gray-800 transition-colors duration-300">
//                     {value.title}
//                   </h3>
//                   <p className="text-gray-600 leading-relaxed group-hover:text-gray-700 transition-colors duration-300">
//                     {value.description}
//                   </p>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* Technology Section */}
//       <section className="relative py-20 px-4 sm:px-6 lg:px-8 bg-white/50 backdrop-blur-sm">
//         <div className="max-w-6xl mx-auto">
//           <div className="card p-12 relative overflow-hidden">
//             {/* Background Elements */}
//             <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-blue-100 to-purple-100 rounded-full -translate-y-32 translate-x-32 opacity-50"></div>
//             <div className="absolute bottom-0 left-0 w-48 h-48 bg-gradient-to-br from-green-100 to-cyan-100 rounded-full translate-y-24 -translate-x-24 opacity-50"></div>
            
//             <div className="relative">
//               <div className="flex items-center mb-8">
//                 <div className="relative">
//                   <div className="absolute inset-0 bg-gradient-to-r from-green-500 to-emerald-600 rounded-2xl blur opacity-75"></div>
//                   <div className="relative bg-white p-3 rounded-2xl shadow-lg border border-green-100">
//                     <Cpu className="h-10 w-10 bg-gradient-to-r from-green-600 to-emerald-600 text-blue-500 bg-clip-text" />
//                   </div>
//                 </div>
//                 <h2 className="text-4xl font-bold text-gray-900 ml-6">Advanced Technology</h2>
//               </div>
              
//               <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
//                 <div>
//                   <h3 className="text-2xl font-semibold text-gray-900 mb-4">Deep Learning Architecture</h3>
//                   <p className="text-gray-700 mb-6 leading-relaxed">
//                     Our state-of-the-art Convolutional Neural Networks are trained on thousands of 
//                     retinal images, achieving unprecedented accuracy in diabetic retinopathy detection 
//                     while maintaining speed and efficiency.
//                   </p>
//                   <ul className="space-y-3">
//                     {[
//                       '98.2% Detection Accuracy',
//                       'Real-time Processing (< 30 seconds)',
//                       'Multi-stage Classification System',
//                       'Continuous Learning & Updates'
//                     ].map((item, idx) => (
//                       <li key={idx} className="flex items-center space-x-3 text-gray-700">
//                         <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
//                         <span className="font-medium">{item}</span>
//                       </li>
//                     ))}
//                   </ul>
//                 </div>
                
//                 <div>
//                   <h3 className="text-2xl font-semibold text-gray-900 mb-4">Global Impact</h3>
//                   <p className="text-gray-700 mb-6 leading-relaxed">
//                     We're bridging the gap in healthcare accessibility, bringing advanced 
//                     diagnostic capabilities to underserved communities and remote areas 
//                     where traditional screening methods are unavailable.
//                   </p>
//                   <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-2xl p-6 border border-blue-100">
//                     <div className="flex items-center justify-between mb-4">
//                       <Users className="h-8 w-8 text-blue-600" />
//                       <Clock className="h-8 w-8 text-purple-600" />
//                     </div>
//                     <p className="text-gray-700 font-semibold text-lg">
//                       Helping healthcare professionals serve more patients with greater efficiency and accuracy, 
//                       while reducing the burden on healthcare systems worldwide.
//                     </p>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* Vision Section */}
//       <section className="relative py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-700 text-white overflow-hidden rounded-lg">
//         {/* Background Elements */}
//         <div className="absolute inset-0">
//           <div className="absolute top-0 left-0 w-72 h-72 bg-white/10 rounded-full blur-3xl"></div>
//           <div className="absolute bottom-0 right-0 w-96 h-96 bg-purple-400/20 rounded-full blur-3xl"></div>
//           <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-cyan-400/10 rounded-full blur-3xl"></div>
//         </div>
        
//         <div className="relative max-w-4xl mx-auto text-center">
//           <div className="inline-flex items-center px-4 py-2 rounded-full bg-white/20 backdrop-blur-md border border-white/30 mb-6">
//             <Sparkles className="h-4 w-4 text-white mr-2" />
//             <span className="text-sm font-semibold">Our Vision for Healthcare</span>
//           </div>
          
//           <Heart className="h-16 w-16 mx-auto mb-6 text-white/90 animate-pulse" />
//           <h2 className="text-4xl md:text-5xl font-bold mb-6">
//             A World Without Preventable Vision Loss
//           </h2>
//           <p className="text-xl mb-8 opacity-90 leading-relaxed max-w-3xl mx-auto">
//             We envision a future where no one loses their vision to diabetic retinopathy because of 
//             late detection or lack of access to quality healthcare. Through innovation and collaboration, 
//             we're making this vision a reality—one scan at a time.
//           </p>
//           <div className="flex items-center justify-center space-x-4 text-lg font-semibold opacity-90">
//             <span>Making healthcare smarter</span>
//             <div className="w-2 h-2 bg-white rounded-full animate-ping"></div>
//             <span>More accessible</span>
//             <div className="w-2 h-2 bg-white rounded-full animate-ping" style={{animationDelay: '1s'}}></div>
//             <span>For everyone</span>
//           </div>
//         </div>
//       </section>
//     </div>
//   );
// };

// export default About;

import React from 'react';
import { Cpu, Users, Target, Heart, Award, Globe, Clock, Shield, Sparkles, Zap, DollarSign, Store, TrendingUp } from 'lucide-react';

const About = () => {
  const values = [
    {
      icon: Award,
      title: 'Fairness',
      description: 'Every small business deserves a fair chance at credit, regardless of bank history or location.',
      color: 'from-yellow-400 to-orange-500',
      bgColor: 'bg-gradient-to-br from-yellow-50 to-orange-50'
    },
    {
      icon: Globe,
      title: 'Inclusion',
      description: 'Bringing formal credit to 63 million unbanked MSMEs in rural and semi-urban India.',
      color: 'from-green-400 to-teal-500',
      bgColor: 'bg-gradient-to-br from-green-50 to-teal-50'
    },
    {
      icon: Shield,
      title: 'Trust',
      description: 'Transparent AI scoring that lenders and borrowers can understand and rely on.',
      color: 'from-blue-400 to-cyan-500',
      bgColor: 'bg-gradient-to-br from-blue-50 to-cyan-50'
    },
    {
      icon: Heart,
      title: 'Impact',
      description: 'Empowering kirana stores, salons, and small manufacturers to grow and thrive.',
      color: 'from-pink-400 to-rose-500',
      bgColor: 'bg-gradient-to-br from-pink-50 to-rose-50'
    }
  ];

  const stats = [
    { number: '87.4%', label: 'Prediction Accuracy', icon: Award, color: 'text-green-600' },
    { number: '10K+', label: 'MSMEs Scored', icon: Store, color: 'text-blue-600' },
    { number: '150+', label: 'Lending Partners', icon: Users, color: 'text-purple-600' },
    { number: '10s', label: 'Decision Time', icon: Zap, color: 'text-orange-600' }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50/30 to-indigo-50/30 relative overflow-hidden">
      {/* Advanced Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Animated Gradient Orbs */}
        <div className="absolute top-0 left-0 w-96 h-96 bg-blue-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-float"></div>
        <div className="absolute top-1/4 right-0 w-80 h-80 bg-purple-200 rounded-full mix-blend-multiply filter blur-3xl opacity-25 animate-float" style={{animationDelay: '2s'}}></div>
        <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-cyan-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-float" style={{animationDelay: '4s'}}></div>
        <div className="absolute bottom-1/3 right-1/4 w-64 h-64 bg-indigo-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-float" style={{animationDelay: '1s'}}></div>
        
        {/* Grid Pattern Overlay */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(99,102,241,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(99,102,241,0.1)_1px,transparent_1px)] bg-[size:64px_64px] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_50%,black,transparent)]"></div>
        
        {/* Animated Dots Pattern */}
        <div className="absolute inset-0 opacity-30">
          <div className="absolute top-20 left-10 w-2 h-2 bg-blue-400 rounded-full animate-ping"></div>
          <div className="absolute top-40 right-20 w-2 h-2 bg-purple-400 rounded-full animate-ping" style={{animationDelay: '1s'}}></div>
          <div className="absolute bottom-20 left-20 w-2 h-2 bg-cyan-400 rounded-full animate-ping" style={{animationDelay: '2s'}}></div>
          <div className="absolute bottom-40 right-10 w-2 h-2 bg-indigo-400 rounded-full animate-ping" style={{animationDelay: '3s'}}></div>
        </div>

        {/* Floating Elements */}
        <div className="absolute top-1/4 left-10 animate-float">
          <div className="w-6 h-6 bg-blue-400/20 rounded-lg rotate-45"></div>
        </div>
        <div className="absolute bottom-1/4 right-10 animate-float" style={{animationDelay: '3s'}}>
          <div className="w-8 h-8 bg-purple-400/20 rounded-full"></div>
        </div>
        <div className="absolute top-10 left-1/2 animate-float" style={{animationDelay: '1.5s'}}>
          <div className="w-4 h-4 bg-cyan-400/30 rounded-lg"></div>
        </div>
      </div>

      {/* Hero Section */}
      <section className="relative pt-28 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto text-center">
          {/* Animated Badge */}
          <div className="inline-flex items-center px-6 py-3 rounded-2xl bg-white/80 backdrop-blur-md border border-blue-200 shadow-lg mb-8 animate-fadeInUp">
            <div className="flex items-center space-x-2">
              <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
              <Sparkles className="h-4 w-4 text-blue-500" />
              <span className="text-sm font-semibold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                AI-Powered MSME Lending
              </span>
            </div>
          </div>

          <h1 className="text-5xl md:text-7xl font-bold text-gray-900 mb-6 leading-tight animate-fadeInUp">
            About <span className="gradient-text">AltScore</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed font-light animate-fadeInUp" style={{animationDelay: '0.1s'}}>
            Pioneering alternative credit scoring using AI to unlock loans for 63 million unbanked 
            small businesses in India through everyday data signals.
          </p>

          {/* Stats Grid */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 max-w-4xl mx-auto mt-16">
            {stats.map((stat, index) => (
              <div 
                key={index} 
                className="bg-white/80 backdrop-blur-md rounded-2xl p-6 border border-blue-100 shadow-sm hover-lift animate-fadeInUp"
                style={{animationDelay: `${0.2 + index * 0.1}s`}}
              >
                <stat.icon className={`h-8 w-8 mx-auto mb-3 ${stat.color}`} />
                <div className="text-2xl font-bold text-gray-900 mb-1">{stat.number}</div>
                <div className="text-sm text-gray-600 font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="card p-12 text-center relative overflow-hidden">
            {/* Background Pattern */}
            <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-purple-50 opacity-50"></div>
            <div className="absolute top-0 right-0 w-32 h-32 bg-blue-200 rounded-full -translate-y-16 translate-x-16 opacity-20"></div>
            <div className="absolute bottom-0 left-0 w-24 h-24 bg-purple-200 rounded-full translate-y-12 -translate-x-12 opacity-20"></div>
            
            <div className="relative">
              <div className="flex justify-center mb-8">
                <div className="relative">
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-600 rounded-2xl blur opacity-75 animate-pulse"></div>
                  <div className="relative bg-white p-4 rounded-2xl shadow-lg border border-blue-100">
                    <Target className="h-12 w-12 bg-gradient-to-r from-blue-600 to-purple-600 text-black bg-clip-text" />
                  </div>
                </div>
              </div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">Our Mission</h2>
              <p className="text-xl text-gray-700 leading-relaxed max-w-4xl mx-auto">
                To democratize credit for <span className="font-semibold text-blue-600">every MSME</span>, 
                using <span className="font-semibold text-purple-600">AI-powered alternative data</span> to 
                bridge the <span className="font-semibold text-green-600">₹45 lakh crore credit gap</span>. 
                We turn electricity bills, UPI transactions, and digital receipts into trusted credit signals.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-white/80 backdrop-blur-md border border-blue-200 mb-4">
              <Zap className="h-4 w-4 text-blue-500 mr-2" />
              <span className="text-sm font-semibold text-blue-600">Our Core Principles</span>
            </div>
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Values</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              The guiding principles that drive every innovation and decision we make
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div 
                key={index} 
                className="card card-hover p-8 text-center group relative overflow-hidden animate-fadeInUp"
                style={{animationDelay: `${index * 0.1}s`}}
              >
                {/* Background Gradient */}
                <div className={`absolute inset-0 ${value.bgColor} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}></div>
                
                <div className="relative">
                  <div className={`w-20 h-20 rounded-3xl bg-gradient-to-r ${value.color} flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                    <value.icon className="h-10 w-10 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-gray-800 transition-colors duration-300">
                    {value.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed group-hover:text-gray-700 transition-colors duration-300">
                    {value.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Technology Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8 bg-white/50 backdrop-blur-sm">
        <div className="max-w-6xl mx-auto">
          <div className="card p-12 relative overflow-hidden">
            {/* Background Elements */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-blue-100 to-purple-100 rounded-full -translate-y-32 translate-x-32 opacity-50"></div>
            <div className="absolute bottom-0 left-0 w-48 h-48 bg-gradient-to-br from-green-100 to-cyan-100 rounded-full translate-y-24 -translate-x-24 opacity-50"></div>
            
            <div className="relative">
              <div className="flex items-center mb-8">
                <div className="relative">
                  <div className="absolute inset-0 bg-gradient-to-r from-green-500 to-emerald-600 rounded-2xl blur opacity-75"></div>
                  <div className="relative bg-white p-3 rounded-2xl shadow-lg border border-green-100">
                    <Cpu className="h-10 w-10 bg-gradient-to-r from-green-600 to-emerald-600 text-black bg-clip-text" />
                  </div>
                </div>
                <h2 className="text-4xl font-bold text-gray-900 ml-6">Advanced Technology</h2>
              </div>
              
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                <div>
                  <h3 className="text-2xl font-semibold text-gray-900 mb-4">Alternative Data AI</h3>
                  <p className="text-gray-700 mb-6 leading-relaxed">
                    Our machine learning models analyze non-traditional signals — UPI transactions, 
                    electricity bills, GST filings, and mobile usage — to predict repayment behavior 
                    with 87.4% accuracy, outperforming traditional scoring for unbanked MSMEs.
                  </p>
                  <ul className="space-y-3">
                    {[
                      '87.4% Default Prediction Accuracy',
                      'Real-time Scoring (< 10 seconds)',
                      'Gradient Boosting + Feature Engineering',
                      'Continuous Model Retraining'
                    ].map((item, idx) => (
                      <li key={idx} className="flex items-center space-x-3 text-gray-700">
                        <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                        <span className="font-medium">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div>
                  <h3 className="text-2xl font-semibold text-gray-900 mb-4">Rural India Impact</h3>
                  <p className="text-gray-700 mb-6 leading-relaxed">
                    We're bringing formal credit to kirana stores, tailors, and small manufacturers 
                    in Tier 3+ towns and villages — where 80% of MSMEs have no banking history.
                  </p>
                  <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-2xl p-6 border border-blue-100">
                    <div className="flex items-center justify-between mb-4">
                      <DollarSign className="h-8 w-8 text-blue-600" />
                      <TrendingUp className="h-8 w-8 text-purple-600" />
                    </div>
                    <p className="text-gray-700 font-semibold text-lg">
                      Helping lenders reduce risk by 35% while approving 3x more loans to 
                      underserved small businesses across India.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Vision Section */}
      <section className="relative py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-700 text-white overflow-hidden rounded-lg">
        {/* Background Elements */}
        <div className="absolute inset-0">
          <div className="absolute top-0 left-0 w-72 h-72 bg-white/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-purple-400/20 rounded-full blur-3xl"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-cyan-400/10 rounded-full blur-3xl"></div>
        </div>
        
        <div className="relative max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-white/20 backdrop-blur-md border border-white/30 mb-6">
            <Sparkles className="h-4 w-4 text-white mr-2" />
            <span className="text-sm font-semibold">Our Vision for Lending</span>
          </div>
          
          <DollarSign className="h-16 w-16 mx-auto mb-6 text-white/90 animate-pulse" />
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            A World Where Every MSME Can Borrow
          </h2>
          <p className="text-xl mb-8 opacity-90 leading-relaxed max-w-3xl mx-auto">
            We envision a future where no small business is denied growth capital due to lack of 
            credit history. Through AI and alternative data, we're making fair, fast, and inclusive 
            lending a reality — one kirana shop at a time.
          </p>
          <div className="flex items-center justify-center space-x-4 text-lg font-semibold opacity-90">
            <span>Making credit fairer</span>
            <div className="w-2 h-2 bg-white rounded-full animate-ping"></div>
            <span>Faster</span>
            <div className="w-2 h-2 bg-white rounded-full animate-ping" style={{animationDelay: '1s'}}></div>
            <span>For everyone</span>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;