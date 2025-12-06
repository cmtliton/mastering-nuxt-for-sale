<template>
  <div>
    <LandingHeroSection />
    <LandingShowcaseSection />
    <LandingFeatures />
    <LandingPricing />
    <LandingFaq />
    <!-- নতুন যোগ করা হলো -->
  </div>
</template>
<script setup lang="ts">
// Define the Open Graph data
useSeoMeta({
  title: "Mastering Nuxt 4 | The Ultimate Guide to Fullstack Vue",
  ogTitle: "Mastering Nuxt 4 | The Ultimate Guide to Fullstack Vue",
  description:
    "Become a Nuxt expert with the official Mastering Nuxt 4 course. Learn full-stack development, server-side rendering, and advanced patterns.",
  ogDescription:
    "Become a Nuxt expert with the official Mastering Nuxt 4 course. Learn full-stack development, server-side rendering, and advanced patterns.",
  ogImage: "/og-images.png", // Replace with actual image URL if different
  ogUrl: "https://mastering-nuxt4.netlify.app/",
  twitterCard: "summary_large_image",
  twitterTitle: "Mastering Nuxt 4",
  twitterDescription:
    "The official course to master Nuxt 4 and modern web development.",
  twitterImage: "https://mastering-nuxt4.netlify.app/og-images.png", // Replace with actual image URL if different
});
</script>
