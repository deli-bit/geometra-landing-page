import { Ruler } from 'lucide-react';

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#1C3666] text-white py-8 sm:py-12">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center text-center">
          <div className="flex items-center gap-2 mb-3 sm:mb-4">
            <Ruler className="w-5 h-5 sm:w-6 sm:h-6" />
            <span className="text-sm sm:text-base">Geometra Professionista</span>
          </div>
          
          <p className="text-[#80B2C8] mb-4 sm:mb-6 text-xs sm:text-sm max-w-md">
            Progettazione e consulenza tecnica per i tuoi progetti edilizi
          </p>
          
          <div className="flex flex-wrap justify-center gap-3 sm:gap-6 mb-6 text-[#80B2C8] text-xs sm:text-sm">
            <a href="mailto:info@geometra.it" className="hover:text-[#BBDBE6] transition-colors">
              Email
            </a>
            <a href="tel:+393451234567" className="hover:text-[#BBDBE6] transition-colors">
              Telefono
            </a>
            <a href="#about" className="hover:text-[#BBDBE6] transition-colors">
              Chi Sono
            </a>
            <a href="#portfolio" className="hover:text-[#BBDBE6] transition-colors">
              Portfolio
            </a>
          </div>
          
          <div className="pt-4 sm:pt-6 border-t border-[#304E8E] w-full text-center text-[#80B2C8]">
            <p className="text-xs sm:text-sm">&copy; {currentYear} Geometra Professionista. Tutti i diritti riservati.</p>
            <p className="mt-2 text-xs sm:text-sm">P.IVA: 12345678901 | Albo Geometri Milano n. 12345</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
