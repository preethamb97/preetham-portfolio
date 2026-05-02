import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
// GitHub project page: https://<user>.github.io/preetham-portfolio/
export default defineConfig({
  base: "/preetham-portfolio/",
  plugins: [react()],
  server: {
    proxy: {
      "/preetham-portfolio/__health/nammarental": {
        target: "https://api.nammarental.com",
        changeOrigin: true,
        rewrite: () => "/health",
      },
      "/preetham-portfolio/__health/torquebill": {
        target: "https://api.torquebill.com",
        changeOrigin: true,
        rewrite: () => "/api/health",
      },
    },
  },
})
