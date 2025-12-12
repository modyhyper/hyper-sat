"use client";

import { motion } from "framer-motion";
import { Film, Play } from "lucide-react";
import Image from "next-image-export-optimizer";

// 1. Content Data (with image paths)
const channels = [
  { name: "beIN", imagePath: "assets/logos/bein.png" },
  { name: "NETFLIX", imagePath: "assets/logos/netflix.png" },
  { name: "SHAHID", imagePath: "assets/logos/shahid.png" },
  { name: "OSN", imagePath: "assets/logos/osn.png" },
  { name: "Disney+", imagePath: "assets/logos/disney.png" },
  { name: "HBO", imagePath: "assets/logos/hbo.png" },
  { name: "Rotana", imagePath: "assets/logos/rotana.png" },
];

// 2. بيانات الأفلام والمسلسلات
const movies = [
  { title: "House of Dragon", img: "assets/posters/house_dragon.jpg" },
  { title: "Breaking Bad", img: "assets/posters/breaking_bad.jpg" },
  { title: "Stranger Things", img: "assets/posters/stranger_things.jpg" },
  { title: "Oppenheimer", img: "assets/posters/oppenheimer.jpg" },
  { title: "El Heshashin", img: "assets/posters/heshashin.jpg" },
  { title: "Game of Thrones", img: "assets/posters/got.jpg" },
  { title: "The Office", img: "assets/posters/the_office.jpg" },
  { title: "Friends", img: "assets/posters/friends.jpg" },
];

export default function ContentTicker() {
  return (
    <div className="w-full py-12 overflow-hidden relative z-20 pointer-events-none select-none">

      {/* تأثير التلاشي في الجوانب (Fade Mask) */}
      <div className="absolute top-0 left-0 w-32 h-full bg-gradient-to-r from-[#0A0A0A] to-transparent z-30" />
      <div className="absolute top-0 right-0 w-32 h-full bg-gradient-to-l from-[#0A0A0A] to-transparent z-30" />

      {/* --- Row 1: Content (Moves Left) --- */}
      <div className="mb-6 relative flex w-full">
        <motion.div
          className="flex gap-4"
          animate={{ x: ["0%", "-50%"] }}
          transition={{
            repeat: Infinity,
            ease: "linear",
            duration: 30 // سرعة هادئة
          }}
        >
          {/* نكرر القائمة 4 مرات لضمان عدم انقطاع الشريط أبداً */}
          {[...channels, ...channels, ...channels, ...channels].map((channel, i) => (
            <div
              key={i}
              className="relative w-36 h-20 flex-shrink-0 rounded-xl overflow-hidden border border-white/10 shadow-lg group bg-white/10 backdrop-blur-sm"
            >
              <div className="relative z-10 w-full h-full flex items-center justify-center p-4">
                <Image
                  src={channel.imagePath}
                  alt={channel.name}
                  width={96}
                  height={48}
                  className="w-24 h-12 object-contain"
                />
              </div>
            </div>
          ))}
        </motion.div>
      </div>

      {/* --- الصف الثاني: الأفلام (يتحرك لليمين) --- */}
      <div className="relative flex w-full">
        <motion.div
          className="flex gap-4"
          animate={{ x: ["-50%", "0%"] }} // عكس الاتجاه
          transition={{
            repeat: Infinity,
            ease: "linear",
            duration: 35
          }}
        >
          {[...movies, ...movies, ...movies, ...movies].map((movie, i) => (
            <div
              key={i}
              className="relative w-32 h-48 flex-shrink-0 rounded-xl overflow-hidden border border-white/10 shadow-lg"
            >
              {/* Poster Image */}
              <Image
                src={movie.img}
                alt={movie.title}
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                className="object-cover"
              />

              {/* Gradient Overlay for Title Readability */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent z-10" />

              {/* Title Overlay */}
              <div className="absolute bottom-0 w-full p-3 z-20 text-center">
                <span className="text-white text-xs font-semibold line-clamp-2 leading-tight drop-shadow-lg">
                  {movie.title}
                </span>
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  );
}
