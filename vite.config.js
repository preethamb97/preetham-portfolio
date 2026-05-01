import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
// GitHub project page: https://<user>.github.io/preetham-portfolio/
export default defineConfig({
  base: "/preetham-portfolio/",
  plugins: [react()],
})
