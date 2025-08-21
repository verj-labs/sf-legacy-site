import { createClient } from "@sanity/client";
import { ClientConfig } from "@sanity/client";
import imageUrlBuilder from "@sanity/image-url";

// Sanity project configuration
const config: ClientConfig = {
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || "tlbomgvx",
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || "production",
  apiVersion: process.env.NEXT_PUBLIC_SANITY_API_VERSION || "2024-01-01",
  useCdn: false, // Set to false for development to avoid CORS issues
  token: process.env.SANITY_API_TOKEN, // Optional: for authenticated requests
};

// Create Sanity client
export const sanityClient = createClient(config);

// Create image URL builder
const builder = imageUrlBuilder(sanityClient);

// Helper function to build image URLs from Sanity image references
export const urlFor = (
  source: { asset?: { _ref?: string } } | null | undefined
): string => {
  if (!source?.asset?._ref) return "/api/placeholder/400/300";
  return builder.image(source).url();
};

// Configuration flag to toggle between local mock data and Sanity data
export const USE_SANITY_DATA =
  process.env.NEXT_PUBLIC_USE_SANITY_DATA === "true";

// Debug log to verify environment variable reading
// console.log('🔧 Environment Debug:', {
//   NEXT_PUBLIC_USE_SANITY_DATA: process.env.NEXT_PUBLIC_USE_SANITY_DATA,
//   USE_SANITY_DATA: USE_SANITY_DATA
// })

export default sanityClient;
