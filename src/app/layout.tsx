import type { Metadata } from "next";
import { Ubuntu, Nunito } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const ubuntu = Ubuntu({
  variable: "--font-ubuntu",
  subsets: ["latin"],
  weight: ["300", "400", "500", "700"],
  display: "swap",
});

const nunito = Nunito({
  variable: "--font-nunito",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL('https://sf-legacy.com'), // Add your actual domain here
  title: "SF Legacy Autos - Quality Used Cars",
  description: "Find your perfect used car at SF Legacy Autos. Quality vehicles, trusted service, and competitive prices.",
  keywords: "used cars, quality vehicles, SF Legacy Autos, car dealership, pre-owned vehicles, automotive",
  authors: [{ name: "SF Legacy Autos" }],
  creator: "SF Legacy Autos",
  publisher: "SF Legacy Autos",
  
  // Favicon configuration
  icons: {
    icon: [
      { url: "/favicon/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/favicon/favicon.ico", sizes: "any" }
    ],
    apple: [
      { url: "/favicon/apple-touch-icon.png", sizes: "180x180", type: "image/png" }
    ],
    other: [
      { rel: "android-chrome-192x192", url: "/favicon/android-chrome-192x192.png" },
      { rel: "android-chrome-512x512", url: "/favicon/android-chrome-512x512.png" }
    ]
  },
  
  // Web app manifest
  manifest: "/favicon/site.webmanifest",
  
  // Open Graph metadata
  openGraph: {
    type: "website",
    locale: "en_CA",
    title: "SF Legacy Autos - Quality Used Cars",
    description: "Find your perfect used car at SF Legacy Autos. Quality vehicles, trusted service, and competitive prices in Canada.",
    siteName: "SF Legacy Autos",
    url: "https://sf-legacy.com",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "SF Legacy Autos - Quality Used Cars"
      }
    ]
  },
  
  // Twitter Card metadata
  twitter: {
    card: "summary_large_image",
    site: "@sflegacyautos",
    creator: "@sflegacyautos",
    title: "SF Legacy Autos - Quality Used Cars",
    description: "Find your perfect used car at SF Legacy Autos. Quality vehicles, trusted service, and competitive prices.",
    images: ["/og-image.png"]
  },
  
  // Additional metadata
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  
  // Verification (add your verification codes if you have them)
  verification: {
    google: undefined, // Add your Google verification code here when available
    yandex: undefined,
    yahoo: undefined,
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${ubuntu.variable} ${nunito.variable} antialiased`}
      >
        <Header />
        <main className="min-h-screen">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
