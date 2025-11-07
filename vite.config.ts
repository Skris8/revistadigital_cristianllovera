import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";

export default defineConfig(({ command }) => ({
  plugins: [vue()],
  // Base correcta para GitHub Pages (solo en build)
  base: command === "serve" ? "/" : "/revistadigital_cristianllovera/",
  build: {
    outDir: "dist",
    copyPublicDir: true, // si tienes imágenes en public/
  },
}));
