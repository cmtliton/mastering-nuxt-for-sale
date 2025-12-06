// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2025-07-15",
  devtools: { enabled: true },
  modules: ["vuetify-nuxt-module"],
  app: {
    head: {
      title: "Mastering Nuxt 4 Full Course - Build a Nuxt 4 App from Scratch",
      meta: [
        { name: "viewport", content: "width=device-width, initial-scale=1" },
        {
          name: "description",
          content:
            "The Official Full Course for Mastering Nuxt 4. Learn how to build a Nuxt 4 application from scratch with step-by-step guidance.",
        },
      ],
    },
  },
});
