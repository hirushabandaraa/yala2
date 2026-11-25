import {
  ArrowLeft,
  ArrowRight,
  Car,
  CheckCircle2,
  Clock,
  Info,
  MapPin,
  MessageSquare,
  Users,
} from 'lucide-react';
import { SAFARI_PACKAGES, SafariPackage } from '../data/safaris';
import { SafeImage } from './SafeImage';

interface PackageDetailViewProps {
  selectedPackage: SafariPackage;
  onSelectPackage: (pkgId: SafariPackage['id']) => void;
  onBackToPackages: () => void;
  onOpenBooking: (pkgId: SafariPackage['id']) => void;
  onOpenWhatsApp: (prefillNote: string) => void;
}

export function PackageDetailView({
  selectedPackage,
  onSelectPackage,
  onBackToPackages,
  onOpenBooking,
  onOpenWhatsApp,
}: PackageDetailViewProps) {
  return (
    <div className="flex-1 flex flex-col">
      {/* Package Hero Banner */}
      <section className="relative min-h-[480px] flex flex-col justify-end bg-jungle-charcoal overflow-hidden">
        <SafeImage
          src={selectedPackage.heroBannerUrl}
          alt={selectedPackage.imageAlt}
          fallbackTitle={selectedPackage.title}
          className="absolute inset-0 w-full h-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-jungle-charcoal/95 via-jungle-charcoal/70 to-jungle-charcoal/30" />
        <div className="absolute inset-0 bg-gradient-to-t from-jungle-charcoal via-transparent to-jungle-charcoal/50" />

        <div className="relative z-10 max-w-7xl w-full mx-auto px-6 md:px-8 pt-32 pb-8 flex flex-col gap-5">
          <div className="flex flex-wrap items-center justify-between gap-4">
            <button
              type="button"
              onClick={onBackToPackages}
              className="inline-flex w-fit items-center gap-2 text-text-muted-dark hover:text-leopard-amber transition-colors duration-150 cursor-pointer"
            >
              <ArrowLeft className="w-4 h-4" aria-hidden="true" />
              <span className="font-label text-[12px] font-semibold tracking-[0.06em]">
                Back to Safari Packages
              </span>
            </button>

            {/* Package Switcher Tabs */}
            <div
              role="tablist"
              aria-label="Compare Safari Packages"
              className="inline-flex items-center gap-1 p-1 rounded-lg bg-jungle-charcoal/80 border border-charcoal-muted"
            >
              {SAFARI_PACKAGES.map((pkg) => {
                const isActive = pkg.id === selectedPackage.id;
                return (
                  <button
                    key={pkg.id}
                    type="button"
                    role="tab"
                    aria-selected={isActive}
                    onClick={() => onSelectPackage(pkg.id)}
                    className={`px-3 py-1.5 rounded text-[12px] font-label font-semibold transition-colors whitespace-nowrap shrink-0 cursor-pointer ${
                      isActive
                        ? 'bg-leopard-amber text-on-leopard-amber'
                        : 'text-text-muted-dark hover:text-on-jungle-charcoal'
                    }`}
                  >
                    {pkg.shortTitle}
                  </button>
                );
              })}
            </div>
          </div>

          <p className="font-label text-[13px] font-semibold tracking-[0.04em] text-leopard-amber">
            {selectedPackage.badge ? `${selectedPackage.badge} · ` : ''}
            {selectedPackage.durationLabel} · {selectedPackage.dining}
          </p>

          <div className="max-w-3xl flex flex-col gap-2.5">
            <h1 className="font-display text-[32px] leading-[38px] md:text-[64px] md:leading-[72px] tracking-[-0.5px] md:tracking-[-1px] font-bold text-on-jungle-charcoal text-balance">
              {selectedPackage.title}
            </h1>
            <p className="font-body text-[16px] leading-[26px] text-on-jungle-charcoal/90 max-w-2xl text-pretty">
              {selectedPackage.heroSummary}
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-6 pt-2 text-text-muted-dark">
            <div className="flex items-center gap-2">
              <Clock className="w-4 h-4 text-leopard-amber shrink-0" aria-hidden="true" />
              <span className="font-body text-[13px]">{selectedPackage.timeWindow}</span>
            </div>
            <div className="flex items-center gap-2">
              <Car className="w-4 h-4 text-leopard-amber shrink-0" aria-hidden="true" />
              <span className="font-body text-[13px]">{selectedPackage.vehicle}</span>
            </div>
            <div className="flex items-center gap-2">
              <Users className="w-4 h-4 text-leopard-amber shrink-0" aria-hidden="true" />
              <span className="font-body text-[13px]">{selectedPackage.capacity}</span>
            </div>
            <div className="flex items-center gap-2">
              <MapPin className="w-4 h-4 text-leopard-amber shrink-0" aria-hidden="true" />
              <span className="font-body text-[13px]">{selectedPackage.pickup}</span>
            </div>
          </div>
        </div>
      </section>

      {/* Main Detail Content (Warm Sand #F7F5F0) */}
      <section className="bg-warm-sand text-on-warm-sand py-12 md:py-24">
        <div className="max-w-7xl mx-auto px-6 md:px-8 grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left 8 Columns: Itinerary & Inclusions */}
          <div className="lg:col-span-8 flex flex-col gap-10">
            {/* Expedition Itinerary */}
            <div className="flex flex-col gap-6">
              <div className="flex flex-col gap-1.5">
                <span className="font-label text-[12px] font-semibold tracking-[0.08em] text-sage-green">
                  Expedition Timeline
                </span>
                <h2 className="font-headline text-[26px] leading-[32px] md:text-[36px] md:leading-[44px] font-semibold text-on-warm-sand">
                  Hour-by-Hour Field Itinerary
                </h2>
              </div>

              <div className="flex flex-col gap-4">
                {selectedPackage.itinerary.map((stop) => (
                  <div
                    key={`${selectedPackage.id}-${stop.time}`}
                    className="bg-sand-elevated rounded-lg border border-sand-muted p-6 flex flex-col sm:flex-row gap-4 items-start"
                  >
                    <span className="shrink-0 px-3 py-1 rounded bg-sage-tint text-sage-green font-label text-[13px] font-semibold tabular-nums">
                      {stop.time}
                    </span>
                    <div className="flex flex-col gap-1">
                      <h3 className="font-title text-[17px] leading-[24px] font-semibold text-on-sand-elevated">
                        {stop.title}
                      </h3>
                      <p className="font-body text-[15px] leading-[24px] text-text-muted-light text-pretty">
                        {stop.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* What's Included vs Park Permits */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-sand-elevated rounded-lg border border-sand-muted p-6 flex flex-col gap-4">
                <h3 className="font-title text-[20px] leading-[28px] font-semibold text-on-sand-elevated">
                  Included in Charter
                </h3>
                <ul className="flex flex-col gap-2.5 text-[13px] leading-[20px] text-text-muted-light">
                  {selectedPackage.includedInCharter.map((item) => (
                    <li key={item} className="flex items-start gap-2.5">
                      <CheckCircle2
                        className="w-4 h-4 text-sage-green shrink-0 mt-0.5"
                        aria-hidden="true"
                      />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="bg-sand-elevated rounded-lg border border-sand-muted p-6 flex flex-col gap-4">
                <h3 className="font-title text-[20px] leading-[28px] font-semibold text-on-sand-elevated">
                  Park Permits &amp; Notes
                </h3>
                <ul className="flex flex-col gap-2.5 text-[13px] leading-[20px] text-text-muted-light">
                  {selectedPackage.permitsAndNotes.map((note) => (
                    <li key={note} className="flex items-start gap-2.5">
                      <Info
                        className="w-4 h-4 text-leopard-amber shrink-0 mt-0.5"
                        aria-hidden="true"
                      />
                      <span>{note}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          {/* Right 4 Columns: Sticky Reservation Summary Card */}
          <aside className="lg:col-span-4 lg:sticky lg:top-8 bg-sand-elevated text-on-sand-elevated rounded-lg border-2 border-leopard-amber p-6 flex flex-col gap-6">
            <div className="flex items-baseline justify-between gap-3 pb-4 border-b border-sand-muted">
              <div>
                <span className="font-headline text-[36px] leading-[44px] font-semibold text-on-sand-elevated tabular-nums">
                  ${selectedPackage.price}
                </span>
                <span className="font-body text-[13px] text-text-muted-light">
                  {' '}
                  / private jeep
                </span>
              </div>
              <span className="font-label text-[12px] font-semibold text-sage-green shrink-0 tabular-nums">
                {selectedPackage.sightingRate}
              </span>
            </div>

            <div className="flex flex-col gap-4">
              <div className="flex items-center justify-between text-[13px]">
                <span className="text-text-muted-light">Duration</span>
                <span className="font-label text-[14px] font-semibold text-on-sand-elevated">
                  {selectedPackage.durationLabel}
                </span>
              </div>
              <div className="flex items-center justify-between text-[13px]">
                <span className="text-text-muted-light">Vehicle</span>
                <span className="font-label text-[14px] font-semibold text-on-sand-elevated">
                  {selectedPackage.vehicle}
                </span>
              </div>
              <div className="flex items-center justify-between text-[13px]">
                <span className="text-text-muted-light">Dining</span>
                <span className="font-label text-[14px] font-semibold text-on-sand-elevated">
                  {selectedPackage.dining}
                </span>
              </div>
            </div>

            <div className="flex flex-col gap-2.5 pt-1">
              <button
                type="button"
                onClick={() => onOpenBooking(selectedPackage.id)}
                className="w-full inline-flex items-center justify-center gap-2 px-6 py-3 rounded bg-leopard-amber text-on-leopard-amber font-label text-[14px] font-semibold hover:bg-amber-hover focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-leopard-amber transition-colors duration-150 whitespace-nowrap shrink-0 cursor-pointer"
              >
                <span>Reserve This Safari</span>
                <ArrowRight className="w-4 h-4" aria-hidden="true" />
              </button>

              <button
                type="button"
                onClick={() =>
                  onOpenWhatsApp(
                    `Hello Leapordsee Yala tracker team — I have a question about the ${selectedPackage.title} ($${selectedPackage.price}).`
                  )
                }
                className="w-full inline-flex items-center justify-center gap-2 px-6 py-3 rounded border border-sage-green text-on-sand-elevated font-label text-[14px] font-semibold hover:bg-sage-green hover:text-on-sage-green transition-colors duration-150 whitespace-nowrap shrink-0 cursor-pointer"
              >
                <MessageSquare className="w-4 h-4" aria-hidden="true" />
                <span>Ask Tracker on WhatsApp</span>
              </button>
            </div>

            <p className="font-body text-[13px] leading-[20px] text-text-muted-light text-center text-balance">
              No upfront deposit required. Pay on arrival in USD or LKR.
            </p>
          </aside>
        </div>
      </section>
    </div>
  );
}
