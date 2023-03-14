import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

const BASE_URL = '/ui/app/';

export default defineConfig({
    plugins: [
        react(),
    ],
    base: BASE_URL,
});

