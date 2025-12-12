"use client";

import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";

export default function RefundPolicy() {
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
            Refund & Return Policy
          </h1>

          <div className="prose prose-invert prose-lg max-w-none text-slate-300">
            <p className="lead">
              At <strong>Hyper Sat</strong>, we are committed to ensuring your satisfaction with our streaming platform.
            </p>

            <h3 className="text-white font-bold mt-8 mb-4">1. 7-Day Money-Back Guarantee</h3>
            <p>
              We offer a full money-back guarantee for all new subscriptions within the first 7 days of purchase. If you are not completely satisfied with the performance or stability of our platform, you may request a full refund.
            </p>

            <h3 className="text-white font-bold mt-8 mb-4">2. Eligible Refund Scenarios</h3>
            <ul className="list-disc pl-6 space-y-2">
              <li>Technical issues that our support team cannot resolve within 24 hours.</li>
              <li>Incompatibility with your device despite meeting the stated requirements.</li>
              <li>Accidental duplicate charges.</li>
            </ul>

            <h3 className="text-white font-bold mt-8 mb-4">3. Non-Refundable Items</h3>
            <ul className="list-disc pl-6 space-y-2">
              <li>Gift cards or promotional vouchers.</li>
              <li>Renewals processed after the 7-day grace period.</li>
            </ul>

            <h3 className="text-white font-bold mt-8 mb-4">4. How to Request a Refund</h3>
            <p>
              To initiate a refund, please contact our support team via the "Contact Us" page or email us directly. Please include your order ID and a brief description of the issue. Refunds are typically processed within 3-5 business days back to the original payment method.
            </p>
          </div>
        </motion.div>
      </div>

      <Footer />
    </main>
  );
}
