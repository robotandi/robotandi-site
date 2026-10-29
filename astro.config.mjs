// @ts-check
import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://robotandi.com',
  i18n: {
    defaultLocale: 'ar',
    locales: ['ar', 'en'],
    routing: { prefixDefaultLocale: true },
  },
});