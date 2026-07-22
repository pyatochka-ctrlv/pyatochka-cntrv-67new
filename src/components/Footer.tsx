import React, { useState } from 'react';
import { Instagram, MessageCircle, Send } from 'lucide-react';

const WHATSAPP_NUMBER = '17866306996';

export const Footer: React.FC = () => {
  const [name, setName] = useState('');
  const [date, setDate] = useState('');
  const [message, setMessage] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const lines = [
      `Hi SIX-SEVEN — I'd like to enquire about a charter.`,
      name && `Name: ${name}`,
      date && `Preferred date: ${date}`,
      message && `Message: ${message}`,
    ].filter(Boolean);

    window.open(
      `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(lines.join('\n'))}`,
      '_blank'
    );

    setSubmitted(true);
    setName('');
    setDate('');
    setMessage('');
  };

  return (
    <footer id="faq" className="relative bg-[#08090a] border-t border-[rgba(245,245,240,0.12)]">
      {/* Contact / Booking form */}
      <div className="max-w-[1240px] mx-auto px-5 md:px-14 pt-20 pb-16 grid gap-12 md:grid-cols-2">
        <div>
          <div className="eyebrow mb-5">GET IN TOUCH</div>
          <h2 className="font-unbounded font-black uppercase text-[clamp(32px,5vw,52px)] leading-[0.95] text-[#f5f4ef]">
            Let's plan
            <br />
            your day on the water.
          </h2>
          <p className="max-w-[440px] mt-6 text-[15px] leading-relaxed text-[#c7c6bf] font-light">
            Tell us your preferred date and what you have in mind — we'll reply directly on
            WhatsApp with availability and a tailored plan.
          </p>

          <div className="flex flex-wrap items-center gap-4 mt-8">
            
              href={`https://wa.me/${WHATSAPP_NUMBER}?text=Hi%20SIX-SEVEN%20—%20I'd%20like%20to%20check%20availability%20for%20a%20charter.`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 font-mono-custom text-xs uppercase tracking-wider px-5 py-3.5 rounded-[3px] border border-[#25d366]/50 text-[#eafff2] hover:bg-[#25d366] hover:border-[#25d366] hover:text-[#04210f] transition-all duration-300"
            >
              <MessageCircle className="w-4 h-4" />
              WhatsApp us
            </a>
            
              href="https://www.instagram.com/lamboyachtmykonos"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 font-mono-custom text-xs uppercase tracking-wider px-5 py-3.5 rounded-[3px] border border-[rgba(245,245,240,0.25)] text-[#f5f4ef] hover:border-[#d4ff3d] hover:text-[#d4ff3d] transition-all duration-300"
            >
              <Instagram className="w-4 h-4" />
              @lamboyachtmykonos
            </a>
          </div>
        </div>

        {/* Form */}
        <form
          onSubmit={handleSubmit}
          className="bg-[#101113] border border-[rgba(245,245,240,0.12)] rounded-[6px] p-6 md:p-8 flex flex-col gap-4"
        >
          <div className="flex flex-col gap-2">
            <label className="font-mono-custom text-[11px] uppercase tracking-wider text-[#89897f]">
              Name
            </label>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Your name"
              required
              className="bg-[#08090a] border border-[rgba(245,245,240,0.15)] rounded-[3px] px-4 py-3 text-[#f5f4ef] placeholder:text-[#5b5b56] focus:outline-none focus:border-[#d4ff3d] transition-colors"
            />
          </div>

          <div className="flex flex-col gap-2">
            <label className="font-mono-custom text-[11px] uppercase tracking-wider text-[#89897f]">
              Preferred date
            </label>
            <input
              type="date"
              value={date}
              onChange={(e) => setDate(e.target.value)}
              className="bg-[#08090a] border border-[rgba(245,245,240,0.15)] rounded-[3px] px-4 py-3 text-[#f5f4ef] placeholder:text-[#5b5b56] focus:outline-none focus:border-[#d4ff3d] transition-colors [color-scheme:dark]"
            />
          </div>

          <div className="flex flex-col gap-2">
            <label className="font-mono-custom text-[11px] uppercase tracking-wider text-[#89897f]">
              Message
            </label>
            <textarea
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder="Tell us about the occasion, group size, anything special..."
              rows={4}
              className="bg-[#08090a] border border-[rgba(245,245,240,0.15)] rounded-[3px] px-4 py-3 text-[#f5f4ef] placeholder:text-[#5b5b56] focus:outline-none focus:border-[#d4ff3d] transition-colors resize-none"
            />
          </div>

          <button
            type="submit"
            className="mt-2 inline-flex items-center justify-center gap-2.5 font-mono-custom text-xs uppercase tracking-wider px-6 py-4 rounded-[3px] bg-[#d4ff3d] text-[#08090a] font-medium hover:bg-[#e4ff6e] transition-all duration-300 cursor-pointer"
          >
            Send enquiry
            <Send className="w-4 h-4" />
          </button>

          {submitted && (
            <p className="font-mono-custom text-xs text-[#d4ff3d] text-center">
              Opening WhatsApp with your details…
            </p>
          )}
        </form>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-[rgba(245,245,240,0.08)]">
        <div className="max-w-[1240px] mx-auto px-5 md:px-14 py-8 flex flex-col md:flex-row items-center justify-between gap-4">
          
            href="#top"
            className="font-unbounded font-extrabold text-base tracking-wider text-[#f5f4ef]"
          >
            SIX<b className="text-[#d4ff3d] font-extrabold">—</b>SEVEN
          </a>

          <nav className="flex flex-wrap items-center justify-center gap-6 font-mono-custom text-xs tracking-wider uppercase text-[#c7c6bf]">
            <a href="#experience" className="hover:text-[#f5f4ef] transition-colors">Experience</a>
            <a href="#film" className="hover:text-[#f5f4ef] transition-colors">The film</a>
            <a href="#villa" className="hover:text-[#f5f4ef] transition-colors">Villa</a>
            <a href="#packages" className="hover:text-[#f5f4ef] transition-colors">Packages</a>
          </nav>

          <p className="font-mono-custom text-[11px] tracking-wider text-[#5b5b56]">
            © {new Date().getFullYear()} SIX—SEVEN · Private Charter Mykonos
          </p>
        </div>
      </div>
    </footer>
  );
};