import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Vehicle Inventory - SF Legacy Autos",
  description: "Browse our extensive inventory of quality used cars, trucks, and SUVs. Find your perfect vehicle with our advanced search and filtering options.",
}

export default function InventoryLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}
