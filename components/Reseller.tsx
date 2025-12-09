"use client";

import { motion } from "framer-motion";
import { TrendingUp, DollarSign, Sparkles, Star } from "lucide-react";
import ShinyButton from "./ShinyButton";
import CosmicCard from "./ui/CosmicCard";

const features = [
  {
    icon: <DollarSign className="w-6 h-6" />,
    title: "High Margins",
    description: "Buy at wholesale prices, sell at market rates. Keep 100% of the profit.",
    gradient: "from-[#0066FF] to-[#0066FF]/50",
  },
  {
    icon: <TrendingUp className="w-6 h-6" />,
    title: "Premium Stability",
    description: "Sell with confidence. Our 99.9% uptime means zero complaints from your clients.",
    gradient: "from-[#FF3399] to-[#FF3399]/50",
  },
];

export default function Reseller() {
  const whatsappLink = "https://wa.me/201128498956?text=I%20am%20interested%20in%20the%20Reseller%20Program";

  return (
    <section id="reseller" className="py-12 md:py-24 lg:py-32 relative overflow-hidden flex items-center justify-center min-h-screen">
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
            Become a <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-accent to-primary">Success Partner.</span>
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-slate-400 px-4">Turn your network into net worth.</p>
        </motion.div>

        {/* Premium Card */}
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
                  
                  {/* Left Section: Content & CTA */}
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
                      Business Partnership
                    </motion.div>
                    
                    {/* Headline */}
                    <div>
                      <h3 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white tracking-tight mb-3 md:mb-4">
                        Join the World's Most Stable IPTV Network
                      </h3>
                      <p className="text-base sm:text-lg text-slate-400 leading-relaxed">
                        Generate recurring passive income today with our proven reseller program.
                      </p>
                    </div>

                    {/* CTA Button */}
                    <motion.div
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="inline-flex w-full sm:w-auto"
                    >
                      <ShinyButton
                        text="Join Reseller Program"
                        href="https://wa.me/201128498956?text=I%20am%20interested%20in%20the%20Reseller%20Program"
                        className="w-full sm:w-auto"
                      />
                    </motion.div>
                  </div>

                  {/* Divider */}
                  <div className="w-full h-px lg:w-px lg:h-80 bg-gradient-to-r lg:bg-gradient-to-b from-transparent via-white/20 to-transparent" />

                  {/* Right Section: Features */}
                  <div className="flex-1 w-full">
                    <h3 className="text-xl sm:text-2xl font-bold text-white mb-6 md:mb-8 text-center lg:text-left">
                      Why Partner With Us:
                    </h3>
                    <ul className="space-y-6">
                      {features.map((feature, i) => (
                        <motion.li
                          key={i}
                          initial={{ opacity: 0, x: -20 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          viewport={{ once: true }}
                          transition={{ delay: 0.3 + i * 0.1, duration: 0.4 }}
                          className="flex items-start gap-4 text-slate-300 group/item"
                        >
                          <div className={`flex-shrink-0 w-10 h-10 rounded-xl bg-gradient-to-br ${feature.gradient} flex items-center justify-center shadow-lg group-hover/item:scale-110 transition-transform`}>
                            {feature.icon}
                          </div>
                          <div>
                            <h4 className="font-semibold text-white mb-1 group-hover/item:text-[#0066FF] transition-colors">
                              {feature.title}
                            </h4>
                            <p className="text-sm text-slate-400 group-hover/item:text-slate-300 transition-colors">
                              {feature.description}
                            </p>
                          </div>
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

