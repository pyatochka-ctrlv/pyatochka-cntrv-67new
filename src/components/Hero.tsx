import React, { useRef, useEffect } from 'react';
import { ArrowUpRight, MessageCircle } from 'lucide-react';

interface HeroProps {
  onReserveClick: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onReserveClick }) => {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.play().catch((err) => {
        console.log('Hero video autoplay attempt:', err);
      });
    }
  }, []);

  return (
    <section id="top" className="relative min-h-[100svh] flex flex-col justify-end overflow-hidden bg-[#08090a]">
      {/* Background Video Layer - Direct Video Loading, NO static poster image to prevent photo flashing */}
      <div className="absolute inset-0 z-0 bg-[#08090a]">
        <video
          ref={videoRef}
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
          className="absolute inset-0 w-full h-full object-cover object-center filter brightness-[0.7] contrast-[1.08] saturate-[1.04]"
        >
          <source
            src="https://res.cloudinary.com/iqsbzldw/video/upload/f_auto,q_auto/drone_SOHO_YACHT_c2_compressed_an6pk9.mp4"
            type="video/mp4"
          />
        </video>
      </div>

      {/* Atmospheric Cinematic Overlay Gradients */}
      <div
        className="absolute inset-0 z-[1] pointer-events-none"
        style={{
          background:
            'linear-gradient(180deg, rgba(8,9,10,0.5) 0%, rgba(8,9,10,0.2) 35%, rgba(8,9,10,0.55) 65%, rgba(8,9,10,0.98) 100%)',
        }}
      />
      <div
        className="absolute inset-0 z-[1] pointer-events-none"
        style={{
          background:
            'radial-gradient(ellipse at 50% 108%, rgba(8,9,10,0.85), transparent 60%)',
        }}
      />

      {/* Hero Content Overlay */}
      <div className="relative z-[2] px-5 pb-10 pt-32 md:px-14 md:pb-14 max-w-[1240px] w-full mx-auto">
        <div className="eyebrow mb-5">MYKONOS · PRIVATE DAY CHARTER</div>

        <h1 className="font-unbounded font-black uppercase text-[clamp(56px,16vw,190px)] leading-[0.88] tracking-tight flex flex-col select-none">
          <span className="text-[#f5f4ef]">SIX</span>
          <span
            className="text-transparent"
            style={{ WebkitTextStroke: '1.5px #f5f4ef' }}
          >
            —SEVEN
          </span>
        </h1>

        <p className="max-w-[560px] mt-6 text-[clamp(17px,2.2vw,21px)] leading-relaxed text-[#f5f4ef] font-light">
          The Tecnomar for Lamborghini 63' —{' '}
          <b className="text-[#e9b872] font-medium">the most talked-about arrival on the water.</b>{' '}
          Sunset cruises, beach-club entrances and Cyclades routes, captained and crewed around you.
        </p>

        {/* Hero CTAs */}
        <div className="flex flex-wrap gap-3.5 mt-8 items-center">
          <button
            onClick={onReserveClick}
            className="inline-flex items-center gap-2.5 font-mono-custom text-xs uppercase tracking-wider px-6 py-4 rounded-[3px] bg-[#d4ff3d] text-[#08090a] font-medium hover:bg-[#e4ff6e] transition-all duration-300 group cursor-pointer"
          >
            Reserve your date
            <ArrowUpRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
          </button>

          <a
            href="https://wa.me/17866306996?text=Hi%20SIX-SEVEN%20—%20I'd%20like%20to%20check%20availability%20for%20a%20charter."
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 font-mono-custom text-xs uppercase tracking-wider px-6 py-4 rounded-[3px] border border-[#25d366]/50 text-[#eafff2] hover:bg-[#25d366] hover:border-[#25d366] hover:text-[#04210f] transition-all duration-300"
          >
            <MessageCircle className="w-4 h-4" />
            Ask on WhatsApp
          </a>
        </div>

        {/* Trust Badges */}
        <div className="flex flex-wrap items-center gap-x-6 gap-y-3 mt-8 font-mono-custom text-xs tracking-wider text-[#c7c6bf]">
          <span className="flex items-center gap-1.5">
            <span className="text-[#e9b872] tracking-widest">★★★★★</span>
            <span>Guest-rated experience</span>
          </span>
          <span className="w-1 h-1 rounded-full bg-[#89897f]" />
          <span>Up to 12 guests</span>
          <span className="w-1 h-1 rounded-full bg-[#89897f]" />
          <a
            href="https://www.instagram.com/lamboyachtmykonos"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-[#d4ff3d] transition-colors"
          >
            @lamboyachtmykonos
          </a>
        </div>
      </div>

      {/* Scroll Indicator Cue */}
      <div className="hidden md:flex absolute right-14 bottom-6 z-[3] flex-col items-center gap-2 font-mono-custom text-[10px] tracking-widest uppercase text-[#c7c6bf]">
        <div className="w-[1px] h-11 bg-gradient-to-b from-[#d4ff3d] to-transparent animate-scroll-line" />
        <span style={{ writingMode: 'vertical-rl' }}>Scroll</span>
      </div>
    </section>
  );
};
