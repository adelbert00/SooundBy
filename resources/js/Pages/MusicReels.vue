<template>
  <Layout>
    <div id="musicreels" class="rounded-xl bg-background pt-5 text-black">
      <SectionDescription
        class="rounded-2xl border-8 border-slate-300"
        title="Music"
        description="Music section, it's a place where I showcase the songs I've produced. 
        Here, you'll find a diverse collection of tracks that reflect my passion for creating music. 
        Each song is a unique sonic journey, carefully composed and produced to inspire and captivate listeners. Explore my productions and discover the sounds that shape my musical vision."
      />
    </div>
    <div class="pt-16">
      <section class="section">
        <div class="z-50 flex flex-col items-center p-5 text-center">
          <div class="grid grid-cols-1 gap-lg md:grid-cols-1 lg:grid-cols-2">
            <div
              v-for="music in musicList"
              :key="music.title"
              class="flex flex-col items-center"
            >
              <div class="video-container w-full rounded-md">
                <iframe
                  class="sm:w-[360px] md:w-[460px] xl:w-[680px] 2xl:w-[920px]"
                  :width="music.width"
                  :height="music.height"
                  :src="music.src"
                  title="YouTube video player"
                  frameborder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowfullscreen
                  lazy="loading"
                ></iframe>
                <p
                  class="text-shadow-custom-header mt-2 font-custom text-2xl font-normal text-black"
                >
                  Produced by
                </p>
                <p
                  class="text-shadow-custom-p mt-2 font-mono text-xl font-bold text-gray-600"
                >
                  {{ music.producer }}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  </Layout>
</template>

<script setup>
import { musicList } from '../constants/music-List.ts';
import SectionDescription from '../components/SectionDescription.vue';
import Layout from '../Layouts/Layout.vue';
</script>

<style scooped>
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
