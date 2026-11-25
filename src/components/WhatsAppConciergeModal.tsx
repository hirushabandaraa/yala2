import { FormEvent, useEffect, useState } from 'react';
import { Check, CheckCircle2, Copy, MessageSquare, Send, X } from 'lucide-react';

interface WhatsAppConciergeModalProps {
  isOpen: boolean;
  initialMessage: string;
  onClose: () => void;
}

export function WhatsAppConciergeModal({
  isOpen,
  initialMessage,
  onClose,
}: WhatsAppConciergeModalProps) {
  const [guestPhone, setGuestPhone] = useState('');
  const [message, setMessage] = useState(initialMessage);
  const [copied, setCopied] = useState(false);
  const [sent, setSent] = useState(false);

  useEffect(() => {
    if (!isOpen) return;
    setMessage(
      initialMessage ||
        'Hello Leapordsee Yala tracker desk, I would like to check private 4x4 safari availability.'
    );
    setCopied(false);
    setSent(false);
  }, [isOpen, initialMessage]);

  useEffect(() => {
    if (!isOpen) return;
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(message);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      setCopied(false);
    }
  };

  const handleSend = (e: FormEvent) => {
    e.preventDefault();
    if (!message.trim()) return;
    setSent(true);
  };

  if (!isOpen) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="whatsapp-concierge-heading"
      onClick={onClose}
      className="fixed inset-0 z-50 flex items-center justify-center p-4 md:p-8 bg-jungle-charcoal/85 backdrop-blur-md"
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="w-full max-w-lg rounded-lg bg-warm-sand text-on-warm-sand border border-sand-muted overflow-hidden"
      >
        <header className="bg-jungle-charcoal text-on-jungle-charcoal px-6 py-5 flex items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <MessageSquare className="w-5 h-5 text-leopard-amber shrink-0" aria-hidden="true" />
            <div>
              <span className="font-label text-[11px] font-semibold tracking-[0.08em] text-leopard-amber">
                Palatupana Basecamp Desk
              </span>
              <h2
                id="whatsapp-concierge-heading"
                className="font-headline text-[22px] leading-[28px] font-semibold text-on-jungle-charcoal"
              >
                WhatsApp Direct Booking
              </h2>
            </div>
          </div>

          <button
            type="button"
            onClick={onClose}
            aria-label="Close WhatsApp concierge"
            className="inline-flex items-center justify-center w-9 h-9 rounded-full border border-charcoal-muted bg-charcoal-elevated text-on-charcoal-elevated hover:border-leopard-amber transition-colors cursor-pointer"
          >
            <X className="w-4 h-4" />
          </button>
        </header>

        <form onSubmit={handleSend} className="p-6 flex flex-col gap-4">
          <div className="rounded bg-sand-elevated border border-sand-muted p-3.5 flex items-center justify-between gap-3">
            <div>
              <p className="font-label text-[12px] font-semibold text-text-muted-light">
                Tracker Dispatch Line (Yala Gate)
              </p>
              <p className="font-title text-[15px] font-semibold text-on-sand-elevated tabular-nums">
                +94 77 482 9104
              </p>
            </div>
            <span className="font-label text-[12px] font-semibold text-sage-green">
              Replies in ~10 min
            </span>
          </div>

          <label className="flex flex-col gap-1.5">
            <span className="font-label text-[12px] font-semibold text-text-muted-light">
              Your WhatsApp Number
            </span>
            <input
              type="tel"
              value={guestPhone}
              onChange={(e) => setGuestPhone(e.target.value)}
              placeholder="+44 7700 900123"
              required
              className="w-full rounded bg-sand-elevated border border-sand-muted px-3 py-2.5 text-[15px] text-on-sand-elevated focus:border-leopard-amber focus:ring-1 focus:ring-leopard-amber focus:outline-none"
            />
          </label>

          <label className="flex flex-col gap-1.5">
            <span className="font-label text-[12px] font-semibold text-text-muted-light">
              Message to Senior Tracker
            </span>
            <textarea
              rows={3}
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              required
              className="w-full rounded bg-sand-elevated border border-sand-muted px-3 py-2.5 text-[14px] text-on-sand-elevated focus:border-leopard-amber focus:ring-1 focus:ring-leopard-amber focus:outline-none resize-none"
            />
          </label>

          {sent && (
            <div
              role="status"
              className="rounded bg-sage-tint border border-sage-green/30 p-3.5 flex items-start gap-2.5 text-sage-green"
            >
              <CheckCircle2 className="w-4 h-4 shrink-0 mt-0.5" aria-hidden="true" />
              <p className="font-body text-[13px]">
                Dispatch note logged for {guestPhone}. Our lead naturalist at Palatupana Basecamp will message you shortly.
              </p>
            </div>
          )}

          <div className="flex flex-col sm:flex-row items-center justify-between gap-3 pt-1">
            <button
              type="button"
              onClick={handleCopy}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded border border-sage-green text-on-warm-sand font-label text-[13px] font-semibold hover:bg-sage-green hover:text-on-sage-green transition-colors cursor-pointer"
            >
              {copied ? (
                <>
                  <Check className="w-4 h-4" aria-hidden="true" />
                  <span>Copied Message</span>
                </>
              ) : (
                <>
                  <Copy className="w-4 h-4" aria-hidden="true" />
                  <span>Copy Note</span>
                </>
              )}
            </button>

            <button
              type="submit"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-2.5 rounded bg-leopard-amber text-on-leopard-amber font-label text-[14px] font-semibold hover:bg-amber-hover transition-colors cursor-pointer"
            >
              <Send className="w-4 h-4" aria-hidden="true" />
              <span>Send to Tracker</span>
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
