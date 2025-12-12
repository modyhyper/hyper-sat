"use client";

interface CosmicCardProps {
  children: React.ReactNode;
  className?: string;
}

export default function CosmicCard({ children, className = "" }: CosmicCardProps) {
  // Check if rounded-3xl is in className, otherwise default to rounded-2xl
  const hasRounded3xl = className.includes('rounded-3xl');
  const cardRadius = hasRounded3xl ? 'rounded-3xl' : 'rounded-2xl';
  const glowRadius = hasRounded3xl ? 'rounded-[26px]' : 'rounded-[18px]';
  const innerRadius = hasRounded3xl ? 'rounded-[29px]' : 'rounded-[19px]';
  
  // Remove rounded classes from className to avoid conflicts
  const cleanClassName = className.replace(/rounded-\w+/g, '').trim();

  return (
    <div className={`relative group z-0 w-full ${cleanClassName}`}>
      {/* Outer Glow Layer - Blurred gradient behind the card */}
      <div className={`absolute -inset-[2px] bg-gradient-to-r from-[#0066FF] via-[#FF3399] to-[#0066FF] ${glowRadius} blur-xl opacity-0 group-hover:opacity-70 transition-opacity duration-500 -z-10`} />

      {/* Main Card Container */}
      <div 
        className={`relative ${cardRadius} h-full overflow-hidden`}
        style={{
          backgroundColor: 'hsla(240, 15%, 9%, 1)',
          backgroundImage: `
            radial-gradient(at 88% 40%, hsla(240, 15%, 9%, 1) 0px, transparent 85%), 
            radial-gradient(at 49% 30%, hsla(240, 15%, 9%, 1) 0px, transparent 85%), 
            radial-gradient(at 14% 26%, hsla(240, 15%, 9%, 1) 0px, transparent 85%), 
            radial-gradient(at 0% 64%, rgba(0, 102, 255, 0.6) 0px, transparent 85%), 
            radial-gradient(at 41% 94%, rgba(255, 51, 153, 0.4) 0px, transparent 85%), 
            radial-gradient(at 100% 99%, rgba(255, 51, 153, 0.6) 0px, transparent 85%)
          `,
          boxShadow: '0px -16px 24px 0px rgba(255, 255, 255, 0.05) inset'
        }}
      >
        {/* Rotating Border */}
        <div className={`absolute top-1/2 left-1/2 w-[150%] h-[150%] -translate-x-1/2 -translate-y-1/2 pointer-events-none z-0 overflow-hidden ${cardRadius}`}>
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[100%] h-[50%] bg-gradient-to-r from-transparent via-[#0066FF] to-transparent animate-[spin_6s_linear_infinite] opacity-70 blur-xl" />
        </div>
        
        {/* Inner Black Overlay */}
        <div className={`absolute inset-[1px] bg-[#0A0A0A]/95 ${innerRadius} z-0 backdrop-blur-xl`} />

        {/* Children Content */}
        <div className="relative z-10 h-full">
          {children}
        </div>
      </div>
    </div>
  );
}

