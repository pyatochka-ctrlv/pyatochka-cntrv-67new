import React, { useRef, useEffect } from 'react';
import { ArrowUpRight } from 'lucide-react';

interface FilmGalleryProps {
  onReserveClick: () => void;
}

export const FilmGallery: React.FC<FilmGalleryProps> = ({ onReserveClick }) => {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && videoRef.current) {
            videoRef.current.play().catch(() => {});
          } else if (videoRef.current && !videoRef.current.paused) {
            videoRef.current.pause();
          }
        });
      },
      { threshold: 0.2 }
    );

    if (videoRef.current) {
      observer.observe(videoRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section id="film" className="py-24 md:py-28 bg-[#08090a]">
      <div className="max-w-[1240px] mx-auto px-5 md:px-14">
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-end gap-6 mb-10">
          <div>
            <div className="eyebrow">The film</div>
            <h2 className="display-title text-3xl sm:text-4xl lg:text-5xl mt-5 text-[#f5f4ef] max-w-[15ch]">
              Designed for the camera. Built for the sea.
            </h2>
          </div>

          <button
            onClick={onReserveClick}
            className="inline-flex items-center gap-2 font-mono-custom text-xs uppercase tracking-wider px-5 py-3 rounded-[3px] border border-[rgba(245,245,240,0.26)] text-[#f5f4ef] hover:bg-[#f5f4ef] hover:text-[#08090a] transition-all duration-300 group cursor-pointer"
          >
            Reserve your date
            <ArrowUpRight className="w-3.5 h-3.5 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </button>
        </div>

        {/* Film Frame Video Box */}
        <div className="relative aspect-video w-full overflow-hidden rounded-[3px] bg-[#000] border border-[rgba(245,245,240,0.26)] shadow-2xl">
          <video
            ref={videoRef}
            muted
            loop
            playsInline
            preload="metadata"
            className="w-full h-full object-cover"
          >
            <source
              src="https://res.cloudinary.com/iqsbzldw/video/upload/f_auto,q_auto/v1784717580/sunset_edit_1_drone_ljex0c.mp4"
              type="video/mp4"
            />
          </video>

          <div className="absolute left-4 bottom-3.5 z-10 flex gap-4 font-mono-custom text-[10.5px] tracking-wider uppercase text-[#f5f4ef] bg-[#08090a]/50 backdrop-blur-md px-3 py-1.5 rounded-[2px]">
            <span>Golden hour, from the air</span>
            <span className="text-[#d4ff3d]">Cyclades, GR</span>
          </div>
        </div>
      </div>
    </section>
  );
};
