import type { Config } from 'tailwindcss';

/**
 * Дизайн-система «Кварты».
 *
 * Осознанный отказ от «AI-дефолтов»: никаких градиентных заголовков,
 * glassmorphism, теней-облаков и одинаковых скруглений на всём подряд.
 * В основе — editorial-сетка 12 колонок, типографическая иерархия (Lora как
 * голос бренда, Inter как технический текст) и закрытая палитра.
 */
const config: Config = {
  content: [
    './app/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './lib/**/*.{ts,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        coffee: '#6B4226',
        cream: '#F5F0E8',
        terracotta: '#C45A3C',
        dark: '#2C1810',
        muted: '#8B7355',
        // Производные — только для линий и подложек.
        line: {
          DEFAULT: 'rgba(44, 24, 16, 0.14)',
          strong: 'rgba(44, 24, 16, 0.32)',
        },
        paper: {
          DEFAULT: '#FAF7F2',
          raised: '#EFE8DC',
        },
      },
      fontFamily: {
        serif: ['var(--font-lora)', 'Georgia', 'serif'],
        sans: ['var(--font-inter)', 'Helvetica Neue', 'Arial', 'sans-serif'],
      },
      fontSize: {
        // Модульная шкала ~1.25. Единственный источник размеров текста.
        'display-xs': ['1.75rem', { lineHeight: '1.15', letterSpacing: '-0.02em' }],
        'display-sm': ['2.5rem', { lineHeight: '1.05', letterSpacing: '-0.025em' }],
        'display-md': ['3.5rem', { lineHeight: '1.0', letterSpacing: '-0.03em' }],
        'display-lg': ['clamp(3.5rem, 8vw, 7rem)', { lineHeight: '0.92', letterSpacing: '-0.04em' }],
        eyebrow: ['0.6875rem', { lineHeight: '1', letterSpacing: '0.16em' }],
      },
      spacing: {
        unit: '0.25rem',
        section: 'clamp(5rem, 12vw, 11rem)',
        gutter: 'clamp(1.25rem, 4vw, 3.5rem)',
      },
      maxWidth: {
        copy: '46ch',
        content: '87.5rem',
      },
      borderRadius: {
        // Фирменный радиус один — и он маленький.
        brand: '2px',
      },
      boxShadow: {
        // Тени почти невидимые: работают как «бумага на столе».
        paper: '0 1px 0 0 rgba(44, 24, 16, 0.10)',
        raise: '0 18px 40px -32px rgba(44, 24, 16, 0.55)',
      },
      backgroundImage: {
        grain:
          "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='140' height='140'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='140' height='140' filter='url(%23n)' opacity='0.55'/%3E%3C/svg%3E\")",
      },
      transitionTimingFunction: {
        editorial: 'cubic-bezier(0.22, 0.61, 0.36, 1)',
      },
      keyframes: {
        'reveal-up': {
          from: { opacity: '0', transform: 'translateY(14px)' },
          to: { opacity: '1', transform: 'translateY(0)' },
        },
        marquee: {
          from: { transform: 'translateX(0)' },
          to: { transform: 'translateX(-50%)' },
        },
      },
      animation: {
        'reveal-up': 'reveal-up 0.7s cubic-bezier(0.22, 0.61, 0.36, 1) both',
        marquee: 'marquee 32s linear infinite',
      },
    },
  },
  plugins: [],
};

export default config;
