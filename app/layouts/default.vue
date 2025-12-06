<script setup lang="ts">
import { ref } from "vue";
import { useDisplay } from "vuetify";

// মোবাইল মেনুর জন্য ড্রয়ার স্টেট
const drawer = ref(false);
const { mobile } = useDisplay();

// মেনু আইটেম এবং সেকশন আইডি
const menuItems = [
  { title: "Home", section: "#hero" },
  { title: "What You Build", section: "#preview" },
  { title: "Curriculum", section: "#what-you-build" },
  { title: "Pricing", section: "#pricing" },
  { title: "FAQ", section: "#faq" },
];

// স্মুথ স্ক্রলিং ফাংশন
const scrollToSection = (id: string) => {
  const element = document.querySelector(id);
  if (element) {
    element.scrollIntoView({ behavior: "smooth", block: "start" });
    drawer.value = false; // মোবাইলে ক্লিক করার পর মেনু বন্ধ হবে
  }
};
</script>

<template>
  <v-app theme="dark" class="nuxt-landing-app">
    <!-- নেভিগেশন বার (Desktop & Mobile) -->
    <v-app-bar
      :elevation="2"
      color="#020420"
      class="border-b border-opacity-10"
      height="80"
    >
      <v-container class="d-flex align-center py-0">
        <!-- লোগো এরিয়া -->
        <div
          class="d-flex align-center cursor-pointer"
          @click="scrollToSection('#hero')"
        >
          <v-icon
            icon="mdi-mountain"
            color="#00DC82"
            size="large"
            class="mr-2"
          ></v-icon>
          <span class="text-h6 font-weight-bold text-white">
            Mastering <span class="text-nuxt-green">Nuxt BD</span>
          </span>
        </div>

        <v-spacer></v-spacer>

        <!-- ডেস্কটপ মেনু -->
        <div class="d-none d-md-flex align-center gap-4">
          <v-btn
            v-for="(item, index) in menuItems"
            :key="index"
            variant="text"
            class="text-capitalize font-weight-medium text-body-1"
            color="grey-lighten-3"
            @click="scrollToSection(item.section)"
          >
            {{ item.title }}
          </v-btn>

          <!-- CTA বাটন -->
          <v-btn
            color="#00DC82"
            variant="flat"
            class="ml-4 text-capitalize font-weight-bold text-black px-6"
            rounded="lg"
            @click="scrollToSection('#pricing')"
          >
            Get Access
          </v-btn>
        </div>

        <!-- মোবাইল হ্যামবার্গার আইকন -->
        <v-app-bar-nav-icon
          class="d-md-none text-white"
          @click="drawer = !drawer"
        ></v-app-bar-nav-icon>
      </v-container>
    </v-app-bar>

    <!-- মোবাইল সাইড ড্রয়ার (Navigation Drawer) -->
    <v-navigation-drawer
      v-model="drawer"
      location="right"
      temporary
      color="#0F172A"
      class="d-md-none"
    >
      <v-list class="pt-4">
        <v-list-item
          v-for="(item, index) in menuItems"
          :key="index"
          @click="scrollToSection(item.section)"
          link
          class="mb-2"
        >
          <v-list-item-title class="text-white font-weight-medium">
            {{ item.title }}
          </v-list-item-title>
        </v-list-item>

        <v-divider class="my-4 border-opacity-25"></v-divider>

        <div class="px-4">
          <v-btn
            block
            color="#00DC82"
            class="text-black font-weight-bold"
            @click="scrollToSection('#pricing')"
          >
            Get Access Now
          </v-btn>
        </div>
      </v-list>
    </v-navigation-drawer>

    <!-- মেইন কন্টেন্ট এরিয়া -->
    <v-main class="bg-deep-navy">
      <!-- পেজ ট্রানজিশন বা স্লট -->
      <slot />
    </v-main>

    <!-- ফুটার -->
    <v-footer color="#020420" class="border-t border-opacity-10 py-8">
      <LandingFooter />
    </v-footer>
  </v-app>
</template>

<style scoped>
/* গ্লোবাল স্টাইল এবং ব্র্যান্ড কালার */
.bg-deep-navy {
  background-color: #020420 !important;
}

.text-nuxt-green {
  color: #00dc82 !important;
}

/* গ্লাস ইফেক্ট অ্যাপ বারের জন্য (অপশনাল) */
.v-app-bar {
  backdrop-filter: blur(10px);
  background-color: rgba(2, 4, 32, 0.85) !important;
}

/* বাটন হোভার ইফেক্ট */
.v-btn:hover {
  opacity: 0.9;
}
</style>

<style>
/* গ্লোবাল স্মুথ স্ক্রল */
html {
  scroll-behavior: smooth;
  background-color: #020420;
}
body {
  font-family: "Inter", sans-serif; /* সুন্দর ফন্টের জন্য */
}
</style>
