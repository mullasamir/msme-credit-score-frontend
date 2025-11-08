import React, { useCallback, useState } from 'react'
import { Upload, Image, X, AlertCircle } from 'lucide-react'

const UploadSection = ({ onResults, isLoading, setIsLoading }) => {
  const [dragActive, setDragActive] = useState(false)
  const [selectedImage, setSelectedImage] = useState(null)
  const [error, setError] = useState('')

  const handleDrag = useCallback((e) => {
    e.preventDefault()
    e.stopPropagation()
    if (e.type === "dragenter" || e.type === "dragover") {
      setDragActive(true)
    } else if (e.type === "dragleave") {
      setDragActive(false)
    }
  }, [])

  const handleDrop = useCallback((e) => {
    e.preventDefault()
    e.stopPropagation()
    setDragActive(false)
    
    const files = e.dataTransfer?.files
    if (files && files[0]) {
      handleFile(files[0])
    }
  }, [])

  const handleFileSelect = (e) => {
    const file = e.target.files?.[0]
    if (file) {
      handleFile(file)
    }
  }

  const handleFile = (file) => {
    // Validate file type
    if (!file.type.startsWith('image/')) {
      setError('Please upload an image file')
      return
    }

    // Validate file size (5MB max)
    if (file.size > 5 * 1024 * 1024) {
      setError('Image size should be less than 5MB')
      return
    }

    setError('')
    const reader = new FileReader()
    reader.onload = (e) => {
      setSelectedImage({
        file,
        preview: e.target.result
      })
    }
    reader.readAsDataURL(file)
  }

  const removeImage = () => {
    setSelectedImage(null)
    setError('')
  }

  const analyzeImage = async () => {
    if (!selectedImage) return

    setIsLoading(true)
    setError('')

    try {
      // Simulate API call - replace with your actual endpoint
      const formData = new FormData()
      formData.append('image', selectedImage.file)

      // This is where you'll connect to your CNN backend
      const response = await fetch('http://localhost:8000/api/predict', {
        method: 'POST',
        body: formData,
      })

      if (!response.ok) {
        throw new Error('Analysis failed')
      }

      const results = await response.json()
      onResults(results)
      
    } catch (err) {
      setError('Failed to analyze image. Please try again.')
      console.error('Analysis error:', err)
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <section id="upload" className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Upload Retinal Scan
          </h2>
          <p className="text-gray-600 text-lg">
            Get instant diabetic retinopathy detection using our advanced CNN model
          </p>
        </div>

        <div className="bg-gradient-to-br from-blue-50 to-indigo-100 rounded-2xl p-8 border-2 border-dashed border-blue-200">
          {!selectedImage ? (
            <div
              className={`relative border-2 border-dashed rounded-xl p-12 text-center transition-all ${
                dragActive ? 'border-primary-500 bg-blue-50' : 'border-gray-300'
              }`}
              onDragEnter={handleDrag}
              onDragLeave={handleDrag}
              onDragOver={handleDrag}
              onDrop={handleDrop}
            >
              <input
                type="file"
                id="image-upload"
                className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
                accept="image/*"
                onChange={handleFileSelect}
              />
              
              <div className="space-y-4">
                <div className="bg-white w-20 h-20 rounded-full flex items-center justify-center mx-auto shadow-sm">
                  <Upload className="h-8 w-8 text-gray-400" />
                </div>
                <div>
                  <p className="text-lg font-semibold text-gray-900 mb-2">
                    Drag & drop your retinal scan
                  </p>
                  <p className="text-gray-600 mb-4">
                    or click to browse files
                  </p>
                </div>
                <div className="flex items-center justify-center space-x-2 text-sm text-gray-500">
                  <Image className="h-4 w-4" />
                  <span>Supports: JPG, PNG, JPEG (Max 5MB)</span>
                </div>
              </div>
            </div>
          ) : (
            <div className="text-center">
              <div className="relative inline-block">
                <img
                  src={selectedImage.preview}
                  alt="Preview"
                  className="max-w-full h-64 object-contain rounded-lg shadow-lg"
                />
                <button
                  onClick={removeImage}
                  className="absolute -top-2 -right-2 bg-red-500 text-white p-1 rounded-full hover:bg-red-600 transition-colors"
                >
                  <X className="h-4 w-4" />
                </button>
              </div>
              
              <button
                onClick={analyzeImage}
                disabled={isLoading}
                className="mt-6 bg-primary-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-primary-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors flex items-center mx-auto"
              >
                {isLoading ? (
                  <>
                    <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></div>
                    Analyzing...
                  </>
                ) : (
                  <>
                    <Upload className="h-4 w-4 mr-2" />
                    Analyze Image
                  </>
                )}
              </button>
            </div>
          )}

          {error && (
            <div className="mt-4 flex items-center justify-center space-x-2 text-red-600 bg-red-50 p-3 rounded-lg">
              <AlertCircle className="h-4 w-4" />
              <span className="text-sm">{error}</span>
            </div>
          )}
        </div>

        <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6 text-sm text-gray-600">
          <div className="bg-blue-50 p-4 rounded-lg">
            <h4 className="font-semibold text-gray-900 mb-2">Supported Formats</h4>
            <p>JPG, PNG, JPEG images up to 5MB</p>
          </div>
          <div className="bg-green-50 p-4 rounded-lg">
            <h4 className="font-semibold text-gray-900 mb-2">Image Guidelines</h4>
            <p>Clear, well-lit retinal fundus images work best</p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default UploadSection