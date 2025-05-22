import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vite.dev/config/-
export default defineConfig({
  plugins: [react()],
  build: {
    outDir: "dist",
  },
  server: {
    host: "137.59.180.219",
    port: "3010",
  },
});
