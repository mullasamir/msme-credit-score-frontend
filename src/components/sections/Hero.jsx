import React from 'react'
import { Shield, Zap, Heart } from 'lucide-react'

const Hero = () => {
  return (
    <section className="pt-20 pb-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto text-center">
        <div className="inline-flex items-center px-4 py-2 rounded-full bg-blue-100 border border-blue-200 mb-8">
          <Zap className="h-4 w-4 text-blue-600 mr-2" />
          <span className="text-sm font-medium text-blue-700">
            AI-Powered Diabetic Retinopathy Detection
          </span>
        </div>

        <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
          Early Detection
          <span className="text-primary-600 block">Saves Vision</span>
        </h1>

        <p className="text-xl text-gray-600 mb-12 max-w-3xl mx-auto leading-relaxed">
          Upload retinal scan images and get instant, accurate diabetic retinopathy 
          detection using advanced CNN technology. Fast, reliable, and accessible to everyone.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto mb-12">
          <div className="text-center p-6">
            <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <Shield className="h-8 w-8 text-green-600" />
            </div>
            <h3 className="font-semibold text-gray-900 mb-2">98% Accuracy</h3>
            <p className="text-gray-600 text-sm">Proven CNN model performance</p>
          </div>

          <div className="text-center p-6">
            <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <Zap className="h-8 w-8 text-purple-600" />
            </div>
            <h3 className="font-semibold text-gray-900 mb-2">Instant Results</h3>
            <p className="text-gray-600 text-sm">Get diagnosis in seconds</p>
          </div>

          <div className="text-center p-6">
            <div className="bg-red-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <Heart className="h-8 w-8 text-red-600" />
            </div>
            <h3 className="font-semibold text-gray-900 mb-2">Easy to Use</h3>
            <p className="text-gray-600 text-sm">Simple upload and analyze</p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero