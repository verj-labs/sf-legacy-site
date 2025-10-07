import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Vehicle Details | SF Legacy Motors',
  description: 'Detailed information about our quality pre-owned vehicles',
  openGraph: {
    title: 'Vehicle Details | SF Legacy Motors',
    description: 'Detailed information about our quality pre-owned vehicles',
    type: 'website',
  },
}

export default function VehicleLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
