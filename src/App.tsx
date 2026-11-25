import { useCallback, useState } from 'react';
import { BookingModal, BookingPrefill } from './components/BookingModal';
import { Footer } from './components/Footer';
import { Header } from './components/Header';
import { HeroSection } from './components/HeroSection';
import { PackageDetailView } from './components/PackageDetailView';
import { PackagesSection } from './components/PackagesSection';
import { StandardSection } from './components/StandardSection';
import { TestimonialsSection } from './components/TestimonialsSection';
import { WhatsAppConciergeModal } from './components/WhatsAppConciergeModal';
import { WildlifeGallery } from './components/WildlifeGallery';
import { SAFARI_PACKAGES, SafariPackage } from './data/safaris';

export default function App() {
  const [activeView, setActiveView] = useState<'landing' | 'detail'>('landing');
  const [selectedPackageId, setSelectedPackageId] = useState<SafariPackage['id']>('full-day');

  const [bookingOpen, setBookingOpen] = useState(false);
  const [bookingPrefill, setBookingPrefill] = useState<BookingPrefill>({
    packageId: 'full-day',
  });

  const [whatsAppOpen, setWhatsAppOpen] = useState(false);
  const [whatsAppNote, setWhatsAppNote] = useState('');

  const selectedPackage =
    SAFARI_PACKAGES.find((p) => p.id === selectedPackageId) || SAFARI_PACKAGES[1];

  const handleNavigateSection = useCallback(
    (sectionId: string) => {
      if (activeView !== 'landing') {
        setActiveView('landing');
        setTimeout(() => {
          document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
        }, 50);
      } else {
        document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
      }
    },
    [activeView]
  );

  const handleGoHome = useCallback(() => {
    setActiveView('landing');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  const handleSelectPackageDetail = useCallback((pkgId: SafariPackage['id']) => {
    setSelectedPackageId(pkgId);
    setActiveView('detail');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  const handleOpenBooking = useCallback((pkgId: SafariPackage['id'] = 'full-day') => {
    setBookingPrefill({ packageId: pkgId });
    setBookingOpen(true);
  }, []);

  const handleOpenBookingWithCriteria = useCallback((criteria: BookingPrefill) => {
    setBookingPrefill(criteria);
    setBookingOpen(true);
  }, []);

  const handleOpenWhatsApp = useCallback((prefillNote: string) => {
    setWhatsAppNote(prefillNote);
    setWhatsAppOpen(true);
  }, []);

  return (
    <div className="min-h-screen flex flex-col bg-jungle-charcoal text-on-jungle-charcoal">
      <Header
        activeView={activeView}
        onNavigateSection={handleNavigateSection}
        onGoHome={handleGoHome}
        onOpenBooking={() =>
          handleOpenBooking(activeView === 'detail' ? selectedPackageId : 'full-day')
        }
      />

      <main className="flex-1 flex flex-col">
        {activeView === 'landing' ? (
          <>
            <HeroSection
              onOpenBookingWithCriteria={handleOpenBookingWithCriteria}
              onOpenWhatsApp={handleOpenWhatsApp}
            />
            <PackagesSection
              onSelectPackageDetail={handleSelectPackageDetail}
              onReservePackage={handleOpenBooking}
            />
            <StandardSection />
            <WildlifeGallery onOpenBooking={() => handleOpenBooking('full-day')} />
            <TestimonialsSection />
          </>
        ) : (
          <PackageDetailView
            selectedPackage={selectedPackage}
            onSelectPackage={(pkgId) => setSelectedPackageId(pkgId)}
            onBackToPackages={() => handleNavigateSection('packages')}
            onOpenBooking={handleOpenBooking}
            onOpenWhatsApp={handleOpenWhatsApp}
          />
        )}
      </main>

      <Footer
        onNavigateSection={handleNavigateSection}
        onOpenWhatsApp={handleOpenWhatsApp}
      />

      <BookingModal
        isOpen={bookingOpen}
        prefill={bookingPrefill}
        onClose={() => setBookingOpen(false)}
      />

      <WhatsAppConciergeModal
        isOpen={whatsAppOpen}
        initialMessage={whatsAppNote}
        onClose={() => setWhatsAppOpen(false)}
      />
    </div>
  );
}
