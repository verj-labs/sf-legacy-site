import { sanityClient, urlFor, USE_SANITY_DATA } from "./config";
import { Vehicle } from "@/types/vehicle";
import {
  ALL_VEHICLES_QUERY,
  FEATURED_VEHICLES_QUERY,
  VEHICLE_BY_ID_QUERY,
  VEHICLE_BY_SLUG_QUERY,
  VEHICLES_BY_MAKE_QUERY,
  VEHICLES_BY_BODY_TYPE_QUERY,
  RELATED_VEHICLES_QUERY,
  VEHICLE_MAKES_QUERY,
  VEHICLE_BODY_TYPES_QUERY,
} from "./queries";

// Mock data imports (keeping your existing mock data)
import { mockVehicles, relatedVehicles } from "@/data/mockVehicles";

// Define types for Sanity data
interface SanityImage {
  asset: {
    _ref: string;
    _type: string;
  };
  _type: string;
}

interface SanityVehicle {
  _id: string;
  _type: string;
  title: string;
  year: number;
  make: string;
  model: string;
  trim?: string;
  bodyType:
    | "sedan"
    | "suv"
    | "truck"
    | "coupe"
    | "convertible"
    | "wagon"
    | "hatchback"
    | "van"
    | "crossover";
  odometer: number;
  price: number;
  salePrice?: number;
  transmission: string;
  fuelType: "gasoline" | "diesel" | "hybrid" | "electric" | "plug-in-hybrid";
  engineDesc: string;
  stockNum: string;
  vin: string;
  drivetrain: "fwd" | "rwd" | "awd" | "4wd";
  exteriorColor: string;
  interiorColor: string;
  description: string;
  highlights?: string[];
  features?: string;
  images?: SanityImage[];
  status: "available" | "sold" | "pending";
  featured: boolean;
  slug?: { current: string } | string;
  mpgCity?: number;
  mpgHighway?: number;
  warranty?: {
    hasWarranty: boolean;
    warrantyDescription?: string;
    extendedAvailable: boolean;
  };
  financing?: {
    monthlyPayment?: number;
    downPayment?: number;
    apr?: number;
    term?: number;
  };
}

// Transform Sanity vehicle data to our Vehicle interface
const transformSanityVehicle = (sanityVehicle: SanityVehicle): Vehicle => {
  return {
    ...sanityVehicle,
    _type: "vehicle" as const,
    images: sanityVehicle.images?.map((img: SanityImage) => urlFor(img)) || [],
    slug:
      typeof sanityVehicle.slug === "object"
        ? sanityVehicle.slug?.current
        : sanityVehicle.slug,
    highlights: sanityVehicle.highlights || [],
    features: sanityVehicle.features || "",
  };
};

// Get all vehicles
export async function getAllVehicles(): Promise<Vehicle[]> {
  if (!USE_SANITY_DATA) {
    console.log("📦 Using mock data for vehicles");
    return mockVehicles;
  }

  try {
    const vehicles = await sanityClient.fetch(ALL_VEHICLES_QUERY);
    return vehicles.map(transformSanityVehicle);
  } catch (error) {
    console.error("❌ Error fetching vehicles from Sanity:", error);
    console.log("📦 Falling back to mock data");
    return mockVehicles;
  }
}

// Get featured vehicles only
export async function getFeaturedVehicles(): Promise<Vehicle[]> {
  if (!USE_SANITY_DATA) {
    console.log("📦 Using mock data for featured vehicles");
    return mockVehicles.filter((v: Vehicle) => v.featured);
  }

  try {
    const vehicles = await sanityClient.fetch(FEATURED_VEHICLES_QUERY);
    return vehicles.map(transformSanityVehicle);
  } catch (error) {
    console.error("❌ Error fetching featured vehicles from Sanity:", error);
    console.log("📦 Falling back to mock data");
    return mockVehicles.filter((v: Vehicle) => v.featured);
  }
}

// Get single vehicle by ID
export async function getVehicleById(id: string): Promise<Vehicle | null> {
  if (!USE_SANITY_DATA) {
    return mockVehicles.find((v: Vehicle) => v._id === id) || null;
  }

  try {
    const vehicle = await sanityClient.fetch(VEHICLE_BY_ID_QUERY, { id });
    return vehicle ? transformSanityVehicle(vehicle) : null;
  } catch (error) {
    console.error(`❌ Error fetching vehicle ${id} from Sanity:`, error);
    console.log("📦 Falling back to mock data");
    return mockVehicles.find((v: Vehicle) => v._id === id) || null;
  }
}

// Get single vehicle by slug
export async function getVehicleBySlug(slug: string): Promise<Vehicle | null> {
  if (!USE_SANITY_DATA) {
    console.log(`📦 Using mock data for vehicle slug: ${slug}`);
    return mockVehicles.find((v: Vehicle) => v.slug === slug) || null;
  }

  try {
    const vehicle = await sanityClient.fetch(VEHICLE_BY_SLUG_QUERY, { slug });
    return vehicle ? transformSanityVehicle(vehicle) : null;
  } catch (error) {
    console.error(
      `❌ Error fetching vehicle with slug '${slug}' from Sanity:`,
      error
    );
    console.log("📦 Falling back to mock data");
    return mockVehicles.find((v: Vehicle) => v.slug === slug) || null;
  }
}

// Get vehicles by make
export async function getVehiclesByMake(make: string): Promise<Vehicle[]> {
  if (!USE_SANITY_DATA) {
    console.log(`📦 Using mock data for vehicles by make: ${make}`);
    return mockVehicles.filter(
      (v: Vehicle) => v.make.toLowerCase() === make.toLowerCase()
    );
  }

  try {
    const vehicles = await sanityClient.fetch(VEHICLES_BY_MAKE_QUERY, { make });
    return vehicles.map(transformSanityVehicle);
  } catch (error) {
    console.error(
      `❌ Error fetching vehicles by make '${make}' from Sanity:`,
      error
    );
    console.log("📦 Falling back to mock data");
    return mockVehicles.filter(
      (v: Vehicle) => v.make.toLowerCase() === make.toLowerCase()
    );
  }
}

// Get vehicles by body type
export async function getVehiclesByBodyType(
  bodyType: string
): Promise<Vehicle[]> {
  if (!USE_SANITY_DATA) {
    console.log(`📦 Using mock data for vehicles by body type: ${bodyType}`);
    return mockVehicles.filter((v: Vehicle) => v.bodyType === bodyType);
  }

  try {
    console.log(
      `🔄 Fetching vehicles by body type '${bodyType}' from Sanity...`
    );
    const vehicles = await sanityClient.fetch(VEHICLES_BY_BODY_TYPE_QUERY, {
      bodyType,
    });
    return vehicles.map(transformSanityVehicle);
  } catch (error) {
    console.error(
      `❌ Error fetching vehicles by body type '${bodyType}' from Sanity:`,
      error
    );
    console.log("📦 Falling back to mock data");
    return mockVehicles.filter((v: Vehicle) => v.bodyType === bodyType);
  }
}

// Get related vehicles (same make, excluding current vehicle)
export async function getRelatedVehicles(
  make: string,
  excludeId: string
): Promise<Vehicle[]> {
  if (!USE_SANITY_DATA) {
    console.log(`📦 Using mock data for related vehicles`);
    return relatedVehicles
      .filter((v: Vehicle) => v._id !== excludeId)
      .slice(0, 4);
  }

  try {
    console.log(
      `🔄 Fetching related vehicles for make '${make}' from Sanity...`
    );
    const vehicles = await sanityClient.fetch(RELATED_VEHICLES_QUERY, {
      make,
      excludeId,
    });
    return vehicles.map(transformSanityVehicle);
  } catch (error) {
    console.error(`❌ Error fetching related vehicles from Sanity:`, error);
    console.log("📦 Falling back to mock data");
    return relatedVehicles
      .filter((v: Vehicle) => v._id !== excludeId)
      .slice(0, 4);
  }
}

// Get all unique vehicle makes for filtering
export async function getVehicleMakes(): Promise<string[]> {
  if (!USE_SANITY_DATA) {
    console.log("📦 Using mock data for vehicle makes");
    const makes = [
      ...new Set(mockVehicles.map((v: Vehicle) => v.make)),
    ].sort() as string[];
    return makes;
  }

  try {

    const makes = await sanityClient.fetch(VEHICLE_MAKES_QUERY);
    return [...new Set(makes as string[])].sort() as string[];
  } catch (error) {
    console.error("❌ Error fetching vehicle makes from Sanity:", error);
    console.log("📦 Falling back to mock data");
    const makes = [
      ...new Set(mockVehicles.map((v: Vehicle) => v.make)),
    ].sort() as string[];
    return makes;
  }
}

// Get all unique body types for filtering
export async function getVehicleBodyTypes(): Promise<string[]> {
  if (!USE_SANITY_DATA) {
    console.log("📦 Using mock data for body types");
    const bodyTypes = [
      ...new Set(mockVehicles.map((v: Vehicle) => v.bodyType)),
    ].sort() as string[];
    return bodyTypes;
  }

  try {

    const bodyTypes = await sanityClient.fetch(VEHICLE_BODY_TYPES_QUERY);
    return [...new Set(bodyTypes as string[])].sort() as string[];
  } catch (error) {
    console.error("❌ Error fetching vehicle body types from Sanity:", error);
    console.log("📦 Falling back to mock data");
    const bodyTypes = [
      ...new Set(mockVehicles.map((v: Vehicle) => v.bodyType)),
    ].sort() as string[];
    return bodyTypes;
  }
}

// Utility function to get vehicle count
export async function getVehicleCount(): Promise<number> {
  const vehicles = await getAllVehicles();
  return vehicles.length;
}

// Search vehicles by query (make, model, year, etc.)
export async function searchVehicles(query: string): Promise<Vehicle[]> {
  const allVehicles = await getAllVehicles();
  const searchQuery = query.toLowerCase();

  return allVehicles.filter(
    (vehicle) =>
      vehicle.make.toLowerCase().includes(searchQuery) ||
      vehicle.model.toLowerCase().includes(searchQuery) ||
      vehicle.year.toString().includes(searchQuery) ||
      vehicle.trim?.toLowerCase().includes(searchQuery) ||
      vehicle.bodyType.toLowerCase().includes(searchQuery)
  );
}

// Get vehicles within price range
export async function getVehiclesByPriceRange(
  minPrice: number,
  maxPrice: number
): Promise<Vehicle[]> {
  const allVehicles = await getAllVehicles();

  return allVehicles.filter(
    (vehicle) => vehicle.price >= minPrice && vehicle.price <= maxPrice
  );
}
