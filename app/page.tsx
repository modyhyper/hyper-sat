import Hero from "@/components/Hero";
import SupportedDevices from "@/components/SupportedDevices";
import About from "@/components/About";
import FeatureGrid from "@/components/FeatureGrid";
import Pricing from "@/components/Pricing";
import FAQ from "@/components/FAQ";
import Reseller from "@/components/Reseller";
import Footer from "@/components/Footer";
import Navigation from "@/components/Navigation";

import Testimonials from "@/components/Testimonials";

export default function Home() {
  return (
    <main className="min-h-screen bg-transparent selection:bg-primary/20 overflow-x-hidden relative z-10">

      <Navigation />

      <Hero />

      {/* About Section */}
      <section id="about" className="relative z-10">
        <About />
      </section>

      {/* Features Section */}
      <section id="features" className="relative z-10">
        <FeatureGrid />
      </section>

      {/* Supported Devices Section */}
      <section className="relative z-10">
        <SupportedDevices />
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="relative z-10">
        <Pricing />
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="relative z-10">
        <Testimonials />
      </section>

      {/* FAQ Section */}
      <section id="faq" className="relative z-10">
        <FAQ />
      </section>

      {/* Reseller Program Section */}
      <section id="reseller" className="relative z-10">
        <Reseller />
      </section>

      {/* Contact/Footer Section */}
      <section id="contact">
        <Footer />
      </section>

    </main>
  );
}