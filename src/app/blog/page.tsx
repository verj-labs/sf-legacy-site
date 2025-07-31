'use client'

import { useState } from 'react'
import Link from 'next/link'

export default function BlogPage() {
  const [selectedCategory, setSelectedCategory] = useState('all')
  const [searchTerm, setSearchTerm] = useState('')

  // Mock blog data - in real app, this would come from CMS or API
  const blogPosts = [
    {
      id: '1',
      title: '10 Essential Questions to Ask When Buying a Used Car',
      excerpt: 'Make sure you know what to ask before making your next vehicle purchase. Our comprehensive guide covers everything from vehicle history to financing options.',
      category: 'buying-guide',
      author: 'Sarah Chen',
      publishDate: '2024-01-15',
      readTime: '8 min read',
      image: '/api/placeholder/400/250',
      featured: true
    },
    {
      id: '2',
      title: 'Winter Car Maintenance: Keeping Your Vehicle Road-Ready',
      excerpt: 'Prepare your car for winter weather with these essential maintenance tips. Learn about tire care, battery health, and cold weather precautions.',
      category: 'maintenance',
      author: 'David Rodriguez',
      publishDate: '2024-01-10',
      readTime: '6 min read',
      image: '/api/placeholder/400/250',
      featured: false
    },
    {
      id: '3',
      title: 'Understanding Your Credit Score for Auto Financing',
      excerpt: 'Learn how your credit score affects your auto loan terms and discover strategies to improve your financing options.',
      category: 'financing',
      author: 'Michael Johnson',
      publishDate: '2024-01-08',
      readTime: '5 min read',
      image: '/api/placeholder/400/250',
      featured: false
    },
    {
      id: '4',
      title: 'Electric vs. Hybrid vs. Gas: Which is Right for You?',
      excerpt: 'Compare the pros and cons of different powertrains to help you choose the best option for your driving needs and budget.',
      category: 'news',
      author: 'Lisa Thompson',
      publishDate: '2024-01-05',
      readTime: '10 min read',
      image: '/api/placeholder/400/250',
      featured: true
    },
    {
      id: '5',
      title: 'How to Maximize Your Trade-In Value',
      excerpt: 'Simple steps you can take to get the most money for your current vehicle when trading in for a new one.',
      category: 'buying-guide',
      author: 'Sarah Chen',
      publishDate: '2024-01-03',
      readTime: '7 min read',
      image: '/api/placeholder/400/250',
      featured: false
    },
    {
      id: '6',
      title: 'Spring Cleaning: Interior and Exterior Car Care Tips',
      excerpt: 'Refresh your vehicle for spring with our comprehensive cleaning and maintenance checklist.',
      category: 'maintenance',
      author: 'David Rodriguez',
      publishDate: '2024-01-01',
      readTime: '9 min read',
      image: '/api/placeholder/400/250',
      featured: false
    }
  ]

  const categories = [
    { id: 'all', label: 'All Posts', count: blogPosts.length },
    { id: 'buying-guide', label: 'Buying Guides', count: blogPosts.filter(post => post.category === 'buying-guide').length },
    { id: 'maintenance', label: 'Maintenance Tips', count: blogPosts.filter(post => post.category === 'maintenance').length },
    { id: 'financing', label: 'Financing', count: blogPosts.filter(post => post.category === 'financing').length },
    { id: 'news', label: 'Industry News', count: blogPosts.filter(post => post.category === 'news').length }
  ]

  const filteredPosts = blogPosts.filter(post => {
    const matchesCategory = selectedCategory === 'all' || post.category === selectedCategory
    const matchesSearch = post.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
                         post.excerpt.toLowerCase().includes(searchTerm.toLowerCase())
    return matchesCategory && matchesSearch
  })

  const featuredPosts = blogPosts.filter(post => post.featured)
  const regularPosts = filteredPosts.filter(post => !post.featured)

  const formatDate = (dateString: string) => {
    const date = new Date(dateString)
    return date.toLocaleDateString('en-US', { 
      year: 'numeric', 
      month: 'long', 
      day: 'numeric' 
    })
  }

  const getCategoryColor = (category: string) => {
    const colors = {
      'buying-guide': 'bg-blue-100 text-blue-800',
      'maintenance': 'bg-green-100 text-green-800',
      'financing': 'bg-purple-100 text-purple-800',
      'news': 'bg-orange-100 text-orange-800'
    }
    return colors[category as keyof typeof colors] || 'bg-gray-100 text-gray-800'
  }

  const getCategoryLabel = (category: string) => {
    const labels = {
      'buying-guide': 'Buying Guide',
      'maintenance': 'Maintenance',
      'financing': 'Financing',
      'news': 'News'
    }
    return labels[category as keyof typeof labels] || category
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-primary to-primary/80 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="flex items-center text-sm text-white/80 justify-center mb-4">
              <Link href="/" className="hover:text-white">Home</Link>
              <span className="mx-2">/</span>
              <span>Blog</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-heading font-bold mb-6">
              Auto Insights & Tips
            </h1>
            <p className="text-xl text-white/90 max-w-3xl mx-auto">
              Expert advice on car buying, maintenance, financing, and industry trends 
              from the team at SF Legacy Autos.
            </p>
          </div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Search and Filter */}
        <section className="mb-12">
          <div className="bg-white rounded-lg border border-gray-200 shadow-sm p-6">
            <div className="flex flex-col md:flex-row gap-6">
              {/* Search */}
              <div className="flex-1">
                <div className="relative">
                  <svg className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                  </svg>
                  <input
                    type="text"
                    placeholder="Search articles..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                  />
                </div>
              </div>
              
              {/* Categories */}
              <div className="flex flex-wrap gap-2">
                {categories.map((category) => (
                  <button
                    key={category.id}
                    onClick={() => setSelectedCategory(category.id)}
                    className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                      selectedCategory === category.id
                        ? 'bg-primary text-white'
                        : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                    }`}
                  >
                    {category.label} ({category.count})
                  </button>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Featured Posts */}
        {selectedCategory === 'all' && searchTerm === '' && (
          <section className="mb-16">
            <h2 className="text-2xl font-heading font-bold text-gray-900 mb-8">Featured Articles</h2>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {featuredPosts.map((post) => (
                <Link
                  key={post.id}
                  href={`/blog/${post.id}`}
                  className="group bg-white rounded-lg border border-gray-200 shadow-sm hover:shadow-lg transition-all duration-300 overflow-hidden"
                >
                  <div className="aspect-[16/9] bg-gray-200 overflow-hidden">
                    <img
                      src={post.image}
                      alt={post.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <div className="p-6">
                    <div className="flex items-center gap-3 mb-3">
                      <span className={`px-3 py-1 rounded-full text-xs font-medium ${getCategoryColor(post.category)}`}>
                        {getCategoryLabel(post.category)}
                      </span>
                      <span className="text-sm text-gray-500">{post.readTime}</span>
                    </div>
                    <h3 className="text-xl font-heading font-bold text-gray-900 mb-3 group-hover:text-primary transition-colors">
                      {post.title}
                    </h3>
                    <p className="text-gray-600 mb-4 line-clamp-3">
                      {post.excerpt}
                    </p>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center text-sm text-gray-500">
                        <span>By {post.author}</span>
                        <span className="mx-2">•</span>
                        <span>{formatDate(post.publishDate)}</span>
                      </div>
                      <div className="flex items-center text-primary font-medium text-sm">
                        Read More
                        <svg className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                      </div>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </section>
        )}

        {/* All Posts */}
        <section>
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-2xl font-heading font-bold text-gray-900">
              {selectedCategory === 'all' ? 'All Articles' : `${categories.find(c => c.id === selectedCategory)?.label} Articles`}
            </h2>
            <div className="text-gray-600">
              {filteredPosts.length} article{filteredPosts.length !== 1 ? 's' : ''} found
            </div>
          </div>

          {filteredPosts.length === 0 ? (
            <div className="bg-white rounded-lg border border-gray-200 shadow-sm p-12 text-center">
              <svg className="w-16 h-16 text-gray-400 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.172 16.172a4 4 0 015.656 0M9 12h6m-6-4h6m2 5.291A7.962 7.962 0 0112 15c-2.034 0-3.9.785-5.291 2.072M6.343 6.343L17.657 17.657" />
              </svg>
              <h3 className="text-lg font-medium text-gray-900 mb-2">No articles found</h3>
              <p className="text-gray-600 mb-4">Try adjusting your search terms or selected category.</p>
              <button
                onClick={() => {
                  setSelectedCategory('all')
                  setSearchTerm('')
                }}
                className="bg-primary text-white px-6 py-3 rounded-lg font-medium hover:bg-primary/90 transition-colors"
              >
                Clear Filters
              </button>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {(selectedCategory === 'all' && searchTerm === '' ? regularPosts : filteredPosts).map((post) => (
                <Link
                  key={post.id}
                  href={`/blog/${post.id}`}
                  className="group bg-white rounded-lg border border-gray-200 shadow-sm hover:shadow-lg transition-all duration-300 overflow-hidden"
                >
                  <div className="aspect-[16/9] bg-gray-200 overflow-hidden">
                    <img
                      src={post.image}
                      alt={post.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <div className="p-6">
                    <div className="flex items-center gap-3 mb-3">
                      <span className={`px-3 py-1 rounded-full text-xs font-medium ${getCategoryColor(post.category)}`}>
                        {getCategoryLabel(post.category)}
                      </span>
                      <span className="text-sm text-gray-500">{post.readTime}</span>
                    </div>
                    <h3 className="text-lg font-heading font-bold text-gray-900 mb-3 group-hover:text-primary transition-colors line-clamp-2">
                      {post.title}
                    </h3>
                    <p className="text-gray-600 mb-4 text-sm line-clamp-3">
                      {post.excerpt}
                    </p>
                    <div className="flex items-center justify-between">
                      <div className="text-xs text-gray-500">
                        <div>By {post.author}</div>
                        <div>{formatDate(post.publishDate)}</div>
                      </div>
                      <div className="flex items-center text-primary font-medium text-sm">
                        Read More
                        <svg className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                      </div>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          )}
        </section>

        {/* Newsletter Signup */}
        <section className="mt-20">
          <div className="bg-gradient-to-r from-primary to-primary/80 rounded-lg text-white p-8 text-center">
            <h2 className="text-2xl md:text-3xl font-heading font-bold mb-4">
              Stay Updated with Our Latest Tips
            </h2>
            <p className="text-white/90 mb-6 max-w-2xl mx-auto">
              Subscribe to our newsletter and get the latest car buying tips, maintenance advice, 
              and industry insights delivered straight to your inbox.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 rounded-lg text-gray-900 placeholder-gray-500 focus:ring-2 focus:ring-accent focus:outline-none"
              />
              <button className="bg-accent text-gray-900 px-8 py-3 rounded-lg font-medium hover:bg-accent/90 transition-colors whitespace-nowrap">
                Subscribe
              </button>
            </div>
            <p className="text-white/70 text-sm mt-4">
              No spam, unsubscribe at any time.
            </p>
          </div>
        </section>
      </div>
    </div>
  )
}
