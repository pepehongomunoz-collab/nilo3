import { lazy, Suspense } from 'react';
import { SmoothScroll } from './components/layout/SmoothScroll';
import { CustomCursor } from './components/layout/CustomCursor';
import { Navbar } from './components/layout/Navbar';
import { Hero } from './components/sections/Hero';
import { Manifesto } from './components/sections/Manifesto';

// Below-the-fold lazy sections with isolated Suspense boundaries.
const Cases = lazy(() => import('./components/sections/Cases').then(m => ({ default: m.Cases })));
const Process = lazy(() => import('./components/sections/Process').then(m => ({ default: m.Process })));
const Services = lazy(() => import('./components/sections/Services').then(m => ({ default: m.Services })));
const TechStack = lazy(() => import('./components/sections/TechStack').then(m => ({ default: m.TechStack })));
const Numbers = lazy(() => import('./components/sections/Numbers').then(m => ({ default: m.Numbers })));
const Testimonials = lazy(() => import('./components/sections/Testimonials').then(m => ({ default: m.Testimonials })));
const CallToAction = lazy(() => import('./components/sections/CallToAction').then(m => ({ default: m.CallToAction })));
const Contact = lazy(() => import('./components/sections/Contact').then(m => ({ default: m.Contact })));
const Footer = lazy(() => import('./components/layout/Footer').then(m => ({ default: m.Footer })));
const FloatingContact = lazy(() => import('./components/ui/FloatingContact').then(m => ({ default: m.FloatingContact })));

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
          {/* Scene 1: The Statement — eager */}
          <Hero />

          {/* Scene 2: The Provocation — eager */}
          <Manifesto />

          {/* Scene 3: The Proof */}
          <Suspense fallback={null}>
            <Cases />
          </Suspense>

          {/* Scene 4: The Method */}
          <Suspense fallback={null}>
            <Process />
          </Suspense>

          {/* Scene 5: The Capabilities */}
          <Suspense fallback={null}>
            <Services />
          </Suspense>

          {/* Scene 6: The Stack (Three.js) */}
          <Suspense fallback={null}>
            <TechStack />
          </Suspense>

          {/* Scene 7: The Numbers */}
          <Suspense fallback={null}>
            <Numbers />
          </Suspense>

          {/* Scene 8: The Voices */}
          <Suspense fallback={null}>
            <Testimonials />
          </Suspense>

          {/* Scene 9: The Invitation */}
          <Suspense fallback={null}>
            <CallToAction />
          </Suspense>

          {/* Contact */}
          <Suspense fallback={null}>
            <Contact />
          </Suspense>
        </main>

        {/* Footer & Floating CTA */}
        <Suspense fallback={null}>
          <Footer />
        </Suspense>
        <Suspense fallback={null}>
          <FloatingContact />
        </Suspense>
      </div>
    </SmoothScroll>
  );
}

export default App;
