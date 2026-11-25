import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { BrandMark } from './BrandMark';

interface HeaderProps {
  activeView: 'landing' | 'detail';
  onNavigateSection: (sectionId: string) => void;
  onGoHome: () => void;
  onOpenBooking: () => void;
}

const NAV_LINKS = [
  { id: 'safaris', label: 'Safaris' },
  { id: 'wildlife', label: 'Wildlife' },
  { id: 'packages', label: 'Packages' },
  { id: 'about', label: 'About Us' },
];

export function Header({
  activeView,
  onNavigateSection,
  onGoHome,
  onOpenBooking,
}: HeaderProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleLinkClick = (sectionId: string) => {
    setMobileMenuOpen(false);
    onNavigateSection(sectionId);
  };

  return (
    <header className="absolute top-0 inset-x-0 z-30">
      <div className="max-w-7xl mx-auto px-6 md:px-8 py-6 flex items-center justify-between gap-8">
        {/* Zone 1: Single-line Brand Wordmark */}
        <a
          href="#safaris"
          onClick={(e) => {
            e.preventDefault();
            setMobileMenuOpen(false);
            onGoHome();
          }}
          className="inline-flex items-center gap-2.5 text-on-jungle-charcoal focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-leopard-amber rounded whitespace-nowrap shrink-0"
        >
          <BrandMark />
          <span className="font-headline text-[17px] font-semibold tracking-tight text-on-jungle-charcoal whitespace-nowrap shrink-0">
            Leapordsee Yala
          </span>
        </a>

        {/* Zone 2: 4 Concise Single-Line Navigation Links */}
        <nav aria-label="Primary Navigation" className="hidden md:flex items-center gap-8">
          {NAV_LINKS.map((link) => {
            const isHighlighted = activeView === 'detail' && link.id === 'packages';
            return (
              <a
                key={link.id}
                href={`#${link.id}`}
                onClick={(e) => {
                  e.preventDefault();
                  handleLinkClick(link.id);
                }}
                className={`font-label text-[14px] font-semibold tracking-[0.2px] whitespace-nowrap shrink-0 transition-colors duration-150 ease-out hover:text-leopard-amber hover:underline underline-offset-4 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-leopard-amber rounded ${
                  isHighlighted ? 'text-leopard-amber' : 'text-on-jungle-charcoal/90'
                }`}
              >
                {link.label}
              </a>
            );
          })}
        </nav>

        {/* Zone 3: 1 Primary Action + Mobile Menu Trigger */}
        <div className="flex items-center gap-3 shrink-0">
          <button
            type="button"
            onClick={onOpenBooking}
            className="inline-flex items-center justify-center px-6 py-2.5 rounded bg-leopard-amber text-on-leopard-amber font-label text-[14px] font-semibold tracking-[0.2px] hover:bg-amber-hover focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-leopard-amber transition-colors duration-150 ease-out whitespace-nowrap shrink-0 cursor-pointer"
          >
            Book Safari
          </button>

          <button
            type="button"
            aria-label={mobileMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
            aria-expanded={mobileMenuOpen}
            onClick={() => setMobileMenuOpen((prev) => !prev)}
            className="md:hidden inline-flex items-center justify-center w-10 h-10 rounded border border-warm-sand/20 bg-jungle-charcoal/75 text-on-jungle-charcoal hover:border-leopard-amber transition-colors cursor-pointer"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <nav
          aria-label="Mobile Navigation"
          className="md:hidden mx-6 rounded-lg bg-charcoal-elevated/95 backdrop-blur-md border border-charcoal-muted p-4 flex flex-col gap-2"
        >
          {NAV_LINKS.map((link) => (
            <a
              key={link.id}
              href={`#${link.id}`}
              onClick={(e) => {
                e.preventDefault();
                handleLinkClick(link.id);
              }}
              className="px-3 py-2.5 rounded font-label text-[15px] font-semibold text-on-charcoal-elevated hover:bg-charcoal-muted hover:text-leopard-amber transition-colors"
            >
              {link.label}
            </a>
          ))}
        </nav>
      )}
    </header>
  );
}
