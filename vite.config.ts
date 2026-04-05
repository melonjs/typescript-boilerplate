import { defineConfig } from "vite";
import { viteStaticCopy } from "vite-plugin-static-copy";

export default defineConfig({
  base: "",
  build: {
    assetsDir: "assets",
    emptyOutDir: true,
    outDir: "dist",
    target: "esnext"
  },
  plugins: [
    viteStaticCopy({
      targets: [
        {
          src: "src/data/**/*",
          dest: "data/",
        },
      ],
    })
  ]
});
