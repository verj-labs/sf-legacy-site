export default function GoogleReviews() {
  return (
    <section className="section-padding bg-muted">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12">
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="w-8 h-8 bg-blue-600 text-white rounded flex items-center justify-center">
              <span className="text-sm font-bold">G</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-gray-900">
              Google Reviews
            </h2>
          </div>
          <p className="text-lg text-gray-600">
            See what our customers are saying about their experience
          </p>
        </div>

        {/* Reviews Grid - Skeleton for now */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[1, 2, 3].map((index) => (
            <div key={index} className="bg-white rounded-lg p-6 shadow-sm border border-gray-200">
              {/* Stars */}
              <div className="flex items-center gap-1 mb-4">
                {[1, 2, 3, 4, 5].map((star) => (
                  <svg
                    key={star}
                    className="w-5 h-5 text-yellow-400"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>

              {/* Review Content - Skeleton */}
              <div className="space-y-3">
                <div className="h-4 bg-gray-200 rounded animate-pulse"></div>
                <div className="h-4 bg-gray-200 rounded animate-pulse w-5/6"></div>
                <div className="h-4 bg-gray-200 rounded animate-pulse w-4/6"></div>
              </div>

              {/* Reviewer Info - Skeleton */}
              <div className="flex items-center gap-3 mt-6">
                <div className="w-10 h-10 bg-gray-200 rounded-full animate-pulse"></div>
                <div className="space-y-2">
                  <div className="h-3 bg-gray-200 rounded animate-pulse w-20"></div>
                  <div className="h-3 bg-gray-200 rounded animate-pulse w-16"></div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View More Reviews Button */}
        <div className="text-center mt-8">
          <a
            href="https://www.google.com/search?q=sf+legacy+motors+reviews#lrd=0x882ca33cd7843359:0xb2180d8bddf3f791,1,,,,"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
          >
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
              <path d="M10 12a2 2 0 100-4 2 2 0 000 4z" />
              <path fillRule="evenodd" d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z" clipRule="evenodd" />
            </svg>
            View All Google Reviews
          </a>
        </div>

        {/* Note */}
        <div className="text-center mt-6">
          <p className="text-sm text-gray-500">
            <em>Google Reviews integration coming soon. Real customer reviews will be displayed here.</em>
          </p>
        </div>
      </div>
    </section>
  )
}
