<template>
  <!-- Main Background Wrapper -->
  <section id="preview" class="hero-wrapper position-relative overflow-hidden">
    <div class="showcase-wrapper d-flex align-center justify-center">
      <v-container>
        <!-- Header Section -->
        <v-row justify="center" class="text-center mb-10">
          <v-col cols="12" md="10">
            <h1 class="text-h3 text-md-h2 font-weight-bold mb-6 text-white">
              What you will <span class="text-green-accent-3">build</span>
            </h1>

            <h2
              class="text-h6 text-md-h5 font-weight-bold mb-4 text-grey-lighten-1"
            >
              Learn the best practices, common pitfalls to avoid, and tons of
              tips and tricks
            </h2>

            <p
              class="text-body-1 text-grey-lighten-2"
              style="max-width: 800px; margin: 0 auto"
            >
              Get to grips with building your own AI chat app, a ChatGPT clone,
              and then build a blazing-fast landing page to promote it.
            </p>
          </v-col>
        </v-row>

        <!-- Grid Section for Videos/Images -->
        <v-row justify="center" spacing="4">
          <v-col
            v-for="(item, index) in showcaseItems"
            :key="index"
            cols="12"
            md="4"
          >
            <!-- Using HTML5 Video tag for .mp4 files with Vuetify styling classes -->
            <div class="media-container elevation-10 rounded-lg">
              <!-- 
              Note: Pointing to /public folder files. 
              Ensure ai-chat-1.mp4 is in your root 'public' folder.
            -->
              <video
                class="d-block w-100 h-auto rounded-lg"
                autoplay
                loop
                muted
                playsinline
              >
                <source :src="item.src" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>
          </v-col>
        </v-row>
      </v-container>
    </div>
  </section>
</template>

<script setup>
// Assuming your files from Image 2 are inside the /public folder
const showcaseItems = [
  { src: "/ai-chat-1.mp4", alt: "Chat Interface" },
  { src: "/ai-chat-2.mp4", alt: "Story Request" },
  { src: "/ai-chat-3.mp4", alt: "Chat History" },
];
</script>

<style scoped>
/* 
  Deep dark background color matching the screenshot 
  (approx #0F172A - Slate 900) 
*/
.showcase-wrapper {
  background-color: #0b1120;
  min-height: 100vh;
  padding-top: 4rem;
  padding-bottom: 4rem;
}

/* Optional: Add a subtle glow or specific border to the videos */
.media-container {
  border: 1px solid rgba(255, 255, 255, 0.1);
  background-color: #1e293b;
  overflow: hidden;
  transition: transform 0.3s ease;
}

.media-container:hover {
  transform: translateY(-5px);
}
</style>
