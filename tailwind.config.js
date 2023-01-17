/** @type {import("tailwindcss").Config} */
module.exports = {
    content: [
      "./pages/**/*.{js,ts,jsx,tsx}",
      "./components/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
      screens: {
        "xs": "480px",
        "sm": "560px",
        "md": "768px",
        "lg": "1024px",
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
          "music-play-1": {
            "0%": {
              transform: "scale(0.25)",
              opacity: 1,
              filter: "blur(0px)",
            },
            "100%": {
              transform: "scale(4) translateY(-150%) translateX(-50%) rotate(90deg)", 
              opacity: 0,
              filter: "blur(0.75px)",
            },
          },
          "music-play-2": {
            "0%": {
              transform: "scale(0.25)",
              opacity: 1,
              filter: "blur(0px)",
            },
            "100%": {
              transform: "scale(4) translateY(-100%) translateX(-200%) rotate(-90deg)", 
              opacity: 0,
              filter: "blur(0.75px)",
            },
          },
          "music-play-3": {
            "0%": {
              transform: "scale(0.25)",
              opacity: 1,
              filter: "blur(0px)",
            },
            "100%": {
              transform: "scale(4) translateY(-150%) translateX(50%) rotate(45deg)", 
              opacity: 0,
              filter: "blur(0.75px)",
            },
          },
          "music-play-4": {
            "0%": {
              transform: "scale(0.25)",
              opacity: 1,
              filter: "blur(0px)",
            },
            "100%": {
              transform: "scale(4) translateY(-100%) translateX(200%) rotate(-45deg)", 
              opacity: 0,
              filter: "blur(0.75px)",
            },
          },
          "music-play-5": {
            "0%": {
              transform: "scale(0.25)",
              opacity: 1,
              filter: "blur(0px)",
            },
            "100%": {
              transform: "scale(4) translateY(-150%) translateX(-100%) rotate(-135deg)", 
              opacity: 0,
              filter: "blur(0.75px)",
            },
          },
          "music-play-6": {
            "0%": {
              transform: "scale(0.25)",
              opacity: 1,
              filter: "blur(0px)",
            },
            "100%": {
              transform: "scale(4) translateY(-150%) translateX(100%) rotate(135deg)", 
              opacity: 0,
              filter: "blur(0.75px)",
            },
          },
        },
        animation: {
          "fade-in": "fade-in 0.3s ease-out",
          "fade-out": "fade-out 0.3s ease-out",
          "fade-in-short": "fade-in 0.15s ease-out",
          "fade-out-short": "fade-out 0.15s ease-out",
          "fade-in-long": "fade-in 0.6s ease-out",
          "fade-out-long": "fade-out 0.6s ease-out",
          "music-play-1": "music-play-1 1.5s ease-out infinite",
          "music-play-2": "music-play-2 1.5s ease-out infinite",
          "music-play-3": "music-play-3 1.5s ease-out infinite",
          "music-play-4": "music-play-4 1.5s ease-out infinite",
          "music-play-5": "music-play-5 1.5s ease-out infinite",
          "music-play-6": "music-play-6 1.5s ease-out infinite",
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
      require("tailwindcss-animation-delay"),
    ],
  };
  