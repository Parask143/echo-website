import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import FadeIn from '../components/FadeIn';
import LiveProjectButton from '../components/LiveProjectButton';

const STEPS = [
  {
    num: '01',
    category: 'Get Started',
    name: 'Learn Your Way',
    col1img1: 'https://images.unsplash.com/photo-1546410531-bb4caa6b424d?auto=format&fit=crop&w=800&q=80',
    col1img2: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=800&q=80',
    col2img:  'https://images.unsplash.com/photo-1488190211105-8b0e65b80b4e?auto=format&fit=crop&w=800&q=80',
  },
  {
    num: '02',
    category: 'Core Feature',
    name: 'Chat in Any Language',
    col1img1: 'https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?auto=format&fit=crop&w=800&q=80',
    col1img2: 'https://images.unsplash.com/photo-1587560699334-cc4ff634909a?auto=format&fit=crop&w=800&q=80',
    col2img:  'https://images.unsplash.com/photo-1529156069898-49953e39b3ac?auto=format&fit=crop&w=800&q=80',
  },
  {
    num: '03',
    category: 'Community',
    name: 'Connect the World',
    col1img1: 'https://images.unsplash.com/photo-1528605248644-14dd04022da1?auto=format&fit=crop&w=800&q=80',
    col1img2: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=800&q=80',
    col2img:  'https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=800&q=80',
  },
];

const TOTAL = STEPS.length;

function StepCard({ step, index }: { step: typeof STEPS[0]; index: number }) {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start end', 'end start'],
  });
  const targetScale = 1 - (TOTAL - 1 - index) * 0.03;
  const scale = useTransform(scrollYProgress, [0, 1], [1, targetScale]);

  const borderRadius = 'clamp(40px, 5vw, 60px)';

  return (
    <div ref={containerRef} className="h-[85vh] flex items-start justify-center">
      <motion.div
        style={{
          scale,
          top: `${24 + index * 28}px`,
          position: 'sticky',
          borderRadius,
          background: '#0C0C0C',
          border: '2px solid #D7E2EA',
          width: '100%',
          willChange: 'transform',
        }}
        className="p-4 sm:p-6 md:p-8"
      >
        {/* Top row */}
        <div className="flex flex-wrap items-center justify-between gap-4 mb-6">
          <div className="flex items-center gap-4 md:gap-8">
            <span
              className="font-black text-[#D7E2EA] leading-none"
              style={{ fontSize: 'clamp(3rem, 10vw, 140px)' }}
            >
              {step.num}
            </span>
            <div className="flex flex-col gap-1">
              <span
                className="text-[#D7E2EA] font-light uppercase tracking-widest"
                style={{ fontSize: 'clamp(0.7rem, 1.2vw, 1rem)', opacity: 0.6 }}
              >
                {step.category}
              </span>
              <span
                className="text-[#D7E2EA] font-medium uppercase"
                style={{ fontSize: 'clamp(1rem, 2.2vw, 2rem)' }}
              >
                {step.name}
              </span>
            </div>
          </div>
          <LiveProjectButton />
        </div>

        {/* Image grid */}
        <div className="flex gap-3 sm:gap-4">
          {/* Left col 40% */}
          <div className="flex flex-col gap-3 sm:gap-4" style={{ flex: '0 0 40%' }}>
            <img
              src={step.col1img1}
              alt=""
              className="w-full object-cover"
              style={{ borderRadius, height: 'clamp(130px, 16vw, 230px)' }}
            />
            <img
              src={step.col1img2}
              alt=""
              className="w-full object-cover"
              style={{ borderRadius, height: 'clamp(160px, 22vw, 340px)' }}
            />
          </div>
          {/* Right col 60% */}
          <div style={{ flex: '1 1 60%' }}>
            <img
              src={step.col2img}
              alt=""
              className="w-full object-cover"
              style={{
                borderRadius,
                height: 'calc(clamp(130px, 16vw, 230px) + clamp(160px, 22vw, 340px) + 1rem)',
              }}
            />
          </div>
        </div>
      </motion.div>
    </div>
  );
}

export default function ProjectsSection() {
  return (
    <section
      id="how-it-works"
      className="rounded-t-[40px] sm:rounded-t-[50px] md:rounded-t-[60px] -mt-10 sm:-mt-12 md:-mt-14 z-10 relative px-5 sm:px-8 md:px-10 py-20 sm:py-24 md:py-32"
      style={{ background: '#0C0C0C' }}
    >
      <FadeIn delay={0} y={40}>
        <h2
          className="hero-heading font-black uppercase leading-none tracking-tight text-center mb-16 sm:mb-20 md:mb-28"
          style={{ fontSize: 'clamp(2.5rem, 10vw, 130px)' }}
        >
          How It Works
        </h2>
      </FadeIn>

      <div className="flex flex-col gap-0">
        {STEPS.map((step, i) => (
          <StepCard key={step.num} step={step} index={i} />
        ))}
      </div>
    </section>
  );
}
