import React from 'react';

export const ValueExperience: React.FC = () => {
  return (
    <section id="experience" className="py-24 md:py-32 bg-[#08090a]">
      <div className="max-w-[1240px] mx-auto px-5 md:px-14 grid md:grid-cols-[1.05fr_0.95fr] gap-12 md:gap-16 items-center">
        <div>
          <div className="eyebrow">Born from speed. Built for the Aegean.</div>
          <h2 className="display-title text-3xl sm:text-5xl lg:text-6xl my-6 text-[#f5f4ef] max-w-[15ch]">
            It isn't a boat ride. It's an <em className="not-italic text-[#e9b872]">arrival.</em>
          </h2>
          <p className="text-base md:text-lg leading-relaxed text-[#c7c6bf] font-light max-w-[46ch]">
            Designed by Lamborghini Centro Stile with Tecnomar, SIX-SEVEN brings supercar language onto open water — angular carbon lines and a racing cockpit that turn every dock approach into a moment people photograph.
          </p>
          <p className="text-base md:text-lg leading-relaxed text-[#c7c6bf] font-light max-w-[46ch] mt-4">
            Private escapes, beach-club transfers, sunset cruises and tailor-made Cyclades routes. Every charter is captained, curated and built around one guest list: yours.
          </p>
        </div>

        <div className="relative aspect-[4/5] overflow-hidden rounded-[3px] bg-[#131417] border border-[rgba(245,245,240,0.26)] shadow-2xl">
          <img
            src="https://images.unsplash.com/photo-1567899378494-47b22a2ae96a?auto=format&fit=crop&w=1600&q=80"
            alt="Guests aboard Tecnomar Lamborghini yacht in Mykonos"
            loading="lazy"
            className="w-full h-full object-cover"
          />
          <span className="absolute left-3.5 bottom-3.5 z-10 font-mono-custom text-[10px] tracking-wider uppercase text-[#f5f4ef] bg-[#08090a]/60 backdrop-blur-md px-2.5 py-1.5 rounded-[2px]">
            Golden hour · onboard
          </span>
        </div>
      </div>
    </section>
  );
};
