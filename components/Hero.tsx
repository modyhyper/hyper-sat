"use client";

import { motion } from "framer-motion";
import { Play, ChevronRight } from "lucide-react";
import { useState, useEffect } from "react";
import ContentTicker from "./ContentTicker";

export default function Hero() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <section
      className="relative min-h-screen w-full overflow-hidden flex flex-col items-center justify-center bg-[#0A0A0A]"
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => setIsHovering(false)}
    >
      {/* Static Aurora Background */}
      <div className="absolute top-[-20%] left-[-10%] w-[500px] h-[500px] bg-primary/30 rounded-full blur-[120px] mix-blend-screen animate-pulse pointer-events-none" />
      <div className="absolute bottom-[-20%] right-[-10%] w-[600px] h-[600px] bg-accent/20 rounded-full blur-[120px] mix-blend-screen pointer-events-none" />

      {/* Mouse-Tracking Spotlight Effect */}
      <motion.div
        className="absolute inset-0 pointer-events-none z-0"
        animate={{
          background: `radial-gradient(600px circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(0,102,255,0.15), transparent 40%)`,
        }}
        transition={{
          type: "tween",
          ease: "easeOut",
          duration: 0.5,
        }}
      />

      {/* Main Content */}
      <div className="container relative z-10 flex flex-col items-center text-center px-4 pt-20 pb-32">
        
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-6 px-4 py-1.5 rounded-full border border-white/10 bg-white/5 backdrop-blur-md text-sm font-medium text-gray-300 flex items-center gap-2"
        >
          <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
          The #1 Premium IPTV Service
        </motion.div>

        {/* Main Heading */}
        <motion.h1
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="text-5xl md:text-8xl font-bold tracking-tighter text-white mb-6"
        >
          The World is Yours <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-white to-accent">
            To Stream.
          </span>
        </motion.h1>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.4 }}
          className="max-w-2xl text-lg md:text-xl text-gray-400 mb-10"
        >
          Experience +10,000 Channels in 4K Quality. No Freezing. No Limits.
          Compatible with all your smart devices.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.6 }}
          className="flex flex-col sm:flex-row gap-4 w-full justify-center mb-16"
        >
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="group relative px-8 py-4 bg-primary text-white rounded-full font-semibold text-lg hover:shadow-[0_0_40px_-10px_rgba(0,102,255,0.5)] transition-all duration-300 flex items-center justify-center gap-2"
          >
            <Play className="w-5 h-5 fill-current" />
            Start Free Trial
          </motion.button>
          
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-4 bg-white/5 border border-white/10 backdrop-blur-sm text-white rounded-full font-semibold text-lg hover:bg-white/10 transition-all flex items-center justify-center gap-2"
          >
            View Plans
            <ChevronRight className="w-5 h-5" />
          </motion.button>
        </motion.div>
      </div>

      {/* Content Ticker - Overlapping the fold */}
      <div className="relative z-10 w-full -mt-20">
        <ContentTicker />
      </div>

      {/* Bottom Gradient Fade */}
      <div className="absolute bottom-0 left-0 w-full h-[40%] bg-gradient-to-t from-[#0A0A0A] to-transparent z-20 pointer-events-none" />
    </section>
  );
}