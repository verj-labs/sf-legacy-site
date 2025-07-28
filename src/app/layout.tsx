import type { Metadata } from "next";
import { Ubuntu, Nunito } from "next/font/google";
import "./globals.css";

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
  title: "SF Legacy Autos - Quality Used Cars",
  description: "Find your perfect used car at SF Legacy Autos. Quality vehicles, trusted service, and competitive prices.",
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
        {children}
      </body>
    </html>
  );
}
