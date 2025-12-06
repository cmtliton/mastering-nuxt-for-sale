<script setup lang="ts">
// সাধারণ প্রশ্ন ও উত্তরের লিস্ট
const faqs = [
  {
    question: "How will I receive the course?",
    answer:
      "After you submit the order request and complete the payment via bKash or Nagad, we will verify the transaction. Once verified, we will email you a secure Google Drive/Mega download link containing all the course videos and source codes (Zip file).",
  },
  {
    question: "Is this the latest version (Nuxt 4)?",
    answer:
      'Yes! This is the "Mastering Nuxt Fullstack Unleashed 2025 Edition". It covers Nuxt 4, the latest Vuetify, and modern backend techniques including AI integration.',
  },
  {
    question: "Do I need prior experience with Nuxt?",
    answer:
      "Basic knowledge of HTML, CSS, and JavaScript is required. Experience with Vue.js is helpful but not strictly necessary as the course covers fundamentals before diving into advanced topics.",
  },
  {
    question: "What is the payment process?",
    answer:
      'We accept payments via bKash and Nagad (Send Money). Simply click the "Order Now" button on your preferred package, fill out the form, and we will send you the number to send money to.',
  },
  {
    question: "Is the source code included?",
    answer:
      "Absolutely! The Essentials and Complete packages include the full source code for every project built in the course, so you can follow along or use it as a reference.",
  },
  {
    question: "Can I watch the videos offline?",
    answer:
      "Yes, since you will download the files directly to your device, you can watch them anytime, anywhere without an internet connection.",
  },
];
</script>

<template>
  <section id="faq" class="py-16 bg-deep-navy">
    <v-container>
      <!-- সেকশন হেডার -->
      <v-row justify="center" class="text-center mb-10">
        <v-col cols="12" md="8">
          <h2 class="text-h4 text-md-h3 font-weight-bold text-white mb-4">
            Frequently Asked <span class="text-nuxt-green">Questions</span>
          </h2>
          <p class="text-grey-lighten-1 text-body-1">
            Got questions? We've got answers. Here is everything you need to
            know about the course distribution.
          </p>
        </v-col>
      </v-row>

      <!-- প্রশ্ন ও উত্তরের প্যানেল -->
      <v-row justify="center">
        <v-col cols="12" md="9">
          <v-expansion-panels variant="accordion" class="custom-panels">
            <v-expansion-panel
              v-for="(faq, i) in faqs"
              :key="i"
              class="mb-4 rounded-lg border-0"
              bg-color="#0F172A"
              elevation="0"
            >
              <v-expansion-panel-title
                expand-icon="mdi-chevron-down"
                collapse-icon="mdi-chevron-up"
                class="text-white text-subtitle-1 font-weight-bold py-4"
              >
                {{ faq.question }}
              </v-expansion-panel-title>

              <v-expansion-panel-text class="text-grey-lighten-2 text-body-2">
                {{ faq.answer }}
              </v-expansion-panel-text>
            </v-expansion-panel>
          </v-expansion-panels>
        </v-col>
      </v-row>

      <!-- স্টিল কনফিউজড? (সরাসরি যোগাযোগের বাটন) -->
      <v-row justify="center" class="mt-8">
        <v-col cols="12" class="text-center">
          <p class="text-grey mb-4">Still have questions?</p>
          <v-btn
            color="#00DC82"
            variant="outlined"
            rounded="pill"
            class="text-capitalize font-weight-bold"
            prepend-icon="mdi-email-outline"
            href="mailto:assisthem23@gmail.com"
          >
            Contact Support
          </v-btn>
        </v-col>
      </v-row>
    </v-container>
  </section>
</template>

<style scoped>
.bg-deep-navy {
  background-color: #020420;
}

/* টেক্সট কালার ওভাররাইড */
.text-nuxt-green {
  color: #00dc82 !important;
}

/* কাস্টম প্যানেল স্টাইল */
.v-expansion-panel {
  border: 1px solid rgba(255, 255, 255, 0.05);
  transition: all 0.3s ease;
}

/* প্যানেল ওপেন হলে বর্ডার সবুজ হবে */
.v-expansion-panel--active {
  border-color: #00dc82;
  box-shadow: 0 0 15px rgba(0, 220, 130, 0.1) !important;
}

/* টাইটেলের আইকনের রং */
:deep(.v-expansion-panel-title__icon) {
  color: #00dc82 !important;
}
</style>
