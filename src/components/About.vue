<template>
  <section
    id="about"
    class="w-full py-16 sm:py-20 lg:py-24 bg-background-dark overflow-hidden"
  >
    <div class="max-w-[1400px] mx-auto px-4 sm:px-6 md:px-10 lg:px-20">
      <div
        class="relative bg-surface-dark/40 border border-border-dark
               p-6 sm:p-8 md:p-12 lg:p-16 rounded-[2.5rem]"
      >
        <!-- Glow decorativo RESPONSIVE -->
        <div
          class="absolute -top-20 -right-20
                 w-[40vw] max-w-[22rem] aspect-square
                 bg-primary/5 blur-[80px] rounded-full pointer-events-none"
        ></div>

        <!-- Layout -->
        <div
          class="relative z-10 grid grid-cols-1
                 lg:grid-cols-[minmax(0,5fr)_minmax(0,7fr)]
                 gap-10 xl:gap-20"
        >
          <!-- Image Column -->
          <div class="flex flex-col gap-8 min-w-0">
            <div class="relative group">
              <div
                class="absolute -inset-1 bg-gradient-to-tr
                       from-primary/40 to-transparent
                       rounded-[2rem] blur opacity-25
                       group-hover:opacity-40 transition duration-500"
              ></div>

              <div
                class="relative rounded-[1.8rem] overflow-hidden
                       border border-white/10 shadow-2xl
                       md:aspect-[4/5]"
              >
                <!-- src="https://lh3.googleusercontent.com/aida-public/AB6AXuBmxPxletF2K4M8MhOsfTXPgdxnHXtE_evZP1TbzW4FUumGQSYhMV5742MNQCvKwTk2XB6sOxZObckxqtGHzJd0TJ9ylp7k-3NBGGgJT2GIjAhBs57mC3NUlo45-47ZHC5nqLwxSLT8I4CrNWVYAP4o1go5bjIZYEkUcX0cmKVWf02ickpRucmaG_1Y1oeryBthUBJpnezNsPMpPXbBlo7FBnQVNBHhxDpT--PdTDOblXv156cMGm-ynVaANaofgMC9In4F7RKzhf9V" -->

                <img
                  src="/images/me.webp"
                  alt="Professional Portrait"
                  loading="lazy"
                  class="w-full h-full object-cover
                         grayscale hover:grayscale-0
                         transition-all duration-700 ease-in-out
                         scale-105 hover:scale-100"
                />
                <div
                  class="absolute inset-0 bg-gradient-to-t
                         from-background-dark/80 via-transparent to-transparent"
                ></div>
              </div>
            </div>

            <!-- Experience -->
            <div class="flex flex-col gap-4">
              <h3 class="text-white text-lg sm:text-xl font-bold flex items-center gap-3">
                <span class="w-8 h-[2px] bg-primary"></span>
                {{ content.about.experienceTitle }}
              </h3>

              <div class="flex flex-col gap-4">
                <div
                  v-for="(item, idx) in content.about.experience"
                  :key="idx"
                  class="p-4 rounded-2xl bg-white/5 border border-white/5 hover:border-primary/20 transition-all"
                >
                  <div class="flex items-center gap-2 mb-1">
                    <span v-if="item.category" class="text-xs text-slate-400">{{ item.category }}</span>
                  </div>
                  <p class="text-white font-medium">{{ item.title }}</p>
                  <p class="text-slate-500 text-sm">{{ item.description }}</p>
                  <a
                    v-if="item.certificateUrl"
                    :href="item.certificateUrl"
                    target="_blank"
                    rel="noopener"
                    class="mt-2 inline-flex items-center text-xs text-primary hover:underline"
                  >
                    Certificate
                  </a>
                </div>
              </div>
            </div>
          </div>

          <!-- Content Column -->
          <div class="flex flex-col gap-10 min-w-0">
            <div class="flex flex-col gap-4">
              <span class="text-primary font-bold tracking-[0.2em] text-sm uppercase">
                {{ content.about.sectionTitle }}
              </span>
              <h2
                class="text-white font-bold tracking-tight leading-tight
                       text-[clamp(1.75rem,4vw,3rem)]"
              >
                {{ content.about.headline }}
              </h2>
            </div>

            <div
              class="flex flex-col gap-6 text-slate-300 font-light leading-relaxed
                     text-[clamp(1rem,2.5vw,1.25rem)]"
            >
              <p v-for="(para, pidx) in content.about.paragraphs" :key="pidx">
                {{ para }}
              </p>
            </div>

            <!-- Philosophy -->
            <div class="flex flex-col gap-6">
              <h3 class="text-white text-lg sm:text-xl font-bold">
                {{ content.about.coreTitle }}
              </h3>

              <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                <div
                  v-for="(core, cidx) in content.about.core"
                  :key="cidx"
                  class="p-5 rounded-2xl bg-white/5 border border-white/5"
                >
                  <span class="material-symbols-outlined text-primary mb-3">{{ core.icon }}</span>
                  <h4 class="text-white font-bold text-sm mb-1">{{ core.title }}</h4>
                  <p class="text-slate-500 text-xs">{{ core.description }}</p>
                </div>
              </div>
            </div>

            <!-- Hobbies with Icons -->
            <div class="pt-6 border-t border-border-dark flex flex-wrap gap-3">
              <span
                v-for="(hobby, hidx) in content.about.hobbies"
                :key="hidx"
                class="px-4 py-2 rounded-full bg-surface-dark border border-border-dark text-xs text-slate-300 inline-flex items-center gap-2"
              >
                <Icon :icon="hobby.icon" class="text-slate-300" width="18" height="18" />
                <span class="text-slate-400">{{ hobby.label }}</span>
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
<script setup>
import content from '../data/content.json';
import { Icon } from '@iconify/vue';
</script>
