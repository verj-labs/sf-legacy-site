import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Contact Us | SF Legacy Motors - Visit Our Dealership',
  description: 'Contact SF Legacy Motors for questions about our inventory, financing, or services. Visit us on Auto Row in the Greater Toronto Area or call (905) 749-4061.',
  openGraph: {
    title: 'Contact Us | SF Legacy Motors - Visit Our Dealership',
    description: 'Contact SF Legacy Motors for questions about our inventory, financing, or services. Visit us on Auto Row in the Greater Toronto Area or call (905) 749-4061.',
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
