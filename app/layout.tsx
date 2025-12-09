import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils"; // تأكد أن لديك دالة cn في lib/utils، إذا لم تكن موجودة أخبرني

const inter = Inter({ subsets: ["latin"] });

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
          {/* 3D Scene */}
          <iframe
            src="https://my.spline.design/particlesmoment-kW3xyVny6weIhXJ3vbs2M2bB"
            className="w-full h-full opacity-30 mix-blend-screen pointer-events-none"
            frameBorder="0"
            loading="lazy"
          />
          {/* Dark Overlay for Text Readability */}
          <div className="absolute inset-0 bg-[#0A0A0A]/70" />
          {/* Noise Texture */}
          <div className="absolute inset-0 bg-noise opacity-[0.03] pointer-events-none" />
        </div>
        
        <div className="relative z-10 flex min-h-screen flex-col">
          {children}
        </div>
      </body>
    </html>
  );
}