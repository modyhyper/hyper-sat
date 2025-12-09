"use client";

import { motion } from "framer-motion";
import {
  Tv,
  Zap,
  Globe,
  Shield,
  Smartphone,
  Clock,
} from "lucide-react";

interface Feature {
  icon: React.ReactNode;
  title: string;
  description: string;
  gradient: string;
  glowColor: string;
}

const features: Feature[] = [
  {
    icon: <Tv className="w-8 h-8" />,
    title: "10,000+ Channels",
    description: "Access a vast library of international channels from around the world.",
    gradient: "from-[#0066FF] to-[#0066FF]/50",
    glowColor: "#0066FF",
  },
  {
    icon: <Zap className="w-8 h-8" />,
    title: "Lightning Fast",
    description: "Stream without buffering with our optimized servers and CDN network.",
    gradient: "from-[#FF3399] to-[#FF3399]/50",
    glowColor: "#FF3399",
  },
  {
    icon: <Globe className="w-8 h-8" />,
    title: "Global Content",
    description: "Watch content from every corner of the globe in multiple languages.",
    gradient: "from-[#0066FF] to-[#FF3399]",
    glowColor: "#0066FF",
  },
  {
    icon: <Shield className="w-8 h-8" />,
    title: "Secure & Private",
    description: "Your privacy is our priority with end-to-end encryption.",
    gradient: "from-[#FF3399] to-[#0066FF]",
    glowColor: "#FF3399",
  },
  {
    icon: <Smartphone className="w-8 h-8" />,
    title: "Multi-Device",
    description: "Watch on TV, phone, tablet, or computer. One subscription, unlimited devices.",
    gradient: "from-[#0066FF] to-[#0066FF]/50",
    glowColor: "#0066FF",
  },
  {
    icon: <Clock className="w-8 h-8" />,
    title: "Catch-Up TV",
    description: "Never miss your favorite shows with our catch-up and recording features.",
    gradient: "from-[#FF3399] to-[#FF3399]/50",
    glowColor: "#FF3399",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
};

const itemVariants = {
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

export default function FeatureGrid() {
  return (
    <section id="features" className="py-24 px-4 sm:px-6 lg:px-8 relative">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight mb-4">
            Why Choose <span className="bg-gradient-to-r from-[#0066FF] to-[#FF3399] bg-clip-text text-transparent">Hyper Sat</span>?
          </h2>
          <p className="text-xl text-slate-400 max-w-2xl mx-auto">
            Experience the ultimate in entertainment with features designed for the modern viewer.
          </p>
        </motion.div>

        {/* Bento Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {features.map((feature, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ 
                scale: 1.02, 
                y: -8,
                transition: { duration: 0.3, ease: [0.22, 1, 0.36, 1] }
              }}
              className="group relative"
            >
              {/* Pulsing Glow Border */}
              <motion.div
                className="absolute -inset-[2px] rounded-3xl opacity-0 group-hover:opacity-75 transition-opacity duration-500"
                animate={{
                  background: [
                    `linear-gradient(135deg, ${feature.glowColor}80, ${feature.glowColor === "#0066FF" ? "rgba(255, 51, 153, 0.5)" : "rgba(0, 102, 255, 0.5)"}, ${feature.glowColor}80)`,
                    `linear-gradient(135deg, ${feature.glowColor === "#0066FF" ? "rgba(255, 51, 153, 0.5)" : "rgba(0, 102, 255, 0.5)"}, ${feature.glowColor}80, ${feature.glowColor === "#0066FF" ? "rgba(255, 51, 153, 0.5)" : "rgba(0, 102, 255, 0.5)"})`,
                    `linear-gradient(135deg, ${feature.glowColor}80, ${feature.glowColor === "#0066FF" ? "rgba(255, 51, 153, 0.5)" : "rgba(0, 102, 255, 0.5)"}, ${feature.glowColor}80)`,
                  ],
                  boxShadow: [
                    `0 0 30px ${feature.glowColor}60, 0 0 60px ${feature.glowColor}40`,
                    `0 0 40px ${feature.glowColor}80, 0 0 80px ${feature.glowColor}60`,
                    `0 0 30px ${feature.glowColor}60, 0 0 60px ${feature.glowColor}40`,
                  ],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                style={{
                  filter: "blur(6px)",
                }}
              />

              {/* Animated Shimmer Effect */}
              <motion.div
                className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-1000"
                animate={{
                  background: [
                    "linear-gradient(90deg, transparent 0%, rgba(255, 255, 255, 0.1) 50%, transparent 100%)",
                  ],
                  x: ["-200%", "200%"],
                }}
                transition={{
                  x: {
                    duration: 2,
                    repeat: Infinity,
                    ease: "linear",
                  },
                }}
              />

              {/* Backlight Glow Effect on Hover */}
              <div 
                className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-2xl -z-10"
                style={{
                  background: feature.glowColor === "#0066FF" 
                    ? "radial-gradient(circle, rgba(0, 102, 255, 0.3), transparent 70%)"
                    : "radial-gradient(circle, rgba(255, 51, 153, 0.3), transparent 70%)",
                }}
              />

              {/* Main Card Container */}
              <div className="relative rounded-3xl bg-gradient-to-br from-[#0A0A0A]/95 via-[#0A0A0A]/90 to-[#0A0A0A]/95 backdrop-blur-2xl border border-white/20 p-1 overflow-hidden">
                {/* Inner Content */}
                <div className="relative rounded-[22px] bg-white/5 backdrop-blur-xl p-8">
                  {/* Content */}
                  <div className="relative z-10">
                    {/* Icon with Scale and Glow Animation */}
                    <motion.div
                      whileHover={{ 
                        scale: 1.15, 
                        rotate: 5,
                        filter: feature.glowColor === "#0066FF" 
                          ? "drop-shadow(0 0 20px rgba(0, 102, 255, 0.8))"
                          : "drop-shadow(0 0 20px rgba(255, 51, 153, 0.8))"
                      }}
                      transition={{ duration: 0.3 }}
                      className={`inline-flex p-4 rounded-xl bg-gradient-to-br ${feature.gradient} mb-4 text-white shadow-lg`}
                    >
                      {feature.icon}
                    </motion.div>
                    
                    <h3 className="text-2xl font-bold mb-3 text-white group-hover:text-white transition-colors">
                      {feature.title}
                    </h3>
                    <p className="text-slate-400 leading-relaxed group-hover:text-slate-300 transition-colors">
                      {feature.description}
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

