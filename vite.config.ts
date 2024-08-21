import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';
import svgr from 'vite-plugin-svgr';

export default defineConfig({
    plugins: [react(), svgr()],
    resolve: {
        alias: {
            '@assets': path.resolve(__dirname, './src/assets'),
            '@helpers': path.resolve(__dirname, './src/helpers'),
            '@components': path.resolve(__dirname, './src/components'),
            '@sections': path.resolve(__dirname, './src/sections'),
            '@hooks': path.resolve(__dirname, './src/hooks'),
            '@interfaces': path.resolve(__dirname, './src/interfaces'),
        },
    },
});
