import React from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Stats } from './components/Stats';
import { Features } from './components/Features';
import { Solutions } from './components/Solutions';
import { TechStack } from './components/TechStack';
import { CaseStudies } from './components/CaseStudies';
import { TechPartners } from './components/TechPartners';
import { About } from './components/About';
import { Services } from './components/Services';
import { Testimonials } from './components/Testimonials';
import { Clients } from './components/Clients';
import { CTA } from './components/CTA';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { ScrollToTop } from './components/ScrollToTop';
import { WhatsAppButton } from './components/contact/WhatsAppButton';

function App() {
  return (
    <div className="min-h-screen font-sans">
      <Navbar />
      <Hero />
      <Stats />
      <Features />
      <Solutions />
      <TechStack />
      <CaseStudies />
      <TechPartners />
      <About />
      <Services />
      <Testimonials />
      <Clients />
      <CTA />
      <Contact />
      <Footer />
      <ScrollToTop />
      <WhatsAppButton />
    </div>
  );
}

export default App;