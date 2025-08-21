"use client";

import { useState, useEffect } from "react";
import { useParams } from "next/navigation";
import Link from "next/link";
import TestDriveModal from "@/components/TestDriveModal";
import { VehicleCardSkeleton } from "@/components/Skeleton";
import { Vehicle } from "@/types/vehicle";
import { getVehicleById, getRelatedVehicles } from "@/lib/sanity/api";
import {
  parseVehicleFeatures,
  formatPrice,
  formatMileage,
  getVehicleTitle,
} from "@/utils/vehicleHelpers";

export default function VehicleDetailPage() {
  const params = useParams();
  const [vehicle, setVehicle] = useState<Vehicle | null>(null);
  const [relatedVehicles, setRelatedVehicles] = useState<Vehicle[]>([]);
  const [loading, setLoading] = useState(true);
  const [relatedLoading, setRelatedLoading] = useState(true);
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);
  const [activeTab, setActiveTab] = useState("overview");
  const [showContactForm, setShowContactForm] = useState(false);
  const [showTestDriveModal, setShowTestDriveModal] = useState(false);

  useEffect(() => {
    const loadVehicleData = async () => {
      if (!params.id) return;

      try {
        setLoading(true);
        const vehicleData = await getVehicleById(params.id as string);

        if (vehicleData) {
          setVehicle(vehicleData);

          // Load related vehicles
          setRelatedLoading(true);
          const related = await getRelatedVehicles(
            vehicleData.make,
            vehicleData._id
          );
          setRelatedVehicles(related);
          setRelatedLoading(false);
        }
      } catch (error) {
        console.error("Error loading vehicle data:", error);
      } finally {
        setLoading(false);
      }
    };

    loadVehicleData();
  }, [params.id]);

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(price);
  };

  const formatMileage = (mileage: number) => {
    return new Intl.NumberFormat("en-US").format(mileage);
  };

  const tabs = [
    { id: "overview", label: "Overview" },
    { id: "features", label: "Features & Options" },
    { id: "specifications", label: "Specifications" },
    { id: "financing", label: "Financing" },
    { id: "warranty", label: "Warranty" },
  ];

  // Loading state
  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50">
        <div className="container mx-auto px-4 py-8">
          <div className="flex justify-center items-center h-64">
            <div className="text-center">
              <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary mx-auto"></div>
              <p className="mt-4 text-gray-600">Loading vehicle details...</p>
            </div>
          </div>
        </div>
      </div>
    );
  }

  // Vehicle not found
  if (!vehicle) {
    return (
      <div className="min-h-screen bg-gray-50">
        <div className="container mx-auto px-4 py-8">
          <div className="text-center py-12">
            <h1 className="text-2xl font-bold text-gray-900 mb-4">
              Vehicle Not Found
            </h1>
            <p className="text-gray-600 mb-6">
              The vehicle you're looking for doesn't exist or has been removed.
            </p>
            <Link
              href="/inventory"
              className="bg-primary text-white px-6 py-3 rounded-lg font-medium hover:bg-primary-dark transition-colors"
            >
              Browse All Vehicles
            </Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 lg:py-8">
        {/* Breadcrumb */}
        <div className="flex items-center text-xs sm:text-sm text-gray-500 mb-4 sm:mb-6">
          <Link href="/" className="hover:text-gray-900 transition-colors">
            Home
          </Link>
          <span className="mx-2">/</span>
          <Link href="/inventory" className="hover:text-gray-900 transition-colors">
            Inventory
          </Link>
          <span className="mx-2">/</span>
          <span className="text-gray-900 font-medium">
            {vehicle.year} {vehicle.make} {vehicle.model}
          </span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-6 lg:space-y-8">
            {/* Image Gallery */}
            <div className="bg-white rounded-xl border border-gray-200 shadow-sm overflow-hidden">
              <div className="aspect-[4/3] bg-gray-100">
                <img
                  src={
                    vehicle.images?.[selectedImageIndex] ||
                    "/api/placeholder/600/400"
                  }
                  alt={`${vehicle.year} ${vehicle.make} ${
                    vehicle.model
                  } - Image ${selectedImageIndex + 1}`}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Thumbnail Strip */}
              <div className="p-4 sm:p-6">
                <div className="flex gap-2 overflow-x-auto">
                  {vehicle.images?.map((image: string, index: number) => (
                    <button
                      key={index}
                      onClick={() => setSelectedImageIndex(index)}
                      className={`flex-shrink-0 w-16 h-12 sm:w-20 sm:h-16 rounded-lg overflow-hidden border-2 transition-all duration-200 ${
                        index === selectedImageIndex
                          ? "border-gray-900 ring-2 ring-gray-200"
                          : "border-gray-200 hover:border-gray-300"
                      }`}
                    >
                      <img
                        src={image || "/api/placeholder/80/60"}
                        alt={`Thumbnail ${index + 1}`}
                        className="w-full h-full object-cover"
                      />
                    </button>
                  )) || []}
                </div>
              </div>
            </div>

            {/* Vehicle Info Tabs */}
            <div className="bg-white rounded-xl border border-gray-200 shadow-sm">
              {/* Tab Navigation */}
              <div className="border-b border-gray-200">
                <nav className="flex overflow-x-auto -mb-px">
                  {tabs.map((tab) => (
                    <button
                      key={tab.id}
                      onClick={() => setActiveTab(tab.id)}
                      className={`px-4 sm:px-6 py-3 sm:py-4 text-xs sm:text-sm font-medium whitespace-nowrap border-b-2 transition-all duration-200 ${
                        activeTab === tab.id
                          ? "border-gray-900 text-gray-900 bg-gray-50"
                          : "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300"
                      }`}
                    >
                      {tab.label}
                    </button>
                  ))}
                </nav>
              </div>

              {/* Tab Content */}
              <div className="p-4 sm:p-6">
                {activeTab === "overview" && (
                  <div className="space-y-6">
                    <div>
                      <h3 className="text-base sm:text-lg font-heading font-semibold text-gray-900 mb-3">
                        Description
                      </h3>
                      <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
                        {vehicle.description}
                      </p>
                    </div>

                    <div>
                      <h3 className="text-base sm:text-lg font-heading font-semibold text-gray-900 mb-3">
                        Vehicle Highlights
                      </h3>
                      <ul className="space-y-3">
                        {vehicle.highlights.map((highlight, index) => (
                          <li
                            key={index}
                            className="flex items-center text-sm sm:text-base text-gray-600"
                          >
                            <svg
                              className="w-5 h-5 text-emerald-500 mr-3 flex-shrink-0"
                              fill="currentColor"
                              viewBox="0 0 20 20"
                            >
                              <path
                                fillRule="evenodd"
                                d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                                clipRule="evenodd"
                              />
                            </svg>
                            {highlight}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                )}

                {activeTab === "features" && (
                  <div>
                    <h3 className="text-base sm:text-lg font-heading font-semibold text-gray-900 mb-4">
                      Features & Options
                    </h3>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      {parseVehicleFeatures(vehicle.features).map(
                        (feature, index) => (
                          <div
                            key={index}
                            className="flex items-center text-sm text-gray-600"
                          >
                            <svg
                              className="w-4 h-4 text-gray-900 mr-3 flex-shrink-0"
                              fill="currentColor"
                              viewBox="0 0 20 20"
                            >
                              <path
                                fillRule="evenodd"
                                d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                                clipRule="evenodd"
                              />
                            </svg>
                            <span>{feature}</span>
                          </div>
                        )
                      )}
                      {parseVehicleFeatures(vehicle.features).length === 0 && (
                        <div className="col-span-full text-center py-8 text-gray-500">
                          No features listed for this vehicle.
                        </div>
                      )}
                    </div>
                  </div>
                )}

                {activeTab === "specifications" && (
                  <div>
                    <h3 className="text-base sm:text-lg font-heading font-semibold text-gray-900 mb-4">
                      Vehicle Specifications
                    </h3>
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                      <div>
                        <h4 className="font-medium text-gray-900 mb-3">
                          Engine & Performance
                        </h4>
                        <div className="space-y-2 text-sm">
                          <div className="flex justify-between py-1">
                            <span className="text-gray-600">Engine:</span>
                            <span className="font-medium text-gray-900">
                              {vehicle.engineDesc}
                            </span>
                          </div>
                          <div className="flex justify-between py-1">
                            <span className="text-gray-600">Transmission:</span>
                            <span className="font-medium text-gray-900">
                              {vehicle.transmission}
                            </span>
                          </div>
                          <div className="flex justify-between py-1">
                            <span className="text-gray-600">Drivetrain:</span>
                            <span className="font-medium text-gray-900">
                              {vehicle.drivetrain}
                            </span>
                          </div>
                          <div className="flex justify-between py-1">
                            <span className="text-gray-600">Fuel Type:</span>
                            <span className="font-medium text-gray-900">
                              {vehicle.fuelType}
                            </span>
                          </div>
                          <div className="flex justify-between py-1">
                            <span className="text-gray-600">
                              MPG City/Highway:
                            </span>
                            <span className="font-medium text-gray-900">
                              {vehicle.mpgCity || "N/A"}/
                              {vehicle.mpgHighway || "N/A"}
                            </span>
                          </div>
                        </div>
                      </div>

                      <div>
                        <h4 className="font-medium text-gray-900 mb-3">
                          Vehicle Details
                        </h4>
                        <div className="space-y-2 text-sm">
                          <div className="flex justify-between py-1">
                            <span className="text-gray-600">VIN:</span>
                            <span className="font-medium font-mono text-xs text-gray-900">
                              {vehicle.vin}
                            </span>
                          </div>
                          <div className="flex justify-between py-1">
                            <span className="text-gray-600">Stock #:</span>
                            <span className="font-medium text-gray-900">
                              {vehicle.stockNum}
                            </span>
                          </div>
                          <div className="flex justify-between py-1">
                            <span className="text-gray-600">Body Style:</span>
                            <span className="font-medium text-gray-900">
                              {vehicle.bodyType}
                            </span>
                          </div>
                          <div className="flex justify-between py-1">
                            <span className="text-gray-600">
                              Exterior Color:
                            </span>
                            <span className="font-medium text-gray-900">
                              {vehicle.exteriorColor}
                            </span>
                          </div>
                          <div className="flex justify-between py-1">
                            <span className="text-gray-600">Interior:</span>
                            <span className="font-medium text-gray-900">
                              {vehicle.interiorColor}
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                )}

                {activeTab === "financing" && (
                  <div>
                    <h3 className="text-base sm:text-lg font-heading font-semibold text-gray-900 mb-4">
                      Financing Information
                    </h3>
                    <div className="bg-gradient-to-r from-gray-50 to-gray-100 rounded-xl p-4 sm:p-6 mb-6">
                      <h4 className="font-medium text-gray-900 mb-4">
                        Estimated Monthly Payment
                      </h4>
                      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 text-center">
                        <div>
                          <div className="text-xl sm:text-2xl font-bold text-gray-900">
                            {vehicle.financing?.monthlyPayment
                              ? formatPrice(vehicle.financing.monthlyPayment)
                              : "Contact for details"}
                          </div>
                          <div className="text-xs sm:text-sm text-gray-600">per month</div>
                        </div>
                        <div>
                          <div className="text-lg sm:text-xl font-semibold text-gray-900">
                            {vehicle.financing?.downPayment
                              ? formatPrice(vehicle.financing.downPayment)
                              : "TBD"}
                          </div>
                          <div className="text-xs sm:text-sm text-gray-600">
                            down payment
                          </div>
                        </div>
                        <div>
                          <div className="text-lg sm:text-xl font-semibold text-gray-900">
                            {vehicle.financing?.apr
                              ? `${vehicle.financing.apr}%`
                              : "As low as 2.9%"}
                          </div>
                          <div className="text-xs sm:text-sm text-gray-600">APR</div>
                        </div>
                        <div>
                          <div className="text-lg sm:text-xl font-semibold text-gray-900">
                            {vehicle.financing?.term || "60"}
                          </div>
                          <div className="text-xs sm:text-sm text-gray-600">months</div>
                        </div>
                      </div>
                    </div>
                    <p className="text-xs sm:text-sm text-gray-600">
                      *Estimated payment based on price, down payment, term and
                      rate shown. Payment may vary based on your credit
                      approval. Final terms may vary. Contact us for
                      personalized financing options.
                    </p>
                  </div>
                )}

                                {activeTab === "warranty" && (
                  <div>
                    <h3 className="text-base sm:text-lg font-heading font-semibold text-gray-900 mb-4">
                      Warranty Information
                    </h3>
                    <div className="space-y-4">
                      <div className="bg-gradient-to-r from-emerald-50 to-green-50 border border-emerald-200 rounded-xl p-4 sm:p-6">
                        <h4 className="font-medium text-gray-900 mb-2">
                          Extended Warranty Available
                        </h4>
                        <p className="text-sm text-gray-600">
                          Protect your investment with our comprehensive
                          extended warranty options covering major components
                          and systems.
                        </p>
                      </div>
                      {vehicle.warranty && vehicle.warranty.hasWarranty ? (
                        <div className="border border-gray-200 rounded-xl p-4 sm:p-5">
                          <h5 className="font-medium text-gray-900 mb-2">
                            Warranty Coverage
                          </h5>
                          <p className="text-sm text-gray-600 mb-3">
                            {vehicle.warranty.warrantyDescription || 
                             "This vehicle comes with manufacturer warranty coverage."}
                          </p>
                          {vehicle.warranty.extendedAvailable && (
                            <div className="text-sm text-emerald-600 font-medium">
                              Extended warranty options available
                            </div>
                          )}
                        </div>
                      ) : (
                        <div className="border border-gray-200 rounded-xl p-4 sm:p-5">
                          <h5 className="font-medium text-gray-900 mb-2">
                            Standard Coverage
                          </h5>
                          <p className="text-sm text-gray-600">
                            This vehicle comes with manufacturer warranty.
                            Extended warranty options are available for
                            additional peace of mind.
                          </p>
                        </div>
                      )}
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1">
            <div className="sticky top-8 space-y-6">
              {/* Vehicle Summary Card */}
              <div className="bg-white rounded-xl border border-gray-200 shadow-sm p-4 sm:p-6">
                <h1 className="text-xl sm:text-2xl font-heading font-bold text-gray-900 mb-2">
                  {vehicle.year} {vehicle.make} {vehicle.model} {vehicle.trim}
                </h1>

                <div className="flex items-center justify-between mb-4">
                  <div className="text-2xl sm:text-3xl font-heading font-bold text-gray-900">
                    {formatPrice(vehicle.price)}
                  </div>
                  <div className="text-xs sm:text-sm text-gray-600">
                    Stock #{vehicle.stockNum}
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-3 sm:gap-4 mb-6 text-sm">
                  <div>
                    <span className="text-gray-600">Mileage:</span>
                    <div className="font-medium text-gray-900">
                      {formatMileage(vehicle.odometer)} miles
                    </div>
                  </div>
                  <div>
                    <span className="text-gray-600">Body Style:</span>
                    <div className="font-medium text-gray-900">{vehicle.bodyType}</div>
                  </div>
                  <div>
                    <span className="text-gray-600">Transmission:</span>
                    <div className="font-medium text-gray-900">{vehicle.transmission}</div>
                  </div>
                  <div>
                    <span className="text-gray-600">Fuel Economy:</span>
                    <div className="font-medium text-gray-900">
                      {vehicle.mpgCity || "N/A"}/{vehicle.mpgHighway || "N/A"}{" "}
                      MPG
                    </div>
                  </div>
                </div>

                <div className="space-y-3">
                  <button
                    onClick={() => setShowTestDriveModal(true)}
                    className="w-full bg-neutral-800 text-white py-3 px-4 rounded-lg font-medium hover:bg-neutral-700 transition-colors text-sm sm:text-base"
                  >
                    Schedule Test Drive
                  </button>
                  <button
                    onClick={() => setShowContactForm(true)}
                    className="w-full bg-white text-neutral-800 border-2 border-neutral-800 py-3 px-4 rounded-lg font-medium hover:bg-neutral-50 transition-colors text-sm sm:text-base"
                  >
                    Get More Info
                  </button>
                  <div className="grid grid-cols-2 gap-2">
                    <button className="bg-gray-100 text-gray-700 py-2 px-3 rounded-lg text-xs sm:text-sm font-medium hover:bg-gray-200 transition-colors">
                      Calculate Payment
                    </button>
                    <button className="bg-gray-100 text-gray-700 py-2 px-3 rounded-lg text-xs sm:text-sm font-medium hover:bg-gray-200 transition-colors">
                      Trade-In Value
                    </button>
                  </div>
                </div>
              </div>

              {/* Contact Info */}
              <div className="bg-white rounded-xl border border-gray-200 shadow-sm p-4 sm:p-6">
                <h3 className="text-base sm:text-lg font-heading font-semibold text-gray-900 mb-4">
                  Contact Information
                </h3>
                <div className="space-y-3 text-sm sm:text-base">
                  <div className="flex items-center">
                    <svg
                      className="w-4 h-4 text-gray-400 mr-3 flex-shrink-0"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                      />
                    </svg>
                    <a href="tel:5551234567" className="text-gray-900 hover:text-neutral-800 transition-colors">
                      (555) 123-4567
                    </a>
                  </div>
                  <div className="flex items-center">
                    <svg
                      className="w-4 h-4 text-gray-400 mr-3 flex-shrink-0"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                      />
                    </svg>
                    <a href="mailto:sales@sflegacyautos.com" className="text-gray-900 hover:text-neutral-800 transition-colors">
                      sales@sflegacyautos.com
                    </a>
                  </div>
                  <div className="flex items-start">
                    <svg
                      className="w-4 h-4 text-gray-400 mr-3 mt-0.5 flex-shrink-0"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                      />
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                      />
                    </svg>
                    <span className="text-gray-900">
                      123 Auto Row
                      <br />
                      San Francisco, CA 94102
                    </span>
                  </div>
                </div>
              </div>

              {/* Hours */}
              <div className="bg-white rounded-xl border border-gray-200 shadow-sm p-4 sm:p-6">
                <h3 className="text-base sm:text-lg font-heading font-semibold text-gray-900 mb-4">
                  Hours of Operation
                </h3>
                <div className="space-y-2 text-sm sm:text-base">
                  <div className="flex justify-between">
                    <span className="text-gray-600">Monday - Friday:</span>
                    <span className="font-medium text-gray-900">9:00 AM - 7:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Saturday:</span>
                    <span className="font-medium text-gray-900">9:00 AM - 6:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Sunday:</span>
                    <span className="font-medium text-gray-900">11:00 AM - 5:00 PM</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Related Vehicles */}
        <div className="mt-12 sm:mt-16">
          <h2 className="text-xl sm:text-2xl font-heading font-bold text-gray-900 mb-6 sm:mb-8">
            More {vehicle.make} Vehicles
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            {relatedLoading ? (
              // Show skeleton loading for related vehicles
              Array.from({ length: 3 }).map((_, index) => (
                <VehicleCardSkeleton key={`skeleton-${index}`} />
              ))
            ) : relatedVehicles.length > 0 ? (
              // Show actual related vehicles
              relatedVehicles.map((relatedVehicle) => (
                <Link
                  key={relatedVehicle._id}
                  href={`/inventory/${relatedVehicle._id}`}
                  className="group bg-white rounded-xl border border-gray-200 shadow-sm hover:shadow-lg hover:border-gray-300 transition-all duration-300 overflow-hidden"
                >
                  <div className="aspect-[4/3] bg-gray-200 overflow-hidden">
                    <img
                      src={
                        relatedVehicle.images?.[0] || "/api/placeholder/400/300"
                      }
                      alt={`${relatedVehicle.year} ${relatedVehicle.make} ${relatedVehicle.model}`}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <div className="p-4 sm:p-5">
                    <h3 className="font-heading font-bold text-gray-900 mb-2 group-hover:text-neutral-800 transition-colors text-sm sm:text-base">
                      {relatedVehicle.year} {relatedVehicle.make}{" "}
                      {relatedVehicle.model} {relatedVehicle.trim}
                    </h3>
                    <div className="flex items-center justify-between">
                      <div className="text-lg sm:text-xl font-bold text-gray-900">
                        {formatPrice(relatedVehicle.price)}
                      </div>
                      <div className="text-xs sm:text-sm text-gray-600">
                        {formatMileage(relatedVehicle.odometer)} miles
                      </div>
                    </div>
                  </div>
                </Link>
              ))
            ) : (
              // No related vehicles found
              <div className="col-span-full text-center py-8">
                <p className="text-sm sm:text-base text-gray-600">
                  No similar vehicles available at this time.
                </p>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Test Drive Modal */}
      <TestDriveModal
        isOpen={showTestDriveModal}
        onClose={() => setShowTestDriveModal(false)}
        vehicle={vehicle}
      />

      {/* Contact Form Modal */}
      {showContactForm && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-lg max-w-md w-full p-6">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-heading font-semibold text-gray-900">
                Request Information
              </h3>
              <button
                onClick={() => setShowContactForm(false)}
                className="text-gray-400 hover:text-gray-600"
              >
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>

            <p className="text-gray-600 mb-4">
              Get more information about this {vehicle.year} {vehicle.make}{" "}
              {vehicle.model}
            </p>

            <form className="space-y-4">
              <div>
                <input
                  type="text"
                  placeholder="Your Name"
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                />
              </div>
              <div>
                <input
                  type="email"
                  placeholder="Email Address"
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                />
              </div>
              <div>
                <input
                  type="tel"
                  placeholder="Phone Number"
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                />
              </div>
              <div>
                <textarea
                  placeholder={`I'm interested in the ${vehicle.year} ${vehicle.make} ${vehicle.model} (Stock #${vehicle.stockNum}). Please contact me with more information.`}
                  rows={3}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                ></textarea>
              </div>
              <div className="flex gap-3">
                <button
                  type="button"
                  onClick={() => setShowContactForm(false)}
                  className="flex-1 px-4 py-2 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-50 transition-colors"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="flex-1 px-4 py-2 bg-primary text-white rounded-lg hover:bg-primary/90 transition-colors"
                >
                  Send Request
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
