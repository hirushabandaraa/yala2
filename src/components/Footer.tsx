import { FormEvent, useState } from 'react';
import { Mail, MapPin, MessageSquare } from 'lucide-react';
import { BrandMark } from './BrandMark';

interface FooterProps {
  onNavigateSection: (sectionId: string) => void;
  onOpenWhatsApp: (prefillNote: string) => void;
}

const EXPLORE_LINKS = [
  { id: 'safaris', label: 'Safaris' },
  { id: 'wildlife', label: 'Wildlife Sightings' },
  { id: 'packages', label: 'Safari Packages' },
  { id: 'about', label: 'About Us' },
];

export function Footer({ onNavigateSection, onOpenWhatsApp }: FooterProps) {
  const [email, setEmail] = useState('');
  const [subscribedEmail, setSubscribedEmail] = useState<string | null>(null);
  const [emailError, setEmailError] = useState<string | null>(null);

  const handleSubscribe = (e: FormEvent) => {
    e.preventDefault();
    const trimmed = email.trim();
    if (!trimmed || !trimmed.includes('@') || !trimmed.includes('.')) {
      setEmailError('Please enter a valid email address.');
      return;
    }
    setEmailError(null);
    setSubscribedEmail(trimmed);
    setEmail('');
  };

  return (
    <footer
      id="footer"
      className="bg-jungle-charcoal text-on-jungle-charcoal border-t border-charcoal-muted pt-12 pb-8"
    >
      <div className="max-w-7xl mx-auto px-6 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 pb-8 border-b border-charcoal-muted">
          {/* Brand + WhatsApp Direct Booking Action */}
          <div className="md:col-span-4 flex flex-col gap-4">
            <div className="flex items-center gap-2.5">
              <BrandMark className="w-7 h-7 text-leopard-amber shrink-0" />
              <span className="font-headline text-[20px] leading-[28px] font-semibold text-on-jungle-charcoal">
                Leapordsee Yala
              </span>
            </div>

            <p className="font-body text-[13px] leading-[20px] text-text-muted-dark max-w-xs text-pretty">
              Private eco-luxury jeep safaris and ethical leopard tracking across Yala National Park, Sri Lanka.
            </p>

            <button
              type="button"
              onClick={() =>
                onOpenWhatsApp(
                  'Hello Leapordsee Yala — I would like to arrange a private safari jeep from Tissamaharama.'
                )
              }
              className="inline-flex w-fit items-center gap-2 px-4 py-2 rounded-lg bg-charcoal-elevated border border-sage-green/60 hover:border-leopard-amber transition-colors duration-150 cursor-pointer"
            >
              <MessageSquare className="w-4 h-4 text-leopard-amber shrink-0" aria-hidden="true" />
              <span className="font-label text-[12px] font-semibold text-on-charcoal-elevated whitespace-nowrap">
                WhatsApp Direct Booking
              </span>
            </button>
          </div>

          {/* Quick Links */}
          <div className="md:col-span-2 flex flex-col gap-4">
            <h3 className="font-label text-[12px] font-semibold tracking-[0.08em] text-leopard-amber">
              Explore
            </h3>
            <ul className="flex flex-col gap-2">
              {EXPLORE_LINKS.map((link) => (
                <li key={link.id}>
                  <a
                    href={`#${link.id}`}
                    onClick={(e) => {
                      e.preventDefault();
                      onNavigateSection(link.id);
                    }}
                    className="font-body text-[13px] text-text-muted-dark hover:text-on-jungle-charcoal transition-colors duration-150"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Tissamaharama / Yala Location Details */}
          <div className="md:col-span-3 flex flex-col gap-4">
            <h3 className="font-label text-[12px] font-semibold tracking-[0.08em] text-leopard-amber">
              Basecamp
            </h3>
            <div className="flex flex-col gap-2.5 text-[13px] text-text-muted-dark">
              <div className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-sage-green shrink-0 mt-0.5" aria-hidden="true" />
                <span>Palatupana Road, Tissamaharama 82600, Yala National Park, Sri Lanka</span>
              </div>
              <a
                href="mailto:concierge@leapordseeyala.lk"
                className="flex items-center gap-2 hover:text-on-jungle-charcoal transition-colors"
              >
                <Mail className="w-4 h-4 text-sage-green shrink-0" aria-hidden="true" />
                <span>concierge@leapordseeyala.lk</span>
              </a>
            </div>

            {/* Social Media Links */}
            <div className="flex items-center gap-4 pt-1">
              <a
                href="#wildlife"
                onClick={(e) => {
                  e.preventDefault();
                  onNavigateSection('wildlife');
                }}
                aria-label="Instagram Sightings Gallery"
                className="text-text-muted-dark hover:text-leopard-amber transition-colors duration-150"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="1.75" viewBox="0 0 24 24" aria-hidden="true">
                  <rect x="2" y="2" width="20" height="20" rx="5" />
                  <circle cx="12" cy="12" r="4" />
                  <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
                </svg>
              </a>
              <a
                href="#about"
                onClick={(e) => {
                  e.preventDefault();
                  onNavigateSection('about');
                }}
                aria-label="YouTube Field Films"
                className="text-text-muted-dark hover:text-leopard-amber transition-colors duration-150"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="1.75" viewBox="0 0 24 24" aria-hidden="true">
                  <rect x="2" y="5" width="20" height="14" rx="4" />
                  <polygon points="10,9 16,12 10,15" fill="currentColor" stroke="none" />
                </svg>
              </a>
              <a
                href="#packages"
                onClick={(e) => {
                  e.preventDefault();
                  onNavigateSection('packages');
                }}
                aria-label="Facebook Community"
                className="text-text-muted-dark hover:text-leopard-amber transition-colors duration-150"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="1.75" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
                </svg>
              </a>
            </div>
          </div>

          {/* Newsletter Signup */}
          <div className="md:col-span-3 flex flex-col gap-4">
            <h3 className="font-label text-[12px] font-semibold tracking-[0.08em] text-leopard-amber">
              Field Notes
            </h3>
            <p className="font-body text-[13px] leading-[20px] text-text-muted-dark">
              Monthly leopard sighting reports and seasonal Yala block openings.
            </p>
            <form onSubmit={handleSubscribe} noValidate className="flex flex-col gap-2">
              <label className="flex flex-col gap-1">
                <span className="sr-only">Email address</span>
                <input
                  type="email"
                  name="newsletter-email"
                  value={email}
                  onChange={(e) => {
                    setEmail(e.target.value);
                    setEmailError(null);
                  }}
                  placeholder="Enter your email"
                  required
                  className="w-full rounded bg-charcoal-elevated border border-charcoal-muted px-4 py-2.5 text-[13px] text-on-charcoal-elevated placeholder:text-text-muted-dark/60 focus:border-leopard-amber focus:ring-1 focus:ring-leopard-amber focus:outline-none transition-colors duration-150"
                />
              </label>
              <button
                type="submit"
                className="w-full inline-flex items-center justify-center px-4 py-2.5 rounded bg-leopard-amber text-on-leopard-amber font-label text-[14px] font-semibold hover:bg-amber-hover transition-colors duration-150 cursor-pointer"
              >
                Subscribe
              </button>
              {emailError && (
                <p role="alert" className="font-body text-[12px] text-amber-tint">
                  {emailError}
                </p>
              )}
              {subscribedEmail && (
                <p role="status" className="font-body text-[13px] text-leopard-amber">
                  Subscribed {subscribedEmail} to Yala Field Notes.
                </p>
              )}
            </form>
          </div>
        </div>

        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-2 text-[13px] text-text-muted-dark">
          <p>© 2026 Leapordsee Yala. All rights reserved.</p>
          <p>Licensed Yala National Park Safari Operator</p>
        </div>
      </div>
    </footer>
  );
}
