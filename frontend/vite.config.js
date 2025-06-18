import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueDevTools from 'vite-plugin-vue-devtools'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    vueDevTools(),
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    },
  },
  // Configuration pour les assets statiques
  publicDir: 'public',
  // Configuration pour GitHub Pages
  base: process.env.NODE_ENV === 'production' ? '/Site_vitrine_victoria/' : '/',
  // Configuration des assets
  assetsInclude: ['**/*.png', '**/*.jpg', '**/*.jpeg', '**/*.gif', '**/*.svg', '**/*.ico'],
  build: {
    rollupOptions: {
      output: {
        assetFileNames: (assetInfo) => {
          // Conserver la structure pour les images dans public/
          if (assetInfo.name && assetInfo.name.includes('icone_plugins')) {
            return 'icone_plugins/[name]-[hash][extname]'
          }
          return 'assets/[name]-[hash][extname]'
        }
      }
    }
  }
})
