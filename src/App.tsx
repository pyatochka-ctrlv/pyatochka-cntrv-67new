/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Stats } from './components/Stats';
import { ValueExperience } from './components/ValueExperience';
import { FilmGallery } from './components/FilmGallery';
import { VillaSection } from './components/VillaSection';
import { ExperienceIncluded } from './components/ExperienceIncluded';
import { Packages } from './components/Packages';
import { Testimonials } from './components/Testimonials';

const WHATSAPP_NUMBER = '17866306996';

function openWhatsApp(message: string) {
  window.open(
    `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`,
    '_blank'
  );
}

export default function App() {
  const handleReserveClick = () => {
    openWhatsApp("Hi SIX-SEVEN — I'd like to check availability for a charter.");
  };

  const handleSelectPackage = (pkgName: string) => {
    openWhatsApp(`Hi SIX-SEVEN — I'm interested in the "${pkgName}" package.`);
  };

  return (
    <div>
      <Navbar onReserveClick={handleReserveClick} />
      <Hero onReserveClick={handleReserveClick} />
      <Stats />
      <ValueExperience />
      <FilmGallery onReserveClick={handleReserveClick} />
      <VillaSection />
      <ExperienceIncluded />
      <Packages onSelectPackage={handleSelectPackage} />
      <Testimonials />
    </div>
  );
}
