module.exports = {
    content: [
      "./src/**/*.{html,js}",
    ],
    darkMode: "class",
    theme: {
      extend: {
        screens: {
          "other": {'min': '340px', 'max': '1240px'},
        },
        colors: {
          darkBg: "#374151",
        }
      },
    },
    plugins: [],
  }