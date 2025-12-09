"use client";

import { motion } from "framer-motion";
import { Check } from "lucide-react";

interface PricingTier {
  name: string;
  price: string;
  period: string;
  description: string;
  features: string[];
  popular?: boolean;
  gradient: string;
}

interface PricingCardProps {
  tier: PricingTier;
  index: number;
}

const cardVariants = {
  hidden: { 
    opacity: 0, 
    y: 30,
    scale: 0.95,
  },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.6,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

export default function PricingCard({ tier, index }: PricingCardProps) {
  return (
    <motion.div
      variants={cardVariants}
      whileHover={{ 
        scale: 1.05, 
        y: -8,
        transition: { duration: 0.3, ease: [0.22, 1, 0.36, 1] }
      }}
      className={`group relative backdrop-blur-sm bg-white/5 border rounded-2xl p-8 overflow-hidden transition-all duration-500 ${
        tier.popular
          ? "border-[#0066FF]/50"
          : "border-white/10"
      }`}
    >
      {/* Pulsing Glow Border for Popular Card */}
      {tier.popular && (
        <motion.div
          className="absolute inset-0 rounded-2xl"
          animate={{
            boxShadow: [
              "0 0 20px rgba(0, 102, 255, 0.3)",
              "0 0 40px rgba(0, 102, 255, 0.5)",
              "0 0 20px rgba(0, 102, 255, 0.3)",
            ],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          style={{
            border: "1px solid rgba(0, 102, 255, 0.5)",
          }}
        />
      )}

      {/* Background Light Shift on Hover */}
      <motion.div
        className="absolute inset-0 bg-white/0 group-hover:bg-white/[0.03] rounded-2xl transition-all duration-500"
      />

      {/* Popular Badge */}
      {tier.popular && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.5 }}
          className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1.5 bg-gradient-to-r from-[#0066FF] to-[#FF3399] rounded-full text-sm font-semibold text-white shadow-lg z-10"
        >
          Most Popular
        </motion.div>
      )}

      <div className="relative z-10">
        {/* Header */}
        <div className="text-center mb-8">
          <h3 className="text-2xl font-bold mb-2 text-white group-hover:text-white transition-colors">
            {tier.name}
          </h3>
          <p className="text-slate-400 mb-6 group-hover:text-slate-300 transition-colors">
            {tier.description}
          </p>
          <div className="flex items-baseline justify-center gap-2">
            <span className="text-5xl font-bold text-white">{tier.price}</span>
            <span className="text-slate-400">/{tier.period}</span>
          </div>
        </div>

        {/* Features List */}
        <ul className="space-y-4 mb-8">
          {tier.features.map((feature, idx) => (
            <motion.li
              key={idx}
              initial={{ opacity: 0, x: -10 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 + idx * 0.05, duration: 0.3 }}
              className="flex items-start gap-3"
            >
              <div className="flex-shrink-0 w-5 h-5 rounded-full bg-gradient-to-br from-[#0066FF] to-[#FF3399] flex items-center justify-center mt-0.5 shadow-lg">
                <Check className="w-3 h-3 text-white" />
              </div>
              <span className="text-slate-300 group-hover:text-slate-200 transition-colors">
                {feature}
              </span>
            </motion.li>
          ))}
        </ul>

        {/* CTA Button with Shimmer Effect */}
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className={`relative w-full py-3.5 rounded-lg font-semibold text-white overflow-hidden transition-all duration-300 ${
            tier.popular
              ? "bg-[#0066FF] shadow-[0_0_20px_rgba(0,102,255,0.4)] hover:shadow-[0_0_30px_rgba(0,102,255,0.6)]"
              : "backdrop-blur-md bg-white/5 border border-white/10 hover:bg-white/10 hover:border-white/20"
          }`}
        >
          {/* Shimmer Effect */}
          <motion.div
            className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
            initial={{ x: "-100%" }}
            whileHover={{ x: "100%" }}
            transition={{ duration: 0.6, ease: "easeInOut" }}
          />
          <span className="relative z-10">Get Started</span>
        </motion.button>
      </div>

      {/* Subtle Gradient Overlay */}
      <div 
        className={`absolute inset-0 bg-gradient-to-br ${tier.gradient} opacity-0 group-hover:opacity-[0.05] rounded-2xl transition-opacity duration-500 pointer-events-none`}
      />
    </motion.div>
  );
}

