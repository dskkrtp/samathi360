// @ts-check
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';
import icon from 'astro-icon'; // 1. นำเข้าคอมโพเนนต์ไอคอน

// https://astro.build/config
export default defineConfig({
  vite: {
    plugins: [tailwindcss()]
  },
  integrations: [
    icon() // 2. เติมเข้ามาตรงนี้
  ],
});