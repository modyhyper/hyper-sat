"use client";

import { motion } from "framer-motion";
import { Twitter, Facebook, Instagram, Mail } from "lucide-react";
import Image from "next-image-export-optimizer";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    product: [
      { label: "Features", href: "#features" },
      { label: "Pricing", href: "#pricing" },
      { label: "FAQ", href: "#faq" },
    ],
    company: [
      { label: "About", href: "#about" },
      { label: "Reseller", href: "#reseller" },
    ],
    legal: [
      { label: "Privacy Policy", href: "/privacy" },
      { label: "Terms of Service", href: "/terms" },
      { label: "Refund Policy", href: "/refund" },
    ],
  };

  const socialLinks = [
    { icon: Twitter, href: "#", label: "Twitter" },
    { icon: Facebook, href: "#", label: "Facebook" },
    { icon: Instagram, href: "#", label: "Instagram" },
    { icon: Mail, href: "#", label: "Email" },
  ];

  return (
    <footer id="contact" className="border-t border-white/10 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          {/* Brand */}
          <div>
            <div className="mb-6">
              <Image
                src="/logo-trans.png"
                alt="Hyper Sat Logo"
                width={250}
                height={150}
                className="w-64 h-auto object-contain mb-4"
              />
            </div>
            <p className="text-slate-400 text-sm leading-relaxed">
              Premium streaming service for the modern viewer. Experience entertainment like never before.
            </p>
          </div>

          {/* Links */}
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h4 className="text-white font-semibold mb-4 capitalize">{category}</h4>
              <ul className="space-y-2">
                {links.map((link) => (
                  <li key={link.href}>
                    <a
                      href={link.href}
                      className={`text-sm transition-all duration-300 ${category === "legal"
                        ? "text-neutral-400 hover:text-white"
                        : "text-slate-400 hover:text-[#0066FF] hover:drop-shadow-[0_0_8px_rgba(0,102,255,0.8)]"
                        }`}
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Social & Copyright */}
        <div className="flex flex-col sm:flex-row items-center justify-between pt-8 border-t border-white/10">
          <div className="flex flex-col items-center sm:items-start mb-4 sm:mb-0">
            <p className="text-slate-400 text-sm mb-2">
              © {currentYear} Hyper Sat. All rights reserved.
            </p>
            {/* Legal Links */}
            <div className="flex items-center gap-4 text-xs text-slate-500">
              <a
                href="/privacy"
                className="hover:text-slate-400 transition-colors duration-300"
              >
                Privacy Policy
              </a>
              <span className="text-slate-600">•</span>
              <a
                href="/terms"
                className="hover:text-slate-400 transition-colors duration-300"
              >
                Terms of Service
              </a>
            </div>
          </div>
          <div className="flex items-center gap-4">
            {socialLinks.map((social) => {
              const Icon = social.icon;
              return (
                <motion.a
                  key={social.label}
                  href={social.href}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  className="w-10 h-10 rounded-lg backdrop-blur-md bg-white/5 border border-white/10 flex items-center justify-center text-slate-400 hover:text-[#0066FF] hover:border-[#0066FF]/50 transition-all duration-300 group/social"
                  aria-label={social.label}
                >
                  <Icon className="w-5 h-5 group-hover/social:drop-shadow-[0_0_8px_rgba(0,102,255,0.8)] transition-all duration-300" />
                </motion.a>
              );
            })}
          </div>
        </div>
      </div>
    </footer>
  );
}

