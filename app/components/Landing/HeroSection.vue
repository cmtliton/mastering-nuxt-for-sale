<script setup lang="ts">
import { useDisplay } from "vuetify";

const { mobile } = useDisplay();

// স্ক্রলিং ফাংশন (Parent Layout বা Index থেকে এক্সেস করার জন্য)
const scrollToPricing = () => {
  const element = document.querySelector("#pricing");
  if (element) {
    element.scrollIntoView({ behavior: "smooth", block: "start" });
  }
};
const scrollToBuild = () => {
  const element = document.querySelector("#preview");
  if (element) {
    element.scrollIntoView({ behavior: "smooth", block: "start" });
  }
};
</script>

<template>
  <section id="hero" class="hero-wrapper position-relative overflow-hidden">
    <!-- ব্যাকগ্রাউন্ড গ্লো এফেক্ট (Abstract Gradient) -->
    <div class="glow-effect"></div>
    <div class="grid-lines"></div>

    <v-container
      class="fill-height position-relative z-index-1 pt-16 pb-10 justify-center"
    >
      <v-row justify="center" align="center" class="text-center mt-10">
        <v-col cols="12" md="10" lg="8">
          <!-- টপ ব্যাজ (Badge) -->
          <v-chip
            color="#00DC82"
            variant="outlined"
            class="mb-6 font-weight-bold"
            size="large"
            pill
            style="border-color: #00dc82; background: rgba(0, 220, 130, 0.1)"
          >
            <v-icon start icon="mdi-new-box" class="mr-2"></v-icon>
            2025 Edition - Nuxt 4 Ready
          </v-chip>

          <!-- প্রধান হেডলাইন -->
          <h1
            class="text-h3 text-sm-h2 text-md-h1 font-weight-black text-white mb-6 leading-tight"
          >
            Mastering <span class="text-nuxt-green">Nuxt</span> <br />
            Fullstack Unleashed
          </h1>

          <!-- সাব-হেডলাইন / ডেসক্রিপশন -->
          <p
            class="text-body-1 text-md-h6 text-grey-lighten-1 mb-10 px-md-10 ma-5"
            style="line-height: 1.6"
          >
            The complete guide to building professional web applications. From
            <strong>Zero to Production</strong> featuring
            <span class="text-nuxt-green">Nuxt 4</span>,
            <span class="text-white">Tailwind css</span>, and an
            <span class="text-purple-lighten-2">AI-powered project</span>.
            <br class="d-none d-md-block" />
            Start your journey to becoming a Senior Nuxt Developer today.
          </p>

          <!-- কল টু অ্যাকশন বাটন (CTA) -->
          <div
            class="d-flex flex-column flex-sm-row justify-center align-center gap-4"
          >
            <!-- প্রাইমারি বাটন -->
            <v-btn
              color="#00DC82"
              size="x-large"
              rounded="lg"
              elevation="6"
              height="60"
              class="text-capitalize text-black font-weight-bold px-8 w-100 w-sm-auto glow-btn ma-2"
              prepend-icon="mdi-flash"
              @click="scrollToPricing"
            >
              Get Complete Access
              <span class="text-caption ml-1 font-weight-bold opacity-70"
                >(33% OFF)</span
              >
            </v-btn>

            <!-- সেকেন্ডারি বাটন -->
            <v-btn
              variant="outlined"
              color="white"
              size="x-large"
              rounded="lg"
              height="60"
              class="text-capitalize font-weight-bold px-8 w-100 w-sm-auto ma-2"
              prepend-icon="mdi-play-circle-outline"
              @click="scrollToBuild"
            >
              Watch Preview
            </v-btn>
          </div>

          <!-- ফিচার হাইলাইটস (ছোট আইকন সহ) -->
          <div
            class="d-flex justify-center align-center flex-wrap gap-6 mt-12 text-grey-lighten-2 text-caption text-sm-body-2 pa-2"
          >
            <div class="d-flex align-center mx-2">
              <v-icon
                icon="mdi-check-circle"
                color="#00DC82"
                size="small"
                class="mr-2"
              ></v-icon>
              100+ Lessons
            </div>
            <div class="d-flex align-center mx-2">
              <v-icon
                icon="mdi-check-circle"
                color="#00DC82"
                size="small"
                class="mr-2"
              ></v-icon>
              Source Code Included
            </div>
            <div class="d-flex align-center">
              <v-icon
                icon="mdi-check-circle"
                color="#00DC82"
                size="small"
                class="mr-2"
              ></v-icon>
              Lifetime Access
            </div>
          </div>
        </v-col>
      </v-row>

      <!-- হিরো ইমেজ / ভিজ্যুয়াল রিপ্রেজেন্টেশন (Card) -->
      <v-row justify="center" class="mt-12">
        <v-col cols="12" md="10">
          <v-card
            class="mx-auto hero-glass-card"
            elevation="20"
            rounded="xl"
            border
          >
            <!-- ইমেজ প্লেসহোল্ডার: এখানে আপনি কোর্সের ড্যাশবোর্ড বা 3D ইমেজের স্ক্রিনশট বসাবেন -->
            <v-img
              src="https://masteringnuxt.com/images/og-image.png"
              alt="Mastering Nuxt Course Preview"
              cover
              aspect-ratio="16/9"
              class="align-end"
              gradient="to bottom, rgba(2,4,32,0) 0%, rgba(2,4,32,0.8) 100%"
            >
              <!-- ইমেজের উপরে যদি প্লে বাটন রাখতে চান -->
              <div
                class="d-flex justify-center align-center h-100"
                style="background: rgba(0, 0, 0, 0.3)"
              >
                <v-btn
                  icon="mdi-play"
                  size="x-large"
                  color="#00DC82"
                  variant="flat"
                  @click="scrollToBuild"
                ></v-btn>
              </div>
            </v-img>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </section>
</template>

<style scoped>
.hero-wrapper {
  background-color: #020420;
  /* ওয়েভ প্যাটার্ন বা ডার্ক গ্রেডিয়েন্ট */
  background-image: radial-gradient(
      circle at 50% 0%,
      rgba(0, 220, 130, 0.15) 0%,
      transparent 50%
    ),
    linear-gradient(180deg, #020420 0%, #060c2e 100%);
  min-height: 100vh;
}

.text-nuxt-green {
  color: #00dc82 !important;
  text-shadow: 0 0 20px rgba(0, 220, 130, 0.4);
}

.z-index-1 {
  z-index: 1;
}

/* ব্যাকগ্রাউন্ডে গ্রিড লাইন ইফেক্ট (টেকনিক্যাল লুকের জন্য) */
.grid-lines {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-image: linear-gradient(
      rgba(255, 255, 255, 0.03) 1px,
      transparent 1px
    ),
    linear-gradient(90deg, rgba(255, 255, 255, 0.03) 1px, transparent 1px);
  background-size: 50px 50px;
  pointer-events: none;
  opacity: 0.5;
}

/* বাটন গ্লো ইফেক্ট */
.glow-btn {
  box-shadow: 0 0 20px rgba(0, 220, 130, 0.5);
  transition: all 0.3s ease;
}
.glow-btn:hover {
  box-shadow: 0 0 30px rgba(0, 220, 130, 0.7);
  transform: translateY(-2px);
}

/* গ্লাস ইফেক্ট কার্ড */
.hero-glass-card {
  background: rgba(15, 23, 42, 0.6) !important;
  backdrop-filter: blur(12px);
  border: 1px solid rgba(255, 255, 255, 0.1);
  overflow: hidden;
}
</style>
