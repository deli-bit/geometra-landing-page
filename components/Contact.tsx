import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Send } from 'lucide-react';
import { Input } from './ui/input';
import { Textarea } from './ui/textarea';
import { useState } from 'react';

export function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    alert('Grazie per il tuo messaggio! Ti risponderò al più presto.');
    setFormData({ name: '', email: '', phone: '', message: '' });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section id="contact" className="py-20 bg-white" aria-labelledby="contact-heading">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 id="contact-heading" className="mb-4 text-[#1C3666] text-3xl sm:text-4xl lg:text-[2.7rem] font-semibold">
            Contatti
          </h2>
          <p className="text-[#304E8E] max-w-2xl mx-auto text-sm sm:text-base">
            Hai un progetto in mente? Contattami per una consulenza gratuita 
            e senza impegno. Sarò felice di discutere le tue esigenze.
          </p>
        </motion.div>

        <div className="max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-8"
          >
            <div>
              <h3 className="mb-4 sm:mb-6 text-[#1C3666] text-lg sm:text-xl">
                Informazioni di Contatto
              </h3>
              
              <div className="space-y-4 sm:space-y-6">
                <div className="flex items-start gap-3 sm:gap-4">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center bg-[#304E8E] text-white flex-shrink-0">
                    <Mail className="w-4 h-4 sm:w-5 sm:h-5" />
                  </div>
                  <div>
                    <div className="text-[#4072AB] mb-1 text-xs sm:text-sm">Email</div>
                    <a href="mailto:info@geometra.it" className="text-[#1C3666] hover:text-[#304E8E] transition-colors text-sm sm:text-base break-all">
                      info@geometra.it
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3 sm:gap-4">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center bg-[#304E8E] text-white flex-shrink-0">
                    <Phone className="w-4 h-4 sm:w-5 sm:h-5" />
                  </div>
                  <div>
                    <div className="text-[#4072AB] mb-1 text-xs sm:text-sm">Telefono</div>
                    <a href="tel:+393451234567" className="text-[#1C3666] hover:text-[#304E8E] transition-colors text-sm sm:text-base">
                      +39 345 123 4567
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3 sm:gap-4">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center bg-[#304E8E] text-white flex-shrink-0">
                    <MapPin className="w-4 h-4 sm:w-5 sm:h-5" />
                  </div>
                  <div>
                    <div className="text-[#4072AB] mb-1 text-xs sm:text-sm">Indirizzo</div>
                    <address className="text-[#1C3666] not-italic text-sm sm:text-base">
                      Via Roma 123<br />
                      20100 Milano, Italia
                    </address>
                  </div>
                </div>
              </div>
            </div>

            <div className="pt-6 sm:pt-8 border-t border-[#80B2C8]">
              <h4 className="mb-3 sm:mb-4 text-[#1C3666] text-base sm:text-lg">
                Orari di Lavoro
              </h4>
              <div className="space-y-2 text-[#304E8E] text-sm sm:text-base">
                <div className="flex justify-between">
                  <span>Lunedì - Venerdì</span>
                  <span className="ml-4">9:00 - 18:00</span>
                </div>
                <div className="flex justify-between">
                  <span>Sabato</span>
                  <span className="ml-4">9:00 - 13:00</span>
                </div>
                <div className="flex justify-between">
                  <span>Domenica</span>
                  <span className="ml-4">Chiuso</span>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-6">
              <div>
                <label htmlFor="name" className="block mb-2 text-[#1C3666] text-sm sm:text-base">
                  Nome Completo *
                </label>
                <Input
                  id="name"
                  name="name"
                  type="text"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full rounded-none border-[#80B2C8] focus:border-[#304E8E] focus:ring-[#304E8E]"
                  placeholder="Mario Rossi"
                />
              </div>

              <div>
                <label htmlFor="email" className="block mb-2 text-[#1C3666] text-sm sm:text-base">
                  Email *
                </label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full rounded-none border-[#80B2C8] focus:border-[#304E8E] focus:ring-[#304E8E]"
                  placeholder="mario.rossi@email.it"
                />
              </div>

              <div>
                <label htmlFor="phone" className="block mb-2 text-[#1C3666] text-sm sm:text-base">
                  Telefono
                </label>
                <Input
                  id="phone"
                  name="phone"
                  type="tel"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full rounded-none border-[#80B2C8] focus:border-[#304E8E] focus:ring-[#304E8E]"
                  placeholder="+39 345 123 4567"
                />
              </div>

              <div>
                <label htmlFor="message" className="block mb-2 text-[#1C3666] text-sm sm:text-base">
                  Messaggio *
                </label>
                <Textarea
                  id="message"
                  name="message"
                  required
                  value={formData.message}
                  onChange={handleChange}
                  rows={5}
                  className="w-full rounded-none border-[#80B2C8] focus:border-[#304E8E] focus:ring-[#304E8E] resize-none"
                  placeholder="Descrivi il tuo progetto o le tue esigenze..."
                />
              </div>

              <button
                type="submit"
                className="w-full px-6 sm:px-8 py-3 bg-[#304E8E] text-white hover:bg-[#4072AB] transition-colors flex items-center justify-center gap-2 group text-sm sm:text-base"
              >
                <span>Invia Messaggio</span>
                <Send className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
