import { FormEvent, useState } from 'react';
import { ArrowRight, Calendar, CheckCircle2, Clock, Users } from 'lucide-react';
import { HERO_IMAGE, SafariPackage } from '../data/safaris';
import { SafeImage } from './SafeImage';

interface HeroSectionProps {
  onOpenBookingWithCriteria: (criteria: {
    packageId: SafariPackage['id'];
    date: string;
    timeSlot: string;
    guests: string;
  }) => void;
  onOpenWhatsApp: (prefillNote: string) => void;
}

export function HeroSection({
  onOpenBookingWithCriteria,
  onOpenWhatsApp,
}: HeroSectionProps) {
  const [date, setDate] = useState('2026-12-14');
  const [safariTime, setSafariTime] = useState<'Morning' | 'Evening' | 'Full Day'>('Morning');
  const [guests, setGuests] = useState('2 Guests (Private Jeep)');
  const [availabilityMessage, setAvailabilityMessage] = useState<string | null>(null);

  const mapTimeToPackageId = (time: 'Morning' | 'Evening' | 'Full Day'): SafariPackage['id'] => {
    if (time === 'Full Day') return 'full-day';
    if (time === 'Evening') return 'sunset';
    return 'morning';
  };

  const mapTimeToDeparture = (time: 'Morning' | 'Evening' | 'Full Day'): string => {
    if (time === 'Evening') return '2:30 PM (Sunset & Dusk)';
    return '5:30 AM (Full Day / Morning)';
  };

  const handleCheckAvailability = (e: FormEvent) => {
    e.preventDefault();
    const formattedDate = date || 'Selected date';
    setAvailabilityMessage(
      `Private 4x4 available on ${formattedDate} for ${safariTime} (${guests}).`
    );
  };

  return (
    <section
      id="safaris"
      className="relative min-h-[760px] lg:min-h-[840px] flex flex-col justify-between bg-jungle-charcoal overflow-hidden"
    >
      {/* Full-bleed Hero Background */}
      <SafeImage
        src={HERO_IMAGE.url}
        alt={HERO_IMAGE.alt}
        fallbackTitle="Yala National Park · Sri Lankan Leopard"
        className="absolute inset-0 w-full h-full object-cover object-center"
      />

      {/* Editorial Contrast Scrims */}
      <div className="absolute inset-0 bg-gradient-to-r from-jungle-charcoal/90 via-jungle-charcoal/55 to-jungle-charcoal/20" />
      <div className="absolute inset-0 bg-gradient-to-t from-jungle-charcoal via-transparent to-jungle-charcoal/50" />

      {/* Hero Copy */}
      <div className="relative z-10 max-w-7xl w-full mx-auto px-6 md:px-8 pt-36 md:pt-44 pb-8 flex-1 flex flex-col justify-center">
        <div className="max-w-2xl flex flex-col gap-5">
          <p className="font-label text-[13px] font-semibold tracking-[0.08em] text-leopard-amber">
            Yala National Park · Block 1 &amp; Block 5 · Sri Lanka
          </p>
          <h1 className="font-display text-[36px] leading-[42px] md:text-[64px] md:leading-[72px] tracking-[-0.5px] md:tracking-[-1px] font-bold text-on-jungle-charcoal text-balance">
            Track the Untamed Spirit of Yala.
          </h1>
          <p className="font-body text-[16px] leading-[26px] text-on-jungle-charcoal/90 max-w-xl text-pretty">
            Private luxury jeep safaris, expert naturalists, and unforgettable wildlife encounters in Sri Lanka&apos;s premier leopard sanctuary.
          </p>
        </div>
      </div>

      {/* Floating Horizontal Glassmorphism Booking Widget */}
      <div
        id="booking-widget"
        className="relative z-20 max-w-7xl w-full mx-auto px-6 md:px-8 pb-8 md:pb-12"
      >
        <form
          onSubmit={handleCheckAvailability}
          className="rounded-lg bg-jungle-charcoal/80 backdrop-blur-md border border-warm-sand/15 p-4 md:p-6 grid grid-cols-1 md:grid-cols-4 gap-4 items-end"
        >
          {/* Date Field */}
          <label className="flex flex-col gap-1.5">
            <span className="font-label text-[12px] leading-[16px] font-semibold tracking-[0.6px] text-text-muted-dark">
              Date
            </span>
            <div className="relative flex items-center">
              <Calendar
                aria-hidden="true"
                className="w-4 h-4 absolute left-3.5 text-leopard-amber pointer-events-none"
              />
              <input
                type="date"
                name="safari-date"
                value={date}
                onChange={(e) => {
                  setDate(e.target.value);
                  setAvailabilityMessage(null);
                }}
                required
                className="w-full rounded bg-charcoal-elevated/95 border border-charcoal-muted pl-10 pr-3 py-3 text-[15px] text-on-charcoal-elevated focus:border-leopard-amber focus:ring-1 focus:ring-leopard-amber focus:outline-none transition-colors duration-150"
              />
            </div>
          </label>

          {/* Safari Time Field */}
          <label className="flex flex-col gap-1.5">
            <span className="font-label text-[12px] leading-[16px] font-semibold tracking-[0.6px] text-text-muted-dark">
              Safari Time
            </span>
            <div className="relative flex items-center">
              <Clock
                aria-hidden="true"
                className="w-4 h-4 absolute left-3.5 text-leopard-amber pointer-events-none"
              />
              <select
                name="safari-time"
                value={safariTime}
                onChange={(e) => {
                  setSafariTime(e.target.value as 'Morning' | 'Evening' | 'Full Day');
                  setAvailabilityMessage(null);
                }}
                className="w-full rounded bg-charcoal-elevated/95 border border-charcoal-muted pl-10 pr-8 py-3 text-[15px] text-on-charcoal-elevated focus:border-leopard-amber focus:ring-1 focus:ring-leopard-amber focus:outline-none transition-colors duration-150"
              >
                <option value="Morning">Morning (5:30 AM – 9:30 AM)</option>
                <option value="Evening">Evening (2:30 PM – 6:30 PM)</option>
                <option value="Full Day">Full Day (5:30 AM – 6:00 PM)</option>
              </select>
            </div>
          </label>

          {/* Guests Field */}
          <label className="flex flex-col gap-1.5">
            <span className="font-label text-[12px] leading-[16px] font-semibold tracking-[0.6px] text-text-muted-dark">
              Guests
            </span>
            <div className="relative flex items-center">
              <Users
                aria-hidden="true"
                className="w-4 h-4 absolute left-3.5 text-leopard-amber pointer-events-none"
              />
              <select
                name="safari-guests"
                value={guests}
                onChange={(e) => {
                  setGuests(e.target.value);
                  setAvailabilityMessage(null);
                }}
                className="w-full rounded bg-charcoal-elevated/95 border border-charcoal-muted pl-10 pr-8 py-3 text-[15px] text-on-charcoal-elevated focus:border-leopard-amber focus:ring-1 focus:ring-leopard-amber focus:outline-none transition-colors duration-150"
              >
                <option value="2 Guests (Private Jeep)">2 Guests (Private Jeep)</option>
                <option value="1 Guest (Solo Tracker)">1 Guest (Solo Tracker)</option>
                <option value="3 Guests (Private Jeep)">3 Guests (Private Jeep)</option>
                <option value="4 Guests (Private Jeep)">4 Guests (Private Jeep)</option>
                <option value="5–6 Guests (Extended 4x4)">5–6 Guests (Extended 4x4)</option>
              </select>
            </div>
          </label>

          {/* Check Availability CTA */}
          <button
            type="submit"
            className="w-full inline-flex items-center justify-center gap-2 px-6 py-3 rounded bg-leopard-amber text-on-leopard-amber font-label text-[14px] font-semibold hover:bg-amber-hover focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-leopard-amber transition-colors duration-150 whitespace-nowrap shrink-0 cursor-pointer"
          >
            <span>Check Availability</span>
            <ArrowRight className="w-4 h-4" aria-hidden="true" />
          </button>
        </form>

        {/* Live Availability Confirmation Banner */}
        {availabilityMessage && (
          <div
            role="status"
            className="mt-3 rounded-lg bg-charcoal-elevated/95 border border-sage-green px-4 py-3 flex flex-col sm:flex-row sm:items-center justify-between gap-3"
          >
            <div className="flex items-center gap-2.5">
              <CheckCircle2 className="w-5 h-5 text-leopard-amber shrink-0" aria-hidden="true" />
              <p className="font-body text-[14px] text-on-charcoal-elevated">
                {availabilityMessage}
              </p>
            </div>
            <div className="flex items-center gap-4 shrink-0">
              <button
                type="button"
                onClick={() =>
                  onOpenBookingWithCriteria({
                    packageId: mapTimeToPackageId(safariTime),
                    date,
                    timeSlot: mapTimeToDeparture(safariTime),
                    guests,
                  })
                }
                className="font-label text-[13px] font-semibold px-4 py-2 rounded bg-leopard-amber text-on-leopard-amber hover:bg-amber-hover transition-colors whitespace-nowrap shrink-0 cursor-pointer"
              >
                Reserve This Slot
              </button>
              <button
                type="button"
                onClick={() =>
                  onOpenWhatsApp(
                    `Checking private 4x4 availability for ${date} (${safariTime}, ${guests}).`
                  )
                }
                className="font-label text-[13px] font-semibold text-leopard-amber hover:underline whitespace-nowrap shrink-0 cursor-pointer"
              >
                Confirm via WhatsApp
              </button>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
