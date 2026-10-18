import React from 'react';
import { 
  CheckCircle2, 
  XCircle, 
  MessageCircle, 
  CalendarCheck, 
  Sparkles, 
  ShieldCheck, 
  Percent, 
  Coffee, 
  Mountain, 
  PawPrint,
  ArrowRight
} from 'lucide-react';

interface DirectVsOtaTableProps {
  className?: string;
}

export function DirectVsOtaTable({ className = '' }: DirectVsOtaTableProps) {
  const comparisonRows = [
    {
      title: "Cottage & Suite Tariffs",
      subtitle: "Direct host pricing vs OTA commissions",
      icon: <Percent className="w-5 h-5 text-[#b36b39]" />,
      direct: "Save 20% Direct (Zero OTA Commission Markup)",
      directSubtext: "Guaranteed lowest price anywhere online with direct host booking",
      ota: "18%–25% portal commission + extra taxes",
      otaSubtext: "Marked-up commission prices passed directly onto travelers"
    },
    {
      title: "Dining & Perks",
      subtitle: "Fresh local mountain dining experience",
      icon: <Coffee className="w-5 h-5 text-[#b36b39]" />,
      direct: "Complimentary Home-Cooked Pure-Veg Kumaoni Breakfast",
      directSubtext: "Cooked fresh to order with organic ingredients & mountain spices",
      ota: "Room-only or paid meal add-ons",
      otaSubtext: "Breakfast excluded or charged at steep portal add-on rates"
    },
    {
      title: "Views & Room Allocation",
      subtitle: "Himalayan snow peak orientation",
      icon: <Mountain className="w-5 h-5 text-[#b36b39]" />,
      direct: "Priority 180° Himalayan Snow-Peak Balcony & Fireplace Access",
      directSubtext: "Handpicked cottage suites with uninterrupted Trishul & Nanda Devi vistas",
      ota: "Standard unguaranteed room allocation",
      otaSubtext: "Assigned by portal algorithms based on remaining base inventory"
    },
    {
      title: "Pet & Workcation Policy",
      subtitle: "Flexibility for long stays & pet families",
      icon: <PawPrint className="w-5 h-5 text-[#b36b39]" />,
      direct: "100% Pet-Friendly (₹0 Extra Pet Fee) + 150 Mbps Fiber Wi-Fi",
      directSubtext: "Enclosed green lawns, forest walks, and uninterrupted optical fiber backup",
      ota: "Hidden pet surcharges & rigid portal policies",
      otaSubtext: "Strict cancellation rules, pet penalties & unverified Wi-Fi speeds"
    }
  ];

  return (
    <section 
      aria-label="Direct Booking vs Third-Party Portals Comparison" 
      className={`my-12 font-sans ${className}`}
    >
      <div className="bg-[#FDFBF7] rounded-3xl border border-[#b36b39]/30 shadow-xl overflow-hidden p-6 sm:p-8 md:p-10">
        
        {/* Header Section */}
        <div className="text-center max-w-3xl mx-auto mb-10">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#602E08]/10 text-[#602E08] border border-[#b36b39]/40 text-xs font-semibold tracking-wider uppercase mb-4 shadow-sm">
            <Sparkles className="w-3.5 h-3.5 text-[#b36b39]" />
            <span>Official Best Rate & Perks Guarantee</span>
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-serif font-bold text-[#602E08] tracking-tight leading-snug mb-3">
            Direct Booking vs. Online Travel Portals (OTAs)
          </h2>
          <p className="text-[#5c4d43] text-sm sm:text-base font-light leading-relaxed">
            Skip the intermediary markups. When you book directly with our local mountain hosts, you secure verified best rates, tailored Kumaoni hospitality, and zero hidden fees.
          </p>
        </div>

        {/* Desktop & Tablet Comparison Table */}
        <div className="hidden md:block overflow-hidden rounded-2xl border border-stone-200/90 shadow-sm bg-white mb-8">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="border-b border-stone-200">
                <th className="p-5 text-sm font-semibold text-[#5c4d43] bg-stone-50/80 w-1/3">
                  Perks & Operational Standards
                </th>
                <th className="p-5 text-sm font-bold text-[#FDFBF7] bg-[#602E08] w-1/3 relative border-x border-[#602E08]">
                  <div className="flex items-center justify-between">
                    <span>Stone Heritage Direct Booking</span>
                    <span className="text-[10px] font-bold tracking-widest uppercase bg-[#b36b39] text-[#FDFBF7] px-2 py-0.5 rounded-full shadow-sm">
                      Recommended
                    </span>
                  </div>
                </th>
                <th className="p-5 text-sm font-medium text-stone-500 bg-stone-100/70 w-1/3">
                  Third-Party Portals (MMT / Agoda / Booking.com)
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-stone-100">
              {comparisonRows.map((row, idx) => (
                <tr 
                  key={idx} 
                  className={`transition-colors hover:bg-amber-50/30 ${idx % 2 === 0 ? 'bg-white' : 'bg-stone-50/40'}`}
                >
                  <td className="p-5 align-top">
                    <div className="flex items-start gap-3">
                      <div className="p-2 rounded-xl bg-amber-50 text-[#b36b39] shrink-0 border border-amber-200/50">
                        {row.icon}
                      </div>
                      <div>
                        <span className="block font-serif font-bold text-[#602E08] text-base mb-0.5">
                          {row.title}
                        </span>
                        <span className="text-xs text-[#5c4d43] font-light">
                          {row.subtitle}
                        </span>
                      </div>
                    </div>
                  </td>
                  <td className="p-5 align-top bg-amber-50/40 border-x border-[#b36b39]/20 font-medium">
                    <div className="flex items-start gap-2.5">
                      <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
                      <div>
                        <span className="block text-sm font-semibold text-[#602E08] leading-tight mb-1">
                          {row.direct}
                        </span>
                        <span className="text-xs text-[#5c4d43] font-light leading-relaxed block">
                          {row.directSubtext}
                        </span>
                      </div>
                    </div>
                  </td>
                  <td className="p-5 align-top bg-stone-50/30 text-stone-600">
                    <div className="flex items-start gap-2.5">
                      <XCircle className="w-5 h-5 text-rose-500/80 shrink-0 mt-0.5" />
                      <div>
                        <span className="block text-sm font-medium text-stone-700 leading-tight mb-1">
                          {row.ota}
                        </span>
                        <span className="text-xs text-stone-500 font-light leading-relaxed block">
                          {row.otaSubtext}
                        </span>
                      </div>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Mobile Comparison Cards */}
        <div className="md:hidden space-y-4 mb-8">
          {comparisonRows.map((row, idx) => (
            <div 
              key={idx} 
              className="bg-white rounded-2xl border border-stone-200 shadow-sm p-4 overflow-hidden"
            >
              <div className="flex items-center gap-2.5 pb-3 border-b border-stone-100 mb-3">
                <div className="p-2 rounded-xl bg-amber-50 text-[#b36b39] shrink-0 border border-amber-200/50">
                  {row.icon}
                </div>
                <div>
                  <h3 className="font-serif font-bold text-[#602E08] text-base leading-tight">
                    {row.title}
                  </h3>
                  <p className="text-[11px] text-[#5c4d43] font-light">{row.subtitle}</p>
                </div>
              </div>

              {/* Direct Booking Highlight */}
              <div className="p-3 rounded-xl bg-amber-50/70 border border-[#b36b39]/30 mb-2.5">
                <div className="flex items-center justify-between mb-1">
                  <span className="text-[10px] font-bold uppercase tracking-wider text-[#b36b39]">
                    Official Direct Booking
                  </span>
                  <span className="text-[9px] font-semibold bg-emerald-100 text-emerald-800 px-2 py-0.5 rounded-full">
                    Best Rate
                  </span>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <p className="text-xs font-semibold text-[#602E08] leading-snug">
                    {row.direct}
                  </p>
                </div>
              </div>

              {/* Third-Party Portal Note */}
              <div className="p-3 rounded-xl bg-stone-50 border border-stone-200/70">
                <span className="text-[10px] font-medium uppercase tracking-wider text-stone-500 block mb-1">
                  Third-Party Portals (MMT / Agoda)
                </span>
                <div className="flex items-start gap-2">
                  <XCircle className="w-4 h-4 text-rose-500/80 shrink-0 mt-0.5" />
                  <p className="text-xs text-stone-600 leading-snug">
                    {row.ota}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Dual Conversion CTA Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-2">
          {/* Button 1: WhatsApp Direct */}
          <a
            href="https://wa.me/919027844424?text=Hi!%20I%20visited%20thestoneheritage.in%20and%20want%20to%20claim%20the%2020%25%20Direct%20Booking%20Discount%20with%20Free%20Breakfast."
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto px-7 py-3.5 rounded-xl bg-[#25D366] hover:bg-[#20ba59] text-white font-bold text-sm shadow-lg hover:shadow-xl hover:-translate-y-0.5 active:translate-y-0 transition-all flex items-center justify-center gap-2.5 text-center group"
            id="ota-table-cta-whatsapp"
          >
            <MessageCircle className="w-4 h-4 fill-white text-[#25D366] shrink-0" />
            <span>Claim 20% Discount on WhatsApp</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </a>

          {/* Button 2: Native Booking Engine */}
          <a
            href="https://booking.thestoneheritage.in/"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto px-7 py-3.5 rounded-xl bg-[#602E08] hover:bg-[#72370a] text-[#FDFBF7] font-bold text-sm shadow-lg hover:shadow-xl hover:-translate-y-0.5 active:translate-y-0 transition-all flex items-center justify-center gap-2.5 text-center border border-[#b36b39]/40 group"
            id="ota-table-cta-engine"
          >
            <CalendarCheck className="w-4 h-4 text-[#b36b39] shrink-0" />
            <span>Check Availability & Book Direct</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </a>
        </div>

        {/* Reassurance Footer */}
        <div className="mt-6 pt-4 border-t border-[#b36b39]/20 flex flex-wrap items-center justify-center gap-4 text-xs text-[#5c4d43] text-center font-light">
          <span className="flex items-center gap-1.5">
            <ShieldCheck className="w-4 h-4 text-[#b36b39]" />
            100% Secure Direct Reservations
          </span>
          <span className="hidden sm:inline text-stone-300">•</span>
          <span>Zero Booking Surcharges</span>
          <span className="hidden sm:inline text-stone-300">•</span>
          <span>Direct Host Assistance from Akash, Harsh & Priyanka</span>
        </div>

      </div>
    </section>
  );
}
