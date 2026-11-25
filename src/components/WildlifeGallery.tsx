import { useEffect, useState } from 'react';
import { Camera, Compass, Clock, X } from 'lucide-react';
import { WILDLIFE_GALLERY, WildlifeEntry } from '../data/safaris';
import { SafeImage } from './SafeImage';

interface WildlifeGalleryProps {
  onOpenBooking: () => void;
}

export function WildlifeGallery({ onOpenBooking }: WildlifeGalleryProps) {
  const [selectedSpecies, setSelectedSpecies] = useState<WildlifeEntry | null>(null);

  useEffect(() => {
    if (!selectedSpecies) return;
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setSelectedSpecies(null);
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [selectedSpecies]);

  return (
    <section id="wildlife" className="bg-warm-sand text-on-warm-sand py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-6 md:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10">
          <div className="max-w-2xl flex flex-col gap-2">
            <span className="font-label text-[12px] font-semibold tracking-[0.08em] text-sage-green">
              Field Dispatches
            </span>
            <h2 className="font-display text-[30px] leading-[36px] md:text-[48px] md:leading-[56px] tracking-[-0.5px] font-semibold text-on-warm-sand text-balance">
              Wildlife Sightings Gallery
            </h2>
          </div>
          <p className="font-body text-[15px] leading-[24px] text-text-muted-light max-w-md text-pretty">
            Yala boasts the highest density of wild leopards on Earth, alongside iconic herds of Asian elephants, sloth bears, and over 215 bird species.
          </p>
        </div>

        {/* Asymmetrical Bento-Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-4 md:auto-rows-[260px]">
          {WILDLIFE_GALLERY.map((species) => (
            <button
              key={species.id}
              type="button"
              onClick={() => setSelectedSpecies(species)}
              className={`group relative rounded-md overflow-hidden bg-jungle-charcoal text-left focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-leopard-amber cursor-pointer ${species.layoutClass}`}
            >
              <SafeImage
                src={species.imageUrl}
                alt={species.imageAlt}
                fallbackTitle={species.commonName}
                className="w-full h-full object-cover transition-transform duration-300 ease-out group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-jungle-charcoal via-jungle-charcoal/55 to-transparent p-6 flex flex-col justify-end gap-1.5">
                <span className="font-label text-[12px] font-semibold tracking-[0.04em] text-leopard-amber">
                  {species.scientificName}
                </span>
                <h3
                  className={
                    species.isPrimaryFeature
                      ? 'font-headline text-[28px] leading-[36px] font-semibold text-on-jungle-charcoal'
                      : 'font-title text-[20px] leading-[28px] font-semibold text-on-jungle-charcoal'
                  }
                >
                  {species.commonName}
                </h3>
                {species.isPrimaryFeature && (
                  <p className="font-body text-[13px] leading-[20px] text-on-jungle-charcoal/90">
                    {species.shortCaption}
                  </p>
                )}
              </div>
            </button>
          ))}
        </div>
      </div>

      {/* Interactive Species Field Dispatch Modal */}
      {selectedSpecies && (
        <div
          role="dialog"
          aria-modal="true"
          aria-labelledby="wildlife-dispatch-heading"
          onClick={() => setSelectedSpecies(null)}
          className="fixed inset-0 z-50 flex items-center justify-center p-4 md:p-8 bg-jungle-charcoal/85 backdrop-blur-md"
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="w-full max-w-2xl rounded-lg bg-warm-sand text-on-warm-sand border border-sand-muted overflow-hidden"
          >
            <div className="relative h-64 sm:h-72 w-full bg-jungle-charcoal">
              <SafeImage
                src={selectedSpecies.imageUrl}
                alt={selectedSpecies.imageAlt}
                fallbackTitle={selectedSpecies.commonName}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-jungle-charcoal via-jungle-charcoal/30 to-transparent" />
              <button
                type="button"
                aria-label="Close species dispatch"
                onClick={() => setSelectedSpecies(null)}
                className="absolute top-4 right-4 inline-flex items-center justify-center w-10 h-10 rounded-full border border-charcoal-muted bg-jungle-charcoal/85 text-on-jungle-charcoal hover:border-leopard-amber transition-colors cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>
              <div className="absolute bottom-4 left-6 right-6">
                <p className="font-label text-[12px] font-semibold text-leopard-amber">
                  {selectedSpecies.scientificName}
                </p>
                <h3
                  id="wildlife-dispatch-heading"
                  className="font-headline text-[28px] leading-[36px] font-semibold text-on-jungle-charcoal"
                >
                  {selectedSpecies.commonName}
                </h3>
              </div>
            </div>

            <div className="p-6 flex flex-col gap-5">
              <p className="font-body text-[15px] leading-[24px] text-on-warm-sand text-pretty">
                {selectedSpecies.fieldNotes}
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="p-4 rounded-lg bg-sand-elevated border border-sand-muted flex items-start gap-3">
                  <Compass className="w-5 h-5 text-sage-green shrink-0 mt-0.5" aria-hidden="true" />
                  <div>
                    <p className="font-label text-[12px] font-semibold text-text-muted-light">
                      Primary Sighting Zones
                    </p>
                    <p className="font-body text-[13px] text-on-sand-elevated mt-0.5">
                      {selectedSpecies.bestZones}
                    </p>
                  </div>
                </div>

                <div className="p-4 rounded-lg bg-sand-elevated border border-sand-muted flex items-start gap-3">
                  <Clock className="w-5 h-5 text-sage-green shrink-0 mt-0.5" aria-hidden="true" />
                  <div>
                    <p className="font-label text-[12px] font-semibold text-text-muted-light">
                      Peak Activity Window
                    </p>
                    <p className="font-body text-[13px] text-on-sand-elevated mt-0.5">
                      {selectedSpecies.peakHours}
                    </p>
                  </div>
                </div>
              </div>

              <div className="p-4 rounded-lg bg-sand-muted/70 flex items-start gap-3">
                <Camera className="w-5 h-5 text-sage-green shrink-0 mt-0.5" aria-hidden="true" />
                <div>
                  <p className="font-label text-[12px] font-semibold text-on-warm-sand">
                    Field Photography Tip
                  </p>
                  <p className="font-body text-[13px] text-text-muted-light mt-0.5">
                    {selectedSpecies.photographyTip}
                  </p>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row items-center justify-end gap-3 pt-1">
                <button
                  type="button"
                  onClick={() => setSelectedSpecies(null)}
                  className="w-full sm:w-auto px-5 py-2.5 rounded border border-sage-green text-on-warm-sand font-label text-[14px] font-semibold hover:bg-sage-green hover:text-on-sage-green transition-colors cursor-pointer"
                >
                  Close Dispatch
                </button>
                <button
                  type="button"
                  onClick={() => {
                    setSelectedSpecies(null);
                    onOpenBooking();
                  }}
                  className="w-full sm:w-auto px-6 py-2.5 rounded bg-leopard-amber text-on-leopard-amber font-label text-[14px] font-semibold hover:bg-amber-hover transition-colors cursor-pointer"
                >
                  Reserve Tracking Safari
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
