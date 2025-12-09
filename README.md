# Hyper Sat - Premium IPTV Landing Page

A high-end, cinematic SaaS landing page for Hyper Sat, a premium IPTV service. Built with Next.js 14+, TypeScript, Tailwind CSS, and Framer Motion.

## Features

- 🎨 **Cinematic Design**: Fusion of Apple's clean typography and Netflix's immersive dark mode
- ✨ **Glassmorphism**: Modern glassmorphic UI elements with backdrop blur
- 🌈 **Glow Effects**: Dynamic colored shadows and gradients
- 📱 **Mobile First**: Fully responsive design optimized for all devices
- 🌍 **RTL/LTR Support**: Ready for Arabic and English localization
- 🎭 **Smooth Animations**: Framer Motion animations on scroll and hover
- 🎯 **Bento Grid Layout**: Modern grid-based feature showcase

## Tech Stack

- **Framework**: Next.js 14+ (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Animation**: Framer Motion
- **Icons**: Lucide React

## Getting Started

1. Install dependencies:
```bash
npm install
```

2. Run the development server:
```bash
npm run dev
```

3. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Brand Colors

- **Background**: #0A0A0A (Deep Void Black)
- **Primary Blue**: #0066FF
- **Accent Pink**: #FF3399
- **Text**: White (#FFFFFF) for headings, Slate-400 for secondary

## Project Structure

```
├── app/
│   ├── layout.tsx       # Root layout
│   ├── page.tsx         # Main landing page
│   └── globals.css      # Global styles
├── components/
│   ├── Navigation.tsx   # Glassmorphic navbar
│   ├── Hero.tsx         # Hero section with animations
│   ├── FeatureGrid.tsx  # Bento grid features
│   ├── Pricing.tsx      # Pricing section
│   ├── PricingCard.tsx  # Individual pricing card
│   └── Footer.tsx       # Footer with links
└── ...
```

## Build

```bash
npm run build
```

## License

MIT

