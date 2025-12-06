<script setup lang="ts">
import { ref } from "vue";

const props = defineProps({
  modelValue: Boolean, // ডায়ালগ ওপেন/ক্লোজ স্টেট
  selectedPackage: {
    type: String,
    default: "Essentials Package",
  },
  price: {
    type: String,
    default: "270",
  },
});

const emit = defineEmits(["update:modelValue"]);

// ফর্ম ডাটা
const valid = ref(false);
const loading = ref(false);
const showSuccess = ref(false);

const form = ref({
  name: "",
  email: "",
  phone: "",
  package: props.selectedPackage,
});

// ভ্যালিডেশন রুলস
const rules = {
  required: (v: string) => !!v || "This field is required",
  email: (v: string) => /.+@.+\..+/.test(v) || "E-mail must be valid",
  phone: (v: string) =>
    /^(?:\+88|01)?\d{11}$/.test(v) || "Valid BD phone number required",
};

// ফর্ম সাবমিশন ফাংশন
const submitOrder = async () => {
  if (!valid.value) return;

  loading.value = true;
  try {
    // সার্ভার API কল
    await $fetch("/api/order", {
      method: "POST",
      body: {
        ...form.value,
        package: props.selectedPackage,
        price: props.price,
      },
    });

    showSuccess.value = true;
    setTimeout(() => {
      closeDialog();
      showSuccess.value = false;
      // ফর্ম রিসেট
      form.value = {
        name: "",
        email: "",
        phone: "",
        package: props.selectedPackage,
      };
    }, 3000);
  } catch (error) {
    alert("Something went wrong. Please try again.");
  } finally {
    loading.value = false;
  }
};

const closeDialog = () => {
  emit("update:modelValue", false);
};
</script>

<template>
  <v-dialog
    :model-value="modelValue"
    @update:model-value="closeDialog"
    max-width="500"
    persistent
  >
    <v-card
      color="#0F172A"
      class="border border-opacity-25"
      style="border-color: #00dc82 !important"
    >
      <!-- সফল হলে মেসেজ দেখাবে -->
      <div v-if="showSuccess" class="pa-10 text-center">
        <v-icon
          icon="mdi-check-circle"
          color="#00DC82"
          size="60"
          class="mb-4"
        ></v-icon>
        <h3 class="text-h5 text-white font-weight-bold">Request Received!</h3>
        <p class="text-grey-lighten-1 mt-2">
          We will contact you shortly with the payment and download link via
          email.
        </p>
      </div>

      <!-- অর্ডার ফর্ম -->
      <div v-else>
        <v-card-title
          class="d-flex justify-space-between align-center pa-4 bg-deep-navy"
        >
          <span class="text-h6 text-white"
            >Get
            <span class="text-nuxt-green">{{ selectedPackage }}</span></span
          >
          <v-btn
            icon="mdi-close"
            variant="text"
            color="grey"
            @click="closeDialog"
          ></v-btn>
        </v-card-title>

        <v-card-text class="pa-6">
          <p class="mb-6 text-grey-lighten-1 text-body-2">
            Fill up the form to request the download link. Price:
            <strong class="text-nuxt-green">{{ price }} BDT</strong>
          </p>

          <v-form v-model="valid" @submit.prevent="submitOrder">
            <v-text-field
              v-model="form.name"
              label="Full Name"
              variant="outlined"
              bg-color="rgba(255,255,255,0.05)"
              color="#00DC82"
              :rules="[rules.required]"
              class="mb-2"
            ></v-text-field>

            <v-text-field
              v-model="form.email"
              label="Email Address"
              variant="outlined"
              bg-color="rgba(255,255,255,0.05)"
              color="#00DC82"
              :rules="[rules.required, rules.email]"
              class="mb-2"
            ></v-text-field>

            <v-text-field
              v-model="form.phone"
              label="Phone Number (bKash/Nagad)"
              variant="outlined"
              bg-color="rgba(255,255,255,0.05)"
              color="#00DC82"
              :rules="[rules.required, rules.phone]"
              placeholder="017xxxxxxxx"
              class="mb-4"
            ></v-text-field>

            <v-btn
              type="submit"
              block
              color="#00DC82"
              size="large"
              class="text-black font-weight-bold mt-2"
              :loading="loading"
              :disabled="!valid"
            >
              Submit Order Request
            </v-btn>
          </v-form>
        </v-card-text>
      </div>
    </v-card>
  </v-dialog>
</template>

<style scoped>
.bg-deep-navy {
  background-color: #020420;
}
</style>
