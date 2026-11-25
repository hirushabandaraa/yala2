import { useState } from 'react';
import { Compass } from 'lucide-react';

interface SafeImageProps {
  src: string;
  alt: string;
  className?: string;
  fallbackTitle?: string;
}

export function SafeImage({ src, alt, className = '', fallbackTitle }: SafeImageProps) {
  const [hasError, setHasError] = useState(false);

  if (hasError) {
    return (
      <div
        role="img"
        aria-label={alt}
        className={`flex flex-col items-center justify-center gap-2 bg-gradient-to-br from-charcoal-elevated via-jungle-charcoal to-sage-green/40 text-on-jungle-charcoal/80 p-6 text-center ${className}`}
      >
        <Compass className="w-8 h-8 text-leopard-amber/80" aria-hidden="true" />
        {fallbackTitle && (
          <span className="font-headline text-sm tracking-wide text-on-jungle-charcoal/90">
            {fallbackTitle}
          </span>
        )}
      </div>
    );
  }

  return (
    <img
      src={src}
      alt={alt}
      referrerPolicy="no-referrer"
      onError={() => setHasError(true)}
      className={className}
    />
  );
}
