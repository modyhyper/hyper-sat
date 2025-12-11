"use client";

import { motion } from "framer-motion";
import { Star } from "lucide-react";
import CosmicCard from "./ui/CosmicCard";

const testimonials = [
  {
    name: "Ahmed S.",
    rating: 5,
    text: "Finally a service that doesn't buffer during matches. 4K quality is real!",
  },
  {
    name: "Sarah M.",
    rating: 5,
    text: "Support helped me set it up on my Samsung TV in 5 minutes. Highly recommend.",
  },
  {
    name: "Mike R.",
    rating: 5,
    text: "Best investment for my family. Kids love the cartoon channels.",
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

export default function Testimonials() {
  return (
    <section className="py-12 md:py-24 relative bg-transparent overflow-hidden">
      <div className="container px-4 relative z-10">
        
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
            Trusted by <span className="bg-gradient-to-r from-[#0066FF] to-[#FF3399] bg-clip-text text-transparent">Thousands</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg">
            Join our happy customers enjoying the best streaming experience.
          </p>
        </motion.div>

        {/* Grid */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 px-4"
        >
          {testimonials.map((review, idx) => (
            <motion.div
              key={idx}
              variants={item}
              className="w-full"
            >
              <CosmicCard className="h-full">
                <div className="p-8 h-full flex flex-col items-start transition-all duration-300 group-hover:bg-white/[0.02]">
                  
                  {/* Stars */}
                  <div className="flex gap-1 mb-4">
                    {[...Array(review.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 text-yellow-400 fill-yellow-400" />
                    ))}
                  </div>

                  {/* Review Text */}
                  <p className="text-gray-300 text-lg leading-relaxed mb-6 italic">
                    "{review.text}"
                  </p>

                  {/* Author line */}
                  <div className="mt-auto pt-4 w-full flex items-center justify-between border-t border-white/10">
                     <span className="text-white font-semibold tracking-wide">{review.name}</span>
                     <div className="text-xs text-gray-500 font-mono">VERIFIED</div>
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
