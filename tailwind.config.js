/** @type {import('tailwindcss').Config} */
const {students} = require('./app/utilities/students')
const safeList = students.reduce( (acc,student,i) => {
  acc.push(`animate-[appear_1s_${(i + 1) * 0.2}s_both]`)
  acc.push(`animate-[turn_1s_${(i + 1) * 0.2}s_both]`)
  return acc
},[])

module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  safelist: safeList,
  theme: {
    extend: {
      colors: {
        'dark-red': '#B0361E',
        'gold': '#ECB612',
        'modal-backdrop': "#00000088",
        "card-background": "#222327",
        "8kyu": "#edf0ee",
        "7kyu": "#edf0ee",
        "6kyu": "#ECB612",
        "5kyu": "#ECB612",
        "4kyu": "#0227f5",
        "3kyu": "#0227f5",
      },
      boxShadow: {
        'image-shadow': '0 0 30px #B0361E',
        'gold': '0 0 30px #fcd303',
        'silver': '0 0 30px #faf9f2',
        'bronze': '0 0 30px #9c4803'
      },
      keyframes: {
        appear: {
          '0%': { opacity: 0 },
          '100%': { opacity: 1 }
        },
        turn: {
          '0%': { transform: 'translate(0)' },
          '30%': { transform: 'rotate(10deg)' },
          '100%': { transform: 'rotate(-360deg)' }
        },
        wiggle: {
          '0%, 100%': { transform: 'rotate(-7deg)' },
          '50%': { transform: 'rotate(7deg)' },
        }
      },
      animation: {
        turn: 'turn 1.3s forwards;',
        wiggle: 'wiggle 1s ease-in-out infinite',
      }
    },
  },
  plugins: [],
}
