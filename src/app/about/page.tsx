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
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <PageStartBanner
        title="About SF Legacy Motors Inc"
        description="Premier auto dealership serving Ontario with transparency, quality vehicles, and unparalleled customer service."
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* About & Why Choose Us - Side by Side Layout */}
        <section className="mb-20">
          <div className="flex">
            {/* Left side - About SF Legacy Motors (2/3 width) */}
            <div className="lg:col-span-2">
              <h2 className="text-3xl md:text-4xl font-heading font-bold text-gray-900 mb-6">
                About SF Legacy Motors Inc
              </h2>
              <div className=" prose prose-lg text-gray-600 space-y-6">
                <p className="text-xl leading-relaxed">
                  SF Legacy Motors Inc is a premier auto dealership located at{" "}
                  <strong>6610 Turner Valley Rd, Mississauga, Ontario</strong>.
                  Our dealership is serving customers in Ontario, specifically
                  the GTA, Hamilton & nearby areas and has established a
                  reputation for delivering top-quality vehicles and
                  unparalleled customer service.
                </p>
                <p className="text-lg leading-relaxed">
                  We believe in transparency and honesty. That's why we offer
                  competitive pricing and no-pressure sales tactics. We
                  understand that purchasing a vehicle can be a big investment,
                  which is why we want to make the process as stress-free and
                  straightforward as possible.
                </p>
                <p className="text-lg leading-relaxed">
                  SF Motors have proudly been serving Houston and surrounding
                  areas of Texas, USA, bringing our expertise and commitment to
                  excellence to the Canadian market.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Our Values */}
        <section className="mb-20">
          <div className="mb-12">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-gray-900 mb-4">
              Our Commitment to You
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl">
              We're guided by core values that shape every interaction and
              decision we make.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white rounded-lg border border-gray-200 shadow-sm p-6 text-center hover:shadow-lg transition-shadow">
              <div className="flex justify-center mb-4">
                <HiOutlineCheckCircle className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-lg font-heading font-semibold text-gray-900 mb-2">
                Transparency & Honesty
              </h3>
              <p className="text-gray-600 text-sm">
                We believe in transparency and honesty. That's why we offer
                competitive pricing and no-pressure sales tactics.
              </p>
            </div>

            <div className="bg-white rounded-lg border border-gray-200 shadow-sm p-6 text-center hover:shadow-lg transition-shadow">
              <div className="flex justify-center mb-4">
                <HiOutlinePlay className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-lg font-heading font-semibold text-gray-900 mb-2">
                Top-Quality Vehicles
              </h3>
              <p className="text-gray-600 text-sm">
                We have established a reputation for delivering top-quality
                vehicles and unparalleled customer service.
              </p>
            </div>

            <div className="bg-white rounded-lg border border-gray-200 shadow-sm p-6 text-center hover:shadow-lg transition-shadow">
              <div className="flex justify-center mb-4">
                <svg
                  className="w-8 h-8 text-primary"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                  />
                </svg>
              </div>
              <h3 className="text-lg font-heading font-semibold text-gray-900 mb-2">
                Stress-Free Experience
              </h3>
              <p className="text-gray-600 text-sm">
                We understand that purchasing a vehicle can be a big investment,
                which is why we want to make the process as stress-free and
                straightforward as possible.
              </p>
            </div>

            <div className="bg-white rounded-lg border border-gray-200 shadow-sm p-6 text-center hover:shadow-lg transition-shadow">
              <div className="flex justify-center mb-4">
                <HiOutlineOfficeBuilding className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-lg font-heading font-semibold text-gray-900 mb-2">
                Expert Team
              </h3>
              <p className="text-gray-600 text-sm">
                Our knowledgeable and friendly team is dedicated to helping our
                customers find the perfect vehicle to fit their needs and
                budget.
              </p>
            </div>
          </div>
        </section>

        {/* Team Section */}
        <section className="mb-20">
          <div className="mb-12">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-gray-900 mb-4">
              The Team
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl">
              Our knowledgeable and friendly team is dedicated to helping our
              customers find the perfect vehicle to fit their needs and budget.
              Our finance team is also on hand to help you find the best
              financing options and secure the best interest rates available.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {teamMembers.map((member, index) => (
              <div
                key={index}
                className="bg-white rounded-lg border border-gray-200 shadow-sm overflow-hidden hover:shadow-lg transition-shadow"
              >
                <div className="p-6">
                  <div className="flex items-start space-x-4">
                    <img
                      src={member.image}
                      alt={member.name}
                      className="w-20 h-20 rounded-lg object-cover flex-shrink-0"
                    />
                    <div className="flex-1 min-w-0">
                      <h3 className="text-xl text-gray-900 mb-1">
                        {member.name}
                      </h3>
                      <p className="text-primary font-medium mb-3">
                        {member.role}
                      </p>
                      <div className="flex flex-wrap gap-2 mb-4">
                        {member.certifications.map((cert, idx) => (
                          <Chip
                            key={idx}
                            variant="primary"
                            // size="lg"
                            weight="bold"
                          >
                            {cert}
                          </Chip>
                        ))}
                      </div>
                    </div>
                  </div>
                  <p className="text-gray-600 text-sm leading-relaxed mt-4 mb-0">
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
