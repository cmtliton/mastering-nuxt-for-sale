<script setup lang="ts">
import { ref } from "vue";

// ইমেইল সাবস্ক্রিপশন (Visual Only for now)
const email = ref("");

// সোশ্যাল মিডিয়া লিংকস
const socials = [
  { icon: "mdi-github", link: "#" },
  { icon: "mdi-twitter", link: "#" },
  { icon: "mdi-facebook", link: "#" },
  { icon: "mdi-linkedin", link: "#" },
];

// কুইক লিংকস (Smooth Scroll এর জন্য)
const scrollToSection = (id: string) => {
  const element = document.querySelector(id);
  if (element) {
    element.scrollIntoView({ behavior: "smooth", block: "start" });
  }
};
</script>

<template>
  <footer class="bg-deep-navy border-t pt-16 pb-8">
    <v-container>
      <v-row justify="space-between">
        <!-- কলাম ১: ব্র্যান্ডিং এবং সোশ্যাল -->
        <v-col cols="12" md="4" class="mb-8 mb-md-0">
          <div class="d-flex align-center mb-4">
            <v-icon
              icon="mdi-mountain"
              color="#00DC82"
              size="32"
              class="mr-2"
            ></v-icon>
            <span class="text-h5 font-weight-bold text-white">
              Mastering <span class="text-nuxt-green">Nuxt BD</span>
            </span>
          </div>
          <p
            class="text-grey-lighten-1 text-body-2 mb-6 pr-md-10"
            style="line-height: 1.6"
          >
            The ultimate resource for Bangladeshi developers to master Nuxt 4
            ecosystem. Build production-ready apps with confidence.
          </p>

          <!-- সোশ্যাল আইকন -->
          <div class="d-flex gap-2">
            <v-btn
              v-for="(social, i) in socials"
              :key="i"
              :icon="social.icon"
              variant="tonal"
              size="small"
              color="#00DC82"
              class="mr-2 social-btn"
            ></v-btn>
          </div>
        </v-col>

        <!-- কলাম ২: প্রোডাক্ট লিংকস -->
        <v-col cols="6" md="2" class="mb-8 mb-md-0">
          <h4 class="text-white font-weight-bold mb-6 text-subtitle-1">
            Product
          </h4>
          <ul class="list-none pl-0">
            <li class="mb-3">
              <a
                @click="scrollToSection('#curriculum')"
                class="footer-link cursor-pointer"
                >Curriculum</a
              >
            </li>
            <li class="mb-3">
              <a
                @click="scrollToSection('#pricing')"
                class="footer-link cursor-pointer"
                >Pricing</a
              >
            </li>
            <li class="mb-3">
              <a
                @click="scrollToSection('#faq')"
                class="footer-link cursor-pointer"
                >FAQ</a
              >
            </li>
            <li class="mb-3">
              <span class="footer-link text-grey-darken-1 cursor-not-allowed"
                >Changelog</span
              >
            </li>
          </ul>
        </v-col>

        <!-- কলাম ৩: লিগ্যাল এবং সাপোর্ট -->
        <v-col cols="6" md="2" class="mb-8 mb-md-0">
          <h4 class="text-white font-weight-bold mb-6 text-subtitle-1">
            Legal & Help
          </h4>
          <ul class="list-none pl-0">
            <li class="mb-3">
              <a href="#" class="footer-link">Terms of Service</a>
            </li>
            <li class="mb-3">
              <a href="#" class="footer-link">Privacy Policy</a>
            </li>
            <li class="mb-3">
              <a href="mailto:support@example.com" class="footer-link"
                >Contact Support</a
              >
            </li>
            <li class="mb-3">
              <div class="d-flex align-center text-grey-lighten-2 text-caption">
                <v-icon
                  icon="mdi-map-marker"
                  size="small"
                  class="mr-1"
                  color="#00DC82"
                ></v-icon>
                Dhaka, Bangladesh
              </div>
            </li>
          </ul>
        </v-col>

        <!-- কলাম ৪: নিউজলেটার / পেমেন্ট ইনফো -->
        <v-col cols="12" md="4">
          <h4 class="text-white font-weight-bold mb-4 text-subtitle-1">
            Stay Updated
          </h4>
          <p class="text-grey-lighten-2 text-caption mb-4">
            Get the latest Nuxt tips and course updates directly to your inbox.
          </p>

          <v-text-field
            v-model="email"
            placeholder="Enter your email"
            variant="outlined"
            bg-color="rgba(255,255,255,0.05)"
            color="#00DC82"
            density="compact"
            rounded="lg"
            hide-details
          >
            <template v-slot:append-inner>
              <v-btn
                size="small"
                color="#00DC82"
                variant="flat"
                class="text-black font-weight-bold"
                rounded="lg"
              >
                Join
              </v-btn>
            </template>
          </v-text-field>

          <!-- পেমেন্ট মেথড ব্যাজ -->
          <div class="mt-8">
            <p class="text-caption text-grey mb-2">We Accept</p>
            <div class="d-flex align-center gap-2">
              <v-chip size="small" variant="outlined" color="pink"
                >bKash</v-chip
              >
              <v-chip size="small" variant="outlined" color="orange"
                >Nagad</v-chip
              >
              <v-chip size="small" variant="outlined" color="blue"
                >Rocket</v-chip
              >
            </div>
          </div>
        </v-col>
      </v-row>

      <v-divider class="my-8 border-opacity-10"></v-divider>

      <!-- বটম কপিরাইট সেকশন -->
      <v-row align="center">
        <v-col cols="12" md="6" class="text-center text-md-left">
          <p class="text-caption text-grey-darken-1">
            &copy; {{ new Date().getFullYear() }} Mastering Nuxt BD. All rights
            reserved.
            <br class="d-sm-none" />
            Distribution by <span class="text-white">Your Name/Company</span>.
          </p>
        </v-col>
        <v-col cols="12" md="6" class="text-center text-md-right">
          <div
            class="d-inline-flex align-center text-caption text-grey-darken-1"
          >
            Built with
            <v-icon
              icon="mdi-heart"
              color="red"
              size="small"
              class="mx-1"
            ></v-icon>
            using Nuxt 4 & Vuetify
          </div>
        </v-col>
      </v-row>
    </v-container>
  </footer>
</template>

<style scoped>
.bg-deep-navy {
  background-color: #020420;
}

.text-nuxt-green {
  color: #00dc82 !important;
}

.border-t {
  border-top: 1px solid rgba(255, 255, 255, 0.05);
}

/* লিংক স্টাইল */
.list-none {
  list-style: none;
}

.footer-link {
  color: #94a3b8; /* text-slate-400 */
  text-decoration: none;
  font-size: 0.875rem;
  transition: color 0.3s ease;
  display: inline-block;
}

.footer-link:hover {
  color: #00dc82;
  transform: translateX(5px); /* হোভার করলে একটু ডানে সরবে */
}

/* সোশ্যাল বাটন হোভার */
.social-btn:hover {
  background-color: #00dc82 !important;
  color: #000 !important;
}
</style>
