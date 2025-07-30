// Vehicle Type Definition

export interface Vehicle {
  // Sanity CMS fields
  _id: string;
  _type: "vehicle";

  title: string;

  // Basic vehicle info
  year: number;
  make: string;
  model: string;
  trim?: string;

  // Vehicle details
  vin: string;
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

  // Powertrain
  engineDesc: string; // "2.5L 4-Cylinder"
  transmission: string; // "6-Speed Automatic"
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
  highlights: string[]; // Simple array of key selling points
  features: string; // Large text field with features separated by newlines

  // Images - just URLs
  images: string[];

  // Fuel economy (optional)
  mpgCity?: number;
  mpgHighway?: number;

  // Simple warranty info
  warranty?: {
    hasWarranty: boolean;
    warrantyDescription?: string;
    extendedAvailable: boolean;
  };

  // Basic financing (optional)
  financing?: {
    monthlyPayment?: number;
    downPayment?: number;
    apr?: number;
    term?: number;
  };

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
