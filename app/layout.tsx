import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";


const inter = Inter({
  subsets: ["latin"],
  display: 'swap', // Prevents invisible text during font load
});

export const metadata: Metadata = {
  title: "Hyper TV | Next-Gen 4K Streaming & Entertainment Platform",
  description: "Experience the future of digital entertainment with Hyper TV. High-speed, buffer-free streaming solution for Smart TVs, Android, and iOS devices. Start your 24h trial today.",
  keywords: [
    "4K Streaming",
    "Digital TV",
    "OTT Platform",
    "Smart TV App",
    "High Speed Streaming",
    "Live Entertainment",
    "VOD Service",
    "Android TV Solution",
    "Buffer Free",
  ],
  openGraph: {
    title: "Hyper TV | Next-Gen 4K Streaming & Entertainment Platform",
    description: "Experience the future of digital entertainment with Hyper TV. High-speed, buffer-free streaming solution for Smart TVs, Android, and iOS devices. Start your 24h trial today.",
    type: "website",
  },
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/icon.png", type: "image/png", sizes: "32x32" },
      { url: "/icon-192.png", type: "image/png", sizes: "192x192" },
      { url: "/icon-512.png", type: "image/png", sizes: "512x512" },
    ],
    apple: [
      { url: "/apple-icon.png", sizes: "180x180", type: "image/png" },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark scroll-smooth" suppressHydrationWarning>
      <body
        className={cn(
          "min-h-screen font-sans antialiased text-foreground selection:bg-primary/20 overflow-x-hidden",
          inter.className
        )}
      >
        <div className="fixed inset-0 w-full h-full -z-10 bg-[#0A0A0A]">
          {/* Lightweight Mobile Background (replaces 3D on mobile) */}
          <div className="block md:hidden absolute inset-0 bg-gradient-to-br from-[#0A0A0A] via-[#0F0F1A] to-[#0A0A0A]">
            {/* Subtle gradient overlays for visual interest */}
            <div className="absolute top-0 left-0 w-full h-1/2 bg-gradient-to-b from-primary/10 to-transparent" />
            <div className="absolute bottom-0 right-0 w-full h-1/2 bg-gradient-to-t from-accent/10 to-transparent" />
          </div>

          {/* 3D Scene - Hidden on mobile for performance */}
          <iframe
            src="https://my.spline.design/particlesmoment-kW3xyVny6weIhXJ3vbs2M2bB"
            className="hidden md:block w-full h-full opacity-30 mix-blend-screen pointer-events-none"
            frameBorder="0"
            loading="lazy"
            title="3D Background Animation"
          />
          {/* Dark Overlay for Text Readability */}
          <div className="absolute inset-0 bg-[#0A0A0A]/70" />
          {/* Noise Texture */}
          <div className="absolute inset-0 bg-noise opacity-[0.03] pointer-events-none" />
        </div>


        <div className="relative z-10 flex min-h-screen flex-col">
          {children}
        </div>

        {/* Floating WhatsApp Button */}
        <a
          href="https://wa.me/201128498956"
          target="_blank"
          rel="noopener noreferrer"
          className="fixed bottom-6 right-6 z-50 flex items-center justify-center w-14 h-14 bg-[#25D366] rounded-full shadow-lg hover:scale-110 transition-transform duration-300 group"
          aria-label="Contact us on WhatsApp"
        >
          {/* Pulse Effect */}
          <span className="absolute inset-0 rounded-full bg-[#25D366] animate-ping opacity-75 group-hover:opacity-100 duration-1000" />

          {/* Icon */}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="32"
            height="32"
            viewBox="0 0 24 24"
            fill="none"
            stroke="white"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="relative z-10"
          >
            <path d="M7.9 20A9 9 0 1 0 4 16.1L2 22Z" />
          </svg>
        </a>

      </body>
    </html>
  );
}