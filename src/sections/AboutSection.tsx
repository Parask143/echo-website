import React from 'react';
import FadeIn from '../components/FadeIn';
import AnimatedText from '../components/AnimatedText';
import ContactButton from '../components/ContactButton';

const DECORATIONS = [
  { emoji: '🗣️', className: 'absolute top-[4%] left-[1%] sm:left-[2%] md:left-[4%] pointer-events-none', delay: 0.1, x: -80 },
  { emoji: '💬', className: 'absolute bottom-[8%] left-[3%] sm:left-[6%] md:left-[10%] pointer-events-none', delay: 0.25, x: -80 },
  { emoji: '🤝', className: 'absolute top-[4%] right-[1%] sm:right-[2%] md:right-[4%] pointer-events-none', delay: 0.15, x: 80 },
  { emoji: '🌐', className: 'absolute bottom-[8%] right-[3%] sm:right-[6%] md:right-[10%] pointer-events-none', delay: 0.3, x: 80 },
];

export default function AboutSection() {
  return (
    <section
      id="about"
      className="relative min-h-screen flex items-center justify-center px-5 sm:px-8 md:px-10 py-20"
      style={{ background: '#0C0C0C', overflow: 'hidden' }}
    >
      {/* Decorative emoji */}
      {DECORATIONS.map((d) => (
        <FadeIn key={d.emoji} delay={d.delay} x={d.x} y={0} duration={0.9} className={d.className}>
          <span style={{ fontSize: 'clamp(72px, 11vw, 150px)', lineHeight: 1, display: 'block' }}>
            {d.emoji}
          </span>
        </FadeIn>
      ))}

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center text-center gap-10 sm:gap-14 md:gap-16">
        <FadeIn delay={0} y={40}>
          <h2
            className="hero-heading font-black uppercase leading-none tracking-tight"
            style={{ fontSize: 'clamp(3rem, 12vw, 160px)' }}
          >
            About
          </h2>
        </FadeIn>

        <div className="flex flex-col items-center gap-16 sm:gap-20 md:gap-24">
          <AnimatedText
            text="Ecomax connects language learners with native speakers from every corner of the world. Whether you want to master Spanish, explore Japanese, or practise your English — find a real conversation partner, build genuine friendships, and grow together, one message at a time."
            className="text-[#D7E2EA] font-medium text-center leading-relaxed max-w-[580px]"
            style={{ fontSize: 'clamp(1rem, 2vw, 1.35rem)' } as React.CSSProperties}
          />

          <ContactButton />
        </div>
      </div>
    </section>
  );
}
