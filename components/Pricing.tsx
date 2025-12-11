"use client";

import { motion } from "framer-motion";
import { Check, Star, Sparkles } from "lucide-react";
import ShinyButton from "./ShinyButton";
import CosmicCard from "./ui/CosmicCard";

export default function Pricing() {
  const whatsappLink = "https://wa.me/201128498956?text=Hello,%20I%20want%20to%20subscribe%20to%20Hyper%20Sat%20(1%20Year%20Plan)";

  const features = [
    "Access to +10,000 Premium Live Streams",
    "4K & Ultra HD Quality",
    "Buffer-Free Technology 3.0",
    "Works on Smart TV, Mobile & PC",
    "24/7 VIP Support on WhatsApp",
    "Instant Activation",
    "Money-back Guarantee",
    "All-In-One Access"
  ];

  return (
    <section id="pricing" className="py-12 md:py-24 lg:py-32 relative overflow-hidden flex items-center justify-center min-h-screen">
      {/* Animated Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-to-r from-primary/30 via-accent/20 to-primary/30 blur-[140px] rounded-full pointer-events-none animate-pulse" />

      <div className="container px-4 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-8 md:mb-16"
        >
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-6xl font-bold text-white mb-3 md:mb-4 tracking-tight px-4">
            One Plan. <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-accent to-primary">Unlimited Access.</span>
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-slate-400 px-4">Simple pricing for a premium experience.</p>
        </motion.div>

        {/* Golden Ticket Card */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9, y: 30 }}
          whileInView={{ opacity: 1, scale: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="max-w-5xl mx-auto w-full px-4"
        >
          <CosmicCard className="rounded-3xl w-full">
            {/* Inner Content */}
            <div className="relative p-6 sm:p-8 md:p-16">
              <div className="flex flex-col lg:flex-row items-center gap-12">

                {/* Left Section: Price & CTA */}
                <div className="flex-1 text-center lg:text-left space-y-8">
                  {/* Badge */}
                  <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2 }}
                    className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-accent/20 to-primary/20 border border-accent/30 text-accent text-sm font-semibold backdrop-blur-sm"
                  >
                    <Sparkles className="w-4 h-4 fill-current" />
                    <Star className="w-4 h-4 fill-current text-primary" />
                    All-In-One Access
                  </motion.div>

                  {/* Price */}
                  <div>
                    <div className="flex items-baseline justify-center lg:justify-start gap-3 mb-3">
                      <span className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold text-white tracking-tighter bg-gradient-to-r from-white via-white to-slate-200 bg-clip-text text-transparent">
                        $60
                      </span>
                      <span className="text-xl sm:text-2xl text-slate-400">/ year</span>
                    </div>
                    <p className="text-base sm:text-lg text-slate-500">Less than $5 per month. Cancel anytime.</p>
                  </div>

                  {/* CTA Button */}
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="inline-flex w-full md:w-auto"
                  >
                    <ShinyButton
                      text="Subscribe via WhatsApp"
                      href={whatsappLink}
                      className="w-full md:w-auto"
                    />
                  </motion.div>
                </div>

                {/* Divider */}
                <div className="w-full h-px lg:w-px lg:h-80 bg-gradient-to-r lg:bg-gradient-to-b from-transparent via-white/20 to-transparent" />

                {/* Right Section: Features */}
                <div className="flex-1 w-full">
                  <h3 className="text-xl sm:text-2xl font-bold text-white mb-6 md:mb-8 text-center lg:text-left">
                    What's included:
                  </h3>
                  <ul className="space-y-5">
                    {features.map((item, i) => (
                      <motion.li
                        key={i}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.3 + i * 0.05, duration: 0.4 }}
                        className="flex items-center gap-4 text-slate-300 group/item"
                      >
                        <div className="flex-shrink-0 w-7 h-7 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center shadow-lg group-hover/item:scale-110 transition-transform">
                          <Check className="w-4 h-4 text-white" />
                        </div>
                        <span className="group-hover/item:text-white transition-colors">{item}</span>
                      </motion.li>
                    ))}
                  </ul>
                </div>

              </div>
            </div>
          </CosmicCard>
        </motion.div>
      </div>
    </section>
  );
}