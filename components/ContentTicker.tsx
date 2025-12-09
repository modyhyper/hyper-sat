"use client";

import { motion } from "framer-motion";
import { Film, Play } from "lucide-react";

// 1. بيانات القنوات (الوان متدرجة احترافية)
const channels = [
  { name: "beIN", gradient: "from-violet-900 via-purple-800 to-indigo-900" },
  { name: "NETFLIX", gradient: "from-red-900 via-red-700 to-black" },
  { name: "SHAHID", gradient: "from-green-900 via-emerald-800 to-teal-900" },
  { name: "OSN", gradient: "from-orange-700 via-red-800 to-rose-900" },
  { name: "Disney+", gradient: "from-blue-900 via-blue-800 to-cyan-900" },
  { name: "HBO", gradient: "from-gray-900 via-slate-800 to-black" },
  { name: "Rotana", gradient: "from-teal-800 via-green-800 to-emerald-900" },
];

// 2. بيانات الأفلام والمسلسلات
const movies = [
  "House of Dragon", "Breaking Bad", "Stranger Things", 
  "Oppenheimer", "El Heshashin", "Game of Thrones", 
  "The Office", "Friends"
];

export default function ContentTicker() {
  return (
    <div className="w-full py-12 overflow-hidden relative z-20 pointer-events-none select-none">
      
      {/* تأثير التلاشي في الجوانب (Fade Mask) */}
      <div className="absolute top-0 left-0 w-32 h-full bg-gradient-to-r from-[#0A0A0A] to-transparent z-30" />
      <div className="absolute top-0 right-0 w-32 h-full bg-gradient-to-l from-[#0A0A0A] to-transparent z-30" />

      {/* --- الصف الأول: القنوات (يتحرك لليسار) --- */}
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
              className={`relative w-36 h-20 flex-shrink-0 rounded-xl overflow-hidden border border-white/5 shadow-lg group`}
            >
              <div className={`absolute inset-0 bg-gradient-to-br ${channel.gradient} opacity-60`} />
              <div className="absolute inset-0 backdrop-blur-sm bg-black/20" />
              <div className="relative z-10 w-full h-full flex items-center justify-center">
                <span className="text-white font-bold text-lg tracking-wider drop-shadow-md">{channel.name}</span>
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
              className="relative w-32 h-48 flex-shrink-0 rounded-xl overflow-hidden border border-white/10 bg-[#111]"
            >
              {/* محاكاة شكل البوستر */}
              <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-90 z-10" />
              
              <div className="absolute top-2 right-2 z-20">
                <div className="w-6 h-6 rounded-full bg-white/10 flex items-center justify-center backdrop-blur-md">
                   <Film className="w-3 h-3 text-white/70" />
                </div>
              </div>

              <div className="absolute inset-0 flex items-center justify-center bg-white/5">
                 <Play className="w-8 h-8 text-white/20 fill-white/10" />
              </div>

              <div className="absolute bottom-0 w-full p-3 z-20 text-center">
                <span className="text-gray-300 text-xs font-medium line-clamp-2 leading-tight">
                  {movie}
                </span>
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  );
}
