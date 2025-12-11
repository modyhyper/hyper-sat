"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { ChevronDown } from "lucide-react";
import CosmicCard from "./ui/CosmicCard";

interface FAQItem {
  question: string;
  answer: string;
}

const faqs: FAQItem[] = [
  {
    question: "What internet speed do I need?",
    answer: "We recommend a minimum of 10 Mbps for HD streaming and 25 Mbps for 4K Ultra HD quality. Higher speeds ensure smoother playback and eliminate buffering.",
  },
  {
    question: "Can I use on Smart TV?",
    answer: "Yes! Hyper Sat is compatible with all Smart TVs, Android TV boxes, Fire TV Stick, Apple TV, and any device that supports streaming applications. We provide setup guides for all platforms.",
  },
  {
    question: "Do you offer refunds?",
    answer: "Yes, we offer a 7-day money-back guarantee. If you're not satisfied with our service within the first week, contact our support team for a full refund, no questions asked.",
  },
  {
    question: "Is there a free trial?",
    answer: "Yes! We offer a 24-hour trial so you can test the stability and quality of our service before committing to a subscription. Contact us on WhatsApp to get your test line instantly.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-12 md:py-24 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      {/* Background Gradient */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/10 blur-[140px] rounded-full pointer-events-none" />

      <div className="max-w-4xl mx-auto relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-8 md:mb-16"
        >
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold tracking-tight mb-3 md:mb-4">
            Frequently Asked <span className="bg-gradient-to-r from-[#0066FF] to-[#FF3399] bg-clip-text text-transparent">Questions</span>
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-slate-400">
            Everything you need to know about Hyper Sat
          </p>
        </motion.div>

        {/* Premium FAQ Card Container */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9, y: 30 }}
          whileInView={{ opacity: 1, scale: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="max-w-5xl mx-auto w-full"
        >
          <CosmicCard className="rounded-3xl w-full">
            {/* Inner Content */}
            <div className="relative p-6 sm:p-8 md:p-12">
              {/* FAQ Accordion */}
              <div className="space-y-4">
                {faqs.map((faq, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-50px" }}
                    transition={{ delay: index * 0.1, duration: 0.5 }}
                    className="backdrop-blur-sm bg-white/5 border border-white/10 rounded-2xl overflow-hidden hover:border-[#0066FF]/50 transition-all duration-300"
                  >
                    <button
                      onClick={() => toggleFAQ(index)}
                      className="w-full px-4 sm:px-6 py-4 sm:py-5 flex items-center justify-between text-left group/faq"
                    >
                      <span className="text-base sm:text-lg font-semibold text-white group-hover/faq:text-[#0066FF] transition-colors pr-2 sm:pr-4">
                        {faq.question}
                      </span>
                      <motion.div
                        animate={{ rotate: openIndex === index ? 180 : 0 }}
                        transition={{ duration: 0.3 }}
                        className="flex-shrink-0"
                      >
                        <ChevronDown className="w-5 h-5 text-slate-400 group-hover/faq:text-[#0066FF] transition-colors" />
                      </motion.div>
                    </button>

                    <AnimatePresence>
                      {openIndex === index && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.3 }}
                          className="overflow-hidden"
                        >
                          <div className="px-6 pb-5 pt-0">
                            <p className="text-slate-400 leading-relaxed">
                              {faq.answer}
                            </p>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </motion.div>
                ))}
              </div>
            </div>
          </CosmicCard>
        </motion.div>
      </div>
    </section>
  );
}

