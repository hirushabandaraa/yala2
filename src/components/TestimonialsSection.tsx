import { Star } from 'lucide-react';
import { TESTIMONIALS } from '../data/safaris';

export function TestimonialsSection() {
  return (
    <section className="bg-sand-muted text-on-warm-sand py-16 md:py-24 border-t border-sand-muted">
      <div className="max-w-7xl mx-auto px-6 md:px-8">
        <div className="flex flex-col gap-2 mb-10 max-w-2xl">
          <span className="font-label text-[12px] font-semibold tracking-[0.08em] text-sage-green">
            Guest Stories
          </span>
          <h2 className="font-display text-[30px] leading-[36px] md:text-[48px] md:leading-[56px] tracking-[-0.5px] font-semibold text-on-warm-sand text-balance">
            Memories from the Bush
          </h2>
        </div>

        {/* Horizontal Review Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-stretch">
          {TESTIMONIALS.map((review) => (
            <article
              key={review.id}
              className="h-full bg-sand-elevated text-on-sand-elevated rounded-lg border border-sand-muted p-6 flex flex-col justify-between gap-4"
            >
              <div className="flex flex-col gap-4">
                <div className="flex items-center gap-1 text-leopard-amber" aria-label="5 out of 5 stars">
                  {Array.from({ length: 5 }).map((_, index) => (
                    <Star
                      key={index}
                      className="w-4 h-4 fill-leopard-amber text-leopard-amber"
                      aria-hidden="true"
                    />
                  ))}
                </div>
                <p className="font-body text-[15px] leading-[24px] text-on-sand-elevated text-pretty">
                  {review.quote}
                </p>
              </div>

              <header className="pt-3 border-t border-sand-muted flex items-center justify-between gap-3">
                <div>
                  <h3 className="font-title text-[17px] leading-[24px] font-semibold text-on-sand-elevated">
                    {review.author}
                  </h3>
                  <p className="font-body text-[13px] leading-[20px] text-text-muted-light">
                    {review.country}
                  </p>
                </div>
                <span className="font-label text-[12px] font-semibold text-sage-green whitespace-nowrap shrink-0">
                  {review.packageName}
                </span>
              </header>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
