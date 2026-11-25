import { Camera, Car, Leaf, ShieldCheck } from 'lucide-react';
import { JEEP_COLLAGE_IMAGES } from '../data/safaris';
import { SafeImage } from './SafeImage';

const VALUE_PROPS = [
  {
    icon: ShieldCheck,
    title: 'Certified Wildlife Trackers',
    description:
      'Veteran naturalists trained in alarm-call reading, pugmark analysis, and Yala leopard territories.',
  },
  {
    icon: Camera,
    title: 'Custom Photography-Ready Jeeps',
    description:
      'Open-top 4x4s fitted with gimbal mounts, beanbag rails, dual charging ports, and silent-idle tuning.',
  },
  {
    icon: Leaf,
    title: 'Ethical & Eco-Friendly Tracking',
    description:
      'Strict zero-crowding distance rules, plastic-free bush picnics, and local conservation support.',
  },
  {
    icon: Car,
    title: 'Flexible Hotel Pickups in Tissamaharama & Yala',
    description:
      'Complimentary door-to-door transfers from boutique lodges in Tissamaharama & Yala buffer zones.',
  },
];

export function StandardSection() {
  return (
    <section id="about" className="bg-jungle-charcoal text-on-jungle-charcoal py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-6 md:px-8 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
        {/* Left: Collage of Custom-Modified Open-Top 4x4 Jeeps & Photography Gear */}
        <div className="lg:col-span-6 relative">
          <div className="grid grid-cols-12 gap-4 items-end">
            <div className="col-span-8 rounded-lg overflow-hidden border border-charcoal-muted bg-charcoal-elevated">
              <SafeImage
                src={JEEP_COLLAGE_IMAGES.main.url}
                alt={JEEP_COLLAGE_IMAGES.main.alt}
                fallbackTitle="Custom 4x4 Safari Jeep"
                className="w-full h-80 md:h-[420px] object-cover"
              />
            </div>

            <div className="col-span-4 flex flex-col gap-4">
              <div className="rounded-lg overflow-hidden border border-charcoal-muted bg-charcoal-elevated">
                <SafeImage
                  src={JEEP_COLLAGE_IMAGES.gear.url}
                  alt={JEEP_COLLAGE_IMAGES.gear.alt}
                  fallbackTitle="Telephoto Optics"
                  className="w-full h-44 md:h-56 object-cover"
                />
              </div>

              <div className="rounded-lg bg-charcoal-elevated border border-sage-green/40 p-4 flex flex-col gap-1">
                <span className="font-headline text-[28px] leading-[34px] md:text-[36px] md:leading-[44px] font-semibold text-leopard-amber tabular-nums">
                  94%
                </span>
                <span className="font-body text-[13px] leading-[20px] text-text-muted-dark">
                  Leopard sighting rate on Full-Day drives
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Right: Key Value Propositions */}
        <div className="lg:col-span-6 flex flex-col gap-6">
          <div className="flex flex-col gap-2">
            <span className="font-label text-[12px] font-semibold tracking-[0.08em] text-leopard-amber">
              The Leapordsee Standard
            </span>
            <h2 className="font-display text-[30px] leading-[36px] md:text-[48px] md:leading-[56px] tracking-[-0.5px] font-semibold text-on-jungle-charcoal text-balance">
              Built for Quiet Encounters &amp; Crisp Frames
            </h2>
            <p className="font-body text-[15px] leading-[24px] text-text-muted-dark text-pretty mt-1">
              We never race through convoy trails. Every vehicle, route, and tracker is dedicated to ethical, unhurried wildlife observation.
            </p>
          </div>

          <div className="flex flex-col gap-4">
            {VALUE_PROPS.map((prop) => {
              const Icon = prop.icon;
              return (
                <div
                  key={prop.title}
                  className="flex items-start gap-4 p-4 rounded-lg bg-charcoal-elevated/70 border border-charcoal-muted"
                >
                  <Icon className="w-6 h-6 text-leopard-amber shrink-0 mt-0.5" aria-hidden="true" />
                  <div className="flex flex-col gap-1">
                    <h3 className="font-title text-[17px] leading-[24px] font-semibold text-on-jungle-charcoal">
                      {prop.title}
                    </h3>
                    <p className="font-body text-[13px] leading-[20px] text-text-muted-dark text-pretty">
                      {prop.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
