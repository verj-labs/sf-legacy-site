"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import PageStartBanner from "@/components/PageStartBanner";
import Chip from "@/components/Chip";
import VehicleCard from "@/components/VehicleCard";
import { Vehicle } from "@/types/vehicle";
import {
  getAllVehicles,
  getVehicleMakes,
  getVehicleBodyTypes,
} from "@/lib/sanity/api";
import { HiAdjustmentsHorizontal, HiXMark, HiMagnifyingGlass } from "react-icons/hi2";

export default function InventoryPage() {
  const [vehicles, setVehicles] = useState<Vehicle[]>([]);
  const [filteredVehicles, setFilteredVehicles] = useState<Vehicle[]>([]);
  const [availableMakes, setAvailableMakes] = useState<string[]>([]);
  const [availableBodyTypes, setAvailableBodyTypes] = useState<string[]>([]);
  const [loading, setLoading] = useState(true);
  const [filtersOpen, setFiltersOpen] = useState(false);

  // Filter states
  const [selectedMake, setSelectedMake] = useState<string>("");
  const [selectedBodyType, setSelectedBodyType] = useState<string>("");
  const [priceRange, setPriceRange] = useState<[number, number]>([0, 100000]);
  const [mileageRange, setMileageRange] = useState<[number, number]>([0, 400000]);
  const [sortBy, setSortBy] = useState<string>("year-desc");

  // Load vehicles and filter options
  useEffect(() => {
    const loadData = async () => {
      try {
        setLoading(true);
        const vehicleData = await getAllVehicles();

        setVehicles(vehicleData);
        setFilteredVehicles(vehicleData);

        // Extract makes and body types from the fetched data
        const makes = [...new Set(vehicleData.map((v) => v.make))].sort();
        const bodyTypes = [
          ...new Set(vehicleData.map((v) => v.bodyType)),
        ].sort();

        setAvailableMakes(makes);
        setAvailableBodyTypes(bodyTypes);
      } catch (error) {
        console.error("Error loading vehicle data:", error);
      } finally {
        setLoading(false);
      }
    };

    loadData();
  }, []);

  // Apply filters whenever filter criteria change
  useEffect(() => {
    let filtered = [...vehicles];

    // Apply make filter
    if (selectedMake) {
      filtered = filtered.filter((vehicle) => vehicle.make === selectedMake);
    }

    // Apply body type filter
    if (selectedBodyType) {
      filtered = filtered.filter(
        (vehicle) => vehicle.bodyType === selectedBodyType
      );
    }

    // Apply price range filter
    filtered = filtered.filter(
      (vehicle) =>
        vehicle.price >= priceRange[0] && vehicle.price <= priceRange[1]
    );

    // Apply mileage range filter
    filtered = filtered.filter(
      (vehicle) =>
        vehicle.odometer >= mileageRange[0] && vehicle.odometer <= mileageRange[1]
    );

    // Apply sorting
    switch (sortBy) {
      case "year-desc":
        filtered.sort((a, b) => b.year - a.year);
        break;
      case "year-asc":
        filtered.sort((a, b) => a.year - b.year);
        break;
      case "price-asc":
        filtered.sort((a, b) => a.price - b.price);
        break;
      case "price-desc":
        filtered.sort((a, b) => b.price - a.price);
        break;
      case "mileage-asc":
        filtered.sort((a, b) => a.odometer - b.odometer);
        break;
      case "mileage-desc":
        filtered.sort((a, b) => b.odometer - a.odometer);
        break;
      default:
        break;
    }

    setFilteredVehicles(filtered);
  }, [vehicles, selectedMake, selectedBodyType, priceRange, mileageRange, sortBy]);

  // Reset filters
  const resetFilters = () => {
    setSelectedMake("");
    setSelectedBodyType("");
    setPriceRange([0, 100000]);
    setMileageRange([0, 400000]);
    setSortBy("year-desc");
  };

  if (loading) {
    return (
      <div className="min-h-screen">
        <div className="absolute inset-0 bg-gradient-to-br from-neutral-100 via-neutral-50 to-neutral-100" />
        <div className="relative max-w-7xl mx-auto px-4 py-16">
          <div className="flex justify-center items-center h-64">
            <div className="text-center">
              <div className="animate-spin rounded-full h-12 w-12 border-2 border-neutral-300 border-t-brand mx-auto"></div>
              <p className="mt-4 text-body text-body/80">Loading vehicles...</p>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen relative">
      <div className="absolute inset-0 bg-gradient-to-br from-neutral-100 via-neutral-50 to-neutral-100 pointer-events-none" />
      {/* Hero Section */}
      <PageStartBanner
        title="Browse Our Inventory"
        description="Find your perfect vehicle from our extensive collection of quality used cars, trucks, and SUVs."
      >
        <div className="hidden lg:flex flex-wrap gap-2">
          <Chip variant="overlay">
            {vehicles.length} Available
          </Chip>
          <Chip variant="overlay">
            Quality Inspected
          </Chip>
          <Chip variant="overlay">
            Competitive Pricing
          </Chip>
        </div>
      </PageStartBanner>

      {/* Main Content */}
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 lg:py-10">
        <div className="flex flex-col xl:flex-row gap-4 lg:gap-8">
          {/* Filters Sidebar */}
          <div className="xl:w-80 flex-shrink-0">
            <div className="bg-surface rounded-xl shadow-xs border border-border sticky top-6">
              {/* Mobile Filter Toggle */}
              <button
                onClick={() => setFiltersOpen(!filtersOpen)}
                className="xl:hidden w-full flex items-center justify-between p-5 border-b border-border hover:bg-surface-muted transition-colors"
              >
                <div className="flex items-center gap-2">
                  <HiAdjustmentsHorizontal className="w-4 h-4 text-brand" />
                  <h2 className="text-base font-heading font-semibold text-neutral-800 m-0">
                    Filters ({vehicles.length} vehicles)
                  </h2>
                </div>
                <div className="flex items-center gap-3">
                  {(selectedMake || selectedBodyType || priceRange[0] > 0 || priceRange[1] < 100000 || mileageRange[0] > 0 || mileageRange[1] < 400000) && (
                    <span className="bg-brand text-white text-xs px-2 py-1 rounded-full">
                      Active
                    </span>
                  )}
                  <svg
                    className={`w-5 h-5 text-body/60 transform transition-transform ${
                      filtersOpen ? 'rotate-180' : ''
                    }`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </div>
              </button>

              {/* Desktop Filter Header (Always Visible) */}
              <div className="hidden xl:flex items-center justify-between p-5 border-b border-border">
                <div className="flex items-center gap-2">
                  <HiAdjustmentsHorizontal className="w-4 h-4 text-brand" />
                  <h2 className="text-base font-heading font-semibold text-ink m-0">
                    Filters
                  </h2>
                </div>
                <button
                  onClick={resetFilters}
                  className="inline-flex items-center gap-1 text-body-sm text-body/70 hover:text-brand font-medium transition-colors"
                >
                  <HiXMark className="w-3.5 h-3.5" />
                  Clear
                </button>
              </div>

              {/* Filter Content - Collapsible on Mobile */}
              <div className={`${filtersOpen ? 'block' : 'hidden'} xl:block`}>
                {/* Mobile Clear Button */}
                <div className="xl:hidden p-5 pb-3 border-b border-border">
                  <button
                    onClick={resetFilters}
                    className="inline-flex items-center gap-1 text-body-sm text-body/70 hover:text-brand font-medium transition-colors"
                  >
                    <HiXMark className="w-3.5 h-3.5" />
                    Clear All Filters
                  </button>
                </div>

                <div className="p-5 space-y-4">
                {/* Make Filter */}
                <div>
                  <label
                    htmlFor="make"
                    className="block text-body-sm font-medium text-ink mb-1.5"
                  >
                    Make
                  </label>
                  <select
                    id="make"
                    value={selectedMake}
                    onChange={(e) => setSelectedMake(e.target.value)}
                    className="w-full border border-border rounded-lg px-2.5 py-2 text-body-sm text-ink bg-surface focus:ring-1 focus:ring-brand/20 focus:border-brand transition-colors"
                  >
                    <option value="">All Makes</option>
                    {availableMakes.map((make) => (
                      <option key={make} value={make}>
                        {make}
                      </option>
                    ))}
                  </select>
                </div>

                {/* Body Type Filter */}
                <div>
                  <label
                    htmlFor="bodyType"
                    className="block text-body-sm font-medium text-ink mb-1.5"
                  >
                    Body Type
                  </label>
                  <select
                    id="bodyType"
                    value={selectedBodyType}
                    onChange={(e) => setSelectedBodyType(e.target.value)}
                    className="w-full border border-border rounded-lg px-2.5 py-2 text-body-sm text-ink bg-surface focus:ring-1 focus:ring-brand/20 focus:border-brand transition-colors"
                  >
                    <option value="">All Types</option>
                    {availableBodyTypes.map((type) => (
                      <option key={type} value={type}>
                        {type.charAt(0).toUpperCase() + type.slice(1)}
                      </option>
                    ))}
                  </select>
                </div>

                {/* Price Range */}
                <div>
                  <label
                    htmlFor="priceRange"
                    className="block text-body-sm font-medium text-ink mb-1.5"
                  >
                    Price Range
                  </label>
                  <div className="space-y-2">
                    <div className="flex items-center justify-between text-body-xs text-body/60">
                      <span>$0</span>
                      <span className="font-medium text-ink">
                        ${priceRange[1].toLocaleString()}
                      </span>
                      <span>$100k+</span>
                    </div>
                    <input
                      type="range"
                      id="priceRange"
                      min="0"
                      max="100000"
                      step="1000"
                      value={priceRange[1]}
                      onChange={(e) =>
                        setPriceRange([priceRange[0], parseInt(e.target.value)])
                      }
                      className="w-full h-1.5 bg-neutral-200 rounded-lg appearance-none cursor-pointer [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:w-4 [&::-webkit-slider-thumb]:h-4 [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:bg-brand [&::-webkit-slider-thumb]:shadow-sm"
                    />
                    <div className="flex items-center gap-1.5 text-body-xs">
                      <input
                        type="number"
                        placeholder="Min"
                        value={priceRange[0] || ""}
                        onChange={(e) =>
                          setPriceRange([
                            parseInt(e.target.value) || 0,
                            priceRange[1],
                          ])
                        }
                        className="flex-1 min-w-0 border border-border rounded px-1.5 py-1 text-body-xs bg-surface focus:ring-1 focus:ring-brand/20 focus:border-brand"
                      />
                      <span className="text-body/60 flex-shrink-0">to</span>
                      <input
                        type="number"
                        placeholder="Max"
                        value={priceRange[1] || ""}
                        onChange={(e) =>
                          setPriceRange([
                            priceRange[0],
                            parseInt(e.target.value) || 100000,
                          ])
                        }
                        className="flex-1 min-w-0 border border-border rounded px-1.5 py-1 text-body-xs bg-surface focus:ring-1 focus:ring-brand/20 focus:border-brand"
                      />
                    </div>
                  </div>
                </div>

                {/* Mileage Range Slider */}
                <div>
                  <label
                    htmlFor="mileageRange"
                    className="block text-body-sm font-medium text-ink mb-1.5"
                  >
                    Mileage Range
                  </label>
                  <div className="space-y-2">
                    <div className="flex items-center justify-between text-body-xs text-body/60">
                      <span>0</span>
                      <span className="font-medium text-ink">
                        {mileageRange[1].toLocaleString()} miles
                      </span>
                      <span>400k+</span>
                    </div>
                    <input
                      type="range"
                      id="mileageRange"
                      min="0"
                      max="400000"
                      step="5000"
                      value={mileageRange[1]}
                      onChange={(e) =>
                        setMileageRange([mileageRange[0], parseInt(e.target.value)])
                      }
                      className="w-full h-1.5 bg-neutral-200 rounded-lg appearance-none cursor-pointer [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:w-4 [&::-webkit-slider-thumb]:h-4 [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:bg-brand [&::-webkit-slider-thumb]:shadow-sm"
                    />
                    <div className="flex items-center gap-1.5 text-body-xs">
                      <input
                        type="number"
                        placeholder="Min"
                        value={mileageRange[0] || ""}
                        onChange={(e) =>
                          setMileageRange([
                            parseInt(e.target.value) || 0,
                            mileageRange[1],
                          ])
                        }
                        className="flex-1 min-w-0 border border-border rounded px-1.5 py-1 text-body-xs bg-surface focus:ring-1 focus:ring-brand/20 focus:border-brand"
                      />
                      <span className="text-body/60 flex-shrink-0">to</span>
                      <input
                        type="number"
                        placeholder="Max"
                        value={mileageRange[1] || ""}
                        onChange={(e) =>
                          setMileageRange([
                            mileageRange[0],
                            parseInt(e.target.value) || 400000,
                          ])
                        }
                        className="flex-1 min-w-0 border border-border rounded px-1.5 py-1 text-body-xs bg-surface focus:ring-1 focus:ring-brand/20 focus:border-brand"
                      />
                    </div>
                  </div>
                </div>

                {/* Year Range - Compact */}
                <div>
                  <label className="block text-body-sm font-medium text-ink mb-1.5">
                    Year Range
                  </label>
                  <div className="flex items-center gap-1.5">
                    <select
                      value=""
                      onChange={(e) => {/* Handle year min */}}
                      className="flex-1 min-w-0 border border-border rounded-lg px-2 py-1.5 text-body-xs bg-surface focus:ring-1 focus:ring-brand/20 focus:border-brand"
                    >
                      <option value="">Min</option>
                      {Array.from({ length: 20 }, (_, i) => 2025 - i).map(
                        (year) => (
                          <option key={year} value={year}>
                            {year}
                          </option>
                        )
                      )}
                    </select>
                    <span className="text-body/60 text-body-xs flex-shrink-0">to</span>
                    <select
                      value=""
                      onChange={(e) => {/* Handle year max */}}
                      className="flex-1 min-w-0 border border-border rounded-lg px-2 py-1.5 text-body-xs bg-surface focus:ring-1 focus:ring-brand/20 focus:border-brand"
                    >
                      <option value="">Max</option>
                      {Array.from({ length: 20 }, (_, i) => 2025 - i).map(
                        (year) => (
                          <option key={year} value={year}>
                            {year}
                          </option>
                        )
                      )}
                    </select>
                  </div>
                </div>
                </div>
              </div>
            </div>
          </div>

          {/* Content Area */}
          <div className="flex-1 min-w-0">
            {/* Results Header */}
            <div className="bg-surface rounded-xl shadow-xs border border-border p-3 sm:p-5 mb-4 sm:mb-6">
              <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-0 sm:gap-4">
                <div>
                  <h3 className="text-base sm:text-lg font-heading font-semibold text-ink mb-0.5 sm:mb-1">
                    {filteredVehicles.length} Vehicle{filteredVehicles.length !== 1 ? "s" : ""} Found
                  </h3>
                  <p className="text-xs sm:text-body-sm text-body/70 mb-2 lg:mb-4 lg:block hidden">
                    Showing {filteredVehicles.length > 0 ? "1" : "0"}–{filteredVehicles.length} of {vehicles.length} total
                  </p>
                </div>

                <div className="flex items-center gap-2 sm:gap-3 w-full sm:w-auto">
                  <label htmlFor="sort" className="text-xs sm:text-body-sm font-medium text-ink whitespace-nowrap">
                    Sort by:
                  </label>
                  <select
                    id="sort"
                    value={sortBy}
                    onChange={(e) => setSortBy(e.target.value)}
                    className="flex-1 sm:flex-none border border-border rounded-lg px-2 sm:px-3 py-1.5 sm:py-2 text-xs sm:text-body-sm bg-surface focus:ring-2 focus:ring-brand/20 focus:border-brand transition-colors"
                  >
                    <option value="year-desc">Newest First</option>
                    <option value="year-asc">Oldest First</option>
                    <option value="price-asc">Price: Low to High</option>
                    <option value="price-desc">Price: High to Low</option>
                    <option value="mileage-asc">Lowest Mileage</option>
                    <option value="year-desc">Newest First</option>
                    <option value="year-asc">Oldest First</option>
                    <option value="price-asc">Price: Low to High</option>
                    <option value="price-desc">Price: High to Low</option>
                    <option value="mileage-asc">Lowest Mileage</option>
                    <option value="mileage-desc">Highest Mileage</option>
                  </select>
                </div>
              </div>
            </div>

            {/* Vehicle Grid */}
            {filteredVehicles.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
                {filteredVehicles.map((vehicle) => (
                  <VehicleCard
                    key={vehicle._id}
                    vehicle={vehicle}
                    variant="inventory"
                    showActions={true}
                  />
                ))}
              </div>
            ) : (
              <div className="bg-surface rounded-xl shadow-xs border border-border p-12 text-center">
                <div className="max-w-md mx-auto">
                  <div className="w-20 h-20 bg-neutral-100 rounded-full flex items-center justify-center mx-auto mb-6 ring-1 ring-neutral-300">
                    <HiMagnifyingGlass className="w-10 h-10 text-body/60" />
                  </div>
                  <h3 className="text-xl font-heading font-semibold text-ink mb-2">
                    No vehicles found
                  </h3>
                  <p className="text-body text-body/70 mb-6">
                    Try adjusting your filters to see more results.
                  </p>
                  <button
                    onClick={resetFilters}
                    className="btn-primary px-6 py-3 rounded-lg font-medium"
                  >
                    Reset All Filters
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
