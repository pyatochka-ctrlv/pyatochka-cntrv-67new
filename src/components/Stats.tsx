import React from 'react';

export const Stats: React.FC = () => {
  return (
    <section className="border-y border-[rgba(245,245,240,0.12)] bg-[#131417]">
      <div className="grid grid-cols-2 md:grid-cols-4 max-w-[1240px] mx-auto">
        <div className="p-6 md:p-9 border-r border-b md:border-b-0 border-[rgba(245,245,240,0.12)]">
          <div className="font-unbounded font-extrabold text-3xl md:text-4xl text-[#f5f4ef]">
            60<small className="text-sm text-[#d4ff3d] ml-1 font-semibold">KN</small>
          </div>
          <div className="font-mono-custom text-[10.5px] tracking-widest uppercase text-[#89897f] mt-3">
            Top speed
          </div>
        </div>

        <div className="p-6 md:p-9 border-b md:border-b-0 md:border-r border-[rgba(245,245,240,0.12)]">
          <div className="font-unbounded font-extrabold text-3xl md:text-4xl text-[#f5f4ef]">
            19<small className="text-sm text-[#d4ff3d] ml-1 font-semibold">M</small>
          </div>
          <div className="font-mono-custom text-[10.5px] tracking-widest uppercase text-[#89897f] mt-3">
            Lamborghini design
          </div>
        </div>

        <div className="p-6 md:p-9 border-r border-[rgba(245,245,240,0.12)]">
          <div className="font-unbounded font-extrabold text-3xl md:text-4xl text-[#f5f4ef]">
            12<small className="text-sm text-[#d4ff3d] ml-1 font-semibold">PAX</small>
          </div>
          <div className="font-mono-custom text-[10.5px] tracking-widest uppercase text-[#89897f] mt-3">
            Guests aboard
          </div>
        </div>

        <div className="p-6 md:p-9">
          <div className="font-unbounded font-extrabold text-3xl md:text-4xl text-[#f5f4ef]">
            100<small className="text-sm text-[#d4ff3d] ml-1 font-semibold">%</small>
          </div>
          <div className="font-mono-custom text-[10.5px] tracking-widest uppercase text-[#89897f] mt-3">
            Captained &amp; crewed
          </div>
        </div>
      </div>
    </section>
  );
};
