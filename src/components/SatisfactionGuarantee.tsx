import {
  HiCheckBadge,
  HiShieldCheck,
  HiSparkles,
  HiChartBarSquare,
  HiUserGroup,
  HiClipboardDocumentList,
} from "react-icons/hi2";

export default function SatisfactionGuarantee() {
  const features = [
    {
      icon: <HiShieldCheck className="w-6 h-6" />,
      title: "Clean CARFAX Reports",
      desc: "Every vehicle includes a clean, transparent history disclosure for peace of mind.",
    },
    {
      icon: <HiSparkles className="w-6 h-6" />,
      title: "Great Deal Pricing",
      desc: "Pricing aligned with market data; frequent “Great Deal” ratings on major platforms.",
    },
    {
      icon: <HiClipboardDocumentList className="w-6 h-6" />,
      title: "Documented Maintenance",
      desc: "Well-maintained inventory with service records & multi‑point inspections.",
    },
    {
      icon: <HiCheckBadge className="w-6 h-6" />,
      title: "Certified Vehicles",
      desc: "Select vehicles include extended coverage & certification options.",
    },
  ];

  const stats = [
    { value: "500+", label: "Vehicles Sold" },
    { value: "99%", label: "Customer Satisfaction" },
    { value: "15+", label: "Years Experience" },
    { value: "100%", label: "Clean Reports" },
  ];

  return (
    <section className="section-padding relative">
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-neutral-100 via-neutral-50 to-neutral-100" />
      <div className="relative max-w-7xl mx-auto px-0 sm:px-6 lg:px-8">
        <div className="text-center flex flex-col items-center gap-2">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-brand text-white text-xs font-medium tracking-wide shadow-sm">
            <HiUserGroup className="w-4 h-4" /> Trusted by Drivers
          </div>
          <h2 className="text-h2 font-heading font-bold text-neutral-800">
            100% Satisfaction Guaranteed
          </h2>
          <p className="text-body-m text-body ">
            Quality, transparency, and value. Clean reports, competitive
            pricing, and thoroughly inspected vehicles.
          </p>
        </div>

          <div className="my-6 w-40 h-px mx-auto bg-gradient-to-r from-transparent via-neutral-300 to-transparent" />
        

        {/* Compact Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-10">
          {features.map((f, i) => (
            <div
              key={i}
              className="group relative bg-surface border border-border hover:border-neutral-300 rounded-xl p-5 flex flex-col gap-3 shadow-xs hover:shadow-md transition-all duration-300 overflow-hidden"
            >
              <div className="w-10 h-10 rounded-lg bg-ink text-white flex items-center justify-center shadow-sm ring-1 ring-neutral-300 group-hover:scale-105 transition-transform">
                {f.icon}
              </div>
              <h3 className="font-heading font-semibold text-ink text-sm group-hover:text-brand transition-colors">
                {f.title}
              </h3>
              <p className="text-body-s text-body/70 leading-relaxed line-clamp-3">
                {f.desc}
              </p>
              <span className="pointer-events-none absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-neutral-200 to-transparent" />
              <span className="pointer-events-none absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-gradient-to-br from-brand/0 via-brand/0 to-brand/5" />
            </div>
          ))}
        </div>

        {/* Stats (compact) */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
          {stats.map((s) => (
            <div
              key={s.label}
              className="relative bg-surface rounded-lg border border-border p-4 text-center flex flex-col gap-1 hover:border-neutral-300 transition-colors"
            >
              <div className="text-xl md:text-2xl font-heading font-bold text-ink group-hover:text-brand tracking-tight">
                {s.value}
              </div>
              <div className="text-[11px] uppercase tracking-wide text-body/60 font-medium">
                {s.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
