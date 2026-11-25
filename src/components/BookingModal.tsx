import { FormEvent, useEffect, useMemo, useState } from 'react';
import { CheckCircle2, X } from 'lucide-react';
import { SAFARI_PACKAGES, SafariPackage } from '../data/safaris';
import { SafeImage } from './SafeImage';

export interface BookingPrefill {
  packageId: SafariPackage['id'];
  date?: string;
  timeSlot?: string;
  guests?: string;
}

interface BookingModalProps {
  isOpen: boolean;
  prefill: BookingPrefill;
  onClose: () => void;
}

interface ConfirmedBooking {
  reference: string;
  packageTitle: string;
  price: number;
  date: string;
  departureTime: string;
  guests: string;
  fullName: string;
  contact: string;
  hotelPickup: string;
}

export function BookingModal({ isOpen, prefill, onClose }: BookingModalProps) {
  const [packageId, setPackageId] = useState<SafariPackage['id']>(prefill.packageId);
  const [date, setDate] = useState(prefill.date || '2026-12-14');
  const [departureTime, setDepartureTime] = useState(
    prefill.timeSlot || '5:30 AM (Full Day / Morning)'
  );
  const [guests, setGuests] = useState(prefill.guests || '2 Guests (Private 4x4 Jeep)');
  const [fullName, setFullName] = useState('Clara Vance');
  const [contact, setContact] = useState('+44 7700 900123');
  const [hotelPickup, setHotelPickup] = useState('Wild Coast Tented Lodge, Palatupana');
  const [gimbalMount, setGimbalMount] = useState(true);
  const [vegMenu, setVegMenu] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const [confirmedBooking, setConfirmedBooking] = useState<ConfirmedBooking | null>(null);

  useEffect(() => {
    if (!isOpen) return;
    setPackageId(prefill.packageId);
    setDate(prefill.date || '2026-12-14');
    const pkg = SAFARI_PACKAGES.find((p) => p.id === prefill.packageId);
    setDepartureTime(prefill.timeSlot || pkg?.defaultDeparture || '5:30 AM (Full Day / Morning)');
    if (prefill.guests) {
      setGuests(prefill.guests);
    }
    setErrorMessage(null);
    setConfirmedBooking(null);
  }, [isOpen, prefill]);

  useEffect(() => {
    if (!isOpen) return;
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  const activePackage = useMemo(
    () => SAFARI_PACKAGES.find((p) => p.id === packageId) || SAFARI_PACKAGES[1],
    [packageId]
  );

  const handlePackageChange = (nextId: SafariPackage['id']) => {
    setPackageId(nextId);
    const nextPkg = SAFARI_PACKAGES.find((p) => p.id === nextId);
    if (nextPkg) {
      setDepartureTime(nextPkg.defaultDeparture);
    }
    setConfirmedBooking(null);
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!fullName.trim() || !contact.trim() || !hotelPickup.trim() || !date) {
      setErrorMessage('Please complete your name, contact, pickup lodge, and safari date.');
      return;
    }
    setErrorMessage(null);
    const suffix = Math.floor(1000 + Math.random() * 9000);
    setConfirmedBooking({
      reference: `YALA-${date.replaceAll('-', '').slice(2, 6)}-${suffix}`,
      packageTitle: activePackage.title,
      price: activePackage.price,
      date,
      departureTime,
      guests,
      fullName: fullName.trim(),
      contact: contact.trim(),
      hotelPickup: hotelPickup.trim(),
    });
  };

  if (!isOpen) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="safari-modal-heading"
      onClick={onClose}
      className="fixed inset-0 z-50 flex items-center justify-center p-4 md:p-8 bg-jungle-charcoal/85 backdrop-blur-md overflow-y-auto"
    >
      {/* Dimmed Backdrop Image */}
      <SafeImage
        src={activePackage.heroBannerUrl}
        alt="Yala National Park safari backdrop"
        className="pointer-events-none fixed inset-0 w-full h-full object-cover opacity-20 -z-10"
      />

      {/* Centered Booking Modal */}
      <div
        onClick={(e) => e.stopPropagation()}
        className="relative z-10 w-full max-w-2xl rounded-lg bg-warm-sand text-on-warm-sand border border-sand-muted overflow-hidden my-auto"
      >
        {/* Modal Header */}
        <header className="bg-jungle-charcoal text-on-jungle-charcoal px-6 py-5 flex items-center justify-between gap-4">
          <div className="flex flex-col gap-0.5">
            <span className="font-label text-[12px] font-semibold tracking-[0.08em] text-leopard-amber">
              Private Jeep Charter
            </span>
            <h2
              id="safari-modal-heading"
              className="font-headline text-[26px] leading-[32px] md:text-[36px] md:leading-[44px] font-semibold text-on-jungle-charcoal"
            >
              Reserve Your Safari
            </h2>
          </div>

          <button
            type="button"
            onClick={onClose}
            aria-label="Close booking modal"
            className="inline-flex items-center justify-center w-10 h-10 rounded-full border border-charcoal-muted bg-charcoal-elevated text-on-charcoal-elevated hover:border-leopard-amber transition-colors duration-150 cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </header>

        {/* Modal Form Body */}
        <form onSubmit={handleSubmit} className="p-6 flex flex-col gap-5">
          {/* Package & Date */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <label className="flex flex-col gap-1.5">
              <span className="font-label text-[12px] font-semibold tracking-[0.05em] text-text-muted-light">
                Safari Package
              </span>
              <select
                name="package"
                value={packageId}
                onChange={(e) => handlePackageChange(e.target.value as SafariPackage['id'])}
                className="w-full rounded bg-sand-elevated border border-sand-muted px-3 py-2.5 text-[15px] text-on-sand-elevated focus:border-leopard-amber focus:ring-1 focus:ring-leopard-amber focus:outline-none"
              >
                <option value="full-day">Full-Day Leopard Tracker ($290)</option>
                <option value="morning">Golden Hour Morning Safari ($145)</option>
                <option value="sunset">Sunset &amp; Dusk Wilderness Drive ($140)</option>
              </select>
            </label>

            <label className="flex flex-col gap-1.5">
              <span className="font-label text-[12px] font-semibold tracking-[0.05em] text-text-muted-light">
                Preferred Date
              </span>
              <input
                type="date"
                name="date"
                value={date}
                onChange={(e) => setDate(e.target.value)}
                required
                className="w-full rounded bg-sand-elevated border border-sand-muted px-3 py-2.5 text-[15px] text-on-sand-elevated focus:border-leopard-amber focus:ring-1 focus:ring-leopard-amber focus:outline-none"
              />
            </label>
          </div>

          {/* Time & Guests */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <label className="flex flex-col gap-1.5">
              <span className="font-label text-[12px] font-semibold tracking-[0.05em] text-text-muted-light">
                Departure Time
              </span>
              <select
                name="time"
                value={departureTime}
                onChange={(e) => setDepartureTime(e.target.value)}
                className="w-full rounded bg-sand-elevated border border-sand-muted px-3 py-2.5 text-[15px] text-on-sand-elevated focus:border-leopard-amber focus:ring-1 focus:ring-leopard-amber focus:outline-none"
              >
                <option value="5:30 AM (Full Day / Morning)">5:30 AM (Full Day / Morning)</option>
                <option value="2:30 PM (Sunset & Dusk)">2:30 PM (Sunset &amp; Dusk)</option>
              </select>
            </label>

            <label className="flex flex-col gap-1.5">
              <span className="font-label text-[12px] font-semibold tracking-[0.05em] text-text-muted-light">
                Guests
              </span>
              <select
                name="guests"
                value={guests}
                onChange={(e) => setGuests(e.target.value)}
                className="w-full rounded bg-sand-elevated border border-sand-muted px-3 py-2.5 text-[15px] text-on-sand-elevated focus:border-leopard-amber focus:ring-1 focus:ring-leopard-amber focus:outline-none"
              >
                <option value="2 Guests (Private 4x4 Jeep)">2 Guests (Private 4x4 Jeep)</option>
                <option value="2 Guests (Private Jeep)">2 Guests (Private Jeep)</option>
                <option value="1 Guest (Solo Tracker)">1 Guest (Solo Tracker)</option>
                <option value="3 Guests (Private Jeep)">3 Guests (Private Jeep)</option>
                <option value="3–4 Guests (Private 4x4 Jeep)">3–4 Guests (Private 4x4 Jeep)</option>
                <option value="4 Guests (Private Jeep)">4 Guests (Private Jeep)</option>
                <option value="5–6 Guests (Extended 4x4)">5–6 Guests (Extended 4x4)</option>
              </select>
            </label>
          </div>

          {/* Guest Contact & Pickup */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <label className="flex flex-col gap-1.5">
              <span className="font-label text-[12px] font-semibold tracking-[0.05em] text-text-muted-light">
                Full Name
              </span>
              <input
                type="text"
                value={fullName}
                onChange={(e) => setFullName(e.target.value)}
                placeholder="Clara Vance"
                required
                className="w-full rounded bg-sand-elevated border border-sand-muted px-3 py-2.5 text-[15px] text-on-sand-elevated focus:border-leopard-amber focus:ring-1 focus:ring-leopard-amber focus:outline-none"
              />
            </label>

            <label className="flex flex-col gap-1.5">
              <span className="font-label text-[12px] font-semibold tracking-[0.05em] text-text-muted-light">
                WhatsApp or Email
              </span>
              <input
                type="text"
                value={contact}
                onChange={(e) => setContact(e.target.value)}
                placeholder="+44 7700 900123"
                required
                className="w-full rounded bg-sand-elevated border border-sand-muted px-3 py-2.5 text-[15px] text-on-sand-elevated focus:border-leopard-amber focus:ring-1 focus:ring-leopard-amber focus:outline-none"
              />
            </label>
          </div>

          <label className="flex flex-col gap-1.5">
            <span className="font-label text-[12px] font-semibold tracking-[0.05em] text-text-muted-light">
              Tissamaharama / Yala Hotel Pickup
            </span>
            <input
              type="text"
              value={hotelPickup}
              onChange={(e) => setHotelPickup(e.target.value)}
              placeholder="Wild Coast Tented Lodge, Palatupana"
              required
              className="w-full rounded bg-sand-elevated border border-sand-muted px-3 py-2.5 text-[15px] text-on-sand-elevated focus:border-leopard-amber focus:ring-1 focus:ring-leopard-amber focus:outline-none"
            />
          </label>

          {/* Complimentary Gear & Dietary Options */}
          <div className="flex flex-col gap-2">
            <span className="font-label text-[12px] font-semibold tracking-[0.05em] text-text-muted-light">
              Complimentary Preferences
            </span>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
              <label className="flex items-center gap-2.5 p-3 rounded bg-sand-elevated border border-sand-muted cursor-pointer">
                <input
                  type="checkbox"
                  checked={gimbalMount}
                  onChange={(e) => setGimbalMount(e.target.checked)}
                  className="rounded border-sage-green text-leopard-amber focus:ring-leopard-amber"
                />
                <span className="font-body text-[13px] text-on-sand-elevated">
                  Gimbal &amp; Beanbag Camera Mount
                </span>
              </label>

              <label className="flex items-center gap-2.5 p-3 rounded bg-sand-elevated border border-sand-muted cursor-pointer">
                <input
                  type="checkbox"
                  checked={vegMenu}
                  onChange={(e) => setVegMenu(e.target.checked)}
                  className="rounded border-sage-green text-leopard-amber focus:ring-leopard-amber"
                />
                <span className="font-body text-[13px] text-on-sand-elevated">
                  Vegetarian Bush Picnic Menu
                </span>
              </label>
            </div>
          </div>

          {/* Summary Bar */}
          <div className="rounded-lg bg-sand-muted p-4 flex items-center justify-between gap-4">
            <div className="flex flex-col">
              <span className="font-title text-[17px] leading-[24px] font-semibold text-on-warm-sand">
                Total Private Jeep Charter
              </span>
              <span className="font-body text-[13px] text-text-muted-light">
                No prepayment required today · Free 48h cancellation
              </span>
            </div>
            <span className="font-headline text-[32px] leading-[40px] font-semibold text-on-warm-sand tabular-nums">
              ${activePackage.price}
            </span>
          </div>

          {errorMessage && (
            <p role="alert" className="font-body text-[13px] text-error font-medium">
              {errorMessage}
            </p>
          )}

          {/* Confirmation Feedback */}
          {confirmedBooking && (
            <div
              role="status"
              className="rounded-lg bg-sage-tint border border-sage-green/30 p-4 flex items-start gap-3 text-sage-green"
            >
              <CheckCircle2 className="w-5 h-5 shrink-0 mt-0.5" aria-hidden="true" />
              <div className="flex flex-col gap-1">
                <p className="font-label text-[13px] font-semibold text-on-warm-sand">
                  Request confirmed · Reference {confirmedBooking.reference}
                </p>
                <p className="font-body text-[13px] text-sage-green">
                  {confirmedBooking.packageTitle} (${confirmedBooking.price}) on{' '}
                  {confirmedBooking.date} at {confirmedBooking.departureTime} for{' '}
                  {confirmedBooking.guests}. Your assigned tracker will send gate coordinates to{' '}
                  {confirmedBooking.contact} for pickup at {confirmedBooking.hotelPickup}.
                </p>
              </div>
            </div>
          )}

          {/* Modal Actions */}
          <footer className="flex flex-col sm:flex-row items-center justify-end gap-3 pt-1">
            <button
              type="button"
              onClick={onClose}
              className="w-full sm:w-auto inline-flex items-center justify-center px-6 py-3 rounded border border-sage-green text-on-warm-sand font-label text-[14px] font-semibold hover:bg-sage-green hover:text-on-sage-green transition-colors duration-150 whitespace-nowrap shrink-0 cursor-pointer"
            >
              {confirmedBooking ? 'Done' : 'Cancel'}
            </button>
            <button
              type="submit"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-3 rounded bg-leopard-amber text-on-leopard-amber font-label text-[14px] font-semibold hover:bg-amber-hover focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-leopard-amber transition-colors duration-150 whitespace-nowrap shrink-0 cursor-pointer"
            >
              <span>{confirmedBooking ? 'Update Request' : 'Confirm Safari Request'}</span>
              <CheckCircle2 className="w-4 h-4" aria-hidden="true" />
            </button>
          </footer>
        </form>
      </div>
    </div>
  );
}
