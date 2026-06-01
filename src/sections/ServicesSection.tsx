import FadeIn from '../components/FadeIn';

const FEATURES = [
  {
    num: '01',
    name: 'Language Learning',
    desc: 'Practice daily with native speakers through guided conversations, vocabulary challenges, and real-world tasks designed to accelerate your fluency naturally.',
  },
  {
    num: '02',
    name: 'Real-time Chat',
    desc: 'Message friends instantly in any language. Our built-in translation layer lets you understand and reply clearly, no matter the language barrier.',
  },
  {
    num: '03',
    name: 'Friend Matching',
    desc: 'Get matched with people who share your language goals and interests. Every connection is meaningful — turning strangers into lifelong study partners.',
  },
  {
    num: '04',
    name: 'AI Translation',
    desc: 'Understand every conversation in real time with context-aware AI translation that preserves tone, humour, and cultural nuance naturally.',
  },
  {
    num: '05',
    name: 'Language Exchange',
    desc: 'Teach your native language while learning theirs. The most natural way to become fluent — by simply talking to a new friend every day.',
  },
];

export default function ServicesSection() {
  return (
    <section
      id="features"
      className="rounded-t-[40px] sm:rounded-t-[50px] md:rounded-t-[60px] px-5 sm:px-8 md:px-10 py-20 sm:py-24 md:py-32"
      style={{ background: '#FFFFFF' }}
    >
      <FadeIn delay={0} y={40}>
        <h2
          className="font-black uppercase text-center text-[#0C0C0C] mb-16 sm:mb-20 md:mb-28 leading-none tracking-tight"
          style={{ fontSize: 'clamp(3rem, 12vw, 160px)' }}
        >
          Features
        </h2>
      </FadeIn>

      <div className="max-w-5xl mx-auto">
        {FEATURES.map((feature, i) => (
          <FadeIn key={feature.num} delay={i * 0.1} y={30}>
            <div
              className="flex items-start gap-6 md:gap-10 py-8 sm:py-10 md:py-12"
              style={{
                borderTop: '1px solid rgba(12,12,12,0.15)',
                ...(i === FEATURES.length - 1 ? { borderBottom: '1px solid rgba(12,12,12,0.15)' } : {}),
              }}
            >
              <span
                className="font-black text-[#0C0C0C] leading-none flex-shrink-0"
                style={{ fontSize: 'clamp(3rem, 10vw, 140px)' }}
              >
                {feature.num}
              </span>
              <div className="flex flex-col gap-2 pt-2">
                <span
                  className="font-medium uppercase text-[#0C0C0C]"
                  style={{ fontSize: 'clamp(1rem, 2.2vw, 2.1rem)' }}
                >
                  {feature.name}
                </span>
                <p
                  className="font-light leading-relaxed text-[#0C0C0C] max-w-2xl"
                  style={{ fontSize: 'clamp(0.85rem, 1.6vw, 1.25rem)', opacity: 0.6 }}
                >
                  {feature.desc}
                </p>
              </div>
            </div>
          </FadeIn>
        ))}
      </div>
    </section>
  );
}
