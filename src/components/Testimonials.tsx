import React from 'react';
import { Testimonial } from '../types';

export const Testimonials: React.FC = () => {
  const reviews: Testimonial[] = [
    {
      stars: 5,
      quote:
        '"Easily the highlight of our week in Mykonos. The boat turns heads everywhere, and the crew made the whole day effortless."',
      name: 'Verified Guest',
      trip: 'Half-Day Escape · Summer',
    },
    {
      stars: 5,
      quote:
        '"Booked a sunset cruise for a birthday — the photos alone were worth it. Smooth from the first message to the last drink."',
      name: 'Verified Guest',
      trip: 'Sunset Cruise',
    },
    {
      stars: 5,
      quote:
        '"Arriving at the beach club on this thing is a different level. Professional captain, spotless boat, unforgettable day."',
      name: 'Verified Guest',
      trip: 'Beach-Club Arrival',
    },
  ];

  return (
    <section className="py-24 md:py-28 bg-[#131417] border-y border-[rgba(245,245,240,0.12)]">
      <div className="max-w-[1240px] mx-auto px-5 md:px-14">
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-end gap-6 mb-12">
          <div>
            <div className="eyebrow amber">Guest experiences</div>
            <h2 className="display-title text-3xl sm:text-4xl lg:text-5xl mt-5 text-[#f5f4ef] max-w-[15ch]">
              The day everyone kept talking about.
            </h2>
          </div>

          <div className="text-left sm:text-right font-mono-custom text-xs text-[#c7c6bf]">
            <span className="font-unbounded font-extrabold text-4xl text-[#f5f4ef] block leading-none">
              5.0
            </span>
            <span className="text-[#e9b872] tracking-widest text-sm">★★★★★</span>
            <div className="mt-1.5 text-[#89897f]">Rated by our guests</div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {reviews.map((rev, i) => (
            <div
              key={i}
              className="border border-[rgba(245,245,240,0.12)] rounded-[3px] p-7 bg-[#08090a] flex flex-col"
            >
              <div className="text-[#e9b872] tracking-wider text-sm">★★★★★</div>
              <blockquote className="text-base leading-relaxed font-light text-[#f5f4ef] my-5 flex-1">
                {rev.quote}
              </blockquote>
              <cite className="not-italic font-mono-custom text-xs tracking-wider text-[#89897f] uppercase">
                <b className="text-[#c7c6bf] font-medium block mb-1">{rev.name}</b>
                {rev.trip}
              </cite>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
