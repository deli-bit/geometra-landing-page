import { motion } from 'framer-motion';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { ExternalLink } from 'lucide-react';

const projects = [
  {
    id: 1,
    title: 'Villa Moderna',
    category: 'Residenziale',
    description: 'Progettazione completa di villa di lusso con giardino e piscina',
    image: 'https://images.unsplash.com/photo-1577453190564-ef323f5fa504?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBhcmNoaXRlY3R1cmUlMjBkZXNpZ258ZW58MXx8fHwxNzYwNjU1MTY0fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral'
  },
  {
    id: 2,
    title: 'Ristrutturazione Centro Storico',
    category: 'Ristrutturazione',
    description: 'Recupero conservativo di edificio storico con upgrade moderni',
    image: 'https://images.unsplash.com/photo-1645186411697-e6b2eae30b56?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpdGFsaWFuJTIwYXJjaGl0ZWN0dXJlJTIwbW9kZXJufGVufDF8fHx8MTc2MDcwOTEyNHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral'
  },
  {
    id: 3,
    title: 'Complesso Residenziale',
    category: 'Residenziale',
    description: 'Progettazione di edificio multipiano con spazi comuni',
    image: 'https://images.unsplash.com/photo-1690704373833-a171eb1537f1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtaW5pbWFsJTIwYnVpbGRpbmclMjBleHRlcmlvcnxlbnwxfHx8fDE3NjA3MDkxMjR8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral'
  },
  {
    id: 4,
    title: 'Spazio Commerciale',
    category: 'Commerciale',
    description: 'Design e direzione lavori per showroom di alta gamma',
    image: 'https://images.unsplash.com/photo-1704040686324-e0552fbc9167?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb250ZW1wb3JhcnklMjBhcmNoaXRlY3R1cmUlMjBpbnRlcmlvcnxlbnwxfHx8fDE3NjA3MDkxMjR8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral'
  },
  {
    id: 5,
    title: 'Planimetria & Rilievi',
    category: 'Tecnico',
    description: 'Rilievi topografici e aggiornamenti catastali',
    image: 'https://images.unsplash.com/photo-1721244653693-1d13e68b66c1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhcmNoaXRlY3R1cmFsJTIwYmx1ZXByaW50JTIwZHJhd2luZ3xlbnwxfHx8fDE3NjA3MDkxMjN8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral'
  },
  {
    id: 6,
    title: 'Design Geometrico',
    category: 'Design',
    description: 'Progettazione di elementi architettonici con geometrie complesse',
    image: 'https://images.unsplash.com/photo-1729019756193-86b498740600?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxnZW9tZXRyaWMlMjBhcmNoaXRlY3R1cmUlMjBkZXRhaWx8ZW58MXx8fHwxNzYwNzA5MTI0fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral'
  }
];

export function Portfolio() {
  return (
    <section id="portfolio" className="py-20 bg-gradient-to-br from-[#BBDBE6]/20 to-white" aria-labelledby="portfolio-heading">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 id="portfolio-heading" className="mb-4 text-[#1C3666] text-3xl sm:text-4xl lg:text-[2.7rem] font-semibold">
            Portfolio
          </h2>
          <p className="text-[#304E8E] max-w-2xl mx-auto text-sm sm:text-base">
            Una selezione dei progetti realizzati negli ultimi anni, 
            che rappresentano la varietà e la qualità del mio lavoro.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 max-w-7xl mx-auto">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group relative overflow-hidden bg-white border border-[#80B2C8] hover:border-[#304E8E] transition-all duration-300"
            >
              <div className="relative h-48 sm:h-56 md:h-64 overflow-hidden">
                <ImageWithFallback
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#1C3666]/80 via-[#1C3666]/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                
                <div className="absolute bottom-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="w-10 h-10 bg-[#304E8E] flex items-center justify-center">
                    <ExternalLink className="w-5 h-5 text-white" />
                  </div>
                </div>
              </div>
              
              <div className="p-4 sm:p-6">
                <div className="text-[#4072AB] mb-2 text-xs sm:text-sm">
                  {project.category}
                </div>
                <h3 className="mb-2 text-[#1C3666] text-sm sm:text-base">
                  {project.title}
                </h3>
                <p className="text-[#304E8E] text-xs sm:text-sm">
                  {project.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
