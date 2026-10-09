/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html'],
  theme: {
    extend: {
      colors: {
        'surface-bright': '#fbf9f5', 'on-primary-fixed': '#131b2e', 'on-primary-container': '#7c839b',
        'secondary-container': '#fe932c', primary: '#000000', 'on-primary': '#ffffff', outline: '#76777d',
        'surface-container-high': '#eae8e4', 'primary-fixed': '#dae2fd', 'surface-container-lowest': '#ffffff',
        'on-surface': '#1b1c1a', 'on-surface-variant': '#45464d', secondary: '#904d00',
        'surface-container-low': '#f5f3ef', 'secondary-fixed-dim': '#ffb77d', 'surface-variant': '#e4e2de',
        'surface-tint': '#565e74', 'on-secondary-fixed': '#2f1500', 'secondary-fixed': '#ffdcc3',
        'primary-container': '#131b2e', background: '#fbf9f5', 'surface-container': '#efeeea', surface: '#fbf9f5',
        'on-secondary-container': '#663500', error: '#ba1a1a'
      },
      spacing: {
        'gutter-lg': '2rem', 'space-md': '1rem', 'space-2xl': '3rem', 'space-xl': '2rem',
        'space-xs': '.5rem', 'space-lg': '1.5rem', 'space-3xl': 'clamp(3.5rem, 7vw, 6rem)',
        'space-sm': '.75rem', 'space-2xs': '.25rem'
      },
      fontFamily: { sans: ['Poppins', 'system-ui', 'sans-serif'] },
      fontSize: {
        'label-lg': ['.875rem', { lineHeight: '1.25rem', letterSpacing: '.01em', fontWeight: '600' }],
        'body-sm': ['.875rem', { lineHeight: '1.375rem' }],
        'headline-sm': ['1.25rem', { lineHeight: '1.75rem', fontWeight: '600' }],
        'title-md': ['1.125rem', { lineHeight: '1.625rem', fontWeight: '600' }],
        'label-caps': ['.6875rem', { lineHeight: '.875rem', letterSpacing: '.08em', fontWeight: '700' }],
        'headline-lg': ['clamp(1.8rem,4vw,3rem)', { lineHeight: '1.18', fontWeight: '700' }],
        'body-md': ['clamp(.95rem,1.5vw,1.05rem)', { lineHeight: '1.65' }],
        'headline-md': ['1.5rem', { lineHeight: '2rem', fontWeight: '600' }],
        'body-lg': ['clamp(1rem,1.7vw,1.125rem)', { lineHeight: '1.75' }],
        'label-md': ['.75rem', { lineHeight: '1rem', letterSpacing: '.025em', fontWeight: '600' }],
        'headline-display': ['clamp(2.3rem,6vw,4.5rem)', { lineHeight: '1.08', letterSpacing: '-.03em', fontWeight: '700' }],
        'title-sm': ['1rem', { lineHeight: '1.5rem', fontWeight: '600' }]
      }
    }
  },
  plugins: []
};
