/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './contexts/**/*.{js,ts,jsx,tsx,mdx}',
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    "./src/**/*.{js,jsx,ts,tsx}",
    "./node_modules/react-tailwindcss-datepicker/dist/index.esm.js",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      keyframes: {
        blurIn: {
          '0%': { filter: 'blur(12px)' },
          '100%': { filter: 'blur(0)' }
        },
        shrink: {
          '0%': { transform: 'scale(1)' },
          '50%': { transform: 'scale(0.9)' },
          '100%': { transform: 'scale(1)' }
        },
        shrinkBlurIn: {
          '0%': { filter: 'blur(12px)', transform: 'scale(0.7)' },
          '100%': { filter: 'blur(0)', transform: 'scale(1)' }
        }        
      },
      animation: {
        blurIn: 'blurIn 1s forwards',
        blurOut: 'blurIn 1s backwards',
        shrink: 'shrink 0.5s forwards',
        shrinkBlurIn: 'shrinkBlurIn 1s forwards'
      },
      duration: {
        '1': '1s',
        '2': '2s',
        '3': '3s',
        '4': '4s',
        // ... add other durations as required
      },
      height: {
        'screen-real': 'var(--vh)'
      }
    },
  },
  variants: {},
  plugins: [require("@tailwindcss/typography"), require("daisyui")],
  daisyui: {
    themes: ["light", "dark", "lemonade"],
    darkTheme: "dark",
    base: true, // applies background color and foreground color for root element by default
    styled: true, // include daisyUI colors and design decisions for all components
    utils: true, // adds responsive and modifier utility classes
    rtl: false, // rotate style direction from left-to-right to right-to-left. You also need to add dir="rtl" to your html tag and install `tailwindcss-flip` plugin for Tailwind CSS.
    prefix: "", // prefix for daisyUI classnames (components, modifiers and responsive class names. Not colors)
    logs: true, // Shows info about daisyUI version and used config in the console when building your CSS
  },
}
