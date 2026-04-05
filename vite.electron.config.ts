import { defineConfig } from "vite";
import electron from "vite-plugin-electron";
import { viteStaticCopy } from "vite-plugin-static-copy";

export default defineConfig({
    base: "./",
    build: {
        assetsDir: "assets",
        emptyOutDir: true,
        outDir: "dist",
        target: "esnext",
    },
    plugins: [
        electron([
            {
                entry: "src/electron/main.ts",
                vite: {
                    build: {
                        outDir: "dist-electron",
                    },
                },
            },
            {
                entry: "src/electron/preload.ts",
                vite: {
                    build: {
                        outDir: "dist-electron",
                    },
                },
            },
        ]),
        viteStaticCopy({
            targets: [
                {
                    src: "src/data/**/*",
                    dest: "data/",
                },
            ],
        }),
    ],
});
