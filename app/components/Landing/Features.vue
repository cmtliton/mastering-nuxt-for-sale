<script setup lang="ts">
import { ref } from "vue";

// ফিচার আইটেম লিস্ট
const features = [
  {
    icon: "mdi-file-tree",
    title: "File-based Routing",
    desc: "Master Nuxt's automatic routing system with nested routes and dynamic parameters.",
  },
  {
    icon: "mdi-server-network",
    title: "SSR & Hybrid Rendering",
    desc: "Build high-performance apps with Universal Rendering and route rules.",
  },
  {
    icon: "mdi-api",
    title: "Type-safe APIs",
    desc: "End-to-end type safety from your database to your frontend components.",
  },
  {
    icon: "mdi-database",
    title: "Postgres & Prisma",
    desc: "Full backend integration using Supabase, PostgreSQL and Prisma ORM.",
  },
  {
    icon: "mdi-lock",
    title: "Authentication",
    desc: "Secure your app with GitHub OAuth and custom user session management.",
  },
  {
    icon: "mdi-rocket-launch",
    title: "State Management",
    desc: "Efficient state handling with Pinia and Nuxt's useState composable.",
  },
  {
    icon: "mdi-server-network",
    title: "Universal Rendering",
    desc: "Understand SSR, CSR, SWR, and Hybrid rendering modes in Nuxt 4.",
  },
  {
    icon: "mdi-domain",
    title: "Scalable Architecture",
    desc: "Learn how to structure large-scale applications for maintainability.",
  },
  {
    icon: "mdi-lightning-bolt",
    title: "Async Data Fetching",
    desc: "Deep dive into useAsyncData, useFetch, and isomorphic data patterns.",
  },
  {
    icon: "mdi-language-typescript",
    title: "Full TypeScript",
    desc: "Build fully typed applications from database models to frontend props.",
  },
  {
    icon: "mdi-shield-lock",
    title: "User Authentication",
    desc: "Implement secure auth flows, sessions, and protected middleware routes.",
  },
  {
    icon: "mdi-database-postgres",
    title: "Postgres Database",
    desc: "Connect and manage a real SQL database using Prisma ORM and Supabase.",
  },
  {
    icon: "mdi-google-analytics",
    title: "SEO Optimization",
    desc: "Master meta tags, OG images, and sitemaps for better search ranking.",
  },
  {
    icon: "mdi-alert-octagon",
    title: "Error Handling",
    desc: "Handle server and client-side errors gracefully with custom error pages.",
  },
  {
    icon: "mdi-rocket-launch",
    title: "Performance",
    desc: "Optimize bundle size, lazy load components, and use Nuxt Image.",
  },
  {
    icon: "mdi-puzzle",
    title: "Nuxt Modules",
    desc: "Integrate 3rd party modules like Nuxt UI, Pinia, and VueUse effortlessly.",
  },
  {
    icon: "mdi-cloud-upload",
    title: "Deployment",
    desc: "Deploy your full-stack app to production using Nitro and Vercel/Netlify.",
  },
];

// অর্ডার ডায়ালগ কন্ট্রোল
const showOrderDialog = ref(false);
</script>

<template>
  <section id="what-you-build" class="py-16 bg-deep-navy position-relative">
    <v-container>
      <!-- সেকশন হেডার -->
      <v-row justify="center" class="text-center mb-12">
        <v-col cols="12" md="8">
          <h2 class="text-h4 text-md-h3 font-weight-bold text-white mb-4">
            What you will <span class="text-nuxt-green">Learn & Build</span>
          </h2>
          <p class="text-grey-lighten-1 text-body-1">
            Dive deep into the Nuxt ecosystem. We don't just teach the basics;
            we build production-ready applications together.
          </p>
        </v-col>
      </v-row>

      <!-- ফিচার গ্রিড -->
      <v-row>
        <v-col
          v-for="(feature, i) in features"
          :key="i"
          cols="12"
          sm="6"
          md="4"
        >
          <v-card
            class="h-100 feature-card pt-6 pb-4 px-4"
            color="#0F172A"
            elevation="0"
            rounded="xl"
            border
          >
            <div class="mb-4 d-inline-block pa-3 rounded-lg bg-icon-glow">
              <v-icon :icon="feature.icon" color="#00DC82" size="32"></v-icon>
            </div>
            <h3 class="text-h6 font-weight-bold text-white mb-2">
              {{ feature.title }}
            </h3>
            <p class="text-grey-lighten-1 text-body-2" style="line-height: 1.6">
              {{ feature.desc }}
            </p>
          </v-card>
        </v-col>
      </v-row>

      <!-- Call to Action (Order Now) -->
      <v-row justify="center" class="mt-12">
        <v-col cols="12" class="text-center">
          <v-card
            color="#00DC82"
            class="d-flex flex-column flex-md-row align-center justify-space-between pa-8 rounded-xl mx-auto"
            max-width="900"
            elevation="10"
          >
            <div class="text-left mb-4 mb-md-0">
              <h3 class="text-h5 font-weight-black text-black">
                Ready to start building?
              </h3>
              <p class="text-black font-weight-medium mt-1">
                Get the
                <span class="text-decoration-underline"
                  >Essentials Package</span
                >
                for just <strong>270 BDT</strong>
              </p>
            </div>

            <v-btn
              color="white"
              size="x-large"
              rounded="lg"
              class="text-black font-weight-bold px-8"
              prepend-icon="mdi-cart-outline"
              elevation="4"
              @click="showOrderDialog = true"
            >
              Order Now
            </v-btn>
          </v-card>
        </v-col>
      </v-row>
    </v-container>

    <!-- অর্ডার ডায়ালগ কম্পোনেন্ট কল করা হলো -->
    <CommonOrderDialog
      v-model="showOrderDialog"
      selected-package="Essentials Package"
      price="270"
    />
  </section>
</template>

<style scoped>
.bg-deep-navy {
  background-color: #020420;
}

.feature-card {
  transition: transform 0.3s ease, border-color 0.3s ease;
  border-color: rgba(255, 255, 255, 0.05);
}

.feature-card:hover {
  transform: translateY(-5px);
  border-color: #00dc82;
}

.bg-icon-glow {
  background: rgba(0, 220, 130, 0.1);
  box-shadow: 0 0 15px rgba(0, 220, 130, 0.2);
}
</style>
