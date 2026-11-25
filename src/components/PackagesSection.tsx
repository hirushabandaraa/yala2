import { ArrowUpRight, CheckCircle2 } from 'lucide-react';
import { SAFARI_PACKAGES, SafariPackage } from '../data/safaris';
import { SafeImage } from './SafeImage';

interface PackagesSectionProps {
  onSelectPackageDetail: (pkgId: SafariPackage['id']) => void;
  onReservePackage: (pkgId: SafariPackage['id']) => void;
}

export function PackagesSection({
  onSelectPackageDetail,
  onReservePackage,
}: PackagesSectionProps) {
  return (
    <section id="packages" className="bg-warm-sand text-on-warm-sand py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-6 md:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10">
          <div className="max-w-2xl flex flex-col gap-2">
            <span className="font-label text-[12px] font-semibold tracking-[0.08em] text-sage-green">
              Private Expeditions
            </span>
            <h2 className="font-display text-[30px] leading-[36px] md:text-[48px] md:leading-[56px] tracking-[-0.5px] font-semibold text-on-warm-sand text-balance">
              Safari Packages Tailored to the Wild
            </h2>
          </div>
          <p className="font-body text-[15px] leading-[24px] text-text-muted-light max-w-md text-pretty">
            Every expedition includes a private custom-fitted 4x4, national park tracker coordination, and chilled bush refreshments.
          </p>
        </div>

        {/* 3-Column Card Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-stretch">
          {SAFARI_PACKAGES.map((pkg) => (
            <article
              key={pkg.id}
              className={`h-full bg-sand-elevated text-on-sand-elevated rounded-lg overflow-hidden flex flex-col justify-between transition-transform duration-150 ${
                pkg.isFeatured
                  ? 'border-2 border-leopard-amber'
                  : 'border border-sand-muted'
              }`}
            >
              <div>
                <button
                  type="button"
                  onClick={() => onSelectPackageDetail(pkg.id)}
                  aria-label={`View full itinerary for ${pkg.title}`}
                  className="group relative block h-60 w-full overflow-hidden bg-charcoal-muted text-left cursor-pointer"
                >
                  <SafeImage
                    src={pkg.imageUrl}
                    alt={pkg.imageAlt}
                    fallbackTitle={pkg.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300 ease-out"
                  />
                  {pkg.badge && (
                    <span className="absolute top-3 left-3 px-3 py-1 rounded bg-leopard-amber text-on-leopard-amber font-label text-[12px] font-semibold">
                      {pkg.badge}
                    </span>
                  )}
                </button>

                <div className="p-6 flex flex-col gap-4">
                  <header className="flex flex-col gap-2">
                    <div className="flex items-center justify-between gap-3">
                      <span className="font-label text-[12px] font-semibold text-sage-green">
                        {pkg.metaSummary}
                      </span>
                      <span className="font-title text-[20px] leading-[28px] font-semibold text-on-sand-elevated tabular-nums">
                        ${pkg.price}
                      </span>
                    </div>

                    <h3 className="font-headline text-[28px] leading-[36px] font-semibold text-on-sand-elevated">
                      <button
                        type="button"
                        onClick={() => onSelectPackageDetail(pkg.id)}
                        className="text-left hover:text-sage-green transition-colors cursor-pointer"
                      >
                        {pkg.title}
                      </button>
                    </h3>
                  </header>

                  <ul className="flex flex-col gap-2.5 text-[13px] leading-[20px] text-text-muted-light">
                    {pkg.highlights.map((item) => (
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
              </div>

              <footer className="px-6 pb-6 pt-2 flex flex-col gap-2.5">
                <button
                  type="button"
                  onClick={() => onReservePackage(pkg.id)}
                  className="w-full inline-flex items-center justify-center px-6 py-3 rounded bg-leopard-amber text-on-leopard-amber font-label text-[14px] font-semibold hover:bg-amber-hover focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-leopard-amber transition-colors duration-150 whitespace-nowrap shrink-0 cursor-pointer"
                >
                  {pkg.ctaLabel}
                </button>
                <button
                  type="button"
                  onClick={() => onSelectPackageDetail(pkg.id)}
                  className="w-full inline-flex items-center justify-center gap-1.5 py-2 font-label text-[13px] font-semibold text-sage-green hover:text-on-sand-elevated transition-colors whitespace-nowrap shrink-0 cursor-pointer"
                >
                  <span>View Hour-by-Hour Itinerary</span>
                  <ArrowUpRight className="w-4 h-4" aria-hidden="true" />
                </button>
              </footer>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
