import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
// https://vite.dev/config/
export default defineConfig({
  screens: {
    sm: "576px",
    lg: "992px",
    xl: "1200px",
    "2xl": "1400px",
  },

  plugins: [react(), tailwindcss()],
});
