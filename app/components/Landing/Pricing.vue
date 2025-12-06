<script setup lang="ts">
import { ref } from "vue";

// প্যাকেজ ডাটা স্ট্রাকচার
const plans = [
  {
    name: "Basic Package",
    price: "199",
    description: "For beginners starting with Nuxt.",
    isPopular: false,
    features: [
      "Access to Basic Video Lessons",
      "Fundamental Nuxt Concepts",
      "Simple Project Build",
      "Community Support",
      "Lifetime Access",
    ],
  },
  {
    name: "Essentials Package",
    price: "270",
    description: "Perfect for intermediate developers.",
    isPopular: false,
    features: [
      "Everything in Basic",
      "Full Source Code Access",
      "Intermediate Nuxt Concepts",
      "Supabase Integration",
      "Auth Implementation",
      "Priority Email Support",
    ],
  },
  {
    name: "Complete Package",
    price: "320",
    description: "The ultimate full-stack mastery kit.",
    isPopular: true, // এটি হাইলাইট করা হবে
    features: [
      "Everything in Essentials",
      "Advanced Backend Patterns",
      "Payment Gateway Integration",
      "Deployment Masterclass",
      "1-on-1 Code Review (1 Session)",
      "Future Updates Included",
    ],
  },
];

// অর্ডার ডায়ালগ স্টেট ম্যানেজমেন্ট
const showOrderDialog = ref(false);
const selectedPlan = ref({ name: "", price: "" });

// বাটন ক্লিক হ্যান্ডলার
const openOrderModal = (plan: any) => {
  selectedPlan.value = {
    name: plan.name,
    price: plan.price,
  };
  showOrderDialog.value = true;
};
</script>

<template>
  <section id="pricing" class="pricing-wrapper py-16 position-relative">
    <!-- ব্যাকগ্রাউন্ড ডেকোরেশন -->
    <div class="glow-bg"></div>

    <v-container class="position-relative z-index-1">
      <!-- হেডার -->
      <v-row justify="center" class="text-center mb-12">
        <v-col cols="12" md="8">
          <h2 class="text-h4 text-md-h3 font-weight-bold text-white mb-4">
            Simple, Transparent <span class="text-nuxt-green">Pricing</span>
          </h2>
          <p class="text-grey-lighten-1 text-body-1">
            Invest in your career with the most comprehensive Nuxt resource in
            Bangladesh. One-time payment, lifetime access.
          </p>
        </v-col>
      </v-row>

      <!-- প্রাইসিং কার্ড গ্রিড -->
      <v-row justify="center" align="stretch">
        <v-col
          v-for="(plan, index) in plans"
          :key="index"
          cols="12"
          sm="6"
          md="4"
        >
          <v-card
            class="h-100 d-flex flex-column pt-8 pb-6 px-6 position-relative transition-swing"
            :class="plan.isPopular ? 'popular-card' : 'standard-card'"
            rounded="xl"
            elevation="10"
          >
            <!-- Best Value ব্যাজ (শুধুমাত্র Complete প্যাকেজের জন্য) -->
            <div
              v-if="plan.isPopular"
              class="popular-badge text-caption font-weight-bold mt-4"
            >
              BEST VALUE
            </div>

            <!-- কার্ড হেডার -->
            <div class="mb-6">
              <h3 class="text-h5 font-weight-bold text-white mb-2">
                {{ plan.name }}
              </h3>
              <p class="text-grey-lighten-1 text-caption mb-4">
                {{ plan.description }}
              </p>

              <div class="d-flex align-end">
                <span class="text-h3 font-weight-black text-white">{{
                  plan.price
                }}</span>
                <span class="text-h6 text-grey mb-1 ml-1">BDT</span>
              </div>
            </div>

            <v-divider class="mb-6 border-opacity-25"></v-divider>

            <!-- ফিচার লিস্ট -->
            <v-list bg-color="transparent" class="flex-grow-1 pa-0 mb-8">
              <v-list-item
                v-for="(feature, i) in plan.features"
                :key="i"
                class="px-0 min-h-0 mb-2"
              >
                <template v-slot:prepend>
                  <v-icon
                    :color="plan.isPopular ? '#00DC82' : 'grey-lighten-1'"
                    icon="mdi-check-circle"
                    size="small"
                  ></v-icon>
                </template>
                <v-list-item-title
                  class="text-body-2 text-grey-lighten-2 ml-2 text-wrap"
                >
                  {{ feature }}
                </v-list-item-title>
              </v-list-item>
            </v-list>

            <!-- অ্যাকশন বাটন -->
            <v-btn
              block
              size="x-large"
              rounded="lg"
              :color="plan.isPopular ? '#00DC82' : 'white'"
              :variant="plan.isPopular ? 'flat' : 'outlined'"
              :class="[
                'font-weight-bold text-capitalize',
                plan.isPopular ? 'text-black glow-btn' : 'text-white',
              ]"
              @click="openOrderModal(plan)"
            >
              Buy {{ plan.name }}
            </v-btn>
          </v-card>
        </v-col>
      </v-row>
    </v-container>

    <!-- রিইউজেবল অর্ডার ডায়ালগ -->
    <CommonOrderDialog
      v-model="showOrderDialog"
      :selected-package="selectedPlan.name"
      :price="selectedPlan.price"
    />
  </section>
</template>

<style scoped>
.pricing-wrapper {
  background-color: #020420;
}

/* স্ট্যান্ডার্ড কার্ড স্টাইল */
.standard-card {
  background-color: #0f172a !important;
  border: 1px solid rgba(255, 255, 255, 0.05);
}

/* পপুলার কার্ড স্টাইল (Complete Package) */
.popular-card {
  background-color: #0f172a !important; /* অথবা একটু গাঢ় শেড */
  border: 2px solid #00dc82; /* গ্রিন বর্ডার */
  box-shadow: 0 0 30px rgba(0, 220, 130, 0.15) !important;
  transform: scale(1.02); /* একটু বড় দেখাবে */
  z-index: 2;
}

/* হোভার ইফেক্ট */
.v-card:hover {
  transform: translateY(-5px);
  border-color: #00dc82;
}
.popular-card:hover {
  transform: scale(1.02) translateY(-5px);
}

/* Best Value ব্যাজ */
.popular-badge {
  position: absolute;
  top: -12px;
  right: 50%;
  transform: translateX(50%);
  background-color: #00dc82;
  color: #000;
  padding: 4px 12px;
  border-radius: 20px;
  text-transform: uppercase;
  letter-spacing: 1px;
  box-shadow: 0 4px 10px rgba(0, 220, 130, 0.4);
}

/* বাটন গ্লো */
.glow-btn {
  box-shadow: 0 0 15px rgba(0, 220, 130, 0.4);
}

/* ব্যাকগ্রাউন্ড গ্লো ইফেক্ট */
.glow-bg {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 100%;
  height: 100%;
  background: radial-gradient(
    circle at center,
    rgba(0, 220, 130, 0.05) 0%,
    transparent 70%
  );
  pointer-events: none;
}

.z-index-1 {
  z-index: 1;
}

/* মোবাইল রেসপন্সিভনেস */
@media (max-width: 600px) {
  .popular-card {
    transform: scale(1);
    margin-top: 20px;
    margin-bottom: 20px;
  }
}
</style>
