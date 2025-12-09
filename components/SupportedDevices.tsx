"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const devices = [
  { name: "Samsung", img: "/assets/devices/samsung.png" },
  { name: "LG WebOS", img: "/assets/devices/lg.png" },
  { name: "Android TV", img: "/assets/devices/android.png" },
  { name: "Fire TV Stick", img: "/assets/devices/firetv.png" },
  { name: "Roku", img: "/assets/devices/roku.png" },
  { name: "Microsoft", img: "/assets/devices/microsoft.png" },
  { name: "Apple", img: "/assets/devices/apple.png" },
  { name: "VIDAA", img: "/assets/devices/vidaa.png" },
  { name: "Whale TV", img: "/assets/devices/whaletv.png" },
  { name: "Titan OS", img: "/assets/devices/titanos.png" },
];

export default function SupportedDevices() {
  return (
    <section className="py-8 md:py-12 relative bg-transparent overflow-hidden">
      <div className="container px-4 relative z-10">
        {/* Title */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-8"
        >
          <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold text-white/90 mb-2 px-4">
            Available on All Your Favorite Devices
          </h2>
        </motion.div>

        {/* Infinite Marquee Slider */}
        <div className="relative w-full overflow-hidden">
          {/* Fade Mask - Left */}
          <div className="absolute left-0 top-0 w-32 h-full bg-gradient-to-r from-[#0A0A0A] to-transparent z-20 pointer-events-none" />
          
          {/* Fade Mask - Right */}
          <div className="absolute right-0 top-0 w-32 h-full bg-gradient-to-l from-[#0A0A0A] to-transparent z-20 pointer-events-none" />

          {/* Slider Container */}
          <div className="flex overflow-hidden">
            <motion.div
              className="flex gap-4"
              animate={{
                x: ["0%", "-50%"],
              }}
              transition={{
                duration: 40,
                repeat: Infinity,
                ease: "linear",
              }}
            >
              {/* Duplicate devices array 4 times for seamless loop */}
              {[...devices, ...devices, ...devices, ...devices].map((device, idx) => (
                <div
                  key={`device-${idx}`}
                  className="flex-shrink-0 min-w-[160px] sm:min-w-[200px] md:min-w-[240px] h-20 sm:h-24 md:h-28 rounded-xl bg-white border border-white/20 backdrop-blur-sm flex items-center justify-center p-3 sm:p-4 hover:shadow-lg hover:scale-105 transition-all duration-300"
                >
                  <Image
                    src={device.img}
                    alt={device.name}
                    width={160}
                    height={80}
                    className="w-auto h-auto max-w-full max-h-full object-contain"
                    unoptimized
                  />
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}

