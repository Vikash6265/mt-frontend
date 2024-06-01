import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server :{
    proxy :{
      '/api' : {
        target : "https://mt-backend-8s1s.onrender.com/",
        changeOrigin : true,
        issecure : false,
      }
    }
  }
})
