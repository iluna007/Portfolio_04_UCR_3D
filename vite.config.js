import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `
          @use "sass:color";
          @use "sass:math";
          @use "sass:meta";
          @use "sass:selector";
          @use "sass:string";
        `,
      },
    },
  },
});
