import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";

export default defineConfig({
  plugins: [react()],
  // Mówimy Vite, że korzeń aplikacji frontendowej jest w folderze 'client'
  root: path.resolve(import.meta.dirname, "client"),
  resolve: {
    alias: {
      // Teraz alias '@' będzie poprawnie wskazywał na 'client/src'
      "@": path.resolve(import.meta.dirname, "client", "src"),
    },
  },
  build: {
    // Określamy, gdzie ma trafiać gotowa, zbudowana aplikacja
    outDir: path.resolve(import.meta.dirname, "dist"),
    emptyOutDir: true,
  },
});
