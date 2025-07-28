import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Financing | SF Legacy Autos - Auto Loans & Credit Solutions',
  description: 'Get pre-approved for auto financing with competitive rates. Our finance experts help customers with all credit situations find the perfect loan solution.',
  openGraph: {
    title: 'Financing | SF Legacy Autos - Auto Loans & Credit Solutions',
    description: 'Get pre-approved for auto financing with competitive rates. Our finance experts help customers with all credit situations find the perfect loan solution.',
    type: 'website',
  },
}

export default function FinancingLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
