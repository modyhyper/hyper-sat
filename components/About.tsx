"use client";

import { motion } from "framer-motion";
import { Users, Activity, Headphones, Globe } from "lucide-react";

const stats = [
  {
    icon: <Users className="w-6 h-6" />,
    value: "+50k",
    label: "Users",
    gradient: "from-[#0066FF] to-[#0066FF]/50",
  },
  {
    icon: <Activity className="w-6 h-6" />,
    value: "99.9%",
    label: "Uptime",
    gradient: "from-[#FF3399] to-[#FF3399]/50",
  },
  {
    icon: <Headphones className="w-6 h-6" />,
    value: "24/7",
    label: "Support",
    gradient: "from-[#0066FF] to-[#FF3399]",
  },
  {
    icon: <Globe className="w-6 h-6" />,
    value: "+120",
    label: "Countries",
    gradient: "from-[#FF3399] to-[#0066FF]",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

export default function About() {
  return (
    <section className="py-12 md:py-24 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      {/* Background Gradient */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/10 blur-[140px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center"
        >
          {/* Left Side: Text Content */}
          <motion.div variants={itemVariants} className="space-y-6">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-white"
            >
              Streaming Beyond{" "}
              <span className="bg-gradient-to-r from-[#0066FF] to-[#FF3399] bg-clip-text text-transparent">
                Boundaries.
              </span>
            </motion.h2>

            <p className="text-slate-400 text-lg leading-relaxed mb-6">
              Hyper Sat isn't just a streaming platform; it's a gateway to global entertainment. Established in 2020, we provide unparalleled stability and quality.
            </p>
          </motion.div>

          {/* Right Side: Stats Grid */}
          <motion.div
            variants={itemVariants}
            className="grid grid-cols-2 gap-6"
          >
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 + index * 0.1, duration: 0.5 }}
                whileHover={{ scale: 1.05, y: -5 }}
                className="group relative backdrop-blur-sm bg-white/5 border border-white/10 rounded-2xl p-6 hover:border-[#0066FF]/50 transition-all duration-300"
              >
                {/* Gradient Glow on Hover */}
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${stat.gradient} opacity-0 group-hover:opacity-10 rounded-2xl transition-opacity duration-300`}
                />

                <div className="relative z-10">
                  {/* Icon */}
                  <div
                    className={`inline-flex p-3 rounded-xl bg-gradient-to-br ${stat.gradient} mb-4 text-white shadow-lg`}
                  >
                    {stat.icon}
                  </div>

                  {/* Value */}
                  <div className="text-3xl md:text-4xl font-bold text-white mb-2">
                    {stat.value}
                  </div>

                  {/* Label */}
                  <div className="text-slate-400 font-medium">{stat.label}</div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

