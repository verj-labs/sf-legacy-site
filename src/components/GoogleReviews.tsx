import { HiStar, HiArrowTopRightOnSquare } from "react-icons/hi2";

export default function GoogleReviews() {
  const placeholderCards = [1, 2, 3];
  const stars = [1, 2, 3, 4, 5];

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

        {/* Reviews Grid - Skeleton */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {placeholderCards.map((index) => (
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
          ))}
        </div>

        {/* View More Reviews Button */}
        <div className="text-center mt-10">
          <a
            href="https://www.google.com/search?q=sf+legacy+motors+reviews#lrd=0x882ca33cd7843359:0xb2180d8bddf3f791,1,,,,"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 btn-primary px-7 py-3 rounded-lg group"
          >
            <HiArrowTopRightOnSquare className="w-5 h-5 text-neutral-200 group-hover:text-neutral-50 transition-colors" />
            <span className="font-medium tracking-tight">
              View All Google Reviews
            </span>
          </a>
        </div>
      </div>
    </section>
  );
}
