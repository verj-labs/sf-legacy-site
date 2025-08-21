"use client";

import Link from "next/link";
import PageStartBanner from "@/components/PageStartBanner";
import PageEndBanner from "@/components/PageEndBanner";
import Chip from "@/components/Chip";
import { 
  HiOutlineCheckCircle, 
  HiOutlinePlay, 
  HiOutlineUsers, 
  HiOutlineOfficeBuilding,
  HiOutlinePhone,
  HiOutlineLocationMarker
} from "react-icons/hi";
import { HiCheckBadge, HiSparkles, HiUserGroup, HiCog8Tooth } from "react-icons/hi2";

export default function AboutPage() {
  const teamMembers = [
    {
      name: "Muhammad Asad Nasir Khan",
      role: "Co-Founder",
      image: "/asset/asad.jpg",
      bio: "Muhammad Asad Nasir Khan is the Co-Founder of SF Legacy Motors Inc. Asad is also Co-Founder and Director of Innovative Visa Solutions Immigration. He is a Regulated Canadian Immigration Consultant, registered licensed member of the ICCRC (Immigration Consultants of Canada Regulatory Council), and a proud member of the Canadian Association of Professional Immigration Consultants. He has helped many new immigrants settle in Canada with post landing services and this Auto business is part of that.",
      certifications: ["ICCRC Licensed", "Immigration Consultant"],
    },
    {
      name: "Muhammad Fahad Khan",
      role: "Co-Founder & COO",
      image: "/asset/fahad.jpg",
      bio: "Muhammad Fahad Khan is the Co-Founder of SF Legacy Motors and acts as the Chief Operating Officer of the company. Mr. Fahad is responsible for all the business operations as well as handling all the finance aspect of the Business. Mr. Fahad specialized in and is a Licensed Finance Consultant. Fahad deals with every customer one-on-one to provide the best possible financial scenario in the purchase of the vehicle. He has run Auto Dealerships in New York & Houston, USA.",
      certifications: ["Licensed Finance Consultant", "Auto Dealer Experience"],
    },
  ];

  return (
    <div className="min-h-screen relative">
      <div className="absolute inset-0 bg-gradient-to-br from-neutral-100 via-neutral-50 to-neutral-100 pointer-events-none" />
      {/* Hero Section */}
      <PageStartBanner
        title="About SF Legacy Motors Inc"
        description="Premier auto dealership serving Ontario with transparency, quality vehicles, and unparalleled customer service."
      />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Company Story */}
        <section className="mb-20">
          <div className="bg-surface rounded-2xl shadow-xs border border-border p-8 md:p-12">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-ink mb-8 tracking-tight">
              About SF Legacy Motors Inc
            </h2>
            <div className="prose prose-lg max-w-none">
              <p className="text-body-l md:text-body-xl leading-relaxed text-body/90 mb-6">
                SF Legacy Motors Inc is a premier auto dealership located at{" "}
                <strong className="text-ink">6610 Turner Valley Rd, Mississauga, Ontario</strong>.
                Our dealership serves customers throughout Ontario, specifically
                the GTA, Hamilton & nearby areas, and has established a
                reputation for delivering top-quality vehicles and
                unparalleled customer service.
              </p>
              <p className="text-body text-body/80 leading-relaxed mb-6">
                We believe in transparency and honesty. That's why we offer
                competitive pricing and no-pressure sales tactics. We
                understand that purchasing a vehicle can be a big investment,
                which is why we want to make the process as stress-free and
                straightforward as possible.
              </p>
              <p className="text-body text-body/80 leading-relaxed">
                SF Motors have proudly been serving Houston and surrounding
                areas of Texas, USA, bringing our expertise and commitment to
                excellence to the Canadian market.
              </p>
            </div>
          </div>
        </section>

        {/* Our Values */}
        <section className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-ink mb-4 tracking-tight">
              Our Commitment to You
            </h2>
            <p className="text-body-l text-body/80 max-w-3xl mx-auto">
              We're guided by core values that shape every interaction and
              decision we make.
            </p>
            <div className="mt-6 w-40 h-px mx-auto bg-gradient-to-r from-transparent via-neutral-300 to-transparent" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="group relative bg-surface rounded-xl border border-border shadow-xs p-6 text-center hover:shadow-md hover:border-neutral-300 transition-all duration-300 overflow-hidden">
              <span className="pointer-events-none absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-br from-brand/0 via-brand/0 to-brand/5" />
              <div className="relative flex justify-center mb-4">
                <div className="w-12 h-12 rounded-xl bg-ink text-white flex items-center justify-center shadow-sm ring-1 ring-neutral-300 group-hover:scale-105 transition-transform">
                  <HiCheckBadge className="w-6 h-6" />
                </div>
              </div>
              <h3 className="text-base font-heading font-semibold text-ink mb-2 group-hover:text-brand transition-colors">
                Transparency & Honesty
              </h3>
              <p className="text-body-sm text-body/70 leading-relaxed">
                We believe in transparency and honesty. That's why we offer
                competitive pricing and no-pressure sales tactics.
              </p>
            </div>

            <div className="group relative bg-surface rounded-xl border border-border shadow-xs p-6 text-center hover:shadow-md hover:border-neutral-300 transition-all duration-300 overflow-hidden">
              <span className="pointer-events-none absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-br from-brand/0 via-brand/0 to-brand/5" />
              <div className="relative flex justify-center mb-4">
                <div className="w-12 h-12 rounded-xl bg-ink text-white flex items-center justify-center shadow-sm ring-1 ring-neutral-300 group-hover:scale-105 transition-transform">
                  <HiSparkles className="w-6 h-6" />
                </div>
              </div>
              <h3 className="text-base font-heading font-semibold text-ink mb-2 group-hover:text-brand transition-colors">
                Top-Quality Vehicles
              </h3>
              <p className="text-body-sm text-body/70 leading-relaxed">
                We have established a reputation for delivering top-quality
                vehicles and unparalleled customer service.
              </p>
            </div>

            <div className="group relative bg-surface rounded-xl border border-border shadow-xs p-6 text-center hover:shadow-md hover:border-neutral-300 transition-all duration-300 overflow-hidden">
              <span className="pointer-events-none absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-br from-brand/0 via-brand/0 to-brand/5" />
              <div className="relative flex justify-center mb-4">
                <div className="w-12 h-12 rounded-xl bg-ink text-white flex items-center justify-center shadow-sm ring-1 ring-neutral-300 group-hover:scale-105 transition-transform">
                  <HiUserGroup className="w-6 h-6" />
                </div>
              </div>
              <h3 className="text-base font-heading font-semibold text-ink mb-2 group-hover:text-brand transition-colors">
                Stress-Free Experience
              </h3>
              <p className="text-body-sm text-body/70 leading-relaxed">
                We understand that purchasing a vehicle can be a big investment,
                which is why we want to make the process as stress-free and
                straightforward as possible.
              </p>
            </div>

            <div className="group relative bg-surface rounded-xl border border-border shadow-xs p-6 text-center hover:shadow-md hover:border-neutral-300 transition-all duration-300 overflow-hidden">
              <span className="pointer-events-none absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-br from-brand/0 via-brand/0 to-brand/5" />
              <div className="relative flex justify-center mb-4">
                <div className="w-12 h-12 rounded-xl bg-ink text-white flex items-center justify-center shadow-sm ring-1 ring-neutral-300 group-hover:scale-105 transition-transform">
                  <HiCog8Tooth className="w-6 h-6" />
                </div>
              </div>
              <h3 className="text-base font-heading font-semibold text-ink mb-2 group-hover:text-brand transition-colors">
                Expert Team
              </h3>
              <p className="text-body-sm text-body/70 leading-relaxed">
                Our knowledgeable and friendly team is dedicated to helping our
                customers find the perfect vehicle to fit their needs and
                budget.
              </p>
            </div>
          </div>
        </section>

        {/* Team Section */}
        <section className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-ink mb-4 tracking-tight">
              Meet The Team
            </h2>
            <p className="text-body-l text-body/80 max-w-3xl mx-auto">
              Our knowledgeable and friendly team is dedicated to helping our
              customers find the perfect vehicle to fit their needs and budget.
              Our finance team is also on hand to help you find the best
              financing options and secure the best interest rates available.
            </p>
            <div className="mt-6 w-40 h-px mx-auto bg-gradient-to-r from-transparent via-neutral-300 to-transparent" />
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {teamMembers.map((member, index) => (
              <div
                key={index}
                className="group relative bg-surface rounded-2xl border border-border shadow-xs overflow-hidden hover:shadow-md hover:border-neutral-300 transition-all duration-300"
              >
                <span className="pointer-events-none absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-br from-brand/0 via-brand/0 to-brand/3" />
                <div className="relative p-8">
                  <div className="flex items-start space-x-6 mb-6">
                    <img
                      src={member.image}
                      alt={member.name}
                      className="w-24 h-24 rounded-2xl object-cover flex-shrink-0 ring-2 ring-neutral-200 group-hover:ring-brand/20 transition-all"
                    />
                    <div className="flex-1 min-w-0">
                      <h3 className="text-xl font-heading font-semibold text-ink mb-2 group-hover:text-brand transition-colors">
                        {member.name}
                      </h3>
                      <p className="text-neutral-600 font-medium mb-2">
                        {member.role}
                      </p>
                      <div className="flex flex-wrap gap-2">
                        {member.certifications.map((cert, idx) => (
                          <Chip
                            key={idx}
                            variant="primary"
                            weight="bold"
                          >
                            {cert}
                          </Chip>
                        ))}
                      </div>
                    </div>
                  </div>
                  <p className="text-body-sm text-body/80 leading-relaxed">
                    {member.bio}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>


        {/* CTA Section */}
        <PageEndBanner
          title="Experience the SF Legacy Motors Inc Difference"
          body="Visit our showroom in Mississauga and meet our team. We'd love to help you find your next vehicle and show you why we're Ontario's trusted choice for quality used cars."
        />
      </div>
    </div>
  );
}
