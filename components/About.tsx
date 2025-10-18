import { motion } from 'framer-motion';
import { Building2, Compass, FileText, Users, Award, TrendingUp } from 'lucide-react';

const skills = [
  {
    icon: Building2,
    title: 'Progettazione Edilizia',
    description: 'Progetti architettonici residenziali e commerciali con attenzione al design e alla funzionalità.'
  },
  {
    icon: Compass,
    title: 'Rilievi Topografici',
    description: 'Rilievi di precisione, planimetrie e aggiornamenti catastali con tecnologia avanzata.'
  },
  {
    icon: FileText,
    title: 'Consulenza Tecnica',
    description: 'Perizie tecniche, valutazioni immobiliari e consulenza per pratiche edilizie.'
  },
  {
    icon: Users,
    title: 'Direzione Lavori',
    description: 'Coordinamento e supervisione di cantieri con gestione completa delle maestranze.'
  },
  {
    icon: Award,
    title: 'Certificazioni',
    description: 'APE, conformità urbanistica e certificazioni di agibilità per immobili.'
  },
  {
    icon: TrendingUp,
    title: 'Ristrutturazioni',
    description: 'Progettazione e gestione di interventi di ristrutturazione e riqualificazione.'
  }
];

export function About() {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mx-auto text-center mb-16"
        >
          <h2 className="mb-4 text-[#1C3666] text-[2.7rem] font-semibold">
            Chi Sono
          </h2>
          <p className="text-[#304E8E]">
            Geometra professionista con oltre 15 anni di esperienza nella progettazione 
            architettonica e nella gestione di progetti edilizi. La mia missione è 
            trasformare le idee dei clienti in realtà costruttive, garantendo qualità, 
            precisione e rispetto dei tempi e dei budget.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {skills.map((skill, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group relative p-6 bg-[#BBDBE6]/30 border border-[#80B2C8] hover:border-[#304E8E] hover:bg-white transition-all duration-300"
            >
              {/* Decorative corner */}
              <div className="absolute top-0 right-0 w-12 h-12 border-t-2 border-r-2 border-[#304E8E] opacity-0 group-hover:opacity-100 transition-opacity" />
              
              <skill.icon className="w-10 h-10 text-[#304E8E] mb-4" />
              <h3 className="mb-2 text-[#1C3666]">
                {skill.title}
              </h3>
              <p className="text-[#4072AB]">
                {skill.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
