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
        reactnative: '#34A8E9',
        bluetooth: '#0A84FF',
        embedded: '#007F5F',
        networking: '#007ACC',
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
