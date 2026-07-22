import React from 'react';
import { MessageCircle } from 'lucide-react';

export const VillaSection: React.FC = () => {
  return (
    <section id="villa" className="py-24 md:py-28 bg-[#131417] border-y border-[rgba(245,245,240,0.12)]">
      <div className="max-w-[1240px] mx-auto px-5 md:px-14 grid md:grid-cols-[1.1fr_0.9fr] gap-12 md:gap-16 items-center">
        <div className="relative aspect-[16/11] overflow-hidden rounded-[3px] bg-[#08090a] border border-[rgba(245,245,240,0.26)] shadow-2xl">
          <img
            src="https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=1600&q=80"
            alt="Private luxury villa overlooking the Aegean sea in Mykonos"
            loading="lazy"
            className="w-full h-full object-cover"
          />
          <span className="absolute left-3.5 bottom-3.5 z-10 font-mono-custom text-[10px] tracking-wider uppercase text-[#f5f4ef] bg-[#08090a]/60 backdrop-blur-md px-2.5 py-1.5 rounded-[2px]">
            The villa · sunset
          </span>
        </div>

        <div>
          <div className="eyebrow amber">Stay for the sunset</div>
          <h2 className="display-title text-3xl sm:text-4xl lg:text-5xl my-6 text-[#f5f4ef] max-w-[14ch]">
            Cap the day at the villa.
          </h2>
          <p className="text-base sm:text-lg leading-relaxed text-[#c7c6bf] font-light max-w-[44ch]">
            Step off the water and into a private villa above the Aegean — open terraces, a pool on the edge of the view and the golden light Mykonos is famous for.
          </p>
          <p className="text-base sm:text-lg leading-relaxed text-[#c7c6bf] font-light max-w-[44ch] mt-4">
            Pair it with your charter for dinners, celebrations and slow evenings after the cruise. Tell us the occasion and we'll shape the whole day, dock to doorstep.
          </p>

          <a
            href="https://wa.me/17866306996?text=Hi%20SIX-SEVEN%20—%20I'd%20like%20to%20add%20the%20villa%20to%20a%20charter."
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 font-mono-custom text-xs uppercase tracking-wider px-6 py-4 rounded-[3px] border border-[#25d366]/50 text-[#eafff2] hover:bg-[#25d366] hover:border-[#25d366] hover:text-[#04210f] transition-all duration-300 mt-8"
          >
            <MessageCircle className="w-4 h-4" />
            Ask about the villa
          </a>
        </div>
      </div>
    </section>
  );
};
