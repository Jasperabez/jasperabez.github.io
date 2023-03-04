module.exports = {
  content: ["./layouts/**/*.html", "./content/**/*.md"],
  theme: {
    extend: {
      colors: {
        embedded: '#007F5F',
        iot: '#00BFFF',
        mqtt: '#FFA500',
        lightgraytext: '#CCCCCC',
        darkgraytext: "#333333"
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
