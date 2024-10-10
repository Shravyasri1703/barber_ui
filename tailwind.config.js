/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      keyframes: {
        moveRight: {
          '0%': { transform: 'translateX(-100%)' }, // Start off-screen to the left
          '100%': { transform: 'translateX(100%)' }, // End off-screen to the right
        },
      },
      animation: {
        'move-right': 'moveRight 15s linear infinite', // Adjust duration as needed
      },
    },
  },
  plugins: [],
};
