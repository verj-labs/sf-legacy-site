import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Blog | SF Legacy Autos - Car Buying Tips & Auto News',
  description: 'Read our latest articles on car buying tips, maintenance advice, industry news, and more from the experts at SF Legacy Autos.',
  openGraph: {
    title: 'Blog | SF Legacy Autos - Car Buying Tips & Auto News',
    description: 'Read our latest articles on car buying tips, maintenance advice, industry news, and more from the experts at SF Legacy Autos.',
    type: 'website',
  },
}

export default function BlogLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
