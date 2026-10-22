import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        ink: "#0d1512",
        slate: "#616b68",
        mist: "#adb5b2",
        cream: "#f1f1e4",
        paper: "#fbf9f5",
        leaf: "#0c5740",
        butter: "#fffdd3",
        forest: "#2a3e31",
      },
      fontFamily: {
        sans: ["var(--font-sans)", "system-ui", "sans-serif"],
        serif: ["var(--font-serif)", "Georgia", "serif"],
      },
      maxWidth: { page: "1440px" },
    },
  },
  plugins: [],
};
export default config;
