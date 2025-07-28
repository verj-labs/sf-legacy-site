import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Trade-In Your Vehicle | SF Legacy Autos - Get Instant Quote',
  description: 'Get an instant trade-in quote for your current vehicle. We accept all makes and models and offer competitive trade-in values.',
  openGraph: {
    title: 'Trade-In Your Vehicle | SF Legacy Autos - Get Instant Quote',
    description: 'Get an instant trade-in quote for your current vehicle. We accept all makes and models and offer competitive trade-in values.',
    type: 'website',
  },
}

export default function TradeInLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
