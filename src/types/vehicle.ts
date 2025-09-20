// Vehicle Type Definition

export interface Vehicle {
  // Sanity CMS fields
  _id: string;
  _type: "vehicle";

  // VIN field - moved to top for convenience
  vin: string;

  title: string;

  // Basic vehicle info
  year: number;
  make: string;
  model: string;
  trim?: string;
  series?: string; // NEW: Vehicle series (e.g., C250, LX)

  // Physical specifications - NEW
  doors?: number; // NEW: Number of doors
  vehicleDescriptor?: string; // NEW: VIN pattern descriptor

  // Manufacturing info - NEW
  manufacturerName?: string; // NEW: Manufacturer name
  plantCity?: string; // NEW: Plant city
  plantCountry?: string; // NEW: Plant country

  // Vehicle details
  carfaxLink?: string; // NEW: Carfax report link
  stockNum: string;
  odometer: number;
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

  // Powertrain - ENHANCED
  engineDesc: string; // "2.5L 4-Cylinder"
  engineCylinders?: number; // NEW: Engine cylinders
  displacementL?: number; // NEW: Displacement in liters
  displacementCC?: number; // NEW: Displacement in cubic centimeters
  engineConfiguration?: "In-Line" | "V-Type" | "W-Type" | "Boxer" | "Rotary"; // NEW: Engine configuration
  transmission?: string; // "6-Speed Automatic" - now optional
  drivetrain: "fwd" | "rwd" | "awd" | "4wd";
  fuelType: "gasoline" | "diesel" | "hybrid" | "electric" | "plug-in-hybrid";

  // Colors
  exteriorColor: string;
  interiorColor: string;

  // Pricing
  price: number;
  salePrice?: number;

  // Description & features
  description: string;
  highlights?: string[]; // Key selling points - now optional
  features?: string; // Large text field with features separated by newlines - now optional

  // Images - just URLs
  images?: string[]; // Now optional

  // Fuel economy (optional)
  mpgCity?: number;
  mpgHighway?: number;

  // Warranty info
  warranty?: {
    hasWarranty: boolean;
    warrantyDescription?: string;
    extendedAvailable: boolean;
  };

  // Financing info (optional)
  financing?: {
    monthlyPayment?: number;
    downPayment?: number;
    apr?: number;
    term?: number;
  };

  // VIN Decoder fields - NEW (automatically populated, hidden in forms)
  vinDecodedRaw?: string; // NEW: Raw VIN decoded data as JSON string
  vinDecodedAt?: string; // NEW: When VIN was decoded (datetime)
  vinDecoderSource?: string; // NEW: Source of VIN decoding

  // Status
  status: "available" | "sold" | "pending";
  featured: boolean;

  // URL slug (optional since we use _id for routing)
  slug?: string;
}

// Type guard for runtime checking
export const isVehicle = (obj: unknown): obj is Vehicle => {
  return (
    obj !== null &&
    typeof obj === "object" &&
    "_type" in obj &&
    (obj as Record<string, unknown>)._type === "vehicle"
  );
};
