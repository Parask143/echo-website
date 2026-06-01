import React from 'react';
import FadeIn from '../components/FadeIn';
import ContactButton from '../components/ContactButton';

const FLOATING_LANGS: Array<{
  flag: string;
  name: string;
  top?: string;
  left?: string;
  right?: string;
  bottom?: string;
}> = [
  { flag: '🇬🇧', name: 'English',  top: '14%',  left: '5%'  },
  { flag: '🇯🇵', name: '日本語',   top: '20%',  right: '6%' },
  { flag: '🇪🇸', name: 'Español',  bottom: '34%', left: '3%' },
  { flag: '🇨🇳', name: '中文',     bottom: '30%', right: '4%' },
  { flag: '🇫🇷', name: 'Français', top: '50%',  left: '2%'  },
  { flag: '🇮🇳', name: 'हिन्दी',  top: '54%',  right: '3%' },
];

export default function HeroSection() {
  return (
    <section
      className="h-screen flex flex-col"
      style={{ overflowX: 'clip', background: '#0C0C0C' }}
    >
      {/* Navbar */}
      <FadeIn delay={0} y={-20} as="nav">
        <nav className="flex justify-between items-center px-6 md:px-10 pt-6 md:pt-8">
          <a href="#about" className="text-[#D7E2EA] font-medium uppercase tracking-wider text-sm md:text-lg lg:text-[1.4rem] hover:opacity-70 transition-opacity duration-200">
            About
          </a>
          <a href="#features" className="text-[#D7E2EA] font-medium uppercase tracking-wider text-sm md:text-lg lg:text-[1.4rem] hover:opacity-70 transition-opacity duration-200">
            Features
          </a>
          <a href="#how-it-works" className="text-[#D7E2EA] font-medium uppercase tracking-wider text-sm md:text-lg lg:text-[1.4rem] hover:opacity-70 transition-opacity duration-200">
            How It Works
          </a>
          <a href="#about" className="text-[#D7E2EA] font-medium uppercase tracking-wider text-sm md:text-lg lg:text-[1.4rem] hover:opacity-70 transition-opacity duration-200">
            Download
          </a>
        </nav>
      </FadeIn>

      {/* Hero Heading */}
      <div className="overflow-hidden flex-shrink-0">
        <FadeIn delay={0.15} y={40}>
          <h1 className="hero-heading font-black uppercase tracking-tight leading-none whitespace-nowrap w-full text-center text-[18vw] sm:text-[18vw] md:text-[19vw] lg:text-[20vw] mt-6 sm:mt-4 md:-mt-3">
            Ecomax
          </h1>
        </FadeIn>
      </div>

      {/* Globe + floating language badges */}
      <div className="flex-1 relative">
        {/* Globe visual */}
        <FadeIn delay={0.6} y={30} className="absolute left-1/2 -translate-x-1/2 z-10 top-1/2 -translate-y-1/2 sm:top-auto sm:translate-y-0 sm:bottom-12">
          <div
            style={{
              width: 'clamp(160px, 20vw, 260px)',
              height: 'clamp(160px, 20vw, 260px)',
              borderRadius: '50%',
              background: 'radial-gradient(circle at 38% 35%, #1a5c5c 0%, #0d2e2e 60%, #061818 100%)',
              border: '2px solid rgba(64,196,196,0.35)',
              boxShadow: '0 0 70px rgba(64,196,196,0.18), inset 0 0 40px rgba(64,196,196,0.05)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontSize: 'clamp(60px, 9vw, 110px)',
            }}
          >
            🌍
          </div>
        </FadeIn>

        {/* Floating language badges */}
        {FLOATING_LANGS.map((lang, i) => (
          <div
            key={lang.name}
            className="absolute z-20 hidden md:block"
            style={{ top: lang.top, left: lang.left, right: lang.right, bottom: lang.bottom } as React.CSSProperties}
          >
            <FadeIn delay={0.5 + i * 0.1} y={15}>
              <div
                style={{
                  background: 'rgba(255,255,255,0.05)',
                  backdropFilter: 'blur(10px)',
                  border: '1px solid rgba(64,196,196,0.22)',
                  borderRadius: '999px',
                  padding: '8px 20px',
                  color: '#D7E2EA',
                  fontFamily: 'inherit',
                  fontWeight: 500,
                  fontSize: 'clamp(0.8rem, 1.1vw, 1rem)',
                  whiteSpace: 'nowrap',
                  display: 'flex',
                  alignItems: 'center',
                  gap: 8,
                }}
              >
                <span>{lang.flag}</span>
                <span>{lang.name}</span>
              </div>
            </FadeIn>
          </div>
        ))}

        {/* Bottom bar */}
        <div className="absolute bottom-0 left-0 right-0 flex justify-between items-end pb-7 sm:pb-8 md:pb-10 px-6 md:px-10">
          <FadeIn delay={0.35} y={20}>
            <p
              className="text-[#D7E2EA] font-light uppercase tracking-wide leading-snug max-w-[160px] sm:max-w-[220px] md:max-w-[280px]"
              style={{ fontSize: 'clamp(0.75rem, 1.4vw, 1.5rem)' }}
            >
              Learn languages, make friends, connect the world
            </p>
          </FadeIn>

          <FadeIn delay={0.5} y={20}>
            <ContactButton />
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
