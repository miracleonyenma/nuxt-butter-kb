// ./nuxt.config.ts

// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  runtimeConfig: {
    // The private keys which are only available within server-side
    butterApiToken: process.env.BUTTER_READ_API_TOKEN,
  },
  css: ["~/assets/css/main.css"],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
});
