import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  base: "/",
  build: {
    outDir: "dist",
  },
  resolve: {
    alias: [
      { find: "assets", replacement: "/src/assets" },
      { find: "components", replacement: "/src/components" },
      { find: "pages", replacement: "/src/pages" },
      { find: "router", replacement: "/src/router" },
      { find: "styles", replacement: "/src/styles" },
    ],
  },
  server: {
    port: 3000,
  },
});
