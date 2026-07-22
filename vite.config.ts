import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    // Split vendor chunks so Three.js, GSAP, and Framer Motion load only when needed
    rollupOptions: {
      output: {
        manualChunks(id: string) {
          // Three.js ecosystem — only loaded by TechStack/Phone3D (lazy)
          if (id.includes('node_modules/three/') || id.includes('node_modules/@react-three/')) {
            return 'vendor-three';
          }
          // Animation libraries
          if (id.includes('node_modules/framer-motion/') || id.includes('node_modules/gsap/')) {
            return 'vendor-animation';
          }
          // React core — cached long-term
          if (id.includes('node_modules/react-dom/') || id.includes('node_modules/react/')) {
            return 'vendor-react';
          }
        },
      },
    },
  },
})
