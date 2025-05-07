import path from 'path';
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import tsconfigPaths from 'vite-tsconfig-paths'
import tailwindcss from '@tailwindcss/vite';
import svgr from "vite-plugin-svgr";

// https://vite.dev/config/
export default defineConfig({
  define: {
    'window.AssistantHost': 'window.AssistantHost',
  },
  plugins: [
    react(),
    tsconfigPaths(),
    tailwindcss(),
    svgr(),
  ],

  resolve: {
    alias: {
      '@app': path.resolve(__dirname, 'src/app'),
      '@pages': path.resolve(__dirname, 'src/pages'),
      '@widgets': path.resolve(__dirname, 'src/widgets'),
      '@features': path.resolve(__dirname, 'src/features'),
      '@entities': path.resolve(__dirname, 'src/entities'),
      '@shared': path.resolve(__dirname, 'src/shared'),
      '@assets': path.resolve(__dirname, 'src/shared/assets'),
      '@styles': path.resolve(__dirname, 'src/shared/styles'),
    },
  },

  build: {
    outDir: 'dist',
    emptyOutDir: true,
  },
})
