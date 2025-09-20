"use client";

import { useState, useEffect } from "react";
import { HiStar, HiArrowTopRightOnSquare } from "react-icons/hi2";

interface GoogleReview {
  author_name: string;
  author_url?: string;
  language: string;
  profile_photo_url: string;
  rating: number;
  relative_time_description: string;
  text: string;
  time: number;
}

interface PlaceDetailsResponse {
  result?: {
    reviews?: GoogleReview[];
    rating?: number;
    user_ratings_total?: number;
  };
}

export default function GoogleReviews() {
  const [reviews, setReviews] = useState<GoogleReview[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [placeInfo, setPlaceInfo] = useState<{
    rating: number;
    totalReviews: number;
  } | null>(null);

  const stars = [1, 2, 3, 4, 5];

  useEffect(() => {
    const fetchReviews = async () => {
      try {
        // You'll need to create this API route
        const response = await fetch("/api/google-reviews");
        if (!response.ok) {
          throw new Error("Failed to fetch reviews");
        }
        const data: PlaceDetailsResponse = await response.json();

        if (data.result?.reviews) {
          // Filter and sort reviews to get the top-rated ones
          const topRatedReviews = data.result.reviews
            .filter((review) => review.rating >= 4) // Only show 4+ star reviews
            .sort((a, b) => {
              // Sort by rating first (descending), then by recency (time descending)
              if (b.rating !== a.rating) {
                return b.rating - a.rating;
              }
              return b.time - a.time;
            })
            .slice(0, 4); // Show top 4 reviews

          setReviews(topRatedReviews);
          setPlaceInfo({
            rating: data.result.rating || 0,
            totalReviews: data.result.user_ratings_total || 0,
          });
        }
      } catch (err) {
        setError(err instanceof Error ? err.message : "Failed to load reviews");
      } finally {
        setLoading(false);
      }
    };

    fetchReviews();
  }, []);

  const renderStars = (rating: number) => {
    return stars.map((star) => (
      <HiStar
        key={star}
        className={`w-5 h-5 ${star <= rating ? "text-yellow-400 fill-current" : "text-gray-300"}`}
      />
    ));
  };

  const formatReviewText = (text: string) => {
    // Limit review text to reasonable length for 4-column layout
    return text.length > 120 ? text.substring(0, 120) + "..." : text;
  };

  return (
    <section className="section-padding bg-gradient-to-br from-neutral-200 via-neutral-100 to-neutral-200">
      {/* <div className="absolute inset-0 bg-gradient-to-br from-neutral-100 via-neutral-50 to-neutral-100 pointer-events-none" /> */}
      <div className="relative max-w-7xl mx-auto px-0 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-10">
          <div className="text-center flex flex-col items-center gap-2">
            <h2 className="text-h2 font-heading font-bold text-neutral-800">
              Reviews & Testimonials
            </h2>
          </div>
          <p className="text-body-m text-body ">
            See what our customers are saying about their experience.
          </p>

          <div className="mt-6 w-40 h-px mx-auto bg-gradient-to-r from-transparent via-neutral-300 to-transparent" />
        </div>

        {/* Reviews Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
          {loading ? (
            // Loading skeleton
            [1, 2, 3, 4].map((index) => (
              <div
                key={index}
                className="group relative bg-surface rounded-xl p-6 border border-border shadow-xs hover:border-neutral-300 hover:shadow-md transition-all duration-300 overflow-hidden"
              >
                {/* Stars */}
                <div className="flex items-center gap-1 mb-4 text-brand">
                  {stars.map((star) => (
                    <HiStar key={star} className="w-5 h-5 fill-current" />
                  ))}
                </div>

                {/* Review Content - Skeleton */}
                <div className="space-y-3">
                  <div className="h-3.5 bg-neutral-200/70 rounded animate-pulse" />
                  <div className="h-3.5 bg-neutral-200/70 rounded animate-pulse w-5/6" />
                  <div className="h-3.5 bg-neutral-200/70 rounded animate-pulse w-4/6" />
                </div>

                {/* Reviewer Info - Skeleton */}
                <div className="flex items-center gap-3 mt-6">
                  <div className="w-10 h-10 bg-neutral-200/70 rounded-full animate-pulse" />
                  <div className="space-y-2">
                    <div className="h-3 bg-neutral-200/70 rounded animate-pulse w-20" />
                    <div className="h-3 bg-neutral-200/70 rounded animate-pulse w-16" />
                  </div>
                </div>
                <span className="pointer-events-none absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-neutral-200 to-transparent" />
              </div>
            ))
          ) : error ? (
            // Error state
            <div className="col-span-full text-center py-8">
              <p className="text-gray-500 mb-4">Unable to load reviews at this time.</p>
              <p className="text-sm text-gray-400">{error}</p>
            </div>
          ) : reviews.length > 0 ? (
            // Actual reviews
            reviews.map((review, index) => (
              <div
                key={index}
                className="group relative bg-surface rounded-xl p-6 border border-border shadow-xs hover:border-neutral-300 hover:shadow-md transition-all duration-300 overflow-hidden"
              >
                {/* Stars and Rating Badge */}
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-1">{renderStars(review.rating)}</div>
                  <div className="bg-yellow-400 text-gray-900 text-xs font-bold px-2 py-1 rounded-full">
                    {review.rating}.0
                  </div>
                </div>

                {/* Review Content */}
                <div className="mb-6">
                  <p className="text-gray-700 leading-relaxed text-sm">
                    "{formatReviewText(review.text)}"
                  </p>
                </div>

                {/* Reviewer Info */}
                <div className="flex items-center gap-3">
                  <img
                    src={review.profile_photo_url}
                    alt={review.author_name}
                    className="w-10 h-10 rounded-full object-cover"
                    onError={(e) => {
                      const target = e.target as HTMLImageElement;
                      target.src =
                        "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHZpZXdCb3g9IjAgMCA0MCA0MCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPGNpcmNsZSBjeD0iMjAiIGN5PSIyMCIgcj0iMjAiIGZpbGw9IiNGMkY0RjciLz4KPGVSBSBYPSIYY9IiDhY9liIyICiOj0iTigiZuGlzaPQyAiAKPGNmb2NsZSBjeD0iMjAiIGN5PSIxNiIgcj0iNiIgZmlsbD0iIzlDQTNBRiIvPgo8cGF0aCBkPSJNIDEwIDMwIEMgMTAgMjYuNjg2MyAxNS4xNjM0IDI0IDIwIDI0IEMgMjQuODM2NiAyNCAzMCAyNi42ODYzIDMwIDMwIiBzdHJva2U9IiM5Q0EzQUYiIHN0cm9rZS13aWR0aD0iMiIgZmlsbD0ibm9uZSIvPgo8L3N2Zz4K";
                    }}
                  />
                  <div>
                    <p className="text-sm font-medium text-gray-900">{review.author_name}</p>
                    <p className="text-xs text-gray-500">{review.relative_time_description}</p>
                  </div>
                </div>
                <span className="pointer-events-none absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-neutral-200 to-transparent" />
              </div>
            ))
          ) : (
            // No reviews fallback
            <div className="col-span-full text-center py-8">
              <p className="text-gray-500">No reviews available at this time.</p>
            </div>
          )}
        </div>

        {/* View More Reviews Button */}
        <div className="text-center mt-10">
          <a
            href="https://www.google.com/search?q=sf+legacy+motors+reviews#lrd=0x882ca33cd7843359:0xb2180d8bddf3f791,1,,,,"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 btn-primary px-7 py-3 rounded-lg group hover:bg-primary-800"
          >
            <HiArrowTopRightOnSquare className="w-5 h-5 text-ink group-hover:text-neutral-50 transition-colors" />
            <span className="font-medium tracking-tight group-hover:text-neutral-50">
              View All Google Reviews
            </span>
          </a>
        </div>
      </div>
    </section>
  );
}
