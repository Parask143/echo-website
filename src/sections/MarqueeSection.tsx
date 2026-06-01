import { useEffect, useRef } from 'react';

interface LangCard {
  flag: string;
  name: string;
  label: string;
  speakers: string;
}

const ROW1: LangCard[] = [
  { flag: '🇬🇧', name: 'English',    label: 'English',    speakers: '1.5B speakers' },
  { flag: '🇪🇸', name: 'Español',    label: 'Spanish',    speakers: '500M speakers' },
  { flag: '🇨🇳', name: '中文',       label: 'Chinese',    speakers: '1.1B speakers' },
  { flag: '🇸🇦', name: 'العربية',   label: 'Arabic',     speakers: '370M speakers' },
  { flag: '🇫🇷', name: 'Français',   label: 'French',     speakers: '300M speakers' },
  { flag: '🇯🇵', name: '日本語',     label: 'Japanese',   speakers: '130M speakers' },
  { flag: '🇵🇹', name: 'Português',  label: 'Portuguese', speakers: '260M speakers' },
  { flag: '🇮🇳', name: 'हिन्दी',   label: 'Hindi',      speakers: '600M speakers' },
  { flag: '🇰🇷', name: '한국어',     label: 'Korean',     speakers: '80M speakers'  },
  { flag: '🇩🇪', name: 'Deutsch',    label: 'German',     speakers: '130M speakers' },
  { flag: '🇮🇹', name: 'Italiano',   label: 'Italian',    speakers: '65M speakers'  },
];

const ROW2: LangCard[] = [
  { flag: '🇷🇺', name: 'Русский',    label: 'Russian',    speakers: '260M speakers' },
  { flag: '🇹🇷', name: 'Türkçe',     label: 'Turkish',    speakers: '80M speakers'  },
  { flag: '🇳🇱', name: 'Nederlands', label: 'Dutch',      speakers: '30M speakers'  },
  { flag: '🇹🇭', name: 'ภาษาไทย',   label: 'Thai',       speakers: '60M speakers'  },
  { flag: '🇻🇳', name: 'Tiếng Việt', label: 'Vietnamese', speakers: '95M speakers'  },
  { flag: '🇮🇩', name: 'Bahasa',     label: 'Indonesian', speakers: '200M speakers' },
  { flag: '🇵🇱', name: 'Polski',     label: 'Polish',     speakers: '45M speakers'  },
  { flag: '🇸🇪', name: 'Svenska',    label: 'Swedish',    speakers: '10M speakers'  },
  { flag: '🇬🇷', name: 'Ελληνικά',  label: 'Greek',      speakers: '13M speakers'  },
  { flag: '🇺🇦', name: 'Українська', label: 'Ukrainian',  speakers: '45M speakers'  },
];

const triple = <T,>(arr: T[]): T[] => [...arr, ...arr, ...arr];

function LangCardItem({ card }: { card: LangCard }) {
  return (
    <div
      style={{
        width: 300,
        height: 140,
        flexShrink: 0,
        borderRadius: 24,
        background: 'linear-gradient(135deg, #0f2635 0%, #081a20 100%)',
        border: '1px solid rgba(64, 196, 196, 0.18)',
        padding: '18px 24px',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        gap: 8,
      }}
    >
      <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
        <span style={{ fontSize: 36 }}>{card.flag}</span>
        <span
          style={{
            color: '#D7E2EA',
            fontFamily: 'inherit',
            fontWeight: 700,
            fontSize: 22,
            lineHeight: 1.1,
          }}
        >
          {card.name}
        </span>
      </div>
      <div style={{ display: 'flex', flexDirection: 'column', paddingLeft: 4 }}>
        <span style={{ color: 'rgba(215,226,234,0.5)', fontSize: 13, fontFamily: 'inherit', fontWeight: 400 }}>
          {card.label}
        </span>
        <span style={{ color: 'rgba(64,196,196,0.7)', fontSize: 12, fontFamily: 'inherit', fontWeight: 300 }}>
          {card.speakers}
        </span>
      </div>
    </div>
  );
}

export default function MarqueeSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const row1Ref = useRef<HTMLDivElement>(null);
  const row2Ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current) return;
      const rect = sectionRef.current.getBoundingClientRect();
      const sectionTop = window.scrollY + rect.top;
      const offset = (window.scrollY - sectionTop + window.innerHeight) * 0.3;
      if (row1Ref.current) {
        row1Ref.current.style.transform = `translateX(${offset - 200}px)`;
      }
      if (row2Ref.current) {
        row2Ref.current.style.transform = `translateX(${-(offset - 200)}px)`;
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section
      ref={sectionRef}
      className="pt-24 sm:pt-32 md:pt-40 pb-10 overflow-hidden"
      style={{ background: '#0C0C0C' }}
    >
      {/* Row 1 */}
      <div
        ref={row1Ref}
        className="flex gap-3 mb-3"
        style={{ willChange: 'transform' }}
      >
        {triple(ROW1).map((card, i) => (
          <LangCardItem key={i} card={card} />
        ))}
      </div>

      {/* Row 2 */}
      <div
        ref={row2Ref}
        className="flex gap-3"
        style={{ willChange: 'transform' }}
      >
        {triple(ROW2).map((card, i) => (
          <LangCardItem key={i} card={card} />
        ))}
      </div>
    </section>
  );
}
