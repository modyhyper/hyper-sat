"use client";

import { motion } from "framer-motion";
import { Tv, Wifi, Shield, Smartphone, Globe, Zap } from "lucide-react";
import CosmicCard from "./ui/CosmicCard";

// قائمة المميزات
const features = [
  {
    icon: <Tv className="w-6 h-6 text-white" />,
    title: "Premium Content Library",
    description: "Unlimited access to a vast library of live events, movies, and series in stunning 4K & Ultra HD.",
  },
  {
    icon: <Zap className="w-6 h-6 text-white" />,
    title: "High-Speed CDN",
    description: "Powered by global server infrastructure ensuring low latency and buffer-free streaming.",
  },
  {
    icon: <Smartphone className="w-6 h-6 text-white" />,
    title: "Cross-Platform Support",
    description: "Stream seamlessly on your Smart TV, Android, iOS, Windows, and MacOS devices.",
  },
  {
    icon: <Shield className="w-6 h-6 text-white" />,
    title: "Bank-Level Security",
    description: "Your connection is fully encrypted with advanced SSL protocols to ensure total data protection.",
  },
  {
    icon: <Globe className="w-6 h-6 text-white" />,
    title: "Global Access",
    description: "Enjoy your favorite content from anywhere in the world. No geographical boundaries.",
  },
  {
    icon: <Wifi className="w-6 h-6 text-white" />,
    title: "Instant Setup",
    description: "Receive your login credentials and start watching immediately after registration.",
  },
];

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.1 },
  },
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 },
};

export default function FeatureGrid() {
  return (
    <section id="features" className="py-12 md:py-24 relative bg-transparent overflow-hidden">
      <div className="container px-4 relative z-10">
        
        {/* العنوان */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-8 md:mb-16"
        >
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-3 md:mb-4 px-4">
            Why Choose <span className="bg-gradient-to-r from-[#0066FF] to-[#FF3399] bg-clip-text text-transparent">Hyper Sat</span>?
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-base sm:text-lg px-4">
            We combined speed, quality, and stability to bring you the ultimate entertainment experience.
          </p>
        </motion.div>

        {/* الشبكة */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 items-stretch px-4"
        >
          {features.map((feature, idx) => (
            <motion.div
              key={idx}
              variants={item}
              className="w-full h-full flex"
            >
              <CosmicCard className="h-full">
                <div className="p-8 h-full flex flex-col items-start transition-all duration-300 group-hover:bg-white/[0.02]">
                  
                  {/* الأيقونة */}
                  <div className="flex items-center gap-4 mb-4">
                    <div className="h-12 w-12 rounded-xl border border-white/10 bg-gradient-to-br from-[#0066FF]/20 to-[#FF3399]/20 flex items-center justify-center shadow-inner group-hover:scale-110 transition-transform duration-300">
                      {feature.icon}
                    </div>
                    <h3 className="text-xl font-bold text-white tracking-wide">{feature.title}</h3>
                  </div>

                  {/* الوصف */}
                  <p className="text-gray-400 text-sm leading-relaxed mb-6">
                    {feature.description}
                  </p>

                  {/* الخطوط الجمالية في الأسفل */}
                  <div className="mt-auto pt-2 w-full flex items-center gap-2 opacity-50">
                      <div className="h-1.5 w-1.5 rounded-full bg-[#0066FF]" />
                      <div className="h-[1px] flex-1 bg-gradient-to-r from-[#0066FF]/50 to-transparent" />
                  </div>
                </div>
              </CosmicCard>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}