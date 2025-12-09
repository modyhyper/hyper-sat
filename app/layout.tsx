import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils"; // تأكد أن لديك دالة cn في lib/utils، إذا لم تكن موجودة أخبرني

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Hyper TV | The World is Yours to Stream",
  description: "Experience the ultimate IPTV service with 4K quality and zero buffering.",
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
          "min-h-screen bg-background font-sans antialiased text-foreground selection:bg-primary/20",
          inter.className
        )}
      >
        {/* Noise Texture Overlay */}
        <div className="bg-noise" />
        
        <div className="relative flex min-h-screen flex-col">
          {children}
        </div>
      </body>
    </html>
  );
}