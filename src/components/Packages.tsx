import React from 'react';
import { PackageOption } from '../types';

interface PackagesProps {
  onSelectPackage: (pkgName: string) => void;
}

export const Packages: React.FC<PackagesProps> = ({ onSelectPackage }) => {
  const packageList: PackageOption[] = [
    {
      id: '1-hour',
      num: '01',
      name: '1-Hour Trip',
      price: 'From €999',
      description: 'A fast, high-impact cruise for content, arrivals and a quick taste of the Aegean.',
    },
    {
      id: '2-hour',
      num: '02',
      name: '2-Hour Trip',
      price: 'From €999',
      description: 'A golden-hour route with room for photos, drinks and a cinematic sunset backdrop.',
    },
    {
      id: 'half-day',
      num: '03',
      name: 'Half-Day Escape',
      price: 'From €999',
      description: 'A tailored swim-and-beach itinerary around Mykonos, Delos or Rhenia. Our most requested day.',
      featured: true,
    },
    {
      id: 'custom',
      num: '04',
      name: 'Custom Trip',
      price: 'Private quote',
      description: 'Beach-club arrivals, VIP transfers, proposals and full Cyclades routes built around your day.',
    },
  ];

  const popularRoutes = [
    'Psarou / Scorpios',
    'Delos & Rhenia',
    'Super Paradise',
    'Sunset cruise',
  ];

  return (
    <section id="packages" className="py-24 md:py-28 bg-[#08090a]">
      <div className="max-w-[1240px] mx-auto px-5 md:px-14">
        <div>
          <div className="eyebrow">Charter packages</div>
          <h2 className="display-title text-3xl sm:text-4xl lg:text-5xl mt-5 text-[#f5f4ef] max-w-[14ch]">
            Pick your day. We'll shape the rest.
          </h2>
          <p className="mt-4 text-[#c7c6bf] font-light max-w-[48ch] text-base leading-relaxed">
            Every charter is private and fully captained. Tell us your date and we'll confirm availability and final pricing within hours.
          </p>
        </div>

        {/* Packages Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-[1px] bg-[rgba(245,245,240,0.12)] border border-[rgba(245,245,240,0.12)] rounded-[3px] overflow-hidden mt-12">
          {packageList.map((pkg) => (
            <div
              key={pkg.id}
              className={`p-8 flex flex-col min-h-[330px] transition-colors duration-300 relative ${
                pkg.featured
                  ? 'bg-[#1b1c20] pt-12'
                  : 'bg-[#08090a] hover:bg-[#131417]'
              }`}
            >
              {pkg.featured && (
                <div className="absolute top-0 inset-x-0 text-center py-1.5 font-mono-custom text-[9.5px] tracking-widest text-[#08090a] bg-[#d4ff3d] font-semibold uppercase">
                  MOST BOOKED
                </div>
              )}

              <div className="font-mono-custom text-xs text-[#89897f] tracking-wider">
                {pkg.num}
              </div>

              <h3 className="font-unbounded font-semibold text-xl uppercase mt-4 text-[#f5f4ef] leading-tight">
                {pkg.name}
              </h3>

              <div className="font-mono-custom text-xs text-[#e9b872] mt-3 tracking-wide">
                {pkg.price}
              </div>

              <p className="text-sm leading-relaxed text-[#c7c6bf] font-light mt-4 flex-1">
                {pkg.description}
              </p>

              <button
                onClick={() => onSelectPackage(pkg.name)}
                className={`mt-6 self-start font-mono-custom text-xs uppercase tracking-wider px-4 py-2.5 rounded-[3px] border transition-all duration-300 cursor-pointer ${
                  pkg.featured
                    ? 'bg-[#d4ff3d] text-[#08090a] border-[#d4ff3d] font-medium hover:bg-[#e4ff6e]'
                    : 'border-[rgba(245,245,240,0.26)] text-[#f5f4ef] hover:bg-[#f5f4ef] hover:text-[#08090a]'
                }`}
              >
                Request
              </button>
            </div>
          ))}
        </div>

        {/* Popular Routes Strip */}
        <div className="flex flex-wrap items-center gap-2 mt-8">
          <span className="font-mono-custom text-xs tracking-wider uppercase text-[#89897f] mr-1">
            Popular routes —
          </span>
          {popularRoutes.map((route, i) => (
            <button
              key={i}
              onClick={() => onSelectPackage('Custom Trip')}
              className="font-mono-custom text-xs tracking-wider uppercase text-[#c7c6bf] border border-[rgba(245,245,240,0.12)] rounded-full px-4 py-2 hover:border-[#d4ff3d] hover:text-[#d4ff3d] transition-all duration-300 cursor-pointer"
            >
              {route}
            </button>
          ))}
        </div>
      </div>
    </section>
  );
};
