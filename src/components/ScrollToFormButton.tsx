'use client'

export default function ScrollToFormButton() {
  const handleScrollToForm = () => {
    document.getElementById('valuation-form')?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <button 
      onClick={handleScrollToForm}
      className="bg-accent text-gray-900 px-8 py-3 rounded-lg font-medium hover:bg-accent/90 transition-colors"
    >
      Start My Quote
    </button>
  )
}
