"use client";

import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";

export default function TermsAndConditions() {
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
            Terms & Conditions
          </h1>

          <div className="prose prose-invert prose-lg max-w-none text-slate-300">
            <h3 className="text-white font-bold mt-8 mb-4">1. Introduction</h3>
            <p>
              Welcome to <strong>Hyper Sat</strong>. By accessing or using our website and streaming platform, you agree to be bound by these Terms and Conditions.
            </p>

            <h3 className="text-white font-bold mt-8 mb-4">2. License to Use</h3>
            <p>
              Hyper Sat grants you a limited, non-exclusive, non-transferable license to access and use the service for personal, non-commercial entertainment purposes. You agree not to redistribute, broadcast, or copy any content accessed through our platform.
            </p>

            <h3 className="text-white font-bold mt-8 mb-4">3. User Accounts</h3>
            <p>
              You are responsible for maintaining the confidentiality of your account credentials. Sharing your account access with third parties is strictly prohibited and may result in immediate suspension of services without refund.
            </p>

            <h3 className="text-white font-bold mt-8 mb-4">4. Service Stability</h3>
            <p>
              While we strive for 99.9% uptime, we do not guarantee that the service will be uninterrupted or error-free. Occasional maintenance or technical updates may occur.
            </p>

            <h3 className="text-white font-bold mt-8 mb-4">5. Prohibited Activities</h3>
            <p>You agree not to:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Use the service for any illegal purpose.</li>
              <li>Attempt to hack, reverse engineer, or bypass our security protocols.</li>
              <li>Stream content on public screens without authorization.</li>
            </ul>

            <h3 className="text-white font-bold mt-8 mb-4">6. Changes to Terms</h3>
            <p>
              Hyper Sat reserves the right to modify these terms at any time. Continued use of the service constitutes acceptance of the new terms.
            </p>
          </div>
        </motion.div>
      </div>

      <Footer />
    </main>
  );
}
