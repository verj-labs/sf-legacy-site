"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { getFeaturedVehicles, getAllVehicles } from "@/lib/sanity/api";
import { Vehicle } from "@/types/vehicle";
import { VehicleCardSkeleton } from "@/components/Skeleton";
import VehicleCard from "@/components/VehicleCard";

export default function FeaturedInventory() {
  const [featuredVehicles, setFeaturedVehicles] = useState<Vehicle[]>([]);
  const [allVehiclesCount, setAllVehiclesCount] = useState<number>(0);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setIsLoading(true);
        setError(null);

        // Fetch featured vehicles and total count in parallel
        const [featured, allVehicles] = await Promise.all([
          getFeaturedVehicles(),
          getAllVehicles(),
        ]);

        setFeaturedVehicles(featured);
        setAllVehiclesCount(allVehicles.length);
      } catch (err) {
        console.error("Error fetching featured vehicles:", err);
        setError("Failed to load vehicles. Please try again later.");
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, []);

  return (
    <section
      id="inventory"
      className="section-padding bg-gradient-to-br from-neutral-100 via-neutral-50 to-neutral-100"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center flex flex-col items-center gap-2">
          <h2 className="text-h2 font-heading font-bold text-neutral-800">
            Featured Vehicles
          </h2>
          <p className="text-body-m text-body ">
            Discover our hand-picked selection of quality used vehicles, each
            thoroughly inspected and ready for their next owner.
          </p>
        </div>

        <div className="my-6 w-40 h-px mx-auto bg-gradient-to-r from-transparent via-neutral-300 to-transparent" />

        {/* Error State */}
        {error && (
          <div className="text-center mb-16">
            <div className="bg-red-50 border border-red-200 rounded-lg p-6 max-w-md mx-auto">
              <p className="text-red-600 font-medium">{error}</p>
              <button
                onClick={() => window.location.reload()}
                className="mt-3 btn-secondary"
              >
                Try Again
              </button>
            </div>
          </div>
        )}

        {/* Loading State */}
        {isLoading && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
            {Array.from({ length: 6 }).map((_, index) => (
              <VehicleCardSkeleton key={index} />
            ))}
          </div>
        )}

        {/* Vehicles Grid */}
        {!isLoading && !error && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
            {featuredVehicles.length === 0 ? (
              <div className="col-span-full text-center py-12">
                <p className="text-body text-body/60 mb-4">
                  No featured vehicles available at the moment.
                </p>
                <Link href="/inventory" className="btn-primary">
                  View All Inventory
                </Link>
              </div>
            ) : (
              featuredVehicles.map((vehicle) => (
                <VehicleCard
                  key={vehicle._id}
                  vehicle={vehicle}
                  variant="featured"
                  showActions={true}
                />
              ))
            )}
          </div>
        )}

        {/* Section CTAs */}
        {!isLoading && !error && (
          <div className="text-center">
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/inventory" className="btn-primary">
                View All Inventory ({allVehiclesCount} vehicles)
              </Link>
              <Link href="/financing" className="btn-secondary">
                Get Pre-Approved
              </Link>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
