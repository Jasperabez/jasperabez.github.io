module.exports = {
  content: ["./layouts/**/*.html", "./content/**/*.md"],
  theme: {
    extend: {
      colors: {
        python: '#4B8BBE',
        javascript: '#F7DF1E',
        golang: '#00ADD8',
        aws: '#FF9900',
        redis: '#DC382D',
        flask: '#1B6AC6',
        react: '#61DAFB',
        angular: '#DD0031',
        reactnative: '#34A8E9',
        bluetooth: '#0A84FF',
        gans: '#8a3ffc',
        embedded: '#007F5F',
        networking: '#007ACC',
        deeplearning: '#00796b',
        computervision: '#FFA500',
        ai: '#ff8c00',
        iot: '#00BFFF',
        vr: '#FF4081',
        ar: '#00FF00',
        websocket: '#1C86EE',
        mqtt: '#FFA500',
        windowsapi: '#0078D7',
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
