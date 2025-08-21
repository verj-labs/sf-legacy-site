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
      icon: <HiOutlineMagnifyingGlass className="text-neutral-100" size={32} />,
    },
    {
      number: "2",
      title: "Book a Test Drive",
      description:
        "Schedule a convenient test drive to experience the vehicle firsthand and ensure it meets your expectations.",
      icon: <HiOutlineCalendar className="text-neutral-100" size={32} />,
    },
    {
      number: "3",
      title: "Pay Cash/Get Financing",
      description:
        "Choose your preferred payment method. We offer competitive financing options with multiple banks.",
      icon: <HiOutlineBanknotes className="text-neutral-100" size={32} />,
    },
    {
      number: "4",
      title: "Drive Home",
      description:
        "Complete the paperwork and drive home in your new vehicle. We handle all the details for a smooth process.",
      icon: <HiOutlineTruck className="text-neutral-100" size={32} />,
    },
  ];

  return (
    <section className="section-padding bg-gradient-to-br from-neutral-200 via-neutral-100 to-neutral-200">
      <div className="max-w-7xl mx-auto px-0 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center flex flex-col items-center gap-2">
          <h2 className="text-h2 font-heading font-bold text-neutral-800">
            Buy Used Cars in 4 Simple Steps
          </h2>
          <p className="text-body-m text-body ">
            Our streamlined process makes buying your next vehicle easy and
            stress-free
          </p>
        </div>

        <div className="my-6 w-40 h-px mx-auto bg-gradient-to-r from-transparent via-neutral-300 to-transparent" />

        {/* Steps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-7 md:gap-8">
          {steps.map((step) => (
            <div key={step.number} className="h-full group">
              <div className="relative bg-surface border border-border rounded-xl p-6 shadow-xs hover:shadow-md hover:border-neutral-300 transition-all duration-300 flex flex-col h-full overflow-hidden">
                <span className="pointer-events-none absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-br from-brand/0 via-brand/0 to-brand/5" />
                {/* Header row: number + icon */}
                <div className="flex items-center justify-center gap-4 mb-6">
                  <div className="absolute top-0 left-0 w-12 h-12 flex items-center justify-center bg-neutral-200 text-neutral-400 group-hover:scale-105 transition-transform rounded-br-xl text-3xl font-heading font-semibold">
                    {step.number}
                  </div>
                  <div className="w-12 h-12 rounded-2xl bg-ink text-white flex items-center justify-center font-heading text-lg font-semibold shadow-sm  ring-neutral-300 group-hover:scale-105 transition-transform">
                    {step.icon}
                  </div>
                </div>
                <h3 className="text-base font-heading font-semibold text-ink mb-3 tracking-tight group-hover:text-brand transition-colors text-center">
                  {step.title}
                </h3>
                <p className="text-body-s text-body/80 leading-relaxed flex-grow text-center">
                  {step.description}
                </p>
                <span className="mt-6 block h-px w-full bg-gradient-to-r from-transparent via-neutral-200 to-transparent" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
