import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: ["class"],
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}", "./features/**/*.{ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-inter)", "Inter", "sans-serif"]
      },
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: { DEFAULT: "hsl(var(--primary))", foreground: "hsl(var(--primary-foreground))" },
        secondary: { DEFAULT: "hsl(var(--secondary))", foreground: "hsl(var(--secondary-foreground))" },
        muted: { DEFAULT: "hsl(var(--muted))", foreground: "hsl(var(--muted-foreground))" },
        accent: { DEFAULT: "hsl(var(--accent))", foreground: "hsl(var(--accent-foreground))" },
        destructive: { DEFAULT: "hsl(var(--destructive))", foreground: "hsl(var(--destructive-foreground))" },
        card: { DEFAULT: "hsl(var(--card))", foreground: "hsl(var(--card-foreground))" }
      },
      borderRadius: { xl: "1rem", "2xl": "1.5rem", "3xl": "2rem" },
      boxShadow: {
        luxury: "0 24px 80px -32px rgba(15,23,42,.35)",
        glass: "0 20px 60px -28px rgba(37,99,235,.45)"
      },
      backgroundImage: {
        "hero-grid": "linear-gradient(to right, rgba(15,23,42,.08) 1px, transparent 1px), linear-gradient(to bottom, rgba(15,23,42,.08) 1px, transparent 1px)",
        "premium-gradient": "radial-gradient(circle at top left, rgba(37,99,235,.22), transparent 34%), radial-gradient(circle at top right, rgba(16,185,129,.20), transparent 28%)"
      }
    }
  },
  plugins: []
};
export default config;
