<template>
  <Layout>
    <div id="audio" class="rounded-xl bg-background">
      <SectionDescription
        class="rounded-2xl border-8 border-slate-300"
        title="Audio Sections"
        description="Below are various sections containing different types of audio players including music scores, sound effects, foley examples, and percussion examples. Explore each section to find different types of audio content."
      />
    </div>

    <div class="pt-10">
      <section class="section">
        <div class="grid md:grid-cols-2 lg:grid-cols-4">
          <div class="z-50 flex flex-col items-center text-center">
            <h1
              class="text-shadow-custom-header pb-10 font-custom text-5xl font-bold italic"
            >
              Music
              <br />
              Scores
            </h1>
            <div class="grid-cols-1 pb-10 sm:grid-cols-2 md:grid-cols-3">
              <div v-for="track in musicScores" :key="track.src">
                <audio
                  controls
                  class="audio-player audio md:w-[225px] xl:w-[320px]"
                >
                  <source :src="track.src" type="audio/mpeg" />
                </audio>
                <p
                  class="pt-10 font-mono text-xl font-bold text-black md:text-lg xl:text-2xl"
                >
                  {{ track.title }}
                </p>
                <p
                  class="pb-10 font-mono text-xl font-semibold text-gray-600 md:text-lg xl:text-xl"
                >
                  {{ track.details }}
                </p>
              </div>
            </div>
          </div>

          <div class="z-50 flex flex-col items-center text-center">
            <h1
              class="text-shadow-custom-header font-custom text-5xl font-semibold italic"
            >
              Sound
              <br />
              Effects
            </h1>
            <div class="grid-cols-1 pt-10 sm:grid-cols-2 md:grid-cols-3">
              <div
                class=""
                v-for="sfx in soundEffects"
                :key="sfx.src"
                loading="lazy"
              >
                <audio
                  controls
                  class="audio-player audio md:w-[225px] xl:w-[320px]"
                  loading="lazy"
                >
                  <source :src="sfx.src" :type="sfx.type" />
                </audio>
                <p
                  class="pt-10 font-mono text-xl font-bold text-black md:text-lg xl:text-2xl"
                >
                  {{ sfx.title }}
                </p>
                <p
                  class="pb-10 font-mono text-xl font-semibold text-gray-600 md:text-lg xl:text-xl"
                >
                  {{ sfx.details }}
                </p>
              </div>
            </div>
          </div>

          <div class="z-50 flex flex-col items-center text-center">
            <h1
              class="text-shadow-custom-header font-custom text-5xl font-semibold italic"
            >
              Foley
              <br />
              Examples
            </h1>
            <div class="grid-cols-1 pt-10 sm:grid-cols-2 md:grid-cols-3">
              <div class="" v-for="foley in foleyExamples" :key="foley.src">
                <audio
                  controls
                  class="audio-player audio md:w-[225px] xl:w-[320px]"
                  lazy="loading"
                >
                  <source :src="foley.src" :type="foley.type" />
                </audio>
                <p
                  class="pt-10 font-mono text-xl font-bold text-black md:text-lg xl:text-2xl"
                >
                  {{ foley.title }}
                </p>
                <p
                  class="pb-10 font-mono text-xl font-semibold text-gray-600 md:text-lg xl:text-xl"
                >
                  {{ foley.details }}
                </p>
              </div>
            </div>
          </div>

          <div class="z-50 flex flex-col items-center text-center">
            <h1
              class="text-shadow-custom-header font-custom text-5xl font-semibold italic"
            >
              Percs
              <br />
              Examples
            </h1>
            <div class="grid-cols-1 pt-10 sm:grid-cols-2 md:grid-cols-3">
              <div
                class=""
                v-for="perc in percExamples"
                :key="perc.src"
                loading="lazy"
              >
                <audio
                  controls
                  class="audio-player audio md:w-[225px] xl:w-[320px]"
                  loading="lazy"
                >
                  <source :src="perc.src" :type="perc.type" />
                </audio>
                <p
                  class="text-shadow-custom-header pt-10 font-mono text-xl font-bold text-black md:text-lg xl:text-2xl"
                >
                  {{ perc.title }}
                </p>
                <p
                  class="text-shadow-custom-p pb-10 font-mono text-xl font-semibold text-gray-600 md:text-lg xl:text-xl"
                >
                  {{ perc.details }}
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
import { musicScores } from '../constants/audio-export.ts';
import { soundEffects } from '../constants/audio-export.ts';
import { foleyExamples } from '../constants/audio-export.ts';
import { percExamples } from '../constants/audio-export.ts';
import SectionDescription from '../components/SectionDescription.vue';
import Layout from '../Layouts/Layout.vue';
</script>
