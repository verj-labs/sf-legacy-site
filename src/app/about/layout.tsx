import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'About Us | SF Legacy Motors - Your Trusted Car Dealer',
  description: 'Learn about SF Legacy Motors - a family-owned dealership serving the Greater Toronto Area since 2023. Meet our team and discover our commitment to quality and service.',
  openGraph: {
    title: 'About Us | SF Legacy Motors - Your Trusted Car Dealer',
    description: 'Learn about SF Legacy Motors - a family-owned dealership serving the Greater Toronto Area since 2023. Meet our team and discover our commitment to quality and service.',
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
