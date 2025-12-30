import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        gold: {
          400: '#ecc94b',
          500: '#d4af37', // The Ved Vet Premium Gold
          600: '#b7950b',
        }
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'premium-gradient': 'linear-gradient(to right, #000000, #1a1a1a)',
      },
    },
  },
  plugins: [],
};
export default config;
