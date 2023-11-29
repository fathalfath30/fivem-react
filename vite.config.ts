import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react()
  ],
  base: './',
  build: {
    outDir: 'ui',
    //rollupOptions:{
    //  input: {
    //    app: "./src/index.html"
    //  },
    //  output: "./index.html"
    //}
  },
  // server: {
  //   open: './index.html',
  // },
});
