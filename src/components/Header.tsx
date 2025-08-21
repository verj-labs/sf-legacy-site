"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();

  const navigation = [
    { name: "Inventory", href: "/inventory" },
    { name: "About", href: "/about" },
    { name: "Financing", href: "/financing" },
    { name: "Trade-In", href: "/trade-in" },
    { name: "Warranty", href: "/warranty" },
    { name: "Contact", href: "/contact" },
  ];

  // Handle scroll for sticky header shrinking
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className="sticky top-0 z-50 bg-white border-b border-border shadow-sm">
      <div className={`transition-all duration-300 flex justify-between items-center px-4 sm:px-6 lg:px-16 ${
        isScrolled ? "h-16" : "h-20"
      }`}>
        {/* Logo - Black logo sits cleanly on white */}
        <div className="flex-shrink-0">
          <Link href="/" className="flex items-center">
            <Image
              src="/logo.png"
              alt="SF Legacy Autos"
              width={isScrolled ? 80 : 100}
              height={isScrolled ? 80 : 100}
              className="transition-all duration-300"
            />
          </Link>
        </div>

        {/* Desktop Navigation - Body M, #1F2937; hover → #2563EB */}
        <div className="flex items-center gap-8">
          <nav className="hidden lg:flex items-center space-x-8">
            {navigation.map((item) => {
              const isActive = pathname === item.href;
              return (
                <Link
                  key={item.name}
                  href={item.href}
                  className={`text-body-m font-body transition-colors duration-fast relative group ${
                    isActive 
                      ? "text-brand font-semibold" 
                      : "text-body hover:text-brand"
                  }`}
                >
                  {item.name}
                  {/* Active underline 2px brand blue */}
                  <span className={`absolute -bottom-1 left-0 h-0.5 bg-brand transition-all duration-fast ${
                    isActive ? "w-full" : "w-0 group-hover:w-full"
                  }`}></span>
                </Link>
              );
            })}
          </nav>

          {/* Phone Number & Test Drive CTA */}
          <div className="hidden md:flex items-center space-x-4">
            <a
              href="tel:+19057494061"
              className="flex items-center text-brand font-semibold text-body-m hover:text-brand-dark transition-colors duration-fast"
            >
              <svg
                className="w-4 h-4 mr-2"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
              </svg>
              (905) 749-4061
            </a>
            <Link href="/book-test-drive" className="btn-primary">
              Test Drive
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="lg:hidden">
            <button
              type="button"
              className="text-body hover:text-brand p-2 transition-colors duration-fast"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              >
              <span className="sr-only">Open main menu</span>
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                {isMenuOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="lg:hidden absolute top-full left-0 right-0 bg-white border-b border-border shadow-lg">
          <div className="px-4 py-3 space-y-1">
            {navigation.map((item) => {
              const isActive = pathname === item.href;
              return (
                <Link
                  key={item.name}
                  href={item.href}
                  className={`block px-3 py-2 font-medium text-body-m transition-colors duration-fast rounded-lg ${
                    isActive 
                      ? "text-brand font-semibold bg-brand/5" 
                      : "text-body hover:text-brand hover:bg-gray-50"
                  }`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </Link>
              );
            })}
            <div className="px-3 py-4 border-t border-border mt-4">
              <a
                href="tel:+19057494061"
                className="flex items-center text-brand font-semibold text-body-m mb-3"
              >
                <svg
                  className="w-4 h-4 mr-2"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                </svg>
                (905) 749-4061
              </a>
              <Link
                href="/book-test-drive"
                className="btn-primary w-full text-center block"
                onClick={() => setIsMenuOpen(false)}
              >
                Test Drive
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
