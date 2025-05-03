import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";

// GitHub repo adınızı buraya yazın
const repoName = "clientSite";

export default defineConfig({
  base: `/${repoName}/`, // GitHub Pages alt dizin için gerekli
  plugins: [
    react(),
    // Replit eklentileri çıkarıldı
  ],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "client", "src"),
      "@shared": path.resolve(__dirname, "shared"),
      "@assets": path.resolve(__dirname, "attached_assets"),
    },
  },
  root: path.resolve(__dirname, "client"),
  build: {
    outDir: path.resolve(__dirname, "dist"), // `dist/public` yerine `dist`
    emptyOutDir: true,
  },
});
