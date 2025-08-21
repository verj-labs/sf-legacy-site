import Link from 'next/link'
import { HiShieldCheck, HiCheck, HiBanknotes, HiCurrencyDollar, HiClipboardDocumentList } from 'react-icons/hi2'

export default function WarrantyFinancingSection() {
  const warrantyFeatures = [
    'Basic to Exclusionary Coverage',
    'Flexible Terms & Deductibles',
    'Nationwide Service Network'
  ]

  const financingFeatures = [
    'Multiple Bank Partnerships',
    'Competitive Interest Rates',
    'Good & Bad Credit Welcome'
  ]

  return (
    <section className="section-padding relative  bg-gradient-to-br from-neutral-100 via-neutral-50 to-neutral-100">

      <div className="relative max-w-7xl mx-auto px-0 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-14">
          {/* Warranty Card */}
            <div className="group relative bg-surface rounded-2xl p-8 md:p-10 border border-border shadow-xs hover:shadow-md hover:border-neutral-300 transition-all duration-300 overflow-hidden">
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-br from-brand/0 via-brand/0 to-brand/5" />
              <div className="relative">
                <div className="w-14 h-14 rounded-xl bg-neutral-800 text-white flex items-center justify-center shadow-sm ring-1 ring-neutral-300 mb-6">
                  <HiShieldCheck className="w-7 h-7" />
                </div>
                <h3 className="text-2xl md:text-3xl font-heading font-bold text-ink tracking-tight mb-4">
                  Warranty Plans
                </h3>
                <p className="text-body text-body/80 leading-relaxed mb-6 max-w-prose">
                  We offer a full range of <strong>Warranty Plans</strong> from essential coverage to comprehensive Exclusionary protection. Get guidance on the option that fits how you drive.
                </p>
                <ul className="space-y-2.5 mb-8">
                  {warrantyFeatures.map(item => (
                    <li key={item} className="flex items-start gap-3">
                      <span className="mt-1 inline-flex items-center justify-center w-5 h-5 rounded-full bg-ink text-white text-[10px] ring-1 ring-neutral-300"><HiCheck className="w-3.5 h-3.5" /></span>
                      <span className="text-body-sm text-body/80">{item}</span>
                    </li>
                  ))}
                </ul>
                <Link href="/warranty" className="btn-primary inline-flex items-center gap-2 px-6 py-3 rounded-lg group/button">
                  <span className="font-medium tracking-tight">Learn About Warranty</span>
                  <HiClipboardDocumentList className="w-5 h-5 text-neutral-200 group-hover/button:text-neutral-50 transition-colors" />
                </Link>
              </div>
              <span className="pointer-events-none absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-neutral-200 to-transparent" />
            </div>

          {/* Financing Card */}
            <div className="group relative bg-surface rounded-2xl p-8 md:p-10 border border-border shadow-xs hover:shadow-md hover:border-neutral-300 transition-all duration-300 overflow-hidden">
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-br from-brand/0 via-brand/0 to-brand/5" />
              <div className="relative">
                <div className="w-14 h-14 rounded-xl bg-neutral-800 text-white flex items-center justify-center shadow-sm ring-1 ring-neutral-300 mb-6">
                  <HiBanknotes className="w-7 h-7" />
                </div>
                <h3 className="text-2xl md:text-3xl font-heading font-bold text-ink tracking-tight mb-4">
                  Used Car Financing
                </h3>
                <p className="text-body text-body/80 leading-relaxed mb-6 max-w-prose">
                  We secure the best <strong>financing plan</strong> for your needs by working across multiple lending partners, making purchasing straightforward and transparent.
                </p>
                <ul className="space-y-2.5 mb-8">
                  {financingFeatures.map(item => (
                    <li key={item} className="flex items-start gap-3">
                      <span className="mt-1 inline-flex items-center justify-center w-5 h-5 rounded-full bg-ink text-white text-[10px] ring-1 ring-neutral-300"><HiCheck className="w-3.5 h-3.5" /></span>
                      <span className="text-body-sm text-body/80">{item}</span>
                    </li>
                  ))}
                </ul>
                <Link href="/financing" className="btn-primary inline-flex items-center gap-2 px-6 py-3 rounded-lg group/button">
                  <span className="font-medium tracking-tight">Get Pre‑Approved</span>
                  <HiCurrencyDollar className="w-5 h-5 text-neutral-200 group-hover/button:text-neutral-50 transition-colors" />
                </Link>
              </div>
              <span className="pointer-events-none absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-neutral-200 to-transparent" />
            </div>
        </div>
      </div>
    </section>
  )
}
