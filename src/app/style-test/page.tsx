import Header from '@/components/Header'
import Footer from '@/components/Footer'

export default function StyleTest() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <div className="max-w-4xl mx-auto px-4 py-16">
        <h1 className="text-4xl font-heading font-bold text-primary mb-8">
          Style Test Page
        </h1>
        
        <div className="space-y-8">
          {/* Color Test */}
          <div className="bg-white p-8 rounded-lg shadow-sm border border-gray-200">
            <h2 className="text-2xl font-heading font-bold text-text-primary mb-6">
              Color Palette Test
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <div className="text-center">
                <div className="w-20 h-20 bg-primary rounded-lg mb-2 mx-auto"></div>
                <p className="text-sm font-medium">Primary</p>
              </div>
              <div className="text-center">
                <div className="w-20 h-20 bg-accent rounded-lg mb-2 mx-auto"></div>
                <p className="text-sm font-medium">Accent</p>
              </div>
              <div className="text-center">
                <div className="w-20 h-20 bg-secondary rounded-lg mb-2 mx-auto"></div>
                <p className="text-sm font-medium">Secondary</p>
              </div>
              <div className="text-center">
                <div className="w-20 h-20 bg-text-primary rounded-lg mb-2 mx-auto"></div>
                <p className="text-sm font-medium text-white">Text Primary</p>
              </div>
            </div>
          </div>

          {/* Typography Test */}
          <div className="bg-white p-8 rounded-lg shadow-sm border border-gray-200">
            <h2 className="text-2xl font-heading font-bold text-text-primary mb-6">
              Typography Test
            </h2>
            <div className="space-y-4">
              <h1 className="text-4xl font-heading font-bold text-primary">
                Heading 1 - Ubuntu Bold
              </h1>
              <h2 className="text-3xl font-heading font-bold text-text-primary">
                Heading 2 - Ubuntu Bold
              </h2>
              <h3 className="text-2xl font-heading font-bold text-text-primary">
                Heading 3 - Ubuntu Bold
              </h3>
              <p className="text-lg font-body text-text-primary">
                Body text using Nunito font family. This should be readable and comfortable for long-form content.
              </p>
              <p className="text-base font-body text-gray-600">
                Secondary text in gray color for supporting information.
              </p>
            </div>
          </div>

          {/* Button Test */}
          <div className="bg-white p-8 rounded-lg shadow-sm border border-gray-200">
            <h2 className="text-2xl font-heading font-bold text-text-primary mb-6">
              Button Test
            </h2>
            <div className="flex flex-wrap gap-4">
              <button className="bg-primary text-white px-6 py-3 rounded-lg font-medium hover:bg-primary/90 transition-colors">
                Primary Button
              </button>
              <button className="bg-accent text-gray-900 px-6 py-3 rounded-lg font-medium hover:bg-accent/90 transition-colors">
                Accent Button
              </button>
              <button className="bg-white text-primary border-2 border-primary px-6 py-3 rounded-lg font-medium hover:bg-primary/5 transition-colors">
                Outline Button
              </button>
              <button className="bg-gray-100 text-text-primary px-6 py-3 rounded-lg font-medium hover:bg-gray-200 transition-colors">
                Secondary Button
              </button>
            </div>
          </div>

          {/* Spacing Test */}
          <div className="bg-white p-8 rounded-lg shadow-sm border border-gray-200">
            <h2 className="text-2xl font-heading font-bold text-text-primary mb-6">
              Spacing & Layout Test
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="bg-primary/10 p-6 rounded-lg">
                <h3 className="font-heading font-bold text-primary mb-3">Card 1</h3>
                <p className="text-text-primary">Content with proper spacing and responsive layout.</p>
              </div>
              <div className="bg-accent/10 p-6 rounded-lg">
                <h3 className="font-heading font-bold text-accent mb-3">Card 2</h3>
                <p className="text-text-primary">Content with proper spacing and responsive layout.</p>
              </div>
              <div className="bg-gray-100 p-6 rounded-lg">
                <h3 className="font-heading font-bold text-text-primary mb-3">Card 3</h3>
                <p className="text-text-primary">Content with proper spacing and responsive layout.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <Footer />
    </div>
  )
}
