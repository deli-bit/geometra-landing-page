import { motion } from 'framer-motion';
import { Ruler, ChevronDown } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';

const heroImage = 'https://images.unsplash.com/photo-1556156653-e5a7c69cc263?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhcmNoaXRlY3R1cmUlMjBibHVlcHJpbnRzJTIwdG9vbHN8ZW58MXx8fHwxNzYwNzk0NDk4fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral';

export function Hero() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="hero" className="relative min-h-screen flex items-center overflow-hidden bg-gradient-to-br from-[#BBDBE6]/20 via-[#80B2C8]/20 to-[#4072AB]/20 pt-20 pb-12 md:pb-0">
      {/* Geometric background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          initial={{ opacity: 0, rotate: 0 }}
          animate={{ opacity: 0.1, rotate: 45 }}
          transition={{ duration: 1.5 }}
          className="absolute -top-24 -right-24 w-96 h-96 border border-[#1C3666]"
        />
        <motion.div
          initial={{ opacity: 0, rotate: 0 }}
          animate={{ opacity: 0.1, rotate: -30 }}
          transition={{ duration: 1.5, delay: 0.2 }}
          className="absolute top-1/3 -left-32 w-64 h-64 border border-[#1C3666]"
        />
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.08 }}
          transition={{ duration: 1.5, delay: 0.4 }}
          className="absolute bottom-24 right-1/4 w-48 h-48 border border-[#1C3666] rotate-12"
        />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 lg:gap-16 items-center mt-8 md:mt-12">
          {/* Left side - Text and Buttons */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="text-left"
          >
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="inline-flex items-center justify-center w-16 h-16 mb-6 bg-[#1C3666]"
            >
              <Ruler className="w-8 h-8 text-white" />
            </motion.div>
            
            <h1 className="mb-4 text-[#1C3666] text-3xl sm:text-4xl lg:text-[2.7rem] font-semibold">
              Geometra Professionista
            </h1>
            
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-[#1C3666] mb-6 md:mb-8 max-w-xl text-sm sm:text-base"
            >
              Progettazione architettonica, consulenza tecnica e gestione di progetti edilizi 
              con precisione, creatività e attenzione ai dettagli. Servizi professionali 
              per privati e aziende in tutta Italia.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="flex flex-col sm:flex-row gap-3 sm:gap-4"
            >
              <button
                onClick={() => scrollToSection('portfolio')}
                className="px-6 sm:px-8 py-3 bg-[#304E8E] text-white hover:bg-[#4072AB] transition-colors w-full sm:w-auto"
              >
                Visualizza Portfolio
              </button>
              <button
                onClick={() => scrollToSection('contact')}
                className="px-6 sm:px-8 py-3 border-2 border-[#1C3666] text-[#1C3666] hover:bg-[#1C3666] hover:text-white transition-colors w-full sm:w-auto"
              >
                Contattami
              </button>
            </motion.div>
          </motion.div>

          {/* Right side - Image */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="relative"
          >
            <div className="relative">
              {/* Decorative border element */}
              <div className="absolute -top-6 -left-6 w-full h-full border-2 border-[#1C3666] z-0" />
              
              <div className="relative z-10 overflow-hidden">
                <ImageWithFallback
                  src={heroImage}
                  alt="Architektonische Zeichnung Einfamilienhaus"
                  className="w-full h-64 sm:h-80 md:h-96 lg:h-[500px] object-cover"
                />
              </div>

              {/* Decorative horizontal line */}
              <motion.div 
                className="absolute bottom-16 left-0 right-0 h-1 bg-[#304E8E] z-20"
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{
                  duration: 1.5,
                  ease: "easeOut"
                }}
              >
                <motion.div
                  className="absolute right-0 top-1/2 -translate-y-1/2 w-3 h-3 bg-[#1C3666] rounded-full"
                  animate={{ 
                    x: [0, -8, 0],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                />
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>

      <motion.button
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 1 }}
        onClick={() => scrollToSection('about')}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-[#1C3666] hover:text-[#304E8E] transition-colors"
      >
        <ChevronDown className="w-8 h-8 animate-bounce" />
      </motion.button>
    </section>
  );
}
