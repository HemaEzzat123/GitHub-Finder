import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";

// https://vite.dev/config/
export default defineConfig({
  define: {
    "process.env": {
      NODE_ENV: process.env.NODE_ENV,
      // other environment variables you want to expose
    },
  },
  plugins: [react()],
  server: {
    proxy: {
      "/api": {
        target: "https://api.github.com",
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, ""),
      },
    },
  },
});
