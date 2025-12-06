import { withNextVideo } from 'next-video/process';
import path from 'path';
import { fileURLToPath } from 'url';

// Для ESM модулей (чтобы __dirname работал)
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

/** @type {import('next').NextConfig} */
const nextConfig = {
    // ← ГАСИМ ВСЕ ДЕПРИКЕЙШЕНЫ @import (спасение 2025 года)
    sassOptions: {
        includePaths: [path.join(__dirname, 'app'), path.join(__dirname, 'app/shared/styles')],
        silenceDeprecations: ['import'], // ← КЛЮЧЕВАЯ СТРОКА
        // Если захочешь потом перейти на @use — просто уберёшь эту строку
    },

    // Поддержка твоих алиасов из tsconfig.json/jsconfig.json
    webpack(config) {
        config.resolve.alias = {
            ...config.resolve.alias,
            '@': path.resolve(__dirname),
            '@styles': path.resolve(__dirname, 'app/shared/styles'),
        };
        return config;
    },

    // Если используешь app router + server actions — всё будет работать
    experimental: {
        // serverActions: true, // если используешь
    },
};

export default withNextVideo(nextConfig);