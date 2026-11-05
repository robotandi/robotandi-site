// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

const defaultLocale = 'ar';
const locales = ['ar', 'en'];

export default defineConfig({
  site: 'https://robotandi.com',
  redirects: {
    '/': '/ar/',
  },
  integrations: [
    sitemap({
      i18n: {
        defaultLocale,
        locales: Object.fromEntries(locales.map((locale) => [locale, locale])),
      },
    }),
  ],
  i18n: {
    defaultLocale,
    locales,
    routing: { prefixDefaultLocale: true },
  },
});
