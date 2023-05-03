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
          '0%, 100%': { transform: 'rotate(-3deg)' },
          '50%': { transform: 'rotate(3deg)' },
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
