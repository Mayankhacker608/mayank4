module.exports = {
  content: ["./**/*.{html,js,ts,jsx,tsx}"], // cover all your templates
  theme: {
    extend: {
      keyframes: {
        typing: {
          "0%": { width: "0ch" },
          // TIP: set this to your text length (in characters)
          "100%": { width: "28ch" }
        },
        blink: {
          "50%": { borderColor: "transparent" }
        }
      },
      animation: {
        // steps(28) should roughly match the number of characters
        typing: "typing 3s steps(28, end) forwards",
        blink: "blink 1s step-end infinite"
      }
    }
  },
  safelist: ["animate-typing", "animate-blink"], // ensures classes are generated
  plugins: []
}