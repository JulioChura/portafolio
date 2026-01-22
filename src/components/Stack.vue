<template>
  <section class="w-full max-w-[1400px] px-6 md:px-20 lg:px-10 py-32" id="stack">
    <div class="flex flex-col gap-2 mb-12">
      <h2 class="text-white text-4xl font-bold tracking-tight">Core Stack</h2>
      <p class="text-slate-400 text-lg">The tools I use to bring ideas to life</p>
    </div>
    
    <div class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
      <div 
        v-for="tech in technologies" 
        :key="tech.name"
        class="flex flex-col gap-4 rounded-2xl border border-border-dark bg-surface-dark p-8 items-start custom-glow transition-all hover:scale-[1.02]"
      >
        <Icon :icon="tech.icon" class="w-10 h-10 md:w-12 md:h-12 opacity-80 hover:opacity-100 transition-opacity" :title="tech.name" />
        <h3 class="text-white text-lg font-bold">{{ tech.name }}</h3>
      </div>
    </div>
  </section>
</template>

<script setup>
import { Icon } from '@iconify/vue';

// Core technologies requested, with Iconify icons
const technologies = [
  { name: 'Vue', icon: 'logos:vue' },
  { name: 'React', icon: 'logos:react' },
  { name: 'PostgreSQL', icon: 'logos:postgresql' },
  { name: 'Python', icon: 'logos:python' },
  { name: 'Django', icon: 'skill-icons:django' },
  { name: 'JavaScript', icon: 'logos:javascript' },
  { name: 'TypeScript', icon: 'logos:typescript-icon' },
  { name: 'Vite', icon: 'logos:vitejs' },
  { name: 'Java', icon: 'logos:java' },
  { name: 'TailwindCSS', icon: 'logos:tailwindcss-icon' }
];
</script>
