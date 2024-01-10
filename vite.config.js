import wasm from "vite-plugin-wasm";
import topLevelAwait from "vite-plugin-top-level-await";
import vue from '@vitejs/plugin-vue'

import { defineConfig } from 'vite'

export default defineConfig({
    plugins: [
        vue(),
        wasm(),
        topLevelAwait()
    ],
    server: {
        host: '0.0.0.0',
        port: 3000,
    },
});