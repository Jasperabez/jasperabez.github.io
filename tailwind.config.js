module.exports = {
  content: ["./layouts/**/*.html", "./content/**/*.md"],
  theme: {
    extend: {
      colors: {
        embedded: '#007F5F',
        iot: '#00BFFF',
        mqtt: '#FFA500',
        aws: '#FF9900',
        vr: '#FF4081',
        ar: '#00FF00',
        python: '#4B8BBE',
        windowsapi: '#0078D7',
        bluetooth: '#0A84FF',
        networking: '#007ACC',
        javascript: '#F7DF1E'
      },
      typography: {
        DEFAULT: {
          css: {
            "code::before": { content: "" },
            "code::after": { content: "" },
          },
        },
      },
    },
  },
  plugins: [
    require("@tailwindcss/typography"),
    require("@tailwindcss/line-clamp"),
  ],
  darkMode: "class",
};
