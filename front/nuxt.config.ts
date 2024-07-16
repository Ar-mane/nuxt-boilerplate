// -----------------------------------------------
//  Nuxt 3 configuration
// -----------------------------------------------
//
// The configuration is fully typed, so you can use auto-completion in your IDE to find available
// options and what value they expect.
//
// See the full API on https://nuxt.com/docs/api/configuration/nuxt-config

import { fileURLToPath } from 'node:url';

import { compression } from 'vite-plugin-compression2';

import { SECURITY_HEADERS } from './lib/security';

export default defineNuxtConfig({
  app: {
    head: {
      title: 'Armane.Dev',
      htmlAttrs: {
        lang: 'fr'
      },
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        {
          hid: 'description',
          name: 'description',
          content: 'A boilerplate for nuxt projects'
        },
        { name: 'format-detection', content: 'telephone=no' },
        { name: 'author', content: 'Armane.Dev' },
        { name: 'publisher', content: 'Armane.Dev' },
        { name: 'apple-mobile-web-app-title', content: 'Armane.Dev' }
      ],
      link: [
        { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
        { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
        { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: '' },
        {
          rel: 'stylesheet',
          href: 'https://fonts.googleapis.com/css2?family=Source+Sans+Pro:wght@300;400;600;700&display=swap'
        }
      ],
      script: []
    }
  },

  routeRules: {
    '/**': {
      headers: SECURITY_HEADERS
    }
  },

  alias: {
    $: fileURLToPath(new URL('./styles/modules', import.meta.url))
  },

  // -----------------------------------------------
  // Globally included CSS
  // -----------------------------------------------

  css: ['@/node_modules/normalizecss/normalize.css', '@/styles/app.scss', '@/styles/tailwind.css'],

  // Used for Tailwind CSS
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {}
    }
  },

  // -----------------------------------------------
  // Components auto-importing
  // -----------------------------------------------
  //
  // With Nuxt 3, components are automatically imported in the template part of the .vue files.
  // Their name is based on their path and name, meaning that a component in
  // `components/hello/world/Example.vue` will be imported as <HelloWorldExample>. But don't name it
  // like that, instead you should repeat the component full name in its file name to improve
  // file search and navigating, and so name it `components/hello/world/HelloWorldExample.vue`, which
  // will still be imported as <HelloWorldExample>.
  //
  // This section configures it to import them from the 'components' directory, and to remove the
  // '_' from the Section folder for the imports name.
  components: {
    dirs: [
      '@/components',
      {
        path: '@/components/__Development',
        prefix: 'Development'
      }
    ]
  },

  // -----------------------------------------------
  // Auto-imports configuration
  // -----------------------------------------------
  //
  // Nuxt 3 auto imports common functions (such as Vue functions) in nearly the whole project.
  // This section configures it to also import everything declared in the 'composables' directory,
  // even the subdirectories content (by defaults it only imports the files in the root of the
  // directory).
  imports: {
    dirs: ['composables/**']
  },

  modules: ['@nuxt/image', '@pinia/nuxt', '@kevinmarrec/nuxt-pwa', '@nuxtjs/robots'],

  robots: {
    rules: {
      UserAgent: '*',
      Disallow: '/'
    }
  },

  devtools: {
    enabled: true,

    timeline: {
      enabled: true
    }
  },

  pwa: {
    meta: {
      mobileAppIOS: true,
      name: 'Armane.Dev',
      description: 'One boilerplate for all ssr projects',
      theme_color: '#ffa227',
      lang: 'en',
      ogHost: 'https://armame.dev',
      appleStatusBarStyle: 'black'
    },
    icon: {
      source: '@/public/favicon.ico'
    },
    manifest: {
      name: 'Armane.Dev',
      short_name: 'Armane.Dev',
      description: 'One boilerplate for all ssr projects',
      lang: 'en',
      theme_color: '#ffa227',
      background_color: '#ffa227',
      icons: [
        {
          src: '/android-chrome-192x192.png',
          type: 'image/x-icon',
          sizes: '192x192',
          purpose: 'any'
        },
        {
          src: '@/public/android-chrome-512x512.png',
          type: 'image/x-icon',
          sizes: '512x512',
          purpose: 'any'
        },
        {
          src: 'apple-touch-icon.png',
          type: 'image/x-icon',
          sizes: '180x180',
          purpose: 'any'
        },
        {
          src: 'favicon-16x16.png',
          type: 'image/x-icon',
          sizes: '16x16',
          purpose: 'any'
        },
        {
          src: 'favicon-32x32.png',
          type: 'image/x-icon',
          sizes: '32x32',
          purpose: 'maskable'
        }
      ]
    }
  },

  image: {
    dir: 'public/images'
    // add poviders as needed
    // twicpics: {
    //   baseURL: process.env.TWICPICS_API_URL
    // }
  },

  runtimeConfig: {
    whitelistedIPs: [
      '193.58.247.21', // LMDV
      '193.58.247.50', // LMDV
      '193.58.247.59', // LMDV
      '46.193.107.8' // TODO: Theodo, remove after product validation
    ],
    intrafit: {
      authHeader: process.env.INTRAFIT_AUTH_HEADER
    },
    site: {
      url: process.env.SITE_URL
    },
    public: {
      // gaId: process.env.GOOGLE_ANALYTICS_ID
    }
  },

  sourcemap: {
    client: true,
    server: true
  },

  typescript: {
    shim: false, // This adds a wildcard *.vue TypeScript definition, which we don't need
    strict: true,
    typeCheck: true // Called by vue-plugin-checker
  },

  vite: {
    plugins: [compression()]
  }
});
