import React from 'react'
import { CheckCircle, XCircle, AlertTriangle, Info } from 'lucide-react'

const ResultsSection = ({ results }) => {
  if (!results) return null

  const getSeverityInfo = (severity) => {
    const levels = {
      0: { label: 'No DR', color: 'text-green-600', bg: 'bg-green-50', icon: CheckCircle },
      1: { label: 'Mild', color: 'text-blue-600', bg: 'bg-blue-50', icon: Info },
      2: { label: 'Moderate', color: 'text-yellow-600', bg: 'bg-yellow-50', icon: AlertTriangle },
      3: { label: 'Severe', color: 'text-orange-600', bg: 'bg-orange-50', icon: AlertTriangle },
      4: { label: 'Proliferative', color: 'text-red-600', bg: 'bg-red-50', icon: XCircle },
    }
    return levels[severity] || levels[0]
  }

  const severityInfo = getSeverityInfo(results.severity)

  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50">
      <div className="max-w-4xl mx-auto">
        <div className="bg-white rounded-2xl shadow-lg p-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            Analysis Results
          </h2>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Results Overview */}
            <div className="space-y-6">
              <div className={`${severityInfo.bg} p-6 rounded-xl border-l-4 ${severityInfo.color.replace('text', 'border')}`}>
                <div className="flex items-center space-x-3">
                  {React.createElement(severityInfo.icon, { 
                    className: `h-8 w-8 ${severityInfo.color}` 
                  })}
                  <div>
                    <h3 className="text-xl font-bold text-gray-900">
                      {severityInfo.label}
                    </h3>
                    <p className="text-gray-600 mt-1">
                      Diabetic Retinopathy Detection
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-blue-50 p-6 rounded-xl">
                <h4 className="font-semibold text-gray-900 mb-3">Confidence Score</h4>
                <div className="w-full bg-gray-200 rounded-full h-3">
                  <div 
                    className="bg-primary-600 h-3 rounded-full transition-all duration-500"
                    style={{ width: `${results.confidence * 100}%` }}
                  ></div>
                </div>
                <p className="text-gray-700 mt-2 text-sm">
                  {(results.confidence * 100).toFixed(1)}% confidence level
                </p>
              </div>
            </div>

            {/* Recommendations */}
            <div className="bg-gray-50 p-6 rounded-xl">
              <h4 className="font-semibold text-gray-900 mb-4">Recommendations</h4>
              <ul className="space-y-3">
                {results.severity === 0 && (
                  <>
                    <li className="flex items-start space-x-2">
                      <CheckCircle className="h-5 w-5 text-green-500 mt-0.5" />
                      <span className="text-gray-700">No signs of diabetic retinopathy detected</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <CheckCircle className="h-5 w-5 text-green-500 mt-0.5" />
                      <span className="text-gray-700">Continue regular annual eye screenings</span>
                    </li>
                  </>
                )}
                {results.severity >= 1 && results.severity <= 2 && (
                  <>
                    <li className="flex items-start space-x-2">
                      <AlertTriangle className="h-5 w-5 text-yellow-500 mt-0.5" />
                      <span className="text-gray-700">Schedule follow-up with ophthalmologist</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <AlertTriangle className="h-5 w-5 text-yellow-500 mt-0.5" />
                      <span className="text-gray-700">Monitor blood sugar levels closely</span>
                    </li>
                  </>
                )}
                {results.severity >= 3 && (
                  <>
                    <li className="flex items-start space-x-2">
                      <XCircle className="h-5 w-5 text-red-500 mt-0.5" />
                      <span className="text-gray-700">Immediate consultation with specialist required</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <XCircle className="h-5 w-5 text-red-500 mt-0.5" />
                      <span className="text-gray-700">Urgent medical attention recommended</span>
                    </li>
                  </>
                )}
              </ul>
            </div>
          </div>

          {/* Important Notice */}
          <div className="mt-8 p-4 bg-yellow-50 border border-yellow-200 rounded-lg">
            <div className="flex items-start space-x-3">
              <AlertTriangle className="h-5 w-5 text-yellow-600 mt-0.5 flex-shrink-0" />
              <p className="text-sm text-yellow-800">
                <strong>Important:</strong> This AI analysis is for screening purposes only. 
                Always consult with a qualified healthcare professional for definitive diagnosis 
                and treatment recommendations.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ResultsSection