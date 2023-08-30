import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './app/**/*.{ts,tsx}',
    './src/**/*.{ts,tsx}',
	],
  theme: {
    screens: {
      sx: { min: '350px', max: '480px' },
      sm: { min: '481px', max: '640px' },
      md: { min: '641px', max: '768px' },
      lg: { min: '769px', max: '1024px' },
      xl: { min: '1025px', max: '1399px' },
      '2xl': { min: '1400px', max: '1920px' },
    },
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
            backgroundImage: {
              'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
              'gradient-conic':
                'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
            },
          },
  },
  plugins: [],
}
export default config
