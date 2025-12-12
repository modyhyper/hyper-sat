"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import Image from "next-image-export-optimizer";
import ShinyButton from "./ShinyButton";

interface NavigationProps {
  locale?: "en" | "ar";
}

interface NavItem {
  label: string;
  href: string;
  special?: boolean;
}

export default function Navigation({ locale = "en" }: NavigationProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { label: "Home", href: "/" },
    { label: "Features", href: "#features" },
    { label: "Pricing", href: "#pricing" },
    { label: "About", href: "#about" },
    { label: "FAQ", href: "#faq" },
    { label: "Reseller", href: "#reseller", special: true },
    { label: "Contact", href: "#contact" },
  ];

  return (
    <motion.nav
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled
        ? "backdrop-blur-md bg-black/20 border-b border-white/10"
        : "bg-transparent"
        }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <motion.a
            href="/"
            whileHover={{ scale: 1.05, opacity: 0.9 }}
            whileTap={{ scale: 0.95 }}
            className="flex items-center space-x-2 rtl:space-x-reverse group"
          >
            <Image
              src="/logo-trans.png"
              alt="Hyper Sat Logo"
              width={150}
              height={50}
              className="h-12 w-auto object-contain transition-all duration-300 group-hover:drop-shadow-[0_0_10px_rgba(0,102,255,0.5)]"
              priority
            />
          </motion.a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8 rtl:space-x-reverse">
            {navItems.map((item) => (
              <motion.a
                key={item.href}
                href={item.href}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className={`transition-all duration-300 font-medium ${item.special
                  ? "text-amber-400 hover:text-amber-300 font-semibold hover:drop-shadow-[0_0_8px_rgba(251,191,36,0.8)]"
                  : "text-slate-400 hover:text-[#0066FF] hover:drop-shadow-[0_0_8px_rgba(0,102,255,0.8)]"
                  }`}
              >
                {item.label}
              </motion.a>
            ))}
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <ShinyButton text="Get Started" href="https://wa.me/201128498956" />
            </motion.div>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden text-white p-2"
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden backdrop-blur-md bg-black/30 border-t border-white/10"
          >
            <div className="px-4 py-6 space-y-4">
              {navItems.map((item) => (
                <motion.a
                  key={item.href}
                  href={item.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  whileTap={{ scale: 0.95 }}
                  className={`block transition-all duration-300 font-medium py-2 ${item.special
                    ? "text-amber-400 hover:text-amber-300 font-semibold hover:drop-shadow-[0_0_8px_rgba(251,191,36,0.8)]"
                    : "text-slate-400 hover:text-[#0066FF] hover:drop-shadow-[0_0_8px_rgba(0,102,255,0.8)]"
                    }`}
                >
                  {item.label}
                </motion.a>
              ))}
              <motion.div whileTap={{ scale: 0.95 }}>
                <ShinyButton text="Get Started" href="https://wa.me/201128498956" className="w-full" />
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}

