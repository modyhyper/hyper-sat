"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import ContentTicker from "./ContentTicker";
import ShinyButton from "./ShinyButton";

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
      className="relative min-h-screen w-full overflow-hidden flex flex-col items-center justify-center bg-transparent"
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
          background: `radial-gradient(clamp(300px, 40vw, 600px) circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(0,102,255,0.15), transparent 40%)`,
        }}
        transition={{
          type: "tween",
          ease: "easeOut",
          duration: 0.5,
        }}
      />

      {/* Main Content */}
      <div className="container relative z-10 flex flex-col items-center text-center px-4 pt-16 sm:pt-20 pb-16 sm:pb-32">
        
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-4 md:mb-6 px-3 sm:px-4 py-1.5 rounded-full border border-white/10 bg-white/5 backdrop-blur-md text-xs sm:text-sm font-medium text-gray-300 flex items-center gap-2"
        >
          <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse flex-shrink-0" />
          <span className="whitespace-nowrap">The #1 Premium Streaming Platform</span>
        </motion.div>

        {/* Main Heading */}
        <motion.h1
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="text-3xl sm:text-4xl md:text-6xl lg:text-8xl font-bold tracking-tighter text-white mb-4 md:mb-6"
        >
          Unlimited Entertainment. <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-white to-accent">
            Zero Limits.
          </span>
        </motion.h1>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.4 }}
          className="max-w-2xl text-base sm:text-lg md:text-xl text-gray-400 mb-8 md:mb-10 px-4"
        >
          Upgrade your viewing experience with the world's most stable streaming network. Compatible with all your favorite devices in stunning 4K & Ultra HD quality.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.6 }}
          className="flex flex-col sm:flex-row gap-4 w-full max-w-md sm:max-w-none justify-center mb-12 md:mb-16 px-4"
        >
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="w-full sm:w-auto"
          >
            <ShinyButton text="Start Watching" href="#pricing" className="w-full sm:w-auto" />
          </motion.div>
          
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="w-full sm:w-auto"
          >
            <Link href="#features" className="w-full sm:w-auto">
              <button
                type="button"
                className="w-full sm:w-auto px-8 py-4 text-lg font-semibold rounded-full bg-primary text-white border border-primary/50 hover:border-primary shadow-[0_0_20px_rgba(0,102,255,0.5)] hover:shadow-[0_0_35px_rgba(0,102,255,0.8)] shadow-lg transition-all duration-300 hover:scale-105 active:scale-95"
              >
                Learn More
              </button>
            </Link>
          </motion.div>
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