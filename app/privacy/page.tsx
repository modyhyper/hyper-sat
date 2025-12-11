"use client";

import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";

export default function PrivacyPolicy() {
  return (
    <main className="min-h-screen bg-[#0A0A0A] text-white">
      <Navigation />

      <div className="container mx-auto px-4 py-24 sm:py-32 max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-4xl md:text-5xl font-bold mb-8 text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">
            Privacy Policy
          </h1>

          <div className="prose prose-invert prose-lg max-w-none text-slate-300">
            <h3 className="text-white font-bold mt-8 mb-4">1. Information We Collect</h3>
            <p>We collect minimal information necessary to provide our services, including:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>Account Data:</strong> Name and Email address for account creation.</li>
              <li><strong>Usage Data:</strong> Device type and login timestamps to ensure service optimization.</li>
              <li><strong>Payment Data:</strong> All payments are processed through secure third-party gateways. We do not store your credit card information.</li>
            </ul>

            <h3 className="text-white font-bold mt-8 mb-4">2. How We Use Your Information</h3>
            <ul className="list-disc pl-6 space-y-2">
              <li>To activate and manage your subscription.</li>
              <li>To provide customer support and resolve technical issues.</li>
              <li>To send important service updates or renewal reminders.</li>
            </ul>

            <h3 className="text-white font-bold mt-8 mb-4">3. Data Protection</h3>
            <p>
              We implement industry-standard security measures (SSL encryption) to protect your personal data from unauthorized access.
            </p>

            <h3 className="text-white font-bold mt-8 mb-4">4. Third-Party Sharing</h3>
            <p>
              We do not sell, trade, or rent your personal identification information to others. We may share generic aggregated demographic information not linked to any personal identification regarding visitors and users with our business partners.
            </p>

            <h3 className="text-white font-bold mt-8 mb-4">5. Cookies</h3>
            <p>
              Our website uses "cookies" to enhance the user experience. You may choose to set your web browser to refuse cookies, or to alert you when cookies are being sent.
            </p>
          </div>
        </motion.div>
      </div>

      <Footer />
    </main>
  );
}
