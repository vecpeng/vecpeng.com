/** @type {import("tailwindcss").Config} */
module.exports = {
    content: [
      "./pages/**/*.{js,ts,jsx,tsx}",
      "./components/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
      screens: {
        "sm": `480px`,
        "md": `768px`,
        "lg": `1024px`,
      },
      extend: {
        boxShadow: {
          "float": "var(--shadow-float)",
          sm: "var(--shadow-low)",
          md: "var(--shadow-medium)",
          lg: "var(--shadow-high)",
        },
      },
    },
    plugins: [
    ],
  };
  