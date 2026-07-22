import React from 'react';

export const ExperienceIncluded: React.FC = () => {
  const inclusions = [
    'Professional captain & experienced crew',
    'Premium sound system, ice, water & soft drinks',
    'Fuel plan tailored to your route',
    'Towels & onboard essentials',
    'Beach-club bookings & dock-to-dock planning',
    'Custom catering & VIP add-ons on request',
  ];

  return (
    <section className="py-24 md:py-28 bg-[#131417] border-y border-[rgba(245,245,240,0.12)]">
      <div className="max-w-[1240px] mx-auto px-5 md:px-14 grid md:grid-cols-[0.9fr_1.1fr] gap-12 md:gap-16 items-center">
        <div className="relative aspect-[4/5] overflow-hidden rounded-[3px] bg-[#08090a] border border-[rgba(245,245,240,0.26)] shadow-2xl order-last md:order-first">
          <img
            src="https://images.unsplash.com/photo-1544551763-46a013bb70d5?auto=format&fit=crop&w=1600&q=80"
            alt="Bow deck of Lamborghini yacht on Aegean water"
            loading="lazy"
            className="w-full h-full object-cover"
          />
          <span className="absolute left-3.5 bottom-3.5 z-10 font-mono-custom text-[10px] tracking-wider uppercase text-[#f5f4ef] bg-[#08090a]/60 backdrop-blur-md px-2.5 py-1.5 rounded-[2px]">
            On the bow · Cyclades
          </span>
        </div>

        <div>
          <div className="eyebrow amber">Everything handled</div>
          <h2 className="display-title text-3xl sm:text-4xl lg:text-5xl my-6 text-[#f5f4ef] max-w-[15ch]">
            Step aboard. We take care of the rest.
          </h2>

          <div className="border-t border-[rgba(245,245,240,0.12)] mt-8">
            {inclusions.map((item, index) => (
              <div
                key={index}
                className="flex items-center gap-4 py-5 border-b border-[rgba(245,245,240,0.12)]"
              >
                <span className="w-2 h-2 bg-[#d4ff3d] flex-none rotate-45" />
                <span className="text-base sm:text-lg font-normal text-[#f5f4ef] tracking-tight">
                  {item}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
