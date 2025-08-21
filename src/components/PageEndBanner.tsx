import Link from "next/link";

interface PageEndBannerProps {
  title?: string;
  body?: string;
}

export default function PageEndBanner({
  title = "Ready to Find Your Perfect Vehicle?",
  body = "Browse our inventory, get financing, and drive home in your new car today. Our team is here to help you every step of the way.",
}: PageEndBannerProps) {
  return (
    <div className="relative overflow-hidden bg-dark-carbon rounded-xl shadow-xl text-white">
      {/* Background decorative elements */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full blur-3xl transform translate-x-32 -translate-y-32"></div>
      <div className="absolute bottom-0 left-0 w-48 h-48 bg-brand-dark/20 rounded-full blur-2xl transform -translate-x-16 translate-y-16"></div>
      
      <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-8 p-10 items-center">
        {/* Left side - Content */}
        <div>
          <h3 className="text-2xl md:text-3xl font-heading font-bold mb-4 drop-shadow-lg text-white">
            {title}
          </h3>
          <p className="text-lg text-white/90 mb-6 leading-relaxed drop-shadow-sm">
            {body}
          </p>
        </div>
        
        {/* Right side - Actions */}
        <div className="flex flex-col sm:flex-row gap-4 lg:justify-end">
          <Link
            href="/inventory"
            className="btn-primary bg-white text-brand hover:bg-white/90 text-center"
          >
            Browse Inventory
          </Link>
          <Link
            href="/contact"
            className="btn-secondary border-white text-white hover:bg-white/20 text-center"
          >
            Contact Us
          </Link>
        </div>
      </div>
    </div>
  );
}
