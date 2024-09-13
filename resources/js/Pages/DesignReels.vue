<template>
  <Layout>
    <div class="rounded-xl bg-background pt-5 text-black">
      <SectionDescription
        class="rounded-2xl border-8 border-slate-300"
        title="Sound Design Reels"
        description="Explore the Sound Design Reels section, where I showcase and describe my sound design creations. 
        Here, you’ll find a collection of my best work, highlighting innovative soundscapes, detailed audio effects, and unique sound compositions. 
        Each reel is a testament to my passion and expertise in crafting immersive auditory experiences."
      />
    </div>
    <div class="pt-20">
      <section id="reels" class="section">
        <div class="z-50 flex flex-col items-center p-5 text-center">
          <div class="grid gap-10 md:grid-cols-2">
            <div
              v-for="reel in reels"
              :key="reel.title"
              class="flex flex-col items-center"
            >
              <div class="video-container w-full rounded-md">
                <iframe
                  class="sm:w-[360px] md:w-[460px] xl:w-[680px] 2xl:w-[920px]"
                  :width="reel.width"
                  :height="reel.height"
                  :src="reel.src"
                  title="YouTube video player"
                  frameborder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowfullscreen
                ></iframe>
                <p
                  class="text-shadow-custom-header mt-2 font-custom text-2xl font-normal text-black"
                >
                  {{ reel.title }}
                </p>
                <p
                  class="text-shadow-custom-p mt-2 font-mono text-xl font-bold text-gray-600"
                >
                  {{ reel.subtitle }}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  </Layout>
</template>

<script setup lang="ts">
import { reels } from '../constants/design-reels.ts';
import SectionDescription from '../components/SectionDescription.vue';
import Layout from '../Layouts/Layout.vue';
</script>

<style scoped>
.video-container {
  position: relative;
  padding-bottom: 56.25%; /* 16:9 Aspect Ratio */
  height: 0;
}

.video-container iframe {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}
</style>
