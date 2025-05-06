export default {
    content: [
      "./index.html",
      "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
      extend: {
        colors: {
          neonPink: "#ff0099",
          neonBlue: "#00ffcc",
          neonGreen: "#33ff66",
          neonPurple: "#9900ff",
        },
        fontFamily: {
          neon: ['"Roboto"', 'sans-serif'],
        },
      },
    },
    plugins: [],
  }
  