'use client'

import { useParams } from 'next/navigation'
import Link from 'next/link'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

export default function BlogPostPage() {
  const params = useParams()
  
  // Mock blog post data - in real app, this would be fetched based on slug
  const post = {
    id: '1',
    title: '10 Essential Questions to Ask When Buying a Used Car',
    excerpt: 'Make sure you know what to ask before making your next vehicle purchase. Our comprehensive guide covers everything from vehicle history to financing options.',
    category: 'buying-guide',
    author: 'Sarah Chen',
    authorBio: 'Sarah is a sales manager at SF Legacy Autos with over 8 years of experience helping customers find their perfect vehicle.',
    authorImage: '/api/placeholder/100/100',
    publishDate: '2024-01-15',
    readTime: '8 min read',
    image: '/api/placeholder/800/400',
    content: `
      <p>Buying a used car can be an exciting but overwhelming experience. With so many options available and various factors to consider, it's crucial to know the right questions to ask to ensure you're making a smart purchase.</p>

      <p>As someone who has helped thousands of customers find their perfect vehicle, I've compiled this comprehensive guide to help you navigate the used car buying process with confidence.</p>

      <h2>1. Can I see the vehicle history report?</h2>
      <p>A vehicle history report is your window into the car's past. This report will reveal crucial information such as:</p>
      <ul>
        <li>Previous accidents or damage</li>
        <li>Number of previous owners</li>
        <li>Service and maintenance records</li>
        <li>Title issues (salvage, flood, lemon)</li>
        <li>Mileage verification</li>
      </ul>
      <p>Reputable dealers should provide this information upfront. If they can't or won't provide a history report, consider this a red flag.</p>

      <h2>2. What is the vehicle's maintenance history?</h2>
      <p>Regular maintenance is crucial for a vehicle's longevity and performance. Ask to see:</p>
      <ul>
        <li>Oil change records</li>
        <li>Major service intervals</li>
        <li>Recent repairs or replacements</li>
        <li>Warranty information</li>
      </ul>
      <p>A well-maintained vehicle with complete records is often worth paying extra for, as it can save you money on future repairs.</p>

      <h2>3. Can I have the vehicle inspected by my mechanic?</h2>
      <p>A pre-purchase inspection by a trusted mechanic can reveal issues that aren't immediately apparent. This inspection should include:</p>
      <ul>
        <li>Engine and transmission performance</li>
        <li>Brake system condition</li>
        <li>Suspension and steering components</li>
        <li>Electrical systems</li>
        <li>Overall safety features</li>
      </ul>
      <p>Most honest dealers will allow this inspection. If they refuse, it's a significant warning sign.</p>

      <h2>4. What financing options are available?</h2>
      <p>Understanding your financing options is crucial for making an informed decision. Ask about:</p>
      <ul>
        <li>Interest rates and terms</li>
        <li>Down payment requirements</li>
        <li>Monthly payment options</li>
        <li>Early payoff penalties</li>
        <li>Extended warranty options</li>
      </ul>
      <p>It's also worth getting pre-approved from your bank or credit union to compare rates.</p>

      <h2>5. What is included in the sale price?</h2>
      <p>Make sure you understand exactly what's included in the quoted price:</p>
      <ul>
        <li>Documentation fees</li>
        <li>Tax and registration costs</li>
        <li>Extended warranties</li>
        <li>Additional accessories or services</li>
      </ul>
      <p>Ask for a detailed breakdown to avoid surprises at signing.</p>

      <h2>6. Is there a warranty or return policy?</h2>
      <p>While used cars are typically sold "as-is," some dealers offer:</p>
      <ul>
        <li>Limited warranties on major components</li>
        <li>Return policies within a certain timeframe</li>
        <li>Extended warranty purchase options</li>
        <li>Service guarantees</li>
      </ul>
      <p>Understanding these protections can provide peace of mind with your purchase.</p>

      <h2>7. Why is the previous owner selling?</h2>
      <p>Understanding the reason for sale can provide valuable insights:</p>
      <ul>
        <li>Upgrading to a newer vehicle</li>
        <li>Lifestyle changes (family size, job relocation)</li>
        <li>Financial circumstances</li>
        <li>Mechanical issues (red flag)</li>
      </ul>
      <p>While the seller may not always provide complete details, their response can be telling.</p>

      <h2>8. What is your best price?</h2>
      <p>Don't be afraid to negotiate. Research the vehicle's market value beforehand using resources like:</p>
      <ul>
        <li>Kelley Blue Book</li>
        <li>Edmunds</li>
        <li>Local market comparisons</li>
        <li>Dealer trade-in values</li>
      </ul>
      <p>Having this information gives you leverage in negotiations.</p>

      <h2>9. Can I take an extended test drive?</h2>
      <p>A short test drive around the block isn't enough. Ask for an extended test drive that includes:</p>
      <ul>
        <li>City and highway driving</li>
        <li>Parking and maneuvering</li>
        <li>Testing all electrical components</li>
        <li>Climate control systems</li>
        <li>Audio and navigation systems</li>
      </ul>
      <p>This will help you identify any issues and ensure the vehicle meets your needs.</p>

      <h2>10. What happens if I find problems after purchase?</h2>
      <p>Even with thorough inspection, issues can arise. Ask about:</p>
      <ul>
        <li>The dealer's policy on post-sale issues</li>
        <li>Available service departments</li>
        <li>Recommended maintenance schedules</li>
        <li>Customer support availability</li>
      </ul>
      <p>A dealer who stands behind their vehicles will have clear policies and support systems.</p>

      <h2>Conclusion</h2>
      <p>Buying a used car doesn't have to be stressful. By asking these essential questions, you'll be well-equipped to make an informed decision. Remember, a reputable dealer will welcome your questions and provide transparent answers.</p>

      <p>At SF Legacy Autos, we believe in transparent communication and building long-term relationships with our customers. Every vehicle in our inventory comes with a detailed history report, and we encourage pre-purchase inspections.</p>

      <p>Ready to find your next vehicle? Browse our inventory or contact our team to schedule a test drive today!</p>
    `
  }

  // Related posts
  const relatedPosts = [
    {
      id: '2',
      title: 'How to Maximize Your Trade-In Value',
      category: 'buying-guide',
      readTime: '7 min read',
      image: '/api/placeholder/300/200'
    },
    {
      id: '3',
      title: 'Understanding Your Credit Score for Auto Financing',
      category: 'financing',
      readTime: '5 min read',
      image: '/api/placeholder/300/200'
    },
    {
      id: '4',
      title: 'Winter Car Maintenance: Keeping Your Vehicle Road-Ready',
      category: 'maintenance',
      readTime: '6 min read',
      image: '/api/placeholder/300/200'
    }
  ]

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
      <Header />
      
      <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Breadcrumb */}
        <div className="flex items-center text-sm text-gray-500 mb-6">
          <Link href="/" className="hover:text-primary">Home</Link>
          <span className="mx-2">/</span>
          <Link href="/blog" className="hover:text-primary">Blog</Link>
          <span className="mx-2">/</span>
          <span>{post.title}</span>
        </div>

        {/* Article Header */}
        <header className="mb-8">
          <div className="flex items-center gap-3 mb-4">
            <span className={`px-3 py-1 rounded-full text-sm font-medium ${getCategoryColor(post.category)}`}>
              {getCategoryLabel(post.category)}
            </span>
            <span className="text-gray-500">{post.readTime}</span>
          </div>
          
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-gray-900 mb-4 leading-tight">
            {post.title}
          </h1>
          
          <p className="text-xl text-gray-600 mb-6 leading-relaxed">
            {post.excerpt}
          </p>
          
          <div className="flex items-center gap-4 pb-6 border-b border-gray-200">
            <img
              src={post.authorImage}
              alt={post.author}
              className="w-12 h-12 rounded-full object-cover"
            />
            <div>
              <div className="font-medium text-gray-900">{post.author}</div>
              <div className="text-sm text-gray-500">
                Published {formatDate(post.publishDate)}
              </div>
            </div>
          </div>
        </header>

        {/* Featured Image */}
        <div className="mb-8">
          <img
            src={post.image}
            alt={post.title}
            className="w-full h-64 md:h-96 object-cover rounded-lg shadow-lg"
          />
        </div>

        {/* Article Content */}
        <div className="prose prose-lg max-w-none">
          <div 
            dangerouslySetInnerHTML={{ __html: post.content }}
            className="
              [&>h2]:text-2xl [&>h2]:font-heading [&>h2]:font-bold [&>h2]:text-gray-900 [&>h2]:mt-8 [&>h2]:mb-4
              [&>h3]:text-xl [&>h3]:font-heading [&>h3]:font-semibold [&>h3]:text-gray-900 [&>h3]:mt-6 [&>h3]:mb-3
              [&>p]:text-gray-600 [&>p]:leading-relaxed [&>p]:mb-4
              [&>ul]:mb-4 [&>ul>li]:text-gray-600 [&>ul>li]:mb-2
              [&>ol]:mb-4 [&>ol>li]:text-gray-600 [&>ol>li]:mb-2
            "
          />
        </div>

        {/* Author Bio */}
        <div className="bg-gray-100 rounded-lg p-6 my-12">
          <div className="flex items-start gap-4">
            <img
              src={post.authorImage}
              alt={post.author}
              className="w-16 h-16 rounded-full object-cover flex-shrink-0"
            />
            <div>
              <h3 className="text-lg font-heading font-semibold text-gray-900 mb-2">
                About {post.author}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {post.authorBio}
              </p>
            </div>
          </div>
        </div>

        {/* Social Share */}
        <div className="flex items-center gap-4 py-6 border-y border-gray-200 my-8">
          <span className="font-medium text-gray-900">Share this article:</span>
          <div className="flex gap-2">
            <button className="p-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/>
              </svg>
            </button>
            <button className="p-2 bg-blue-800 text-white rounded-lg hover:bg-blue-900 transition-colors">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
              </svg>
            </button>
            <button className="p-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
              </svg>
            </button>
          </div>
        </div>

        {/* Related Posts */}
        <section className="my-12">
          <h3 className="text-2xl font-heading font-bold text-gray-900 mb-8">
            Related Articles
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {relatedPosts.map((relatedPost) => (
              <Link
                key={relatedPost.id}
                href={`/blog/${relatedPost.id}`}
                className="group bg-white rounded-lg border border-gray-200 shadow-sm hover:shadow-lg transition-all duration-300 overflow-hidden"
              >
                <div className="aspect-[16/9] bg-gray-200 overflow-hidden">
                  <img
                    src={relatedPost.image}
                    alt={relatedPost.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="p-4">
                  <div className="flex items-center gap-2 mb-2">
                    <span className={`px-2 py-1 rounded-full text-xs font-medium ${getCategoryColor(relatedPost.category)}`}>
                      {getCategoryLabel(relatedPost.category)}
                    </span>
                    <span className="text-xs text-gray-500">{relatedPost.readTime}</span>
                  </div>
                  <h4 className="font-heading font-semibold text-gray-900 group-hover:text-primary transition-colors line-clamp-2">
                    {relatedPost.title}
                  </h4>
                </div>
              </Link>
            ))}
          </div>
        </section>

        {/* CTA */}
        <div className="bg-gradient-to-r from-primary to-primary/80 rounded-lg text-white p-8 text-center my-12">
          <h3 className="text-2xl font-heading font-bold mb-4">
            Ready to Find Your Perfect Vehicle?
          </h3>
          <p className="text-white/90 mb-6">
            Browse our inventory of quality pre-owned vehicles or contact our team for personalized assistance.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/inventory"
              className="bg-accent text-gray-900 px-8 py-3 rounded-lg font-medium hover:bg-accent/90 transition-colors"
            >
              Browse Inventory
            </Link>
            <Link
              href="/contact"
              className="bg-white/10 text-white px-8 py-3 rounded-lg font-medium hover:bg-white/20 transition-colors backdrop-blur-sm"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </article>

      <Footer />
    </div>
  )
}
