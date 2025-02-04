// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2024-11-01",
  devtools: { enabled: true },
  components: {
    dirs: [
      {
        path: "~/src/features/*/components",
        pathPrefix: false,
      },
    ],
  },
  typescript: {
    strict: true,
  },
  vite: {
    server: {
      hmr: {
        protocol: "ws",
        host: "localhost",
        overlay: true,
      },
    },
  },
});
