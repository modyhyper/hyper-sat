"use client";

import Link from "next/link";

interface ShinyButtonProps {
  text: string;
  href?: string;
  className?: string;
}

export default function ShinyButton({ text, href, className = "" }: ShinyButtonProps) {
  const baseClasses = `shiny-cta inline-flex items-center justify-center gap-2 ${className}`;

  if (href) {
    const isExternal = href.startsWith("http");

    if (isExternal) {
      return (
        <a href={href} target="_blank" rel="noopener noreferrer" className={baseClasses}>
          <span>{text}</span>
        </a>
      );
    }

    return (
      <Link href={href} className={baseClasses}>
        <span>{text}</span>
      </Link>
    );
  }

  return (
    <button type="button" className={baseClasses}>
      <span>{text}</span>
    </button>
  );
}