import { Metadata } from 'next'

// In a real app, this would be dynamic based on the post ID
export const metadata: Metadata = {
  title: '10 Essential Questions to Ask When Buying a Used Car | SF Legacy Autos Blog',
  description: 'Make sure you know what to ask before making your next vehicle purchase. Our comprehensive guide covers everything from vehicle history to financing options.',
  openGraph: {
    title: '10 Essential Questions to Ask When Buying a Used Car | SF Legacy Autos Blog',
    description: 'Make sure you know what to ask before making your next vehicle purchase. Our comprehensive guide covers everything from vehicle history to financing options.',
    type: 'article',
  },
}

export default function BlogPostLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
