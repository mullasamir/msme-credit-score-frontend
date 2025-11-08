const API_BASE_URL = 'http://localhost:8000/api'

export const analyzeRetinalImage = async (imageFile) => {
  const formData = new FormData()
  formData.append('image', imageFile)

  try {
    const response = await fetch(`${API_BASE_URL}/predict`, {
      method: 'POST',
      body: formData,
    })

    if (!response.ok) {
      throw new Error('Analysis failed')
    }

    return await response.json()
  } catch (error) {
    console.error('API Error:', error)
    throw error
  }
}

// Mock data for development
export const getMockResults = () => {
  return {
    severity: Math.floor(Math.random() * 5),
    confidence: (Math.random() * 0.3 + 0.7).toFixed(2),
    timestamp: new Date().toISOString(),
  }
}