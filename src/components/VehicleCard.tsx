import Link from "next/link";
import { Vehicle } from "@/types/vehicle";
import Chip from "@/components/Chip";
import {
  HiOutlineCheckCircle,
  HiOutlineEye,
  HiOutlineCalendar,
} from "react-icons/hi";
import {
  formatPrice,
  formatMileage,
  formatDrivetrain,
  formatFuelType,
  formatBodyType,
} from "@/utils/vehicleHelpers";

interface VehicleCardProps {
  vehicle: Vehicle;
  variant?: "default" | "featured" | "compact" | "selectable" | "inventory";
  isSelected?: boolean;
  onSelect?: (vehicle: Vehicle) => void;
  showActions?: boolean;
  className?: string;
}

export default function VehicleCard({
  vehicle,
  variant = "default",
  isSelected = false,
  onSelect,
  showActions = true,
  className = "",
}: VehicleCardProps) {
  const formatMileage = (mileage: number) => {
    return new Intl.NumberFormat("en-US").format(mileage);
  };

  const baseClasses =
    "group bg-surface rounded-lg border border-border shadow-xs hover:shadow-md transition-all duration-300 overflow-hidden";

  const variantClasses = {
    default:
      vehicle.status === "sold"
        ? "opacity-75 hover:border-gray-300"
        : "hover:border-neutral-300",
    featured:
      vehicle.status === "sold"
        ? "opacity-75 hover:border-gray-300 hover:shadow-lg"
        : "hover:border-neutral-300 hover:shadow-lg",
    compact:
      vehicle.status === "sold"
        ? "opacity-75 hover:border-gray-300"
        : "hover:border-neutral-300",
    inventory:
      vehicle.status === "sold"
        ? "opacity-75 border-border hover:border-gray-300"
        : "border-border hover:border-neutral-300",
    selectable: `cursor-pointer ${
      isSelected
        ? "border-brand bg-brand/5 shadow-lg"
        : vehicle.status === "sold"
        ? "opacity-75 border-border hover:border-gray-300 hover:shadow-md"
        : "border-border hover:border-neutral-300 hover:shadow-md"
    }`,
  };

  const cardContent = (
    <div className={`${baseClasses} ${variantClasses[variant]} ${className}`}>
      {/* Vehicle Image */}
      <div
        className={`relative bg-background-muted overflow-hidden ${
          variant === "featured" ? "aspect-[17/10]" : "aspect-[4/3]"
        }`}
      >
        <img
          src={vehicle.images?.[0] || "/api/placeholder/400/300"}
          alt={`${vehicle.year} ${vehicle.make} ${vehicle.model}`}
          className={`w-full h-full object-cover group-hover:scale-105 transition-transform duration-300 ${
            vehicle.status === "sold" ? "grayscale-[30%]" : ""
          }`}
        />

        {/* Sold Overlay */}
        {vehicle.status === "sold" && (
          <div className="absolute inset-0 bg-black/10"></div>
        )}

        {/* Featured Badge */}
        {(variant === "featured" || variant === "inventory") &&
          vehicle.featured &&
          vehicle.status === "available" && (
            <div className="absolute top-3 left-3">
              <Chip size="sm" className="bg-primary-500 text-ink text-xs">
                Featured
              </Chip>
            </div>
          )}

        {/* Sale Badge */}
        {vehicle.salePrice && vehicle.salePrice < vehicle.price && (
          <div
            className={`absolute top-3 ${
              (variant === "featured" || variant === "inventory") &&
              vehicle.featured
                ? "left-3 mt-8"
                : "left-3"
            }`}
          >
            <Chip
              variant="error"
              size="sm"
              className="bg-red-500 text-white text-xs"
            >
              Sale
            </Chip>
          </div>
        )}

        {/* Sold Badge */}
        {vehicle.status === "sold" && (
          <div className="absolute top-3 left-3">
            <Chip
              size="sm"
              className="bg-red-500 text-white text-xs font-medium"
            >
              SOLD
            </Chip>
          </div>
        )}

        {/* Pending Badge */}
        {vehicle.status === "pending" && (
          <div className="absolute top-3 left-3">
            <Chip
              size="sm"
              className="bg-yellow-500 text-ink  text-xs font-medium"
            >
              PENDING
            </Chip>
          </div>
        )}

        {/* Warranty Badge */}
        {variant === "featured" && vehicle.warranty?.hasWarranty && (
          <div className="absolute top-3 right-3 mb-8">
            <Chip
              variant="success"
              size="sm"
              className="bg-green-500 text-white text-xs"
            >
              Certified
            </Chip>
          </div>
        )}

        {/* Stock Number Badge */}
        <div
          className={`absolute ${
            variant === "featured" && vehicle.warranty?.hasWarranty
              ? "top-12 right-3"
              : "top-3 right-3"
          }`}
        >
          <Chip
            variant="overlay"
            size="sm"
            className="bg-black/60 text-white backdrop-blur-sm text-xs"
          >
            #{vehicle.stockNum}
          </Chip>
        </div>
      </div>

      {/* Card Content */}
      <div
        className={`${
          variant === "compact" || variant === "inventory"
            ? "p-4"
            : variant === "featured"
            ? "p-5 md:p-6"
            : "p-6"
        } group-hover:bg-primary-500 transition-all duration-200`}
      >
        {/* Vehicle Title */}
        <h3
          className={`font-heading font-bold text-ink mb-1.5  transition-colors ${
            variant === "featured"
              ? "text-h5"
              : variant === "compact" || variant === "inventory"
              ? "text-sm"
              : "text-h5"
          }`}
        >
          {vehicle.year} {vehicle.make} {vehicle.model} {vehicle.trim}
        </h3>

        {/* Vehicle Details */}
        <div
          className={`flex flex-wrap gap-1.5 ${
            variant === "featured"
              ? "mb-2"
              : variant === "compact" || variant === "inventory"
              ? "mb-3"
              : "mb-4"
          }`}
        >
          <Chip
            size="sm"
            className="text-xs group-hover:bg-ink group-hover:text-primary-50"
          >
            {formatMileage(vehicle.odometer)} km
          </Chip>
          <Chip
            size="sm"
            className="text-xs group-hover:bg-ink group-hover:text-primary-50"
          >
            {vehicle.transmission}
          </Chip>
          <Chip
            size="sm"
            className="text-xs group-hover:bg-ink group-hover:text-primary-50"
          >
            {formatBodyType(vehicle.bodyType)}
          </Chip>
          {variant === "featured" && vehicle.fuelType && (
            <Chip
              size="sm"
              className="text-xs group-hover:bg-ink group-hover:text-primary-50"
            >
              {formatFuelType(vehicle.fuelType)}
            </Chip>
          )}
        </div>

        {/* Additional Details for Featured Variant */}
        {variant === "featured" && (
          <div className="mb-3 space-y-2">
            <p className="text-body-s text-body/80 line-clamp-1">
              {vehicle.description ||
                `${vehicle.year} ${vehicle.make} ${
                  vehicle.model
                } • ${formatMileage(vehicle.odometer)} mi • ${
                  vehicle.transmission
                }`}
            </p>
            {/* Key Features (limit to first 3) */}
            <div className="flex flex-wrap gap-1.5">
              {[
                vehicle.engineDesc,
                formatDrivetrain(vehicle.drivetrain),
                vehicle.exteriorColor,
              ]
                .filter(Boolean)
                .slice(0, 3)
                .map((val, i) => (
                  <Chip
                    key={i}
                    variant="outline"
                    size="sm"
                    className="text-[10px] uppercase tracking-wide"
                  >
                    {String(val)}
                  </Chip>
                ))}
              {vehicle.warranty?.hasWarranty && (
                <Chip
                  variant="outline"
                  size="sm"
                  className="text-[10px] text-green-600 border-green-200"
                >
                  Warrantied
                </Chip>
              )}
            </div>
          </div>
        )}

        {/* Price and Actions */}
        <div className="flex items-center justify-between">
          <div>
            {vehicle.salePrice && vehicle.salePrice < vehicle.price ? (
              <div className="space-y-1">
                <div className="flex items-center gap-2">
                  <span
                    className={`font-bold text-ink group-hover:text-brand transition-colors ${
                      variant === "featured"
                        ? "text-h4"
                        : variant === "compact" || variant === "inventory"
                        ? "text-base"
                        : "text-h5"
                    }`}
                  >
                    {formatPrice(vehicle.salePrice)}
                  </span>
                  <span className="text-xs text-body line-through">
                    {formatPrice(vehicle.price)}
                  </span>
                </div>
                {variant === "featured" &&
                  vehicle.financing?.monthlyPayment && (
                    <p className="text-body-xs text-body">
                      Starting at ${vehicle.financing.monthlyPayment}/mo
                    </p>
                  )}
              </div>
            ) : (
              <div className="space-y-1">
                <span
                  className={`font-bold text-ink  transition-colors ${
                    variant === "featured"
                      ? "text-h4"
                      : variant === "compact" || variant === "inventory"
                      ? "text-base"
                      : "text-h5"
                  }`}
                >
                  {formatPrice(vehicle.price)}
                </span>
                {variant === "featured" &&
                  vehicle.financing?.monthlyPayment && (
                    <p className="text-body-xs text-body">
                      Starting at ${vehicle.financing.monthlyPayment}/mo
                    </p>
                  )}
              </div>
            )}
          </div>

          {/* Action Section */}
          <div className="flex items-center gap-2">
            {variant === "selectable" && isSelected ? (
              <div className="flex items-center gap-2 text-brand">
                <HiOutlineCheckCircle className="w-4 h-4" />
                <span className="text-xs font-medium">Selected</span>
              </div>
            ) : variant === "selectable" ? (
              <span className="text-xs text-ink group-hover:text-brand font-medium group-hover:translate-x-1 transition-all">
                Select →
              </span>
            ) : showActions ? (
              <div className="flex items-center gap-1">
                {variant === "featured" ? (
                  // Featured variant: Show primary CTA buttons
                  <div className="flex items-center gap-2">
                    {vehicle.status === "sold" ? (
                      <div className="inline-flex items-center gap-1 px-3 py-2 bg-gray-400 text-white text-body-s font-medium rounded-lg cursor-not-allowed">
                        <HiOutlineCalendar className="w-4 h-4" />
                        Sold
                      </div>
                    ) : (
                      <>
                        <Link
                          href={`/book-test-drive?vehicleId=${vehicle._id}`}
                          className="inline-flex items-center gap-1 px-3 py-2 bg-ink text-white text-body-s font-medium rounded-lg hover:bg-ink/90 transition-colors"
                        >
                          <HiOutlineCalendar className="w-4 h-4" />
                          Test Drive
                        </Link>
                        <Link
                          href={`/inventory/${vehicle._id}`}
                          className="inline-flex items-center gap-1 px-3 py-2 border border-border text-ink text-body-s font-medium rounded-lg hover:border-neutral-400 hover:bg-neutral-100 transition-colors"
                        >
                          <HiOutlineEye className="w-4 h-4" />
                          Details
                        </Link>
                      </>
                    )}
                  </div>
                ) : variant === "inventory" ? (
                  // Inventory variant: Compact buttons
                  <div className="flex items-center gap-1">
                    {vehicle.status === "sold" ? (
                      <div className="inline-flex items-center gap-1 px-2 py-1 text-xs font-medium bg-gray-400 text-white rounded-sm cursor-not-allowed">
                        Sold
                      </div>
                    ) : (
                      <>
                        <Link
                          href={`/book-test-drive?vehicleId=${vehicle._id}`}
                          className="inline-flex items-center gap-1 px-2 py-1 text-xs font-medium bg-ink text-primary-50 rounded-sm hover:text-brand transition-colors"
                        >
                          <HiOutlineCalendar className="w-3 h-3" />
                          Test
                        </Link>
                        <Link
                          href={`/inventory/${vehicle._id}`}
                          className="inline-flex items-center gap-1 px-2 py-1 text-xs font-medium bg-ink text-primary-50 rounded-sm hover:text-brand transition-colors"
                        >
                          <HiOutlineEye className="w-3 h-3" />
                          Details
                        </Link>
                      </>
                    )}
                  </div>
                ) : variant !== "compact" ? (
                  vehicle.status === "sold" ? (
                    <div className="inline-flex items-center gap-1 px-3 py-1.5 text-body-s font-medium text-gray-500 cursor-not-allowed">
                      Vehicle Sold
                    </div>
                  ) : (
                    <div className="flex items-center gap-2">
                      <Link
                        href={`/book-test-drive?vehicleId=${vehicle._id}`}
                        className="inline-flex items-center gap-1 px-3 py-1.5 text-body-s font-medium text-ink hover:text-brand transition-colors"
                      >
                        <HiOutlineCalendar className="w-4 h-4" />
                        Test Drive
                      </Link>
                      <Link
                        href={`/inventory/${vehicle._id}`}
                        className="inline-flex items-center gap-1 px-3 py-1.5 text-body-s font-medium text-ink hover:text-brand transition-colors"
                      >
                        <HiOutlineEye className="w-4 h-4" />
                        View Details
                      </Link>
                    </div>
                  )
                ) : vehicle.status === "sold" ? (
                  <div className="inline-flex items-center gap-1 px-3 py-1.5 text-body-s font-medium text-gray-500 cursor-not-allowed">
                    Vehicle Sold
                  </div>
                ) : (
                  <Link
                    href={`/inventory/${vehicle._id}`}
                    className="inline-flex items-center gap-1 px-3 py-1.5 text-body-s font-medium text-ink hover:text-brand transition-colors"
                  >
                    <HiOutlineEye className="w-4 h-4" />
                    View Details
                  </Link>
                )}
              </div>
            ) : vehicle.status === "sold" ? (
              <span className="text-xs text-gray-500 font-medium">
                Vehicle Sold
              </span>
            ) : (
              <span className="text-xs text-ink group-hover:text-brand font-medium group-hover:translate-x-1 transition-all">
                View Details →
              </span>
            )}
          </div>
        </div>
      </div>
    </div>
  );

  // If selectable variant with onSelect handler, make it clickable
  if (variant === "selectable" && onSelect) {
    return <div onClick={() => onSelect(vehicle)}>{cardContent}</div>;
  }

  // If vehicle is sold, don't make it clickable
  if (vehicle.status === "sold") {
    return <div className="cursor-not-allowed">{cardContent}</div>;
  }

  // If not selectable or no actions, wrap in Link to detail page
  if (!showActions || variant === "compact" || variant === "inventory") {
    return (
      <Link href={`/inventory/${vehicle._id}`} className="block">
        {cardContent}
      </Link>
    );
  }

  // Default: just return the card content
  return cardContent;
}

// Export types for use in other components
export type { VehicleCardProps };
