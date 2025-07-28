import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'About Us | SF Legacy Autos - Your Trusted Car Dealer',
  description: 'Learn about SF Legacy Autos - a family-owned dealership serving San Francisco since 2005. Meet our team and discover our commitment to quality and service.',
  openGraph: {
    title: 'About Us | SF Legacy Autos - Your Trusted Car Dealer',
    description: 'Learn about SF Legacy Autos - a family-owned dealership serving San Francisco since 2005. Meet our team and discover our commitment to quality and service.',
    type: 'website',
  },
}

export default function AboutLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
