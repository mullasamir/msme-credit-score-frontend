
import React from 'react'
import { Cpu, Shield, Clock, Zap, Users, BarChart3 } from 'lucide-react'

const Features = () => {
  const features = [
    {
      icon: Cpu,
      title: 'Advanced CNN Technology',
      description: 'Powered by state-of-the-art Convolutional Neural Networks trained on thousands of retinal images.'
    },
    {
      icon: Shield,
      title: 'High Accuracy',
      description: 'Achieves 98% accuracy in detecting diabetic retinopathy across all severity levels.'
    },
    {
      icon: Clock,
      title: 'Rapid Analysis',
      description: 'Get results in seconds, enabling quick screening and early intervention.'
    },
    {
      icon: Zap,
      title: 'Real-time Processing',
      description: 'Instant image processing and analysis with our optimized deep learning models.'
    },
    {
      icon: Users,
      title: 'Accessible Screening',
      description: 'Make diabetic retinopathy screening available to wider populations.'
    },
    {
      icon: BarChart3,
      title: 'Detailed Reports',
      description: 'Comprehensive analysis with confidence scores and recommendations.'
    }
  ]

  return (
    <section id="features" className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Why Choose Our Solution
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Leveraging cutting-edge AI technology to revolutionize diabetic retinopathy screening
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group p-6 bg-gradient-to-br from-blue-50 to-white rounded-xl border border-blue-100 hover:border-primary-300 transition-all duration-300 hover:shadow-lg"
            >
              <div className="bg-primary-600 w-12 h-12 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <feature.icon className="h-6 w-6 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                {feature.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Features