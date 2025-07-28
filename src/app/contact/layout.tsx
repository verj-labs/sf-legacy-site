import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Contact Us | SF Legacy Autos - Visit Our Dealership',
  description: 'Contact SF Legacy Autos for questions about our inventory, financing, or services. Visit us on Auto Row in San Francisco or call (555) 123-4567.',
  openGraph: {
    title: 'Contact Us | SF Legacy Autos - Visit Our Dealership',
    description: 'Contact SF Legacy Autos for questions about our inventory, financing, or services. Visit us on Auto Row in San Francisco or call (555) 123-4567.',
    type: 'website',
  },
}

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
