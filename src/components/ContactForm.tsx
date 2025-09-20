'use client'

import { useState } from 'react'

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
    preferredContact: 'phone',
    interestedVehicle: ''
  })
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    try {
      const submitData = new FormData()
      submitData.append('name', formData.name)
      submitData.append('email', formData.email)
      submitData.append('phone', formData.phone)
      submitData.append('subject', formData.subject)
      submitData.append('message', formData.message)
      submitData.append('preferredContact', formData.preferredContact)
      submitData.append('interestedVehicle', formData.interestedVehicle)
      submitData.append('_subject', `Contact Form: ${formData.subject}`)

      const response = await fetch(process.env.NEXT_PUBLIC_CONTACT_FORM_URL!, {
        method: 'POST',
        body: submitData,
        headers: {
          'Accept': 'application/json',
        },
      })

      if (response.ok) {
        // Reset form
        setFormData({
          name: '',
          email: '',
          phone: '',
          subject: '',
          message: '',
          preferredContact: 'phone',
          interestedVehicle: ''
        })
        alert('Thank you for your message! We\'ll get back to you within 24 hours.')
      } else {
        throw new Error('Form submission failed')
      }
    } catch (error) {
      console.error('Error submitting form:', error)
      alert('There was an error sending your message. Please try again or call us directly.')
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <div className="bg-surface.raised rounded-xl border border-border.default shadow-sm p-6 sm:p-8">
      <h3 className="text-xl sm:text-2xl font-heading font-bold text-text.primary mb-4 sm:mb-6">
        Send Us a Message
      </h3>
      
      <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
          <div>
            <label className="block text-sm font-medium text-text.primary mb-2">
              Full Name <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              required
              value={formData.name}
              onChange={(e) => handleChange('name', e.target.value)}
              className="w-full px-3 sm:px-4 py-2 sm:py-3 border border-border.default rounded-lg focus:ring-2 focus:ring-brand.primary focus:border-transparent bg-surface.default text-text.primary placeholder-text.muted"
              placeholder="Your full name"
            />
          </div>
          
          <div>
            <label className="block text-sm font-medium text-text.primary mb-2">
              Email Address <span className="text-red-500">*</span>
            </label>
            <input
              type="email"
              required
              value={formData.email}
              onChange={(e) => handleChange('email', e.target.value)}
              className="w-full px-3 sm:px-4 py-2 sm:py-3 border border-border.default rounded-lg focus:ring-2 focus:ring-brand.primary focus:border-transparent bg-surface.default text-text.primary placeholder-text.muted"
              placeholder="your.email@example.com"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
          <div>
            <label className="block text-sm font-medium text-text.primary mb-2">
              Phone Number
            </label>
            <input
              type="tel"
              value={formData.phone}
              onChange={(e) => handleChange('phone', e.target.value)}
              className="w-full px-3 sm:px-4 py-2 sm:py-3 border border-border.default rounded-lg focus:ring-2 focus:ring-brand.primary focus:border-transparent bg-surface.default text-text.primary placeholder-text.muted"
              placeholder="(905) 749-4061"
            />
          </div>
          
          <div>
            <label className="block text-sm font-medium text-text.primary mb-2">
              Preferred Contact Method
            </label>
            <select
              value={formData.preferredContact}
              onChange={(e) => handleChange('preferredContact', e.target.value)}
              className="w-full px-3 sm:px-4 py-2 sm:py-3 border border-border.default rounded-lg focus:ring-2 focus:ring-brand.primary focus:border-transparent bg-surface.default text-text.primary"
            >
              <option value="phone">Phone</option>
              <option value="text">Text Message</option>
            </select>
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium text-text.primary mb-2">
            Subject <span className="text-red-500">*</span>
          </label>
          <select
            required
            value={formData.subject}
            onChange={(e) => handleChange('subject', e.target.value)}
            className="w-full px-3 sm:px-4 py-2 sm:py-3 border border-border.default rounded-lg focus:ring-2 focus:ring-brand.primary focus:border-transparent bg-surface.default text-text.primary"
          >
            <option value="">Select a subject</option>
            <option value="inventory">Inventory Question</option>
            <option value="financing">Financing Information</option>
            <option value="trade-in">Trade-In Inquiry</option>
            <option value="test-drive">Schedule Test Drive</option>
            <option value="general">General Question</option>
          </select>
        </div>

        <div>
          <label className="block text-sm font-medium text-text.primary mb-2">
            Interested Vehicle (Optional)
          </label>
          <input
            type="text"
            value={formData.interestedVehicle}
            onChange={(e) => handleChange('interestedVehicle', e.target.value)}
            className="w-full px-3 sm:px-4 py-2 sm:py-3 border border-border.default rounded-lg focus:ring-2 focus:ring-brand.primary focus:border-transparent bg-surface.default text-text.primary placeholder-text.muted"
            placeholder="e.g., 2022 Toyota Camry or Stock #T24001"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-text.primary mb-2">
            Message <span className="text-red-500">*</span>
          </label>
          <textarea
            required
            rows={5}
            value={formData.message}
            onChange={(e) => handleChange('message', e.target.value)}
            className="w-full px-3 sm:px-4 py-2 sm:py-3 border border-border.default rounded-lg focus:ring-2 focus:ring-brand.primary focus:border-transparent bg-surface.default text-text.primary placeholder-text.muted resize-none sm:resize-y"
            placeholder="Please let us know how we can help you..."
          />
        </div>

        <button
          type="submit"
          disabled={isSubmitting}
          className="btn btn-primary w-full disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {isSubmitting ? 'Sending...' : 'Send Message'}
        </button>

        <p className="text-sm text-text.muted text-center">
          We typically respond to messages within 24 hours during business days.
        </p>
      </form>
    </div>
  )
}
