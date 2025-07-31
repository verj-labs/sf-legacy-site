import Link from "next/link";

import {
  HiOutlineBanknotes,
  HiOutlineCalendar,
  HiOutlineMagnifyingGlass,
  HiOutlineTruck,
} from "react-icons/hi2";

export default function SimpleFourSteps() {
  const steps = [
    {
      number: "1",
      title: "Select Your Car",
      description:
        "Browse our inventory of quality used vehicles and find the perfect car for your needs and budget.",
      icon: <HiOutlineMagnifyingGlass className="text-brand-500" size={32} />,
    },
    {
      number: "2",
      title: "Book a Test Drive",
      description:
        "Schedule a convenient test drive to experience the vehicle firsthand and ensure it meets your expectations.",
      icon: <HiOutlineCalendar className="text-brand-500" size={32} />,
    },
    {
      number: "3",
      title: "Pay Cash/Get Financing",
      description:
        "Choose your preferred payment method. We offer competitive financing options with multiple banks.",
      icon: <HiOutlineBanknotes className="text-brand-500" size={32} />,
    },
    {
      number: "4",
      title: "Drive Home",
      description:
        "Complete the paperwork and drive home in your new vehicle. We handle all the details for a smooth process.",
      icon: <HiOutlineTruck className="text-brand-500" size={32} />,
    },
  ];

  return (
    <section className="section-padding bg-background-muted">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-h2 font-heading font-bold text-ink mb-4">
            Buy Used Cars in 4 Simple Steps
          </h2>
          <p className="text-body-l text-body max-w-2xl mx-auto">
            Our streamlined process makes buying your next vehicle easy and
            stress-free
          </p>
        </div>

        {/* Steps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <div key={step.number} className="relative h-full">
              {/* Connector Line (hidden on mobile) */}
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-16 left-1/2 w-full h-0.5 bg-gradient-to-r from-brand to-brand/30 z-0"></div>
              )}

              {/* Step Card */}
              <div className="relative bg-white rounded-lg p-6 shadow-lg hover:shadow-xl transition-shadow duration-300 text-center h-full flex flex-col min-h-[320px]">
                {/* Step Number */}
                <div className="w-16 h-16 bg-brand text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4 relative z-10">
                  {step.number}
                </div>

                {/* Title */}
                <h3 className="text-xl font-heading font-bold text-ink mb-3">
                  {step.title}
                </h3>

                {/* Icon */}
                <div className="text-brand mb-4 flex justify-center">
                  {step.icon}
                </div>

                {/* Body */}
                <p className="text-body-s text-body leading-relaxed flex-grow">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="text-center mt-12">
          <p className="text-body-l text-body mb-6">Ready to get started?</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/inventory" className="btn-primary">
              Browse Inventory
            </Link>
            <Link href="/book-test-drive" className="btn-secondary">
              Schedule Test Drive
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
