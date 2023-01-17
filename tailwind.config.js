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
        keyframes: {
          "fade-in": {
            "0%": { opacity: 0 },
            "100%": { opacity: 1 },
          },
          "fade-out": {
            "0%": { opacity: 1 },
            "100%": { opacity: 0 },
          },
        },
        animation: {
          "fade-in": "fade-in 0.3s ease-out",
          "fade-out": "fade-out 0.3s ease-out",
          "fade-in-short": "fade-in 0.15s ease-out",
          "fade-out-short": "fade-out 0.15s ease-out",
          "fade-in-long": "fade-in 0.6s ease-out",
          "fade-out-long": "fade-out 0.6s ease-out",
        },
        boxShadow: {
          "float": "var(--shadow-float)",
          sm: "var(--shadow-low)",
          md: "var(--shadow-medium)",
          lg: "var(--shadow-high)",
        },
      },
    },
    plugins: [
      require("tailwindcss-radix")(),
    ],
  };
  