/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        serif: ['"Playfair Display"', "serif"],
        sans: ['"Inter"', "sans-serif"],
      },
      colors: {
        // Dourado mais rico (menos amarelo, mais bronze)
        primary: "#C59D5F",
        // Um fundo muito subtil (Tom de areia quase branco) para quebrar o branco total
        secondary: "#F9F9F6",
        // NOVO: Azul Petróleo Profundo (Substitui o preto/cinza escuro em alguns sítios)
        accent: "#1F2937",
        // Cor para o Footer (Azul Noite)
        dark: "#111827",
      },
      keyframes: {
        fadeInUp: {
          "0%": { opacity: "0", transform: "translateY(20px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
      },
      animation: {
        "fade-in-up": "fadeInUp 0.8s ease-out forwards",
      },
    },
  },
  plugins: [],
};
