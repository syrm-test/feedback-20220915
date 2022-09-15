import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'
import * as path from 'path'
import { defineConfig } from 'vite'

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [
        vue(),
        vueJsx({}),
    ],
    server: {
        port: 80,
    },
    envDir: './env',
    envPrefix: [ 'VUE_APP_' ],
    resolve: {
        alias: {
            '@': path.join(__dirname, 'src'),
        },
    },
})
