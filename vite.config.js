import { resolve } from "path";
import { defineConfig } from "vite";

export default defineConfig({
  root: "src/",

  build: {
    outDir: "../build",
    rollupOptions: {
      input: {
        main: resolve(__dirname, "src/index.html"),
        movie: resolve(__dirname, "src/movie/index.html"),
      },
    }, 
  },
});
