import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import viteCompression from "vite-plugin-compression";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    viteCompression({
      // Konfigurasi opsional
      verbose: true,
      disable: false,
      threshold: 10240, // 10kb
      algorithm: "gzip", // atau 'brotliCompress'
      ext: ".gz", // atau '.br'
    }),
  ],
});
