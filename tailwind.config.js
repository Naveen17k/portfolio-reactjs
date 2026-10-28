module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        ink: { DEFAULT: "#0F1B2D", soft: "#1A2940", line: "#2A3B55" },
        paper: "#EEF1F4",
        cobalt: { DEFAULT: "#2B4BEE", deep: "#1F38C2", soft: "#DCE2FD" },
        amber: { DEFAULT: "#F5B83D" },
        slate: { DEFAULT: "#5B6B80", light: "#9AA8BB" },
        line: "#D3DAE3",
      },
      fontFamily: {
        sans: ['"Archivo"', "system-ui", "sans-serif"],
      },
      maxWidth: {
        page: "76rem",
      },
    },
  },
  plugins: [],
};
