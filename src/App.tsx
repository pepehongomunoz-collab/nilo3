import { SmoothScroll } from './components/layout/SmoothScroll';
import { CustomCursor } from './components/layout/CustomCursor';
import { Navbar } from './components/layout/Navbar';
import { Hero } from './components/sections/Hero';
import { Manifesto } from './components/sections/Manifesto';

import { Services } from './components/sections/Services';
import { Process } from './components/sections/Process';
import { Cases } from './components/sections/Cases';
import { TechStack } from './components/sections/TechStack';
import { Numbers } from './components/sections/Numbers';
import { Testimonials } from './components/sections/Testimonials';
import { Comparison } from './components/sections/Comparison';
import { FAQ } from './components/sections/FAQ';
import { CallToAction } from './components/sections/CallToAction';
import { Contact } from './components/sections/Contact';
import { Footer } from './components/layout/Footer';
import { FloatingContact } from './components/ui/FloatingContact';

function App() {
  return (
    <SmoothScroll>
      <div className="min-h-screen bg-void text-white">
        {/* Noise overlay */}
        <div className="noise-overlay" aria-hidden="true" />

        {/* Custom cursor */}
        <CustomCursor />

        {/* Navigation */}
        <Navbar />

        {/* Main content */}
        <main id="main-content">
          {/* Scene 1: The Statement */}
          <Hero />

          {/* Scene 2: The Provocation */}
          <Manifesto />

          {/* Scene 3: The Capabilities */}
          <Services />

          {/* Scene 4: The Method */}
          <Process />

          {/* Scene 5: The Proof */}
          <Cases />

          {/* Scene 6: The Stack */}
          <TechStack />

          {/* Scene 7: The Numbers */}
          <Numbers />

          {/* Scene 8: The Voices */}
          <Testimonials />

          {/* Scene 8.5: The Comparison */}
          <Comparison />

          {/* Scene 8.6: FAQ */}
          <FAQ />

          {/* Scene 9: The Invitation */}
          <CallToAction />

          {/* Contact */}
          <Contact />
        </main>

        {/* Footer & Floating CTA */}
        <Footer />
        <FloatingContact />
      </div>
    </SmoothScroll>
  );
}

export default App;
