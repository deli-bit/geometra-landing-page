import { Navigation } from './components/Navigation';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Portfolio } from './components/Portfolio';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { useEffect } from 'react';

export default function App() {
  // SEO: Update page title on mount
  useEffect(() => {
    // Set page title dynamically if needed
    document.title = 'Geometra Professionista Milano | Progettazione Architettonica';
    
    // Add lang attribute to html element
    document.documentElement.lang = 'it';
  }, []);

  return (
    <div className="min-h-screen">
      <Navigation />
      <main>
        <Hero />
        <About />
        <Portfolio />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
