import path from 'path'
import { defineConfig } from 'vite'

import react from '@vitejs/plugin-react'
import Pages from 'vite-plugin-pages'
import { VitePWA } from 'vite-plugin-pwa'
import AutoImport from 'unplugin-auto-import/vite'
import Icons from 'unplugin-icons/vite'
import IconsResolver from 'unplugin-icons/resolver'

export default defineConfig(async () => {
  const mdx = await import('@mdx-js/rollup')

  return { 
    resolve: {
      alias: {
        '~/': `${path.resolve(__dirname, 'src')}/`,
        'react/jsx-runtime': 'react/jsx-runtime.js'
      },
    },
    plugins: [
      react(),
      Pages({
        extensions: ['tsx', 'mdx']
      }),
      mdx.default(),
      VitePWA({
        registerType: 'autoUpdate',
        includeAssets: ['favicon.png', 'robots.txt', 'safari-pinned-tab.png'],
        manifest: {
          name: 'Venus',
          short_name: 'Venus',
          theme_color: '#ffffff',
          icons: [
            {
              src: '/pwa-192x192.png',
              sizes: '192x192',
              type: 'image/png',
            },
            {
              src: '/pwa-512x512.png',
              sizes: '512x512',
              type: 'image/png',
            },
            {
              src: '/pwa-512x512.png',
              sizes: '512x512',
              type: 'image/png',
              purpose: 'any maskable',
            },
          ],
        },
      }),
      AutoImport({
        imports: [
          'react',
          'react-router-dom',
        ],
        dts: 'src/auto-imports.d.ts',
        eslintrc: {
          enabled: true,
          filepath: './.eslintrc-auto-import.json',
          globalsPropValue: 'readonly',
        },
        resolvers: [
          IconsResolver({
            prefix: 'Icon',
            extension: 'jsx',
          }),
        ],
      }),
      Icons({ compiler: 'jsx', jsx: 'react', autoInstall: true }),
    ],
  }
})
