"use client";

import Link from "next/link";
import { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function NotFound() {
  const [searchTerm, setSearchTerm] = useState("");

  const quickLinks = [
    { name: "View Our Inventory", href: "/inventory", icon: "🚗" },
    { name: "Get Financing", href: "/financing", icon: "💳" },
    { name: "Trade-In Your Car", href: "/trade-in", icon: "🔄" },
    { name: "Contact Us", href: "/contact", icon: "📞" },
    { name: "About SF Legacy Motors", href: "/about", icon: "🏢" },
    { name: "Read Our Blog", href: "/blog", icon: "📝" },
  ];

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchTerm.trim()) {
      // In a real app, this would redirect to search results
      window.location.href = `/inventory?search=${encodeURIComponent(searchTerm)}`;
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center">
          {/* Car-themed illustration */}
          <div className="mb-8">
            <div className="inline-flex items-center justify-center w-32 h-32 bg-primary/10 rounded-full mb-6">
              <svg
                className="w-16 h-16 text-primary"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={1.5}
                  d="M8.25 18.75a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h6m-9 0H3.375a1.125 1.125 0 01-1.125-1.125V14.25m17.25 4.5a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h1.125A1.125 1.125 0 0021.75 17.25V14.25M8.25 18.75V9a2.25 2.25 0 012.25-2.25h.75c0-.966.784-1.75 1.75-1.75s1.75.784 1.75 1.75h.75a2.25 2.25 0 012.25 2.25v9.75m-16.5 0h16.5"
                />
              </svg>
            </div>

            {/* Fun car-themed illustration */}
            <div className="relative mx-auto w-80 h-40 mb-8">
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="relative">
                  {/* Car body */}
                  <div className="w-48 h-16 bg-primary rounded-lg relative">
                    {/* Windows */}
                    <div className="absolute top-1 left-4 w-8 h-6 bg-blue-100 rounded"></div>
                    <div className="absolute top-1 right-4 w-8 h-6 bg-blue-100 rounded"></div>
                    {/* Wheels */}
                    <div className="absolute -bottom-3 left-2 w-8 h-8 bg-gray-800 rounded-full"></div>
                    <div className="absolute -bottom-3 right-2 w-8 h-8 bg-gray-800 rounded-full"></div>
                    {/* Headlights */}
                    <div className="absolute top-4 -left-1 w-3 h-4 bg-accent rounded-full"></div>
                    <div className="absolute bottom-4 -left-1 w-3 h-4 bg-red-400 rounded-full"></div>
                  </div>

                  {/* Confused mechanic */}
                  <div className="absolute -right-16 top-2 text-4xl">🤷‍♂️</div>

                  {/* Road signs */}
                  <div className="absolute -top-8 -right-20 transform rotate-12">
                    <div className="w-12 h-12 bg-yellow-400 border-2 border-gray-700 flex items-center justify-center text-lg font-bold">
                      ?
                    </div>
                    <div className="w-1 h-8 bg-gray-700 mx-auto"></div>
                  </div>

                  <div className="absolute -top-6 -left-16 transform -rotate-12">
                    <div className="w-12 h-12 bg-red-400 border-2 border-gray-700 flex items-center justify-center text-white text-xs font-bold">
                      404
                    </div>
                    <div className="w-1 h-8 bg-gray-700 mx-auto"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Error Message */}
          <div className="mb-8">
            <h1 className="text-4xl md:text-6xl font-heading font-bold text-gray-900 mb-4">
              Oops! Wrong Turn
            </h1>
            <p className="text-xl text-gray-600 mb-2">
              We can't seem to find the page you're looking for.
            </p>
            <p className="text-gray-500">Don't worry though – we'll help you get back on track!</p>
          </div>

          {/* Search Bar */}
          <div className="mb-12 max-w-md mx-auto">
            <form onSubmit={handleSearch} className="relative">
              <input
                type="text"
                placeholder="Search our inventory..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full px-4 py-3 pl-12 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
              />
              <svg
                className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                />
              </svg>
              <button
                type="submit"
                className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-primary text-white px-4 py-2 rounded-lg hover:bg-primary/90 transition-colors"
              >
                Search
              </button>
            </form>
          </div>

          {/* Quick Links */}
          <div className="mb-12">
            <h2 className="text-2xl font-heading font-bold text-gray-900 mb-6">
              Where would you like to go?
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {quickLinks.map((link, index) => (
                <Link
                  key={index}
                  href={link.href}
                  className="group bg-white border border-gray-200 rounded-lg p-6 hover:border-primary hover:shadow-lg transition-all duration-300"
                >
                  <div className="text-3xl mb-3">{link.icon}</div>
                  <div className="font-medium text-gray-900 group-hover:text-primary transition-colors">
                    {link.name}
                  </div>
                </Link>
              ))}
            </div>
          </div>

          {/* Primary Actions */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Link
              href="/"
              className="bg-primary text-white px-8 py-3 rounded-lg font-medium hover:bg-primary/90 transition-colors"
            >
              🏠 Back to Home
            </Link>
            <Link
              href="/inventory"
              className="bg-accent text-gray-900 px-8 py-3 rounded-lg font-medium hover:bg-accent/90 transition-colors"
            >
              🚗 Browse Cars
            </Link>
            <Link
              href="/contact"
              className="bg-white text-primary border-2 border-primary px-8 py-3 rounded-lg font-medium hover:bg-primary/5 transition-colors"
            >
              📞 Contact Us
            </Link>
          </div>

          {/* Help Section */}
          <div className="bg-white rounded-lg border border-gray-200 shadow-sm p-8 text-left max-w-2xl mx-auto">
            <h3 className="text-xl font-heading font-bold text-gray-900 mb-4 text-center">
              Need Help Finding Something?
            </h3>
            <div className="space-y-4">
              <div className="flex items-start">
                <svg
                  className="w-5 h-5 text-primary mr-3 mt-0.5 flex-shrink-0"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z"
                    clipRule="evenodd"
                  />
                </svg>
                <div>
                  <div className="font-medium text-gray-900">Looking for a specific vehicle?</div>
                  <div className="text-gray-600 text-sm">
                    Use our search bar above or browse our complete inventory.
                  </div>
                </div>
              </div>

              <div className="flex items-start">
                <svg
                  className="w-5 h-5 text-primary mr-3 mt-0.5 flex-shrink-0"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z"
                    clipRule="evenodd"
                  />
                </svg>
                <div>
                  <div className="font-medium text-gray-900">Need financing information?</div>
                  <div className="text-gray-600 text-sm">
                    Check out our financing page for rates and pre-approval.
                  </div>
                </div>
              </div>

              <div className="flex items-start">
                <svg
                  className="w-5 h-5 text-primary mr-3 mt-0.5 flex-shrink-0"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z"
                    clipRule="evenodd"
                  />
                </svg>
                <div>
                  <div className="font-medium text-gray-900">Questions about our dealership?</div>
                  <div className="text-gray-600 text-sm">
                    Visit our About page or contact us directly for assistance.
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-6 pt-6 border-t border-gray-200 text-center">
              <p className="text-gray-600 mb-4">Still can't find what you're looking for?</p>
              <div className="flex flex-col sm:flex-row gap-3 justify-center">
                <a
                  href="tel:555-123-4567"
                  className="inline-flex items-center justify-center px-4 py-2 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-50 transition-colors"
                >
                  📞 Call (555) 123-4567
                </a>
                <a
                  href="mailto:sales@sflegacyautos.com"
                  className="inline-flex items-center justify-center px-4 py-2 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-50 transition-colors"
                >
                  ✉️ Email Us
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
