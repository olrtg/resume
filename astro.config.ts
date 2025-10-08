import { defineConfig } from 'astro/config'

import tailwindcss from '@tailwindcss/vite'
import solidJs from '@astrojs/solid-js'
import icon from 'astro-icon'

// https://astro.build/config
export default defineConfig({
  integrations: [solidJs(), icon()],
  i18n: {
    locales: ['en', 'es'],
    defaultLocale: 'en',
  },
  vite: {
    plugins: [tailwindcss()],
  },
})
